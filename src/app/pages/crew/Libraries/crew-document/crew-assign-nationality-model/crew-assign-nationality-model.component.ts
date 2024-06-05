import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormArray, UntypedFormBuilder, FormControl, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-assign-nationality-model',
  templateUrl: './crew-assign-nationality-model.component.html',
  styleUrls: ['./crew-assign-nationality-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAssignNationalityModelComponent implements OnInit {
  IsEdit: boolean;
  select_all = false;
  select_all_data = false;

  data: any[] = [
    { id: 1, name: 'Japan', is_selected: false },
    { id: 2, name: 'India', is_selected: false },
    { id: 3, name: 'Swizerland', is_selected: false }
    
  ]

  dataTwo: any[] = [
    { id: 1, name: 'Afghanistan', is_selected: false },
    { id: 2, name: 'Bangladesh', is_selected: false },
    { id: 3, name: 'France', is_selected: false }
  ]




  constructor(private dialogRef: MatDialogRef<CREWAssignNationalityModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

   ) { }
   
  ngOnInit(): void {
   
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  onSelectAll(e: any): void { 
    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];
      item.is_selected = e;
    }
  }

  onSelectAllData(e: any): void { 
    for (let i = 0; i < this.dataTwo.length; i++) {
      const item = this.dataTwo[i];
      item.is_selected = e;
    }
  }

}
