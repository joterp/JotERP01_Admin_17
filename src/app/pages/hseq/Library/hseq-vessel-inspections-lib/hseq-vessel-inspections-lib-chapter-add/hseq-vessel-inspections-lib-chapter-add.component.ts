import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-vessel-inspections-lib-chapter-add',
  templateUrl: './hseq-vessel-inspections-lib-chapter-add.component.html',
  styleUrl: './hseq-vessel-inspections-lib-chapter-add.component.scss'
})
export class HseqVesselInspectionsLibChapterAddComponent {
  IsEdit: boolean;
  
  newInspectionChaptersFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<HseqVesselInspectionsLibChapterAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInspectionChaptersFormGroup = this._fb.group({
        Inspection_Type: ["", Validators.required],
        Chapter_Name: ["", Validators.required],
        Chapter_No:[""],
        
       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
