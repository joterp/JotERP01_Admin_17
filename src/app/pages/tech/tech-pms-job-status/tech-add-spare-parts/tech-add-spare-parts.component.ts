import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-add-spare-parts',
  templateUrl: './tech-add-spare-parts.component.html',
  styleUrls: ['./tech-add-spare-parts.component.scss']
})
export class TECHAddSparePartsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<TECHAddSparePartsComponent>) { }

  ngOnInit(): void {

  }

  CloseModal(){
    this.dialogRef.close(null);
  }
  
}
