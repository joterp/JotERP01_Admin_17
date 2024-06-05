import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CREWRankComponent } from './Libraries/crew-rank/crew-rank.component';
import { CREWRankCategoryComponent } from './Libraries/crew-rank-category/crew-rank-category.component';
import { CREWSignoffReasonComponent } from './Libraries/crew-signoff-reason/crew-signoff-reason.component';
import { CREWAdditionalChecksComponent } from './Libraries/crew-additional-checks/crew-additional-checks.component';
import { CREWInterviewGradeComponent } from './Libraries/crew-interview-grade/crew-interview-grade.component';
import { CREWQuestionCategoryComponent } from './Libraries/crew-question-category/crew-question-category.component';
import { CREWInterviewQuestionsComponent } from './Libraries/crew-interview-questions/crew-interview-questions.component';
import { CREWIntreviewSheetComponent } from './Libraries/crew-intreview-sheet/crew-intreview-sheet.component';
import { CREWDocumentComponent } from './Libraries/crew-document/crew-document.component';
import { CREWRankVesselAssignmentComponent } from './Libraries/crew-rank-vessel-assignment/crew-rank-vessel-assignment.component';
import { CREWRankAssignmentComponent } from './Libraries/crew-rank-assignment/crew-rank-assignment.component';
import { CREWLIBDocRankExpiryAlertComponent } from './Libraries/crew-lib-doc-rank-expiry-alert/crew-lib-doc-rank-expiry-alert.component';
import { CREWEvaluationSheetComponent } from './Libraries/crew-evaluation-sheet/crew-evaluation-sheet.component';
import { CREWEvaluationCategoryComponent } from './Libraries/crew-evaluation-category/crew-evaluation-category.component';
import { CREWEvaluationGradeComponent } from './Libraries/crew-evaluation-grade/crew-evaluation-grade.component';
import { CREWEvaluationQuestionsComponent } from './Libraries/crew-evaluation-questions/crew-evaluation-questions.component';
import { CREWEvaluationPeriodComponent } from './Libraries/crew-evaluation-period/crew-evaluation-period.component';
import { CREWLIBTrainingRankAssignmentComponent } from './Libraries/crew-lib-training-rank-assignment/crew-lib-training-rank-assignment.component';
import { CREWRANKWISETRAININGASSIGNMENTComponent } from './Libraries/crew-rank-wise-training-assignment/crew-rank-wise-training-assignment.component';
import { CREWIndexNewComponent } from './crew-index-new/crew-index-new.component';
import { CREWTrainingsComponent } from './Libraries/crew-trainings/crew-trainings.component';
import { CREWClientIndexComponent } from './crew-client-index/crew-client-index.component';
import { CrewRegistrationComponent } from './crew-registration/crew-registration.component';
import { CREWProposeToOwnerComponent } from './crew-propose-to-owner/crew-propose-to-owner.component';
import { CREWCalenderComponent } from './crew-calender/crew-calender.component';
import { CREWVcanciesComponent } from './crew-manning-requirement/crew-vacancies.component';
import { CREWVesselAssignmentComponent } from './crew-vessel-assignment/crew-vessel-assignment.component';
import { CREWRotationAndAssignmentComponent } from './crew-rotation-and-assignment/crew-rotation-and-assignment.component';
import { CREWEventPlanningIndexComponent } from './EventPlanning/crew-event-planning-index/crew-event-planning-index.component';
import { CREWACCPortageBillRecordSummaryComponent } from './PortageBill/crew-acc-portage-bill-record-summary/crew-acc-portage-bill-record-summary.component';
import { CREWSalaryStructureComponent } from './PortageBill/crew-salary-structure/crew-salary-structure.component';
import { CREWACCPBSalaryNamesComponent } from './PortageBill/crew-acc-pb-salary-names/crew-acc-pb-salary-names.component';
import { CREWRankSalaryAssignmentComponent } from './PortageBill/crew-rank-salary-assignment/crew-rank-salary-assignment.component';
import { CREWACCPBLIBSeniorityManagementComponent } from './PortageBill/crew-acc-pb-lib-seniority-management/crew-acc-pb-lib-seniority-management.component';
import { CREWACCPBAllotmentsMinValueSetupComponent } from './PortageBill/crew-acc-pb-allotments-min-value-setup/crew-acc-pb-allotments-min-value-setup.component';
import { CREWPBVictuallingMealIndexComponent } from './PortageBill/crew-pb-victualling-meal-index/crew-pb-victualling-meal-index.component';
import { CREWPBVictuallingPurchaseIndexComponent } from './PortageBill/crew-pb-victualling-purchase-index/crew-pb-victualling-purchase-index.component';
import { CREWPBLIBPBBONDEDITEMSComponent } from './PortageBill/crew-pb-lib-pb-bonded-items/crew-pb-lib-pb-bonded-items.component';
import { CREWPBLIBPBVICTUALLINGComponent } from './PortageBill/crew-pb-lib-pb-victualling/crew-pb-lib-pb-victualling.component';
import { CREWMatrixIndexComponent } from './crew-matrix-index/crew-matrix-index.component';
import { CREWMatrixExceptionLogComponent } from './crew-matrix-exception-log/crew-matrix-exception-log.component';
import { CREWMatrixRuleTemplateComponent } from './crew-matrix-rule-template/crew-matrix-rule-template.component';
import { CREWMatrixRuleAssignmentComponent } from './crew-matrix-rule-assignment/crew-matrix-rule-assignment.component';
import { CREWCadetLogTrainingPlanComponent } from './Cadet_Log/crew-cadet-log-training-plan/crew-cadet-log-training-plan.component';
import { CREWCadetLogTypeComponent } from './Cadet_Log/crew-cadet-log-type/crew-cadet-log-type.component';
import { CREWCadetLogChaptersComponent } from './Cadet_Log/crew-cadet-log-chapters/crew-cadet-log-chapters.component';
import { CREWCadetLogCategoriesComponent } from './Cadet_Log/crew-cadet-log-categories/crew-cadet-log-categories.component';
import { CREWCadetLogGradesComponent } from './Cadet_Log/crew-cadet-log-grades/crew-cadet-log-grades.component';
import { CREWCadetLogItemsComponent } from './Cadet_Log/crew-cadet-log-items/crew-cadet-log-items.component';
import { CREWManningFeeTransactionComponent } from './Manning_Agent/crew-manning-fee-transaction/crew-manning-fee-transaction.component';
import { CREWManningAnnualReportComponent } from './Manning_Agent/crew-manning-annual-report/crew-manning-annual-report.component';
import { CREWManningFeeManagementComponent } from './Manning_Agent/crew-manning-fee-management/crew-manning-fee-management.component';
import { CREWManningFeeStructureComponent } from './Manning_Agent/crew-manning-fee-structure/crew-manning-fee-structure.component';
import { CREWContractTemplateIndexComponent } from './crew-contract-template-index/crew-contract-template-index.component';
import { CREWContractTemplateVesselAssignmentComponent } from './crew-contract-template-vessel-assignment/crew-contract-template-vessel-assignment.component';
import { OPSFAMAmmunitionItemComponent } from '../ops/FireArmsMovement/ops-fam-ammunition-item/ops-fam-ammunition-item.component';
import { OPSFAMAmmunitionKitComponent } from '../ops/FireArmsMovement/ops-fam-ammunition-kit/ops-fam-ammunition-kit.component';
import { OPSFamAmmunitionKitAddComponent } from '../ops/FireArmsMovement/ops-fam-ammunition-kit/fam-ammunition-kit-add/ops-fam-ammunition-kit-add.component';
import { CREWCostRegistrationIndexComponent } from './crew-cost-registration-index/crew-cost-registration-index.component';
import { CREWQueryIndexComponent } from './crew-query-index/crew-query-index.component';
import { CREWMedicalIndexComponent } from './crew-medical-index/crew-medical-index.component';
import { CREWEvaluationIndexComponent } from './crew-evaluation-index/crew-evaluation-index.component';
import { CREWEvaluationCalenderComponent } from './crew-evaluation-calender/crew-evaluation-calender.component';
import { CREWAllotmentIndexViewAndVerifyComponent } from './PortageBill/crew-acc-pb-allotment-index/crew-allotment-index-view-and-verify/crew-allotment-index-view-and-verify.component';



