import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-asl-supp-type-dept-mapping-edit',
  templateUrl: './purc-asl-supp-type-dept-mapping-edit.component.html',
  styleUrls: ['./purc-asl-supp-type-dept-mapping-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCASLSuppTypeDeptMappingEditComponent implements OnInit {
  IsEdit: boolean;
  deptMappingFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  // availableOptions = [
  //   { label: 'Accounts', value: 'Accounts' },
  //   { label: 'Admin', value: 'Admin' },
  //   // ... other options ...
  // ];
  // selectedOptions: string[] = [];
  // // form: FormGroup;
  @ViewChild('select') select: MatSelect;
  allSelected=false;
   Department: any[] = [
    {value: 'account-0', viewValue: 'Accounts'},
    {value: 'admin-1', viewValue: 'Admin'},
    {value: 'crew-2', viewValue: 'Crew'}
  ];

  constructor(private dialogRef: MatDialogRef<PURCASLSuppTypeDeptMappingEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    @Inject (MAT_DIALOG_DATA) public data:any) { 

      this.deptMappingFormGroup = this._fb.group({ 
        drpSupplier_Type: ["", Validators.required],
        drpDepartment: ["", Validators.required],
        txtEmail: [""]
        
        
         
      });
    }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
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
