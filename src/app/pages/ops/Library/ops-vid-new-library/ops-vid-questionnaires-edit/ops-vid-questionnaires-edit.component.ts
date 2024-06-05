import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vid-questionnaires-edit',
  templateUrl: './ops-vid-questionnaires-edit.component.html',
  styleUrls: ['./ops-vid-questionnaires-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDQuestionnairesEditComponent implements OnInit {
  IsEdit: boolean;
  questionnairesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<OPSVIDQuestionnairesEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.questionnairesFormGroup = this._fb.group({ 
      drpDepartment_Name: ["", Validators.required],
      txtVID_Ques: ["", Validators.required],
      radioVerified: ["1", Validators.required]
      
      
      
       
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
