import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'fury-ops-vessel-threshold-add',
  templateUrl: './ops-vessel-threshold-add.component.html',
  styleUrls: ['./ops-vessel-threshold-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselThresholdAddComponent implements OnInit {

  modeltitle:string="";
  ThresholdFormGroup:UntypedFormGroup;

  itemsObject = [{
    id: 1,
    val: 'Laden'
  }, {
    id: 2,
    val: 'Ballast'
  }];
  selected3 = [];

  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSVesselThresholdAddComponent>) { }

  ngOnInit(): void {
    this.ThresholdFormGroup = this.fb.group({
      drpVessel_Name:['', Validators.required],
      drpThreshold_Type:['', Validators.required],
      txtSpeed_Upper_Limit_Max:['', Validators.required],
      txtMin_Value:['', Validators.required],
      txtMax_Value:['', Validators.required],
    })
  }

  CloseModal() {
    this.dialogRef.close(true);
  }
  
  
  toggle(item,event: MatCheckboxChange) {
    if (event.checked) {
     this.selected3.push(item);
   } else {
     const index = this.selected3.indexOf(item);
     if (index >= 0) {
       this.selected3.splice(index, 1);
     }
   }
  console.log(item + "<>", event.checked);
 }

 exists(item) {
   return this.selected3.indexOf(item) > -1;
 };

 isIndeterminate() {
   return (this.selected3.length > 0 && !this.isChecked());
 };

 isChecked() {
   return this.selected3.length === this.itemsObject.length;
 };



 toggleAll(event: MatCheckboxChange) { 

   if ( event.checked ) {

      this.itemsObject.forEach(row => {
         // console.log('checked row', row);
         this.selected3.push(row)
         });

       // console.log('checked here');
   } else {
     // console.log('checked false');
      this.selected3.length = 0 ;
   }
}

}
