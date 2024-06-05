import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-education-details-add',
  templateUrl: './crew-education-details-add.component.html',
  styleUrls: ['./crew-education-details-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWEducationDetailsAddComponent implements OnInit {

  selectedFileName: string = '';
  modeltitle:string="";
  modeltype:string;

  EducationDetailsFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWEducationDetailsAddComponent>) { }

  ngOnInit(): void {
  this.EducationDetailsFormGroup = this.fb.group({
    txtCourse_Degree:['', Validators.required],
    txtMarks:[''],
    txtInstitute:['', Validators.required],
    txtGrade:[''],
    txtCity:[''],
    from_date:[''],
    drpCountry:[''],
    to_date:[''],
    txtYear_Completed:['']
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
