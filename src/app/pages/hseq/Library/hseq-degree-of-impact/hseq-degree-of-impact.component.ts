import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQDEGREEOFIMPACTADDComponent } from './hseq-degree-of-impact-add/hseq-degree-of-impact-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-degree-of-impact',
  templateUrl: './hseq-degree-of-impact.component.html',
  styleUrls: ['./hseq-degree-of-impact.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQDEGREEOFIMPACTComponent implements OnInit {
  pageSize = 10;

  degreeofImapctdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  inspectionReferenceFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Degree Of Impact`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Name", visible: true, name: "Name" },
       { property: "Values", visible: true, name: "Values" },
       { property: "Action", visible: true, name: "Action" }
     ] as ListColumn[];

     get degreeofImpactvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.inspectionReferenceFormGroup = this.fb.group({
      txtName: [""],
      txtValue:[""],
      drpStatus: ["1"]
    });
    this.degreeofImapctdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.degreeofImapctdataSource.paginator = this.paginator;
    this.degreeofImapctdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.inspectionReferenceFormGroup.reset();
    this.inspectionReferenceFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveDegreeOfImpact(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQDEGREEOFIMPACTADDComponent,
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
