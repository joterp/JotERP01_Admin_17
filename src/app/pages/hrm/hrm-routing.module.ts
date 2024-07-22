import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HRMUserProfileComponent } from './Library/hrm-user-profile/hrm-user-profile.component';
import { HrmDesignationComponent } from './Library/hrm-user-profile/hrm-designation/hrm-designation.component';
import { HrmAdministrationComponent } from './Library/hrm-user-profile/hrm-administration/hrm-administration.component';
import { HrmDocumentsComponent } from './Library/hrm-user-profile/hrm-documents/hrm-documents.component';
import { HrmInterviewQuestionComponent } from './Library/hrm-user-profile/hrm-interview-question/hrm-interview-question.component';
import { HrmInterviewCategoryComponent } from './Library/hrm-user-profile/hrm-interview-category/hrm-interview-category.component';
import { HrmInterviewGradeComponent } from './Library/hrm-user-profile/hrm-interview-grade/hrm-interview-grade.component';
import { HrmInterviewQuestionSheetComponent } from './Library/hrm-user-profile/hrm-interview-question-sheet/hrm-interview-question-sheet.component';
import { HrmEvaluationCategoryComponent } from './Library/hrm-user-profile/hrm-evaluation-category/hrm-evaluation-category.component';
import { HrmEvaluationGradeComponent } from './Library/hrm-user-profile/hrm-evaluation-grade/hrm-evaluation-grade.component';
import { HrmEvaluationPeriodComponent } from './Library/hrm-user-profile/hrm-evaluation-period/hrm-evaluation-period.component';
import { HrmEvaluationQuestionComponent } from './Library/hrm-user-profile/hrm-evaluation-question/hrm-evaluation-question.component';
import { HrmEvaluationQuestionSheetComponent } from './Library/hrm-user-profile/hrm-evaluation-question-sheet/hrm-evaluation-question-sheet.component';
import { HrmClaimsCategoryComponent } from './Library/hrm-user-profile/hrm-claims-category/hrm-claims-category.component';
import { HrmClaimsApproversComponent } from './Library/hrm-user-profile/hrm-claims-approvers/hrm-claims-approvers.component';
import { HrmEmployeeSalaryStructureComponent } from './Library/hrm-user-profile/hrm-employee-salary-structure/hrm-employee-salary-structure.component';
import { HrmFinancialYearComponent } from './Library/hrm-user-profile/hrm-financial-year/hrm-financial-year.component';
import { HrmLeavesStandardsComponent } from './Library/hrm-user-profile/hrm-leaves-standards/hrm-leaves-standards.component';
import { HrmLeavesAssignmentComponent } from './Library/hrm-user-profile/hrm-leaves-assignment/hrm-leaves-assignment.component';
import { HrmBroadcastMessageComponent } from './Library/hrm-user-profile/hrm-broadcast-message/hrm-broadcast-message.component';
import { HrmHrPoliciesComponent } from './Library/hrm-user-profile/hrm-hr-policies/hrm-hr-policies.component';



const routes: Routes = [
  {
    path:"Library/HRM_UserProfile", component:HRMUserProfileComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_Documents", component:HrmDocumentsComponent,
 
  },

  {
    path:"Library/hrm-user-profile/Hrm_Designation", component:HrmDesignationComponent,
 
  },
  {
    path:"Library/hrm-user-profile/Administration", component:HrmAdministrationComponent,
  },
  {
    path:"Library/hrm-user-profile/HRM_AgreementTemplate", component:HrmDocumentsComponent
  },

  {
    path:"Library/hrm-user-profile/HRM_InterviewQuestion", component:HrmInterviewQuestionComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_InterviewCategory", component:HrmInterviewCategoryComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_InterviewGrade", component:HrmInterviewGradeComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_InterviewQuestionSheet", component:HrmInterviewQuestionSheetComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EvaluationCategory", component:HrmEvaluationCategoryComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EvaluationGrade", component:HrmEvaluationGradeComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EvaluationPeriod", component:HrmEvaluationPeriodComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EvaluationQuestion", component:HrmEvaluationQuestionComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EvaluationQuestionSheet", component:HrmEvaluationQuestionSheetComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_ClaimsCategory", component:HrmClaimsCategoryComponent
  }, 
  {
    path:"Library/hrm-user-profile/HRM_ClaimsApprovers", component:HrmClaimsApproversComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_EmployeeSalaryStructure", component:HrmEmployeeSalaryStructureComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_Financial_Year", component:HrmFinancialYearComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_LeavesStandards", component:HrmLeavesStandardsComponent
  },
  {
    path:"Library/hrm-user-profile/HRM_LeavesAssignment", component:HrmLeavesAssignmentComponent
  },   
  {
    path:"Library/hrm-user-profile/HRM_BroadcatMessage", component:HrmBroadcastMessageComponent
  }, 
  {
    path:"Library/hrm-user-profile/HRM_HRPolicies", component:HrmHrPoliciesComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrmRoutingModule { }
