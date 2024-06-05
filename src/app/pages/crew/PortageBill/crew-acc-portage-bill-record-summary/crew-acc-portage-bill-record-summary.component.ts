import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWPromotionUpdateComponent } from '../crew-promotion-update/crew-promotion-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-acc-portage-bill-record-summary',
  templateUrl: './crew-acc-portage-bill-record-summary.component.html',
  styleUrls: ['./crew-acc-portage-bill-record-summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPortageBillRecordSummaryComponent implements OnInit {
  constructor(private titleService: Title, private sidenavService: SidenavService, private router: Router, private dialog:MatDialog) {
    this.titleService.setTitle(`Portage Bill Summary`);
  }

  ngOnInit(): void {

  }

  gotoCREW_Earnings(buttonName: string) {
    if (buttonName === 'Earnings') {
      this.router.navigate(['CREW/PortageBill/Earnings']);
    }
  }

  gotoCREW_Deductions(buttonName: string) {
    if (buttonName === 'Deductions') {
      this.router.navigate(['CREW/PortageBill/Deductions']);
    }
  }

  gotoCREW_Cash_Advance(buttonName: string) {
    if (buttonName === 'Cash_Advance') {
      this.router.navigate(['CREW/PortageBill/Cash_Advance']);
    }
  }

  gotoCREW_Allotments(buttonName: string) {
    if (buttonName === 'Allotments') {
      this.router.navigate(['CREW/Allotments']);
    }
  }
  gotoCREW_View_PortageVill(buttonName: string) {
    if (buttonName === 'View_PortageVill') {
      this.router.navigate(['CREW/PortageBill/View_PortageVill']);
    }
  }
  gotoCREW_View_Attachment(buttonName: string) {
    if (buttonName === 'View_Attachment') {
      this.router.navigate(['CREW/PortageBill/View_Attachment']);
    }
  }
  gotoCREW_Crew_SignOFF(buttonName: string) {
    if (buttonName === 'Crew_SignOFF') {
      this.router.navigate(['CREW/PortageBill/Crew_SignOFF']);
    }
  }
  gotoCREW_OnboardList(buttonName: string) {
    if (buttonName === 'OnboardList') {
      this.router.navigate(['CREW/OnboardList']);
    }
  }
  gotoCREW_CashToMasterIndex(buttonName: string){
    if (buttonName === 'CashToMasterIndex') {
      this.router.navigate(['CREW/PortageBill/CashToMasterIndex']);
  }
}
gotoCREW_Captain_Cash(buttonName: string){
  if (buttonName === 'Captain_Cash') {
    this.router.navigate(['CREW/PortageBill/Captain_Cash']);
}
}
gotoCREW_Allotment_Index(buttonName: string){
  if (buttonName === 'Allotment_Index') {
    this.router.navigate(['CREW/Allotment_Index']);
}
}
gotoCREW_Earn_Deduction_Index(buttonName: string){
  if (buttonName === 'Earn_Deduction_Index') {
    this.router.navigate(['CREW/PortageBill/Earn_Deduction_Index']);
}
}
gotoCREW_Bank_Acc_Salary_Exception(buttonName: string){
  if (buttonName === 'Bank_Acc_Salary_Exception') {
    this.router.navigate(['CREW/PortageBill/Bank_Acc_Salary_Exception']);
}
}
gotoCREW_Generate_SalarySlip(buttonName: string){
  if (buttonName === 'Generate_SalarySlip') {
    this.router.navigate(['CREW/PortageBill/Generate_SalarySlip']);
}
}


  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {

    const dialogRef = this.dialog.open(CREWPromotionUpdateComponent, {
      width: "40%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
      // this.FetchAllDepartment();
    });
  }

}
