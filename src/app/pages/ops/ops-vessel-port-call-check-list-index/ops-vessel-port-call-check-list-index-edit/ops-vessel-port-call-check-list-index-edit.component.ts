import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-ops-vessel-port-call-check-list-index-edit',
  templateUrl: './ops-vessel-port-call-check-list-index-edit.component.html',
  styleUrls: ['./ops-vessel-port-call-check-list-index-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSVesselPortCallCheckListIndexEditComponent implements OnInit {

  EditChecklistFormGroup:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  checklistdetailscolumns: ListColumn[] = [
 { property: "Task", visible: true, name: "Task" },
    { property: "Comments", visible: true, name: "Comments" },
    { property: "Completed_By", visible: true, name: "Completed By" },
    { property: "Completed_Date", visible: true, name: "Completed Date" },
	
  ] as ListColumn[];
  
  pageSize = 10;
  ChecklistDetailsdataSource: MatTableDataSource<any> | null;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSVesselPortCallCheckListIndexEditComponent>) { }

  
  get visibleColumnsChecklistDetails() {
    return this.checklistdetailscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  

  ngOnInit(): void {
    this.ChecklistDetailsdataSource = new MatTableDataSource();

   this.EditChecklistFormGroup = this.fb.group({
    txtClient:[''],
    txVessel:[''],
    txtVessel_Owner:[''],
    txtIMO_No:[''],
    txtVessel_Flag:['']
   })

  }

  ngAfterViewInit(){
    this.ChecklistDetailsdataSource.paginator = this.paginator;
    this.ChecklistDetailsdataSource.sort = this.sort;
	
  }

  CloseModal() {
    this.dialogRef.close(true);
  }


}
