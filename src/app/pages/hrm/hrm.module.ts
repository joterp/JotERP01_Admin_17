import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmRoutingModule } from './hrm-routing.module';
import { HRMUserProfileComponent } from './Library/hrm-user-profile/hrm-user-profile.component';
import { TECHRoutingModule } from '../tech/tech-routing.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { QuillModule } from 'ngx-quill';
import { HrmDesignationComponent } from './Library/hrm-user-profile/hrm-designation/hrm-designation.component';
import { HrmDesignationAddComponent } from './Library/hrm-user-profile/hrm-designation/hrm-designation-add/hrm-designation-add.component';
import { HrmAdministrationComponent } from './Library/hrm-user-profile/hrm-administration/hrm-administration.component';
import { HrmDocumentsComponent } from './Library/hrm-user-profile/hrm-documents/hrm-documents.component';
import { HrmDocumentsAddComponent } from './Library/hrm-user-profile/hrm-documents/hrm-documents-add/hrm-documents-add.component';
import { HrmContractTemplateComponent } from './Library/hrm-user-profile/hrm-contract-template/hrm-contract-template.component';
import { HrmContractTemplateAddComponent } from './Library/hrm-user-profile/hrm-contract-template/hrm-contract-template-add/hrm-contract-template-add.component';
import { HrmInterviewQuestionComponent } from './Library/hrm-user-profile/hrm-interview-question/hrm-interview-question.component';
import { HrmInterviewQuestionAddComponent } from './Library/hrm-user-profile/hrm-interview-question/hrm-interview-question-add/hrm-interview-question-add.component';
import { HrmInterviewCategoryComponent } from './Library/hrm-user-profile/hrm-interview-category/hrm-interview-category.component';
import { HrmInterviewCategoryAddComponent } from './Library/hrm-user-profile/hrm-interview-category/hrm-interview-category-add/hrm-interview-category-add.component';
import { HrmInterviewGradeComponent } from './Library/hrm-user-profile/hrm-interview-grade/hrm-interview-grade.component';
import { HrmInterviewGradeAddComponent } from './Library/hrm-user-profile/hrm-interview-grade/hrm-interview-grade-add/hrm-interview-grade-add.component';
import { HrmEvaluationCategoryComponent } from './Library/hrm-user-profile/hrm-evaluation-category/hrm-evaluation-category.component';
import { HrmEvaluationGradeComponent } from './Library/hrm-user-profile/hrm-evaluation-grade/hrm-evaluation-grade.component';
import { HrmEvaluationPeriodComponent } from './Library/hrm-user-profile/hrm-evaluation-period/hrm-evaluation-period.component';
import { HrmEvaluationQuestionComponent } from './Library/hrm-user-profile/hrm-evaluation-question/hrm-evaluation-question.component';
import { HrmInterviewQuestionSheetComponent } from './Library/hrm-user-profile/hrm-interview-question-sheet/hrm-interview-question-sheet.component';
import { HrmEvaluationCategoryAddComponent } from './Library/hrm-user-profile/hrm-evaluation-category/hrm-evaluation-category-add/hrm-evaluation-category-add.component';
import { HrmEvaluationGradeAddComponent } from './Library/hrm-user-profile/hrm-evaluation-grade/hrm-evaluation-grade-add/hrm-evaluation-grade-add.component';
import { HrmEvaluationPeriodAddComponent } from './Library/hrm-user-profile/hrm-evaluation-period/hrm-evaluation-period-add/hrm-evaluation-period-add.component';
import { HrmInterviewQuestionSheetAddComponent } from './Library/hrm-user-profile/hrm-interview-question-sheet/hrm-interview-question-sheet-add/hrm-interview-question-sheet-add.component';
import { HrmEvaluationQuestionAddComponent } from './Library/hrm-user-profile/hrm-evaluation-question/hrm-evaluation-question-add/hrm-evaluation-question-add.component';
import { HrmEvaluationQuestionSheetComponent } from './Library/hrm-user-profile/hrm-evaluation-question-sheet/hrm-evaluation-question-sheet.component';
import { HrmEvaluationQuestionSheetAddComponent } from './Library/hrm-user-profile/hrm-evaluation-question-sheet/hrm-evaluation-question-sheet-add/hrm-evaluation-question-sheet-add.component';
import { HrmClaimsCategoryComponent } from './Library/hrm-user-profile/hrm-claims-category/hrm-claims-category.component';
import { HrmClaimsCategoryAddComponent } from './Library/hrm-user-profile/hrm-claims-category/hrm-claims-category-add/hrm-claims-category-add.component';
import { HrmClaimsApproversComponent } from './Library/hrm-user-profile/hrm-claims-approvers/hrm-claims-approvers.component';
import { HrmClaimsApproverAddComponent } from './Library/hrm-user-profile/hrm-claims-approvers/hrm-claims-approver-add/hrm-claims-approver-add.component';
import { HrmEmployeeSalaryStructureComponent } from './Library/hrm-user-profile/hrm-employee-salary-structure/hrm-employee-salary-structure.component';
import { HrmEmployeeSalaryStructureAddComponent } from './Library/hrm-user-profile/hrm-employee-salary-structure/hrm-employee-salary-structure-add/hrm-employee-salary-structure-add.component';
import { HrmFinancialYearComponent } from './Library/hrm-user-profile/hrm-financial-year/hrm-financial-year.component';
import { HrmFinancialYearAddComponent } from './Library/hrm-user-profile/hrm-financial-year/hrm-financial-year-add/hrm-financial-year-add.component';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { HrmLeavesStandardsComponent } from './Library/hrm-user-profile/hrm-leaves-standards/hrm-leaves-standards.component';
import { HrmLeavesStandardsAddComponent } from './Library/hrm-user-profile/hrm-leaves-standards/hrm-leaves-standards-add/hrm-leaves-standards-add.component';
import { HrmLeavesAssignmentComponent } from './Library/hrm-user-profile/hrm-leaves-assignment/hrm-leaves-assignment.component';
import { HrmLeavesAssignmentAddComponent } from './Library/hrm-user-profile/hrm-leaves-assignment/hrm-leaves-assignment-add/hrm-leaves-assignment-add.component';
import { HrmBroadcastMessageComponent } from './Library/hrm-user-profile/hrm-broadcast-message/hrm-broadcast-message.component';
import { HrmBroadcastMessageAddComponent } from './Library/hrm-user-profile/hrm-broadcast-message/hrm-broadcast-message-add/hrm-broadcast-message-add.component';
import { HrmHrPoliciesComponent } from './Library/hrm-user-profile/hrm-hr-policies/hrm-hr-policies.component';

