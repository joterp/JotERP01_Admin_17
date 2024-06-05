import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HSEQLIKELIHOODDETAILSAddComponent } from './hseq-likelihood-details-add/hseq-likelihood-details-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-hseq-likelihood-details',
  templateUrl: './hseq-likelihood-details.component.html',
  styleUrls: ['./hseq-likelihood-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQLIKELIHOODDETAILSComponent implements OnInit {
  pageSize = 10;

  likelihooddataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  likelihoodFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Likelihood`);
     }
     @Input()
     columns: ListColumn[] = [
      
       { property: "Name", visible: true, name: "Name" },
       { property: "Details", visible: true, name: "Details" },
       { property: "Value", visible: true, name: "Value" },

       { property: "Action", visible: true, name: "Action" }
     ] as ListColumn[];
 
     get likelihoodvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.likelihoodFormGroup = this.fb.group({
      txtName: [""],
      txtDetails:[""],
      txtValue:[""],
      drpStatus: ["1"]
    });
    this.likelihooddataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.likelihooddataSource.paginator = this.paginator;
    this.likelihooddataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.likelihoodFormGroup.reset();
    this.likelihoodFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveInspectionReference(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(HSEQLIKELIHOODDETAILSAddComponent,
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
