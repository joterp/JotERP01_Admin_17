import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-contract-template-index-add',
  templateUrl: './crew-contract-template-index-add.component.html',
  styleUrls: ['./crew-contract-template-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWContractTemplateIndexAddComponent implements OnInit {
  IsEdit: boolean;
  addTemplateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  stringHtml: string = null;
  constructor(
    private dialogRef: MatDialogRef<CREWContractTemplateIndexAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.addTemplateFormGroup = this._fb.group({
      txtTemplate_Name: ["", Validators.required],
      drpVessel_Manager: ["", Validators.required],
      drpVessel_Type: ["", Validators.required],
      drpVessel_Flag:["", Validators.required],
      drpNationality:[""]
    });
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
