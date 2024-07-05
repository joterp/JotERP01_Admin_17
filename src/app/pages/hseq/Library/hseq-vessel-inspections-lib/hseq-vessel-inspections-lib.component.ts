
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HseqVesselInspectionsLibTypeAddComponent } from './hseq-vessel-inspections-lib-type-add/hseq-vessel-inspections-lib-type-add.component';
import { HseqVesselInspectionsLibChapterAddComponent } from './hseq-vessel-inspections-lib-chapter-add/hseq-vessel-inspections-lib-chapter-add.component';
import { HseqVesselInspectionsLibCategoryAddComponent } from './hseq-vessel-inspections-lib-category-add/hseq-vessel-inspections-lib-category-add.component';
import { HseqVesselInspectionsLibItemAddComponent } from './hseq-vessel-inspections-lib-item-add/hseq-vessel-inspections-lib-item-add.component';
@Component({
  selector: 'fury-hseq-vessel-inspections-lib',
  templateUrl: './hseq-vessel-inspections-lib.component.html',
  styleUrls: ['./hseq-vessel-inspections-lib.component.scss']
})
export class HSEQVESSELINSPECTIONSLIBComponent implements OnInit {

  pageSize = 10;

  TypeFormGroup: UntypedFormGroup;
  ChapterFilterFormGroup:UntypedFormGroup;
  CategoryFilterFormGroup:UntypedFormGroup;
  QuestionFilterFormGroup: UntypedFormGroup;
  
  TypedataSource: MatTableDataSource<any> | null;
  ChapterdataSource: MatTableDataSource<any> | null;
  CategorydataSource:MatTableDataSource<any> | null;
  ItemdataSource:MatTableDataSource<any> | null;

  @ViewChild("TABLE1") table1: ElementRef;
  @ViewChild("TABLE2") table2: ElementRef;
  @ViewChild("TABLE3") table3: ElementRef;
  @ViewChild("TABLE4") table4: ElementRef;
  @ViewChild(MatPaginator, { static: true }) Quespaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) chapterpaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) categorypaginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) Questionpaginator: MatPaginator;
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 

  loading: boolean;
  
 
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder,private router:Router,) {
      this.titleService.setTitle(`Vessel Information Database Library`);
     }
     // Questionnaire
     @Input()
     TypeColumns: ListColumn[] = [
       { property: "Inspection_Name", visible: true, name: "Inspection_Name" },
       { property: "Department", visible: true, name: "Department" },
      //  { property: "DefectlistAssignedBy", visible: true, name: "DefectlistAssignedBy" },
       { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get TypevisibleColumns() {
       return this.TypeColumns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     //Chapter
     @Input()
     Chapter: ListColumn[] = [
       { property: "No", visible: true, name: "No" },
       { property: "Chapter", visible: true, name: "Chapter" },
       { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get chaptervisibleColumns() {
       return this.Chapter
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     //Category
     @Input()
     Category: ListColumn[] = [
       { property: "No", visible: true, name: "No" },
       { property: "Category", visible: true, name: "Category" },
       { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get categoryvisibleColumns() {
       return this.Category
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
      //Question
      @Input()
      ItemColumns: ListColumn[] = [
        { property: "No", visible: true, name: "No" },
        { property: "Question", visible: true, name: "Question" },
        { property: "Grade", visible: true, name: "Grade" },
        { property: "Grade_Type", visible: true, name: "Grade_Type" },
        { property: "Assigned_Rank", visible: true, name: "Assigned_Rank" },
        { property: "Action", visible: true, name: "Action" },
        
      ] as ListColumn[];

      get ItemvisibleColumns() {
        return this.ItemColumns
          .filter((column) => column.visible)
          .map((column) => column.property);
      }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.TypeFormGroup = this.fb.group({
      drpSelect: [""],
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.ChapterFilterFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.CategoryFilterFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.QuestionFilterFormGroup = this.fb.group({
      txtDemo: [""],
      drpStatus: ["1"]
    });
    this.TypedataSource = new MatTableDataSource();
    this.ChapterdataSource = new MatTableDataSource();
    this.CategorydataSource = new MatTableDataSource();
    this.ItemdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {

    
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.TypedataSource.paginator = this.Quespaginator;
    this.ChapterdataSource.paginator = this.chapterpaginator;
    this.CategorydataSource.paginator = this.categorypaginator;
    this.ItemdataSource.paginator = this.Questionpaginator;


    this.TypedataSource.sort = this.sort;
    this.ChapterdataSource.sort = this.sort;
    this.CategorydataSource.sort = this.sort;
    this.ItemdataSource.sort = this.sort;
  }
 
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveInspectionType(data:object, IsEdit:boolean, modeltitle:string) {
    const dialogRef = this.dialog.open(HseqVesselInspectionsLibTypeAddComponent,
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
    saveChapter(data:object, IsEdit:boolean,modeltitle:string) {
      const dialogRef = this.dialog.open(HseqVesselInspectionsLibChapterAddComponent,
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
      saveCategory(data:object, IsEdit:boolean,modeltitle:string) {
        const dialogRef = this.dialog.open(HseqVesselInspectionsLibCategoryAddComponent,
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
        saveItem(data:object, IsEdit:boolean,modeltitle:string) {
          const dialogRef = this.dialog.open(HseqVesselInspectionsLibItemAddComponent,
            {
              width: "35%",
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