@NgModule({
  declarations: [
    HRMUserProfileComponent,
    HrmDesignationComponent,
    HrmDesignationAddComponent,
    HrmAdministrationComponent,
    HrmDocumentsComponent,
    HrmDocumentsAddComponent,
    HrmContractTemplateComponent,
    HrmContractTemplateAddComponent,
    HrmInterviewQuestionComponent,
    HrmInterviewQuestionAddComponent,
    HrmInterviewCategoryComponent,
    HrmInterviewCategoryAddComponent,
    HrmInterviewGradeComponent,
    HrmInterviewGradeAddComponent,
    HrmEvaluationCategoryComponent,
    HrmEvaluationCategoryAddComponent,
    HrmEvaluationGradeComponent,
    HrmEvaluationGradeAddComponent,
    HrmEvaluationPeriodComponent,
    HrmEvaluationPeriodAddComponent,
    HrmEvaluationQuestionComponent,
    HrmEvaluationQuestionComponent,
    HrmInterviewQuestionSheetComponent,
    HrmInterviewQuestionSheetAddComponent,
    HrmEvaluationQuestionAddComponent ,
    HrmEvaluationQuestionSheetComponent  ,
    HrmEvaluationQuestionSheetAddComponent,
    HrmClaimsCategoryComponent,
    HrmClaimsCategoryAddComponent,
    HrmClaimsApproversComponent,
    HrmClaimsApproverAddComponent,
    HrmEmployeeSalaryStructureComponent,
    HrmEmployeeSalaryStructureAddComponent,
    HrmFinancialYearComponent,
    HrmFinancialYearAddComponent,
    HrmLeavesStandardsComponent,
    HrmLeavesStandardsAddComponent,
    HrmLeavesAssignmentComponent,
    HrmLeavesAssignmentAddComponent,
    HrmBroadcastMessageComponent,
    HrmBroadcastMessageAddComponent,
    HrmHrPoliciesComponent      
  ],
  imports: [
    CommonModule,
    HrmRoutingModule,
    CommonModule,
    TECHRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    NgxMatSelectSearchModule,
    NgxMatDatetimePickerModule,
    QuillModule.forRoot(),
  ]
})
export class HrmModule { }
