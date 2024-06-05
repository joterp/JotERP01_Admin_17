import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-rotation-and-assignment',
  templateUrl: './crew-rotation-and-assignment.component.html',
  styleUrls: ['./crew-rotation-and-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWRotationAndAssignmentComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;
  
    RotationAssigncolumns: ListColumn[] = [
    { property: "Staff", visible: true, name: "Staff" },
    { property: "Select", visible: true, name: "Select" },

  ] as ListColumn[];

  RotationAssign2columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Presently_Onboard", visible: true, name: "Presently Onboard" },
    { property: "Assignment1", visible: true, name: "Assignment1" },

  ] as ListColumn[];
  
    RotationAssigndataSource: MatTableDataSource<any> | null;
    RotationAssign2dataSource: MatTableDataSource<any> | null;
    
  RotationAndAssignment1FilterForm:UntypedFormGroup; 
  RotationAndAssignment2FilterForm:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Rotation & Assignment`);
   }

   get visibleColumnsRotationAssign() {
    return this.RotationAssigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsRotationAssign2() {
    return this.RotationAssign2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.RotationAssigndataSource = new MatTableDataSource();
    this.RotationAssign2dataSource = new MatTableDataSource();
    
     this.RotationAndAssignment1FilterForm = this.fb.group({
      drpVessel:[''],
      txtStaff_Code:[''],
      drpRank:[''],
      radio_btn:['']
     });

     this.RotationAndAssignment2FilterForm = this.fb.group({
      drpVessel:[''],
      drpRank:[''],
      txtStaff_Name:[''],

     });
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
