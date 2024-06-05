import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-tech-vmp-pms-change-request-index',
  templateUrl: './tech-vmp-pms-change-request-index.component.html',
  styleUrls: ['./tech-vmp-pms-change-request-index.component.scss'], 
  encapsulation:ViewEncapsulation.None,
  
})
export class TECHVMPPMSChangeRequestIndexComponent implements OnInit {

  routeTitle: string = '';
  stringHtml: string = null;
  panelOpenState = true;
  CatalogueFilterForm:UntypedFormGroup;
  SubCatalogueFilterForm:UntypedFormGroup;
  ItemsFilterForm:UntypedFormGroup;
  PMSJobsFilterForm:UntypedFormGroup;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  cataloguescolumns: ListColumn[] = [
    { property: "Old_Catalogue", visible: true, name: "Catalogue" },
    { property: "Old_Particulars", visible: true, name: "Particulars" },
    { property: "Old_Set_Installed", visible: true, name: "Set Installed" },
    { property: "Old_Model", visible: true, name: "Model" },
    { property: "Old_Serial_Number", visible: true, name: "Serial Number" },
    { property: "Old_Critical", visible: true, name: "Critical" },
    { property: "Old_Motor_Rating", visible: true, name: "Motor Rating" },
    { property: "Old_Motor_Running_Current", visible: true, name: "Motor Running Current" },
    { property: "Old_Bearing_Coupling_End", visible: true, name: "Bearing Coupling End" },
    { property: "Old_Bearing_Free_End", visible: true, name: "Bearing Free End" },
    { property: "Old_Shipboard_PIC", visible: true, name: "Shipboard PIC" },
    { property: "New_Catalogue", visible: true, name: "Catalogue" },
    { property: "New_Particulars", visible: true, name: "Particulars" },
    { property: "New_Set_Installed", visible: true, name: "Set Installed" },
    { property: "New_Model", visible: true, name: "Model" },
    { property: "New_Serial_Number", visible: true, name: "Serial Number" },
    { property: "New_Critical", visible: true, name: "Critical" },
    { property: "New_Motor_Rating", visible: true, name: "Motor Rating" },
    { property: "New_Motor_Running_Current", visible: true, name: "Motor Running Current" },
    { property: "New_Bearing_Coupling_End", visible: true, name: "Bearing Coupling End" },
    { property: "New_Bearing_Free_End", visible: true, name: "Bearing Free End" },
    { property: "New_Shipboard_PIC", visible: true, name: "Shipboard PIC" },

  ] as ListColumn[];

  subcataloguescolumns: ListColumn[] = [
    { property: "Old_SubCatalogue", visible: true, name: "SubCatalogue" },
    { property: "Old_Particulars", visible: true, name: "Particulars" },
    { property: "New_SubCatalogue", visible: true, name: "SubCatalogue" },
    { property: "New_Particulars", visible: true, name: "Particulars" },

  ] as ListColumn[];

  itemscolumns: ListColumn[] = [
    { property: "Old_Drawing_No", visible: true, name: "Drawing No" },
    { property: "Old_Part_No", visible: true, name: "Part No" },
    { property: "Old_Item_Name", visible: true, name: "Item Category Name" },
    { property: "Old_Description", visible: true, name: "Old Description" },
    { property: "Old_Item_Category", visible: true, name: "Item Category Category" },
    { property: "Old_Unit", visible: true, name: "Unit" },
    { property: "Old_Critical", visible: true, name: "Critical" },
    { property: "Old_Inventory_Max", visible: true, name: "Inventory Max" },
    { property: "Old_Inventory_Min", visible: true, name: "Inventory Min" },
    { property: "New_Drawing_No", visible: true, name: "Drawing No" },
    { property: "New_Part_No", visible: true, name: "Part No" },
    { property: "New_Item_Name", visible: true, name: "Item Category Name" },
    { property: "New_Description", visible: true, name: "Old Description" },
    { property: "New_Item_Category", visible: true, name: "Item Category" },
    { property: "New_Unit", visible: true, name: "Unit" },
    { property: "New_Critical", visible: true, name: "Critical" },
    { property: "New_Inventory_Max", visible: true, name: "Inventory Max" },
    { property: "New_Inventory_Min", visible: true, name: "Inventory Min" },
  ] as ListColumn[];

