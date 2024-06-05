import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-matrix-index',
  templateUrl: './crew-matrix-index.component.html',
  styleUrls: ['./crew-matrix-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMatrixIndexComponent implements OnInit {
 

  select_matrix_Rules = false;
  panelOpenState = true;    

  dataMatrix: any[] = [
    { id: 1, name: ' 1. Pre -Joining Document Checklist ', is_selected: false },
    { id: 2, name: '2. Document for sign on of the crew', is_selected: false },
    { id: 3, name: '3. Experience in selected rank(in months)', is_selected: false },
    { id: 4, name: '4. Indeminity Contract Document Check', is_selected: false },
    { id: 5, name: '5. VMT Nationality Control', is_selected: false }
    
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
  

  
  onSelectMatrixRules(e: any): void { 
    for (let i = 0; i < this.dataMatrix.length; i++) {
      const item = this.dataMatrix[i];
      item.is_selected = e;
    }
  }
 
 
  

}
