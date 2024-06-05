import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
 

}

@Component({
  selector: 'fury-crew-matrix-rule-assignment-add',
  templateUrl: './crew-matrix-rule-assignment-add.component.html',
  styleUrls: ['./crew-matrix-rule-assignment-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMatrixRuleAssignmentAddComponent implements OnInit {
  IsEdit: boolean;

  selectvesselFleetdata= false;
  selectVesseldata = false;
  selectVesselTypedata = false;
  selectVesselFlagdata = false;


  selectRankData= false;
  selectRankCategorydata= false;
  selectVesselDepartmentdata= false; 

  selectUsersdata= false; 
  // selectvesseldata = false;
  // selectRankdata = false;
  // selectNationalitydata = false;
  //

  


  @ViewChild(MatTabGroup) tabgroup: MatTabGroup
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  viewport: CdkVirtualScrollViewport;

  dataVesselFleet: any[] = [
    { id: 1, name: 'Admin_Fleet', is_selected: false },
    { id: 2, name: 'Fleet M Blue', is_selected: false },
    { id: 3, name: 'Fleet Rhodes', is_selected: false },
    { id: 4, name: 'Fleet Singapore', is_selected: false },
    { id: 5, name: 'Fleet - A', is_selected: false }
    
  ]
  dataVessel: any[] = [
    { id: 1, name: 'Alexa', is_selected: false },
    { id: 2, name: 'Alexandre', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'India Yami', is_selected: false }
    
  ]
  dataVesselType: any[] = [
    { id: 1, name: 'Aframax Tanker', is_selected: false },
    { id: 2, name: 'Anchor Handling Vessel', is_selected: false },
    { id: 3, name: 'Barge', is_selected: false },
    { id: 4, name: 'Bulk Carrier', is_selected: false },
    { id: 5, name: 'Car Carrier', is_selected: false }
    
  ]
  dataVesselFlag: any[] = [
    { id: 1, name: 'Tri Color', is_selected: false },
    { id: 2, name: 'Flag_Test', is_selected: false },
    { id: 3, name: 'India', is_selected: false },
    { id: 4, name: 'Hong Kong', is_selected: false },
    { id: 5, name: 'F- India', is_selected: false }
    
  ]

  dataRank: any[] = [
    { id: 1, name: 'Master', is_selected: false },
    { id: 2, name: 'Trainee Master', is_selected: false },
    { id: 3, name: 'Chief Officer', is_selected: false },
    { id: 4, name: 'Junior Officer', is_selected: false },
    { id: 5, name: 'Technician', is_selected: false }
    
  ]
  dataRankCategory: any[] = [
    { id: 1, name: 'Deck', is_selected: false },
    { id: 2, name: 'Trainee Master', is_selected: false },
    { id: 3, name: 'Chief Officer', is_selected: false },
    { id: 4, name: 'Junior Officer', is_selected: false },
    { id: 5, name: 'Technician', is_selected: false }
    
  ]

  dataVesselDepartment: any[] = [
    { id: 1, name: 'Deck', is_selected: false },
    { id: 2, name: 'Electrical', is_selected: false },
    { id: 3, name: 'Engine', is_selected: false },
    { id: 4, name: 'Laundry', is_selected: false },
   
    
  ]
  dataUsers: any[] = [
    { id: 1, name: 'Aarti', is_selected: false },
    { id: 2, name: 'Nisha', is_selected: false },
    { id: 3, name: 'Sherley', is_selected: false },
    { id: 4, name: 'Manisha', is_selected: false },
   
    
  ]
  
 
  constructor(private dialogRef: MatDialogRef<CREWMatrixRuleAssignmentAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  check() {
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({ start, end });
    this.viewport.checkViewportSize();
  }
  get progress() {
    return this.tabgroup ? this.tabgroup.selectedIndex * 20 : 0
  }
  onSelectVesselFleetData(e: any): void { 
    for (let i = 0; i < this.dataVesselFleet.length; i++) {
      const vesselFleet = this.dataVesselFleet[i];
      vesselFleet.is_selected = e;
    }
  }
  onSelectVesselData(e: any): void { 
    for (let i = 0; i < this.dataVessel.length; i++) {
      const vessel = this.dataVessel[i];
      vessel.is_selected = e;
    }
  }
  onSelectVesselType(e: any): void { 
    for (let i = 0; i < this.dataVesselType.length; i++) {
      const VesselType = this.dataVesselType[i];
      VesselType.is_selected = e;
    }
  }
  onSelectVesselFlag(e: any): void { 
    for (let i = 0; i < this.dataVesselFlag.length; i++) {
      const VeeselFlag = this.dataVesselFlag[i];
      VeeselFlag.is_selected = e;
    }
  }

  onSelectRankData(e: any): void { 
    for (let i = 0; i < this.dataRank.length; i++) {
      const rank = this.dataRank[i];
      rank.is_selected = e;
    }
  }
  
  onSelectRankCategoryData(e: any): void { 
    for (let i = 0; i < this.dataRankCategory.length; i++) {
      const rankCategory = this.dataRankCategory[i];
      rankCategory.is_selected = e;
    }
  }
  onSelectVesselDepartment(e: any): void { 
    for (let i = 0; i < this.dataVesselDepartment.length; i++) {
      const vesselDepartment = this.dataVesselDepartment[i];
      vesselDepartment.is_selected = e;
    }
  }
  
  onSelectUsers(e: any): void { 
    for (let i = 0; i < this.dataUsers.length; i++) {
      const users = this.dataUsers[i];
      users.is_selected = e;
    }
  }




}

