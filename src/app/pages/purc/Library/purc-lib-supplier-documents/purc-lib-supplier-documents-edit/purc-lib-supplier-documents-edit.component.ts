import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-lib-supplier-documents-edit',
  templateUrl: './purc-lib-supplier-documents-edit.component.html',
  styleUrls: ['./purc-lib-supplier-documents-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCLIBSupplierDocumentsEditComponent implements OnInit {
  IsEdit: boolean;
  supplierDocFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<PURCLIBSupplierDocumentsEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

 @Inject (MAT_DIALOG_DATA) public data:any) { 
  this.supplierDocFormGroup = this._fb.group({ 
    txtDocumnet_Name: ["", Validators.required],
    txtCheck_Mandatory: ["", Validators.required],
    txtCheck_Confidential: ["", Validators.required]
   
   
    
    
     
  });
 }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
