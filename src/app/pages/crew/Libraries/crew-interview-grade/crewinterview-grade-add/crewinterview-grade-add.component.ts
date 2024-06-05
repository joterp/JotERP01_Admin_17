import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crewinterview-grade-add',
  templateUrl: './crewinterview-grade-add.component.html',
  styleUrls: ['./crewinterview-grade-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWInterviewGradeAddComponent implements OnInit {
  IsEdit: boolean;
  newRankFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<CREWInterviewGradeAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newRankFormGroup = this._fb.group({
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
