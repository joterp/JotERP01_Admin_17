import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrewGreetingsCardsAddComponent } from './crew-greetings-cards-add/crew-greetings-cards-add.component';



@Component({
  selector: 'fury-crew-greeting-cards',
  templateUrl: './crew-greeting-cards.component.html',
  styleUrls:['./crew-greeting-cards.component.scss']
})
export class CrewGreetingCardsComponent {
  pageSize = 10;

  interviewQuesdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  interviewQuesFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Greeting Cards`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Card_Type", visible: true, name: "Card_Type" },
       { property: "File_Original_Name", visible: true, name: "File_Original_Name" },
       { property: "Date_Uploaded", visible: true, name: "Date_Uploaded" },
      //  { property: "Answer_Reference", visible: true, name: "Answer_Reference" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get interviewQuesvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.interviewQuesFormGroup = this.fb.group({
      drpgreeting_Card_Type: [""],
      drpStatus: ["1"]
    });
    this.interviewQuesdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.interviewQuesdataSource.paginator = this.paginator;
    this.interviewQuesdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.interviewQuesFormGroup.reset();
    this.interviewQuesFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  
  saveGreetingCard(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CrewGreetingsCardsAddComponent,
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


}
