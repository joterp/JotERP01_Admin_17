import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
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
  selector: 'fury-accounts-lib-debit-credit-cards-add',
  templateUrl: './accounts-lib-debit-credit-cards-add.component.html',
  styleUrls: ['./accounts-lib-debit-credit-cards-add.component.scss'],
  providers: [
    {
      provide: NgxMatDateAdapter,
      useClass: CustomNgxDatetimeAdapter,
      deps: [MAT_DATE_LOCALE, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS },
  ],
})
export class AccountsLibDebitCreditCardsAddComponent {
 // IsEdit: boolean;
  // [x: string]: any;
  // newCardFormGroup: UntypedFormGroup;
  // ErrorMessage: string = "";
  // IsEdit: boolean = false;
  // submit: boolean = false;
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newCardFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsLibDebitCreditCardsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newCardFormGroup = this._fb.group({
      Card: ["", Validators.required],
      valid_up_to: ["", Validators.required],
      Card_Holder_Name:["", Validators.required],
      Card_Type: ["", Validators.required],
      Issued_By: ["", Validators.required],

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
//   SaveCategory(addMore: boolean = false) {
//     this.ErrorMessage = "";
//     if (this.submit) {
//       return;
//     }
//     this.submit = true;
//     var data: object = {};
//     for (const elem in this.newCardFormGroup.value) {
//       data[elem] = this.newCardFormGroup.value[elem];
//     }
  
//     this.submit = false;
//     if (this.IsEdit) {
//       // Assuming you have a staticId variable for the static ID
//       this.SaveUpdate(data, "v1/RankCategory",this.EditData.id, addMore);
//     } else {
//       this.SaveInsert(data, "v1/RankCategory",addMore);
//     }
//   }

}
