import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-promotion-update',
  templateUrl: './crew-promotion-update.component.html',
  styleUrls: ['./crew-promotion-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWPromotionUpdateComponent implements OnInit {

  modeltitle:string="";
  modeltype:string;

  PromotionUpdateFormGroup:UntypedFormGroup;
  constructor(private dialogRef:MatDialogRef<CREWPromotionUpdateComponent>, private fb:UntypedFormBuilder) {
   }

  ngOnInit(): void {
   this.PromotionUpdateFormGroup = this.fb.group({
    drpSelect_Staff_to_promote:[''],
    sign_off_date:[''],
    date_of_promotion:[''],
    txtBalance_transfered:['']
   })
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

}
