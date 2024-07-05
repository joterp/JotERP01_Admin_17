import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-vessel-inspections-lib-category-add',
  templateUrl: './hseq-vessel-inspections-lib-category-add.component.html',
  styleUrl: './hseq-vessel-inspections-lib-category-add.component.scss'
})
export class HseqVesselInspectionsLibCategoryAddComponent {
  IsEdit: boolean;
  
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<HseqVesselInspectionsLibCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newInspectionReferenceFormGroup = this._fb.group({
        Inspection_Type: ["", Validators.required],
        Chapter: ["", Validators.required],
        Category_Name:[""],
        Category_No:[""],
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
