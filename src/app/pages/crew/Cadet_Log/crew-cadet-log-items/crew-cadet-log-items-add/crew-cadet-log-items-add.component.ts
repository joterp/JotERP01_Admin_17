import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cadet-log-items-add',
  templateUrl: './crew-cadet-log-items-add.component.html',
  styleUrls: ['./crew-cadet-log-items-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogItemsAddComponent implements OnInit {
  IsEdit: boolean;
  newCadetLogItemFormGroup: any;
  stringHtml: string = null;
  selectedFileName: string = '';
		

  constructor(private dialogRef: MatDialogRef<CREWCadetLogItemsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newCadetLogItemFormGroup = this._fb.group({
        drpCategory: ["", Validators.required],
        drpGrade:[""],
        txtQuestion_No:[""],
        txtQuestion_Name: ["", Validators.required],
        drpQMS_Element :[""]
  
       
      });
     }

  ngOnInit(): void {
   
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
    }

    changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

    contentChanged(obj: any) {
    this.stringHtml = obj.html;
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
}
