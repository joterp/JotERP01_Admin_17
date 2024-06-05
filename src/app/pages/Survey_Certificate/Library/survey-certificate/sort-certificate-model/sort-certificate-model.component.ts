import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-sort-certificate-model',
  templateUrl: './sort-certificate-model.component.html',
  styleUrls: ['./sort-certificate-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SORTCertificateModelComponent implements OnInit {
  IsEdit: boolean;
 

  constructor(private dialogRef: MatDialogRef<SORTCertificateModelComponent>) { }

  ngOnInit(): void {
  }

  
  CloseModal() {
    this.dialogRef.close(true);
  }

}
