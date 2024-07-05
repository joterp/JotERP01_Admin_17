import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-vessel-inspections-lib-item-add-grade',
  templateUrl: './hseq-vessel-inspections-lib-item-add-grade.component.html',
  styleUrl: './hseq-vessel-inspections-lib-item-add-grade.component.scss'
})
export class HseqVesselInspectionsLibItemAddGradeComponent {
  IsEdit: boolean = false;
  newIntGradeFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // modeltitle : string = "";
  EditData:any;
  modeltitle: string;
  
  constructor(private dialogRef: MatDialogRef<HseqVesselInspectionsLibItemAddGradeComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newIntGradeFormGroup = this._fb.group({
        Company :["", Validators.required],
        txtGrade: ["", Validators.required],
        drpGrade_Type: ["", Validators.required],
        drpMin_Type: ["", Validators.required],
        drpMax_Type: ["", Validators.required],
        drpOptions: [""],
      });
     
    }
    form = new UntypedFormGroup({
      drpOptions: new UntypedFormControl(0)
    });
  ngOnInit(): void {
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
 
}



