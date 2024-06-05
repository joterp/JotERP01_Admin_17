import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-tech-machinery-details',
  templateUrl: './tech-machinery-details.component.html',
  styleUrls: ['./tech-machinery-details.component.scss']
})
export class TECHMachineryDetailsComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<TECHMachineryDetailsComponent>) { }

  ngOnInit(): void {
  
  }

  CloseModal(){
    this.dialogRef.close(null);
  }
}
