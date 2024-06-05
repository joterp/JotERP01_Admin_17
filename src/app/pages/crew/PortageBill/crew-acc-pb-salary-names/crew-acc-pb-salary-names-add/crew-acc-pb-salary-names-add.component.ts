import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-acc-pb-salary-names-add',
  templateUrl: './crew-acc-pb-salary-names-add.component.html',
  styleUrls: ['./crew-acc-pb-salary-names-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWACCPBSalaryNamesAddComponent implements OnInit {

  modeltitle: string = "";
  modeltype: string;

  SalaryNameAddFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CREWACCPBSalaryNamesAddComponent>) {
    
   }

  ngOnInit(): void {
   this.SalaryNameAddFormGroup = this.fb.group({
    txtSalary_Name:['', Validators.required]
   })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
