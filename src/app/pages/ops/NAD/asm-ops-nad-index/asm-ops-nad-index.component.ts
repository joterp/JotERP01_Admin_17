import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-asm-ops-nad-index',
  templateUrl: './asm-ops-nad-index.component.html',
  styleUrls: ['./asm-ops-nad-index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ASMOPSNADIndexComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "Current", visible: true, name: "Current" },
    { property: "Next", visible: true, name: "Next" },
   
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  ASMNADIndexFilterForm:UntypedFormGroup;

  selectedFileName: string = '';
  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private router:Router) { 
    this.titleService.setTitle(`ASM - Excel Noon Reports Index`);
  }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
    
    this.ASMNADIndexFilterForm = this.fb.group({
      txtVessel:[''],
      txtVoyage:[''],
      From_Date:[''],
      To_Date:[''],
      drpStatus:['']

    })
  }

  ngAfterViewInit() {

    this.sidenavService.setCollapsed(true);  
   
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

  gotoPURC_ASM_OPS_NAD_IDIVIDUAL(buttonName:string){
    if(buttonName === 'ASM_OPS_NAD_INDIVIDUAL'){
     this.router.navigate(['OPS/NAD/ASM_OPS_NAD_INDIVIDUAL']);
    }
  }


}
