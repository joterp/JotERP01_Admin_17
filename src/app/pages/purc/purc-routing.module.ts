import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PURCCatalogueComponent } from './purc-catalogue/purc-catalogue.component';
// import { PURCUnitComponent } from './purc-unit/purc-unit.component';
import { PURCApproveSupplierComponent } from './purc-approve-supplier/purc-approve-supplier.component';
import { PURCApproveSupplierEditComponent } from './purc-approve-supplier/purc-approve-supplier-edit/purc-approve-supplier-edit.component';
import { PURCApproveSupplierShortEditComponent } from './purc-approve-supplier/purc-approve-supplier-short-edit/purc-approve-supplier-short-edit.component';
import { PURCDirectPurchaseOrderComponent } from './purc-direct-purchase-order/purc-direct-purchase-order.component';
import { PURCApprovalPortalComponent } from './purc-approval-portal/purc-approval-portal.component';
import { PURCAccountPayableComponent } from './purc-account-payable/purc-account-payable.component';
import { PURCNewIndexComponent } from './purc-new-index/purc-new-index.component';
import { PURCQuickRequisitionEditComponent } from './purc-new-index/purc-quick-requisition-edit/purc-quick-requisition-edit.component';
import { PURCPurchaseRemarkIndexComponent } from './purc-purchase-remark-index/purc-purchase-remark-index.component';
import { PURCContractModuleComponent } from './purc-contract-module/purc-contract-module.component';
import { PURCUpdateInventoryComponent } from './purc-update-inventory/purc-update-inventory.component';
import { PURCShipManagerCommissionComponent } from './purc-ship-manager-commission/purc-ship-manager-commission.component';
import { PURCContractModuleEditComponent } from './purc-contract-module/purc-contract-module-edit/purc-contract-module-edit.component';
import { PurcLibCatalougeExcelImportComponent } from './Library/purc-lib-catalouge-excel-import/purc-lib-catalouge-excel-import.component';
import { PURCSparePartsExcelImportComponent } from './Library/purc-spare-parts-excel-import/purc-spare-parts-excel-import.component';
import { PURCNewRFQTERMComponent } from './Library/purc-new-rfq-term/purc-new-rfq-term.component';
import { PURCPOTermsComponent } from './Library/purc-poterms/purc-poterms.component';
import { PURCLIBASLEXCELIMPORTComponent } from './Library/purc-lib-asl-excel-import/purc-lib-asl-excel-import.component';
import { PURCApproveSupplierQuestionComponent } from './Library/purc-approve-supplier-question/purc-approve-supplier-question.component';
import { PURCLIBSupplierDocumentsComponent } from './Library/purc-lib-supplier-documents/purc-lib-supplier-documents.component';
import { PURCASLSuppTypeDeptMappingComponent } from './Library/purc-asl-supp-type-dept-mapping/purc-asl-supp-type-dept-mapping.component';
import { PURCTacitRelationComponent } from './Library/purc-tacit-relation/purc-tacit-relation.component';
import { PURCLocationComponent } from './Library/purc-location/purc-location.component';
import { PURCUnitComponent } from './Library/purc-unit/purc-unit.component';
import { PURCAddITEMTEMPLATEComponent } from './Library/purc-add-item-template/purc-add-item-template.component';
// import { PURCUnitEditComponent } from './purc-unit/purc-unit-edit/purc-unit-edit.component';

const routes: Routes = [
  {  
  path: 'Catalogues', component: PURCCatalogueComponent 
},
{
  path:'Index', component:PURCNewIndexComponent
},
{  
   path: 'PURC_ApproveSupplier', component: PURCApproveSupplierComponent ,
},
{  
  path: 'PURC_ApproveSupplierView', component: PURCApproveSupplierEditComponent 
},
{  
  path: 'PURC_Add_Supplier_Details_Short', 
  component: PURCApproveSupplierShortEditComponent,
  data: { title: "Supplier Details Form Short"}
},
{
  path: 'PURC_Approval_Portal', component: PURCApprovalPortalComponent
},
{
  path: 'PURC_DirectPurchaseOrder', component:PURCDirectPurchaseOrderComponent
},
{
  path: 'PURC_Account_Payable', component: PURCAccountPayableComponent
},
{
  path:'PURC_QuickRequisition', component: PURCQuickRequisitionEditComponent
},
{
   path:'PURC_Purchase_Remark_Index', component:PURCPurchaseRemarkIndexComponent
},
{
   path:'PURC_Contract_Module', component:PURCContractModuleComponent
},
{
  path:'PURC_Contract_Module_Details', component:PURCContractModuleEditComponent
},
{
  path:'PURC_Update_Inventory', component:PURCUpdateInventoryComponent
},
{
  path:'PURC_ShipManager_Commission', component:PURCShipManagerCommissionComponent
},
{  
  path: 'Library/PURC_UnitPacking', component:PURCUnitComponent
},



{  
  path: 'Library/Purc_Lib_Catalouge_Excel_Import', component: PurcLibCatalougeExcelImportComponent
},
{  
  path: 'Library/PURC_Spare_Parts_Excel_Import', component: PURCSparePartsExcelImportComponent
},
{  
  path: 'Library/PURC_New_RFQ_TERM', component: PURCNewRFQTERMComponent
},
{  
  path: 'Library/PURC_POTerms', component: PURCPOTermsComponent
},
{  
  path: 'Library/PURC_LIB_ASL_EXCEL_IMPORT', component: PURCLIBASLEXCELIMPORTComponent
},

{  
  path: 'Library/PURC_ApproveSupplier_Question', component: PURCApproveSupplierQuestionComponent
},
{  
  path: 'Library/PURC_Add_ITEM_TEMPLATE', component: PURCAddITEMTEMPLATEComponent
},


{  
  path: 'Library/PURC_LIB_Supplier_Documents', component: PURCLIBSupplierDocumentsComponent
},
{  
  path: 'Library/PURC_ASL_Supp_Type_Dept_Mapping', component: PURCASLSuppTypeDeptMappingComponent
},
{  
  path: 'Library/PURC_Tacit_Relation', component: PURCTacitRelationComponent
},
{  
  path: 'Library/PURC_Location', component: PURCLocationComponent
},
{  
  path: 'Library/PURC_Location', component: PURCLocationComponent
},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PURCRoutingModule { }
