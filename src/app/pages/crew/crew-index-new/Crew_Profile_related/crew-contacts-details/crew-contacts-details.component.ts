import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { CREWNewEditModalComponent } from './crew-new-edit-modal/crew-new-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'fury-crew-contacts-details',
  templateUrl: './crew-contacts-details.component.html',
  styleUrls: ['./crew-contacts-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWContactsDetailsComponent implements OnInit {

  selectedFileCrewProfile: string = '';
  constructor(private dialog:MatDialog, ) { }

  ngOnInit(): void {

  }

  onFileSelectedCrewProfile(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileCrewProfile = inputElement.files[0].name;
    } else {
      this.selectedFileCrewProfile = '';
    }
  }
  removeUploadedFileCrewProfile(): void {
    this.selectedFileCrewProfile = null; // Reset the selectedFileCrewProfile
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWNewEditModalComponent, {
      width: "35%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }
  

}
