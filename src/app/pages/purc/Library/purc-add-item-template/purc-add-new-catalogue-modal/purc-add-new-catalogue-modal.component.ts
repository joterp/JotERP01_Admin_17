import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-purc-add-new-catalogue-modal',
  templateUrl: './purc-add-new-catalogue-modal.component.html',
  styleUrls: ['./purc-add-new-catalogue-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCAddNewCatalogueModalComponent implements OnInit {
  IsEdit: boolean;
  loading: boolean;
  catalogueFormGroup: UntypedFormGroup;
 
  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef
  constructor( private dialogRef: MatDialogRef<PURCAddNewCatalogueModalComponent>,
    private titleService: Title, 
    private api: ApiService, 
    private auth: AuthGuard,
    private common: CommonService, 
    private dialog: MatDialog, 
    private fb: UntypedFormBuilder) {
    this.catalogueFormGroup = this.fb.group({
      drpSub_Catalogue: [""],
      txtItem_Details: [""],
      txtDrawing: [""],
      txtPart: [""]
      
    });
   }
   @Input()
   columns: ListColumn[] = [
     { property: "Drawing_Number", visible: true, name: "Drawing_Number" },
     { property: "Part_Number", visible: true, name: "Part_Number" },
     { property: "Sub_Catalogue", visible: true, name: "Sub_Catalogue" },
     { property: "Item_Description", visible: true, name: "Item_Description" },
     { property: "Unit", visible: true, name: "Unit" },
     { property: "CheckBox", visible: true, name: "CheckBox" }
   ] as ListColumn[];

   get visibleColumns() {
     return this.columns
       .filter((column) => column.visible)
       .map((column) => column.property);
   }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource();
  }
  clearFilter() {
    this.loading = true;
    this.catalogueFormGroup.reset();
    this.catalogueFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}
