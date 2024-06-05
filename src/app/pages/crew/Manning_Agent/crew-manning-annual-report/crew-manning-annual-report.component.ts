import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-manning-annual-report',
  templateUrl: './crew-manning-annual-report.component.html',
  styleUrls: ['./crew-manning-annual-report.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningAnnualReportComponent implements OnInit {


				
  select_fleet_data = false;
  select_vessel_data = false;
  select_ManningOffice_data = false;
  select_FeeType_data = false;

  dataFleet: any[] = [
    { id: 1, name: 'Admin_Fleet', is_selected: false },
    { id: 2, name: 'Fleet Rhodes', is_selected: false },
    { id: 3, name: 'Fleet Singapore', is_selected: false },
    { id: 4, name: 'Fleet_A', is_selected: false },
    { id: 5, name: 'India Fleet', is_selected: false }
    
  ]
  dataVessel: any[] = [
    { id: 1, name: 'Alexa', is_selected: false },
    { id: 2, name: 'Alexandre', is_selected: false },
    { id: 3, name: 'Bryce', is_selected: false },
    { id: 4, name: 'Charley', is_selected: false },
    { id: 5, name: 'India Yami', is_selected: false }
    
  ]
  dataManningOffice: any[] = [
    { id: 1, name: ' YMLJot Ship Management  ', is_selected: false },
    { id: 2, name: 'ABC Supplier ', is_selected: false },
    { id: 3, name: 'ADANI Marine ', is_selected: false },
    { id: 4, name: 'amar Manning pvt ltd ', is_selected: false },
    { id: 5, name: 'Equi manning agent ', is_selected: false }
    
  ]
  dataFeeType: any[] = [
    { id: 1, name: ' Agency Fee - Monthly  ', is_selected: false },
    { id: 2, name: 'Communication - Monthly', is_selected: false },
    { id: 3, name: 'Flight - Monthly', is_selected: false },
    { id: 4, name: 'Test - Monthly', is_selected: false },
    { id: 5, name: 'Education - Monthly', is_selected: false }
    
  ]


  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Manning Fee Annual Report`);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
   
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  

  onSelectFleetData(e: any): void { 
    for (let i = 0; i < this.dataFleet.length; i++) {
      const item = this.dataFleet[i];
      item.is_selected = e;
    }
  }
  onSelectVesselData(e: any): void { 
    for (let i = 0; i < this.dataVessel.length; i++) {
      const item = this.dataVessel[i];
      item.is_selected = e;
    }
  }
  onSelectManningOfficeData(e: any): void { 
    for (let i = 0; i < this.dataManningOffice.length; i++) {
      const item = this.dataManningOffice[i];
      item.is_selected = e;
    }
  }
  onSelectFeeTypeData(e: any): void { 
    for (let i = 0; i < this.dataFeeType.length; i++) {
      const item = this.dataFeeType[i];
      item.is_selected = e;
    }
  }
  
  

}
