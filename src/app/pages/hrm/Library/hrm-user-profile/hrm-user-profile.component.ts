import { Component, ElementRef, Input, Type, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ThemeService } from 'ng2-charts';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';
import { ApiService } from 'src/app/providers/services/ApiService';
import { CommonService } from 'src/app/providers/services/CommonService';
import { HrmDesignationComponent } from './hrm-designation/hrm-designation.component';
import { MatDialog } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthGuard } from 'src/app/providers/auth/AuthGuard';
import { MatTableDataSource } from '@angular/material/table';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HrmAdministrationComponent } from './hrm-administration/hrm-administration.component';
import { HrmDocumentsComponent } from './hrm-documents/hrm-documents.component';
import { HrmContractTemplateComponent } from './hrm-contract-template/hrm-contract-template.component';
import { HrmInterviewQuestionComponent } from './hrm-interview-question/hrm-interview-question.component';
import { HrmInterviewCategoryComponent } from './hrm-interview-category/hrm-interview-category.component';
import { HrmInterviewGradeComponent } from './hrm-interview-grade/hrm-interview-grade.component';
import { HrmInterviewQuestionSheetComponent } from './hrm-interview-question-sheet/hrm-interview-question-sheet.component';
import { HrmEvaluationCategoryComponent } from './hrm-evaluation-category/hrm-evaluation-category.component';
import { HrmEvaluationGradeComponent } from './hrm-evaluation-grade/hrm-evaluation-grade.component';
import { HrmEvaluationPeriodComponent } from './hrm-evaluation-period/hrm-evaluation-period.component';
import { HrmEvaluationQuestionComponent } from './hrm-evaluation-question/hrm-evaluation-question.component';
import { HrmEvaluationQuestionSheetComponent } from './hrm-evaluation-question-sheet/hrm-evaluation-question-sheet.component';
import { HrmClaimsCategoryComponent } from './hrm-claims-category/hrm-claims-category.component';
import { HrmClaimsApproversComponent } from './hrm-claims-approvers/hrm-claims-approvers.component';
import { HrmEmployeeSalaryStructureComponent } from './hrm-employee-salary-structure/hrm-employee-salary-structure.component';
import { HrmFinancialYearComponent } from './hrm-financial-year/hrm-financial-year.component';
import { HrmLeavesStandardsComponent } from './hrm-leaves-standards/hrm-leaves-standards.component';
import { HrmLeavesAssignmentComponent } from './hrm-leaves-assignment/hrm-leaves-assignment.component';
import { HrmBroadcastMessageComponent } from './hrm-broadcast-message/hrm-broadcast-message.component';
import { HrmHrPoliciesComponent } from './hrm-hr-policies/hrm-hr-policies.component';



