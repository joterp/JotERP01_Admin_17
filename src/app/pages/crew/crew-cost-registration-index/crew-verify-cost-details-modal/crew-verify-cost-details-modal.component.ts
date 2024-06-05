import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-verify-cost-details-modal',
  templateUrl: './crew-verify-cost-details-modal.component.html',
  styleUrls: ['./crew-verify-cost-details-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWVerifyCostDetailsModalComponent implements OnInit {
  IsEdit: boolean;
  newCostDetailsFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  costRegistrationdataSource: MatTableDataSource<any> | null;


  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
   
  ] as ListColumn[];
  paginator: any;

  get costRegistrationvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  constructor(private dialogRef: MatDialogRef<CREWVerifyCostDetailsModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newCostDetailsFormGroup = this._fb.group({
        drpVessel: [""],
        drpSeafarer: ["", Validators.required],
        drpCost_Type: ["", Validators.required],
        Date_Form: ["", Validators.required],
        txtCost_Details: ["",Validators.required],
        drpCurrency: ["", Validators.required],
        txtAmount: ["", Validators.required],
        txtUSD_Amount: [""],
        txtVerification_Remark :["", Validators.required],
       
      });
     }

CloseModal() {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
    this.costRegistrationdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.costRegistrationdataSource.paginator = this.paginator;

  }

}
