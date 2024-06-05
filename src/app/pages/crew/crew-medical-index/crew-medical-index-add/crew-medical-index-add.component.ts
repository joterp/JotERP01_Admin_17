import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-medical-index-add',
  templateUrl: './crew-medical-index-add.component.html',
  styleUrls: ['./crew-medical-index-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMedicalIndexAddComponent implements OnInit {
  IsEdit: boolean;
  medicalIndexFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';

  files: File[] = [];
  dragFile: string = null;

  onDragOver(event: Event) {
    event.preventDefault();
  }

  onDragLeave(event: Event) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }

    this.dragFile = 'fileDragged';
  }
  constructor(private dialogRef: MatDialogRef<CREWMedicalIndexAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.medicalIndexFormGroup = this._fb.group({
      drpStaff_Code: ["", Validators.required],
      drpVoyage: ["", Validators.required],
      drpCase_Type: ["", Validators.required],
      Date_Form: ["", Validators.required],
      txtCase_Details: ["",Validators.required],
     
     
    });
  }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
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

    onDragFileSelected(event: any) {
      const fileInput = event.target;
      const files = fileInput.files;
  
      for (let i = 0; i < files.length; i++) {
        this.files.push(files[i]);
      }
  
      this.dragFile = 'fileDragged';
    }
    removedragFileadditem(fileName: string): void {
      this.files = this.files.filter((file) => file.name !== fileName);
  
      if (this.files.length === 0) {
        this.dragFile = null;
      }
    }

}
