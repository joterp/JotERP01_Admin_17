import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'fury-crew-additional-traits',
  templateUrl: './crew-additional-traits.component.html',
  styleUrls: ['./crew-additional-traits.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWAdditionalTraitsComponent implements OnInit {

  TraitsFormGroup:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
     this.TraitsFormGroup = this.fb.group({
      radioDesc:['1']
     })
  }

}
