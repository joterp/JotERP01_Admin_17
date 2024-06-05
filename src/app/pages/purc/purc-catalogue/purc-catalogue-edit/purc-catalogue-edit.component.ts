import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ReplaySubject } from 'rxjs';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
export interface DialogData {
  
}
@Component({
  selector: 'fury-purc-catalogue-edit',
  templateUrl: './purc-catalogue-edit.component.html',
  styleUrls: ['./purc-catalogue-edit.component.scss']
})
export class PURCCatalogueEditComponent implements OnInit {


  selectedCatalogueModuleData = null;
  selectedSubCatalogueModuleData = null;
  selectednewitemModuleData = null;

  title: string = "";
  type: string;


  EditData: object = null;
  IsEdit: boolean = false;
  showcataloguemodel:boolean=false;
  showsubcataloguemodel:boolean=false;
  showadditemmodel:boolean=false;

  AllData: Array<object> = [];
  CatalogueFormGroup: UntypedFormGroup;
  SubCatalogueFormGroup: UntypedFormGroup;
  AddItemFormGroup: UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  selectedFileName: string = '';
  selectedFileNameCatalogue: string = '';
  loading = false;
  AllDeparment: any = [];
  DepartmentList: Array<object> = [];
  public filtered_Department: ReplaySubject<Array<object>> = new ReplaySubject<
  Array<object>
>(1);
isChecked: boolean = false;  // Boolean flag
  checkedvalue: string;

  constructor(private dialogRef: MatDialogRef<PURCCatalogueEditComponent>,private fb: UntypedFormBuilder,private dialog: MatDialog, private api: ApiService, private common: CommonService,  
    @Inject (MAT_DIALOG_DATA) public data:any ) {

      console.log(data,"subcatdata");

      this.CatalogueFormGroup = this.fb.group({
        txtCode:["",Validators.required],
        txtSets_Installed:[""],
        txtName:["",Validators.required],
        txtModel:[""],
        txtParticulars:[""],
        txtBearing_Coupling_End:[""],
        drpMakers:[""],
        txtBearing_free_End:[""],
        drpDepartment:["",Validators.required],
        txtMotor_Rating:[""],
        txtShipboard_PIC:[""],
        txtAccount_Code:[""],
        chkGeneral_Subcatalogue:[true],
        chkCritical_Machinery:[false],
        chkMachinery_InfreqUsed:[false]

      });

      this.SubCatalogueFormGroup = this.fb.group({
        txtCode:["",Validators.required],
        txtName:["",Validators.required],
        txtParticulars:[""]
      });

      this.AddItemFormGroup = this.fb.group({
        txtPart_Number:["",Validators.required],
        txtItem_Name:["",Validators.required],
        txtDescription:[""],
        drpUnit:["",Validators.required],
        drpItem_Category:[""],
        chkcritical:[this.isChecked== false?"0":"1"]
      });
     }

     doSomething(){
      if(this.isChecked==true){
        this.checkedvalue = "1";
      }
      else{
        this.checkedvalue = "0"
      }
    }

  ngOnInit(): void {

    this.FetchAllDepartment();
    this.loadSelectableData();
    if(this.type == "catalogue"){
      this.CatalogueFormGroup.patchValue(this.data)
      this.showcataloguemodel = true;
      this.showsubcataloguemodel = false;
      this.showadditemmodel = false
    }else if(this.type == "subcatalogue"){
      this.SubCatalogueFormGroup.patchValue(this.data)

      this.showsubcataloguemodel = true;
      this.showcataloguemodel = false;
      this.showadditemmodel = false
    }else if(this.type == "additem"){
      this.AddItemFormGroup.patchValue(this.data)

      this.showadditemmodel = true;
      this.showsubcataloguemodel = false;
      this.showcataloguemodel = false
    }


  }

  SaveCatalogueForm(addNew = false){
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.CatalogueFormGroup.value) {
      data[elem] = this.CatalogueFormGroup.value[elem];
    }
   
