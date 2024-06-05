import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'fury-crew-uniform-details',
  templateUrl: './crew-uniform-details.component.html',
  styleUrls: ['./crew-uniform-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWUniformDetailsComponent implements OnInit {

  UniformDetailsFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
  this.UniformDetailsFormGroup=this.fb.group({
    txtShoe_Size:[''],
    txtT_Shirt_Size:[''],
    txtCargo_Pant_Size:[''],
    txtOverall_Size:[''],
    txtHeight:[''],
    txtWaist:[''],
    txtWeight:['']
  })
  }

}
