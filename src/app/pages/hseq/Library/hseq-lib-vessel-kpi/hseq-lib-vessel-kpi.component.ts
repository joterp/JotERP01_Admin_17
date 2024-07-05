import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HseqLibVesselKpiAddCategoryComponent } from './hseq-lib-vessel-kpi-add-category/hseq-lib-vessel-kpi-add-category.component';
import { HseqLibVesselKpiAddObjectivesComponent } from './hseq-lib-vessel-kpi-add-objectives/hseq-lib-vessel-kpi-add-objectives.component';

@Component({
  selector: 'fury-hseq-lib-vessel-kpi',
  templateUrl: './hseq-lib-vessel-kpi.component.html',
  styleUrls: ['./hseq-lib-vessel-kpi.component.scss']
})
export class HSEQLIBVESSELKPIComponent implements OnInit {
 
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  documentFilterFormGroup: UntypedFormGroup;
  NotAssignFilterFormGroup : UntypedFormGroup;

  authGuard: AuthGuard;
  showNotAssignVesselTable : boolean = false;
  showAssignVesselTable : boolean = false;

  selectAllChecked = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Vessel KPI Library`);
     }
     customcolumns: ListColumn[] = [
      { property: "Category_Name", visible: true, name: "Category_Name" },
      { property: "Adjust_Sort_Order", visible: true, name: "Adjust_Sort_Order" },
      { property: "Action", visible: true, name: "Action" },
      
       
     ] as ListColumn[];
   
     notassigncolumn: ListColumn[] = [
      { property: "Measurable_Objectives", visible: true, name: "Measurable_Objectives" },
      { property: "Adjust_sort_order", visible: true, name: "Adjust_sort_order" },
   
     ] as ListColumn[];

     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;


     @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;


     categorydataSource: MatTableDataSource<any> | null;
     objectivesdataSource: MatTableDataSource<any> | null;

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.documentFilterFormGroup = this.fb.group({
      // txtDoc_Name: [""],
      // drpNAd_Type: [""],
      drpCargo_State: [""],
      drpMandatory: [""]
    });
    this.NotAssignFilterFormGroup = this.fb.group({
      drpVessel: [""]
    });
    
    this.categorydataSource = new MatTableDataSource();
    this.objectivesdataSource = new MatTableDataSource();

  }
  ngAfterViewInit() {
    this.categorydataSource.paginator = this.paginator;
    this.objectivesdataSource.paginator = this.paginator2;
    
   
   }
   get documentvisibleColumns() {
    return this.customcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get NotAssignedvisibleColumns() {
    return this.notassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  showTableDocumentAssign(data:any,type:string) {
    if(type==='CustomFields') {
      this.showNotAssignVesselTable = true;
      this.showAssignVesselTable = true;
    }
  }

  saveNewCategory(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HseqLibVesselKpiAddCategoryComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    saveNewObjectives(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(HseqLibVesselKpiAddObjectivesComponent,
        {
          width: "35%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

}
