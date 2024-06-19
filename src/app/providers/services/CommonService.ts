import { ElementRef, Injectable, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as moment from "moment";
import { Subject } from "rxjs";
import * as XLSX from "xlsx";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  
  callComponentMethod() {
    this.componentMethodCallSource.next();
  }
  @ViewChild("TABLE") table: ElementRef;
  constructor(private snackbar: MatSnackBar) {}

  ShowMessage(msg: string, cls: string, duration: number) {
    this.snackbar.open(msg, "", {
      duration: duration,
      horizontalPosition: "right",
      verticalPosition: "bottom",
      panelClass: [cls],
    });
  }

  ExportExcel(fileName = "export", exportData) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportData);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    for (var i in ws) {
      if (typeof ws[i] != "object") continue;
      let cell = XLSX.utils.decode_cell(i);

      ws[i].s = {
        // styling for all cells
        font: {
          name: "arial",
        },
        alignment: {
          vertical: "center",
          horizontal: "center",
          wrapText: "1", // any truthy value here
        },
        border: {
          right: {
            style: "thin",
            color: "000000",
          },
          left: {
            style: "thin",
            color: "000000",
          },
        },
      };

      if (cell.r == 0) {
        // first row
        ws[i].s.border.bottom = {
          // bottom border
          style: "thin",
          color: "000000",
        };
      }

      if (cell.r % 2) {
        ws[i].s.fill = {
          patternType: "solid",
          fgColor: { rgb: "b2b2b2" },
          bgColor: { rgb: "b2b2b2" },
        };
      }
    }

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Log REF",
          "Delivery Ref",
          "Type",
          "Vessel",
          "Vendor",
          "Received from",
          "Received Date",
          "Description",
          "Principal ref",
          "Qty",
          "Incoming AWB",
          "Follow Up",
          "Destination",
          "Delivery Date",
          "Remarks",
          "Status",
        ],
      ],
      { origin: "A1" }
    );

    ws["!cols"] = this.fitToColumn([
      [{ width: 20 }, { width: 50 }, { width: 20 }, { width: 20 }],
    ]);
    /* save to file */
    XLSX.writeFile(wb, `${fileName}-${moment().format("DDMMMYYYY")}.xlsx`);
  }
  fitToColumn(arrayOfArray) {
    // get maximum character of each column
    console.log(arrayOfArray);
    return arrayOfArray[0].map((a, i) => ({
      wch: Math.max(
        ...arrayOfArray.map((a2) => (a2[i] ? a2[i].toString().length : 0))
      ),
    }));
  }
  SampleExcel() {
    const wb = XLSX.utils.book_new();

    // STEP 2: Create data rows and styles
    let row = [
      { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
      {
        v: "bold & color",
        t: "s",
        s: { font: { bold: true, color: { rgb: "FF0000" } } },
      },
      { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
      { v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
    ];

    // STEP 3: Create worksheet with rows; Add worksheet to workbook
    const ws = XLSX.utils.aoa_to_sheet([row]);
    XLSX.utils.book_append_sheet(wb, ws, "readme demo");

    // STEP 4: Write Excel file to browser
    XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");
  }
  AlphaNumericPattern(value: any) {
    var pattern = /[0-9A-Za-z ]/;
    var val = "";
    if (value) {
      for (var i = 0; i < value.length; i++) {
        if (value[i].match(pattern)) {
          val = val + value[i];
        }
      }
    }
    return val;
  }

  SpecialAlphaNumericPattern(value: any) {
    var pattern = /[0-9A-Za-z -]/;
    var val = "";
    if (value) {
      for (var i = 0; i < value.length; i++) {
        if (value[i].match(pattern)) {
          val = val + value[i];
        }
      }
    }
    return val;
  }

  NumericPattern(value: any) {
    var pattern = /[0-9]/;
    var val = "";
    if (value) {
      for (var i = 0; i < value.length; i++) {
        if (value[i].match(pattern)) {
          val = val + value[i];
        }
      }
    }
    return val;
  }
  getSettingDetail(module, settingCode) {
    const settings = localStorage.getItem("settings");
    const settinsArr = settings ? JSON.parse(settings) : null;
    if (settinsArr) {
      const setting = settinsArr.find(
        (item) =>
          item["MODULE"] === module && item["SHORT_CODE"] === settingCode
      );
      return setting && setting["SETTING_VALUE"] == 1 ? true : false;
    }
    return 0;
  }
  getSettingValue(module, settingCode) {
    const settings = localStorage.getItem("settings");
    const settinsArr = settings ? JSON.parse(settings) : null;
    if (settinsArr) {
      const setting = settinsArr.find(
        (item) =>
          item["MODULE"] === module && item["SHORT_CODE"] === settingCode
      );
      return setting ? setting["SETTING_VALUE"] : false;
    }
    return 0;
  }
  ParseServiceData(data: Array<object>, ids: number[] = []) {
    var ser = JSON.parse(JSON.stringify(data));
    var p = ser.filter((a: object) => a["parentServiceID"]);
    var n_p = ser.filter((b: object) => !b["parentServiceID"]);

    n_p.forEach((service: object) => {
      service["children"] = [];
      service["expandable"] = true;
      service["selected"] = false;
      p.forEach((child: object) => {
        child["children"] = [];
        child["expandable"] = true;
        child["selected"] = false;
        if (service["serviceID"] == child["parentServiceID"]) {
          child["parent_connected"] = true;
          service["children"].push(child);
        }
      });
    });

    n_p.forEach((service: object) => {
      service["children"].forEach((child: object) => {
        child["children"] = [];
        child["expandable"] = true;
        child["selected"] = false;
        p.filter((a: object) => !a["parent_connected"]).forEach(
          (l2: object) => {
            if (l2["parentServiceID"] == child["serviceID"]) {
              l2["parent_connected"] = true;
              child["children"].push(l2);
            }
          }
        );
      });
    });

    n_p.forEach((service: object) => {
      service["children"].forEach((child: object) => {
        child["children"].forEach((child_2: object) => {
          child_2["children"] = [];
          child_2["expandable"] = true;
          child_2["selected"] = false;
          p.filter((a: object) => !a["parent_connected"]).forEach(
            (l2: object) => {
              if (l2["parentServiceID"] == child_2["serviceID"]) {
                l2["parent_connected"] = true;
                child_2["children"].push(l2);
              }
            }
          );
        });
      });
    });

    n_p.forEach((service: object) => {
      service["children"].forEach((child: object) => {
        child["children"].forEach((child_2: object) => {
          child_2["children"].forEach((child_3: object) => {
            child_3["children"] = [];
            child_3["expandable"] = true;
            child_3["selected"] = false;
            p.filter((a: object) => !a["parent_connected"]).forEach(
              (l2: object) => {
                if (l2["parentServiceID"] == child_3["serviceID"]) {
                  l2["parent_connected"] = true;
                  child_3["children"].push(l2);
                }
              }
            );
          });
        });
      });
    });

    n_p.forEach((service: object) => {
      service["children"].forEach((child: object) => {
        child["children"].forEach((child_2: object) => {
          child_2["children"].forEach((child_3: object) => {
            child_3["children"].forEach((child_4: object) => {
              child_4["children"] = [];
              child_4["expandable"] = true;
              child_4["selected"] = false;
              p.filter((a: object) => !a["parent_connected"]).forEach(
                (l2: object) => {
                  if (l2["parentServiceID"] == child_4["serviceID"]) {
                    l2["parent_connected"] = true;
                    child_4["children"].push(l2);
                  }
                }
              );
            });
          });
        });
      });
    });

    return n_p;
  }
}
