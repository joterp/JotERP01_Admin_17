import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-copy-certificates-model',
  templateUrl: './copy-certificates-model.component.html',
  styleUrls: ['./copy-certificates-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CopyCertificatesModelComponent implements OnInit {
  EditData: object;
  IsEdit: boolean;
  copyFormGroup:UntypedFormGroup;

  constructor(private dialogRef: MatDialogRef<CopyCertificatesModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    
    this.copyFormGroup = this._fb.group({
      drpFleet: [""],
      
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  

}
