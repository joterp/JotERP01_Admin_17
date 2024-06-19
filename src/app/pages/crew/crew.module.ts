import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CREWRoutingModule } from './crew-routing.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { QuillModule } from 'ngx-quill';

import { ListModule } from 'src/@fury/shared/list/list.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { CREWCVComponent } from './crew-cv/crew-cv.component';
import { CREWRankSalaryAssignmentComponent } from './PortageBill/crew-rank-salary-assignment/crew-rank-salary-assignment.component';
import { CREWRankSalaryAssignmentAddComponent } from './PortageBill/crew-rank-salary-assignment/crew-rank-salary-assignment-add/crew-rank-salary-assignment-add.component';
import { CREWRankComponent } from './Libraries/crew-rank/crew-rank.component';
import { CREWRankCategoryComponent } from './Libraries/crew-rank-category/crew-rank-category.component';
import { CREWSignoffReasonComponent } from './Libraries/crew-signoff-reason/crew-signoff-reason.component';
import { CREWRankAddComponent } from './Libraries/crew-rank/crew-rank-add/crew-rank-add.component';
import { CREWRankCategoryAddComponent } from './Libraries/crew-rank-category/crew-rank-category-add/crew-rank-category-add.component';
import { CREWSignoffReasonAddComponent } from './Libraries/crew-signoff-reason/crew-signoff-reason-add/crew-signoff-reason-add.component';
import { CREWAdditionalChecksComponent } from './Libraries/crew-additional-checks/crew-additional-checks.component';
import { CREWQuestionCategoryComponent } from './Libraries/crew-question-category/crew-question-category.component';
import { CREWInterviewGradeComponent } from './Libraries/crew-interview-grade/crew-interview-grade.component';
import { CREWAdditionalChecksAddComponent } from './Libraries/crew-additional-checks/crew-additional-checks-add/crew-additional-checks-add.component';
import { CREWInterviewGradeAddComponent } from './Libraries/crew-interview-grade/crewinterview-grade-add/crewinterview-grade-add.component';
import { CREWInterviewQuestionsComponent } from './Libraries/crew-interview-questions/crew-interview-questions.component';
import { CREWIntreviewSheetComponent } from './Libraries/crew-intreview-sheet/crew-intreview-sheet.component';
import { CREWInterviewQuestionsAddComponent } from './Libraries/crew-interview-questions/crew-interview-questions-add/crew-interview-questions-add.component';
import { CREWIntreviewSheetAddComponent } from './Libraries/crew-intreview-sheet/crew-intreview-sheet-add/crew-intreview-sheet-add.component';
import { CREWDocumentComponent } from './Libraries/crew-document/crew-document.component';
import { CREWRankAssignmentComponent } from './Libraries/crew-rank-assignment/crew-rank-assignment.component';
import { CREWDocumentAddComponent } from './Libraries/crew-document/crew-document-add/crew-document-add.component';
import { CREWLIBDocRankExpiryAlertComponent } from './Libraries/crew-lib-doc-rank-expiry-alert/crew-lib-doc-rank-expiry-alert.component';
import { CREWRankVesselAssignmentComponent } from './Libraries/crew-rank-vessel-assignment/crew-rank-vessel-assignment.component';
import { CREWLIBDocRankExpiryAlertAddComponent } from './Libraries/crew-lib-doc-rank-expiry-alert/crew-lib-doc-rank-expiry-alert-add/crew-lib-doc-rank-expiry-alert-add.component';
import { CREWAssignNationalityModelComponent } from './Libraries/crew-document/crew-assign-nationality-model/crew-assign-nationality-model.component';

