import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCostRegistrationIndexAddComponent } from './crew-cost-registration-index-add/crew-cost-registration-index-add.component';
import { CREWVerifyCostDetailsModalComponent } from './crew-verify-cost-details-modal/crew-verify-cost-details-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-cost-registration-index',
  templateUrl: './crew-cost-registration-index.component.html',
  styleUrls: ['./crew-cost-registration-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCostRegistrationIndexComponent implements OnInit {
  select_vessel_data = false;
  select_Rank_data = false;
  select_CostType_data = false;

  panelOpenState = true;
  loading: boolean;
  manningFeeFormGroup: UntypedFormGroup;
  rankCategoryFormGroup: UntypedFormGroup;

  @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
  
  dataVessel: any[] = [
    { id: 1, name: 'Alexa', is_selected: false },
    { id: 2, name: 'Alexandre', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'India Yami', is_selected: false }

  ]
  dataRank: any[] = [
    { id: 1, name: 'Master', is_selected: false },
    { id: 2, name: 'Trainee Master', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'Grace River', is_selected: false }

  ]
  dataCostType: any[] = [
    { id: 1, name: 'Medical', is_selected: false },
    { id: 2, name: 'PPE', is_selected: false },
    { id: 3, name: 'Training', is_selected: false },
    { id: 4, name: 'Travel', is_selected: false },
    { id: 5, name: 'Visa', is_selected: false }

  ]

  costRegistrationdataSource: MatTableDataSource<any> | null;

  @Input()



  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Seafarer", visible: true, name: "Seafarer" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Cost_Type", visible: true, name: "Cost_Type" },
    { property: "Cost_Date", visible: true, name: "Cost_Date" },
    { property: "Cost_Details", visible: true, name: "Cost_Details" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Amount", visible: true, name: "Amount" },
    { property: "USD_Amount", visible: true, name: "USD_Amount" },
    { property: "Verified", visible: true, name: "Verified" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
    this.titleService.setTitle(`Cost Registration Index`);
  }
  get costRegistrationvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.manningFeeFormGroup = this.fb.group({
      txtStaff_Name: [""],
      Date_Form: [""],
      drpStatus: ["1"],
      radioNew_Reqsn_Status: ["1"]
    });

    this.costRegistrationdataSource = new MatTableDataSource();
  }
  clearFilter() {
    this.loading = true;
    this.manningFeeFormGroup.reset();
    this.manningFeeFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.costRegistrationdataSource.paginator = this.paginator;

  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  onSelectVesselData(e: any): void {
    for (let i = 0; i < this.dataVessel.length; i++) {
      const item = this.dataVessel[i];
      item.is_selected = e;
    }
  }
  onSelectRank(e: any): void {
    for (let i = 0; i < this.dataRank.length; i++) {
      const item = this.dataRank[i];
      item.is_selected = e;
    }
  }
  onSelectCostType(e: any): void {
    for (let i = 0; i < this.dataCostType.length; i++) {
      const item = this.dataCostType[i];
      item.is_selected = e;
    }
  }
  saveNewCostDetails(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWCostRegistrationIndexAddComponent,
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
    saveVerifyCostDetails(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWVerifyCostDetailsModalComponent,
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
