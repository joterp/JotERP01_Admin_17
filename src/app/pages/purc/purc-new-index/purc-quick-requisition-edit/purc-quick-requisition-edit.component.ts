import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-quick-requisition-edit',
  templateUrl: './purc-quick-requisition-edit.component.html',
  styleUrls: ['./purc-quick-requisition-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCQuickRequisitionEditComponent implements OnInit {
  
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
  selectedFileName: string = '';
  QuickRequisitionForm:UntypedFormGroup;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;
	pageSize=10;

  quickrequisitionitemscolumns:ListColumn[] = [
    { property: "Drawing_Number", visible: true, name: "Drawing Number" },
    { property: "Part_Number", visible: true, name: "Part_Number" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "ROB", visible: true, name: "ROB" },
    { property: "Req_Qty", visible: true, name: "Req Qty" },
    { property: "Comments", visible: true, name: "Comments" },
  ] as ListColumn[];

  QuickRequisitionItemsdataSource:MatTableDataSource<any> | null;

  constructor(private router:Router, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private titleService:Title) {
    this.titleService.setTitle(`Quick Requisition`);

   }
  get visibleColumnsquickrequisitionitems(){
    return this.quickrequisitionitemscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
 

  ngOnInit(): void {
    this.QuickRequisitionItemsdataSource = new MatTableDataSource();

this.QuickRequisitionForm = this.fb.group({
  txtRequisition_Title:[''],
  drpDept_Type:['', Validators.required],
  drpDepartment:['', Validators.required],
  drpRequisition_Type:['', Validators.required],
  drpUrgency:[''],
  drpVoyage_Number:[''],
  drpDelivery_Port:[''],
  delivery_date:[''],
  txtRemarks:[''],

})

  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.QuickRequisitionItemsdataSource.paginator = this.paginator;
    this.QuickRequisitionItemsdataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }

  CancelForm(){
    this.router.navigate(['PURC/Index'])
  }

}