     this.submit = false;
    this.SaveCatalogue(data, this.IsEdit ? "catalogue"+"/" +this.data.id:"catalogue", addNew);
  }

  SaveCatalogue(data: object, path: string, addNew){
    if(this.IsEdit){
      this.api.PutDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "Catalogue updated successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.CatalogueFormGroup.reset();
            } else {
              
              this.dialogRef.close(true);
            }
       })
    }
   else{
      this.api.PostDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "Catalogue saved successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.CatalogueFormGroup.reset();
            } else {
              this.dialogRef.close(true);
            }
       })
    } 
  }


  SaveSubCatalogueForm(addNew = false){
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.SubCatalogueFormGroup.value) {
      data[elem] = this.SubCatalogueFormGroup.value[elem];
    }
   
     this.submit = false;
    this.SaveSubCatalogue(data, this.IsEdit ? "subcatalogue"+"/" +this.data.id:"subcatalogue", addNew);
  }

  SaveSubCatalogue(data: object, path: string, addNew){
    if(this.IsEdit){
      this.api.PutDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "SubCatalogue updated successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.SubCatalogueFormGroup.reset();
            } else {
              
              this.dialogRef.close(true);
            }
       })
    }
   else{
      this.api.PostDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "SubCatalogue saved successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.SubCatalogueFormGroup.reset();
            } else {
              this.dialogRef.close(true);
            }
       })
    } 
  }


  SaveAddItemForm(addNew = false){
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.AddItemFormGroup.value) {
      data[elem] = this.AddItemFormGroup.value[elem];
    }
   
     this.submit = false;
    this.SaveAddItem(data, this.IsEdit ? "addnewitem"+"/" +this.data.id:"addnewitem", addNew);
  }

  SaveAddItem(data: object, path: string, addNew){
    if(this.IsEdit){
      this.api.PutDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "New Item updated successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.AddItemFormGroup.reset();
            } else {
              
              this.dialogRef.close(true);
            }
       })
    }else{
      this.api.PostDataService1(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "New Item saved successfully",
              "notify-success",
              3000
            );
            if (addNew) {
              this.AddItemFormGroup.reset();
            } else {
              this.dialogRef.close(true);
            }
       })
    }
  
   
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
  onFileSelectedcatalogue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFileNameCatalogue = inputElement.files[0].name;
    } else {
      this.selectedFileNameCatalogue = '';
    }
  }
  removeUploadedFilecatalogue(): void {
    this.selectedFileNameCatalogue = null; // Reset the selectedFileNameCatalogue
  }
  
  FetchAllSubCatalogue(url = null){
    this.api.GetDataService1(url).subscribe((res)=>{
      console.log(res,"getresponse")
    })
  }


  AddFormData(data: object, modeltitle: string, modeltype: string) {
  
      const dialogRef = this.dialog.open(PURCCatalogueEditModelComponent, {
        width: "40%",
        maxHeight: "80%",
        disableClose: true,
      });
      // dialogRef.componentInstance.EditData = data;
      // dialogRef.componentInstance.IsEdit = IsEdit;
      dialogRef.componentInstance.modeltitle = modeltitle;
      dialogRef.componentInstance.modeltype = modeltype;



      dialogRef.afterClosed().subscribe((res: any) => {
      this.FetchAllDepartment();
      });
    }
  
    FetchAllDepartment(url = 'department'){
      this.api.GetDataService1(url).subscribe((res:any)=>{
        console.log(res,"resdepartment")
        this.AllDeparment = res;
        console.log(this.AllDeparment,"AllDeparment")
      })
    }

    loadSelectableData(){
      const payload = {
        module: ["department"],
      };
      this.api.PostDataService("purc/bulk/get", payload).subscribe((res)=>{
        if (res["Status"] === 200) {
        
          this.DepartmentList = res["Data"].department;
          this.filtered_Department.next(this.DepartmentList);
    
          this.loading = false;
        } else {
          this.common.ShowMessage(res["message"], "notify-error", 6000);
        }
      },
      (error) => {
        this.common.ShowMessage(error["message"], "notify-error", 6000);
      }
      );
     
    }


  CloseModal() {
    this.dialogRef.close(true);
  }
}





@Component({
  selector: 'fury-purc-catalogue-edit-model',
  templateUrl: './purc-catalogue-edit-model.component.html',
  styleUrls: ['./purc-catalogue-edit.component.scss']
})
export class PURCCatalogueEditModelComponent implements OnInit {

