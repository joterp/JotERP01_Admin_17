import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDateFormats } from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomNgxDatetimeAdapter } from 'src/app/pages/Survey_Certificate/CustomNgxDatetimeAdapter';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { AdminCompaniesAddTimezoneComponent } from './admin-companies-add-timezone/admin-companies-add-timezone.component';


const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "DD MMM YYYY HH:mm",
  },
  display: {
    dateInput: "DD MMM YYYY HH:mm",
    monthYearLabel: "MMM YYYY HH:mm",
    dateA11yLabel: "DD MMM YYYY HH:mm",
    monthYearA11yLabel: "MMMM YYYY HH:mm",
  },

}

@Component({
  selector: 'fury-admin-companies-add',
  templateUrl: './admin-companies-add.component.html',
  styleUrls: ['./admin-companies-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: CustomNgxDatetimeAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
})
export class AdminCompaniesAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  selectedFileName: string = '';
  // IsEdit: boolean;
  newCountryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AdminCompaniesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newCountryFormGroup = this._fb.group({
      Company_Name: ["", Validators.required],
      Country_Short_Name: ["", Validators.required],
      Company_Type: ["", Validators.required],
      Company_Reg_No: ["",Validators.required],
      date_Incorporation: [""],
      Country: ["", Validators.required],
      City: ["",Validators.required],
      Currency: [""],
      Parent_Company: [""],
      Company_Time_Zone: ["",Validators.required],
      Working_hours_from: [""],
      Working_hours_to :[""],
      PIN_Code :[""],
      Email_1:[""],
      Email_2:[""],
      Phone_Number_1:[""],
      Phone_Number_2:[""],
      Phone_Number_3:[""],
      Fax_No_1:[""],
      Fax_No_2:[""],
      Show_In_HRM:[""],
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }

  
  }
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }
   	
  CloseModal() {
    this.dialogRef.close(true);
  }

  saveTimezone(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AdminCompaniesAddTimezoneComponent, {
      width: '55%',
      maxHeight: '90%',
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clearFilter();
      }
    });
  }

//   SaveCategory(addMore: boolean = false) {
//     this.ErrorMessage = "";
//     if (this.submit) {
//       return;
//     }
//     this.submit = true;
//     var data: object = {};
//     for (const elem in this.newCountryFormGroup.value) {
//       data[elem] = this.newCountryFormGroup.value[elem];
//     }
  
//     this.submit = false;
//     if (this.IsEdit) {
//       // Assuming you have a staticId variable for the static ID
//       this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
//     } else {
//       this.SaveInsert(data, "v1/RankCategory",addMore);
//     }
//   }
  
//   SaveInsert(data: object, path: string, addMore: boolean = false) {
//     this.api.PostDataService(path, data)
//       .subscribe(
//         (res: object) => {
//           this.submit = false;
//           console.log('Response----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>:', res);
//           if (Number.isInteger(res)) {
//             this.common.ShowMessage(
//               "Category Added Successfully ",
//               "notify-success",
//               3000
//             );
//           } else {
//             this.common.ShowMessage(res["Message"], "notify-error", 6000);
//           }
//         },
//         (error) => {
//           this.submit = false;
//           console.error('Error:', error);
//           let errorMessage = error["Message"] || "Category Name is already exist" || "Unknown error";
//           this.common.ShowMessage(errorMessage, "notify-error", 6000);
//         }
//       );
// }


  
//   SaveUpdate(data: object, path: string, id: number ,addMore: boolean = false) {
//     // Assuming you have a key for the static ID, like 'id'
//     data['id'] = id;
//     this.api.PutDataService(path, data).subscribe(
//       (res: any) => {
//         this.submit = false;
//         if (Number.isInteger(res)) {
//           if (addMore) {
//             this.newCountryFormGroup.reset();
//             this.IsEdit = false;
//             this.common.callComponentMethod();
//           } else {
//             this.dialogRef.close(true);
//           }
//         } else {
//           this.common.ShowMessage(res.body['error'], "notify-error", 6000);
//         }
//       },
//       (error) => {
//         console.log(error['error']['error'], "errorrrrrrrrrrrrrrrr")
//         this.submit = false;
//         this.common.ShowMessage(error['error']['error']?'Mandatory fields cannot be empty':'Mandatory fields cannot be empty', "notify-error", 6000);
//       }
//     );
//   }
//   InsertFormValues() {
//     var fc: object = this.newCountryFormGroup.controls;
//     var data = this.EditData;

//     fc["rankCategory"].patchValue(data["rankCategory"]);
   
//   }


}
