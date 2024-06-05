import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWCadetLogTrainingPlanAddComponent } from './crew-cadet-log-training-plan-add/crew-cadet-log-training-plan-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-cadet-log-training-plan',
  templateUrl: './crew-cadet-log-training-plan.component.html',
  styleUrls: ['./crew-cadet-log-training-plan.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCadetLogTrainingPlanComponent implements OnInit {
  pageSize = 10;

  trainingPlandataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  trainingPlanFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Cadet Training Plan`);
    }
    @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Training_Name", visible: true, name: "Training_Name" },
      { property: "Start_Date", visible: true, name: "Start_Date" },
      { property: "End_Date", visible: true, name: "End_Date" },
      { property: "IMEI_NO", visible: true, name: "IMEI_NO" },
      { property: "No_Of_Cadets", visible: true, name: "No_Of_Cadets" },
      { property: "No_of_Supervisors", visible: true, name: "No_of_Supervisors" },
      { property: "Training_Status", visible: true, name: "Training_Status" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get interviewGradevisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.trainingPlanFormGroup = this.fb.group({
      txtTranining_Name: [""],
      drpVessel_Name: [""],
      txtIMEI_No:[""],
      drpTraining_Status: ["1"]
    });
    this.trainingPlandataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.trainingPlandataSource.paginator = this.paginator;
    this.trainingPlandataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.trainingPlanFormGroup.reset();
    this.trainingPlanFormGroup.get("STATUS").patchValue("1");
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
    saveNewTraining(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWCadetLogTrainingPlanAddComponent,
        {
          width: "60%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
}