import { CREWEvaluationCategoryComponent } from './Libraries/crew-evaluation-category/crew-evaluation-category.component';
import { CREWEvaluationSheetComponent } from './Libraries/crew-evaluation-sheet/crew-evaluation-sheet.component';
import { CREWEvaluationSheetAddComponent } from './Libraries/crew-evaluation-sheet/crew-evaluation-sheet-add/crew-evaluation-sheet-add.component';
import { CREWAssignQuestionsComponent } from './Libraries/crew-evaluation-sheet/crew-assign-questions/crew-assign-questions.component';
import { CREWAssignToVesselComponent } from './Libraries/crew-evaluation-sheet/crew-assign-to-vessel/crew-assign-to-vessel.component';
import { CREWEvaluationGradeComponent } from './Libraries/crew-evaluation-grade/crew-evaluation-grade.component';
import { CREWEvaluationPeriodComponent } from './Libraries/crew-evaluation-period/crew-evaluation-period.component';
import { CREWEvaluationQuestionsComponent } from './Libraries/crew-evaluation-questions/crew-evaluation-questions.component';
import { CREWEvaluationPeriodAddComponent } from './Libraries/crew-evaluation-period/crew-evaluation-period-add/crew-evaluation-period-add.component';
import { CREWLIBTrainingRankAssignmentComponent } from './Libraries/crew-lib-training-rank-assignment/crew-lib-training-rank-assignment.component';
import { CREWRANKWISETRAININGASSIGNMENTComponent } from './Libraries/crew-rank-wise-training-assignment/crew-rank-wise-training-assignment.component';
import { CREWContractTemplateIndexComponent } from './crew-contract-template-index/crew-contract-template-index.component';
import { CREWContractTemplateIndexAddComponent } from './crew-contract-template-index/crew-contract-template-index-add/crew-contract-template-index-add.component';
import { CREWCopyTemplateModelComponent } from './crew-contract-template-index/crew-copy-template-model/crew-copy-template-model.component';
import { CREWContractTemplateVesselAssignmentComponent } from './crew-contract-template-vessel-assignment/crew-contract-template-vessel-assignment.component';
import { CREWCadetLogTrainingPlanComponent } from './Cadet_Log/crew-cadet-log-training-plan/crew-cadet-log-training-plan.component';
import { CREWCadetLogTypeComponent } from './Cadet_Log/crew-cadet-log-type/crew-cadet-log-type.component';
import { CREWCadetLogChaptersComponent } from './Cadet_Log/crew-cadet-log-chapters/crew-cadet-log-chapters.component';
import { CREWCadetLogCategoriesComponent } from './Cadet_Log/crew-cadet-log-categories/crew-cadet-log-categories.component';
import { CREWCadetLogGradesComponent } from './Cadet_Log/crew-cadet-log-grades/crew-cadet-log-grades.component';
import { CREWCadetLogItemsComponent } from './Cadet_Log/crew-cadet-log-items/crew-cadet-log-items.component';
import { CREWCadetLogTrainingPlanAddComponent } from './Cadet_Log/crew-cadet-log-training-plan/crew-cadet-log-training-plan-add/crew-cadet-log-training-plan-add.component';
import { CREWCadetLogTypeAddComponent } from './Cadet_Log/crew-cadet-log-type/crew-cadet-log-type-add/crew-cadet-log-type-add.component';
import { CREWCadetLogChaptersAddComponent } from './Cadet_Log/crew-cadet-log-chapters/crew-cadet-log-chapters-add/crew-cadet-log-chapters-add.component';
import { CREWCadetLogGradesAddComponent } from './Cadet_Log/crew-cadet-log-grades/crew-cadet-log-grades-add/crew-cadet-log-grades-add.component';
import { CREWCadetLogItemsAddComponent } from './Cadet_Log/crew-cadet-log-items/crew-cadet-log-items-add/crew-cadet-log-items-add.component';
import { CREWManningFeeTransactionComponent } from './Manning_Agent/crew-manning-fee-transaction/crew-manning-fee-transaction.component';
import { CREWManningFeeTransactionAddComponent } from './Manning_Agent/crew-manning-fee-transaction/crew-manning-fee-transaction-add/crew-manning-fee-transaction-add.component';
import { CREWSplitFeeModelComponent } from './Manning_Agent/crew-manning-fee-transaction/crew-split-fee-model/crew-split-fee-model.component';
import { CREWManningAnnualReportComponent } from './Manning_Agent/crew-manning-annual-report/crew-manning-annual-report.component';
import { CREWManningFeeManagementComponent } from './Manning_Agent/crew-manning-fee-management/crew-manning-fee-management.component';
import { CREWManningFeeManagementEditComponent } from './Manning_Agent/crew-manning-fee-management/crew-manning-fee-management-edit/crew-manning-fee-management-edit.component';
import { CREWManningFeeStructureComponent } from './Manning_Agent/crew-manning-fee-structure/crew-manning-fee-structure.component';
import { CREWManningFeeStructureAddComponent } from './Manning_Agent/crew-manning-fee-structure/crew-manning-fee-structure-add/crew-manning-fee-structure-add.component';
import { CREWCostRegistrationIndexComponent } from './crew-cost-registration-index/crew-cost-registration-index.component';

