import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSNewRemarkAddComponent } from './ops-new-remark-add/ops-new-remark-add.component';
import { OPSNewItemAddComponent } from './ops-new-item-add/ops-new-item-add.component';
import { OPSItemsFromLibraryAddComponent } from './ops-items-from-library-add/ops-items-from-library-add.component';
import { OPSTransferFromKitAddComponent } from './ops-transfer-from-kit-add/ops-transfer-from-kit-add.component';
import { OPSNewPermitAddComponent } from './ops-new-permit-add/ops-new-permit-add.component';
import { OPSNewLocationAddComponent } from './ops-new-location-add/ops-new-location-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-fam-ammunition-kit-add',
  templateUrl: './ops-fam-ammunition-kit-add.component.html',
  styleUrls: ['./ops-fam-ammunition-kit-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSFamAmmunitionKitAddComponent implements OnInit {
  pageSize = 10;

  NewRemarkdataSource: MatTableDataSource<any> | null;
  CategorytdataSource: MatTableDataSource<any> | null;
  PermitdataSource: MatTableDataSource<any> | null;
  NewLocationdataSource: MatTableDataSource<any> | null;

  @ViewChild("TABLE") table1: ElementRef;
  @ViewChild("TABLE") table2: ElementRef;
  @ViewChild("TABLE") table3: ElementRef;
  @ViewChild("TABLE") table4: ElementRef;

  @ViewChild(MatPaginator, { static: true }) firstpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) secondpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) thirdpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) fourthpaginator: MatPaginator;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  FireArmKitDetailsFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Kit Number/0`);
     }
     @Input()
     remarkscolumns: ListColumn[] = [
       { property: "Remarks", visible: true, name: "Remarks" },
       { property: "Created_By", visible: true, name: "Created_By" },
       { property: "Date", visible: true, name: "Date" }
      
     ] as ListColumn[];

     @Input()
     categorycolumns: ListColumn[] = [
       { property: "Category", visible: true, name: "Category" },
    
      
     ] as ListColumn[];

     @Input()
     permitcolumns: ListColumn[] = [
       { property: "Country", visible: true, name: "Country" },
       { property: "Permit_Number", visible: true, name: "Permit_Number" },
       { property: "Issued_Date", visible: true, name: "Issued_Date" },
       { property: "Expiry_Date", visible: true, name: "Expiry_Date" },
       { property: "Remarks", visible: true, name: "Remarks" },
       { property: "Status", visible: true, name: "Status" }
     ] as ListColumn[];

     @Input()
     locationcolumns: ListColumn[] = [
       { property: "Location_Name", visible: true, name: "Location_Name" },
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Port", visible: true, name: "Port" },
       { property: "Embarkation_Date", visible: true, name: "Embarkation_Date" },
       { property: "Disembarkation_Date", visible: true, name: "Disembarkation_Date" },
       { property: "Remarks", visible: true, name: "Remarks" },
       { property: "COD", visible: true, name: "COD" }
     ] as ListColumn[];
 
     get NewRemarksvisibleColumns() {
       return this.remarkscolumns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     get CategoryvisibleColumns() {
      return this.categorycolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

    get PermitvisibleColumns() {
      return this.permitcolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

    get NewLocationvisibleColumns() {
      return this.locationcolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.FireArmKitDetailsFilterFormGroup = this.fb.group({
      txtKit_Number: [""],
      drpStatus: [""]
    });
    this.NewRemarkdataSource = new MatTableDataSource();
    this.CategorytdataSource = new MatTableDataSource();
    this.PermitdataSource = new MatTableDataSource();
    this.NewLocationdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.NewRemarkdataSource.paginator = this.firstpaginator;
    this.CategorytdataSource.paginator = this.secondpaginator;
    this.PermitdataSource.paginator = this.thirdpaginator;
    this.NewLocationdataSource.paginator = this.fourthpaginator;

    this.NewRemarkdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.FireArmKitDetailsFilterFormGroup.reset();
    this.FireArmKitDetailsFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewRemark(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSNewRemarkAddComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    saveNewItem(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(OPSNewItemAddComponent,
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
      saveNewItemsLib(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(OPSItemsFromLibraryAddComponent,
          {
            width: "70%",
            maxHeight: "90%",
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.afterClosed().subscribe((data:any)=>{
         
        });
        } 
        saveNewItemKit(data:object, IsEdit:boolean) {
          const dialogRef = this.dialog.open(OPSTransferFromKitAddComponent,
            {
              width: "70%",
              maxHeight: "90%",
              disableClose: true,
              data:data
            });
      
            dialogRef.componentInstance.IsEdit= IsEdit;
          dialogRef.afterClosed().subscribe((data:any)=>{
           
          });
          } 

          saveNewPermit(data:object, IsEdit:boolean) {
            const dialogRef = this.dialog.open(OPSNewPermitAddComponent,
              {
                width: "40%",
                maxHeight: "90%",
                disableClose: true,
                data:data
              });
        
              dialogRef.componentInstance.IsEdit= IsEdit;
            dialogRef.afterClosed().subscribe((data:any)=>{
             
            });
            } 

            saveNewLocation(data:object, IsEdit:boolean) {
              const dialogRef = this.dialog.open(OPSNewLocationAddComponent,
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
