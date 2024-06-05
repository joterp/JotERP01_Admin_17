import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { TECHLIBWinchEditComponent } from './tech-lib-winch-edit/tech-lib-winch-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-tech-lib-winch',
  templateUrl: './tech-lib-winch.component.html',
  styleUrls: ['./tech-lib-winch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHLIBWinchComponent implements OnInit {
  pageSize = 10;

  libWinchdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  libWinchfilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`LIB Mooring Winches`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Winch_Name", visible: true, name: "Winch_Name" },
      { property: "Type", visible: true, name: "Type" },
      { property: "Physical_Location", visible: true, name: "Physical_Location" },
      { property: "Location_Details", visible: true, name: "Location_Details" },
      { property: "Catalogue", visible: true, name: "Catalogue" },
      { property: "Design_BHC", visible: true, name: "Design_BHC" },
      { property: "Rope_MBL", visible: true, name: "Rope_MBL" },
      { property: "Mooring_Drum_Dia", visible: true, name: "Mooring_Drum_Dia" },
      { property: "Freq_of_Testing", visible: true, name: "Freq_of_Testing" },
      { property: "SFI", visible: true, name: "SFI" },
      { property: "Testing_Procedure", visible: true, name: "Testing_Procedure" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    @ViewChild('select') select: MatSelect;
    allSelected=false;
    Vessel: any[] = [
      {value: 'Alexandre', viewValue: 'Alexandre'},
      {value: 'Marie', viewValue: 'Marie'},
      {value: 'yami', viewValue: 'Yami'}
      ];
     

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.libWinchfilterFormGroup = this.fb.group({
      drpVessel: [""],
      txtWinch_Name: [""],
      drpPhysical_Location: [""],
      radioType: ["1"],
      drpCatalogue: [""],
      drpSFI: [""],
      
      drpStatus: ["1"]
    });
    this.libWinchdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.libWinchdataSource.paginator = this.paginator;
    this.libWinchdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.libWinchfilterFormGroup.reset();
    this.libWinchfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }

    optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
      newStatus = false;
      }
    });
    this.allSelected = newStatus;
    }

    saveWinchDetails(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(TECHLIBWinchEditComponent,
        {
          width: "70%",
          maxHeight: "85%",
  
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
 
      });
      } 

}
