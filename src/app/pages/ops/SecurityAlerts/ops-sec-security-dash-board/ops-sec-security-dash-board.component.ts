import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSRecentAlertsModelComponent } from './ops-recent-alerts-model/ops-recent-alerts-model.component';
import { OPSVesselListModelComponent } from './ops-vessel-list-model/ops-vessel-list-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-sec-security-dash-board',
  templateUrl: './ops-sec-security-dash-board.component.html',
  styleUrls: ['./ops-sec-security-dash-board.component.scss']
})
export class OPSSECSecurityDashBoardComponent implements OnInit {
  authGuard: AuthGuard;

  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Security Dashboard`);
     }

  ngOnInit(): void {
  }
  saveRecentAlerts(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(OPSRecentAlertsModelComponent,
      {
        width: "40%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
   
    });
    } 
    saveVessel(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(OPSVesselListModelComponent,
        {
          width: "40%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
     
      });
      } 
      viewAlerts(buttonName:string){
        if(buttonName === 'OPS_SEC_AlertList'){
         this.router.navigate(['OPS/SecurityAlerts/OPS_SEC_AlertList'])
        } 
      }
  
}