import { CREWQueryIndexComponent } from './crew-query-index/crew-query-index.component';
import { CREWMedicalIndexComponent } from './crew-medical-index/crew-medical-index.component';
import { CREWCostRegistrationIndexAddComponent } from './crew-cost-registration-index/crew-cost-registration-index-add/crew-cost-registration-index-add.component';
import { CREWVerifyCostDetailsModalComponent } from './crew-cost-registration-index/crew-verify-cost-details-modal/crew-verify-cost-details-modal.component';
import { CREWMedicalIndexAddComponent } from './crew-medical-index/crew-medical-index-add/crew-medical-index-add.component';
import { CREWMedicalExpensesModalComponent } from './crew-medical-index/crew-medical-expenses-modal/crew-medical-expenses-modal.component';
import { CREWMedicalFollowupModalComponent } from './crew-medical-index/crew-medical-followup-modal/crew-medical-followup-modal.component';
import { CREWMedicalFollowupModalAddComponent } from './crew-medical-index/crew-medical-followup-modal/crew-medical-followup-modal-add/crew-medical-followup-modal-add.component';
import { CREWMedicalExpensesModelAddComponent } from './crew-medical-index/crew-medical-expenses-modal/crew-medical-expenses-model-add/crew-medical-expenses-model-add.component';
import { CREWEvaluationIndexComponent } from './crew-evaluation-index/crew-evaluation-index.component';
import { CREWEvaluationCalenderComponent } from './crew-evaluation-calender/crew-evaluation-calender.component';
import { CREWMatrixIndexComponent } from './crew-matrix-index/crew-matrix-index.component';
import { CREWMatrixExceptionLogComponent } from './crew-matrix-exception-log/crew-matrix-exception-log.component';
import { CREWMatrixRuleTemplateComponent } from './crew-matrix-rule-template/crew-matrix-rule-template.component';
import { CREWMatrixRuleTemplateAddComponent } from './crew-matrix-rule-template/crew-matrix-rule-template-add/crew-matrix-rule-template-add.component';
import { CREWTemplateVariableAddComponent } from './crew-matrix-rule-template/crew-template-variable-add/crew-template-variable-add.component';
import { CREWTemplateVariableAddModalComponent } from './crew-matrix-rule-template/crew-template-variable-add/crew-template-variable-add-modal/crew-template-variable-add-modal.component';
import { CREWMatrixRuleAssignmentComponent } from './crew-matrix-rule-assignment/crew-matrix-rule-assignment.component';
import { CREWMatrixRuleAssignmentAddComponent } from './crew-matrix-rule-assignment/crew-matrix-rule-assignment-add/crew-matrix-rule-assignment-add.component';
import { CREWCadetLogCategoriesAddComponent } from './Cadet_Log/crew-cadet-log-categories/crew-cadet-log-categories-add/crew-cadet-log-categories-add.component';
import { CREWPBVictuallingMealIndexComponent } from './PortageBill/crew-pb-victualling-meal-index/crew-pb-victualling-meal-index.component';
import { CREWPBVictuallingMealIndexAddComponent } from './PortageBill/crew-pb-victualling-meal-index/crew-pb-victualling-meal-index-add/crew-pb-victualling-meal-index-add.component';
import { CREWPBVictuallingPurchaseIndexComponent } from './PortageBill/crew-pb-victualling-purchase-index/crew-pb-victualling-purchase-index.component';
import { CREWPBVictuallingPurchaseIndexAddComponent } from './PortageBill/crew-pb-victualling-purchase-index/crew-pb-victualling-purchase-index-add/crew-pb-victualling-purchase-index-add.component';
import { CREWPBLIBPBVICTUALLINGComponent } from './PortageBill/crew-pb-lib-pb-victualling/crew-pb-lib-pb-victualling.component';
import { CREWPBLIBPBVICTUALLINGAddComponent } from './PortageBill/crew-pb-lib-pb-victualling/crew-pb-lib-pb-victualling-add/crew-pb-lib-pb-victualling-add.component';
import { CREWCopyPBVictuallingModalComponent } from './PortageBill/crew-pb-lib-pb-victualling/crew-copy-pb-victualling-modal/crew-copy-pb-victualling-modal.component';
import { CREWPBLIBPBBONDEDITEMSComponent } from './PortageBill/crew-pb-lib-pb-bonded-items/crew-pb-lib-pb-bonded-items.component';
import { CREWPBLIBPBBONDEDITEMSAddComponent } from './PortageBill/crew-pb-lib-pb-bonded-items/crew-pb-lib-pb-bonded-items-add/crew-pb-lib-pb-bonded-items-add.component';
import { CREWACCPBAllotmentsMinValueSetupComponent } from './PortageBill/crew-acc-pb-allotments-min-value-setup/crew-acc-pb-allotments-min-value-setup.component';
import { CREWACCPBAllotmentsMinValueSetupAddComponent } from './PortageBill/crew-acc-pb-allotments-min-value-setup/crew-acc-pb-allotments-min-value-setup-add/crew-acc-pb-allotments-min-value-setup-add.component';
import { CREWCopySetupModalComponent } from './PortageBill/crew-acc-pb-allotments-min-value-setup/crew-copy-setup-modal/crew-copy-setup-modal.component';
import { CREWACCPBLIBSeniorityManagementComponent } from './PortageBill/crew-acc-pb-lib-seniority-management/crew-acc-pb-lib-seniority-management.component';
import { CREWACCPBLIBSeniorityManagementAddComponent } from './PortageBill/crew-acc-pb-lib-seniority-management/crew-acc-pb-lib-seniority-management-add/crew-acc-pb-lib-seniority-management-add.component';
import { CREWTrainingsComponent } from './Libraries/crew-trainings/crew-trainings.component';
import { CREWIndexAddFormComponent } from './crew-index-new/crew-index-add-form/crew-index-add-form.component';
import { CREWNewEditComponent } from './crew-index-new/Crew_Profile_related/crew-new-edit/crew-new-edit.component';
import { CREWIndexNewComponent } from './crew-index-new/crew-index-new.component';
import { CREWTrainingsAddComponent } from './Libraries/crew-trainings/crew-trainings-add/crew-trainings-add.component';
import { CREWClientIndexComponent } from './crew-client-index/crew-client-index.component';
import { CREWClientIndexAddComponent } from './crew-client-index/crew-client-index-add/crew-client-index-add.component';
import { CrewRegistrationComponent } from './crew-registration/crew-registration.component';
import { CREWAddToCrewDetailsComponent } from './crew-registration/crew-add-to-crew-details/crew-add-to-crew-details.component';
import { CREWFollowupAddComponent } from './crew-registration/crew-registration-add/crew-followup-add/crew-followup-add.component';
import { CrewRegistrationAddComponent } from './crew-registration/crew-registration-add/crew-registration-add.component';
import { CREWAdditionalTraitsComponent } from './crew-index-new/Crew_Profile_related/crew-additional-traits/crew-additional-traits.component';
import { CREWProposeToOwnerComponent } from './crew-propose-to-owner/crew-propose-to-owner.component';
import { CREWCalenderComponent } from './crew-calender/crew-calender.component';
import { CREWVcanciesComponent } from './crew-manning-requirement/crew-vacancies.component';
import { CREWRotationAndAssignmentComponent } from './crew-rotation-and-assignment/crew-rotation-and-assignment.component';
import { CREWVesselAssignmentComponent } from './crew-vessel-assignment/crew-vessel-assignment.component';
import { CREWEventPlanningIndexComponent } from './EventPlanning/crew-event-planning-index/crew-event-planning-index.component';
import { CREWVacanciesAddComponent } from './crew-manning-requirement/crew-manning-requirement-add/crew-vacancies-add.component';
import { CREWACCPortageBillRecordSummaryComponent } from './PortageBill/crew-acc-portage-bill-record-summary/crew-acc-portage-bill-record-summary.component';
import { CREWPromotionUpdateComponent } from './PortageBill/crew-promotion-update/crew-promotion-update.component';
import { CREWSalaryStructureComponent } from './PortageBill/crew-salary-structure/crew-salary-structure.component';
import { CREWACCPBSalaryNamesComponent } from './PortageBill/crew-acc-pb-salary-names/crew-acc-pb-salary-names.component';
import { CREWSalaryStructureAddComponent } from './PortageBill/crew-salary-structure/crew-salary-structure-add/crew-salary-structure-add.component';
import { CREWACCPBSalaryNamesAddComponent } from './PortageBill/crew-acc-pb-salary-names/crew-acc-pb-salary-names-add/crew-acc-pb-salary-names-add.component';
import { CREWACCPBAllotmentIndexComponent } from './PortageBill/crew-acc-pb-allotment-index/crew-acc-pb-allotment-index.component';
import { CREWAllotmentIndexRedFlagReasonComponent } from './PortageBill/crew-acc-pb-allotment-index/crew-allotment-index-red-flag-reason/crew-allotment-index-red-flag-reason.component';
import { CREWACCPBAllotmentsComponent } from './PortageBill/crew-acc-pb-allotments/crew-acc-pb-allotments.component';
import { CREWAllotmentIndexViewAndVerifyComponent } from './PortageBill/crew-acc-pb-allotment-index/crew-allotment-index-view-and-verify/crew-allotment-index-view-and-verify.component';
import { CREWACCPBEarnDeductionIndexComponent } from './PortageBill/crew-acc-pb-earn-deduction-index/crew-acc-pb-earn-deduction-index.component';

