import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
// import { OPSVIDQuestionnairesEditComponent } from './ops-vid-questionnaires-edit/ops-vid-questionnaires-edit.component';
// import { OPSVIDChaptersEditComponent } from './ops-vid-chapters-edit/ops-vid-chapters-edit.component';
// import { OPSVIDCategoryEditComponent } from './ops-vid-category-edit/ops-vid-category-edit.component';
// import { OPSVIDQuestionEditComponent } from './ops-vid-question-edit/ops-vid-question-edit.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminModuleAddComponent } from './admin-module-add/admin-module-add.component';
import { AdminParentAddComponent } from './admin-parent-add/admin-parent-add.component';
import { AdminChildAddComponent } from './admin-child-add/admin-child-add.component';
import { AdminGrandchildAddComponent } from './admin-grandchild-add/admin-grandchild-add.component';
import { AdminGreatgrandchildAddComponent } from './admin-greatgrandchild-add/admin-greatgrandchild-add.component';

@Component({
  selector: 'fury-admin-system-parameters',
  templateUrl: './admin-system-parameters.component.html',
  styleUrls: ['./admin-system-parameters.component.scss']
})
export class AdminSystemParametersComponent {
  pageSize = 10;

  moduleFormGroup: UntypedFormGroup;
  parentFormGroup:UntypedFormGroup;
  childFormGroup:UntypedFormGroup;
  GrandchildFormGroup: UntypedFormGroup;
  GreatGrandchildFormGroup: UntypedFormGroup;
  
  moduledataSource: MatTableDataSource<any> | null;
  parentdataSource: MatTableDataSource<any> | null;
  childdataSource:MatTableDataSource<any> | null;
  GrandchilddataSource:MatTableDataSource<any> | null;
  GreatGrandchilddataSource:MatTableDataSource<any> | null;

  @ViewChild("TABLE1") table1: ElementRef;
  @ViewChild("TABLE2") table2: ElementRef;
  @ViewChild("TABLE3") table3: ElementRef;
  @ViewChild("TABLE4") table4: ElementRef;
  @ViewChild("TABLE5") table5: ElementRef;

