import { Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-vessel-list-model',
  templateUrl: './ops-vessel-list-model.component.html',
  styleUrls: ['./ops-vessel-list-model.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSVesselListModelComponent implements OnInit {
  IsEdit: boolean;

  constructor(private dialogRef: MatDialogRef<OPSVesselListModelComponent>,
    private _fb: UntypedFormBuilder,
    private api: ApiService,
    private common: CommonService,

    @Inject(MAT_DIALOG_DATA) public data: any) { }
    @Input()
    
    assigncustomcolumns:ListColumn[] = [
     { property: "Date", visible: true, name: "Date" },
     { property: "Lat", visible: true, name: "Lat" },
     { property: "Lon", visible: true, name: "Lon" },
     { property: "Cource", visible: true, name: "Cource" },
     { property: "Speed", visible: true, name: "Speed" },
     
   
   
    ] as ListColumn[];


    @ViewChild("TABLE") table: ElementRef;

  

   

    @ViewChild("Paginator", { static: true }) paginator: MatPaginator;
   

   
    ViewVesseldataSource :MatTableDataSource<any> | null;
    
   //  dataSourceVessels: MatTableDataSource<any> | null;
   
   //  assignCertificatedataSource: MatTableDataSource<any> | null;


 
  ngOnInit(): void {
    this.ViewVesseldataSource = new MatTableDataSource();
  }
  CloseModal() {
    this.dialogRef.close(true);
  }
  ngAfterViewInit() {
   
    this.ViewVesseldataSource.paginator = this.paginator;
  

   }

  get AlertListvisibleColumns() {
    return this.assigncustomcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

}
