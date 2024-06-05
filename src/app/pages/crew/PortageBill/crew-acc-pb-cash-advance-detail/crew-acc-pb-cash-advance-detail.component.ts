import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-cash-advance-detail',
  templateUrl: './crew-acc-pb-cash-advance-detail.component.html',
  styleUrls: ['./crew-acc-pb-cash-advance-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBCashAdvanceDetailComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()

  CashAdvanceDetailcolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Signed_On", visible: true, name: "Signed On" },
    { property: "Balance", visible: true, name: "Balance" },
    { property: "Amount_Paid", visible: true, name: "Amount Paid" },
    { property: "Remarks", visible: true, name: "Remarks" },

  ] as ListColumn[];

  CashAdvanceDetaildataSource: MatTableDataSource<any> | null;

  CashAdvanceDetailFilterForm: UntypedFormGroup;
  constructor(private sidenavService: SidenavService, private fb: UntypedFormBuilder, private titleService:Title) {
    this.titleService.setTitle(`Cash Advance Detail`);
   }

  get visibleColumnsCashAdvanceDetail() {
    return this.CashAdvanceDetailcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.CashAdvanceDetaildataSource = new MatTableDataSource();

    this.CashAdvanceDetailFilterForm = this.fb.group({
      Cash_Advance_Paid_On: [''],
      drpManning_Office: [''],
      txtStaff_Code: [''],
      drpRank: [''],

    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
