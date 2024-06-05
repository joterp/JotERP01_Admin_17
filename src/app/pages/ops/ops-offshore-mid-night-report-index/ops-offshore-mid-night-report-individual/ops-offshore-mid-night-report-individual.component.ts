import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-offshore-mid-night-report-individual',
  templateUrl: './ops-offshore-mid-night-report-individual.component.html',
  styleUrls: ['./ops-offshore-mid-night-report-individual.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSOffshoreMidNightReportIndividualComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  submit: boolean = false;
  loading: boolean;
  selectAllChecked = false;
  MidnightReportFilterFormGroup: UntypedFormGroup;


  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router) { 
      this.titleService.setTitle(`Offshore Mid Night Report`);
    }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.MidnightReportFilterFormGroup = this.fb.group({
      drpVessel: ["",Validators.required],
      txtMaster: [""],
      txtClient_Details: [""],
      txtAgent_Details: [""],

      Date_Form: ["",Validators.required],
      txtCrew_ob: [""],


      txtLocation: ["",Validators.required],
      txtPosition: [""],
      txtFrom: [""],
      txtTo: [""],
     
      
     
     
     
    });
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  

}
