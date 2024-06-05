import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-allotment-index-view-and-verify',
  templateUrl: './crew-allotment-index-view-and-verify.component.html',
  styleUrls: ['./crew-allotment-index-view-and-verify.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWAllotmentIndexViewAndVerifyComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  constructor(private dialogRef:MatDialogRef<CREWAllotmentIndexViewAndVerifyComponent>) { }

  ngOnInit(): void {

  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
