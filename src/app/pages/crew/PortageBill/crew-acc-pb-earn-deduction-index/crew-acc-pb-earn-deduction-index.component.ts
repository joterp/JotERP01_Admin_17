import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-earn-deduction-index',
  templateUrl: './crew-acc-pb-earn-deduction-index.component.html',
  styleUrls: ['./crew-acc-pb-earn-deduction-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBEarnDeductionIndexComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Portage_Bill", visible: true, name: "Portage Bill" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Seafarer", visible: true, name: "Seafarer" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Joining_Date", visible: true, name:"Joining Date" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name:"Sign-Off Date" },
    { property: "Salary_Components", visible: true, name:"Salary Components" },
    { property: "Currency", visible: true, name:"Currency" },
    { property: "Amount", visible: true, name:"Amount" },
    { property: "Remarks", visible: true, name:"Remarks" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;
  
  select_vessel_data = false;
  select_Rank_data = false;
  select_CostType_data = false;

  panelOpenState = true;
  loading: boolean;
  manningFeeFormGroup: UntypedFormGroup;
  rankCategoryFormGroup: UntypedFormGroup;

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
  
  constructor(private titleService:Title, private fb:UntypedFormBuilder, private sidenavService:SidenavService) {
    this.titleService.setTitle(`Earn & Deduction Index`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.manningFeeFormGroup = this.fb.group({
      chkPortage_Bill_Month:[''],
      chkVessel:[''],
      chkSalary_Types:[''],
      chkRank:[''],
      txtStaff_Name: [''],
      chkAmount:[true],
      chkRemark:[''],
      radioNew_Reqsn_Status: ['1'],
    });

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
  clearFilter() {
    this.loading = true;
    this.manningFeeFormGroup.reset();
    this.manningFeeFormGroup.get("STATUS").patchValue("1");
    
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
}
