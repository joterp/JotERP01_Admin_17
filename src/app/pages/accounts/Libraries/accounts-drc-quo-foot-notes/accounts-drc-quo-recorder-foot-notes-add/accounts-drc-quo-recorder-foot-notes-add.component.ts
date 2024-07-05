import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';



@Component({
  selector: 'fury-accounts-drc-quo-recorder-foot-notes-add',
  templateUrl: './accounts-drc-quo-recorder-foot-notes-add.component.html',
  styleUrl: './accounts-drc-quo-recorder-foot-notes-add.component.scss'
})
export class AccountsDRCQUORecorderFootNotesAddComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any>;

  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  [x: string]: any;
  IsEdit: boolean = false;
  EditData:any;
  // IsEdit: boolean;
  newcurrencyFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  @Input()
  columns: ListColumn[] = [
    { property: 'Group', visible: true, name: 'Group' },
    { property: 'Category', visible: true, name: 'Category' },
    { property: 'Point', visible: true, name: 'Point' },
    // { property: 'action', visible: true, name: 'action' },
  ] as ListColumn[];

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private dialogRef: MatDialogRef<AccountsDRCQUORecorderFootNotesAddComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,
    private http :HttpClient,

    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    console.log("Editdataaaaaaaaaaaaaaa-------------------------------------------",this.IsEdit)
    console.log(this.EditData,"this.data---------------->>>>>>>>>>>>>>>>>>")
    this.newcurrencyFormGroup = this._fb.group({
      Short_Code: ["", Validators.required],
      Country: ["", Validators.required],
      currency_description:[""],
     

    });

    if (this.IsEdit) {
      // this.InsertFormValues();
    }
    

  
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
