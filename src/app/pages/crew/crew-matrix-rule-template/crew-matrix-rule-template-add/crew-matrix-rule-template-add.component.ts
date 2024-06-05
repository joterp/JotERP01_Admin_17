import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-matrix-rule-template-add',
  templateUrl: './crew-matrix-rule-template-add.component.html',
  styleUrls: ['./crew-matrix-rule-template-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMatrixRuleTemplateAddComponent implements OnInit {
  IsEdit: boolean;
  ruleTemplateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWMatrixRuleTemplateAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.ruleTemplateFormGroup = this._fb.group({
      txtTemplate: ["", Validators.required],
      txtQuery: [""]
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }


}
