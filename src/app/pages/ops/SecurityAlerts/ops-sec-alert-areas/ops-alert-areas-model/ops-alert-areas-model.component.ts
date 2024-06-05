import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-alert-areas-model',
  templateUrl: './ops-alert-areas-model.component.html',
  styleUrls: ['./ops-alert-areas-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSALertAreasModelComponent implements OnInit {
  IsEdit: boolean;
  alertAreasFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  pageSize = 10;

  alertareasdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialogRef: MatDialogRef<OPSALertAreasModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
   
    @Inject (MAT_DIALOG_DATA) public data:any) { 
      this.alertAreasFormGroup = this._fb.group({ 
        txtName: ["", Validators.required],
        txtDescription: ["", Validators.required],
        drpColour: [""]
        
        
         
      });
    }
    @Input()
    columns: ListColumn[] = [
      { property: "deg", visible: true, name: "deg" },
      { property: "min", visible: true, name: "min" },
      { property: "sec", visible: true, name: "sec" },
      { property: "ns", visible: true, name: "ns" },
      { property: "degTwo", visible: true, name: "degTwo" },
      { property: "minTwo", visible: true, name: "minTwo" },
      { property: "secTwo", visible: true, name: "secTwo" },
      { property: "nsTwo", visible: true, name: "nsTwo" },
     
     
    ] as ListColumn[];
  
    get alertAreasvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.alertareasdataSource = new MatTableDataSource();
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
