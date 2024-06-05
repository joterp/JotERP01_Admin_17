import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWEvaluationToSuperintendentModalComponent } from './crew-evaluation-to-superintendent-modal/crew-evaluation-to-superintendent-modal.component';
import { CREWEvaluationAddModalComponent } from './crew-evaluation-add-modal/crew-evaluation-add-modal.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-evaluations',
  templateUrl: './crew-evaluations.component.html',
  styleUrls: ['./crew-evaluations.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CREWEvaluationsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Evaluation_Name", visible: true, name: "Evaluation Name" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Evaluation_Type", visible: true, name: "Evaluation Type" },
    { property: "Evaluator", visible: true, name: "Evaluator" },
    { property: "Planned_Date", visible: true, name: "Planned Date" },
    { property: "Evaluation_Date", visible: true, name: "Evaluation Date" },
    { property: "Max_Marks", visible: true, name: "Max Marks" },
    { property: "Marks_Obtained", visible: true, name: "Marks Obtained" },
    { property: "Result", visible: true, name: "Result %" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Is_Verified", visible: true, name: "Is Verified" },
    { property: "Action", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  constructor(private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWEvaluationAddModalComponent, {
      width: "50%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }

  SendFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWEvaluationToSuperintendentModalComponent, {
      width: "60%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }


}
