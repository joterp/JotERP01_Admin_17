import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-new-remark-add',
  templateUrl: './ops-new-remark-add.component.html',
  styleUrls: ['./ops-new-remark-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNewRemarkAddComponent implements OnInit {
  IsEdit: boolean;
  RemarkFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor(private dialogRef: MatDialogRef<OPSNewRemarkAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.RemarkFormGroup = this._fb.group({
      txtRemarks: ["", Validators.required],
     
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
