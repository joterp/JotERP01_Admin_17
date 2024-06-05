import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-compare-timelapse',
  templateUrl: './compare-timelapse.component.html',
  styleUrls: ['./compare-timelapse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class COMPARETIMELAPSEComponent implements OnInit {
  pageSize = 10;

  WeeklyWorkIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  panelOpenState = true;

  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  loading: boolean;
  CompareListFilterFormGroup: UntypedFormGroup;
  disabled = false;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router,) { 
      this.titleService.setTitle(`Compare TimeLapse`);
    }
    
    @ViewChild('select') select: MatSelect;
    allSelected=false;
    Vessel: any[] = [
      {value: 'Alexandre', viewValue: 'Alexandre'},
      {value: 'Marie', viewValue: 'Marie'},
      {value: 'yami', viewValue: 'Yami'}
      ];
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.CompareListFilterFormGroup = this.fb.group({
      drpSFI_Code_1: [""],
      drpVessel_1: [""],
      drpCustom_Tags_1: [""],
      Date_Form_1: [""],
      Date_To_1: [""],
      drpSFI_Code_2 :[""],
      drpVessel_2: [""],
      drpCustom_Tags_2: [""],
      Date_Form_2: [""],
      Date_To_2: [""],
      drpFile_Type: [""],
    });
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
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
