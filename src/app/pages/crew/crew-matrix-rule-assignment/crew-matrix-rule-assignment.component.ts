import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';


import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWMatrixRuleAssignmentAddComponent } from './crew-matrix-rule-assignment-add/crew-matrix-rule-assignment-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-matrix-rule-assignment',
  templateUrl: './crew-matrix-rule-assignment.component.html',
  styleUrls: ['./crew-matrix-rule-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMatrixRuleAssignmentComponent implements OnInit {
  pageSize = 10;

  ruleAssignmentdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  ruleAssignmentFormGroup: UntypedFormGroup;

  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Matrix Rule`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Rule", visible: true, name: "Rule" },
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Vessel_Type", visible: true, name: "Vessel_Type" },
       { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
       { property: "Vessel_Fleet", visible: true, name: "Vessel_Fleet" },
       { property: "Rank", visible: true, name: "Rank" },
       { property: "Rank_Category", visible: true, name: "Rank_Category" },
       { property: "Department", visible: true, name: "Department" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get matrixRuleAssignmentvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.ruleAssignmentFormGroup = this.fb.group({
      txtRule: [""],
      drpVessel_Name: [""],
      drpVessel_Type: [""],
      drpVessel_Flag: [""],
      drpVessel_Fleet: [""],
      drpRank: [""],
      drpRank_Category: [""],
      drpDepartment:[""],
      drpStatus: ["1"]
    });
    this.ruleAssignmentdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.ruleAssignmentdataSource.paginator = this.paginator;
    this.ruleAssignmentdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.ruleAssignmentFormGroup.reset();
    this.ruleAssignmentFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }

    optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
      newStatus = false;
      }
    });
    this.allSelected = newStatus;
    }
    saveMatrixRule(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWMatrixRuleAssignmentAddComponent,
        {
          width: "50%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

}
