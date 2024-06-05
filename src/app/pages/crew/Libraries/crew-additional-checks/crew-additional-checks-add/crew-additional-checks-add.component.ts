import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-additional-checks-add',
  templateUrl: './crew-additional-checks-add.component.html',
  styleUrls: ['./crew-additional-checks-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAdditionalChecksAddComponent implements OnInit {
  IsEdit: boolean;
  newTraitDetailFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  showUnitField = true;


  constructor(private dialogRef: MatDialogRef<CREWAdditionalChecksAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.newTraitDetailFormGroup = this._fb.group({
        txtTraits_Check: ["", Validators.required],
        radioNew_type_Trait: ["0", Validators.required],
        drpUnit: [""],
        radioNew_Crew_Ind: ["1", Validators.required],
        txtRemarks: [""],
      
      
      });
     }

  ngOnInit(): void {
   
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  toggleUnitField() {
    // Toggle the visibility of the "Unit" form field based on the selected radio button value
    const selectedValue = this.newTraitDetailFormGroup.get('radioNew_type_Trait').value;
    this.showUnitField = selectedValue === '0'; // Show when "Number" (value '0') is selected, hide for other values
  }
 
  


}
