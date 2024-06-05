import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQInspectionLIBReferenceAddComponent } from './hseq-inspection-lib-reference-add/hseq-inspection-lib-reference-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-inspection-lib-reference',
  templateUrl: './hseq-inspection-lib-reference.component.html',
  styleUrls: ['./hseq-inspection-lib-reference.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQInspectionLIBReferenceComponent implements OnInit {
  pageSize = 10;

  inspectionRefernecedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  inspectionReferenceFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Inspection Item`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "ID", visible: true, name: "ID" },
       { property: "Manual", visible: true, name: "Manual" },
       { property: "Chapter_Name", visible: true, name: "Chapter_Name" },
       { property: "Title", visible: true, name: "Title" },
       { property: "Best_Practice", visible: true, name: "Best_Practice" },
       { property: "Risk_Categorization", visible: true, name: "Risk_Categorization" },
       { property: "Action", visible: true, name: "Action" }
     ] as ListColumn[];
 
     get inspectionReferencevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.inspectionReferenceFormGroup = this.fb.group({
      drpManual: [""],
      txtChapter_No:[""],
      drpRisk_Category:[""],
      txtTitle:[""],
      drpStatus: ["1"]
    });
    this.inspectionRefernecedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.inspectionRefernecedataSource.paginator = this.paginator;
    this.inspectionRefernecedataSource.sort = this.sort;
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
  saveInspectionReference(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQInspectionLIBReferenceAddComponent,
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
