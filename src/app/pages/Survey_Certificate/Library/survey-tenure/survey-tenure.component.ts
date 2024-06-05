import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';


import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SURVEYTenureEditComponent } from './survey-tenure-edit/survey-tenure-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-survey-tenure',
  templateUrl: './survey-tenure.component.html',
  styleUrls: ['./survey-tenure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SURVEYTenureComponent implements OnInit {
  pageSize = 10;
  displayedColumns = ['Tenure_Name', 'Tenure_Duration', 'Action'];
  tenuredataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 
  

  loading: boolean;
  tenurefilterFormGroup: UntypedFormGroup;
  dialogRef: any;
  AllUnitsData:any= []
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Survey Tenure`);
     }

    @Input()
    columns: ListColumn[] = [
      { property: "Tenure_Name", visible: true, name: "Tenure_Name" },
      { property: "Tenure_Duration", visible: true, name: "Tenure_Duration" },
      { property: "Action", visible: true, name: "Action" },
      
    ] as ListColumn[];



    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.tenurefilterFormGroup = this.fb.group({
      txtTenure_Name: [""],
      drpStatus: ["1"]
    });
    this.tenuredataSource = new MatTableDataSource();
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.tenuredataSource.paginator = this.paginator;
    this.tenuredataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.tenurefilterFormGroup.reset();
    this.tenurefilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveNewTenure(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(SURVEYTenureEditComponent,
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
