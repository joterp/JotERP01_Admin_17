import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-evaluation-to-superintendent-modal',
  templateUrl: './crew-evaluation-to-superintendent-modal.component.html',
  styleUrls: ['./crew-evaluation-to-superintendent-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWEvaluationToSuperintendentModalComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;
  stringHtml: string = null;
  ErrorMessage = null;

  SuperintendentFormGroup:UntypedFormGroup;

  constructor(private dialogRef:MatDialogRef<CREWEvaluationToSuperintendentModalComponent>, private fb:UntypedFormBuilder) { }

  ngOnInit(): void {

    this.SuperintendentFormGroup = this.fb.group({
      mail_to:[''],
      subject:['Crew Evaluations To Verify']

    })
    
  }

  created(event: any) {
    console.log(event);

    if (this.stringHtml != null) {
      event.root.innerHTML = this.stringHtml;
    }
  }

  contentChanged(obj: any) {
    this.stringHtml = obj.html;
  }

  CloseModal() {
    this.dialogRef.close(null);
  }


}
