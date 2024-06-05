import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-index-new',
  templateUrl: './crew-index-new.component.html',
  styleUrls: ['./crew-index-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CREWIndexNewComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Last", visible: true, name: "Last" },
    { property: "Avg", visible: true, name: "Avg" },

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;	

  CrewIndexFilterForm:UntypedFormGroup;
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router) {
    this.titleService.setTitle(`Crew Index`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

   this.CrewIndexFilterForm = this.fb.group({
    drpFleet:[''],
    drpVessel:[''],
    drpVessel_Type:[''],
    txtStaff_Code:[''],
    drpRank:[''],
    drpNationality:[''],
    drpManning_Office:[''],
    radioVaccination_Status:['']

   })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);   
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  gotoCREW_IndexAdd(buttonName:string){
    if(buttonName === 'CREW_INDEX_ADD_FORM'){
      this.router.navigate(['CREW/CREW_INDEX_ADD_FORM']);
  }
  }

  gotoCREW_New_Edit(buttonName:string){
    if(buttonName === 'CREW_New_Edit'){
      this.router.navigate(['CREW/Crew_Profile_related/CREW_New_Edit/Contacts_Details']);
  }
  }

}