  pmsjobscolumns:ListColumn[] = [
    { property: "Old_Type", visible: true, name: "Type" },
    { property: "Old_Value", visible: true, name: "Value" },
    { property: "New_Type", visible: true, name: "Type" },
    { property: "New_Value", visible: true, name: "Value" },
   
  ] as ListColumn[];
  pmsjobscolumns1:ListColumn[] = [
    { property: "Old_Job_Code", visible: true, name: "Job Code" },
    { property: "Old_Job_Title", visible: true, name: "Job Title" },
    { property: "Old_Decription", visible: true, name: "Decription" },
    { property: "Old_Rank", visible: true, name: "Rank" },
    { property: "Old_Frequency", visible: true, name: "Frequency" },
    { property: "Old_Department", visible: true, name: "Department" },
    { property: "Old_CMS", visible: true, name: "CMS" },
    { property: "Old_Critical", visible: true, name: "Critical" },
    { property: "Old_Job_Type", visible: true, name: "Job Type" },
    { property: "New_Job_Code", visible: true, name: "Job Code" },
    { property: "New_Job_Title", visible: true, name: "Job Title" },
    { property: "New_Decription", visible: true, name: "Decription" },
    { property: "New_Rank", visible: true, name: "Rank" },
    { property: "New_Frequency", visible: true, name: "Frequency" },
    { property: "New_Department", visible: true, name: "Department" },
    { property: "New_CMS", visible: true, name: "CMS" },
    { property: "New_Critical", visible: true, name: "Critical" },
    { property: "New_Job_Type", visible: true, name: "Job Type" },
   
  ] as ListColumn[];

  pageSize = 10;
  CataloguesdataSource: MatTableDataSource<any> | null;
  SubCataloguesdataSource: MatTableDataSource<any> | null;
  ItemsdataSource: MatTableDataSource<any> | null;
  PMSJobsdataSource: MatTableDataSource<any> | null;

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Change Request Index`);
   }

   get visibleColumnsCatalogues() {
    return this.cataloguescolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  get visibleColumnsSubCatalogues() {
    return this.subcataloguescolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsItems() {
    return this.itemscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsPMSJobs() {
    return this.pmsjobscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsPMSJobs1() {
    return this.pmsjobscolumns1
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.CataloguesdataSource = new MatTableDataSource();
    this.SubCataloguesdataSource = new MatTableDataSource();
    this.ItemsdataSource = new MatTableDataSource();
    this.PMSJobsdataSource = new MatTableDataSource();

    this.CatalogueFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpTemplate_Type:[''],
      drpDepartment:[''],
      drpVessel_Location:[''],
      drpShow:[''],
      drpIs_Verified:[''],
      drpIs_Actioned:[''],
      Shipboard_PIC:['']
    });

    this.SubCatalogueFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpTemplate_Type:[''],
      drpDepartment:[''],
      drpVessel_Location:[''],
      drpShow:[''],
      drpIs_Verified:[''],
      drpIs_Actioned:[''],
      Shipboard_PIC:['']
    });

    this.ItemsFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpCatalogue:[''],
      drpSubCatalogues:[''],
      drpShow:[''],
      drpDescription:[''],
      drpIs_Verified:[''],
      drpIs_Actioned:['']
    });

    this.PMSJobsFilterForm = this.fb.group({
      drpFleet:[''],
      drpVessel:[''],
      drpMachinery:[''],
      drpSubComponent:[''],
      drpShow:[''],
      drpIs_Verified:[''],
      drpIs_Actioned:[''],
      Shipboard_PIC:['']
    })
    this.routeTitle = this.titleService.getTitle();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.CataloguesdataSource.paginator = this.paginator;
    this.CataloguesdataSource.sort = this.sort;
    this.SubCataloguesdataSource.paginator = this.paginator;
    this.SubCataloguesdataSource.sort = this.sort;
    this.ItemsdataSource.paginator = this.paginator;
    this.ItemsdataSource.sort = this.sort;
    this.PMSJobsdataSource.paginator = this.paginator;
    this.PMSJobsdataSource.sort = this.sort;
    
  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

  contentChanged(obj: any) {
    this.stringHtml = obj.html;
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

}
