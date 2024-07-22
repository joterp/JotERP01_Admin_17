import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-leaves-standards-add',
  templateUrl: './hrm-leaves-standards-add.component.html',
  styleUrl: './hrm-leaves-standards-add.component.scss'
})
export class HrmLeavesStandardsAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  leavesStdFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<HrmLeavesStandardsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.leavesStdFormGroup = this._fb.group({
      Company: ["", Validators.required],
      Leaves_Type: ["", Validators.required],
      Standards_No_of_days: ["", Validators.required],
      
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
