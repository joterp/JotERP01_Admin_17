import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-view-portage-bill',
  templateUrl: './crew-acc-pb-view-portage-bill.component.html',
  styleUrls: ['./crew-acc-pb-view-portage-bill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBViewPortageBillComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  
  pageSize = 10;

  crewlistscolumns: ListColumn[] = [

    { property: "Pay_Slip", visible: true, name: "Pay Slip" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Contract_Date", visible: true, name: "Contract Date" },
    { property: "From", visible: true, name: "From" },
    { property: "To", visible: true, name: "To" },
    { property: "DOA_Homeport", visible: true, name: "DOA Homeport" },
    { property: "Gross_Salary", visible: true, name: "Gross Salary" },
    { property: "Worked_For_Days", visible: true, name: "Worked For(Days)" },

  ] as ListColumn[];

  earningsdeductionscolumns: ListColumn[] = [

    { property: "Opening_Balance", visible: true, name: "Opening Balance" },
    { property: "Basic_Wages", visible: true, name: "Basic Wages" },
    { property: "RoundOff_Correction", visible: true, name: "RoundOff Correction" },
    { property: "Leave_Wages", visible: true, name: "Leave_Wages" },
    { property: "Office_Instruction_Earnings", visible: true, name: "Office Instruction" },
    { property: "Other_Earning", visible: true, name: "Other Earning" },
    { property: "SPV_Salary_2", visible: true, name: "SPV Salary 2" },
    { property: "SPV_Salary", visible: true, name: "SPV Salary" },
    { property: "Incentive_Earnings", visible: true, name: "Incentive" },
    { property: "Pre_SignOn_Salary", visible: true, name: "Pre SignOn Salary" },
    { property: "SPV_Daily_Wage", visible: true, name: "SPV Daily Wage" },
    { property: "Post_SignOff_Salary", visible: true, name: "Post SignOff Salary" },
    { property: "Side_Letter", visible: true, name: "Side Letter" },
    { property: "Medical_Emegency_Earnings", visible: true, name: "Medical Emegency" },
    { property: "Traveling_Allownce", visible: true, name: "Traveling_Allownce" },
    { property: "Incentive_Deductions", visible: true, name: "Incentive" },
    { property: "Seniority", visible: true, name: "Seniority" },
    { property: "Total_Earnings", visible: true, name: "Total Earnings" },
    { property: "Allotment", visible: true, name: "Allotment" },
    { property: "Bond_Consumption", visible: true, name: "Bond Consumption" },
    { property: "Cash_Advance", visible: true, name: "Cash Advance" },
    { property: "Radio_Communication", visible: true, name: "Radio/Communication" },
    { property: "Other_Deduction", visible: true, name: "Other Deduction" },
    { property: "Office_Instruction", visible: true, name: "Office Instruction" },
    { property: "PF", visible: true, name: "P. F." },
    { property: "Medical_Emegency_Deductions", visible: true, name: "Medical Emegency" },
    { property: "Test", visible: true, name: "Test" },
    { property: "Total_Deduction", visible: true, name: "Total Deduction" },
    { property: "Balance_To_Next_Month", visible: true, name: "Balance To Next Month" },

  ] as ListColumn[];

  crewlists2columns: ListColumn[] = [
    
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    
  ] as ListColumn[];

  earningsdeductions2columns: ListColumn[] = [

    { property: "Opening_Balance", visible: true, name: "Opening Balance" },
    { property: "Basic_Wages", visible: true, name: "Basic Wages" },
    { property: "RoundOff_Correction", visible: true, name: "RoundOff Correction" },
    { property: "Leave_Wages", visible: true, name: "Leave_Wages" },
    { property: "Office_Instruction_Earnings", visible: true, name: "Office Instruction" },
    { property: "Other_Earning", visible: true, name: "Other Earning" },
    { property: "SPV_Salary_2", visible: true, name: "SPV Salary 2" },
    { property: "SPV_Salary", visible: true, name: "SPV Salary" },
    { property: "Incentive_Earnings", visible: true, name: "Incentive -111" },
    { property: "Pre_SignOn_Salary", visible: true, name: "Pre SignOn Salary" },
    { property: "SPV_Daily_Wage", visible: true, name: "SPV Daily Wage" },
    { property: "Post_SignOff_Salary", visible: true, name: "Post SignOff Salary" },
    { property: "Side_Letter", visible: true, name: "Side Letter" },
    { property: "Medical_Emegency_Earnings", visible: true, name: "Medical Emegency" },
    { property: "Traveling_Allownce", visible: true, name: "Traveling_Allownce" },
    { property: "Incentive_Deductions", visible: true, name: "Incentive" },
    { property: "Seniority", visible: true, name: "Seniority" },
    { property: "Total_Earnings", visible: true, name: "Total Earnings" },
    { property: "Allotment", visible: true, name: "Allotment" },
    { property: "Bond_Consumption", visible: true, name: "Bond Consumption" },
    { property: "Cash_Advance", visible: true, name: "Cash Advance" },
    { property: "Radio_Communication", visible: true, name: "Radio/Communication" },
    { property: "Other_Deduction", visible: true, name: "Other Deduction" },
    { property: "Office_Instruction", visible: true, name: "Office Instruction" },
    { property: "PF", visible: true, name: "P. F." },
    { property: "Medical_Emegency_Deductions", visible: true, name: "Medical Emegency" },
    { property: "Test", visible: true, name: "Test" },
    { property: "Total_Deduction", visible: true, name: "Total Deduction" },

  ] as ListColumn[];

  CrewListsdataSource: MatTableDataSource<any> | null;	
  CrewLists2dataSource: MatTableDataSource<any> | null;	
  EarningsDeductionsdataSource: MatTableDataSource<any> | null; 
  EarningsDeductions2dataSource: MatTableDataSource<any> | null; 
  
  keepLeft: boolean = true;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder, private titleService:Title) {
    this.titleService.setTitle(`View Portage Bill`);
   }
   get visibleColumnsCrewLists() {
    return this.crewlistscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsEarningsDeductions() {
    return this.earningsdeductionscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsCrewLists2() {
    return this.crewlists2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsEarningsDeductions2() {
    return this.earningsdeductions2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  ngOnInit(): void {
    this.CrewListsdataSource = new MatTableDataSource();   
    this.EarningsDeductionsdataSource = new MatTableDataSource(); 
    this.CrewLists2dataSource = new MatTableDataSource();
    this.EarningsDeductions2dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
