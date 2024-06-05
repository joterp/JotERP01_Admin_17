import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-copy-setup-modal',
  templateUrl: './crew-copy-setup-modal.component.html',
  styleUrls: ['./crew-copy-setup-modal.component.scss']
})
export class CREWCopySetupModalComponent implements OnInit {
  IsEdit: boolean;
  newSetupFormGroup: any;
  @ViewChild('select') select: MatSelect;        
  @ViewChild('select2') select2: MatSelect;
  @ViewChild('selectRank') selectRank: MatSelect;
  allSelected=false;
  allNationalitySelected=false;
  allRankSelected=false;

  Vessel: any[] = [
  {value: 'Alexandre', viewValue: 'Alexandre'},
  {value: 'Marie', viewValue: 'Marie'},
  {value: 'yami', viewValue: 'Yami'}
  ];


  Nationality: any[] = [
    {value: 'Afghanistan', viewValue: 'Afghanistan'},
    {value: 'China', viewValue: 'China'},
    {value: 'India', viewValue: 'India'}
    ];

    Ranks: any[] = [
    {value: 'MST- Master', viewValue: 'MST - Master'},
    {value: 'MST-T - Trainee Master', viewValue: 'MST-T - Trainee Master'},
    {value: 'MST - Master_P', viewValue: 'MST - Master_P'}
    ];

  constructor(private dialogRef: MatDialogRef<CREWCopySetupModalComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.newSetupFormGroup = this._fb.group({

      drpVessel: [""],
      drpNationality :[""],
      drpRank:["", Validators.required],
     
    
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
    toggleNationalitySelection() {
      if (this.allNationalitySelected) {
        this.select2.options.forEach((item: MatOption) => item.select());
      } else {
        this.select2.options.forEach((item: MatOption) => item.deselect());
      }
      }

      natoptionClick() {
      let newNatStatus = true;
      this.select2.options.forEach((item: MatOption) => {
        if (!item.selected) {
          newNatStatus = false;
        }
      });
      this.allNationalitySelected = newNatStatus;
      }

      toggleRankSelection() {
        if (this.allRankSelected) {
          this.selectRank.options.forEach((item: MatOption) => item.select());
        } else {
          this.selectRank.options.forEach((item: MatOption) => item.deselect());
        }
        }

        rankoptionClick() {
        let newNatStatus = true;
        this.selectRank.options.forEach((item: MatOption) => {
          if (!item.selected) {
            newNatStatus = false;
          }
        });
        this.allRankSelected = newNatStatus;
        }
  
  
  
}
