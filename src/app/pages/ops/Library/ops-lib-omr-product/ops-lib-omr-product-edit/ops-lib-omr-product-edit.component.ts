import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-omr-product-edit',
  templateUrl: './ops-lib-omr-product-edit.component.html',
  styleUrls: ['./ops-lib-omr-product-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsLibOmrProductEditComponent implements OnInit {
  IsEdit: boolean;
  departmentFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OpsLibOmrProductEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.departmentFormGroup = this._fb.group({
      txtProduct_Name: ["", Validators.required],
      txtProduct_Unit: ["", Validators.required],
      
    });
    
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
