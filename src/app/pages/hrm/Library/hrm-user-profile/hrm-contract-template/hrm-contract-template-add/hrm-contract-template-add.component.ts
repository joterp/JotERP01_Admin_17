import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-contract-template-add',
  templateUrl: './hrm-contract-template-add.component.html',
  styleUrl: './hrm-contract-template-add.component.scss'
})
export class HrmContractTemplateAddComponent {
  stringHtml: string = null;
  IsEdit: boolean;
  newDesignationFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HrmContractTemplateAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newDesignationFormGroup = this._fb.group({
        Template_Name: ["", Validators.required],
        Template_Type: ["", Validators.required],
        Company: ["", Validators.required],
        Nationality: [""],
        
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
