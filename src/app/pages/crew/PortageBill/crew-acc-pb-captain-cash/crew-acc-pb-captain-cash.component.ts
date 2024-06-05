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
  selector: 'fury-crew-acc-pb-captain-cash',
  templateUrl: './crew-acc-pb-captain-cash.component.html',
  styleUrls: ['./crew-acc-pb-captain-cash.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBCaptainCashComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()

  CaptainCashcolumns: ListColumn[] = [
    { property: "From_Date", visible: true, name: "From Date" },
    { property: "To_Date", visible: true, name: "To Date" },
    { property: "Opening_Balance", visible: true, name: "Opening Balance" },
    { property: "Total_Received", visible: true, name: "Total Received" },
    { property: "Total_Paid", visible: true, name: "Total Paid" },
    { property: "Closing_Balance", visible: true, name: "Closing Balance" },
    { property: "Sent_To_Office", visible: true, name: "Sent To Office" },
    { property: "Sent_Date", visible: true, name: "Sent Date" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  CaptainCashdataSource: MatTableDataSource<any> | null;

  CaptainCashFilterForm: UntypedFormGroup;
  constructor(private sidenavService: SidenavService, private titleService: Title, private fb: UntypedFormBuilder, private router:Router) {
    this.titleService.setTitle(`Captain Cash`);
  }
  get visibleColumnsCaptainCash() {
    return this.CaptainCashcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.CaptainCashdataSource = new MatTableDataSource();

    this.CaptainCashFilterForm = this.fb.group({
      From_Date: [''],
      To_Date: [''],
      drpSent_to_office: [''],
      Sent_Date: ['']
    })
  }

  gotoCREW_Captain_Cash_Detail(buttonName: string){
    if (buttonName === 'Captain_Cash_Detail') {
      this.router.navigate(['CREW/PortageBill/Captain_Cash_Detail']);
  }
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
