import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';

import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PURCCatalogueEditComponent } from '../../purc-catalogue/purc-catalogue-edit/purc-catalogue-edit.component';

@Component({
  selector: 'fury-purc-catalogue',
  templateUrl: './purc-catalogue.component.html',
  styleUrls: ['./purc-catalogue.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PURCCatalogueComponent implements OnInit {

  routeTitle:string="";



  @Input()
  columns: ListColumn[] = [
    { property: "name", visible: true, name: "Name" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  cataloguecolumns: ListColumn[] = [
    { property: "Vessel", visible: true, name: "Vessel" },
    { property: "Code", visible: true, name: "Code" },
    { property: "Catalogue", visible: true, name: "Catalogue" },
    { property: "Vessel_Loc", visible: true, name: "Vessel Loc" },
    { property: "Account_Code", visible: true, name: "Account Code" },
    { property: "Critical", visible: true, name: "Critical" },
    //  { property: "Active_Status", visible: true, name: "Status" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  subcataloguecolumns: ListColumn[] = [
    { property: "Code", visible: true, name: "Code" },
    { property: "SubCatalogue", visible: true, name: "Sub Catalogue" },
    { property: "Account_Code", visible: true, name: "Account Code" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  newitemcolumns: ListColumn[] = [
    { property: "Drawing_No", visible: true, name: "Drawing No" },
    { property: "Part_No", visible: true, name: "Part No" },
    { property: "Item_Description", visible: true, name: "Item Description" },
    { property: "Unit", visible: true, name: "Unit" },
    { property: "Critical", visible: true, name: "Critical" },
    //  { property: "Active_Status", visible: true, name: "Status" },
    { property: "Action", visible: true, name: "Action" },
  ] as ListColumn[];

  pageSize = 10;
  dataSource: any;
  displayedColumns: string[] = ["short_name", "name", "remarks", "Action"];
  dataSourcecatalogue: MatTableDataSource<any> | null;
  dataSourcesubcatalogue: MatTableDataSource<any>;
  dataSourcenewitem: MatTableDataSource<any> | null;
  moduleDataSource: any;
  parentDataSource: any;
  childDataSource: any;
  grandDataSource: any;
  greatDataSource: any;

  moduleDataSource2: Array<object> = [];
  parentDataSource2: Array<object> = [];
  childDataSource2: Array<object> = [];
  grandDataSource2: Array<object> = [];
  greatDataSource2: Array<object> = [];

  AllData: Array<object> = [];

  moduleDataType: string = "Activated";
  parentDataType: string = "Activated";
  childDataType: string = "Activated";
  grandDataType: string = "Activated";
  greatDataType: string = "Activated";

  moduleSearch: string = "";
  parentSearch: string = "";
  childSearch: string = "";
  grandSearch: string = "";
  greatSearch: string = "";

  AllCatalogue:any = [];
  AllSubCatalogueData: any = [];
  AllItemData: any = [];

  
  @ViewChild("TABLE1") table1: ElementRef;
  @ViewChild("TABLE2") table2: ElementRef;
  @ViewChild("TABLE3") table3: ElementRef;
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild("CataloguePaginator", { static: true })paginator1: MatPaginator;
  @ViewChild("SubCataloguePaginator", { static: true }) paginator2: MatPaginator;
  @ViewChild("AddNewItemPaginator", { static: true }) paginator3: MatPaginator;



  selectedCatalogueModuleData = null;
  selectedSubCatalogueModuleData = null;
  selectednewitemModuleData = null;
  checkedmarked: string;

  TemplateType = [
    {value:'temp-0', viewValue:'Management'},
    {value:'temp-1', viewValue:'Repairs'},
    {value:'temp-2', viewValue:'Services Rendered'},
    {value:'temp-3', viewValue:'Spare Parts'},
    {value:'temp-4', viewValue:'Stores'}
  ]
  CatalogueTable:boolean=true;
  SubCatalogueTable:boolean=false;
  AddNewTemTable:boolean=false;
  CatalogueFilterForm:UntypedFormGroup

  constructor(private dialog: MatDialog,
    private api: ApiService,
    private common: CommonService,
    private sidenavService: SidenavService,
    private titleService: Title,
    private auth: AuthGuard,
    private fb:UntypedFormBuilder 
    ) {
    this.titleService.setTitle(`Catalogues`);
   }

   get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visiblecataloguecolumnsColumns() {
    return this.cataloguecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visiblesubcataloguecolumnsColumns() {
    return this.subcataloguecolumns
      .filter((column) => column.visible)
      .map((column) => column.property);

      
  }
  get visiblenewitemcolumnsColumns() {
    return this.newitemcolumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngOnInit(): void {
    this.FetchAllCatalogue();
    this.FetchAllSubCatalogue();
    this.FetchAllItem();

    this.routeTitle = this.titleService.getTitle();
    this.dataSourcecatalogue = new MatTableDataSource();
    this.dataSourcesubcatalogue = new MatTableDataSource();
    this.dataSourcenewitem = new MatTableDataSource();
    sessionStorage.setItem("section", "module");
    
   this.CatalogueFilterForm = this.fb.group({
    drpFleet:[""],
    drpVessel:[""],
    drpTemplate_Type:[""],
    drpDepartment:[""],
    drpVessel_Location:[""],
    drpShow:["1"]
   });
    
  }

  ngAfterViewInit() {
 
    this.dataSourcecatalogue.paginator = this.paginator1;
    this.dataSourcesubcatalogue.paginator = this.paginator2;
    this.dataSourcenewitem.paginator = this.paginator3;
  }
FetchAllCatalogue(url = 'catalogue'){
  this.api.GetDataService1(url).subscribe((res:any)=>{
   this.AllCatalogue = res;
   this.dataSourcecatalogue.data = this.AllCatalogue;
  })
}
  FetchAllSubCatalogue(url = 'subcatalogue'){
    this.api.GetDataService1(url).subscribe((res:any)=>{
      
      this.AllSubCatalogueData = res;
      
      this.dataSourcesubcatalogue.data = this.AllSubCatalogueData;
      
    })
  }

  FetchAllItem(url = 'addnewitem'){
    this.api.GetDataService1(url).subscribe((res:any)=>{
      
      this.AllItemData = res;

      this.dataSourcenewitem.data = this.AllItemData;
      console.log(this.dataSourcenewitem.data,"this.dataSourcenewitem.data")
    })
  }

  deleteCatalogue(id:number){
    this.api.DeleteDataService1('catalogue',id).subscribe((res)=> {
      this.common.ShowMessage(
        "Catalogue deleted successfully",
        "notify-success",
        3000
      );
      this.FetchAllCatalogue();
    },
    (error) => {
      console.error('Error during delete:', error);
    })
  }

  deleteSubCatalogue(id:number) {
    this.api.DeleteDataService1('subcatalogue',id).subscribe(
      (response) => {
        this.common.ShowMessage(
          "SubCatalogue deleted successfully",
          "notify-success",
          3000
        );
        this.FetchAllSubCatalogue();
      },
      (error) => {
        console.error('Error during delete:', error);
      }
    );
  }
  deleteAddItem(id:number) {
    this.api.DeleteDataService1('addnewitem',id).subscribe(
      (response) => { 
        this.common.ShowMessage(
          "SubCatalogue deleted successfully",
          "notify-success",
          3000
        );
        this.FetchAllItem();
      },
      (error) => {
        console.error('Error during delete:', error);
      }
    );
  }


  // ngOnDestroy() {
  //   this.sidenavService.setCollapsed(false);
  // }

  selectSP(data: any, type: string) {
    console.log(data, "data");
    sessionStorage.setItem("section", type);
  
    if (type === "catalogue") {
      this.CatalogueTable = true;
      this.SubCatalogueTable = true;
  
      if (this.AddNewTemTable) {
        // If AddNewTemTable was previously true, keep it true
        this.AddNewTemTable = true;
      } else {
        // If AddNewTemTable was not previously true, set it to false
        this.AddNewTemTable = false;
      }
    } else if (type === "subcatalogue") {
      this.CatalogueTable = true;
      this.SubCatalogueTable = true;
      this.AddNewTemTable = true;
    } else if (type === "additem") {
      this.CatalogueTable = true;
      this.SubCatalogueTable = true;
      this.AddNewTemTable = true;
    }
  }
  
  SaveData(data: object, IsEdit: boolean = false, title: string, type: string) {
    let section = sessionStorage.getItem("section");
  
    if (
      this.selectedCatalogueModuleData &&
      Object.keys(this.selectedCatalogueModuleData).length == 0
    )
      this.selectedCatalogueModuleData = null;
    if (
      this.selectedSubCatalogueModuleData &&
      Object.keys(this.selectedSubCatalogueModuleData).length == 0
    )
      this.selectedSubCatalogueModuleData = null;
    if (
      this.selectednewitemModuleData &&
      Object.keys(this.selectednewitemModuleData).length == 0
    )
      this.selectednewitemModuleData = null;
 
    if (
      (section == "module" && ["child", "grand", "great"].includes(type)) ||
      (type == "parent" && !this.selectedCatalogueModuleData)
    ) {
      this.common.ShowMessage(
        "Invalid Section selection",
        "notify-error",
        6000
      );
    } else if (
      (section == "parent" && ["grand", "great"].includes(type)) ||
      (type == "parent" && !this.selectedSubCatalogueModuleData && !this.selectedCatalogueModuleData)
    ) {
      this.common.ShowMessage(
        "Invalid Section selection",
        "notify-error",
        6000
      );
    } else if (
      (section == "child" && ["great"].includes(type)) ||
      (type == "child" &&
        (!this.selectedSubCatalogueModuleData || !this.selectedCatalogueModuleData))
    ) {
      this.common.ShowMessage(
        "Invalid Section selection",
        "notify-error",
        6000
      );
    } else if (
      section == "grand" &&
      type == "grand" &&
    
      this.selectednewitemModuleData &&
      this.selectedSubCatalogueModuleData &&
      this.selectedCatalogueModuleData
    ) {
      this.common.ShowMessage(
        "Invalid Section selection",
        "notify-error",
        6000
      );
    } else {
      console.log("Update modul data", data);
      if (type == "catalogue") {
        this.selectedCatalogueModuleData = data;
        this.selectedSubCatalogueModuleData = null;
        this.selectednewitemModuleData = null;
      
      } else if (type == "subcatalogue") {
        this.selectedSubCatalogueModuleData = data;
        this.selectedCatalogueModuleData = null;
        this.selectednewitemModuleData = null;
      
      } else if (type == "additem") {
        this.selectednewitemModuleData = data;
        this.selectedCatalogueModuleData = null;
        this.selectednewitemModuleData = null;
      } 
      if (!this.CatalogueFilterForm.get('drpTemplate_Type').value && !IsEdit) {
        alert("Please select Template type to add catalogue")
        
        return; // Exit the function if Template Type is not selected
      }

      const dialogRef = this.dialog.open(PURCCatalogueEditComponent, {
        width: "50%",
        maxHeight: "80%",
        disableClose: true,
        data:data
      });
      dialogRef.componentInstance.EditData = data;
      dialogRef.componentInstance.IsEdit = IsEdit;
      dialogRef.componentInstance.title = title;
      dialogRef.componentInstance.type = type;
      dialogRef.componentInstance.AllData = this.AllData;
      dialogRef.componentInstance.selectedCatalogueModuleData = this.selectedCatalogueModuleData;
      dialogRef.componentInstance.selectedSubCatalogueModuleData = this.selectedSubCatalogueModuleData;
      dialogRef.componentInstance.selectednewitemModuleData = this.selectednewitemModuleData;


      dialogRef.afterClosed().subscribe((res: any) => {
        if (res) {
          this.FetchAllCatalogue();
          this.FetchAllSubCatalogue();
          this.FetchAllItem();
          console.log("afterClosed", res);
          if (IsEdit) {
            res.selected = data["selected"];
            this.AllData = this.AllData.map((a: any, index: number) => {
              if (a["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                a = res;
              }
              return a;
            });
            if (type == "module") {
              var dt = JSON.parse(JSON.stringify(this.moduleDataSource.data));
              dt.forEach((d: any, index: number) => {
                if (d["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                  dt[index] = res;
                }
              });
              this.moduleDataSource.data = dt;
            }
            if (type == "parent") {
              var dt = JSON.parse(JSON.stringify(this.parentDataSource.data));
              dt.forEach((d: any, index: number) => {
                if (d["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                  dt[index] = res;
                }
              });
              this.parentDataSource.data = dt;
            }
            if (type == "child") {
              var dt = JSON.parse(JSON.stringify(this.childDataSource.data));
              dt.forEach((d: any, index: number) => {
                if (d["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                  dt[index] = res;
                }
              });
              this.childDataSource.data = dt;
            }
            if (type == "grand") {
              var dt = JSON.parse(JSON.stringify(this.grandDataSource.data));
              dt.forEach((d: any, index: number) => {
                if (d["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                  dt[index] = res;
                }
              });
              this.grandDataSource.data = dt;
            }
            if (type == "great") {
              var dt = JSON.parse(JSON.stringify(this.greatDataSource.data));
              dt.forEach((d: any, index: number) => {
                if (d["PARAMETER_GUID"] == res["PARAMETER_GUID"]) {
                  dt[index] = res;
                }
              });
              this.greatDataSource.data = dt;
            }
          } else {
            this.AllData.push(res);
            if (type == "module") {
              var dt = JSON.parse(JSON.stringify(this.moduleDataSource.data));
              dt.push(res);
              this.moduleDataSource.data = dt;
            }
            if (type == "parent") {
              var dt = JSON.parse(JSON.stringify(this.parentDataSource.data));
              dt.push(res);
              this.parentDataSource.data = dt;
            }
            if (type == "child") {
              var dt = JSON.parse(JSON.stringify(this.childDataSource.data));
              dt.push(res);
              this.childDataSource.data = dt;
            }
            if (type == "grand") {
              var dt = JSON.parse(JSON.stringify(this.grandDataSource.data));
              dt.push(res);
              this.grandDataSource.data = dt;
            }
            if (type == "great") {
              var dt = JSON.parse(JSON.stringify(this.greatDataSource.data));
              dt.push(res);
              this.greatDataSource.data = dt;
            }
          }
        }
      });
    }
  }
  clearFilter() {
    this.CatalogueFilterForm.reset();

  }
}
