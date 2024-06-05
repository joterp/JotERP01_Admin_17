import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-add-daily-voyage-log',
  templateUrl: './ops-add-daily-voyage-log.component.html',
  styleUrls: ['./ops-add-daily-voyage-log.component.scss'],
  
})
export class OPSAddDailyVoyageLogComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
  loading: boolean;
  selectAllChecked = false;
  
  CompareReportFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<OPSAddDailyVoyageLogComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private fb: UntypedFormBuilder,
   
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.CompareReportFilterFormGroup = this.fb.group({
      drpTowing_vessel: ["",Validators.required],
      drpTowed_vessel: ["",Validators.required],
      Date_Form: ["", Validators.required],
      Date_To: ["", Validators.required],
      drpLocation: [""],
      txtSteaming_Hours: [""],
      txtCourse: [""],
      txtDMG: [""],
      txtDTG: [""],
      txtSpeed: [""],
      drpETA_Speed: [""],
      txtETA: [""],
      txtRemark:[""],

      drpSwell_Direction: [""],
      txtSwell_Height: [""],
      drpWind_Direction: [""],
      txtWind_Force: [""],
      drpSea_Direction: [""],
      drpSea_State: [""],
      txtTowline_Length: [""],
      txtRPM_PE: [""],
      txtRPM_SE: [""],
      txtSlip: [""],
      txtAE_One: [""],
      txtAE_Two: [""],
      txtPort_run: [""],
      txtStdb_run: [""],
     


      txtMGO_One: [""],
      txtMGO_Two: [""],
      txtLo_One: [""],
      txtLo_Two: [""],
      txtMECC_One: [""],
      txtMECC_Two: [""],

      txtRPM_Port: [""],
      txtRPM_Stmb: [""],
      txtEngine_Distance: [""],
      txtMGO: [""],
      txtCONSP_Mgo: [""],
      txtROB_LO: [""],
      txtROB_Hyd_Oil: [""],
      txtFW_Consp: [""],
      txtFw_Made: [""],
      txtRob_Master: [""],
      
     
     
     
    });
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
