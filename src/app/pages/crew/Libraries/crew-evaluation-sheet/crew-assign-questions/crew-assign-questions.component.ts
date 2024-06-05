import { Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-crew-assign-questions',
  templateUrl: './crew-assign-questions.component.html',
  styleUrls: ['./crew-assign-questions.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWAssignQuestionsComponent implements OnInit {
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<CREWAssignQuestionsComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

    Notassigncolumn: ListColumn[] = [
      { property: "Category", visible: true, name: "Category" },
      { property: "Question", visible: true, name: "Question" },
      { property: "Answer_Ref", visible: true, name: "Answer_Ref" },
      { property: "Button_Assign", visible: true, name: "Button_Assign" },
   
     ] as ListColumn[];
 
     assigncolumns:ListColumn[] = [
      { property: "Button_NotAssign", visible: true, name: "Button_NotAssign" },
      { property: "Category", visible: true, name: "Category" },
      { property: "Question", visible: true, name: "Question" },
      { property: "Answer_Ref", visible: true, name: "Answer_Ref" },
     ] as ListColumn[];

     @ViewChild("TABLE3") table3: ElementRef;
    @ViewChild("TABLE4") table4: ElementRef;




    NotAssignRanksdataSource :MatTableDataSource<any> | null;
    AssignedRanksdataSource :MatTableDataSource<any> | null;
 
  ngOnInit(): void {
    this.NotAssignRanksdataSource = new MatTableDataSource();
    this.AssignedRanksdataSource = new MatTableDataSource();
    
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
 
   get NotAssignedRanksvisibleColumns() {
    return this.Notassigncolumn
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get AssignRanksvisibleColumns() {
    return this.assigncolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }


}
