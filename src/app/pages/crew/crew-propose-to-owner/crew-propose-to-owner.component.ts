import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-propose-to-owner',
  templateUrl: './crew-propose-to-owner.component.html',
  styleUrls: ['./crew-propose-to-owner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWProposeToOwnerComponent implements OnInit {

  panelOpenState = true;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  proposedcrewlist1columns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "No_Of_Contract", visible: true, name: "No Of Contract" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Age", visible: true, name: "Age" },
    { property: "Last", visible: true, name: "Last" },
    { property: "Avg", visible: true, name: "Avg" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Manning_Office", visible: true, name: "Manning Office" },
    { property: "Contract_Salary", visible: true, name: "Contract Salary" },
    { property: "Flag_Doc1", visible: true, name: "Flag Doc1" },
    { property: "Flag_Doc2", visible: true, name: "Flag Doc2" },

  ] as ListColumn[];

  proposedcrewlist2columns: ListColumn[] = [
    { property: "Staff_Code", visible: true, name: "Staff Code" },
    { property: "Name", visible: true, name: "Name" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "No_Of_Contract", visible: true, name: "No Of Contract" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "DOB", visible: true, name: "DOB" },
    { property: "Age", visible: true, name: "Age" },
    { property: "Last", visible: true, name: "Last" },
    { property: "Avg", visible: true, name: "Avg" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Manning_Office", visible: true, name: "Manning Office" },
    { property: "Contract_Salary", visible: true, name: "Contract Salary" },
    { property: "Flag_Doc1", visible: true, name: "Flag Doc1" },
    { property: "Flag_Doc2", visible: true, name: "Flag Doc2" },

  ] as ListColumn[];

  pageSize = 10;
  ProposedCrewList1dataSource: MatTableDataSource<any> | null;
  ProposedCrewList2dataSource: MatTableDataSource<any> | null;

  CrewProposeToOwnerFormGroup: UntypedFormGroup;
  ProposedCrewListFilterForm: UntypedFormGroup;
  ProposedCrewListFilterForm2: UntypedFormGroup;

  constructor(private sidenavService: SidenavService, private router: Router, private fb: UntypedFormBuilder) { }

  get visibleColumnsProposedCrewList1() {
    return this.proposedcrewlist1columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsProposedCrewList2() {
    return this.proposedcrewlist2columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.ProposedCrewList1dataSource = new MatTableDataSource();
    this.ProposedCrewList2dataSource = new MatTableDataSource();

    this.CrewProposeToOwnerFormGroup = this.fb.group({
      drpProposal_For: [''],
      drpFlag_Document_1: [''],
      drpDocument_2: ['']
    });

    this.ProposedCrewListFilterForm = this.fb.group({
      txtStaff_Code: [''],
      drpRank: [''],
      drpNationality: [''],
      drpManning_Office: ['']
    });

    this.ProposedCrewListFilterForm2 = this.fb.group({
      txtStaff_Code: [''],
      drpRank: [''],
      drpNationality: [''],
      drpManning_Office: [''],
      radio_btn:['']
    });

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }



}
