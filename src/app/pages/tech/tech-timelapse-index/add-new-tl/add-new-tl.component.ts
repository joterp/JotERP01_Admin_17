import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-add-new-tl',
  templateUrl: './add-new-tl.component.html',
  styleUrls: ['./add-new-tl.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class ADDNEWTLComponent implements OnInit {
  EditData: object;
  IsEdit: boolean;
  newTimeplapseFormGroup: UntypedFormGroup;

  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());
  
  constructor(private dialogRef: MatDialogRef<ADDNEWTLComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
    this.newTimeplapseFormGroup = this.fb.group({
      drpVessel: ["", Validators.required],
      Date_To: ["",Validators.required],
      drpUser :["",Validators.required],
      txtDescription:["",Validators.required]
    });
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
}
