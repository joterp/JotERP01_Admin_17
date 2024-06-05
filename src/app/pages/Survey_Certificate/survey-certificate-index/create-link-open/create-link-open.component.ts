import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-create-link-open',
  templateUrl: './create-link-open.component.html',
  styleUrls: ['./create-link-open.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateLinkOpenComponent implements OnInit {
  EditData: object;
  IsEdit: boolean;
  createLinkFormGroup: UntypedFormGroup;

  constructor(private dialogRef: MatDialogRef<CreateLinkOpenComponent>,
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
