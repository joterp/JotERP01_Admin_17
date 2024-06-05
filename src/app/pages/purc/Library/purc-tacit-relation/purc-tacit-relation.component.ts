import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { PURCTacitRelationEditComponent } from './purc-tacit-relation-edit/purc-tacit-relation-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-purc-tacit-relation',
  templateUrl: './purc-tacit-relation.component.html',
  styleUrls: ['./purc-tacit-relation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCTacitRelationComponent implements OnInit {
  pageSize = 10;

  tacitRelationdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  tacitRelationfilterFormGroup: UntypedFormGroup;
  dialogRef: any;

  constructor(private titleService: Title, private api:ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 

      this.titleService.setTitle(`Tacit Approval Relation`);
    }

    @Input()
    columns: ListColumn[] = [
      { property: "PO_Type", visible: true, name: "PO_Type" },
      { property: "Is_Tacit_Enable", visible: true, name: "Is_Tacit_Enable" },
      { property: "Override_Authority", visible: true, name: "Override_Authority" },
      { property: "Stipulated_Time", visible: true, name: "Stipulated_Time" },
      { property: "Mail_To", visible: true, name: "Mail_To" },
      { property: "Mail_CC", visible: true, name: "Mail_CC" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.tacitRelationfilterFormGroup = this.fb.group({
      drpPO_Type: [""],
      
      drpStatus: ["1"]
    });
    this.tacitRelationdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.tacitRelationdataSource.paginator = this.paginator;
    this.tacitRelationdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.tacitRelationfilterFormGroup.reset();
    this.tacitRelationfilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewRelation(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(PURCTacitRelationEditComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 


}
