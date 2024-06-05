import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-poterms-modal',
  templateUrl: './purc-poterms-modal.component.html',
  styleUrls: ['./purc-poterms-modal.component.scss']
})
export class PURCPOTermsModalComponent implements OnInit {
  IsEdit: boolean;
  poFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  stringHtml: string = null;
  
  constructor(private dialogRef: MatDialogRef<PURCPOTermsModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) {
  this.poFormGroup = this._fb.group({ 
    drpDepartment: ["", Validators.required],
    txtUser_Friendly_Name: [""],
    txtCheck:[""]


  
    
    
     
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
