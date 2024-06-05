import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-template-variable-add-modal',
  templateUrl: './crew-template-variable-add-modal.component.html',
  styleUrls: ['./crew-template-variable-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWTemplateVariableAddModalComponent implements OnInit {
  IsEdit: boolean;
  ruleTemplateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWTemplateVariableAddModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.ruleTemplateFormGroup = this._fb.group({
      txtQuestions: ["", Validators.required],
      drpQuestion_Type: ["", Validators.required],
      drpTable:[""],
      drpColumn_Key:[""],
      drpColumn_To_Display:[""],
      txtFree_Text:[""],
      drpVariable_Type :["", Validators.required],
      txtIs_Mandatory:[""],

    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
