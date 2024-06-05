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
  selector: 'fury-crew-rank-wise-training-assignment',
  templateUrl: './crew-rank-wise-training-assignment.component.html',
  styleUrls: ['./crew-rank-wise-training-assignment.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWRANKWISETRAININGASSIGNMENTComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
 
  selectAllChecked = false;
  showNotAssignTrainingTable : boolean = false;
  showAssignTrainingTable : boolean = false;


  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) { 
      this.authGuard = this.auth;

      this.titleService.setTitle(`Crew Rank-Training Assignment`);
    }
    @Input()
    


    rankcolumn: ListColumn[] = [
     { property: "Rank", visible: true, name: "Rank" },
    
   
  
    ] as ListColumn[];

    NotUnassigncolumn: ListColumn[] = [
   
     { property: "Training_Name", visible: true, name: "Training_Name" },
     { property: "Button_Assign", visible: true, name: "Button_Assign" },
  
    ] as ListColumn[];

    assigncolumns:ListColumn[] = [
     { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
     { property: "Training_Name", visible: true, name: "Training_Name" },
    ] as ListColumn[];

   


    @ViewChild("TABLE1") table1: ElementRef;
    @ViewChild("TABLE2") table2: ElementRef;
    @ViewChild("TABLE3") table3: ElementRef;
  
  

   

    @ViewChild("firstPaginator", { static: true }) paginator1: MatPaginator;
    @ViewChild("secondPaginator", { static: true }) paginator2: MatPaginator;
    @ViewChild("thirdPaginator", { static: true }) paginator3: MatPaginator;
  
  
    rankdataSource: MatTableDataSource<any> | null;
    NotAssignTrainingdataSource :MatTableDataSource<any> | null;
    AssignedTrainingdataSource :MatTableDataSource<any> | null;
  


    pageSize = 5;
   authGuard: AuthGuard;
   selectedItem: Array<any> = [];
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.rankdataSource = new MatTableDataSource();
    this.NotAssignTrainingdataSource = new MatTableDataSource();
    this.AssignedTrainingdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.rankdataSource.paginator = this.paginator1;
    this.NotAssignTrainingdataSource.paginator = this.paginator2;
    this.AssignedTrainingdataSource.paginator = this.paginator3;
   

   }
   
  
  get rankvisibleColumns() {
    return this.rankcolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get NotAssignedTrainingvisibleColumns() {
    return this.NotUnassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignTrainingvisibleColumns() {
    return this.assigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  showRankTable(data:any,type:string) {
    if(type==='CustomFields') {
      this.showNotAssignTrainingTable = true;
      this.showAssignTrainingTable = true;
     
    }
  }
 

}
