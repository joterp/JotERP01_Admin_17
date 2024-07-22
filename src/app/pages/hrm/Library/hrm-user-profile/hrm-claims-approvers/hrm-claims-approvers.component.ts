import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hrm-claims-approvers',
  templateUrl: './hrm-claims-approvers.component.html',
  styleUrl: './hrm-claims-approvers.component.scss'
})
export class HrmClaimsApproversComponent {
  interviewSheetFormGroup: UntypedFormGroup;

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { 
      this.titleService.setTitle(`Claims Category`);
    }
    ngOnInit(): void {
      this.sidenavService.setCollapsed(true);
      this.interviewSheetFormGroup = this.fb.group({
        Company: [""],
        Employee_List: [""]
      });
    }


}
