import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { EditorChangeContent, EditorChangeSelection } from "ngx-quill";
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'fury-send-attachment-model',
  templateUrl: './send-attachment-model.component.html',
  styleUrls: ['./send-attachment-model.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SendAttachmentModelComponent implements OnInit {
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



  constructor(private dialogRef: MatDialogRef<SendAttachmentModelComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService
    ) { }
    submit = false;
    text1 = "";
  

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

 
  // sendEmailToVendor() {
  //   let userData = localStorage.getItem("AdminData");
  //   if (userData) {
  //     let user = JSON.parse(userData).user_data;
  //     if (user) {
  //       this.firstFormGroup.get("USER_GUID").patchValue(user["USER_GUID"]);
  //     }
  //   }
  //   this.ErrorMessage = "";
  //   var data: object = {};
  //   for (const elem in this.firstFormGroup.value) {
  //     data[elem] = this.firstFormGroup.value[elem];
  //   }
  //   const body = `<!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  //   <meta name="viewport" content="width=device-width">
  //   <title></title>
  //   <style type="text/css">
  //     table td {border-collapse: collapse;}
  //   </style>
  //   </head><body>${this.stringHtml.replace(
  //     /\{[^\}]+\}/g,
  //     this.replaceTable
  //   )}</body></html>`;
  //   data["mail_body"] = body;
  //   this.sendEmail(data, "send-email");
  // }

  // sendEmail(data: object, path: string) {
  //   const payload = { ...data, planData: this.planData };
  //   this.api.PostDataService(path, payload).subscribe(
  //     (res: object) => {
  //       this.submit = false;
  //       if (res["Status"] === 200) {
  //         this.common.ShowMessage(
  //           "Email sent successfully",
  //           "notify-success",
  //           3000
  //         );
  //         this.firstFormGroup.reset();
  //         this.dialogRef.close(true);
  //       } else {
  //         this.ErrorMessage = res["message"];
  //         this.common.ShowMessage(res["Message"], "notify-error", 6000);
  //       }
  //     },
  //     (error) => {
  //       this.submit = false;
  //       this.common.ShowMessage(error["Message"], "notify-error", 6000);
  //     }
  //   );
  // }

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


}
