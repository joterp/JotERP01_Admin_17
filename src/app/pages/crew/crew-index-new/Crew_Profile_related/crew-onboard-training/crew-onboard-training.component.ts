import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-crew-onboard-training',
  templateUrl: './crew-onboard-training.component.html',
  styleUrls: ['./crew-onboard-training.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWOnboardTrainingComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Training_Date", visible: true, name: "Training Date" },
    { property: "Training_Instructor", visible: true, name: "Training Instructor" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Assessment", visible: true, name: "Assessment" },
    { property: "Weak_Points_Strong_Points", visible: true, name: "Weak Points/Strong Points" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor() { }
  
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

}
