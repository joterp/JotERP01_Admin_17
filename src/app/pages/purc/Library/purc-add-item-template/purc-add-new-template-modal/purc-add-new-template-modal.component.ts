import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-add-new-template-modal',
  templateUrl: './purc-add-new-template-modal.component.html',
  styleUrls: ['./purc-add-new-template-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,

  
})
export class PURCAddNewTemplateModalComponent implements OnInit {
  IsEdit: boolean;
  templateFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor( private dialogRef: MatDialogRef<PURCAddNewTemplateModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) {
  this.templateFormGroup = this._fb.group({ 
    txtTemplate_Name: ["", Validators.required],
    drpDepartment: ["", Validators.required],
    drpCatalogue: ["" ,Validators.required],
   
   
    
    
     
  });
 }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
