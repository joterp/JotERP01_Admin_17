import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-portage-bill-cash-to-master-index-add',
  templateUrl: './crew-portage-bill-cash-to-master-index-add.component.html',
  styleUrls: ['./crew-portage-bill-cash-to-master-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWPortageBillCashToMasterIndexAddComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  CashToMasterIndexAddFormGroup:UntypedFormGroup;

  BOW_Details = [
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"DCT",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"2/OFF",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"DCT",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"2/OFF",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"DCT",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
    {
      "Staff_Code":"10061" ,
      "Name":"Kumar, Navin,",
      "Rank":"2/OFF",
      "EOC":"",
      "Allotment":"0.00",
      "BOW_Amount":"0.00",
      "BOW_Due":"0.00"
    },
  ]


  BOW_Denominations = [
    {
      "Currency":"" ,
      "Note_Type":"100",
      "Requested_Notes":"",
      "Amount":"56,54545",
      "Blank":"",
      "Approved_Notes":"",
      "Amounts":""
    },
    {
      "Currency":"" ,
      "Note_Type":"50",
      "Requested_Notes":"",
      "Amount":"54",
      "Blank":"",
      "Approved_Notes":"",
      "Amounts":""
    },
    {
      "Currency":"" ,
      "Note_Type":"20",
      "Requested_Notes":"",
      "Amount":"41",
      "Blank":"",
      "Approved_Notes":"",
      "Amounts":""
    }
    
  ]
  
  constructor(private dialogRef:MatDialogRef<CREWPortageBillCashToMasterIndexAddComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
       this.CashToMasterIndexAddFormGroup = this.fb.group({
        drpVessel_Name:['', Validators.required],
        drpRequested_Port:['', Validators.required],
        Request_Date:['', Validators.required],
        txtVessel_Remarks:[''],
        drpDenomination_Currency:[''],
        txtBOW_Required:[''],
        txtMaster_Cash:[''],
        txtRequested_Amount:[''],
        txtRequested_Amount_Calculated:[''],
        txtApproved_Amount:[''],
        Date_Approved:[''],
        drpDelivery_Port:[''],
        radioBy_Hand:[''],
        drpAgent:[''],
        txtSupplier_Commission:[''],
        txtOffice_Remarks:['']
       })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }


}
