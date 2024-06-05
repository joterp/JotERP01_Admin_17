import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCAddNewTemplateModalComponent } from './purc-add-new-template-modal/purc-add-new-template-modal.component';
import { PURCAddNewItemModalComponent } from './purc-add-new-item-modal/purc-add-new-item-modal.component';
import { PURCAddNewCatalogueModalComponent } from './purc-add-new-catalogue-modal/purc-add-new-catalogue-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-add-item-template',
  templateUrl: './purc-add-item-template.component.html',
  styleUrls: ['./purc-add-item-template.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class PURCAddITEMTEMPLATEComponent implements OnInit {
  pageSize = 10;

  itemdataSource: MatTableDataSource<any> | null;
  templatedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE1") table1: ElementRef;
  @ViewChild("TABLE2") table2: ElementRef;




  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  filterFormGroup: UntypedFormGroup;
  dialogRef: any;
  templateFilterFormGroup: UntypedFormGroup;
  ItemFilterFormGroup: UntypedFormGroup;
  IsEdit: boolean;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {

      this.titleService.setTitle(`Requisitions Template`);
     }
  @Input()
  columnsTemp: ListColumn[] = [
    { property: "Template_Name", visible: true, name: "Template_Name" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  @Input()
  columnsCat: ListColumn[] = [
    { property: "Drawing_Number", visible: true, name: "Drawing_Number" },
    { property: "Part_Number", visible: true, name: "Part_Number" },
    { property: "Item_Description", visible: true, name: "Item_Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "Required_Quantity", visible: true, name: "Required_Quantity" },

    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];



  get visibleColumnsTemplate() {
    return this.columnsTemp
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsCatalogue() {
    return this.columnsCat
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.templateFilterFormGroup = this.fb.group({
      txtDrawing_Number: [""]
    });

    this.ItemFilterFormGroup = this.fb.group({
      txtDrawing_Number: [""],
      txtPart_Number: [""],
      txtItem_Description: [""],
      drpUnit: [""]
    });
    this.itemdataSource = new MatTableDataSource();
    this.templatedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.templatedataSource.sort = this.sort;
    this.itemdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.templateFilterFormGroup.reset();
    this.ItemFilterFormGroup.reset();


    this.templateFilterFormGroup.get("STATUS").patchValue("1");
    this.ItemFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewTemplate(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(PURCAddNewTemplateModalComponent,
      {
        minHeight: "25%",
        minWidth: "25%",
        disableClose: true,
        data: data
      });

    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((data: any) => {
    });
  }

  saveNewItem(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(PURCAddNewItemModalComponent,
      {
        minHeight: "25%",
        minWidth: "30%",
        disableClose: true,
        data: data
      });

    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((data: any) => {
    });
  }
  saveItemFromCatalogue(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(PURCAddNewCatalogueModalComponent,
      {
        minHeight: "35%",
        minWidth: "35%",
        disableClose: true,
        data: data
      });

    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((data: any) => {
    });
  }

}