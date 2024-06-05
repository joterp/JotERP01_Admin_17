import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OpsLibWaterInEditComponent } from './ops-lib-water-in-edit/ops-lib-water-in-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-ops-lib-water-in',
  templateUrl: './ops-lib-water-in.component.html',
  styleUrls: ['./ops-lib-water-in.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLIBWaterINComponent implements OnInit {
  pageSize = 10;

  WaterIndataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  WaterInFilterFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Hold/Tank Library`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Tank_Name", visible: true, name: "Tank_Name" },
      { property: "Type", visible: true, name: "Type" },
      { property: "Capacity_M", visible: true, name: "Capacity_M" },
      { property: "Capacity_per", visible: true, name: "Capacity_per" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get WaterInvisibleColumns() {
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
    this.WaterInFilterFormGroup = this.fb.group({
      drpVessel_Name: [""],
      txtTank_Name: [""],
      drpType : [""],
      drpStatus: ["1"]
    });
    this.WaterIndataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.WaterIndataSource.paginator = this.paginator;
    this.WaterIndataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.WaterInFilterFormGroup.reset();
    this.WaterInFilterFormGroup.get("STATUS").patchValue("1");
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
    saveNewTank(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(OpsLibWaterInEditComponent,
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
