import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { EditorChangeContent, EditorChangeSelection } from "ngx-quill";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-tech-mail-defect-modal',
  templateUrl: './tech-mail-defect-modal.component.html',
  styleUrls: ['./tech-mail-defect-modal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHMailDefectModalComponent implements OnInit {

  EditData: object;
  IsEdit: boolean;
  closeBtnTitle: string = "CLOSE";
  modalTitle: string = "Vendor To Email";
  planData;
  html: "";
  replaceTable: string = null;
  name = "Angular 6";
  htmlContent = "";
  subjectLine: string = "CTM Requirement";
  userFormGroup: UntypedFormGroup;
  emailFormGroup: UntypedFormGroup;
  vendorEmails: string = "";
  emailsCC: string = "";
  emailbcc:string ="";
  protected _onDestroy = new Subject<void>();
  ErrorMessage = null;
  uploadedFiles: any=[];
  uploadedAttachment: any;
  attachment: any[];
  dataSourceClient: any;
  selectedFileName: string = '';
  stringHtml: string = null;

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
    
  submit = false;
  text1 = "";
  constructor(private dialogRef: MatDialogRef<TECHMailDefectModalComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
    console.log(this.stringHtml);
    this.uploadedFiles = this.uploadedAttachment;


    this.userFormGroup = this.fb.group({
      search: [""],
    
    });

    this.emailFormGroup = this.fb.group({
      USER_GUID: [""],
      cc: [this.emailsCC],
      bcc:[this.emailbcc],
      mail_to: [this.vendorEmails, Validators.required],
      subject: [this.subjectLine, Validators.required],
      uploadedattachment:[this.uploadedAttachment]
    });
  }
  ngOnDestroy(): void {}
  
  closeModel() {
    this.dialogRef.close(null);
  }
  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

  contentChanged(obj: any) {
    this.stringHtml = obj.html;
  }

  getFileURL(fileName) {
    return `${this.api.API_HOST}${fileName}`;
  }
  DeleteFile(index) { 
    this.uploadedFiles.splice(index, 1);
  }

  applyFilterClient(filterValue: string) {
    this.dataSourceClient.filter = filterValue.trim().toLowerCase();
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
  CloseModal() {
    this.dialogRef.close(true);
  }
  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
    }
}
