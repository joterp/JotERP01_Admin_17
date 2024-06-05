import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWPBVictuallingMealIndexAddComponent } from './crew-pb-victualling-meal-index-add/crew-pb-victualling-meal-index-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'fury-crew-pb-victualling-meal-index',
  templateUrl: './crew-pb-victualling-meal-index.component.html',
  styleUrls: ['./crew-pb-victualling-meal-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWPBVictuallingMealIndexComponent implements OnInit {
  pageSize = 10;

  mealIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  mealIndexFormGroup: UntypedFormGroup;

  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`PB Victualling Mewl Index`);
    }
    @Input()
    columns: ListColumn[] = [
      { property: "Vessel", visible: true, name: "Vessel" },
      { property: "Currency", visible: true, name: "Currency" },
      { property: "Month", visible: true, name: "Month" },
      { property: "Year", visible: true, name: "Year" },
      { property: "Opening_Balance", visible: true, name: "Opening_Balance" },
      { property: "IS_Finalize", visible: true, name: "IS_Finalize" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get mealIndexvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.mealIndexFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpVictualling_Currency: [""],
      drpMonth: [""],
      drpYear: [""],
      drpStatus: ["1"]
    });
    this.mealIndexdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.mealIndexdataSource.paginator = this.paginator;
    this.mealIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.mealIndexFormGroup.reset();
    this.mealIndexFormGroup.get("STATUS").patchValue("1");
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
      const dialogRef = this.dialog.open(CREWPBVictuallingMealIndexAddComponent,
        {
          width: "25%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
    

}
