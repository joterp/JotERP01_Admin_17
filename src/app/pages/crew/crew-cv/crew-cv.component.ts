import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-cv',
  templateUrl: './crew-cv.component.html',
  styleUrls: ['./crew-cv.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWCVComponent implements OnInit {

  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew CV `);
     }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
}
