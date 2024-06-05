import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { OPSVesselPortCallChecklistsAddComponent } from '../ops-vessel-port-call-checklists-add/ops-vessel-port-call-checklists-add.component';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-vessel-port-call-checklists',
  templateUrl: './ops-vessel-port-call-checklists.component.html',
  styleUrls: ['./ops-vessel-port-call-checklists.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselPortCallChecklistsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Closed_By", visible: true, name: "Closed By" },
    { property: "Closed_Date", visible: true, name: "Date" },
    { property: "Verified_By", visible: true, name: "Verified By" },
    { property: "Verified_Date", visible: true, name: "Date" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  ChecklistFormGroup:UntypedFormGroup;
  
  constructor(private dialogRef:MatDialogRef<OPSVesselPortCallChecklistsComponent>, private fb:UntypedFormBuilder, private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.ChecklistFormGroup = this.fb.group({
      drpVessel:[''],
      drpPort:['']
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  CloseModal() {
    this.dialogRef.close(true);
  }


  AddNewChecklist(data: object) {
    const dialogRef = this.dialog.open(OPSVesselPortCallChecklistsAddComponent, {
      width: "40%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
