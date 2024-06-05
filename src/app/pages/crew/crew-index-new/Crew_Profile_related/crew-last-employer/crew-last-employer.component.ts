import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-crew-last-employer',
  templateUrl: './crew-last-employer.component.html',
  styleUrls: ['./crew-last-employer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWLastEmployerComponent implements OnInit {

  LastEmployerFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.LastEmployerFormGroup = this.fb.group({
      txtName_of_last_Employer:['', Validators.required],
      txtContact_ref_name_of_last_employer:[''],
      txtContact_phone_of_last_employer:[''],
      txtEmployer_Email:[''],
      txtWorked_with_nationals_of:['', Validators.required]

    })

  }

}
