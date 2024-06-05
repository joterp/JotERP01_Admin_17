import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-cash-advance',
  templateUrl: './crew-acc-pb-cash-advance.component.html',
  styleUrls: ['./crew-acc-pb-cash-advance.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBCashAdvanceComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Paid_On_Date", visible: true, name: "Paid On Date" },
    { property: "Total_Amount", visible: true, name: "Total Amount" },
    { property: "Number_Of_Staff", visible: true, name: "Number Of Staff" },
    { property: "Sent_To_Office", visible: true, name: "Sent To Office?" },  
    { property: "Action", visible: true, name: "" },
    { property: "Print", visible: true, name: "" },

  ] as ListColumn[];
  
  dataSource: MatTableDataSource<any> | null;

  CashAdvanceFilterForm:UntypedFormGroup;

  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private router:Router) {
    this.titleService.setTitle(`Cash Advance`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();

      this.CashAdvanceFilterForm = this.fb.group({
        Paid_Date:[''],
        drpSent_to_office:['']
      })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  gotoCREW_Cash_Advance_Detail(buttonName:string){
    if(buttonName === 'Cash_Advance_Detail'){
      this.router.navigate(['CREW/Cash_Advance_Detail']);
  }
}

}
