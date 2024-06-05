import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-lib-vessel-portcall-checklist-edit',
  templateUrl: './ops-lib-vessel-portcall-checklist-edit.component.html',
  styleUrls: ['./ops-lib-vessel-portcall-checklist-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OpsLibVesselPortcallChecklistEditComponent implements OnInit {
  IsEdit: boolean;
  
  ErrorMessage: string = "";
  submit: boolean = false;
  AddChecklistFilterFormGroup: UntypedFormGroup;
  showNewRecord :boolean = false;

  constructor(private dialogRef: MatDialogRef<OpsLibVesselPortcallChecklistEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }
    @Input()
    
    assigncustomcolumns:ListColumn[] = [
     { property: "Category", visible: true, name: "Category" },
     { property: "Task_Detail", visible: true, name: "Task_Detail" },
     { property: "Sort_Order", visible: true, name: "Sort_Order" },
    
    
    ] as ListColumn[];
    @ViewChild("TABLE") table: ElementRef;

    
   

   
    AddChecklistdataSource :MatTableDataSource<any> | null;
  ngOnInit(): void {
    this.AddChecklistFilterFormGroup = this._fb.group({
      drpCategory_Name: [""],
      txtDetail: [""],
      
      
    });
  
    this.AddChecklistdataSource = new MatTableDataSource();
   
  }
  get AddChecklistvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  saveNewRecord() {
    this.showNewRecord = true;
  }
 

}
