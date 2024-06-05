import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSNADCIIDetailsAddComponent } from './ops-nad-cii-details-add/ops-nad-cii-details-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-cii-details',
  templateUrl: './ops-nad-cii-details.component.html',
  styleUrls: ['./ops-nad-cii-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADCIIDetailsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel_Type", visible: true, name: "Vessel Type" },
    { property: "Variable_Type", visible: true, name: "Variable Type" },
    { property: "Variable_Calc", visible: true, name: "Variable_Type" },
    { property: "Variable_Value", visible: true, name: "Variable Value" },
    { property: "Variable_A", visible: true, name: "Variable A" },
    { property: "Variable_C", visible: true, name: "Variable C" },
    { property: "Variable_CII_REF", visible: true, name: "Variable CII REF" },
    { property: "Variable_D1", visible: true, name: "Variable D1" },
    { property: "Variable_D2", visible: true, name: "Variable D2" },
    { property: "Variable_D3", visible: true, name: "Variable D3" },
    { property: "Variable_D4", visible: true, name: "Variable D4" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  CIIDetailsFilterForm:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder, private sidenavService:SidenavService, private titleService:Title, private dialog:MatDialog) {
    this.titleService.setTitle(`NAD CII Details`);
   }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

   this.CIIDetailsFilterForm = this.fb.group({
    drpVeseel_Type:[''],
    radioVariable_Calc:[''],
    drpStatus:['']
   })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddNewCIIDetails(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSNADCIIDetailsAddComponent, {
      width: "50%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }
  
}
