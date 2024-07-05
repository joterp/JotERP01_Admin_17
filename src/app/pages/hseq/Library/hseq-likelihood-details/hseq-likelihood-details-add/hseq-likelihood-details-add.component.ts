import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-hseq-likelihood-details-add',
  templateUrl: './hseq-likelihood-details-add.component.html',
  styleUrls: ['./hseq-likelihood-details-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HSEQLIKELIHOODDETAILSAddComponent implements OnInit {
  IsEdit: boolean;
  
  newLikelihoodFormGroup: UntypedFormGroup;
  submit: boolean = false;
  selectedOption: number = 0;
  options: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  modeltitle : string = "";
  constructor(private dialogRef: MatDialogRef<HSEQLIKELIHOODDETAILSAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.newLikelihoodFormGroup = this._fb.group({
        name: ["", Validators.required],
        details: ["", Validators.required],
        value:["", Validators.required],
        
       
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
