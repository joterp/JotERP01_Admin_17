import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-allotments',
  templateUrl: './crew-acc-pb-allotments.component.html',
  styleUrls: ['./crew-acc-pb-allotments.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class CREWACCPBAllotmentsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
 
  OnboardSeafarercolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Joining_Date", visible: true, name: "Joining Date" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name: "Sign Off Date" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Balance", visible: true, name: "Balance" },
    { property: "Amount", visible: true, name: "Amount" },
    { property: "Remarks", visible: true, name: "Remarks" },

  ] as ListColumn[];

  Signed_OffSeafarercolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Joining_Date", visible: true, name: "Joining Date" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name: "Sign Off Date" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Balance", visible: true, name: "Balance" },
    { property: "Amount", visible: true, name: "Amount" },
    { property: "Remarks", visible: true, name: "Remarks" },

  ] as ListColumn[];

  OnboardSeafarerdataSource: MatTableDataSource<any> | null;
  Signed_OffSeafarerdataSource: MatTableDataSource<any> | null;


  AllotmentsFilterForm:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder) { }

  get visibleColumnsOnboardSeafarer() {
    return this.OnboardSeafarercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsSigned_OffSeafarer() {
    return this.Signed_OffSeafarercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.OnboardSeafarerdataSource = new MatTableDataSource(); 
    this.Signed_OffSeafarerdataSource = new MatTableDataSource(); 

    this.AllotmentsFilterForm = this.fb.group({
      drpManning_Office:[''],
      drpMonth:[''],
      drpYear:[''],
      drpRank:[''],
      txtStaff_Code:[''],

    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
