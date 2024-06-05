import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-evaluation-index',
  templateUrl: './crew-evaluation-index.component.html',
  styleUrls: ['./crew-evaluation-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWEvaluationIndexComponent implements OnInit {
  pageSize = 10;

  evaluationIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  evaluationIndexFormGroup: UntypedFormGroup;
  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
            tooltipContent: string = `
            
           to add text here whatever you want for tooltip
             
          `;
            
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Evaluation Index `);
     }

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Seafarer", visible: true, name: "Seafarer" },
    { property: "Evaluation_Type", visible: true, name: "Evaluation_Type" },
    { property: "Evaluator", visible: true, name: "Evaluator" },
    { property: "Planned_Date", visible: true, name: "Planned_Date" },
    { property: "Completion_Date", visible: true, name: "Completion_Date" },
    { property: "Question_Answered", visible: true, name: "Question_Answered" },
    { property: "Max_Marks", visible: true, name: "Max_Marks" },
    { property: "Marks_Obtained", visible: true, name: "Marks_Obtained" },
    { property: "Result", visible: true, name: "Result" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Appraisee_Ackn", visible: true, name: "Appraisee_Ackn" },
    { property: "Pending_With", visible: true, name: "Pending_With" },
    { property: "Office_Verified", visible: true, name: "Office_Verified" },
  ] as ListColumn[];

  get evaluationvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.evaluationIndexFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpRank: [""],
      txtStaff_Name: [""],
      drpEvalution_Name: [""],
      Date_Form: [""],
      Date_To: [""],
      Date_Form_Complete: [""],
      Date_To_Complete:[""],
      drpType:["0"],
      drpStatus:["1"],
      radioNew_Verified:["1"],
      radioNew_appraisee:["1"],

    });
    this.evaluationIndexdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.evaluationIndexdataSource.paginator = this.paginator;
    this.evaluationIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.evaluationIndexFormGroup.reset();
    this.evaluationIndexFormGroup.get("STATUS").patchValue("1");
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
    
}
