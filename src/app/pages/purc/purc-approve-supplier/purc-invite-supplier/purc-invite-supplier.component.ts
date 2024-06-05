import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';


import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { EditorChangeContent, EditorChangeSelection } from "ngx-quill";
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-purc-invite-supplier',
  templateUrl: './purc-invite-supplier.component.html',
  styleUrls: ['./purc-invite-supplier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PURCInviteSupplierComponent implements OnInit {

  InviteSupplierFormGroup:UntypedFormGroup;
  ErrorMessage: string = "";
  dataSourceClient: any;
  stringHtml: string = null;
  selectedFileName: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageSize = 10;

  columns: ListColumn[] = [
    { property: "Supplier_Name", visible: true, name: "Supplier Name" },
    { property: "Country", visible: true, name: "Country" },
    { property: "City", visible: true, name: "City" },
  ] as ListColumn[];

  dataSource: MatTableDataSource<any> | null;
  constructor(private dialogRef: MatDialogRef<PURCInviteSupplierComponent>, private fb:UntypedFormBuilder) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
this.dataSource = new MatTableDataSource();

    this.InviteSupplierFormGroup = this.fb.group({
      drpSearch_by_scope:[''],
      txtMail_to:['', Validators.required],
      txtcc:[''],
      txtSubject:['', Validators.required],
      txtCredit_terms:['', Validators.required]

    })
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilterClient(filterValue: string) {
    this.dataSourceClient.filter = filterValue.trim().toLowerCase();
  }
  CloseModal() {
    this.dialogRef.close(null);
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
    this.selectedFileName = null; // Reset the selectedFileNameCatalogue
  }
}
