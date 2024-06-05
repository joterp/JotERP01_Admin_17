import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-threshold-remark-update',
  templateUrl: './ops-threshold-remark-update.component.html',
  styleUrls: ['./ops-threshold-remark-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSThresholdRemarkUpdateComponent implements OnInit {

  modeltitle:string="";

  ThresholdRemarkFormGroup: UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSThresholdRemarkUpdateComponent>) { }

  ngOnInit(): void {
         this.ThresholdRemarkFormGroup = this.fb.group({
          txtRemark:['']
         })

  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
