import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';

import { CommonService } from 'src/app/providers/services/CommonService';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Alexa'
    
  },
  {
    name: 'Alexandre',
    // children: [
    //   {
    //     name: 'Green',
    //     children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
    //   },
    //   {
    //     name: 'Orange',
    //     children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
    //   },
    // ],
  },
  {
    name: 'Catalan Sea',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Eagle Trenton',
    children: [{name: '12'}, {name: '12'}, {name: '32'},{name: '11 B 2017'}, {name: '21 L 2017'}, {name: '22 L 2017'},{name: '02 L 2017'}, {name: 'Stena A'}, {name: 'Yuho Maru 1'}],
  },
  {
    name: 'Grace River',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'INS Vikrant',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Kota Cempaka',
    // children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Stena A',
    children: [{name: '12'}, {name: '12'}, {name: '86'},{name: '84'}, {name: 'voyage798'}, {name: 'voyage798'},{name: '17 B 2017'}],
  },
  
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */

@Component({
  selector: 'fury-ops-nad-voyage-log-tree-view',
  templateUrl: './ops-nad-voyage-log-tree-view.component.html',
  styleUrls: ['./ops-nad-voyage-log-tree-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSNADVoyageLogTreeViewComponent implements OnInit {
  authGuard: AuthGuard;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  addNewVoyageLog : boolean = false;
  constructor(private router: Router, private api: ApiService, private auth: AuthGuard,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder, private titleService: Title,private sidenavService: SidenavService) {
      this.authGuard = this.auth;
      this.dataSource.data = TREE_DATA;
      this.titleService.setTitle(`Voyage Log Tree-View`);
     }
     hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  openVoyageLog() {
    this.addNewVoyageLog = true;
  }
  GridView(buttonName:string){
    if(buttonName === 'OPS_NAD_Voyage_Log_Abstract'){
    this.router.navigate(['OPS/NAD/OPS_NAD_Voyage_Log_Abstract'])
    } 
    }

}
