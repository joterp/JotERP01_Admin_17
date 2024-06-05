import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWDocumentAddComponent } from './crew-document-add/crew-document-add.component';
import { CREWAssignNationalityModelComponent } from './crew-assign-nationality-model/crew-assign-nationality-model.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'fury-crew-document',
  templateUrl: './crew-document.component.html',
  styleUrls: ['./crew-document.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWDocumentComponent implements OnInit {
  pageSize = 10;

  crewDocumentdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  crewDocumentFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Document`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "deck", visible: true, name: "deck" },
       { property: "engine", visible: true, name: "engine" },
      
     ] as ListColumn[];
 
     get crewDocumentvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.crewDocumentFormGroup = this.fb.group({
      txtDoc_Short_Name: [""],
      txtDoc_Name: [""],
      drpDoc_Type: [""],
      txtDeck: [""],
      txtEngine: [""],
      drpMandatory: [""],
      drpStatus: ["1"],
      drpCource: [""]
    });
    this.crewDocumentdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.crewDocumentdataSource.paginator = this.paginator;
    this.crewDocumentdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.crewDocumentFormGroup.reset();
    this.crewDocumentFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }

  saveNewDocument(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWDocumentAddComponent,
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
    saveNationality(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWAssignNationalityModelComponent,
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
