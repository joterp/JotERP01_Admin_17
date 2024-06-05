import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-department-add',
  templateUrl: './purc-department-add.component.html',
  styleUrls: ['./purc-department-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCDepartmentAddComponent implements OnInit {
  IsEdit: boolean;
  departmentFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<PURCDepartmentAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.departmentFormGroup = this._fb.group({
      txtDepartment: ["", Validators.required],
      txtDept_Short_Code: ["", Validators.required],
      drpForm_Type: [""],
      drpAC_Classification: [""],
    });
  }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
