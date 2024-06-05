import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSNewItemModalComponent } from './ops-new-item-modal/ops-new-item-modal.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-new-item-add',
  templateUrl: './ops-new-item-add.component.html',
  styleUrls: ['./ops-new-item-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNewItemAddComponent implements OnInit {
  IsEdit: boolean;
  ItemFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";

  constructor(private dialogRef: MatDialogRef<OPSNewItemAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.ItemFormGroup = this._fb.group({
      drpCategory: ["", Validators.required],
      txtBought_On: [""],
      drpItem_Type: ["", Validators.required],
      txtLoan_From: [""],
      drpItem_Name: [""],
      txtLoan_Remark: [""],
      drpModel: ["", Validators.required],
      drpMaker: ["", Validators.required],
      drpPo_Code: [""],
      txtSerial_Number: ["",Validators.required],
      Date_PO: [""],
      txtQuantity: ["", Validators.required],
      txtBox_Number: [""],
      drpItem_Condition: ["", Validators.required],
      radioVerified: [""],
      txtRemarks: [""],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
       
    const dialogRef = this.dialog.open(OPSNewItemModalComponent, {
      width: "35%",
      maxHeight: "80%",
      disableClose: true,
    });
 
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }

}
