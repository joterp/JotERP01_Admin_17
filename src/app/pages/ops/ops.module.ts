import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OPSRoutingModule } from './ops-routing.module';
import { OPSVIDIndexComponent } from './ops-vid-index/ops-vid-index.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { QuillModule } from 'ngx-quill';
import { OPSVIDIndexDetailComponent } from './ops-vid-index/ops-vid-index-detail/ops-vid-index-detail.component';
import { OPSQuestionHistoryComponent } from './ops-vid-index/ops-question-history/ops-question-history.component';
import { OPSVOYAGECPLIBRARYComponent } from './ops-voyage-cp-library/ops-voyage-cp-library.component';
import { OPSVOYAGECPLIBRARYEditComponent } from './ops-voyage-cp-library/ops-voyage-cp-library-edit/ops-voyage-cp-library-edit.component';
import { OPSVesselPortCallComponent } from './ops-vessel-port-call/ops-vessel-port-call.component';
import { OPSVesselPortCallAddComponent } from './ops-vessel-port-call/ops-vessel-port-call-add/ops-vessel-port-call-add.component';
import { OPSVesselPortCallCrewListComponent } from './ops-vessel-port-call/ops-vessel-port-call-crew-list/ops-vessel-port-call-crew-list.component';
import { OPSAgencyPOComponent } from './ops-vessel-port-call/ops-agency-po/ops-agency-po.component';
import { OPSVesselPortQuestionnaireComponent } from './ops-vessel-port-call/ops-vessel-port-questionnaire/ops-vessel-port-questionnaire.component';
import { OPSVesselPortCallChecklistsComponent } from './ops-vessel-port-call/ops-vessel-port-call-checklists/ops-vessel-port-call-checklists.component';
import { OPSVesselPortCallChecklistsAddComponent } from './ops-vessel-port-call/ops-vessel-port-call-checklists-add/ops-vessel-port-call-checklists-add.component';
import { OPSPortCallReportsHistoryComponent } from './ops-port-call-reports-history/ops-port-call-reports-history.component';
import { OPSVesselPortCallCheckListIndexComponent } from './ops-vessel-port-call-check-list-index/ops-vessel-port-call-check-list-index.component';
import { OPSVesselPortCallCheckListIndexEditComponent } from './ops-vessel-port-call-check-list-index/ops-vessel-port-call-check-list-index-edit/ops-vessel-port-call-check-list-index-edit.component';
import { POSPortCallPurchaseOrderListComponent } from './ops-port-call-reports-history/pos-port-call-purchase-order-list/pos-port-call-purchase-order-list.component';
import { OPSNADIndexComponent } from './NAD/ops-nad-index/ops-nad-index.component';
import { OPSNADAddArrivalReportComponent } from './NAD/ops-nad-index/ops-nad-add-arrival-report/ops-nad-add-arrival-report.component';
import { OPSNADAddDepartureReportComponent } from './NAD/ops-nad-index/ops-nad-add-departure-report/ops-nad-add-departure-report.component';
import { OPSNADAddDailyNoonReportComponent } from './NAD/ops-nad-index/ops-nad-add-daily-noon-report/ops-nad-add-daily-noon-report.component';
import { OPSNADAddDailyNoonReportAnchorageComponent } from './NAD/ops-nad-index/ops-nad-add-daily-noon-report-anchorage/ops-nad-add-daily-noon-report-anchorage.component';
import { OPSNADAddDailyNoonReportAlongsideComponent } from './NAD/ops-nad-index/ops-nad-add-daily-noon-report-alongside/ops-nad-add-daily-noon-report-alongside.component';
import { OPSNADAddMonoeveringComponent } from './NAD/ops-nad-index/ops-nad-add-monoevering/ops-nad-add-monoevering.component';
import { ASMOPSNADIndexComponent } from './NAD/asm-ops-nad-index/asm-ops-nad-index.component';
import { ASMOPSNADINDIVIDUALComponent } from './NAD/asm-ops-nad-index/asm-ops-nad-individual/asm-ops-nad-individual.component';
import { OPSNADBunkerCostsComponent } from './NAD/ops-nad-bunker-costs/ops-nad-bunker-costs.component';
import { OPSNADBunkerCostsAddComponent } from './NAD/ops-nad-bunker-costs/ops-nad-bunker-costs-add/ops-nad-bunker-costs-add.component';
import { OPSVesselThresholdComponent } from './NAD/ops-vessel-threshold/ops-vessel-threshold.component';
import { OPSVesselThresholdAddComponent } from './NAD/ops-vessel-threshold/ops-vessel-threshold-add/ops-vessel-threshold-add.component';
import { OPSSludgeDetailAddComponent } from './NAD/ops-nad-index/ops-sludge-detail-add/ops-sludge-detail-add.component';
import { OPSSEEMPREPORTSComponent } from './NAD/ops-seemp-reports/ops-seemp-reports.component';
import { OPSNADArrivalReportComponent } from './NAD/ops-seemp-reports/ops-nad-arrival-report/ops-nad-arrival-report.component';
import { OPSBunkerROBsModalComponent } from './NAD/ops-seemp-reports/ops-nad-arrival-report/ops-bunker-robs-modal/ops-bunker-robs-modal.component';
import { OPSNADCHARTERPARTYACTIVITYComponent } from './NAD/ops-nad-charter-party-activity/ops-nad-charter-party-activity.component';
import { OPSNADCHARTERPARTYCONSINDEXComponent } from './NAD/ops-nad-charter-party-cons-index/ops-nad-charter-party-cons-index.component';
import { OPSThresholdRemarkUpdateComponent } from './NAD/ops-nad-charter-party-cons-index/ops-threshold-remark-update/ops-threshold-remark-update.component';
import { OPSNADCompareComponent } from './NAD/ops-nad-compare/ops-nad-compare.component';
import { OPSNADLIBRARYCHARTERERTHRESHOLDComponent } from './NAD/ops-nad-library-charterer-threshold/ops-nad-library-charterer-threshold.component';
import { OPSNADLIBCO2PERMITSComponent } from './ops-nad-lib-co2-permits/ops-nad-lib-co2-permits.component';
import { OPSCO2PERMITSADDComponent } from './ops-nad-lib-co2-permits/ops-co2-permits-add/ops-co2-permits-add.component';
import { OPSNADCO2EmissionMultiplierFactorComponent } from './ops-nad-co2-emission-multiplier-factor/ops-nad-co2-emission-multiplier-factor.component';
import { OPSNADCIIReductionFactorComponent } from './ops-nad-cii-reduction-factor/ops-nad-cii-reduction-factor.component';
import { OPSNADCIIDetailsComponent } from './ops-nad-cii-details/ops-nad-cii-details.component';
import { OPSNADCO2EmissionMultiplierFactorAddComponent } from './ops-nad-co2-emission-multiplier-factor/ops-nad-co2-emission-multiplier-factor-add/ops-nad-co2-emission-multiplier-factor-add.component';
import { OPSNADCIIReductionFactorAddComponent } from './ops-nad-cii-reduction-factor/ops-nad-cii-reduction-factor-add/ops-nad-cii-reduction-factor-add.component';
import { OPSNADCIIDetailsAddComponent } from './ops-nad-cii-details/ops-nad-cii-details-add/ops-nad-cii-details-add.component';
import { OPSNADCIICalculationIndexComponent } from './NAD/ops-nad-cii-calculation-index/ops-nad-cii-calculation-index.component';
import { OPSNADDailyNoonReportComponent } from './NAD/ops-nad-daily-noon-report/ops-nad-daily-noon-report.component';
import { OPSLIBLUBESAMPLENAMEComponent } from './Library/ops-lib-lube-sample-name/ops-lib-lube-sample-name.component';
import { OpsLibLubeSampleNameEditComponent } from './Library/ops-lib-lube-sample-name/ops-lib-lube-sample-name-edit/ops-lib-lube-sample-name-edit.component';
import { OPSLibNadCustomFieldsComponent } from './Library/ops-lib-nad-custom-fields/ops-lib-nad-custom-fields.component';
import { OPSLIBNADCustomFieldsAssignmentComponent } from './Library/ops-lib-nad-custom-fields-assignment/ops-lib-nad-custom-fields-assignment.component';
import { OPSNADLIBDOCUMENTSComponent } from './Library/ops-nad-lib-documents/ops-nad-lib-documents.component';
import { OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent } from './Library/ops-nad-lib-documents-vessel-assignment/ops-nad-lib-documents-vessel-assignment.component';
import { OPSLIBOMRPRODUCTComponent } from './Library/ops-lib-omr-product/ops-lib-omr-product.component';
import { OPSLIBWaterINComponent } from './Library/ops-lib-water-in/ops-lib-water-in.component';
import { OPSLIBVesselPortcallChecklistComponent } from './Library/ops-lib-vessel-portcall-checklist/ops-lib-vessel-portcall-checklist.component';
import { OPSLIBVSLPARTICULARSLABELSComponent } from './Library/ops-lib-vsl-particulars-labels/ops-lib-vsl-particulars-labels.component';
import { OPSVIDLIBTypesComponent } from './Library/ops-vid-new-library/ops-vid-lib-types/ops-vid-lib-types.component';
import { OPSVIDLIBChaptersComponent } from './Library/ops-vid-new-library/ops-vid-lib-chapters/ops-vid-lib-chapters.component';
import { OPSVIDLIBQuestionsComponent } from './Library/ops-vid-new-library/ops-vid-lib-questions/ops-vid-lib-questions.component';
import { OPSVIDLIBTypesEditComponent } from './Library/ops-vid-new-library/ops-vid-lib-types/ops-vid-lib-types-edit/ops-vid-lib-types-edit.component';
import { OPSLibNadCustomFieldsAddComponent } from './Library/ops-lib-nad-custom-fields/ops-lib-nad-custom-fields-add/ops-lib-nad-custom-fields-add.component';
import { OpsNadLibDocumentsAddComponent } from './Library/ops-nad-lib-documents/ops-nad-lib-documents-add/ops-nad-lib-documents-add.component';
import { OPSLIBNADCustomFieldsVesselWiseAssignmentComponent } from './Library/ops-lib-nad-custom-fields-assignment/ops-lib-nad-custom-fields-vessel-wise-assignment/ops-lib-nad-custom-fields-vessel-wise-assignment.component';
import { OpsLibOmrProductEditComponent } from './Library/ops-lib-omr-product/ops-lib-omr-product-edit/ops-lib-omr-product-edit.component';
import { OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent } from './Library/ops-nad-lib-documents-vessel-assignment/ops-nad-lib-document-vessel-wise-assignment/ops-nad-lib-document-vessel-wise-assignment.component';
import { OpsLibWaterInEditComponent } from './Library/ops-lib-water-in/ops-lib-water-in-edit/ops-lib-water-in-edit.component';
import { OpsLibVesselPortcallChecklistEditComponent } from './Library/ops-lib-vessel-portcall-checklist/ops-lib-vessel-portcall-checklist-edit/ops-lib-vessel-portcall-checklist-edit.component';
import { OpsLibVslParticularsLabelsAddComponent } from './Library/ops-lib-vsl-particulars-labels/ops-lib-vsl-particulars-labels-add/ops-lib-vsl-particulars-labels-add.component';
import { OPSVIDLIBCatagariesComponent } from './Library/ops-vid-new-library/ops-vid-lib-catagaries/ops-vid-lib-catagaries.component';
import { OPSVIDQuestionnairesEditComponent } from './Library/ops-vid-new-library/ops-vid-questionnaires-edit/ops-vid-questionnaires-edit.component';
import { OPSVIDQuestionEditComponent } from './Library/ops-vid-new-library/ops-vid-question-edit/ops-vid-question-edit.component';
import { OPSRPTAddReportComponent } from './Library/ops-rpt-add-report/ops-rpt-add-report.component';
import { OPSRPTVESSELAssignementComponent } from './Library/ops-rpt-vessel-assignement/ops-rpt-vessel-assignement.component';
import { OPSVIDNEWLIBRARYComponent } from './Library/ops-vid-new-library/ops-vid-new-library.component';
import { OPSVIDChaptersEditComponent } from './Library/ops-vid-new-library/ops-vid-chapters-edit/ops-vid-chapters-edit.component';
import { OPSVIDCategoryEditComponent } from './Library/ops-vid-new-library/ops-vid-category-edit/ops-vid-category-edit.component';
import { CopyReportsComponent } from './Library/ops-rpt-vessel-assignement/ops-vessel-wise-report-assignment/copy-reports/copy-reports.component';
import { OpsRptAddReportEditComponent } from './Library/ops-rpt-add-report/ops-rpt-add-report-edit/ops-rpt-add-report-edit.component';
import { OPSFAMAmmunitionKitComponent } from './FireArmsMovement/ops-fam-ammunition-kit/ops-fam-ammunition-kit.component';
import { OPSTransferFromKitAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-transfer-from-kit-add/ops-transfer-from-kit-add.component';
import { OPSFAMAmmunitionItemComponent } from './FireArmsMovement/ops-fam-ammunition-item/ops-fam-ammunition-item.component';
import { OPSFamAmmunitionKitAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-fam-ammunition-kit-add.component';
import { OPSNewRemarkAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-remark-add/ops-new-remark-add.component';
import { OPSNewPermitAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-permit-add/ops-new-permit-add.component';
import { OPSNewLocationAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-location-add/ops-new-location-add.component';
import { OPSNewItemAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-item-add/ops-new-item-add.component';
import { OPSNewItemModalComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-new-item-add/ops-new-item-modal/ops-new-item-modal.component';
import { OPSItemsFromLibraryAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-items-from-library-add/ops-items-from-library-add.component';
import { OPSSECSecurityDashBoardComponent } from './SecurityAlerts/ops-sec-security-dash-board/ops-sec-security-dash-board.component';
import { OPSSECAlertListComponent } from './SecurityAlerts/ops-sec-alert-list/ops-sec-alert-list.component';
import { OPSSECVesselListComponent } from './SecurityAlerts/ops-sec-vessel-list/ops-sec-vessel-list.component';
import { OPSSECAlertAreasComponent } from './SecurityAlerts/ops-sec-alert-areas/ops-sec-alert-areas.component';
import { OPSVesselListModelComponent } from './SecurityAlerts/ops-sec-security-dash-board/ops-vessel-list-model/ops-vessel-list-model.component';
import { OPSRecentAlertsModelComponent } from './SecurityAlerts/ops-sec-security-dash-board/ops-recent-alerts-model/ops-recent-alerts-model.component';
import { OPSSECAlertListAddComponent } from './SecurityAlerts/ops-sec-alert-list/ops-sec-alert-list-add/ops-sec-alert-list-add.component';
import { OPSALertAreasModelComponent } from './SecurityAlerts/ops-sec-alert-areas/ops-alert-areas-model/ops-alert-areas-model.component';
import { OPSOffshoreMidNightReportIndividualComponent } from './ops-offshore-mid-night-report-index/ops-offshore-mid-night-report-individual/ops-offshore-mid-night-report-individual.component';
import { OPSOffshoreMidNightReportIndexComponent } from './ops-offshore-mid-night-report-index/ops-offshore-mid-night-report-index.component';
import { OPSRPTCompareReportComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-rpt-compare-report/ops-rpt-compare-report.component';
import { OPSFleetLocationMapComponent } from './FleetLocation/ops-fleet-location-map/ops-fleet-location-map.component';
import { OPSCARGOLOGMAINComponent } from './ops-cargo-log-main/ops-cargo-log-main.component';
import { OPSDeckLogBookIndexComponent } from './ops-deck-log-book-index/ops-deck-log-book-index.component';
import { OPSADDNEWVOYAGECARGOComponent } from './ops-cargo-log-main/ops-add-new-voyage-cargo/ops-add-new-voyage-cargo.component';
import { OPSNADAddVoyageLogComponent } from './NAD/ops-nad-voyage-log-abstract/ops-nad-add-voyage-log/ops-nad-add-voyage-log.component';
import { OPSNADVoyageLogAbstractComponent } from './NAD/ops-nad-voyage-log-abstract/ops-nad-voyage-log-abstract.component';
import { OPSAddDailyVoyageLogComponent } from './NAD/ops-nad-voyage-log-abstract/ops-nad-add-voyage-log/ops-add-daily-voyage-log/ops-add-daily-voyage-log.component';
import { OPSRPTReportIndexComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-rpt-report-index.component';
import { OPSRPTFOLLOWUPINDEXComponent } from './VesselReport_Chng/ops-rpt-followup-index/ops-rpt-followup-index.component';
import { OPSVesselPortcallModelComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-vessel-portcall-model/ops-vessel-portcall-model.component';
import { OPSReportSFIsFilterComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-report-sfis-filter/ops-report-sfis-filter.component';
import { OpsFollowupDetailsComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-followup-details/ops-followup-details.component';
import { OPSFollowupDetailsModelComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-followup-details/ops-followup-details-model/ops-followup-details-model.component';
import { OPSSelectSFIsComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-add-reports-model/ops-select-sfis/ops-select-sfis.component';
import { OPSAddReportsModelComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-add-reports-model/ops-add-reports-model.component';


@NgModule({
  declarations: [
    OPSVIDIndexComponent,
    OPSVIDIndexDetailComponent,
    OPSQuestionHistoryComponent,
    OPSVOYAGECPLIBRARYComponent,
    OPSVOYAGECPLIBRARYEditComponent,
    OPSVesselPortCallComponent,
    OPSVesselPortCallAddComponent,
    OPSVesselPortCallCrewListComponent,
    OPSAgencyPOComponent,
    OPSVesselPortQuestionnaireComponent,
    OPSVesselPortCallChecklistsComponent,
    OPSVesselPortCallChecklistsAddComponent,
    OPSPortCallReportsHistoryComponent,
    OPSVesselPortCallCheckListIndexComponent,
    OPSVesselPortCallCheckListIndexEditComponent,
    POSPortCallPurchaseOrderListComponent,
    OPSNADIndexComponent,
    OPSNADAddArrivalReportComponent,
    OPSNADAddDepartureReportComponent,
    OPSNADAddDailyNoonReportComponent,
    OPSNADAddDailyNoonReportAnchorageComponent,
    OPSNADAddDailyNoonReportAlongsideComponent,
    OPSNADAddMonoeveringComponent,
    ASMOPSNADIndexComponent,
    ASMOPSNADINDIVIDUALComponent,
    OPSNADBunkerCostsComponent,
    OPSNADBunkerCostsAddComponent,
    OPSVesselThresholdComponent,
    OPSVesselThresholdAddComponent,
    OPSSludgeDetailAddComponent,
    OPSSEEMPREPORTSComponent,
    OPSNADArrivalReportComponent,
    OPSBunkerROBsModalComponent,
    OPSNADCHARTERPARTYACTIVITYComponent,
    OPSNADCHARTERPARTYCONSINDEXComponent,
    OPSThresholdRemarkUpdateComponent,
    OPSNADCompareComponent,
    OPSNADLIBRARYCHARTERERTHRESHOLDComponent,
    OPSNADLIBCO2PERMITSComponent,
    OPSCO2PERMITSADDComponent,
    OPSNADCO2EmissionMultiplierFactorComponent,
    OPSNADCIIReductionFactorComponent,
    OPSNADCIIDetailsComponent,
    OPSNADCO2EmissionMultiplierFactorAddComponent,
    OPSNADCIIReductionFactorAddComponent,
    OPSNADCIIDetailsAddComponent,
    OPSNADCIICalculationIndexComponent,
    OPSNADDailyNoonReportComponent,
    OPSLIBLUBESAMPLENAMEComponent,
    OpsLibLubeSampleNameEditComponent,
    OPSLibNadCustomFieldsComponent,
           OPSLIBNADCustomFieldsAssignmentComponent,
           OPSNADLIBDOCUMENTSComponent,
           OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent,
           OPSLIBOMRPRODUCTComponent,
           OPSLIBWaterINComponent,
           OPSLIBVesselPortcallChecklistComponent,
           OPSLIBVSLPARTICULARSLABELSComponent,
           OPSVIDLIBTypesComponent,
           OPSVIDLIBChaptersComponent,
           OPSVIDLIBCatagariesComponent,
           OPSVIDLIBQuestionsComponent,
           OPSVIDLIBTypesEditComponent,
           OPSLibNadCustomFieldsAddComponent,
           OpsNadLibDocumentsAddComponent,
           OPSLIBNADCustomFieldsVesselWiseAssignmentComponent,
           OpsLibOmrProductEditComponent,
           OPSNADLIBDOCUMENTVESSELWISEASSIGNMENTComponent,
           OpsLibWaterInEditComponent,
           OpsLibVesselPortcallChecklistEditComponent,
           OpsLibVslParticularsLabelsAddComponent,
          //  OPSItemsFromLibraryAddComponent,
          OPSVIDQuestionnairesEditComponent,
          OPSVIDQuestionEditComponent,
          OPSNADLIBDOCUMENTSComponent,
          OPSRPTAddReportComponent,
          OPSRPTVESSELAssignementComponent,
          OPSVIDNEWLIBRARYComponent,
          OPSVIDChaptersEditComponent,
          OPSVIDCategoryEditComponent,
          CopyReportsComponent,
          OpsRptAddReportEditComponent,
          OPSFAMAmmunitionKitComponent,
          OPSTransferFromKitAddComponent,
          OPSFAMAmmunitionItemComponent,
          OPSFamAmmunitionKitAddComponent,
          OPSNewRemarkAddComponent,
          OPSNewPermitAddComponent,
          OPSNewLocationAddComponent,
          OPSNewItemAddComponent,
          OPSNewItemModalComponent,
          OPSItemsFromLibraryAddComponent,
            OPSSECSecurityDashBoardComponent,
      OPSSECAlertListComponent,
      OPSSECVesselListComponent,
      OPSSECAlertAreasComponent,
      OPSVesselListModelComponent,
      OPSRecentAlertsModelComponent,
      OPSSECAlertListAddComponent,
      OPSALertAreasModelComponent,
      OPSOffshoreMidNightReportIndividualComponent,
      OPSOffshoreMidNightReportIndexComponent,
      OPSRPTCompareReportComponent,
      OPSFleetLocationMapComponent,
      OPSCARGOLOGMAINComponent,
      OPSDeckLogBookIndexComponent,
      OPSADDNEWVOYAGECARGOComponent,
      OPSNADAddVoyageLogComponent,
      OPSNADVoyageLogAbstractComponent,
      OPSAddDailyVoyageLogComponent,
      OPSRPTReportIndexComponent,
      OPSRPTFOLLOWUPINDEXComponent,
      OPSVesselPortcallModelComponent,
      OPSReportSFIsFilterComponent,
      OpsFollowupDetailsComponent,
      OPSFollowupDetailsModelComponent,
      OPSSelectSFIsComponent,
      OPSAddReportsModelComponent
      
  ],

  imports: [
    CommonModule,
    OPSRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    QuillModule.forRoot(),
  ]
})

export class OPSModule { }
