import { HttpClient } from '@angular/common/http';
import { Component, Inject, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';


@Component({
  selector: 'fury-hrm-broadcast-message-add',
  templateUrl: './hrm-broadcast-message-add.component.html',
  styleUrl: './hrm-broadcast-message-add.component.scss'
})
export class HrmBroadcastMessageAddComponent {
  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  leavesStdFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
 
  @ViewChild('select') select: MatSelect;
  allSelected=false;
  UserName: any[] = [
    {value: 'Akshay', viewValue: 'Akshay'},
    {value: 'Nisha', viewValue: 'Nisha'},
    {value: 'Sherley', viewValue: 'Sherley'}
    ];
  constructor(private dialogRef: MatDialogRef<HrmBroadcastMessageAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.leavesStdFormGroup = this._fb.group({
      user: ["", Validators.required],
      Leaves_Type: ["", Validators.required],
      Standards_No_of_days: ["", Validators.required],
      
    });

    if (this.IsEdit) {
      this.InsertFormValues();
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
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }

    optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
      newStatus = false;
      }
    });
    this.allSelected = newStatus;
    }

}
