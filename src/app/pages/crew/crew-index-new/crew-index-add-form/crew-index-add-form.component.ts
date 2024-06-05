import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-index-add-form',
  templateUrl: './crew-index-add-form.component.html',
  styleUrls: ['./crew-index-add-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWIndexAddFormComponent implements OnInit {

  AddCrewFormGroup:UntypedFormGroup;

  selectedFileNameAttach: string = '';
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Add Crew (Short)`);
   }

  ngOnInit(): void {
  this.AddCrewFormGroup = this.fb.group({
    txtFirst_Name:['', Validators.required],
    txtLast_Name:['', Validators.required],
    date_of_birth:['', Validators.required],
    txtPlace_Of_Birth:['', Validators.required],
    drpGender:['', Validators.required],
    drpMarital_Status:['', Validators.required],
    drpRank_Applied:['', Validators.required],
    drpNationality:['', Validators.required],
    drpIntnl_Airport:['', Validators.required],
    drpCountry:['', Validators.required],
    drpCity:['', Validators.required],
    txtEmail:['', Validators.required],
    txtMobile_No:['', Validators.required],
    txtAddress:['', Validators.required],
    date_available:['', Validators.required],
    date_applied:['', Validators.required],
    drpManning_Office:['', Validators.required],
    drpMedically_Fit:['', Validators.required],
    date_of_issue:['', Validators.required],
    date_of_expiry:['', Validators.required],
    drpCountry_Of_Issue:['', Validators.required],
    txtPlace_of_issue:['', Validators.required],
    sign_on_date:['', Validators.required],
    drpSign_On_Port:['', Validators.required],
    drpVessel:['', Validators.required],
    drpRank:['', Validators.required],
  })

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);   
    
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  onFileSelectedattach(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameAttach = inputElement.files[0].name;
    } else {
      this.selectedFileNameAttach = '';
    }
  }
  removeUploadedFileattach(): void {
    this.selectedFileNameAttach = null; // Reset the selectedFileNameAttach
  }		

}
