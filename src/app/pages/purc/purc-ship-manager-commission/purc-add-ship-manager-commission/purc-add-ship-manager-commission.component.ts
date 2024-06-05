import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';

@Component({
  selector: 'fury-purc-add-ship-manager-commission',
  templateUrl: './purc-add-ship-manager-commission.component.html',
  styleUrls: ['./purc-add-ship-manager-commission.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PURCAddShipManagerCommissionComponent implements OnInit {

  ShipManagerFormGroup:UntypedFormGroup;
  FeedbackPopupdataSource: MatTableDataSource<any> | null;
	  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
@ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild("TABLE") table: ElementRef;
pageSize="10";
feedbackpopupcolumns: ListColumn[] = [
  { property: "Acct_Code", visible: true, name: "Acct Code" },
  { property: "Commision_Rate", visible: true, name: "Commision_Rate (%)" },
  { property: "Implentation_Date", visible: true, name: "Implentation Date" },
  { property: "Created_By", visible: true, name: "Created By" },
  { property: "Created_On", visible: true, name: "Created On" },

] as ListColumn[];

  constructor(private titleService:Title, private fb:UntypedFormBuilder,  private dialogRef:MatDialogRef<PURCAddShipManagerCommissionComponent>,) {
    this.titleService.setTitle(`Ship Manager Commisson`);
    }
	
    get visibleColumnsFeedbackPopup() {
      return this.feedbackpopupcolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.FeedbackPopupdataSource = new MatTableDataSource();

       this.ShipManagerFormGroup = this.fb.group({
           drpAccount_Code:[''],
           txtCommission_Rate:[''],
           Implementation_Date:['']
       })
  }
  ngAfterViewInit(){
    this.FeedbackPopupdataSource.paginator = this.paginator;
      this.FeedbackPopupdataSource.sort = this.sort;
  }
  CloseModal() {
    this.dialogRef.close(null);
  }

}
