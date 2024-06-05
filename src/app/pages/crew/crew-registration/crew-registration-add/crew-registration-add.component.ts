import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { CREWFollowupAddComponent } from './crew-followup-add/crew-followup-add.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-crew-registration-add',
  templateUrl: './crew-registration-add.component.html',
  styleUrls: ['./crew-registration-add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrewRegistrationAddComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Followup_Remarks", visible: true, name: "Followup Remarks" },
    { property: "Date", visible: true, name: "Date" },
   

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  modeltitle:string="";
  modeltype:string;

  fileToUpload: any;
  imageUrl: any = "../../../../assets/img/profile_icon.png";

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  CrewRegistrationFormGroup:UntypedFormGroup;
  constructor(private fb:UntypedFormBuilder, private dialogRef:MatDialogRef<CrewRegistrationAddComponent>, private dialog:MatDialog) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  } 
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    
   this.CrewRegistrationFormGroup = this.fb.group({
    txtFirst_Name:['', Validators.required],
    txtLast_Name:['', Validators.required],
    DOB:['', Validators.required],
    txtAge:[''],
    drpGender:['', Validators.required],
    drpCountry:['', Validators.required],
    drpCity:['', Validators.required],
    Reminder_Date:[''],
    drpManning_Office:['', Validators.required],
    drpRank:['', Validators.required],
    drpType_Of_Vessel:['', Validators.required],
    drpNationality:['', Validators.required],
    Available_Date:['', Validators.required],
    txtEmail:['', Validators.required],
    txtPhone:['', Validators.required],
    txtRemark:['']
   })
  }
  
  check() {
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  removeFileInput(): void {
    this.imageUrl = null; // Reset the selectedFileNameCatalogue
  }

  CloseModal() {
    this.dialogRef.close(null);
  }

  AddFormData(data: object, modeltitle: string, modeltype: string) {
    
    const dialogRef = this.dialog.open(CREWFollowupAddComponent, {
      width: "30%",
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
