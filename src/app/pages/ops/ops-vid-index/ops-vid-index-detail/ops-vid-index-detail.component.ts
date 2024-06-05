import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavModule } from 'src/app/layout/sidenav/sidenav.module';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { OPSQuestionHistoryComponent } from '../ops-question-history/ops-question-history.component';
import {FlatTreeControl} from '@angular/cdk/tree';

import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

interface FoodNode {
  name: string;
  count?: number;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli', count: 10},
          {name: 'Brussel sprouts', count: 20},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins', count: 30},
          {name: 'Carrots', count: 40},
        ]
      },
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  count: number;
  level: number;
}

@Component({
  selector: 'fury-ops-vid-index-detail',
  templateUrl: './ops-vid-index-detail.component.html',
  styleUrls: ['./ops-vid-index-detail.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class OPSVIDIndexDetailComponent implements OnInit {

  displayedColumns: string[] = ['name', 'count'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

  @Input()
  columns: ListColumn[] = [
    { property: "blank_1", visible: true, name: "" },
    { property: "blank_2", visible: true, name: "" },
    { property: "Question_no", visible: true, name: "Question no." },
    { property: "Question", visible: true, name: "Question" },
    { property: "Type", visible: true, name: "Type" },
    { property: "Nature", visible: true, name: "Nature" },
    { property: "Answer", visible: true, name: "Answer" },
    { property: "NA", visible: true, name: "NA" },
    { property: "Inactive_From", visible: true, name: "Inactive From" },
    { property: "Verify", visible: true, name: "Verify" },
    { property: "blank_3", visible: true, name: "" },
    { property: "blank_4", visible: true, name: "" },
	
  ] as ListColumn[];
  pageSize = 10;
  // dataSource: MatTableDataSource<any> | null;
  

  routeTitle:string="";
  VIDIndexDetailsFormGroup:UntypedFormGroup;

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      count: node.count,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, 
      node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private titleService:Title, private sidenavService:SidenavService, private fb:UntypedFormBuilder, private dialog:MatDialog, ) {
    this.titleService.setTitle(`Vessel Information Database`);
    this.dataSource.data = TREE_DATA;
   }
   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource();

    this.routeTitle = this.titleService.getTitle();
    this.VIDIndexDetailsFormGroup = this.fb.group({
      drpVessel:['', Validators.required],
      drpVID_Type: ['', Validators.required],
      inactive_from:['']
    })
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);
    
    
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }

  QuestionHistory(data: object) {
    const dialogRef = this.dialog.open(OPSQuestionHistoryComponent, {
      width: "60%",
      maxHeight: "90%",
      disableClose: true,
    });
    // dialogRef.componentInstance.EditData = data;
  
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        // this.onClickSubmit(this.filterFormGroup.value);
      }
    });
  }


}