  @ViewChild(MatPaginator, { static: true }) modulepaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) parentpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) childpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) grandchildpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) greatgrandchildpaginator: MatPaginator;
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 
  

  loading: boolean;
  
 
 
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router,) {
      this.titleService.setTitle(`SYS Parameter`);
     }
     // Module
     @Input()
     Module: ListColumn[] = [
       { property: "Module", visible: true, name: "Module" },
      //  { property: "VID_Questionnaires", visible: true, name: "VID_Questionnaires" },
      //  { property: "Is_Mother", visible: true, name: "Is_Mother" },
      //  { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get modulevisibleColumns() {
       return this.Module
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     //Chapter
     @Input()
     parent: ListColumn[] = [
       { property: "Parent", visible: true, name: "Parent" },
      //  { property: "Chapter", visible: true, name: "Chapter" },
      //  { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get parentvisibleColumns() {
       return this.parent
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     //Category
     @Input()
     child: ListColumn[] = [
       { property: "Child", visible: true, name: "Child" },
      //  { property: "Category", visible: true, name: "Category" },
      //  { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get childvisibleColumns() {
       return this.child
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
      //Question
      @Input()
      GrandChild: ListColumn[] = [
        { property: "GrandChild", visible: true, name: "GrandChild" },
        // { property: "Question_No", visible: true, name: "Question_No" },
        // { property: "Answer_Type", visible: true, name: "Answer_Type" },
        // { property: "Answer_Nature", visible: true, name: "Answer_Nature" },
        // { property: "Action", visible: true, name: "Action" },
        
      ] as ListColumn[];

      get grandchildvisibleColumns() {
        return this.GrandChild
          .filter((column) => column.visible)
          .map((column) => column.property);
      }

       //greatgrandchild
       @Input()
       GreatGrandChild: ListColumn[] = [
         { property: "GreatGrandChild", visible: true, name: "GreatGrandChild" },
         // { property: "Question_No", visible: true, name: "Question_No" },
         // { property: "Answer_Type", visible: true, name: "Answer_Type" },
         // { property: "Answer_Nature", visible: true, name: "Answer_Nature" },
         // { property: "Action", visible: true, name: "Action" },
         
       ] as ListColumn[];
 
       get greatgrandchildvisibleColumns() {
         return this.GreatGrandChild
           .filter((column) => column.visible)
           .map((column) => column.property);
       }

      
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.moduleFormGroup = this.fb.group({
      drpSelect: [""],
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.parentFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.childFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.GrandchildFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });

    this.GreatGrandchildFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.moduledataSource = new MatTableDataSource();
    this.parentdataSource = new MatTableDataSource();
    this.childdataSource = new MatTableDataSource();
    this.GrandchilddataSource = new MatTableDataSource();
    this.GreatGrandchilddataSource = new MatTableDataSource();
  }
  ngOnDestroy() {

    
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.moduledataSource.paginator = this.modulepaginator;
    this.parentdataSource.paginator = this.parentpaginator;
    this.childdataSource.paginator = this.childpaginator;
    this.GrandchilddataSource.paginator = this.grandchildpaginator;
    this.GreatGrandchilddataSource.paginator = this.greatgrandchildpaginator;


    this.moduledataSource.sort = this.sort;
    this.parentdataSource.sort = this.sort;
    this.childdataSource.sort = this.sort;
    this.GrandchilddataSource.sort = this.sort;
    this.GreatGrandchilddataSource.sort = this.sort;

  }
 
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveModule(data:object, IsEdit:boolean, modeltitle:string) {
    const dialogRef = this.dialog.open(AdminModuleAddComponent,
      {
        width: "30%",
        maxHeight: "90%",
        disableClose: true,
        data:data
      });

      dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
    dialogRef.afterClosed().subscribe((data:any)=>{
     
    });
    } 
    saveParent(data:object, IsEdit:boolean, modeltitle:string) {
      const dialogRef = this.dialog.open(AdminParentAddComponent,
        {
          width: "30%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.componentInstance.modeltitle = modeltitle;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
      saveChild(data:object, IsEdit:boolean, modeltitle:string) {
        const dialogRef = this.dialog.open(AdminChildAddComponent,
          {
            width: "30%",
            maxHeight: "90%",
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
          dialogRef.componentInstance.modeltitle = modeltitle;
        dialogRef.afterClosed().subscribe((data:any)=>{
         
        });
        } 
        saveGrandChild(data:object, IsEdit:boolean, modeltitle:string) {
          const dialogRef = this.dialog.open(AdminGrandchildAddComponent,
            {
              width: "30%",
              maxHeight: "90%",
              disableClose: true,
              data:data
            });
      
            dialogRef.componentInstance.IsEdit= IsEdit;
            dialogRef.componentInstance.modeltitle = modeltitle;
          dialogRef.afterClosed().subscribe((data:any)=>{
           
          });
          } 

          saveGreatGrandChild(data:object, IsEdit:boolean, modeltitle:string) {
            const dialogRef = this.dialog.open(AdminGreatgrandchildAddComponent,
              {
                width: "30%",
                maxHeight: "90%",
                disableClose: true,
                data:data
              });
        
              dialogRef.componentInstance.IsEdit= IsEdit;
              dialogRef.componentInstance.modeltitle = modeltitle;
            dialogRef.afterClosed().subscribe((data:any)=>{
             
            });
            } 
       

          VIDType(buttonName:string){
            if(buttonName === 'OPS_VID_LIB_Types'){
             this.router.navigate(['OPS/VID/OPS_VID_LIB_Types'])
            } 
          }
          VIDChapters(buttonName:string){
            if(buttonName === 'OPS_VID_LIB_Chapters'){
            this.router.navigate(['OPS/VID/OPS_VID_LIB_Chapters'])
            } 
          }
          VIDCatagaries(buttonName:string){
            if(buttonName === 'OPS_VID_LIB_Catagaries'){
            this.router.navigate(['OPS/VID/OPS_VID_LIB_Catagaries'])
            } 
          }
          VIDQuestions(buttonName:string){
            if(buttonName === 'OPS_VID_LIB_Questions'){
            this.router.navigate(['OPS/VID/OPS_VID_LIB_Questions'])
          } 
   }
 

}
