import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-nad-lib-documents-add',
  templateUrl: './ops-nad-lib-documents-add.component.html',
  styleUrls: ['./ops-nad-lib-documents-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsNadLibDocumentsAddComponent implements OnInit {
  IsEdit: boolean;
  AddDocumentFieldFormGroup: UntypedFormGroup;
  AgencyPOFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  //demo


  constructor(private dialogRef: MatDialogRef<OpsNadLibDocumentsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.AddDocumentFieldFormGroup = this._fb.group({
      txtDocument_Name: ["", Validators.required],
      drpNAD_Type: ["", Validators.required],
      drpNAD_Location: ["", Validators.required],
      drpCargo_State: ["", Validators.required],
      radioMandatory: ["", Validators.required],
    });
    
    
   
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

  


}
