import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vid-chapters-edit',
  templateUrl: './ops-vid-chapters-edit.component.html',
  styleUrls: ['./ops-vid-chapters-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDChaptersEditComponent implements OnInit {
  IsEdit: boolean;
  chaptersFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  modeltitle : string = "";
  
  constructor(private dialogRef: MatDialogRef<OPSVIDChaptersEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.chaptersFormGroup = this._fb.group({ 
      drpVID_Ques: ["", Validators.required],
      txtChapter_Name: ["", Validators.required],
      txtChapter_No: ["", Validators.required]
      
      
       
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
