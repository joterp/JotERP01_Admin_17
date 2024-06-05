import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-recent-alerts-model',
  templateUrl: './ops-recent-alerts-model.component.html',
  styleUrls: ['./ops-recent-alerts-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSRecentAlertsModelComponent implements OnInit {
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<OPSRecentAlertsModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
