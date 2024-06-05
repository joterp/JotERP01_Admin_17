import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { CREWSalaryStructureAddComponent } from './crew-salary-structure-add/crew-salary-structure-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'fury-crew-salary-structure',
  templateUrl: './crew-salary-structure.component.html',
  styleUrls: ['./crew-salary-structure.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWSalaryStructureComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Parent", visible: true, name: "Parent" },
    { property: "Salary_Component", visible: true, name: "	Salary Component" },
    { property: "Salary_Mode", visible: true, name: "Salary Mode" },
    { property: "Salary_Type", visible: true, name: "Salary Type" },
    { property: "Sort_Order", visible: true, name: "Sort Order" },
    { property: "Move_Up", visible: true, name: "Move Up" },
    { property: "Move_Down", visible: true, name: "Move Down" },
    { property: "Action", visible: true, name: "" },
    { property: "Info", visible: true, name: "" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  SalaryStructureFilterForm:UntypedFormGroup;
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog) {
    this.titleService.setTitle(`Salary Structure`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();

    this.SalaryStructureFilterForm = this.fb.group({
      drpParent:[''],
      txtSalary_Component:[''],
      drpSalary_Mode:[''],
      drpSalary_Type:[''],
      drpStatus:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWSalaryStructureAddComponent, {
      width: "40%",
      maxHeight: "80%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
    // dialogRef.componentInstance.IsEdit = IsEdit;
    dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.componentInstance.modeltype = modeltype;
    dialogRef.afterClosed().subscribe((res: any) => {
    // this.FetchAllDepartment();
    });
  }
  

}
