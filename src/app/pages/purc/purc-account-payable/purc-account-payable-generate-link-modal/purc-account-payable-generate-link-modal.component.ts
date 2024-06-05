import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-account-payable-generate-link-modal',
  templateUrl: './purc-account-payable-generate-link-modal.component.html',
  styleUrls: ['./purc-account-payable-generate-link-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCAccountPayableGenerateLinkModalComponent implements OnInit {

  GenerateLinkFormGroup:UntypedFormGroup;
  constructor(private dialogRef: MatDialogRef<PURCAccountPayableGenerateLinkModalComponent>,private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.GenerateLinkFormGroup = this.fb.group({
      txtLink:[''],
      expiry_date:['']
    })
  }
  CloseModal() {
    this.dialogRef.close(null);
  }
}
