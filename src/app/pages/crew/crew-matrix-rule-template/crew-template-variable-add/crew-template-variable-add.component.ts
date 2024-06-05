import { Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWTemplateVariableAddModalComponent } from './crew-template-variable-add-modal/crew-template-variable-add-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-template-variable-add',
  templateUrl: './crew-template-variable-add.component.html',
  styleUrls: ['./crew-template-variable-add.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWTemplateVariableAddComponent implements OnInit {
  IsEdit: boolean;
  templateVariabledataSource: MatTableDataSource<any> | null;

  
  @Input()



  columns: ListColumn[] = [
    { property: "Question", visible: true, name: "Question" },
    { property: "Question_Type", visible: true, name: "Question_Type" },
    { property: "Table_Name", visible: true, name: "Table_Name" },
    { property: "Column_Key", visible: true, name: "Column_Key" },
    { property: "Column_Name", visible: true, name: "Column_Name" },
    { property: "Free_Text", visible: true, name: "Free_Text" },
    { property: "Variable_Type", visible: true, name: "Variable_Type" },
    { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard, private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private dialogRef: MatDialogRef<CREWTemplateVariableAddComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


    get templateVariablevisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.templateVariabledataSource = new MatTableDataSource();
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  
  saveTemplateVariableModal(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWTemplateVariableAddModalComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
