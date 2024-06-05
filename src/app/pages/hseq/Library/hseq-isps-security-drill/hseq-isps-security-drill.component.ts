import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQISPSSecurityDrillAddComponent } from './hseq-isps-security-drill-add/hseq-isps-security-drill-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-isps-security-drill',
  templateUrl: './hseq-isps-security-drill.component.html',
  styleUrls: ['./hseq-isps-security-drill.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQISPSSecurityDrillComponent implements OnInit {
  pageSize = 10;

  degreeofImapctdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  inspectionReferenceFormGroup: UntypedFormGroup;
  securityDrillFormGroup: UntypedFormGroup;
  newSecurityDrilldataSource: MatTableDataSource<unknown>;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
    this.titleService.setTitle(`Degree Of Impact`);
  }
  @Input()
  columns: ListColumn[] = [
    { property: "Drill_Type", visible: true, name: "Drill_Type" },
    { property: "Drills", visible: true, name: "Drills" },
    { property: "Action", visible: true, name: "Action" }
  ] as ListColumn[];

  get securitydrillsvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.securityDrillFormGroup = this.fb.group({
      drpdrill_Type: [""],
      txtDrill: [""],
      drpStatus: ["0"]
    });
    this.newSecurityDrilldataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.newSecurityDrilldataSource.paginator = this.paginator;
    this.newSecurityDrilldataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.securityDrillFormGroup.reset();
    this.securityDrillFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewDrill(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQISPSSecurityDrillAddComponent,
      {
        width: "35%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
