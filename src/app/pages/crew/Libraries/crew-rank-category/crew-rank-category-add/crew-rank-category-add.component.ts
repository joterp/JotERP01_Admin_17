import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-rank-category-add',
  templateUrl: './crew-rank-category-add.component.html',
  styleUrls: ['./crew-rank-category-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRankCategoryAddComponent implements OnInit {
  IsEdit: boolean;
  newCategoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<CREWRankCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newCategoryFormGroup = this._fb.group({
      textCategory_Name: ["", Validators.required],
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
