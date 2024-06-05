import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWMedicalIndexAddComponent } from './crew-medical-index-add/crew-medical-index-add.component';
import { CREWMedicalExpensesModalComponent } from './crew-medical-expenses-modal/crew-medical-expenses-modal.component';
import { CREWMedicalFollowupModalComponent } from './crew-medical-followup-modal/crew-medical-followup-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-medical-index',
  templateUrl: './crew-medical-index.component.html',
  styleUrls: ['./crew-medical-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMedicalIndexComponent implements OnInit {
  pageSize = 10;

  queriesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  medicalFormGroup: UntypedFormGroup;
  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Crew Medical`);
    }
    @Input()
    columns: ListColumn[] = [
     
      { property: "Staff_Code", visible: true, name: "Staff_Code" },
      { property: "Staff_Name", visible: true, name: "Staff_Name" },
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Nationality", visible: true, name: "Nationality" },
      { property: "Age", visible: true, name: "Age" },
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Case_Date", visible: true, name: "Case_Date" },
      { property: "Case_Type", visible: true, name: "Case_Type" },
      { property: "Details", visible: true, name: "Details" },
      { property: "Status", visible: true, name: "Status" },
      { property: "Spent_Amount", visible: true, name: "Spent_Amount" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];
  
    get queriesvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.medicalFormGroup = this.fb.group({
      drpCase_Type: [""],
      drpVessel_Name: [""],
      txtStaff_Name: [""],
      drpRank: [""],
      drpNationality: [""],
      drpStatus: ["1"],
      Date_Form: [""],
      txtDetails: [""],
    });
    this.queriesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.queriesdataSource.paginator = this.paginator;
    this.queriesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.medicalFormGroup.reset();
    this.medicalFormGroup.get("STATUS").patchValue("1");
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
    saveMedicalIndex(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWMedicalIndexAddComponent,
        {
          width: "30%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

      saveMedicalExpenses(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(CREWMedicalExpensesModalComponent,
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
        saveMedicalFollowup(data:object, IsEdit:boolean) {
          const dialogRef = this.dialog.open(CREWMedicalFollowupModalComponent,
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
