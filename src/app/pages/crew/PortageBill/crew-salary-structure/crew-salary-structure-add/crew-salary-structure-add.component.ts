import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-salary-structure-add',
  templateUrl: './crew-salary-structure-add.component.html',
  styleUrls: ['./crew-salary-structure-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWSalaryStructureAddComponent implements OnInit {

  modeltitle: string = "";
  modeltype: string;

  SalaryStrucureAddFormGroup: UntypedFormGroup
  constructor(private dialogRef: MatDialogRef<CREWSalaryStructureAddComponent>, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.SalaryStrucureAddFormGroup = this.fb.group({
      txtSalary_Component: ['', Validators.required],
      drpParent: [''],
      radioMode_Of_Payment: ['2', Validators.required],
      radioType_Of_Payment:['1', Validators.required],
      radioHide_From_Master:['1', Validators.required],
      radioRate:['0', Validators.required],
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
