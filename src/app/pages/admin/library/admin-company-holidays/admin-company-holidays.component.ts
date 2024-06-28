import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { AdminCompanyHolidaysAddComponent } from './admin-company-holidays-add/admin-company-holidays-add.component';
import { AdminCompanyCopyHolidaysAddComponent } from './admin-company-copy-holidays-add/admin-company-copy-holidays-add.component';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-admin-company-holidays',
  templateUrl: './admin-company-holidays.component.html',
  styleUrl: './admin-company-holidays.component.scss'
})
export class AdminCompanyHolidaysComponent {


  constructor(
    private titleService: Title,
    private api: ApiService,
    private auth: AuthGuard,
    private sidenavService: SidenavService,
    private common: CommonService,
    private dialog: MatDialog,
    private fb: UntypedFormBuilder,
    private http: HttpClient
  ) {
    this.titleService.setTitle('Holidays');
   
  }




  saveNewHoliday(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AdminCompanyHolidaysAddComponent, {
      width: '35%',
      maxHeight: '90%',
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.clearFilter();
      }
    });
  }

  saveCopyHolidays(data: object, IsEdit: boolean) {
    const dialogRef = this.dialog.open(AdminCompanyCopyHolidaysAddComponent, {
      width: '65%',
      maxHeight: '90%',
      disableClose: true,
    });
    dialogRef.componentInstance.EditData = data;
    dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // this.clearFilter();
      }
    });
  }

}
