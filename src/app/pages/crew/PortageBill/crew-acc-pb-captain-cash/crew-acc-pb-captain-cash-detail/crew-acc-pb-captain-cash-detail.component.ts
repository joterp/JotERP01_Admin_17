import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWCaptainCashDetailAddComponent } from './crew-captain-cash-detail-add/crew-captain-cash-detail-add.component';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-crew-acc-pb-captain-cash-detail',
  templateUrl: './crew-acc-pb-captain-cash-detail.component.html',
  styleUrls: ['./crew-acc-pb-captain-cash-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBCaptainCashDetailComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()

  CaptainCashcolumns: ListColumn[] = [
    { property: "Paid_Date", visible: true, name: "Paid Date" },
    { property: "Port", visible: true, name: "Port" },
    { property: "Item", visible: true, name: "Item" },
    { property: "Ref_Number", visible: true, name: "Ref Number" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Recieved", visible: true, name: "Recieved" },
    { property: "Paid", visible: true, name: "Paid" },

  ] as ListColumn[];

  CaptainCashdataSource: MatTableDataSource<any> | null;
  CaptainCashDetailFilterForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private sidenavService:SidenavService, private dialog:MatDialog) { }

  get visibleColumnsCaptainCash() {
    return this.CaptainCashcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.CaptainCashdataSource = new MatTableDataSource();
    
    this.CaptainCashDetailFilterForm = this.fb.group({
      From_Date: [''],
      To_Date: [''],
      txtOpening_Balance:[''],
      txtBalance_In_Hand:[''],
      txtTotal_Recieved:[''],
      txtTotal_Paid:['']
    })

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWCaptainCashDetailAddComponent, {
      width: "50%",
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
