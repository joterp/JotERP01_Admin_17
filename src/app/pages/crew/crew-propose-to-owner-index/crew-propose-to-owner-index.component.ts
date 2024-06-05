import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-propose-to-owner-index',
  templateUrl: './crew-propose-to-owner-index.component.html',
  styleUrls: ['./crew-propose-to-owner-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWProposeToOwnerIndexComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Vessel_Flag", visible: true, name: "Vessel Flag" },
    { property: "Proposed_By", visible: true, name: "Proposed By" },
    { property: "Proposed_On", visible: true, name: "Proposed On" },
    { property: "No_Of_Proposed_Crew", visible: true, name: "No Of Proposed Crew" },
    { property: "Action", visible: true, name: "" },

  ] as ListColumn[];

  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;

  ProposeToOwnerFilterForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private sidenavService: SidenavService, private router:Router) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.ProposeToOwnerFilterForm = this.fb.group({
      drpVessel: [''],
      drpProposed_By: ['']
    })
  }

  gotoCREW_ProposeToOwner(buttonName:string){
    if(buttonName === 'ProposeToOwner'){
      this.router.navigate(['CREW/ProposeToOwner']);
  }
  }

  gotoCREW_ProposeToOwner_View(buttonName:string){
    if(buttonName === 'CRW_ProposeToOwner_View'){
      this.router.navigate(['CREW/CRW_ProposeToOwner_View']);
  }
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
