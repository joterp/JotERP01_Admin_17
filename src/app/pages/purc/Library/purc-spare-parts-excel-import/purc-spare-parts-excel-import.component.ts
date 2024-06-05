import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PurcSparePartsExcelImportAlertComponent } from './purc-spare-parts-excel-import-alert/purc-spare-parts-excel-import-alert.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-spare-parts-excel-import',
  templateUrl: './purc-spare-parts-excel-import.component.html',
  styleUrls: ['./purc-spare-parts-excel-import.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PURCSparePartsExcelImportComponent implements OnInit {
  pageSize = 10;

  SparePartImportdataSource: MatTableDataSource<any> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
  @ViewChild("TABLE2") table2: ElementRef;
  loading: boolean;
  filterFormGroup: UntypedFormGroup;
  dialogRef: any;
  SpareImportFilterFormGroup: UntypedFormGroup;
  SpareCatalogueFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Catalogue Items - Excel Import`);



    }


    columnsCat: ListColumn[] = [
      { property: "Catalogue", visible: true, name: "Catalogue" },
      { property: "Sub_Catalogue", visible: true, name: "Sub_Catalogue" },
      { property: "Drawing_Number", visible: true, name: "Drawing_Number" },
      { property: "Part_Number", visible: true, name: "Part_Number" },
      { property: "Item_Description", visible: true, name: "Item_Description" },
      { property: "Item_Details", visible: true, name: "Item_Details" },
      { property: "Unit", visible: true, name: "Unit" },
      { property: "Qty_Max", visible: true, name: "Qty_Max" },
      { property: "Qty_Min", visible: true, name: "Qty_Min" },
      { property: "Critical", visible: true, name: "Critical" },
      { property: "ROB", visible: true, name: "ROB" },
      { property: "Catalogue_Selected", visible: true, name: "Catalogue_Selected" },
      { property: "Sub_Catalogue_Selected", visible: true, name: "Sub_Catalogue_Selected" },
      { property: "Unit_Selected", visible: true, name: "Unit_Selected" },
      { property: "CheckBox", visible: true, name: "CheckBox" }
    ] as ListColumn[];

    get visibleColumnsCatalogue() {
      return this.columnsCat
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  
    this.SpareImportFilterFormGroup = this.fb.group({
     

      drpImported_File: [""],
      radioNew_Reqsn_Status:[""],
      drpVessel: [""],
      drpCatalogue: [""],
      drpSubCatalogue: [""],
      drpUnit: [""],
      drpCritical: [""]
    });
    this.SpareCatalogueFilterFormGroup = this.fb.group({
      txtPartNo: [""],
      txtItemDescription: [""],
      radioNew_Critical_Item: ["1"],
      radioNew_Item_Status: ["0"],
      radioNew_Item_ROB: ["2"],
      radioNew_Catalogue_Selected: ["1"],
      radioNew_SubCatalogue_Selected: ["2"],
      radioNew_Unit_Selected: ["0"],

      

    });
    this.SparePartImportdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.SparePartImportdataSource.paginator = this.paginator;
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  clearFilter() {
    this.loading = true;
    this.SpareImportFilterFormGroup.reset();
    this.SpareCatalogueFilterFormGroup.reset();


    this.SpareImportFilterFormGroup.get("STATUS").patchValue("1");
    this.SpareCatalogueFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  
  alertModal(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PurcSparePartsExcelImportAlertComponent,
      {
        width: "20%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
