import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-ra-activity-operation-control-add',
  templateUrl: './hseq-ra-activity-operation-control-add.component.html',
  styleUrls: ['./hseq-ra-activity-operation-control-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQRAActivityOperationControlAddComponent implements OnInit {
  IsEdit: boolean;
  stringHtml: string = null;
  
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<HSEQRAActivityOperationControlAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInspectionReferenceFormGroup = this._fb.group({
        drpActivity: ["", Validators.required],
        drpSQL_Procedure: ["", Validators.required],
       
        
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
