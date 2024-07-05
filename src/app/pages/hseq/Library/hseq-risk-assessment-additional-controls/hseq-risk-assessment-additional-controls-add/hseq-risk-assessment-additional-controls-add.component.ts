import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-risk-assessment-additional-controls-add',
  templateUrl: './hseq-risk-assessment-additional-controls-add.component.html',
  styleUrls: ['./hseq-risk-assessment-additional-controls-add.component.scss']
})
export class HSEQRiskAssessmentAdditionalControlsAddComponent implements OnInit {
  IsEdit: boolean;
  stringHtml: string = null;
  
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HSEQRiskAssessmentAdditionalControlsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newInspectionReferenceFormGroup = this._fb.group({
        drpWork_Activity: ["", Validators.required],
        drpActivity_Operation: [""],
        drpResponsible: [""],
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
    }

    changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

    contentChanged(obj: any) {
    this.stringHtml = obj.html;
    }

    

}
