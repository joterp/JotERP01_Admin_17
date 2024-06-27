import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-admin-companies-add-timezone',
  templateUrl: './admin-companies-add-timezone.component.html',
  styleUrl: './admin-companies-add-timezone.component.scss'
})
export class AdminCompaniesAddTimezoneComponent {
  IsEdit: boolean = false;
  EditData:any;

  constructor(private dialogRef: MatDialogRef<AdminCompaniesAddTimezoneComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    CloseModal() {
      this.dialogRef.close(true);
    }
}