const routes: Routes = [




  {
    path: "Libraries/CREW_Rank", component: CREWRankComponent
  },
  {
    path: "Libraries/CREW_Rank_Category", component: CREWRankCategoryComponent
  },
  {
    path: "Libraries/CREW_Signoff_Reason", component: CREWSignoffReasonComponent
  },
  {
    path: "Libraries/CREW_Additional_Checks", component: CREWAdditionalChecksComponent
  },
  {
    path: "Libraries/CREW_QuestionCategory", component: CREWQuestionCategoryComponent
  },
  {
    path: "Libraries/CREW_InterviewGrade", component: CREWInterviewGradeComponent
  },
  {
    path: "Libraries/InterviewQuestions", component: CREWInterviewQuestionsComponent
  },
  {
    path: "Libraries/IntreviewSheet", component: CREWIntreviewSheetComponent
  },
  {
    path: "Libraries/CREW_Document", component: CREWDocumentComponent
  },
  {
    path: "Libraries/CREW_RankAssignment", component: CREWRankAssignmentComponent
  },
  {
    path: "Libraries/RankVesselAssignment", component: CREWRankVesselAssignmentComponent
  },
  {
    path: "Libraries/RankExpiryNotifications", component: CREWLIBDocRankExpiryAlertComponent
  },
  {
    path: "Libraries/EvaluationSheet", component: CREWEvaluationSheetComponent
  },

  {
    path: "Libraries/EvaluationCategory", component: CREWEvaluationCategoryComponent
  },
  {
    path: "Libraries/EvaluationGrade", component: CREWEvaluationGradeComponent
  },
  {
    path: "Libraries/EvaluationPeriods", component: CREWEvaluationPeriodComponent
  },
  {
    path: "Libraries/EvaluationQuestions", component: CREWEvaluationQuestionsComponent
  },
  {
    path: "Libraries/RankAssignment", component: CREWLIBTrainingRankAssignmentComponent
  },
  {
    path: "Libraries/CREW_RANK_WISE_TRAINING_ASSIGNMENT", component: CREWRANKWISETRAININGASSIGNMENTComponent
  },
  {
    path: "Libraries/Tainings", component: CREWTrainingsComponent
  },

  {
    path: "CREW_Index_New", component: CREWIndexNewComponent
  },
  {
    path: "CREW_Client_Index", component: CREWClientIndexComponent
  }, 
  {
    path: "Crew_Registration", component: CrewRegistrationComponent
  },    
  {
    path: "ProposeToOwner_Index", component: CREWProposeToOwnerComponent
  },
  {
    path: "CREW_Calender", component: CREWCalenderComponent
  },

  {
    path: "CREW_ManningRequirement", component: CREWVcanciesComponent
  },
  
  {
    path: "Crew_Proposal", component: CREWVesselAssignmentComponent
  },
  
  {
    path: "MatrixIndex", component: CREWMatrixIndexComponent
  }, 
  {
    path: "MatrixRuleTemplate", component: CREWMatrixRuleTemplateComponent
  },
  
  {
    path: "Rotation_And_Assignment", component: CREWRotationAndAssignmentComponent
  },
  {
    path: "MatrixExceptionLog", component: CREWMatrixExceptionLogComponent
  },  
  {
    path: "MatrixRuleAssignment", component: CREWMatrixRuleAssignmentComponent
  },
  {
    path: "VesselAssignment", component: CREWVesselAssignmentComponent
  },
  
  {
    path: "EventPlanningIndex", component: CREWEventPlanningIndexComponent
  }, 
  {
    path: "PortageBill/PortageBill_Record_Summary", component: CREWACCPortageBillRecordSummaryComponent
  }, 
  {
    path: "PortageBill/Salary_Structure", component: CREWSalaryStructureComponent
  }, 
  {
    path: "PortageBill/Salary_Names", component: CREWACCPBSalaryNamesComponent
  },  
  {
    path: "PortageBill/RankSalaryAssignment", component: CREWRankSalaryAssignmentComponent
  },
   {
    path: "PortageBill/RankSalaryAssignment", component: CREWRankSalaryAssignmentComponent
  },
 
  {
    path: "PortageBill/RankSalaryAssignment", component:  CREWAllotmentIndexViewAndVerifyComponent
  },
  {
    path: "PortageBill/SeniorityManagement", component: CREWACCPBLIBSeniorityManagementComponent
  },
  {
    path: "PortageBill/AllotmentsMinimumValueIndex", component: CREWACCPBAllotmentsMinValueSetupComponent
  },
  {
    path: "PortageBill/PBVictuallingMealIndex", component: CREWPBVictuallingMealIndexComponent
  },
  {
    path: "PortageBill/PB_Victualling_Purchase_Index", component: CREWPBVictuallingPurchaseIndexComponent
  },
  {
    path: "PortageBill/PBVictuallingStdRates", component: CREWPBLIBPBVICTUALLINGComponent
  },
  {
    path: "PortageBill/PBBondedItems", component: CREWPBLIBPBBONDEDITEMSComponent
  },
    //Cadet_Log
    {
      path:"Cadet_Log/CadetTrainingPlan", component:CREWCadetLogTrainingPlanComponent
    },
    {
      path:"Cadet_Log/CadetLogType", component:CREWCadetLogTypeComponent
    },
    {
      path:"Cadet_Log/CadetLogChapters", component:CREWCadetLogChaptersComponent
    },
    {
      path:"Cadet_Log/CadetLogCategories", component:CREWCadetLogCategoriesComponent
    },
    {
      path:"Cadet_Log/CadetLogGrades", component:CREWCadetLogGradesComponent
    },
    {
      path:"Cadet_Log/CadetLogItems", component:CREWCadetLogItemsComponent
    },
    //Manning Agent 
    {
      path:"Manning_Agent/ManningFeeTransaction", component:CREWManningFeeTransactionComponent
    },
    {
      path:"Manning_Agent/ManningAnnualReport", component:CREWManningAnnualReportComponent
    },
    {
      path:"Manning_Agent/ManningFeeManagement", component:CREWManningFeeManagementComponent
    },
    {
      path:"Manning_Agent/ManningFeeStructure", component:CREWManningFeeStructureComponent
    },
    {
      path:"ContractTemplateIndex", component:CREWContractTemplateIndexComponent
    },
    {
      path:"CREW_Contract_Template_Vessel_Assignment", component:CREWContractTemplateVesselAssignmentComponent
    },
    {
      path:"FireArmsMovement/OPS_FAM_AmmunitionItem", component:OPSFAMAmmunitionItemComponent
    },
    {
      path:"CostRegistration", component:CREWCostRegistrationIndexComponent
    },
    {
      path:"QueryIndex", component:CREWQueryIndexComponent
    },
    {
      path:"MedicalIndex", component:CREWMedicalIndexComponent    
    },
    {
      path:"EvaluationIndex", component:CREWEvaluationIndexComponent
    },
    {
      path:"EvaluationCalender", component:CREWEvaluationCalenderComponent
    },
    


    
  
  



  
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CREWRoutingModule { }
