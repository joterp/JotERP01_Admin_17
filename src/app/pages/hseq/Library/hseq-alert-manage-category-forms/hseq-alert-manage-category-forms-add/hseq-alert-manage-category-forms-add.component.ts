import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-alert-manage-category-forms-add',
  templateUrl: './hseq-alert-manage-category-forms-add.component.html',
  styleUrls: ['./hseq-alert-manage-category-forms-add.component.scss']
})
export class HSEQAlertManageCategoryFormsAddComponent implements OnInit {
  IsEdit: boolean;
  newInspectionReferenceFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  attachment: Array<any> = [];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HSEQAlertManageCategoryFormsAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.newInspectionReferenceFormGroup = this._fb.group({
      drpCategory: ["", Validators.required],
      txtForm_Code: [""],
      txtForm_Name:["", Validators.required],
      txtForm_File:["", Validators.required],
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  filesDropped(event) {
    const file: File = event.target.files[0];
    if (file) {
      const formData = new FormData();
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append("sampleFile", event.target.files[i]);
      }

      const upload$ = this.api.FormPostApi("/upload", formData);
      upload$
        .then((response) => response.json())
        .then((res) => {
          if (res["Status"] == 200) {
           
            if (Array.isArray(res["data"])) {
              this.attachment = [...this.attachment, ...res["data"]];
            } else {
              this.attachment = [...this.attachment, res["data"]];
            }
            console.log("------------------->",this.attachment)

            //  console.log(this.attachment, "this.attachment")
            // this.onFileUpload(res["data"]);
          } else {
            this.common.ShowMessage(
              "Error while uploading attachment",
              "notify-error",
              6000
            );
          }
        });
    }
  }
 


}
