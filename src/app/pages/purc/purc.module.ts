import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PURCRoutingModule } from './purc-routing.module';

import { PURCCatalogueComponent } from './purc-catalogue/purc-catalogue.component';

import { MaterialModule } from '../../../@fury/shared/material-components.module';
import { FurySharedModule } from '../../../@fury/fury-shared.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ReactiveFormsModule } from '@angular/forms';
import { PURCCatalogueEditComponent } from './purc-catalogue/purc-catalogue-edit/purc-catalogue-edit.component';

import { PURCCatalogueEditModelComponent } from './purc-catalogue/purc-catalogue-edit/purc-catalogue-edit.component';
import { PURCApproveSupplierComponent } from './purc-approve-supplier/purc-approve-supplier.component';
import { PURCApproveSupplierEditComponent } from './purc-approve-supplier/purc-approve-supplier-edit/purc-approve-supplier-edit.component';
import { PURCApproveSupplierShortEditComponent } from './purc-approve-supplier/purc-approve-supplier-short-edit/purc-approve-supplier-short-edit.component';
import { PURCApproveSupplierAddContactModalComponent } from './purc-approve-supplier/purc-approve-supplier-add-contact-modal/purc-approve-supplier-add-contact-modal.component';
import { PURCInviteSupplierComponent } from './purc-approve-supplier/purc-invite-supplier/purc-invite-supplier.component';
import { QuillModule } from "ngx-quill";
import { PURCDirectPurchaseOrderComponent } from './purc-direct-purchase-order/purc-direct-purchase-order.component';
import { PURCPurchaseOrderListModalComponent } from './purc-direct-purchase-order/purc-purchase-order-list-model/purc-purchase-order-list-modal.component';
import { PURCPurchaseOrderSummaryModalComponent } from './purc-direct-purchase-order/purc-purchase-order-summary-modal/purc-purchase-order-summary-modal.component';
import { PURCApprovalPortalComponent } from './purc-approval-portal/purc-approval-portal.component';
import { PURCAccountPayableComponent } from './purc-account-payable/purc-account-payable.component';
import { PURCAccountPayableGenerateLinkModalComponent } from './purc-account-payable/purc-account-payable-generate-link-modal/purc-account-payable-generate-link-modal.component';
import { PURCNewIndexComponent } from './purc-new-index/purc-new-index.component';
import { PURCNewRequisitionEditComponent } from './purc-new-index/purc-new-requisition-edit/purc-new-requisition-edit.component';
import { PURCQuickRequisitionEditComponent } from './purc-new-index/purc-quick-requisition-edit/purc-quick-requisition-edit.component';
import { PURCPurchaseRemarkIndexComponent } from './purc-purchase-remark-index/purc-purchase-remark-index.component';
import { PURCRequisitionModalComponent } from './purc-purchase-remark-index/purc-requisition-modal/purc-requisition-modal.component';
import { PURCRequisitionItemDescModalComponent } from './purc-purchase-remark-index/purc-requisition-item-desc-modal/purc-requisition-item-desc-modal.component';
import { PURCContractModuleComponent } from './purc-contract-module/purc-contract-module.component';
import { PURCUpdateInventoryComponent } from './purc-update-inventory/purc-update-inventory.component';
import { PURCShipManagerCommissionComponent } from './purc-ship-manager-commission/purc-ship-manager-commission.component';
import { PURCAddShipManagerCommissionComponent } from './purc-ship-manager-commission/purc-add-ship-manager-commission/purc-add-ship-manager-commission.component';
import { PURCInvoiceModalComponent } from './purc-ship-manager-commission/purc-invoice-modal/purc-invoice-modal.component';
import { PURCContractModuleEditComponent } from './purc-contract-module/purc-contract-module-edit/purc-contract-module-edit.component';
import { PURCSparePartsExcelImportComponent } from './Library/purc-spare-parts-excel-import/purc-spare-parts-excel-import.component';
import { PURCUnitComponent } from './Library/purc-unit/purc-unit.component';
import { PURCUnitEditComponent } from './Library/purc-unit/purc-unit-edit/purc-unit-edit.component';
import { PURCDepartmentComponent } from './Library/purc-department/purc-department.component';
import { PURCAddITEMTEMPLATEComponent } from './Library/purc-add-item-template/purc-add-item-template.component';
import { PURCAddNewTemplateModalComponent } from './Library/purc-add-item-template/purc-add-new-template-modal/purc-add-new-template-modal.component';
import { PURCAddNewItemModalComponent } from './Library/purc-add-item-template/purc-add-new-item-modal/purc-add-new-item-modal.component';
import { PURCAddNewCatalogueModalComponent } from './Library/purc-add-item-template/purc-add-new-catalogue-modal/purc-add-new-catalogue-modal.component';
import { PurcLibCatalougeExcelImportComponent } from './Library/purc-lib-catalouge-excel-import/purc-lib-catalouge-excel-import.component';
import { PURCLibCatalogueExcelImportModalComponent } from './Library/purc-lib-catalouge-excel-import/purc-lib-catalogue-excel-import-modal/purc-lib-catalogue-excel-import-modal.component';
import { PURCNewRFQTERMComponent } from './Library/purc-new-rfq-term/purc-new-rfq-term.component';
import { PURCNewRFQTERMADDModalComponent } from './Library/purc-new-rfq-term/purc-new-rfq-term-add-modal/purc-new-rfq-term-add-modal.component';
import { PURCPOTermsComponent } from './Library/purc-poterms/purc-poterms.component';
import { PURCPOTermsModalComponent } from './Library/purc-poterms/purc-poterms-modal/purc-poterms-modal.component';
import { PURCLIBSupplierDocumentsComponent } from './Library/purc-lib-supplier-documents/purc-lib-supplier-documents.component';
import { PURCLIBASLEXCELIMPORTComponent } from './Library/purc-lib-asl-excel-import/purc-lib-asl-excel-import.component';
import { PURCApproveSupplierQuestionComponent } from './Library/purc-approve-supplier-question/purc-approve-supplier-question.component';
import { PURCApproveSupplierQuestionAddNewQueComponent } from './Library/purc-approve-supplier-question/purc-approve-supplier-question-add-new-que/purc-approve-supplier-question-add-new-que.component';
import { PURCLIBSupplierDocumentsEditComponent } from './Library/purc-lib-supplier-documents/purc-lib-supplier-documents-edit/purc-lib-supplier-documents-edit.component';
import { PURCApproveSupplierQuestionCopyQueModalComponent } from './Library/purc-approve-supplier-question/purc-approve-supplier-question-copy-que-modal/purc-approve-supplier-question-copy-que-modal.component';
import { PURCASLSuppTypeDeptMappingComponent } from './Library/purc-asl-supp-type-dept-mapping/purc-asl-supp-type-dept-mapping.component';
import { PURCTacitRelationComponent } from './Library/purc-tacit-relation/purc-tacit-relation.component';
import { PURCASLSuppTypeDeptMappingEditComponent } from './Library/purc-asl-supp-type-dept-mapping/purc-asl-supp-type-dept-mapping-edit/purc-asl-supp-type-dept-mapping-edit.component';
import { PURCTacitRelationEditComponent } from './Library/purc-tacit-relation/purc-tacit-relation-edit/purc-tacit-relation-edit.component';
import { PURCLocationComponent } from './Library/purc-location/purc-location.component';
import { PURCLocationEditComponent } from './Library/purc-location/purc-location-edit/purc-location-edit.component';
import { PurcSparePartsExcelImportAlertComponent } from './Library/purc-spare-parts-excel-import/purc-spare-parts-excel-import-alert/purc-spare-parts-excel-import-alert.component';
import { PurcLibAslExcelImportAlertComponent } from './Library/purc-lib-asl-excel-import/purc-lib-asl-excel-import-alert/purc-lib-asl-excel-import-alert.component';
import { PurcLocationSFIListComponent } from './Library/purc-location/purc-location-sfi-list/purc-location-sfi-list.component';
import { PURCDepartmentAddComponent } from './Library/purc-department/purc-department-add/purc-department-add.component';


