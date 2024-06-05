import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWManningFeeStructureAddComponent } from './crew-manning-fee-structure-add/crew-manning-fee-structure-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-manning-fee-structure',
  templateUrl: './crew-manning-fee-structure.component.html',
  styleUrls: ['./crew-manning-fee-structure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWManningFeeStructureComponent implements OnInit {
  pageSize = 10;

  feeStructuredataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  feeStructureFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Free Structure`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Fee_Component", visible: true, name: "Fee_Component" },
       { property: "Fee_Short_Name", visible: true, name: "Fee_Short_Name" },
       { property: "Fee_Type", visible: true, name: "Fee_Type" },
       { property: "Calculation_Mode", visible: true, name: "Calculation_Mode" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get feeStructurevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.feeStructureFormGroup = this.fb.group({
      txtFee_Component: [""],
      drpFee_Type: [""],
      radioDelivered_To_Vessel: ["1"],
      drpStatus: ["1"]
    });
    this.feeStructuredataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.feeStructuredataSource.paginator = this.paginator;
    this.feeStructuredataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.feeStructureFormGroup.reset();
    this.feeStructureFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveFeeStructure(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWManningFeeStructureAddComponent,
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
