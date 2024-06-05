import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'fury-ops-vessel-port-call-checklists-add',
  templateUrl: './ops-vessel-port-call-checklists-add.component.html',
  styleUrls: ['./ops-vessel-port-call-checklists-add.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVesselPortCallChecklistsAddComponent implements OnInit {


  AddChecklistFormGroup:UntypedFormGroup;
  
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<OPSVesselPortCallChecklistsAddComponent>) { }

  ngOnInit(): void {
this.AddChecklistFormGroup = this.fb.group({
  drpVessel:['', Validators.required],
  drpPort:['', Validators.required],
  drpChecklist:['', Validators.required],
})

  }

  CloseModal() {
    this.dialogRef.close(true);
  }

}
