import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWManningFeeManagementEditComponent } from './crew-manning-fee-management-edit/crew-manning-fee-management-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-manning-fee-management',
  templateUrl: './crew-manning-fee-management.component.html',
  styleUrls: ['./crew-manning-fee-management.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeManagementComponent implements OnInit {
  select_manningoffice_data= false;
  select_vessel_data = false;
  select_Rank_data = false;
  select_Nationality_data = false;

  panelOpenState = true;
  loading: boolean;
  manningFeeFormGroup:UntypedFormGroup;
  rankCategoryFormGroup:UntypedFormGroup;

  @ViewChild("firstPaginator", { static: true }) paginator: MatPaginator;
  dataManningOffice: any[] = [
    { id: 1, name: 'YML Jot Ship Management', is_selected: false },
    { id: 2, name: 'ABC Supplier', is_selected: false },
    { id: 3, name: 'Manning Jot ERP', is_selected: false },
    { id: 4, name: 'TEST', is_selected: false },
    { id: 5, name: 'Websecure', is_selected: false }
    
  ]
  dataVessel: any[] = [
    { id: 1, name: 'Alexa', is_selected: false },
    { id: 2, name: 'Alexandre', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'India Yami', is_selected: false }
    
  ]
  dataRank: any[] = [
    { id: 1, name: 'Master', is_selected: false },
    { id: 2, name: 'Trainee Master', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'Grace River', is_selected: false }
    
  ]
  dataNationality: any[] = [
    { id: 1, name: 'Afghanistan', is_selected: false },
    { id: 2, name: 'Åland Islands', is_selected: false },
    { id: 3, name: 'Benin', is_selected: false },
    { id: 4, name: 'Congo (Brazzaville)', is_selected: false },
    { id: 5, name: 'Guam', is_selected: false }
    
  ]
  
    manningOfficeFeedataSource: MatTableDataSource<any> | null;
    
  @Input()
    


  column: ListColumn[] = [
    { property: "Manning_Office", visible: true, name: "Manning_Office" },
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Rank", visible: true, name: "Rank" },
    { property: "Nationality", visible: true, name: "Nationality" },
    { property: "Fee", visible: true, name: "Fee" },
    { property: "Fee_Type", visible: true, name: "Fee_Type" }, 
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Amount", visible: true, name: "Amount" },
  
 

  ] as ListColumn[];
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Manning Office Fee`);
     }
     get manningOfficeFeevisibleColumns() {
      return this.column
        .filter((column) => column.visible)
        .map((column) => column.property);
    } 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true); 
    this.manningFeeFormGroup = this.fb.group({
      drpCurrency: [""],
      
    });
    this.rankCategoryFormGroup = this.fb.group({
      drpManning_Office: [""],
      drpVessel: [""],
      drpRank: [""],
      drpNationality: [""],
      drpFee: [""],
      drpStatus: ["1"]
    });

    this.  manningOfficeFeedataSource = new MatTableDataSource();

  }
  clearFilter() {
    this.loading = true;
    this.rankCategoryFormGroup.reset();
    this.rankCategoryFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    this.  manningOfficeFeedataSource.paginator = this.paginator;
    
   

   }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  

  onSelectManningOffice(e: any): void { 
    for (let i = 0; i < this.dataManningOffice.length; i++) {
      const item = this.dataManningOffice[i];
      item.is_selected = e;
    }
  }
  onSelectVesselData(e: any): void { 
    for (let i = 0; i < this.dataVessel.length; i++) {
      const item = this.dataVessel[i];
      item.is_selected = e;
    }
  }
  onSelectRank(e: any): void { 
    for (let i = 0; i < this.dataRank.length; i++) {
      const item = this.dataRank[i];
      item.is_selected = e;
    }
  }
  onSelectNationality(e: any): void { 
    for (let i = 0; i < this.dataNationality.length; i++) {
      const item = this.dataNationality[i];
      item.is_selected = e;
    }
  }
  
  saveFeeManagement(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWManningFeeManagementEditComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 

}
