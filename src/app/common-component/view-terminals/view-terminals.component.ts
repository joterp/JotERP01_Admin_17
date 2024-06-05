import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';


import { ListColumn } from '../../../@fury/shared/list/list-column.model';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';


// service
import { ApiService } from '../../providers/services/ApiService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'view-terminals',
  templateUrl: './view-terminals.component.html',
  styleUrls: ['./view-terminals.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ViewTerminals implements OnInit {

  //  @Input()
  columns = [
    { name: 'checkbox', property: 'checkbox', visible: true },
    { name: 'terminalName', property: 'terminalName', visible: true },
  ];
  pageSize = 10000;
  dataSource: MatTableDataSource<[]> | null;

  @ViewChild(MatPaginator, { static: true }) paginator:MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ids: number[] = [];

  constructor(
    private dialogRef: MatDialogRef<ViewTerminals>,
    private dialog: MatDialog, private api: ApiService, private snackbar: MatSnackBar) {
  
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.FetchAllTerminal();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  CloseModal(){
    this.dialogRef.close(null);
  }

  SelectTerminal(terminal: object){
    var data = JSON.parse(JSON.stringify(this.dataSource.data));
    data.forEach((r: object) => {
      if(r['terminalId'] == terminal['terminalId']){
        r['selected'] = true;
      }else{
        r['selected'] = false;
      }
    });
    this.dataSource.data = data;
  }

  FetchAllTerminal(){
    this.api.GetDataService('terminal/all').subscribe( res => {
      if(res['code'] === 2000 && res['message'] === "SUCESS") {
        res['result'].forEach((r: object) => {
          if(this.ids.includes(r['terminalId'])){
            r['selected'] = true;
          }else{
            r['selected'] = false;
          }
        })
        this.dataSource.data = res['result'];
      }
    })
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
    // this.dataSource.filter = value.trim().toLowerCase();
  }

  Save(){
    var data = JSON.parse(JSON.stringify(this.dataSource.data));
    var checked = data.filter((d: object) => d['selected']);
    this.dialogRef.close(checked ? checked : null);
  }

}