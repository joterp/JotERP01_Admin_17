import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWACCPBLIBSeniorityManagementAddComponent } from './crew-acc-pb-lib-seniority-management-add/crew-acc-pb-lib-seniority-management-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-acc-pb-lib-seniority-management',
  templateUrl: './crew-acc-pb-lib-seniority-management.component.html',
  styleUrls: ['./crew-acc-pb-lib-seniority-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWACCPBLIBSeniorityManagementComponent implements OnInit {
  pageSize = 10;
  panelOpenState = true;    
  seniorityManagementdataSource: MatTableDataSource<any> | null;
  seniorityDetailsdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  senioritymanagementFormGroup: UntypedFormGroup;

  @ViewChild('selectRank') selectRank: MatSelect;
  allRankSelected=false;
  Ranks: any[] = [
    {value: 'MST- Master', viewValue: 'MST - Master'},
    {value: 'MST-T - Trainee Master', viewValue: 'MST-T - Trainee Master'},
    {value: 'MST - Master_P', viewValue: 'MST - Master_P'}
    ];

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Seniority Management`);
    }
    @Input()
    columns: ListColumn[] = [
     
      { property: "Salary_Name", visible: true, name: "Salary_Name" },
      { property: "Nationality", visible: true, name: "Nationality" },
      { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
      { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
    ] as ListColumn[];
  
    get seniorityManagementvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }


    @Input()
    detailsColumns: ListColumn[] = [
      { property: "2001", visible: true, name: "2001" },
      { property: "2002", visible: true, name: "2002" },
      { property: "2003", visible: true, name: "2003" },
      { property: "2004", visible: true, name: "2004" },
      { property: "2005", visible: true, name: "2005" },
      { property: "2006", visible: true, name: "2006" },
      { property: "2007", visible: true, name: "2007" },
      { property: "2008", visible: true, name: "2008" },
      { property: "2009", visible: true, name: "2009" },
      { property: "2010", visible: true, name: "2010" },
      { property: "2011", visible: true, name: "2011" },
      { property: "2012", visible: true, name: "2012" },
      { property: "2013", visible: true, name: "2013" },
      { property: "2014", visible: true, name: "2014" },
      { property: "2015", visible: true, name: "2015" },
      { property: "2016", visible: true, name: "2016" },
      { property: "2017", visible: true, name: "2017" },
      { property: "2018", visible: true, name: "2018" },
      { property: "2019", visible: true, name: "2019" },
      { property: "2020", visible: true, name: "2020" },
      { property: "2021", visible: true, name: "2021" },
      { property: "2022", visible: true, name: "2022" },
      //  { property: "Active_Status", visible: true, name: "Status" },
     
    ] as ListColumn[];
  
    get seniorityDetailsvisibleColumns() {
      return this.detailsColumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.senioritymanagementFormGroup = this.fb.group({
      drpSalary_Name: [""],
      drpNationality: [""],
      drpVessel_Flag: [""],
      drpVessel_Type:[""],
    });
    this.seniorityManagementdataSource = new MatTableDataSource();
    this.seniorityDetailsdataSource = new MatTableDataSource();
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {   
    this.seniorityManagementdataSource.paginator = this.paginator1;
    this.seniorityManagementdataSource.sort = this.sort;

    this.seniorityDetailsdataSource.paginator = this.paginator1;
    this.seniorityDetailsdataSource.sort = this.sort;

  }
  clearFilter() {
    this.loading = true;
    this.senioritymanagementFormGroup.reset();
    this.senioritymanagementFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleRankSelection() {
    if (this.allRankSelected) {
      this.selectRank.options.forEach((item: MatOption) => item.select());
    } else {
      this.selectRank.options.forEach((item: MatOption) => item.deselect());
    }
    }

    rankoptionClick() {
    let newNatStatus = true;
    this.selectRank.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newNatStatus = false;
      }
    });
    this.allRankSelected = newNatStatus;
    }

    saveNewSeniority(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWACCPBLIBSeniorityManagementAddComponent,
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
