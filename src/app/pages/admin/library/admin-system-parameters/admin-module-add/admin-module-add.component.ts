import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-admin-module-add',
  templateUrl: './admin-module-add.component.html',
  styleUrl: './admin-module-add.component.scss'
})
export class AdminModuleAddComponent {
  IsEdit: boolean;
  newAlarmFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle: string;

  constructor(private dialogRef: MatDialogRef<AdminModuleAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }
    
    ngOnInit(): void {
      this.newAlarmFormGroup = this._fb.group({
        Module_Name: [""],
        drpTable_Name: ["", Validators.required],
        parameter_name: ["", Validators.required],
        parameter_short_name: ["", Validators.required],
        remarks: [""],
  
  
      });

    }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