  DepartmentFormGroup:UntypedFormGroup;
  ErrorMessage: string = "";
  submit: boolean = false;
  showdepartment:boolean=false;
  showvessellocation:boolean=false;
  TemplateType = [
    {value:'temp-0', viewValue:'Management'},
    {value:'temp-1', viewValue:'Repairs'},
    {value:'temp-2', viewValue:'Services Rendered'},
    {value:'temp-3', viewValue:'Spare Parts'},
    {value:'temp-4', viewValue:'Stores'}
  ]
  constructor(public dialogRef:MatDialogRef<PURCCatalogueEditModelComponent>,private fb:UntypedFormBuilder, private api: ApiService, private common: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }
    modeltitle: string = "";
    modeltype: string;
    searchString;
    TemplateTypeList: Array<object> = [];
 
public filtered_Template_type: ReplaySubject<Array<object>> = new ReplaySubject<
Array<object>
>(1);
VesseLocationList: Array<object> = [];
  DepartmentList: Array<object> = [];
  
  public filtered_Vessel_Location: ReplaySubject<Array<object>> = new ReplaySubject<
    Array<object>
  >(1);
  public filtered_Department: ReplaySubject<Array<object>> = new ReplaySubject<
  Array<object>
>(1);

loading = false;
  ngOnInit(): void {
    this.getSysTemParameter();
    this.loadSelectableData();

    if(this.modeltype == "department"){
      this.showdepartment = true;
      this.showvessellocation = false;
     
    }
    
    else if(this.modeltype == "vessellocation"){
      this.showdepartment = false;
      this.showvessellocation = true;
    }

    this.DepartmentFormGroup = this.fb.group({
      txtDept_Name:["", Validators.required],
      txtDept_Short_Code:["", Validators.required],
      drpTemplate_Type:["", Validators.required]
    })

  }
  SaveDepartmentForm(){
    this.ErrorMessage = "";
    if (this.submit) {
      return;
    }
    this.submit = true;
    var data: object = {};
    for (const elem in this.DepartmentFormGroup.value) {
      data[elem] = this.DepartmentFormGroup.value[elem];
    }
   
     this.submit = false;
    this.SaveDepartment(data,  "purc/department/insert");
  }

  SaveDepartment(data: object, path: string){
  
      this.api.PostDataService(path, data).subscribe((res: object)=>{
        console.log(res,"respost")
        this.submit = false;
            this.common.ShowMessage(
              "Department saved successfully",
              "notify-success",
              3000
            );
              
              this.dialogRef.close(true);
             
       })
      
  }
  getSysTemParameter() {
    let sysData = JSON.parse(localStorage.getItem("systemParamsData"));
    console.log(sysData,"sysData")
    if (sysData) {
      this.TemplateTypeList = sysData.filter(
        (item) =>
          item["Parent_Type"] == "85"
      );
      // this.typesList = sysData.filter(
      //   (item) =>
      //     item["PARENT_GUID"] == "0AWw8rhJF02eca503-4e2f-4182-a231-b4a4e85416a5"
      // );
     
      this.filtered_Template_type.next(this.TemplateTypeList);
      console.log(this.filtered_Template_type,"this.filtered_Template_type")
      // this.filtered_recievedFrom.next(this.recievedFromList);
    
    }

  }
  loadSelectableData(){
    const payload = {
      module: ["vessel_location","department"],
    };
    this.api.PostDataService("purc/bulk/get", payload).subscribe((res)=>{
      if (res["Status"] === 200) {
        this.VesseLocationList = res["Data"].vessel_location;
        this.filtered_Vessel_Location.next(this.VesseLocationList);

        this.DepartmentList = res["Data"].department;
        this.filtered_Department.next(this.DepartmentList);
  
        this.loading = false;
      } else {
        this.common.ShowMessage(res["message"], "notify-error", 6000);
      }
    },
    (error) => {
      this.common.ShowMessage(error["message"], "notify-error", 6000);
    }
    );
    this.getSysTemParameter();
   
  }
  CloseModal() {
    this.dialogRef.close(true);
  }

}

