import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-add-to-crew-details',
  templateUrl: './crew-add-to-crew-details.component.html',
  styleUrls: ['./crew-add-to-crew-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWAddToCrewDetailsComponent implements OnInit {
  
  selectedFileName: string = '';
  modeltitle:string="";
  modeltype:string;

  CrewDetailsFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWAddToCrewDetailsComponent>) { }

  ngOnInit(): void {
   this.CrewDetailsFormGroup = this.fb.group({
    txtFirst_Name:['', Validators.required],
    txtLast_Name:['', Validators.required],
    txtRegional:[''],
    Date_Of_Birth:['', Validators.required],
    txtPlace_Of_Birth:['', Validators.required],
    drpGender:['', Validators.required],
    drpMarital_Status:['', Validators.required],
    drpNationality:['', Validators.required],
    txtBlood_Group:[''],
    drpIntnl_Airport:['', Validators.required],
    txtGovt_ID_NO:[''],
    drpCountry:['', Validators.required],
    drpCity:['', Validators.required],
    txtPhone1:['', Validators.required],
    txtPhone2:[''],
    txtEmail1:['', Validators.required],
    txtEmail2:[''],
    drpSocial_Communication:[''],
    txtIM:[''],
    txtAddress:['', Validators.required],
    Date_Available:['', Validators.required],
    Date_Applied:['', Validators.required],
    drpManning_Office:['', Validators.required],
    drpRank_Applied:['', Validators.required],
    drpMedically_Fit:['', Validators.required],
    drpIs_Certified_Medic:['', Validators.required],
   })
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }	

  CloseModal() {
    this.dialogRef.close(null);
  }

}
