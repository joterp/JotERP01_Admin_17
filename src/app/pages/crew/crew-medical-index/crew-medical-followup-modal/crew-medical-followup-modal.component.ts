import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, FormGroup } from '@angular/forms';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWMedicalFollowupModalAddComponent } from './crew-medical-followup-modal-add/crew-medical-followup-modal-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-medical-followup-modal',
  templateUrl: './crew-medical-followup-modal.component.html',
  styleUrls: ['./crew-medical-followup-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMedicalFollowupModalComponent implements OnInit {
  IsEdit: boolean;



  followUpIndexdataSource: MatTableDataSource<any> | null;
  columns: ListColumn[] = [
    { property: "Folow_up_date", visible: true, name: "Folow_up_date" },
    { property: "Details", visible: true, name: "Details" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];
  
  constructor(private dialogRef: MatDialogRef<CREWMedicalFollowupModalComponent>,private titleService: Title, private api: ApiService, private auth: AuthGuard, 
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) { }

    get followUpIndexvisibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  ngOnInit(): void {
    this.followUpIndexdataSource = new MatTableDataSource();
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  saveNewFollowUp(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWMedicalFollowupModalAddComponent,
      {
        width: "25%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
}
