import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { OPSVIDQuestionnairesEditComponent } from './ops-vid-questionnaires-edit/ops-vid-questionnaires-edit.component';
import { OPSVIDChaptersEditComponent } from './ops-vid-chapters-edit/ops-vid-chapters-edit.component';
import { OPSVIDCategoryEditComponent } from './ops-vid-category-edit/ops-vid-category-edit.component';
import { OPSVIDQuestionEditComponent } from './ops-vid-question-edit/ops-vid-question-edit.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-ops-vid-new-library',
  templateUrl: './ops-vid-new-library.component.html',
  styleUrls: ['./ops-vid-new-library.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVIDNEWLIBRARYComponent implements OnInit {
  pageSize = 10;

  QuesFilterFormGroup: UntypedFormGroup;
  ChapterFilterFormGroup:UntypedFormGroup;
  CategoryFilterFormGroup:UntypedFormGroup;
  QuestionFilterFormGroup: UntypedFormGroup;
  
  QuestionnairesdataSource: MatTableDataSource<any> | null;
  ChapterdataSource: MatTableDataSource<any> | null;
  CategorydataSource:MatTableDataSource<any> | null;
  QuestiondataSource:MatTableDataSource<any> | null;

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
     Questionnaire: ListColumn[] = [
       { property: "Department", visible: true, name: "Department" },
       { property: "VID_Questionnaires", visible: true, name: "VID_Questionnaires" },
       { property: "Is_Mother", visible: true, name: "Is_Mother" },
       { property: "Action", visible: true, name: "Action" },
       
     ] as ListColumn[];
 
     get QuestionnairesvisibleColumns() {
       return this.Questionnaire
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

     //Chapter
     @Input()
     Chapter: ListColumn[] = [
       { property: "Chapter_No", visible: true, name: "Chapter_No" },
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
       { property: "Category_No", visible: true, name: "Category_No" },
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
      Question: ListColumn[] = [
        { property: "Question", visible: true, name: "Question" },
        { property: "Question_No", visible: true, name: "Question_No" },
        { property: "Answer_Type", visible: true, name: "Answer_Type" },
        { property: "Answer_Nature", visible: true, name: "Answer_Nature" },
        { property: "Action", visible: true, name: "Action" },
        
      ] as ListColumn[];

      get QuestionvisibleColumns() {
        return this.Question
          .filter((column) => column.visible)
          .map((column) => column.property);
      }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);

    this.QuesFilterFormGroup = this.fb.group({
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
    this.QuestionnairesdataSource = new MatTableDataSource();
    this.ChapterdataSource = new MatTableDataSource();
    this.CategorydataSource = new MatTableDataSource();
    this.QuestiondataSource = new MatTableDataSource();
  }
  ngOnDestroy() {

    
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.QuestionnairesdataSource.paginator = this.Quespaginator;
    this.ChapterdataSource.paginator = this.chapterpaginator;
    this.CategorydataSource.paginator = this.categorypaginator;
    this.QuestiondataSource.paginator = this.Questionpaginator;


    this.QuestionnairesdataSource.sort = this.sort;
    this.ChapterdataSource.sort = this.sort;
    this.CategorydataSource.sort = this.sort;
    this.QuestiondataSource.sort = this.sort;
  }
 
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  saveQuestionnaires(data:object, IsEdit:boolean, modeltitle:string) {
    const dialogRef = this.dialog.open(OPSVIDQuestionnairesEditComponent,
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
      const dialogRef = this.dialog.open(OPSVIDChaptersEditComponent,
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
        const dialogRef = this.dialog.open(OPSVIDCategoryEditComponent,
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
        saveQuestion(data:object, IsEdit:boolean,modeltitle:string) {
          const dialogRef = this.dialog.open(OPSVIDQuestionEditComponent,
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
