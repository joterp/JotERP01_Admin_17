import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-accounts-drc-quo-foot-notes-add',
  templateUrl: './accounts-drc-quo-foot-notes-add.component.html',
  styleUrl: './accounts-drc-quo-foot-notes-add.component.scss'
})
export class AccountsDRCQUOFootNotesAddComponent {
 // IsEdit: boolean;
  // [x: string]: any;
  // footnotesFormGroup: UntypedFormGroup;
  // ErrorMessage: string = "";
  // IsEdit: boolean = false;
  // submit: boolean = false;
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  footnotesFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor(private dialogRef: MatDialogRef<AccountsDRCQUOFootNotesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.footnotesFormGroup = this._fb.group({
      Group: ["", Validators.required],
      Category: ["", Validators.required],
      // currency_description:[""],
     

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }

  
  }
  CloseModal() {
    this.dialogRef.close(true);
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

}
