import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-lib-vessel-kpi-add-category',
  templateUrl: './hseq-lib-vessel-kpi-add-category.component.html',
  styleUrls: ['./hseq-lib-vessel-kpi-add-category.component.scss']
})
export class HseqLibVesselKpiAddCategoryComponent {
  IsEdit: boolean;
  newCategoryFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HseqLibVesselKpiAddCategoryComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newCategoryFormGroup = this._fb.group({
        Category_Name: ["", Validators.required],
     
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