@Component({
  selector: 'fury-hrm-user-profile',
  templateUrl: './hrm-user-profile.component.html',
  styleUrl: './hrm-user-profile.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HRMUserProfileComponent {
  pageSize = 10;

  dataSource: MatTableDataSource<any> | null;
  @ViewChild("TABLE") table: ElementRef;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  feedbackCategoryFilterFormGroup: UntypedFormGroup;

  openTabs: Set<string> = new Set(['HRM', 'Administration', 'Designation', 'Documents','Agreement Template','Interview Category','Interview Grade','Interview Question','Interview Question Sheet','Evaluation Category','Evaluation Grade','Evaluation Period','Evaluation Question','Evaluation Question Sheet','Claims Category','Claims Approvers','Salary Structure','Financial year','Leaves Standards','Leaves Assignment','Broadcast Message','HR Policies']);
 
  designationComponent: Type<HrmDesignationComponent> = HrmDesignationComponent;
  documentComponent: Type<HrmDocumentsComponent> = HrmDocumentsComponent;
  agreementTemplateComponent: Type<HrmContractTemplateComponent> = HrmContractTemplateComponent;
  interviewQuestioneComponent: Type<HrmInterviewQuestionComponent> = HrmInterviewQuestionComponent;
  interviewCategoryComponent: Type<HrmInterviewCategoryComponent> = HrmInterviewCategoryComponent;
  interviewGradeComponent: Type<HrmInterviewGradeComponent> = HrmInterviewGradeComponent;
  interviewQuestionSheetComponent: Type<HrmInterviewQuestionSheetComponent> = HrmInterviewQuestionSheetComponent;

  evaluationCategoryComponent: Type<HrmEvaluationCategoryComponent> = HrmEvaluationCategoryComponent;
  evaluationGradeComponent: Type<HrmEvaluationGradeComponent> = HrmEvaluationGradeComponent;
  evaluationPeriodComponent: Type<HrmEvaluationPeriodComponent> = HrmEvaluationPeriodComponent;
  evaluationQuestionComponent: Type<HrmEvaluationQuestionComponent> = HrmEvaluationQuestionComponent;
  evaluationQuestionSheetComponent: Type<HrmEvaluationQuestionSheetComponent> = HrmEvaluationQuestionSheetComponent;

  claimsCategoryComponent: Type<HrmClaimsCategoryComponent> = HrmClaimsCategoryComponent;
  claimsApproversComponent: Type<HrmClaimsApproversComponent> = HrmClaimsApproversComponent;

  salaryStructureComponent: Type<HrmEmployeeSalaryStructureComponent> = HrmEmployeeSalaryStructureComponent;
  financialYearComponent: Type<HrmFinancialYearComponent> = HrmFinancialYearComponent;
  // administrationComponent: Type<HrmAdministrationComponent> = HrmAdministrationComponent;

  leavesStandardComponent: Type<HrmLeavesStandardsComponent> = HrmLeavesStandardsComponent;
  leavesAssigmentComponent: Type<HrmLeavesAssignmentComponent> = HrmLeavesAssignmentComponent;
  broadcastMessageComponent: Type<HrmBroadcastMessageComponent> = HrmBroadcastMessageComponent;
  hrPoliciesComponent: Type<HrmHrPoliciesComponent> = HrmHrPoliciesComponent;
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private sidenavService: SidenavService,
    private titleService: Title,
    private api: ApiService,
    private common: CommonService,
    private auth: AuthGuard,
   private fb: UntypedFormBuilder
  )
  {
    this.titleService.setTitle(`HRM`);
  }

  @Input()
    columns: ListColumn[] = [
      { property: "Category_Name", visible: true, name: "Category_Name" },
      { property: "Action", visible: true, name: "Action" },
    ] as ListColumn[];

    get visibleColumns() {
      return this.columns
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    ngOnInit(): void {
      this.sidenavService.setCollapsed(true);
      this.feedbackCategoryFilterFormGroup = this.fb.group({
        Category_Name: [""],
        drpStatus: ["1"]
      });
      this.dataSource = new MatTableDataSource();
    }
    ngOnDestroy() {
      this.sidenavService.setCollapsed(false);
    }
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    clearFilter() {
      this.loading = true;
      this.feedbackCategoryFilterFormGroup.reset();
      this.feedbackCategoryFilterFormGroup.get("STATUS").patchValue("1");
      this.FetchAllData();
    }
    FetchAllData() {
      throw new Error('Method not implemented.');
    }

    closeTab(tabName: string) {
      this.openTabs.delete(tabName);
    }
  
    isTabOpen(tabName: string): boolean {
      return this.openTabs.has(tabName);
    }
    

    goto(buttonName: string) {
      const routeMap = {
        'Hrm_Designation': 'HRM/Library/hrm-user-profile/Hrm_Designation',
        'HRM_Documents': 'HRM/Library/hrm-user-profile/HRM_Documents',
        'HRM_AgreementTemplate': 'HRM/Library/hrm-user-profile/HRM_AgreementTemplate',
        'HRM_InterviewQuestion': 'HRM/Library/hrm-user-profile/HRM_InterviewQuestion',
        'HRM_InterviewCategory': 'HRM/Library/hrm-user-profile/HRM_InterviewCategory',
        'HRM_InterviewGrade': 'HRM/Library/hrm-user-profile/HRM_InterviewGrade',
        'HRM_InterviewQuestionSheet': 'HRM/Library/hrm-user-profile/HRM_InterviewQuestionSheet',
        'HRM_EvaluationCategory': 'HRM/Library/hrm-user-profile/HRM_EvaluationCategory',
        'HRM_EvaluationGrade': 'HRM/Library/hrm-user-profile/HRM_EvaluationGrade',
        'HRM_EvaluationPeriod': 'HRM/Library/hrm-user-profile/HRM_EvaluationPeriod',
        'HRM_EvaluationQuestion': 'HRM/Library/hrm-user-profile/HRM_EvaluationQuestion',
        'HRM_EvaluationQuestionSheet': 'HRM/Library/hrm-user-profile/HRM_EvaluationQuestionSheet',
        'HRM_ClaimsCategory': 'HRM/Library/hrm-user-profile/HRM_ClaimsCategory',
        'HRM_ClaimsApprovers': 'HRM/Library/hrm-user-profile/HRM_ClaimsApprovers',
        'HRM_EmployeeSalaryStructure': 'HRM/Library/hrm-user-profile/HRM_EmployeeSalaryStructure',
        'HRM_Financial_Year': 'HRM/Library/hrm-user-profile/HRM_Financial_Year',
        'HRM_LeavesStandards': 'HRM/Library/hrm-user-profile/HRM_LeavesStandards',
        'HRM_LeavesAssignment': 'HRM/Library/hrm-user-profile/HRM_LeavesAssignment',
        'HRM_BroadcatMessage': 'HRM/Library/hrm-user-profile/HRM_BroadcatMessage',
        'HRM_HRPolicies': 'HRM/Library/hrm-user-profile/HRM_HRPolicies',
      };
  
      const route = routeMap[buttonName];
      if (route) {
        this.router.navigate([route]);
      }
    
    
    }


}
