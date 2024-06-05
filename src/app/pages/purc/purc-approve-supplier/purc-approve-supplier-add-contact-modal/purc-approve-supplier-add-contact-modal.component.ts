import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

export interface DialogData {
  
}
@Component({
  selector: 'fury-purc-approve-supplier-add-contact-modal',
  templateUrl: './purc-approve-supplier-add-contact-modal.component.html',
  styleUrls: ['./purc-approve-supplier-add-contact-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PURCApproveSupplierAddContactModalComponent implements OnInit {

  ContactData:object = null;
  ContactFormGroup:UntypedFormGroup;
  BankDetailFormGroup:UntypedFormGroup;
  AssignScopeFormGroup:UntypedFormGroup;
  FeedbackFormGroup:UntypedFormGroup;
  EvaluationDetailsFormGroup:UntypedFormGroup;

  ErrorMessage: string = "";
  modeltitle:string="";
  modeltype:string;
  showAddContact:boolean=false;
  showBankDetail:boolean=false;
  showAssignScope:boolean=false;
  showAddEvaluation:boolean=false;
  showSupplierFeedback:boolean=false;
  selectedFileName: string = '';

  FeedbackPopupdataSource: MatTableDataSource<any> | null;
  EvaluationDetailsPopupdataSource:MatTableDataSource<any> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  feedbackpopupcolumns: ListColumn[] = [
    { property: "File_Name", visible: true, name: "File Name" },
    { property: "Uploaded_By", visible: true, name: "Uploaded By" },
    { property: "Uploaded_On", visible: true, name: "Uploaded On" },

  ] as ListColumn[];

  evaluationdetailspopupcolumns: ListColumn[] = [
    { property: "Weightage", visible: true, name: "Weightage" },
    { property: "Marks", visible: true, name: "Marks" },
  
  ] as ListColumn[];

  constructor(private fb:UntypedFormBuilder, private dialogRef: MatDialogRef<PURCApproveSupplierAddContactModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    get visibleColumnsFeedbackPopup() {
      return this.feedbackpopupcolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    get visibleColumnsevaluationdetailspopup(){
      return this.evaluationdetailspopupcolumns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }

  ngOnInit(): void {

    this.FeedbackPopupdataSource = new MatTableDataSource();
    this.EvaluationDetailsPopupdataSource = new MatTableDataSource();

    if(this.modeltype == "add_contact"){
      this.showAddContact = true;
      this.showBankDetail = false;
      this.showAssignScope = false;
      this.showAddEvaluation = false;
      this.showSupplierFeedback = false;
    } 
    
    else if(this.modeltype == "add_bank_detail"){
      this.showAddContact = false;
      this.showBankDetail = true;
      this.showAssignScope = false;
      this.showAddEvaluation = false;
      this.showSupplierFeedback = false;
    }

    else if(this.modeltype == "assign_scope") {
      this.showAssignScope = true;
      this.showAddContact = false;
      this.showBankDetail = false;
      this.showAddEvaluation = false;
      this.showSupplierFeedback = false;
    }  

    else if(this.modeltype == "add_evaluation"){
      this.showAddEvaluation = true;
      this.showAssignScope = false;
      this.showAddContact = false;
      this.showBankDetail = false;
      this.showSupplierFeedback = false;
    }

    else if(this.modeltype == "Add_Feedback"){
      this.showSupplierFeedback = true;
      this.showAddEvaluation = false;
      this.showAssignScope = false;
      this.showAddContact = false;
      this.showBankDetail = false;
    }


    this.ContactFormGroup = this.fb.group({
      txtName:['',Validators.required],
      txtDepartment:[''],
      txtAddress:[''],
      drpCountry:['', Validators.required],
      txtCity:['', Validators.required],
      txtPincode:[''],
      txtMobile:[''],
      txtPhone:[''],
      txtEmail_Individual:['', Validators.required],
      txtEmail_Department:['', Validators.required],
      txtEmail_for_RFQ:['', Validators.required],
      txtEmail_for_Invoices:['', Validators.required],
      txtRemarks:['']
    });

    this.BankDetailFormGroup = this.fb.group({
      txtBank_Name:['', Validators.required],
      txtBenefiary_Name:['', Validators.required],
      txtAccount_Number:['', Validators.required],
      txtBank_Address:['', Validators.required],
      drpCurrency:['', Validators.required],
      txtBank_Code:['', Validators.required],
      txtBranch_Code:['', Validators.required],
      txtSWIFT_Code:['', Validators.required],
      txtContact:['', Validators.required],
      txtIBAN_Code:[''],
      txtIFSC_Code:[''],
      txtInter_Bank_Detail:['']
    });

    this.AssignScopeFormGroup = this.fb.group({
      txtPort:[''],
      txtScope:['']
    })

    this.EvaluationDetailsFormGroup = this.fb.group({
      evaluation_date:['', Validators.required],
      txtEvaluation_Remark:['', Validators.required]
    })

    this.FeedbackFormGroup = this.fb.group({
      drpCategory:['', Validators.required ],
      txtFeedback:['']
    });

    

  }

  ngAfterViewInit(){
    this.FeedbackPopupdataSource.paginator = this.paginator;
    this.FeedbackPopupdataSource.sort = this.sort;
    this.EvaluationDetailsPopupdataSource.paginator = this.paginator;
    this.EvaluationDetailsPopupdataSource.sort = this.sort;
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileName = inputElement.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
  
	  removeUploadedFileadditem(): void {
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }
  
 

}
