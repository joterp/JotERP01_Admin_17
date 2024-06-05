import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-add-new-item-modal',
  templateUrl: './purc-add-new-item-modal.component.html',
  styleUrls: ['./purc-add-new-item-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCAddNewItemModalComponent implements OnInit {
  IsEdit: boolean;
  ItemFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;

  constructor( private dialogRef: MatDialogRef<PURCAddNewItemModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    @Inject (MAT_DIALOG_DATA) public data:any) {
      this.ItemFormGroup = this._fb.group({ 
        txtDrawing_Number: ["", Validators.required],
        txtPart_Number: ["", Validators.required],
        txtItem_Description: ["",Validators.required ],
        drp_Unit: ["",Validators.required],
        txtRequired_Quantity: ["",Validators.required],
        
        
         
      });
     }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
