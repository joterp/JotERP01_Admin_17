import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-new-rfq-term-add-modal',
  templateUrl: './purc-new-rfq-term-add-modal.component.html',
  styleUrls: ['./purc-new-rfq-term-add-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCNewRFQTERMADDModalComponent implements OnInit {
  IsEdit: boolean;
  rfqFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  stringHtml: string = null;
  
  




  constructor( private dialogRef: MatDialogRef<PURCNewRFQTERMADDModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) { 
  
  this.rfqFormGroup = this._fb.group({ 
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
