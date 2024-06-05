import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-approve-supplier-short-edit',
  templateUrl: './purc-approve-supplier-short-edit.component.html',
  styleUrls: ['./purc-approve-supplier-short-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCApproveSupplierShortEditComponent implements OnInit {
  routeTitle:string="";
  ErrorMessage: string = "";
  ApproveSupplierShortFormGroup:UntypedFormGroup;

  constructor(private titleService:Title, private fb:UntypedFormBuilder, private router:Router, private sidenavService:SidenavService) {
    this.titleService.setTitle(`Supplier Details Form Short`);
   }

  ngOnInit(): void {
    this.routeTitle = this.titleService.getTitle();

    this.ApproveSupplierShortFormGroup = this.fb.group({
      txtSupplier_Name:['', Validators.required],
      drpType:[''],
      txtContact_Name:['Sales Department', Validators.required],
      txtAddress:[''],
      drpCountry:['', Validators.required],
      txtEmail_For_RFQ:['', Validators.required],
      drpCity:['', Validators.required],
      txtEmail_For_Invoices:['', Validators.required],
      txtRegistration_Number:['00000',Validators.required],
      txtReference1:[''],
      Date_Registered:['', Validators.required],
      txtReference2:[''],
      txtInternal_Reference:[''],
      radioPO_Confirm:[''],
      drpCurrency:['', Validators.required],
      radioPreferred_RFQ_Format:['']
    })
  }
  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  CancelForm(){
    this.router.navigate(['PURC/PURC_ApproveSupplier']);
  }

}
