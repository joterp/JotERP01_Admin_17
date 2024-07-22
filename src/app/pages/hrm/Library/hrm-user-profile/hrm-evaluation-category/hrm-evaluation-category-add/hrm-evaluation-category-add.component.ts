import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-evaluation-category-add',
  templateUrl: './hrm-evaluation-category-add.component.html',
  styleUrl: './hrm-evaluation-category-add.component.scss'
})
export class HrmEvaluationCategoryAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newIntQuesCategoryFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<HrmEvaluationCategoryAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newIntQuesCategoryFormGroup = this._fb.group({
      category_NAME: ["", Validators.required],
    });

    if (this.IsEdit) {
      this.InsertFormValues();
    }
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
