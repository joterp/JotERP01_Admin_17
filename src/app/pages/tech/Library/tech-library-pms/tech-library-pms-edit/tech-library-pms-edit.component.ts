import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-tech-library-pms-edit',
  templateUrl: './tech-library-pms-edit.component.html',
  styleUrls: ['./tech-library-pms-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TECHLibraryPMSEditComponent implements OnInit {
  IsEdit: boolean;
  pmsJobFormGroup: UntypedFormGroup;
  stringHtml: string = null;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;
  selectedFileName: string = '';

  @ViewChild("TABLE") table: ElementRef;
  constructor(private dialogRef: MatDialogRef<TECHLibraryPMSEditComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    
    @Inject (MAT_DIALOG_DATA) public data:any) {
       this.pmsJobFormGroup = this._fb.group({ 
        drpVessel: ["", Validators.required],
        drpMachinery: ["", Validators.required],
        drpSub_Component: ["", Validators.required],
        txtJob_Code: ["", Validators.required],
        txtJobTitle: ["", Validators.required],
        txtMaker: [""],
        txtParticulars: [""],
        txtModel: [""],
        txtSets_Installed: [""],
        drpDepartment:[""],
        txtFreq: [""],
        drpJob_Type: [""],
        drpRank: [""],
        radioNew_Reqsn_Status:[""],
        radioNew_Citical_job: [""],
      


         
      });
    }

    
    @ViewChild("TABLE1") table1: ElementRef;
    @ViewChild("TABLE2") table2: ElementRef;

    dataSource: MatTableDataSource<any> | null;
    notassigndataSource: MatTableDataSource<any> | null;
    assigndataSource: MatTableDataSource<any> | null;

    @Input()
    columns: ListColumn[] = [
      { property: "Rank", visible: true, name: "Rank" },
      { property: "Man_Hours", visible: true, name: "Man_Hours" },
    
    
    ] as ListColumn[];

    notassigncolumn: ListColumn[] = [
      { property: "Form_No", visible: true, name: "Form_No" },
      { property: "UnAssigned_Forms", visible: true, name: "UnAssigned_Forms" },
      { property: "Is_Mandatory", visible: true, name: "Is_Mandatory" },
      { property: "AssignAll", visible: true, name: "AssignAll" },
  
    ] as ListColumn[];

    assigncolumn: ListColumn[] = [
      { property: "UnAssignAll", visible: true, name: "UnAssignAll" },
      { property: "FormNo", visible: true, name: "FormNo" },
      { property: "AssignedForms", visible: true, name: "AssignedForms" },
      { property: "IsMandatory", visible: true, name: "IsMandatory" }
    
  
    ] as ListColumn[];
    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    get visibleColumnsNotAssignCert() {
      return this.notassigncolumn
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    get visibleColumnsAssignCert() {
      return this.assigncolumn
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
  
    ngOnInit(): void {
      this.dataSource = new MatTableDataSource();
      this.notassigndataSource = new MatTableDataSource();
      this.assigndataSource = new MatTableDataSource();
    }
   
   
    
  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }
    CloseModal() {
      this.dialogRef.close(true);
    }
    created(event: any) {
      console.log(event);
  
      if (this.stringHtml != null) {
        event.root.innerHTML = this.stringHtml;
      }
    }
  
    changedEditor(event: EditorChangeContent | EditorChangeSelection) {}
  
    contentChanged(obj: any) {
      this.stringHtml = obj.html;
    }

    onFileSelected(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement.files && inputElement.files.length > 0) {
        this.selectedFileName = inputElement.files[0].name;
      } else {
        this.selectedFileName = '';
      }
    }

    removeUploadedFileadditem(): void {
      this.selectedFileName = null;    // Reset the selectedFileNameCatalogue
    }
   
    
  }

 

