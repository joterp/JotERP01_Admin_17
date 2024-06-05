import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSBunkerROBsModalComponent } from '../ops-seemp-reports/ops-nad-arrival-report/ops-bunker-robs-modal/ops-bunker-robs-modal.component';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-ops-nad-daily-noon-report',
  templateUrl: './ops-nad-daily-noon-report.component.html',
  styleUrls: ['./ops-nad-daily-noon-report.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSNADDailyNoonReportComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport; 
  
  DailyNoonReportFormGroup:UntypedFormGroup;
  constructor(private sidenavService:SidenavService, private titleService:Title, private dialog:MatDialog, private fb:UntypedFormBuilder) {
    this.titleService.setTitle(``);
   }

  ngOnInit(): void {
   this.DailyNoonReportFormGroup = this.fb.group({

   })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
 
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  ViewBunkerROBs(data: object, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSBunkerROBsModalComponent, {
      width: "45%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.modeltitle = modeltitle;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }

}
