import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CREWMedicalExpensesModelAddComponent } from './crew-medical-expenses-model-add/crew-medical-expenses-model-add.component';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';

import { UntypedFormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonService } from 'src/app/providers/services/CommonService';
import { ApiService } from 'src/app/providers/services/ApiService';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-medical-expenses-modal',
  templateUrl: './crew-medical-expenses-modal.component.html',
  styleUrls: ['./crew-medical-expenses-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMedicalExpensesModalComponent implements OnInit {
  IsEdit: boolean;
  medicalExpensesdataSource: MatTableDataSource<any> | null;
  columns: ListColumn[] = [
    { property: "Date", visible: true, name: "Date" },
    { property: "Cost_Type", visible: true, name: "Cost_Type" },
    { property: "Currency", visible: true, name: "Currency" },
    { property: "Local_Amount", visible: true, name: "Local_Amount" },
    { property: "Exchange_Rate", visible: true, name: "Exchange_Rate" },
    { property: "USD_Amount", visible: true, name: "USD_Amount" },
    { property: "Details", visible: true, name: "Details" },
 
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];
  
  constructor(private dialogRef: MatDialogRef<CREWMedicalExpensesModalComponent>,private titleService: Title, private api: ApiService, private auth: AuthGuard, 
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { }
    get medicalExpensesvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.medicalExpensesdataSource = new MatTableDataSource();
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  saveNewFollowUp(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWMedicalExpensesModelAddComponent,
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
