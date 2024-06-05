import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-import-pms-details',
  templateUrl: './tech-import-pms-details.component.html',
  styleUrls: ['./tech-import-pms-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TECHImportPMSDetailsComponent implements OnInit {
  
  selectedFileNameCatalogue: string = '';
  constructor(private dialogRef:MatDialogRef<TECHImportPMSDetailsComponent>) { }

  ngOnInit(): void {

  }
  CloseModal(){
    this.dialogRef.close(null);
  }
  onFileSelectedcatalogue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameCatalogue = inputElement.files[0].name;
    } else {
      this.selectedFileNameCatalogue = '';
    }
  }
  removeUploadedFilecatalogue(): void {
    this.selectedFileNameCatalogue = null; // Reset the selectedFileNameCatalogue
  }
  
}
