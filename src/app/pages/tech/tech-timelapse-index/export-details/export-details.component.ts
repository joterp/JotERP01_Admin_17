import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-export-details',
  templateUrl: './export-details.component.html',
  styleUrls: ['./export-details.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class EXPORTDETAILSComponent implements OnInit {
  EditData: object;
  IsEdit: boolean;
  createLinkFormGroup: UntypedFormGroup;


  constructor(private dialogRef: MatDialogRef<EXPORTDETAILSComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
    this.createLinkFormGroup = this.fb.group({
      txtLink: [""],
      expiryDate: [""],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
