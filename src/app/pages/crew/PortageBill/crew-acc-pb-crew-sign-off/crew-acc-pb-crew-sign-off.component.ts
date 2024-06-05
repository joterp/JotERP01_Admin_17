import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWACCPBCrewSignOFFEditComponent } from '../crew-acc-pb-crew-sign-off-edit/crew-acc-pb-crew-sign-off-edit.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-acc-pb-crew-sign-off',
  templateUrl: './crew-acc-pb-crew-sign-off.component.html',
  styleUrls: ['./crew-acc-pb-crew-sign-off.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBCrewSignOFFComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
 
  OnboardSeafarercolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name: "Sign Off Date" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  Signed_OffSeafarercolumns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Staff_Name", visible: true, name: "Staff Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Sign_On_Date", visible: true, name: "Sign On Date" },
    { property: "Sign_Off_Date", visible: true, name: "Sign Off Date" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  OnboardSeafarerdataSource: MatTableDataSource<any> | null;
  Signed_OffSeafarerdataSource: MatTableDataSource<any> | null;

  SignOffFilterForm:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder, private dialog:MatDialog) {
    this.titleService.setTitle(`Sign Off`);
   }

   get visibleColumnsOnboardSeafarer() {
    return this.OnboardSeafarercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsSigned_OffSeafarer() {
    return this.Signed_OffSeafarercolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.OnboardSeafarerdataSource = new MatTableDataSource(); 
    this.Signed_OffSeafarerdataSource = new MatTableDataSource(); 

    this.SignOffFilterForm = this.fb.group({
      txtStaff_Code:[''],
      drpRank:['']
    })
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWACCPBCrewSignOFFEditComponent, {
      width: "55%",
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

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
