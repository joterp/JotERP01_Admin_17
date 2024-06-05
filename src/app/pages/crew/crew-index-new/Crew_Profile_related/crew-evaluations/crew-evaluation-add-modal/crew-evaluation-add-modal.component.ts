import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-evaluation-add-modal',
  templateUrl: './crew-evaluation-add-modal.component.html',
  styleUrls: ['./crew-evaluation-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWEvaluationAddModalComponent implements OnInit {

  modeltitle: string = "";
  modeltype: string;

  EvaluationDetailsFormGroup: UntypedFormGroup;
  constructor(private dialogRef: MatDialogRef<CREWEvaluationAddModalComponent>, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.EvaluationDetailsFormGroup = this.fb.group({
      planned_evaluation_date: ['', Validators.required],
      drpVoyage: ['', Validators.required],
      drpRank: ['', Validators.required],
      drpEvaluation_Type: ['', Validators.required],
      drpEvaluation_Name: ['', Validators.required],
      drpEvaluator: ['', Validators.required],
      txtEvaluation_Comments: ['', Validators.required],
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
