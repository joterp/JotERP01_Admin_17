import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'fury-tech-edit-spare-part-item',
  templateUrl: './tech-edit-spare-part-item.component.html',
  styleUrls: ['./tech-edit-spare-part-item.component.scss']
})
export class TECHEditSparePartItemComponent implements OnInit {

  routeTitle: string = "";
  constructor(private dialogRef:MatDialogRef<TECHEditSparePartItemComponent>, private titleService:Title) {

    this.titleService.setTitle(`Edit Spare Parts Item`);
   }

  ngOnInit(): void {

    this.routeTitle = this.titleService.getTitle();
  }

  CloseModal(){
    this.dialogRef.close(null);
  }

}
