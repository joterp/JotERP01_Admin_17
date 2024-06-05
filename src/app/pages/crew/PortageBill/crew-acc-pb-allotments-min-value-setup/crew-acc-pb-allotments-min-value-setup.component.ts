import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';


import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { CREWACCPBAllotmentsMinValueSetupAddComponent } from './crew-acc-pb-allotments-min-value-setup-add/crew-acc-pb-allotments-min-value-setup-add.component';
import { CREWCopySetupModalComponent } from './crew-copy-setup-modal/crew-copy-setup-modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatSelect } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'fury-crew-acc-pb-allotments-min-value-setup',
  templateUrl: './crew-acc-pb-allotments-min-value-setup.component.html',
  styleUrls: ['./crew-acc-pb-allotments-min-value-setup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CREWACCPBAllotmentsMinValueSetupComponent implements OnInit {
  pageSize = 10;

  minValueIndexdataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  allotmentMinValueIndexFormGroup: UntypedFormGroup;
  @ViewChild('select') select: MatSelect;
  @ViewChild('select2') select2: MatSelect;
  @ViewChild('selectRank') selectRank: MatSelect;
  allSelected=false;
  allNationalitySelected=false;
  allRankSelected=false;

  Vessel: any[] = [
    {value: 'Alexandre', viewValue: 'Alexandre'},
    {value: 'Marie', viewValue: 'Marie'},
    {value: 'yami', viewValue: 'Yami'}
    ];


  Nationality: any[] = [
      {value: 'Afghanistan', viewValue: 'Afghanistan'},
      {value: 'China', viewValue: 'China'},
      {value: 'India', viewValue: 'India'}
      ];

      Ranks: any[] = [
        {value: 'MST- Master', viewValue: 'MST - Master'},
        {value: 'MST-T - Trainee Master', viewValue: 'MST-T - Trainee Master'},
        {value: 'MST - Master_P', viewValue: 'MST - Master_P'}
        ];
  
  constructor(private titleService: Title, private api: ApiService, private auth: AuthGuard,private sidenavService: SidenavService,
    private common: CommonService, private dialog: MatDialog, private fb: UntypedFormBuilder) {
      this.titleService.setTitle(`Allotment Minimum Value Index`);
     }
     @Input()
     columns: ListColumn[] = [
       { property: "Vessel", visible: true, name: "Vessel" },
       { property: "Nationality", visible: true, name: "Nationality" },
       { property: "Rank", visible: true, name: "Rank" },
       { property: "Value", visible: true, name: "Value" },
       { property: "Action", visible: true, name: "Action" },
     ] as ListColumn[];
 
     get minValueIndexvisibleColumns() {
       return this.columns
         .filter((column) => column.visible)
         .map((column) => column.property);
     }

  ngOnInit(): void {
    this.sidenavService.setCollapsed(true);
    this.allotmentMinValueIndexFormGroup = this.fb.group({
      drpVessel_Name: [""],
      drpNationality: [""],
      drpRank: ["1"]
    });
    this.minValueIndexdataSource = new MatTableDataSource();
  }
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
  ngAfterViewInit() {
    this.minValueIndexdataSource.paginator = this.paginator;
    this.minValueIndexdataSource.sort = this.sort;
  }
  clearFilter() {
    this.loading = true;
    this.allotmentMinValueIndexFormGroup.reset();
    this.allotmentMinValueIndexFormGroup.get("STATUS").patchValue("1");
    this.FetchAllData();
  }
  FetchAllData() {
    throw new Error('Method not implemented.');   
  }
  
    saveNewSetUp(data:object, IsEdit:boolean) {
      const dialogRef = this.dialog.open(CREWACCPBAllotmentsMinValueSetupAddComponent,
        {
          width: "25%",
          maxHeight: "90%",
          disableClose: true,
          data:data
        });
  
        dialogRef.componentInstance.IsEdit= IsEdit;
      dialogRef.afterClosed().subscribe((data:any)=>{
       
      });
      } 
      copySetupValue(data:object, IsEdit:boolean) {
        const dialogRef = this.dialog.open(CREWCopySetupModalComponent,
          {
            width: "25%",
            maxHeight: "90%",
            disableClose: true,
            data:data
          });
    
          dialogRef.componentInstance.IsEdit= IsEdit;
        dialogRef.afterClosed().subscribe((data:any)=>{
         
        });
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
          toggleNationalitySelection() {
            if (this.allNationalitySelected) {
              this.select2.options.forEach((item: MatOption) => item.select());
            } else {
              this.select2.options.forEach((item: MatOption) => item.deselect());
            }
            }
  
            natoptionClick() {
            let newNatStatus = true;
            this.select2.options.forEach((item: MatOption) => {
              if (!item.selected) {
                newNatStatus = false;
              }
            });
            this.allNationalitySelected = newNatStatus;
            }

            toggleRankSelection() {
              if (this.allRankSelected) {
                this.selectRank.options.forEach((item: MatOption) => item.select());
              } else {
                this.selectRank.options.forEach((item: MatOption) => item.deselect());
              }
              }
    
              rankoptionClick() {
              let newNatStatus = true;
              this.selectRank.options.forEach((item: MatOption) => {
                if (!item.selected) {
                  newNatStatus = false;
                }
              });
              this.allRankSelected = newNatStatus;
              }
      }
