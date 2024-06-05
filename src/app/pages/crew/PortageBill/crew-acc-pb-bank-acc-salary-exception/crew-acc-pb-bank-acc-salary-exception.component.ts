import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { TECHSendMailModalComponent } from 'src/app/pages/tech/tech-defect-list-index/tech-send-mail-modal/tech-send-mail-modal.component';

@Component({
  selector: 'fury-crew-acc-pb-bank-acc-salary-exception',
  templateUrl: './crew-acc-pb-bank-acc-salary-exception.component.html',
  styleUrls: ['./crew-acc-pb-bank-acc-salary-exception.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBBankAccSalaryExceptionComponent implements OnInit {

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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Contract_Date", visible: true, name: "Contract Date" },
    { property: "Contract_Date_Left_Home", visible: true, name: "Date Left Home" },
    { property: "Salary_Date_Left_Home", visible: true, name: "Date Left Home" },
    { property: "Salary_Effective_Date", visible: true, name: "Effective Date" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;	

  BankAccSalaryFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) {
    this.titleService.setTitle(`Bank Acc & Salary Exceptions Report`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

   this.BankAccSalaryFormGroup = this.fb.group({
    Seafarer:[''],
    radioShow_Status:['']
   })
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


  SendMail(data: object) {
    const dialogRef = this.dialog.open(TECHSendMailModalComponent, {
      width: "60%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;

    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
