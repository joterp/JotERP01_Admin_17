import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-medical-expenses-model-add',
  templateUrl: './crew-medical-expenses-model-add.component.html',
  styleUrls: ['./crew-medical-expenses-model-add.component.scss']
})
export class CREWMedicalExpensesModelAddComponent implements OnInit {
  IsEdit: boolean;
  newMedicalExpensesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWMedicalExpensesModelAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newMedicalExpensesFormGroup = this._fb.group({
        Date_Case: [""],
        Date_Cost: ["", Validators.required],
        drpCost_Type: ["", Validators.required],
        drpLocal_Currency: ["", Validators.required],
        txtLocal_Amount: ["", Validators.required],
        txtExchange_Rate: ["", Validators.required],
        txtUSD_Amount: ["", Validators.required],
        txtCost_Details: ["", Validators.required],
       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
