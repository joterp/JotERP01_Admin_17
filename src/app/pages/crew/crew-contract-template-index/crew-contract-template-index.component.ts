import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWContractTemplateIndexAddComponent } from './crew-contract-template-index-add/crew-contract-template-index-add.component';
import { CREWCopyTemplateModelComponent } from './crew-copy-template-model/crew-copy-template-model.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-crew-contract-template-index',
  templateUrl: './crew-contract-template-index.component.html',
  styleUrls: ['./crew-contract-template-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWContractTemplateIndexComponent implements OnInit {
  selected: any[];
  selectedClient: any[];
  ErrorMessage: string = '';
  contractTemplateFormGroup :UntypedFormGroup;
  loading: boolean;
  authGuard: AuthGuard;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;

      this.titleService.setTitle(`Contract Templates`);
     }
     @Input()
     columns:ListColumn[] = [
      { property: "Template_Type", visible: true, name: "Template_Type" },
      { property: "Template_Name", visible: true, name: "Template_Name" },
      { property: "Company_Name", visible: true, name: "Company_Name" },
      { property: "Vessel_Manager", visible: true, name: "Vessel_Manager" },
      { property: "Vessel_Flag", visible: true, name: "Vessel_Flag" },
      { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];

     @ViewChild("TABLE") table :ElementRef;

     @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
     contractTemplatedataSource :MatTableDataSource<any> | null;

     pageSize = 5;
    
     selectedItem: Array<any> = [];
  
    
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.contractTemplateFormGroup = this.fb.group({
      txtTemplate_Type: [""],
      txtTemplate_Name: [""],
      drpStatus: ["1"]
    });

    this.contractTemplatedataSource = new MatTableDataSource();
  }
  clearFilter() {
    this.loading = true;
    this.contractTemplateFormGroup.reset();
    this.contractTemplateFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {

    this.contractTemplatedataSource.paginator = this.paginator;

  }
  get contractTemplatesvisibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  saveTemplate(data:object, IsEdit:boolean) {
    const dialogRef = this.dialog.open(CREWContractTemplateIndexAddComponent,
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

    copyTemplate(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWCopyTemplateModelComponent,
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
      AssignVessel(buttonName:string){
        if(buttonName === 'CREW_Contract_Template_Vessel_Assignment'){
        this.router.navigate(['CREW/CREW_Contract_Template_Vessel_Assignment'])
        } 
        }
  

}
