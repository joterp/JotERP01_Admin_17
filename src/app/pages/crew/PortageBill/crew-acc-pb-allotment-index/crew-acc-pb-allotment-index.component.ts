import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWAllotmentIndexViewAndVerifyComponent } from './crew-allotment-index-view-and-verify/crew-allotment-index-view-and-verify.component';
import { CREWAllotmentIndexRedFlagReasonComponent } from './crew-allotment-index-red-flag-reason/crew-allotment-index-red-flag-reason.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-acc-pb-allotment-index',
  templateUrl: './crew-acc-pb-allotment-index.component.html',
  styleUrls: ['./crew-acc-pb-allotment-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBAllotmentIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "rownum", visible: true, name: "rownum" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "Manning_Office", visible: true, name:"Manning Office" },
    { property: "Acc_No", visible: true, name: "Acc. No" },
    { property: "Bank_Name", visible: true, name:"Bank Name" },
    { property: "PB_Date", visible: true, name:"PB Date" },
    { property: "Additional", visible: true, name:"" },
    { property: "Currency", visible: true, name:"Currency" },
    { property: "Amount", visible: true, name:"Amount" },
    { property: "Percentage", visible: true, name:"%" },
    { property: "blank", visible: true, name:"" },
    { property: "Verify", visible: true, name:"Verify" },
    { property: "View_Verify", visible: true, name:"View And Verify" },
    { property: "Mark_As_Paid", visible: true, name:"Mark As Paid" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  AllotmentIndexFilterForm:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private titleService:Title, private sidenavService:SidenavService, private dialog:MatDialog) {
    this.titleService.setTitle(`Allotment Index`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
  

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

       this.AllotmentIndexFilterForm = this.fb.group({
        drpFleet:[''],
        drpVessel:[''],
        drpYear:[''],
        drpMonth:[''],
        txtStaff_Name:[''],
        txtBank_Name:[''],
        drpNationality:[''],
        drpManning_Office:[''],
        radioVerified:[''],
        chkFlagged_items:[''],
        chkAmount:['']
       })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWAllotmentIndexViewAndVerifyComponent, {
      width: "48%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
      // this.FetchAllDepartment();
    });
  }

  AddFormData2(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWAllotmentIndexRedFlagReasonComponent, {
      width: "40%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
      // this.FetchAllDepartment();
    });
  }


}
