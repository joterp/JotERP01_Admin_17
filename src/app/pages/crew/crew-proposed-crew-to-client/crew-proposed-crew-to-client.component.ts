import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';


@Component({
  selector: 'fury-crew-proposed-crew-to-client',
  templateUrl: './crew-proposed-crew-to-client.component.html',
  styleUrls: ['./crew-proposed-crew-to-client.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWProposedCrewToClientComponent implements OnInit {

  Candidatescolumns: ListColumn[] = [
    { property: "Crew_Name", visible: true, name: "Crew Name" },
    { property: "No_Of_Contract", visible: true, name: "No Of Contract" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Country_Of_Issue", visible: true, name: "Country Of Issue" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "Available_Date", visible: true, name: "Available Date" },
    { property: "Status", visible: true, name: "Status" },
    { property: "Saved", visible: true, name: "Saved" },
 
  ] as ListColumn[];

  ClientRequirementscolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Joining_Date", visible: true, name: "Joining Date" },
    { property: "Request_Date", visible: true, name: "Request Date" },
    { property: "Requirement", visible: true, name: "Requirement" },
    
  ] as ListColumn[];

  pageSize = 10;
  CandidatesdataSource: MatTableDataSource<any> | null;
  ClientRequirementsdataSource: MatTableDataSource<any> | null;
  
  panelOpenState = true;

  CandidatesFilterForm:UntypedFormGroup;
  ClientRequirementsFilterForm:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private titleService:Title, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(`Crew Proposal`);
   }

   get visibleColumnsCandidates() {
    return this.Candidatescolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsClientRequirements() {
    return this.ClientRequirementscolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.CandidatesdataSource = new MatTableDataSource();
    this.ClientRequirementsdataSource = new MatTableDataSource();

    this.CandidatesFilterForm = this.fb.group({
      CandidatesFilterForm:[''],
      From_Date:[''],
      drpRank:['']
    });
    this.ClientRequirementsFilterForm = this.fb.group({
       drpVessel:['']
    })
  
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
