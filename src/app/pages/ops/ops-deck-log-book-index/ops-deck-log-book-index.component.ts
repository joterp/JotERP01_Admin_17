import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

@Component({
  selector: 'fury-ops-deck-log-book-index',
  templateUrl: './ops-deck-log-book-index.component.html',
  styleUrls: ['./ops-deck-log-book-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OPSDeckLogBookIndexComponent implements OnInit {
  pageSize = 10;

  DeckLogdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  DeckLogIndexFilterFormGroup: UntypedFormGroup;


  @ViewChild('select') select: MatSelect;
					allSelected=false;
					Vessel: any[] = [
					  {value: 'Alexandre', viewValue: 'Alexandre'},
					  {value: 'Marie', viewValue: 'Marie'},
					  {value: 'yami', viewValue: 'Yami'}
					  ];
  
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog:MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Deck Log Index`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Report_date", visible: true, name: "Report_date" },
       { property: "Form_Port", visible: true, name: "Form_Port" },
       { property: "To_Port", visible: true, name: "To_Port" },
       { property: "Incidents", visible: true, name: "Incidents" },
       
     ] as ListColumn[];
 
     get DeckLogvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }
 
  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.DeckLogIndexFilterFormGroup = this.fb.group({
      drpFleet: [""],
      drpVessel_Name: [""],
      Date_Form: [""],
      pickerTo: [""],
     
    });
    this.DeckLogdataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.DeckLogdataSource.paginator = this.paginator;
    this.DeckLogdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.DeckLogIndexFilterFormGroup.reset();
    this.DeckLogIndexFilterFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');
  }
  toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
    }

    optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
      newStatus = false;
      }
    });
    this.allSelected = newStatus;
    }

      
      
  
   
 
   

}
