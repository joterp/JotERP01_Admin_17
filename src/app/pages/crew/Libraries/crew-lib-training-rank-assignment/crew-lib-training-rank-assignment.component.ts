import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-lib-training-rank-assignment',
  templateUrl: './crew-lib-training-rank-assignment.component.html',
  styleUrls: ['./crew-lib-training-rank-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWLIBTrainingRankAssignmentComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;


  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Crew Training Rank Assignment`);
     }
     @Input()
    


     trainingcolumn: ListColumn[] = [
      { property: "Training_Name", visible: true, name: "Training_Name" },
     
    
   
     ] as ListColumn[];
 
     NotUnassigncolumn: ListColumn[] = [
    
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Button_Assign", visible: true, name: "Button_Assign" },
   
     ] as ListColumn[];
 
     assigncolumns:ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Rank", visible: true, name: "Rank" },
     ] as ListColumn[];
 
    
 
 
     @ViewChild("TABLE1") table1: ElementRef;
     @ViewChild("TABLE2") table2: ElementRef;
     @ViewChild("TABLE3") table3: ElementRef;
   
   
 
    
 
     @ViewChild("firstPaginator", { static: true }) paginator1: MatPaginator;
     @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
     @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
   
   
     trainingNamedataSource: MatTableDataSource<any> | null;
     NotAssignRankdataSource :MatTableDataSource<any> | null;
     AssignedRankssdataSource :MatTableDataSource<any> | null;
   
 
 
     pageSize = 5;
    authGuard: AuthGuard;
    selectedItem: Array<any> = [];
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.trainingNamedataSource = new MatTableDataSource();
    this.NotAssignRankdataSource = new MatTableDataSource();
    this.AssignedRankssdataSource = new MatTableDataSource();
  
  }
  ngAfterViewInit() {
    this.trainingNamedataSource.paginator = this.paginator1;
    this.NotAssignRankdataSource.paginator = this.paginator2;
    this.AssignedRankssdataSource.paginator = this.paginator3;
   

   }
   
  
  get trainingvisibleColumns() {
    return this.trainingcolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get NotAssignedRanksvisibleColumns() {
    return this.NotUnassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignDocsvisibleColumns() {
    return this.assigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  ViewRankWiseAssignment(buttonName:string){
    if(buttonName === 'CREW_RANK_WISE_TRAINING_ASSIGNMENT'){
    this.router.navigate(['CREW/Libraries/CREW_RANK_WISE_TRAINING_ASSIGNMENT'])
    } 
  }

 
}