@NgModule({
    declarations: [
        PURCUnitComponent,
        PURCUnitEditComponent,
        PURCDepartmentComponent,
        PURCAddITEMTEMPLATEComponent,
        PURCAddNewTemplateModalComponent,
        PURCAddNewItemModalComponent,
        PURCAddNewCatalogueModalComponent,
        PurcLibCatalougeExcelImportComponent,
        PURCLibCatalogueExcelImportModalComponent,
        PURCSparePartsExcelImportComponent,
        PURCNewRFQTERMComponent,
        PURCNewRFQTERMADDModalComponent,
        PURCPOTermsComponent,
        PURCPOTermsModalComponent,
        PURCLIBSupplierDocumentsComponent,
        PURCLIBASLEXCELIMPORTComponent,
        PURCApproveSupplierQuestionComponent,
        PURCApproveSupplierQuestionAddNewQueComponent,
        PURCLIBSupplierDocumentsEditComponent,
        PURCApproveSupplierQuestionCopyQueModalComponent,
        PURCASLSuppTypeDeptMappingComponent,
        PURCTacitRelationComponent,
        PURCASLSuppTypeDeptMappingEditComponent,
        PURCTacitRelationEditComponent,
        PURCLocationComponent,
        PURCLocationEditComponent,
        PurcSparePartsExcelImportAlertComponent,
        PurcLibAslExcelImportAlertComponent,
        PurcLocationSFIListComponent,
        PURCDepartmentAddComponent,
        PURCCatalogueComponent,
        PURCCatalogueEditComponent,
        PURCCatalogueEditModelComponent,
        PURCApproveSupplierComponent,
        PURCApproveSupplierEditComponent,
        PURCApproveSupplierShortEditComponent,
        PURCApproveSupplierAddContactModalComponent,
        PURCInviteSupplierComponent,
        PURCDirectPurchaseOrderComponent,
        PURCPurchaseOrderListModalComponent,
        PURCPurchaseOrderSummaryModalComponent,
        PURCApprovalPortalComponent,
        PURCAccountPayableComponent,
        PURCAccountPayableGenerateLinkModalComponent,
        PURCNewIndexComponent,
        PURCNewRequisitionEditComponent,
        PURCQuickRequisitionEditComponent,
        PURCPurchaseRemarkIndexComponent,
        PURCRequisitionModalComponent,
        PURCRequisitionItemDescModalComponent,
        PURCContractModuleComponent,
        PURCContractModuleEditComponent,
        PURCUpdateInventoryComponent,
        PURCShipManagerCommissionComponent,
        PURCAddShipManagerCommissionComponent,
        PURCInvoiceModalComponent,
        PURCSparePartsExcelImportComponent,
    ],
    imports: [
        CommonModule,
        PURCRoutingModule,
        MaterialModule,
        FurySharedModule,
        ReactiveFormsModule,
        NgxMatSelectSearchModule,
        QuillModule.forRoot(),
    ]
})
export class PURCModule { }
