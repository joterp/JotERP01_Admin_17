import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-employee-salary-structure-add',
  templateUrl: './hrm-employee-salary-structure-add.component.html',
  styleUrl: './hrm-employee-salary-structure-add.component.scss'
})
export class HrmEmployeeSalaryStructureAddComponent {

  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newSalaryStructureFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<HrmEmployeeSalaryStructureAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newSalaryStructureFormGroup = this._fb.group({
      Salary_Component: ["", Validators.required],
      Parent: ["", Validators.required],
      type_of_parent: ["", Validators.required],
      AutoClaculation:[""],
      Calculated_Component: [""],
      Reamrk: [""],
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
