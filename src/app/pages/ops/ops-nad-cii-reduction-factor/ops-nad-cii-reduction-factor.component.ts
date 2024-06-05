import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSNADCIIReductionFactorAddComponent } from './ops-nad-cii-reduction-factor-add/ops-nad-cii-reduction-factor-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-cii-reduction-factor',
  templateUrl: './ops-nad-cii-reduction-factor.component.html',
  styleUrls: ['./ops-nad-cii-reduction-factor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADCIIReductionFactorComponent implements OnInit {

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Reduction_Year", visible: true, name: "Reduction Year" },
    { property: "Reduction_Factor", visible: true, name: "Reduction Factor (%)" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  CIIRductionFactorFilterForm:UntypedFormGroup;
constructor(private fb:UntypedFormBuilder, private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) { 
    this.titleService.setTitle(`NAD CII Reduction factor`);
  }
  
  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.CIIRductionFactorFilterForm = this.fb.group({
      txtRedcution_Year:[''],
      drpStatus:['']
    })
  }
 
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddNewReductionFactor(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSNADCIIReductionFactorAddComponent, {
      width: "40%",
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
