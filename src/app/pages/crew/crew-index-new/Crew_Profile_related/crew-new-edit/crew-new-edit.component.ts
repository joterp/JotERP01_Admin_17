import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-new-edit',
  templateUrl: './crew-new-edit.component.html',
  styleUrls: ['./crew-new-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class CREWNewEditComponent implements OnInit {

  constructor(private sidenavService:SidenavService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    
    this.sidenavService.setCollapsed(true);   
 
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


}
