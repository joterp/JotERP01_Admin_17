import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-allotment-index-red-flag-reason',
  templateUrl: './crew-allotment-index-red-flag-reason.component.html',
  styleUrls: ['./crew-allotment-index-red-flag-reason.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWAllotmentIndexRedFlagReasonComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  RedFlagFormGroup:UntypedFormGroup;
  selectedFileNameAttach: string = '';
  constructor(private dialogRef:MatDialogRef<CREWAllotmentIndexRedFlagReasonComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
        this.RedFlagFormGroup = this.fb.group({
          chkRed_Flag:[''],
          txtReason:['']
        })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }


  onFileSelectedattach(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameAttach = inputElement.files[0].name;
    } else {
      this.selectedFileNameAttach = '';
    }
  }
  removeUploadedFileattach(): void {
    this.selectedFileNameAttach = null; // Reset the selectedFileNameAttach
  }	

}
