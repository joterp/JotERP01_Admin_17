import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-vsl-particulars-labels-add',
  templateUrl: './ops-lib-vsl-particulars-labels-add.component.html',
  styleUrls: ['./ops-lib-vsl-particulars-labels-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsLibVslParticularsLabelsAddComponent implements OnInit {
  IsEdit: boolean;
  particularsLabelFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OpsLibVslParticularsLabelsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.particularsLabelFormGroup = this._fb.group({
      txtField_Name: ["", Validators.required],
     
      
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
