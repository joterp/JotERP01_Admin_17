import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-acc-pb-generate-salary-slip',
  templateUrl: './crew-acc-pb-generate-salary-slip.component.html',
  styleUrls: ['./crew-acc-pb-generate-salary-slip.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CREWACCPBGenerateSalarySlipComponent implements OnInit {

  constructor(private titleService:Title, private sidenavService:SidenavService) {
    this.titleService.setTitle(`Generating Salary Slip`);
   }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

}
