import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { HseqVesselInspectionsLibItemAddGradeComponent } from './hseq-vessel-inspections-lib-item-add-grade/hseq-vessel-inspections-lib-item-add-grade.component';

@Component({
  selector: 'fury-hseq-vessel-inspections-lib-item-add',
  templateUrl: './hseq-vessel-inspections-lib-item-add.component.html',
  styleUrl: './hseq-vessel-inspections-lib-item-add.component.scss'
})
export class HseqVesselInspectionsLibItemAddComponent {
  IsEdit: boolean;
  stringHtml: string = null;
  selectedFileName: string = '';
  
  newInspectionItemFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<HseqVesselInspectionsLibItemAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private dialog: MatDialog,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInspectionItemFormGroup = this._fb.group({
        Category: ["", Validators.required],
        Grade: ["", Validators.required],
        Question_No:[""],
        Question_Name:[""],
        QMS_Elements_Ref:[""],
       
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
      
    saveNewGrade(data:object, IsEdit:boolean, modeltitle:string) {
      const dialogRef = this.dialog.open(HseqVesselInspectionsLibItemAddGradeComponent,
        {
          width: "30%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.componentInstance.modeltitle = modeltitle;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
  

}
