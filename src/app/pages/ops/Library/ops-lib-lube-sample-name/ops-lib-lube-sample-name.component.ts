import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OpsLibLubeSampleNameEditComponent } from './ops-lib-lube-sample-name-edit/ops-lib-lube-sample-name-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-lib-lube-sample-name',
  templateUrl: './ops-lib-lube-sample-name.component.html',
  styleUrls: ['./ops-lib-lube-sample-name.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSLIBLUBESAMPLENAMEComponent implements OnInit {
  pageSize = 10;
  displayedColumns = ['Tenure_Name', 'Tenure_Duration', 'Action'];
  oilSampledataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 
  

  loading: boolean;
  oliSamplefilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData:any= []
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Lube Oil Sample Names`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "Machinery", visible: true, name: "Machinery" },
      { property: "Sample_Name", visible: true, name: "Sample_Name" },
      { property: "Action", visible: true, name: "Action" },
      
    ] as ListColumn[];



    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.oliSamplefilterFormGroup = this.fb.group({
      drpMachinery: [""],
      txtSample_Name: [""],
      drpStatus: ["0"]
    });
    this.oilSampledataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.oilSampledataSource.paginator = this.paginator;
    this.oilSampledataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.oliSamplefilterFormGroup.reset();
    this.oliSamplefilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveOilSample(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OpsLibLubeSampleNameEditComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
      
      
  
   
    });
    } 
}
