import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-asm-ops-nad-individual',
  templateUrl: './asm-ops-nad-individual.component.html',
  styleUrls: ['./asm-ops-nad-individual.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ASMOPSNADINDIVIDUALComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 
  
  constructor(private sidenavService:SidenavService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {

    this.sidenavService.setCollapsed(true);  
   
  }
  check() {
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }	
 

}
