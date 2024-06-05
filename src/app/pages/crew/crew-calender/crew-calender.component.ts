import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-calender',
  templateUrl: './crew-calender.component.html',
  styleUrls: ['./crew-calender.component.scss']
})
export class CREWCalenderComponent implements OnInit {

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
