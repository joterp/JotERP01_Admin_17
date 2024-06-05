import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cadet-log-categories-add',
  templateUrl: './crew-cadet-log-categories-add.component.html',
  styleUrls: ['./crew-cadet-log-categories-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogCategoriesAddComponent implements OnInit {
  IsEdit: boolean;
  newCadetLogCategoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWCadetLogCategoriesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newCadetLogCategoryFormGroup = this._fb.group({
        drpChapter: ["", Validators.required],
        txtCategory_Name: ["", Validators.required],
        txtCategory_No :[""]
  
       
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
