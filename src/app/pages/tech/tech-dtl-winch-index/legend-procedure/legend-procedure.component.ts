import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-legend-procedure',
  templateUrl: './legend-procedure.component.html',
  styleUrls: ['./legend-procedure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LegendProcedureComponent implements OnInit {
  IsEdit: boolean;
  EditData: object;

  constructor(private dialogRef: MatDialogRef<LegendProcedureComponent>,
    private fb: UntypedFormBuilder,
   
    private api: ApiService,
    private common: CommonService) { }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
