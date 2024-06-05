import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-document-add',
  templateUrl: './crew-document-add.component.html',
  styleUrls: ['./crew-document-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWDocumentAddComponent implements OnInit {
  IsEdit: boolean;
  newDocumentFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWDocumentAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newDocumentFormGroup = this._fb.group({
        drpDocument_Type: ["", Validators.required],
        txtDocument_Name: ["", Validators.required],
        txtDocument_Short_Name: [""],
        txtDocument_Code_Deck: ["", Validators.required],
        txtDocument_Code_Engine: [""],
        txtAlaram_Days: ["", Validators.required],
        drpMandatory: ["0", Validators.required],
        txtSort_Order: [""],
        txtCheck_Manual: [""],
        txtCertificate: [""],
        txtCourse: [""],
        txtCargo: [""],
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
