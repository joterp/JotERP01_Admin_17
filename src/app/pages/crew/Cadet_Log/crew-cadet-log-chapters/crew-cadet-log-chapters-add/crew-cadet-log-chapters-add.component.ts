import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cadet-log-chapters-add',
  templateUrl: './crew-cadet-log-chapters-add.component.html',
  styleUrls: ['./crew-cadet-log-chapters-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogChaptersAddComponent implements OnInit {
  IsEdit: boolean;
  newCadetLogChapterFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<CREWCadetLogChaptersAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newCadetLogChapterFormGroup = this._fb.group({
        drpInspection_Type: ["", Validators.required],
        txtChapter_Name: ["", Validators.required],
        txtChapter_No :[""]
  
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
