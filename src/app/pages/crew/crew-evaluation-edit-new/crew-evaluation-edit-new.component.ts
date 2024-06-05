import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-crew-evaluation-edit-new',
  templateUrl: './crew-evaluation-edit-new.component.html',
  styleUrls: ['./crew-evaluation-edit-new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CREWEvaluationEditNewComponent implements OnInit {

  panelOpenState = true;

  CrewEvaluationFormGroup:UntypedFormGroup;
  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "S_No", visible: true, name: "S No." },
    { property: "Criteria", visible: true, name: "Criteria" },
    { property: "Answer_Reference", visible: true, name: "Answer Reference" },
    { property: "Select_Option", visible: true, name: "Select Option" },
    { property: "Evaluator_Comments", visible: true, name: "Evaluator Comments" },
    { property: "NA", visible: true, name: "NA?" },
    { property: "Appraisee_Comment", visible: true, name: "Appraisee Comment" },
 
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<any> | null;

  constructor(private sidenavService:SidenavService, private fb:UntypedFormBuilder) { }

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();

    this.CrewEvaluationFormGroup = this.fb.group({

    })

  }

  check() {
 
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true); 
  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }


}
