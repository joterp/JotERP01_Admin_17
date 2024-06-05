import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-co2-permits-add',
  templateUrl: './ops-co2-permits-add.component.html',
  styleUrls: ['./ops-co2-permits-add.component.scss']
})
export class OPSCO2PERMITSADDComponent implements OnInit {

  modeltitle:string="";
  AddNewPermitFormGroup:UntypedFormGroup;
  
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSCO2PERMITSADDComponent>) { }

  ngOnInit(): void {
    this.AddNewPermitFormGroup = this.fb.group({
      txtArea:['', Validators.required],
      permit_date:['', Validators.required],
      txtPrice:['', Validators.required]
    })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }	

}