import { CrewGreetingCardsComponent } from './Libraries/crew-greeting-cards/crew-greeting-cards.component';
import { CrewGreetingsCardsAddComponent } from './Libraries/crew-greeting-cards/crew-greetings-cards-add/crew-greetings-cards-add.component';
import { CrewQuestionCategoryAddComponent } from './Libraries/crew-question-category/crew-question-category-add/crew-question-category-add.component';


@NgModule({
  declarations: [
    CREWRankComponent,
    CREWRankCategoryComponent,
    CREWSignoffReasonComponent,
    CREWRankAddComponent,
    CREWRankCategoryAddComponent,
    CREWSignoffReasonAddComponent,
    CREWAdditionalChecksComponent,
    CREWQuestionCategoryComponent,
    CREWInterviewGradeComponent,
    CREWAdditionalChecksAddComponent,
    CREWInterviewGradeAddComponent,
    CREWInterviewQuestionsComponent,
    CREWIntreviewSheetComponent,
    CREWInterviewQuestionsAddComponent,
    CREWIntreviewSheetAddComponent,
    CREWDocumentComponent,
    CREWRankAssignmentComponent,
    CREWDocumentAddComponent,
    CREWLIBDocRankExpiryAlertComponent,
    CREWRankVesselAssignmentComponent,
    CREWLIBDocRankExpiryAlertAddComponent,
    CREWAssignNationalityModelComponent,
    CREWAllotmentIndexRedFlagReasonComponent,
    CREWEvaluationCategoryComponent,
    CREWEvaluationSheetComponent,
    CREWEvaluationSheetAddComponent,
    CREWAssignQuestionsComponent,
    CREWAssignToVesselComponent,
    CREWEvaluationGradeComponent,
    CREWEvaluationPeriodComponent,
    CREWEvaluationQuestionsComponent,
    CREWEvaluationPeriodAddComponent,
    CREWLIBTrainingRankAssignmentComponent,
    CREWRANKWISETRAININGASSIGNMENTComponent,
    CREWContractTemplateIndexComponent,
    CREWContractTemplateIndexAddComponent,
    CREWCopyTemplateModelComponent,
    CREWContractTemplateVesselAssignmentComponent,
    CREWCadetLogTrainingPlanComponent,
    CREWCadetLogTypeComponent,
    CREWCadetLogChaptersComponent,
    CREWCadetLogCategoriesComponent,
    CREWCadetLogGradesComponent,
    CREWCadetLogItemsComponent,
    CREWCadetLogTrainingPlanAddComponent,
    CREWCadetLogTypeAddComponent,
    CREWCadetLogChaptersAddComponent,
    CREWCadetLogCategoriesAddComponent,
    CREWCadetLogGradesAddComponent,
    CREWCadetLogItemsAddComponent,
    CREWManningFeeTransactionComponent,
    CREWManningFeeTransactionAddComponent,
    CREWSplitFeeModelComponent,
    CREWManningAnnualReportComponent,
    CREWManningFeeManagementComponent,
    CREWManningFeeManagementEditComponent,
    CREWManningFeeStructureComponent,
    CREWManningFeeStructureAddComponent,
    CREWCostRegistrationIndexComponent,
    
    CREWQueryIndexComponent,
         CREWMedicalIndexComponent,
         CREWCostRegistrationIndexAddComponent,
         CREWVerifyCostDetailsModalComponent,
         CREWMedicalIndexAddComponent,
         CREWMedicalExpensesModalComponent,
         CREWMedicalFollowupModalComponent,
         CREWMedicalFollowupModalAddComponent,
         CREWMedicalExpensesModelAddComponent,
         CREWEvaluationIndexComponent,
         CREWEvaluationCalenderComponent,
         CREWMatrixIndexComponent,
         CREWMatrixExceptionLogComponent,
         CREWMatrixRuleTemplateComponent,
         CREWMatrixRuleTemplateAddComponent,
         CREWTemplateVariableAddComponent,
         CREWTemplateVariableAddModalComponent,
         CREWMatrixRuleAssignmentComponent,
         CREWMatrixRuleAssignmentAddComponent,
         CREWPBVictuallingMealIndexComponent,
         CREWPBVictuallingMealIndexAddComponent,
         CREWPBVictuallingPurchaseIndexComponent,
         CREWPBVictuallingPurchaseIndexAddComponent,
         CREWPBLIBPBVICTUALLINGComponent,
         CREWPBLIBPBVICTUALLINGAddComponent,
         CREWCopyPBVictuallingModalComponent,
         CREWPBLIBPBBONDEDITEMSComponent,
         CREWPBLIBPBBONDEDITEMSAddComponent,
         CREWACCPBAllotmentsMinValueSetupComponent,
         CREWACCPBAllotmentsMinValueSetupAddComponent,
         CREWCopySetupModalComponent,
         CREWACCPBLIBSeniorityManagementComponent,
         CREWACCPBLIBSeniorityManagementAddComponent,
         CREWTrainingsComponent,
         CREWNewEditComponent,
         CREWTrainingsAddComponent,
         CREWIndexNewComponent,
         CREWIndexAddFormComponent,
    CREWRankSalaryAssignmentComponent,
    CREWRankSalaryAssignmentAddComponent,
    CREWCVComponent,
    CREWClientIndexComponent,
    CREWClientIndexAddComponent,
    CrewRegistrationComponent,
    CrewRegistrationAddComponent,
    CREWAddToCrewDetailsComponent,
    CREWFollowupAddComponent,
    CREWAdditionalTraitsComponent,
    CREWProposeToOwnerComponent,
    CREWCalenderComponent,
		CREWVcanciesComponent,
		CREWVesselAssignmentComponent,
		CREWRotationAndAssignmentComponent,
		CREWVesselAssignmentComponent,
		CREWEventPlanningIndexComponent,
    CREWVacanciesAddComponent,
    CREWACCPortageBillRecordSummaryComponent,
    CREWPromotionUpdateComponent,
    CREWSalaryStructureComponent,
    CREWSalaryStructureAddComponent,
    CREWACCPBSalaryNamesAddComponent,
    CREWACCPBSalaryNamesComponent,
    CREWCostRegistrationIndexComponent,
		CREWQueryIndexComponent,
		CREWMedicalIndexComponent,
		CREWEvaluationIndexComponent,
		CREWEvaluationCalenderComponent,
    CREWACCPBAllotmentIndexComponent,
    CREWACCPBAllotmentsComponent,
    CREWAllotmentIndexViewAndVerifyComponent,
    CREWACCPBEarnDeductionIndexComponent,
    CrewGreetingCardsComponent,
    CrewGreetingsCardsAddComponent,
    CrewQuestionCategoryAddComponent,
     
  ],

  imports: [
    CommonModule,
    CREWRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ListModule,
    BreadcrumbsModule,
    FuryCardModule,
    HighlightModule,
    QuillModule.forRoot(),
  ]
})
export class CREWModule { }
