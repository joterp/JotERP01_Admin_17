import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-lib-drc-acc-categorisation-add',
  templateUrl: './accounts-lib-drc-acc-categorisation-add.component.html',
  styleUrl: './accounts-lib-drc-acc-categorisation-add.component.scss'
})
export class AccountsLibDrcAccCategorisationAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newGroupFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsLibDrcAccCategorisationAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newGroupFormGroup = this._fb.group({
      Parent: ["", Validators.required],
      Group_Name: ["", Validators.required],
      
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
//     for (const elem in this.newGroupFormGroup.value) {
//       data[elem] = this.newGroupFormGroup.value[elem];
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
