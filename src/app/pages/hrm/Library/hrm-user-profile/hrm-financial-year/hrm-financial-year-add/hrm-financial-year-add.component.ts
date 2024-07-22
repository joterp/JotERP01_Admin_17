import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { NGX_MAT_DATE_FORMATS, NgxMatDateAdapter, NgxMatDateFormats } from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomNgxDatetimeAdapter } from 'src/app/pages/Survey_Certificate/CustomNgxDatetimeAdapter';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';

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
  selector: 'fury-hrm-financial-year-add',
  templateUrl: './hrm-financial-year-add.component.html',
  styleUrl: './hrm-financial-year-add.component.scss',
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: CustomNgxDatetimeAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
     
})
export class HrmFinancialYearAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newIntQuesCategoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<HrmFinancialYearAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newIntQuesCategoryFormGroup = this._fb.group({
      category_NAME: ["", Validators.required],
      Start_date:["", Validators.required],
      end_date:["", Validators.required],
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  // SaveQueCategory(addMore: boolean = false) {
  //   this.ErrorMessage = "";
  //   if (this.submit) {
  //     return;
  //   }
  //   this.submit = true;
  //   var data: object = {};
  //   for (const elem in this.newIntQuesCategoryFormGroup.value) {
  //     data[elem] = this.newIntQuesCategoryFormGroup.value[elem];
  //   }
  
  //   this.submit = false;
  //   if (this.IsEdit) {
  //     // Assuming you have a staticId variable for the static ID
  //     this.SaveUpdate(data, "v1/CrewInterviewQuestionsCategory",this.EditData.id, addMore);
  //   } else {
  //     this.SaveInsert(data, "v1/CrewInterviewQuestionsCategory",addMore);
  //   }
  // }
  
  // SaveInsert(data: object, path: string, addMore: boolean = false) {
  //   this.api.PostDataService(path, data)
  //     .subscribe(
  //       (res: object) => {
  //         this.submit = false;
  //         console.log('Response----------------->>>>>>>>>>>>>>>>>>>>>>>>>>>:', res);
  //         if (Number.isInteger(res)) {
  //           this.common.ShowMessage(
  //             "Category Added Successfully ",
  //             "notify-success",
  //             3000
  //           );
  //         } else {
  //           this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //         }
  //       },
  //       (error) => {
  //         this.submit = false;
  //         console.error('Error:', error);
  //         this.common.ShowMessage(
  //           "Category Name is already exist"  || "Unknown error",
  //           "notify-error",
  //           6000
  //         );
  //       }
  //     );
  // }
  
  
  // SaveUpdate(data: object, path: string, id:number, addMore: boolean = false) {
  //   // Assuming you have a key for the static ID, like 'id'
  //   data['id'] = id ;
  //   this.api.PutDataService(path, data).subscribe(
  //     (res: any) => {
  //       this.submit = false;
  //       if (Number.isInteger(res)) {
  //         if (addMore) {
  //           this.newIntQuesCategoryFormGroup.reset();
  //           this.IsEdit = false;
  //           this.common.callComponentMethod();
  //         } else {
  //           this.dialogRef.close(true);
  //         }
  //         this.common.ShowMessage('Category updated successfully', "notify-success", 6000);
  //       } else {
  //         this.common.ShowMessage(res.body['error'], "notify-error", 6000);
  //       }
  //     },
  //     (error) => {
  //       console.log(error['error']['error'], "errorrrrrrrrrrrrrrrr")
  //       this.submit = false;
  //       this.common.ShowMessage(error['error']['error']?'Mandatory fields cannot be empty':'Mandatory fields cannot be empty', "notify-error", 6000);
  //     }
  //   );
  // }
  // InsertFormValues() {
    // var fc: object = this.newIntQuesCategoryFormGroup.controls;
    // var data = this.EditData;

    // fc["category_NAME"].patchValue(data["category_NAME"]);
   
  // }

}
