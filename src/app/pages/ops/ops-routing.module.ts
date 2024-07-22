import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OPSVIDIndexComponent } from './ops-vid-index/ops-vid-index.component';
import { OPSVIDIndexDetailComponent } from './ops-vid-index/ops-vid-index-detail/ops-vid-index-detail.component';
import { OPSVOYAGECPLIBRARYComponent } from './ops-voyage-cp-library/ops-voyage-cp-library.component';
import { OPSVesselPortCallComponent } from './ops-vessel-port-call/ops-vessel-port-call.component';
import { OPSPortCallReportsHistoryComponent } from './ops-port-call-reports-history/ops-port-call-reports-history.component';
import { OPSVesselPortCallCheckListIndexComponent } from './ops-vessel-port-call-check-list-index/ops-vessel-port-call-check-list-index.component';
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
import { OPSVesselThresholdComponent } from './NAD/ops-vessel-threshold/ops-vessel-threshold.component';
import { OPSSEEMPREPORTSComponent } from './NAD/ops-seemp-reports/ops-seemp-reports.component';
import { OPSNADArrivalReportComponent } from './NAD/ops-seemp-reports/ops-nad-arrival-report/ops-nad-arrival-report.component';
import { OPSNADCHARTERPARTYACTIVITYComponent } from './NAD/ops-nad-charter-party-activity/ops-nad-charter-party-activity.component';
import { OPSNADCHARTERPARTYCONSINDEXComponent } from './NAD/ops-nad-charter-party-cons-index/ops-nad-charter-party-cons-index.component';
import { OPSNADCompareComponent } from './NAD/ops-nad-compare/ops-nad-compare.component';
import { OPSNADLIBRARYCHARTERERTHRESHOLDComponent } from './NAD/ops-nad-library-charterer-threshold/ops-nad-library-charterer-threshold.component';
import { OPSNADLIBCO2PERMITSComponent } from './ops-nad-lib-co2-permits/ops-nad-lib-co2-permits.component'
import { OPSNADCO2EmissionMultiplierFactorComponent } from './ops-nad-co2-emission-multiplier-factor/ops-nad-co2-emission-multiplier-factor.component';
import { OPSNADCIIReductionFactorComponent } from './ops-nad-cii-reduction-factor/ops-nad-cii-reduction-factor.component';
import { OPSNADCIIDetailsComponent } from './ops-nad-cii-details/ops-nad-cii-details.component';
import { OPSNADCIICalculationIndexComponent } from './NAD/ops-nad-cii-calculation-index/ops-nad-cii-calculation-index.component';
import { OPSNADDailyNoonReportComponent } from './NAD/ops-nad-daily-noon-report/ops-nad-daily-noon-report.component';
import { OPSVIDNEWLIBRARYComponent } from './Library/ops-vid-new-library/ops-vid-new-library.component';
import { OPSLibNadCustomFieldsComponent } from './Library/ops-lib-nad-custom-fields/ops-lib-nad-custom-fields.component';
import { OPSLIBNADCustomFieldsAssignmentComponent } from './Library/ops-lib-nad-custom-fields-assignment/ops-lib-nad-custom-fields-assignment.component';
import { OPSNADLIBDOCUMENTSComponent } from './Library/ops-nad-lib-documents/ops-nad-lib-documents.component';
import { OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent } from './Library/ops-nad-lib-documents-vessel-assignment/ops-nad-lib-documents-vessel-assignment.component';
import { OPSLIBOMRPRODUCTComponent } from './Library/ops-lib-omr-product/ops-lib-omr-product.component';
import { OPSLIBWaterINComponent } from './Library/ops-lib-water-in/ops-lib-water-in.component';
import { OPSLIBVesselPortcallChecklistComponent } from './Library/ops-lib-vessel-portcall-checklist/ops-lib-vessel-portcall-checklist.component';
import { OPSRPTAddReportComponent } from './Library/ops-rpt-add-report/ops-rpt-add-report.component';
import { OPSRPTVESSELAssignementComponent } from './Library/ops-rpt-vessel-assignement/ops-rpt-vessel-assignement.component';
import { OPSLIBVSLPARTICULARSLABELSComponent } from './Library/ops-lib-vsl-particulars-labels/ops-lib-vsl-particulars-labels.component';
import { OPSLIBLUBESAMPLENAMEComponent } from './Library/ops-lib-lube-sample-name/ops-lib-lube-sample-name.component';
import { OPSFAMAmmunitionKitComponent } from './FireArmsMovement/ops-fam-ammunition-kit/ops-fam-ammunition-kit.component';
import { OPSFamAmmunitionKitAddComponent } from './FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-fam-ammunition-kit-add.component';
import { OPSFAMAmmunitionItemComponent } from './FireArmsMovement/ops-fam-ammunition-item/ops-fam-ammunition-item.component';
import { OPSSECSecurityDashBoardComponent } from './SecurityAlerts/ops-sec-security-dash-board/ops-sec-security-dash-board.component';
import { OPSSECAlertListComponent } from './SecurityAlerts/ops-sec-alert-list/ops-sec-alert-list.component';
import { OPSSECVesselListComponent } from './SecurityAlerts/ops-sec-vessel-list/ops-sec-vessel-list.component';
import { OPSSECAlertAreasComponent } from './SecurityAlerts/ops-sec-alert-areas/ops-sec-alert-areas.component';
import { OPSOffshoreMidNightReportIndexComponent } from './ops-offshore-mid-night-report-index/ops-offshore-mid-night-report-index.component';
import { OPSOffshoreMidNightReportIndividualComponent } from './ops-offshore-mid-night-report-index/ops-offshore-mid-night-report-individual/ops-offshore-mid-night-report-individual.component';
import { OPSFleetLocationMapComponent } from './FleetLocation/ops-fleet-location-map/ops-fleet-location-map.component';
import { OPSRPTCompareReportComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-rpt-compare-report/ops-rpt-compare-report.component';
import { OPSCARGOLOGMAINComponent } from './ops-cargo-log-main/ops-cargo-log-main.component';
import { OPSDeckLogBookIndexComponent } from './ops-deck-log-book-index/ops-deck-log-book-index.component';
import { OPSNADVoyageLogAbstractComponent } from './NAD/ops-nad-voyage-log-abstract/ops-nad-voyage-log-abstract.component';
import { OPSNADAddVoyageLogComponent } from './NAD/ops-nad-voyage-log-abstract/ops-nad-add-voyage-log/ops-nad-add-voyage-log.component';
import { OPSRPTReportIndexComponent } from './VesselReport_Chng/ops-rpt-report-index/ops-rpt-report-index.component';
import { OPSRPTFOLLOWUPINDEXComponent } from './VesselReport_Chng/ops-rpt-followup-index/ops-rpt-followup-index.component';
import { OpsLibCustFeedbackCategoryComponent } from './Library/ops-lib-cust-feedback-category/ops-lib-cust-feedback-category.component';
import { OpsLibCustFeedbackGradeComponent } from './Library/ops-lib-cust-feedback-grade/ops-lib-cust-feedback-grade.component';
import { OpsLibCustFeedbackQuestionComponent } from './Library/ops-lib-cust-feedback-question/ops-lib-cust-feedback-question.component';
import { OpsLibPortcallFeedbackCategoryComponent } from './Library/ops-lib-portcall-feedback-category/ops-lib-portcall-feedback-category.component';
import { OpsLibPortcallFeedbackGradeComponent } from './Library/ops-lib-portcall-feedback-grade/ops-lib-portcall-feedback-grade.component';
import { OpsLibPortcallFeedbackQuestionComponent } from './Library/ops-lib-portcall-feedback-question/ops-lib-portcall-feedback-question.component';

const routes: Routes = [
  {
    path: "OPS_VID_Index", component: OPSVIDIndexComponent
  },
  {
    path: "OPS_VID_Index_Detail", component: OPSVIDIndexDetailComponent
  },
  {
    path: "OPS_VOYAGE_CP_LIBRARY", component: OPSVOYAGECPLIBRARYComponent
  },
  {
    path: "OPS_VesselPortCall", component: OPSVesselPortCallComponent
  },
  {
    path: "OPS_PortCall_Reports", component: OPSPortCallReportsHistoryComponent
  },
  {
    path: "OPS_VesselPortCall_CheckListIndex", component: OPSVesselPortCallCheckListIndexComponent
  },
  {
    path: "NAD/OPS_NAD_Index", component: OPSNADIndexComponent
  },
  {
    path: "NAD/OPS_NAD_Add_ArrivalReport", component: OPSNADAddArrivalReportComponent
  },
  {
    path: "NAD/OPS_NAD_Add_DepartureReport", component: OPSNADAddDepartureReportComponent
  },
  {
    path: "NAD/OPS_NAD_Add_DailyNoonReport", component: OPSNADAddDailyNoonReportComponent
  },
  {
    path: "NAD/OPS_NAD_Add_DailyNoonReport_Anchorage", component: OPSNADAddDailyNoonReportAnchorageComponent
  },
  {
    path: "NAD/OPS_NAD_Add_DailyNoonReport_Anchorage", component: OPSNADAddDailyNoonReportAnchorageComponent
  },
  {
    path: "NAD/OPS_NAD_Add_DailyNoonReport_Alongside", component: OPSNADAddDailyNoonReportAlongsideComponent
  },
  {
    path: "NAD/OPS_NAD_Add_Monoevering", component: OPSNADAddMonoeveringComponent
  },
  {
    path: "NAD/ASM_OPS_NAD_Index", component: ASMOPSNADIndexComponent
  },
  {
    path: "NAD/ASM_OPS_NAD_INDIVIDUAL", component: ASMOPSNADINDIVIDUALComponent
  },
  {
    path: "NAD/NAD_Bunker_Costs", component: OPSNADBunkerCostsComponent
  },
  {
    path: "NAD/OPS_Vessel_Threshold", component: OPSVesselThresholdComponent
  },
  {
    path: "NAD/OPS_SEEMP_REPORTS", component: OPSSEEMPREPORTSComponent
  },
  {
    path: "NAD/OPS_NAD_ArrivalReport", component: OPSNADArrivalReportComponent
  },
  {
    path: "NAD/OPS_NAD_CHARTER_PARTY_ACTIVITY", component: OPSNADCHARTERPARTYACTIVITYComponent
  },
  {
    path: "NAD/OPS_NAD_CHARTER_PARTY_CONS_INDEX", component: OPSNADCHARTERPARTYCONSINDEXComponent
  },
  {
    path: "NAD/OPS_NAD_Compare", component: OPSNADCompareComponent
  },
  {
    path: "NAD/OPS_NAD_LIBRARY_CHARTERER_THRESHOLD", component: OPSNADLIBRARYCHARTERERTHRESHOLDComponent
  },
  {
    path: "OPS_NAD_LIB_CO2_PERMITS", component: OPSNADLIBCO2PERMITSComponent
  },
  {
    path: "OPS_NAD_LIB_CO2_CF", component: OPSNADCO2EmissionMultiplierFactorComponent
  },
  {
    path: "OPS_LIB_NAD_CII_REDUCTION_FACTOR", component: OPSNADCIIReductionFactorComponent
  },
  {
    path: "OPS_LIB_OPS_NAD_CII_DETAILS", component: OPSNADCIIDetailsComponent
  },
  {
    path: "NAD/OPS_NAD_CII_CALCULATION_INDEX", component: OPSNADCIICalculationIndexComponent
  },
  {
    path: "NAD/DailyNoonReport", component: OPSNADDailyNoonReportComponent
  },
  {
    path:"Library/OPS_VID_NEW_LIBRARY", component:OPSVIDNEWLIBRARYComponent
  },
  {
    path:"Library/OPS_Lib_Nad_Custom_Fields", component:OPSLibNadCustomFieldsComponent
  },
  {
    path:"Library/OPS_LIB_NAD_Custom_Fields_Assignment", component:OPSLIBNADCustomFieldsAssignmentComponent
  },
  {
    path:"Library/OPS_NAD_LIB_DOCUMENTS", component:OPSNADLIBDOCUMENTSComponent
  },
  {
    path:"Library/OPS_NAD_LIB_DOCUMENTS_VESSEL_ASSIGNMENT", component:OPSNADLIBDOCUMENTSVESSELASSIGNMENTComponent
  },
  {
    path:"Library/OPS_LIB_OMR_PRODUCT", component:OPSLIBOMRPRODUCTComponent
  },
  {
    path:"Library/OPS_LIB_WaterIN", component:OPSLIBWaterINComponent
  },
  {
    path:"Library/OPS_LIB_VesselPortcall_Checklist", component:OPSLIBVesselPortcallChecklistComponent
  },
  {
    path:"Library/OPS_RPT_Add_Report", component:OPSRPTAddReportComponent
  },
  {
    path:"Library/OPS_RPT_VESSEL_Assignement", component:OPSRPTVESSELAssignementComponent
  },
  {
    path:"Library/OPS_LIB_VSL_PARTICULARS_LABELS", component:OPSLIBVSLPARTICULARSLABELSComponent
  },
  {
    path:"Library/OPS_LIB_LUBE_SAMPLE_NAME", component:OPSLIBLUBESAMPLENAMEComponent
  },

  {
    path:"Library/OPS_LIB_PORTCALL_FEEDBACK_CATEGORY", component:OpsLibPortcallFeedbackCategoryComponent
  },
  {
    path:"Library/OPS_LIB_PORTCALL_FEEDBACK_GRADE", component:OpsLibPortcallFeedbackGradeComponent
  },
  {
    path:"Library/OPS_LIB_PORTCALL_FEEDBACK_QUESTION", component:OpsLibPortcallFeedbackQuestionComponent
  },

  {
    path:"Library/OPS_LIB_CUST_FEEDBACK_CATEGORY", component:OpsLibCustFeedbackCategoryComponent
  },
  {
    path:"Library/OPS_LIB_CUST_FEEDBACK_GRADE", component:OpsLibCustFeedbackGradeComponent
  },
  {
    path:"Library/OPS_LIB_CUST_FEEDBACK_QUESTION", component:OpsLibCustFeedbackQuestionComponent
  },

  {
    path:"FireArmsMovement/OPS_FAM_AmmunitionKit", component:OPSFAMAmmunitionKitComponent
  },
  {
    path:"FireArmsMovement/OPS_FAM_AmmunitionItem", component:OPSFAMAmmunitionItemComponent
  },
  {
    path:"SecurityAlerts/OPS_SEC_SecurityDashBoard", component:OPSSECSecurityDashBoardComponent
  },
  {
    path:"SecurityAlerts/OPS_SEC_AlertList", component:OPSSECAlertListComponent
  },
  {
    path:"SecurityAlerts/OPS_SEC_VesselList", component:OPSSECVesselListComponent
  },
  {
    path:"SecurityAlerts/OPS_SEC_AlertAreas", component:OPSSECAlertAreasComponent
  },
  {
    path:"OPS_Offshore_Mid_Night_Report_Index", component:OPSOffshoreMidNightReportIndexComponent
  },
  {
    path:"OPS_Offshore_Mid_Night_Report_Individual", component:OPSOffshoreMidNightReportIndividualComponent
  },
  {
    path:"FleetLocation/OPS_FleetLocationMap", component:OPSFleetLocationMapComponent
  },
  {
    path:"VesselReport_Chng/OPS_RPT_Compare_Report", component:OPSRPTCompareReportComponent
  },
  {
    path:"OPS_CARGO_LOG_MAIN", component:OPSCARGOLOGMAINComponent
  },
  {
    path:"NAD/OPS_NAD_Voyage_Log_Abstract", component:OPSNADVoyageLogAbstractComponent
  },
  {
    path:"NAD/OPS_NAD_Add_Voyage_Log", component:OPSNADAddVoyageLogComponent
  },

  {
    path:"OPS_DeckLogBook_Index", component:OPSDeckLogBookIndexComponent
  },
  {
    path:"VesselReport_Chng/OPS_RPT_Report_Index", component:OPSRPTReportIndexComponent
  },
  {
    path:"VesselReport_Chng/OPS_RPT_FOLLOWUP_INDEX", component:OPSRPTFOLLOWUPINDEXComponent
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OPSRoutingModule { }
