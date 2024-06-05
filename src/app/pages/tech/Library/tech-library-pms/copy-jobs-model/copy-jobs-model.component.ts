import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-copy-jobs-model',
  templateUrl: './copy-jobs-model.component.html',
  styleUrls: ['./copy-jobs-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CopyJobsModelComponent implements OnInit {
  IsEdit: boolean;
  copyJobsFormGroup: UntypedFormGroup;
  copyJobsToFormGroup: UntypedFormGroup;
  constructor(private dialogRef: MatDialogRef<CopyJobsModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private fb: UntypedFormBuilder,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.copyJobsFormGroup = this.fb.group({
      Vessel_name: [""],
      Catalogue: [""],
      SubCatalogue: [""],
    });
    this.copyJobsToFormGroup = this.fb.group({
      Vessel_name: [""],
      Catalogue: [""],
      SubCatalogue: [""],
    });
  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
