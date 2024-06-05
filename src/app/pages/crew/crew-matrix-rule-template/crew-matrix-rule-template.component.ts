import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWMatrixRuleTemplateAddComponent } from './crew-matrix-rule-template-add/crew-matrix-rule-template-add.component';
import { CREWTemplateVariableAddComponent } from './crew-template-variable-add/crew-template-variable-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-matrix-rule-template',
  templateUrl: './crew-matrix-rule-template.component.html',
  styleUrls: ['./crew-matrix-rule-template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWMatrixRuleTemplateComponent implements OnInit {
  pageSize = 10;

  ruleTemplatedataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  ruleTemplateFormGroup: UntypedFormGroup;
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Crew Matrix - Rule Template`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Template", visible: true, name: "Template" },
       { property: "Query", visible: true, name: "Query" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get matriRuleTemplatevisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.ruleTemplateFormGroup = this.fb.group({
      txtTemplate: [""],
      drpStatus: ["1"]
    });
    this.ruleTemplatedataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.ruleTemplatedataSource.paginator = this.paginator;
    this.ruleTemplatedataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.ruleTemplateFormGroup.reset();
    this.ruleTemplateFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveMatrixRuleTemplate(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWMatrixRuleTemplateAddComponent,
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

    saveTemplateVariable(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWTemplateVariableAddComponent,
        {
          width: "50%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 

}
