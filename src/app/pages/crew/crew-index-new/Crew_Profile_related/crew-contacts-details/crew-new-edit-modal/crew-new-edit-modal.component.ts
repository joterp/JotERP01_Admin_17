import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-new-edit-modal',
  templateUrl: './crew-new-edit-modal.component.html',
  styleUrls: ['./crew-new-edit-modal.component.scss']
})
export class CREWNewEditModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  editPersonalInfo:boolean=false;
  editAccountInfo:boolean=false;
  editAddress:boolean=false;
  editContacts:boolean=false;

  PersonalDetailFormGroup:UntypedFormGroup;
  AccountDetailFormGroup:UntypedFormGroup;
  AddressDetailFormGroup:UntypedFormGroup;
  ContactDetailFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWNewEditModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
if(this.modeltype == "Edit_Personal_Detail"){
      this.editPersonalInfo = true;
      this.editAccountInfo = false;
      this.editAddress = false;
      this.editContacts = false;
    } 
    
    else if(this.modeltype == "Edit_Account_Information"){
      this.editPersonalInfo = false;
      this.editAccountInfo = true;
      this.editAddress = false;
      this.editContacts = false;
    }

    else if(this.modeltype == "Edit_Address_Detail") {
      this.editPersonalInfo = false;
      this.editAccountInfo = false;
      this.editAddress = true;
      this.editContacts = false;
    }  

    else if(this.modeltype == "Edit_Contact_Details"){
      this.editPersonalInfo = false;
      this.editAccountInfo = false;
      this.editAddress = false;
      this.editContacts = true;
    }

    this.PersonalDetailFormGroup = this.fb.group({
      txtFirst_Name:['',Validators.required],
	  txtLast_Name:['',Validators.required],
	  txtRegional_Name:[''],
	  date_of_birth:['',Validators.required],
	  txtPlace_Of_Birth:['',Validators.required],
	  drpGender:['',Validators.required],
	  drpMarital_Status:['',Validators.required],
	  drpNationality:['',Validators.required],
	  txtBlood_Type:[''],
	  drpIntnl_Airport:['',Validators.required],
	  txtGovt_ID_NO:['']
   
    });

    this.AccountDetailFormGroup = this.fb.group({
      drpManning_Office:['',Validators.required],
      drpRank_Applied:['',Validators.required],
      date_applied:['',Validators.required],
      date_available:['',Validators.required],
      drpMedically_Fit:['',Validators.required],
      drpIs_Certified_Medic:['',Validators.required],
      txtPrefered_Meal:[''],
      txtFrequent_Flyer_No:['']
    });

    this.AddressDetailFormGroup = this.fb.group({
      txtAddress:['',Validators.required],
      drpCountry:['',Validators.required],
      drpCity:['',Validators.required],
    });

    this.ContactDetailFormGroup = this.fb.group({
      txtPhone1:['',Validators.required],
      txtPhone2:[''],
      txtEmail1:['',Validators.required],
      txtEmail2:[''],
      drpSocial_Communication:[''],
      txtIM:['']
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
