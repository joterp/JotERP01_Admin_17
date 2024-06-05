import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-purc-lib-catalogue-excel-import-modal',
  templateUrl: './purc-lib-catalogue-excel-import-modal.component.html',
  styleUrls: ['./purc-lib-catalogue-excel-import-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCLibCatalogueExcelImportModalComponent implements OnInit {
  IsEdit: boolean;
  firstFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  constructor( private dialogRef: MatDialogRef<PURCLibCatalogueExcelImportModalComponent>,
    private sidenavService: SidenavService
    ) { }

  ngOnInit(): void {
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  

}
