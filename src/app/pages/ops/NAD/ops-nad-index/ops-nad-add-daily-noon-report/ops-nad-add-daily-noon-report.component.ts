import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSSludgeDetailAddComponent } from '../ops-sludge-detail-add/ops-sludge-detail-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-nad-add-daily-noon-report',
  templateUrl: './ops-nad-add-daily-noon-report.component.html',
  styleUrls: ['./ops-nad-add-daily-noon-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OPSNADAddDailyNoonReportComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Sludge_Or_Bilge", visible: true, name: "Sludge Or Bilge" },
    { property: "Daily_Production", visible: true, name: "Daily Production(In MT)" },
    { property: "Total_Qty", visible: true, name: "Total Qty(In MT)" },
    { property: "Tank_Number", visible: true, name: "Tank Number/Name	" },
    { property: "Current_Filling_Ratio", visible: true, name: "Current Filling Ratio(%)" },
    { property: "Remark", visible: true, name: "Remark" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;


  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 

  selectedFileNameAttach: string = '';
  
  DailyNoonReportFormGroup:UntypedFormGroup;
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router, private dialog:MatDialog) { 
    this.titleService.setTitle(`Daily Noon Report Details`);
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
    
    this.DailyNoonReportFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      date_Daily_Noon:['', Validators.required],
      txtType:[''],
      drpVoyage_Number:['', Validators.required],
      drpVessel_Cargo_Status:['', Validators.required],
      drpLocation:['', Validators.required],
      drpUTC:['', Validators.required],
      drpShips_Clock_Changes:[''],
      txtLatitude:['', Validators.required],
      txtLongitude:['', Validators.required],
      txtTrue_Course:['', Validators.required],
      drpSwell_Direction:['', Validators.required],
      txtSwell_Height:['', Validators.required],
      drpWind_Direction:['', Validators.required],
      drpTrue_Wind_Direction:['', Validators.required],
      txtWind_Force:['', Validators.required],
      txtTrue_Wind_Speed:['', Validators.required],
      drpSea_Direction:['', Validators.required],
      drpTrue_Sea_Direction:['', Validators.required],
      txtLongitude_direction:[''],
      txtSea_State:['', Validators.required],
      drpCurrent_Direction:['', Validators.required],
      txtSpeed_Of_Current:[''],
      txtAir_Temperature:['', Validators.required],
      txtAir_Pressure:['', Validators.required], 
      txtSea_Temp:['', Validators.required],
      txtTrim:['', Validators.required],
      txtAverage_Speed:[''],
      txtAverage_Speed_Departure:['', Validators.required],
      txtInstructed_Speed:['', Validators.required],
	    txtTotal_Passage_Time:['', Validators.required],
	    txtTotal_Steaming_Time:['', Validators.required],
      txtPassage_time_to_go:[''],
      txtDistance_Since_Last_Departure:['', Validators.required],
      txtDistance_Since_Last_Noon:['', Validators.required],
      txtLog_Distance:[''],
      txtTotal_Passage_Distance:['', Validators.required],
      txtPassage_Distance_To_Go:['', Validators.required],
      drpNext_Port:['', Validators.required],
      date_ETA_Next_Port:['', Validators.required],
      txtClosest_distance:[''],
      date_Time_Of_CPA:[''],
      BWTS_Agent:[''],
      drpBWTS_Agent_Form:[''],
      radioEU_MRV:['']
    })

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);    
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }	

  onFileSelectedattach(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameAttach = inputElement.files[0].name;
    } else {
      this.selectedFileNameAttach = '';
    }
  }
  removeUploadedFileattach(): void {
    this.selectedFileNameAttach = null; // Reset the selectedFileNameAttach
  }

  CancelForm(){
    this.router.navigate(['OPS/NAD/OPS_NAD_Index']);
  }

  AddSludgeDetail(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSSludgeDetailAddComponent, {
      width: "30%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

  
}
