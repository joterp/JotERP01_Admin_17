import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HSEQRoutingModule } from './hseq-routing.module';

import { TECHRoutingModule } from '../tech/tech-routing.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { QuillModule } from 'ngx-quill';
import { HSEQInspectionLIBReferenceComponent } from './Library/hseq-inspection-lib-reference/hseq-inspection-lib-reference.component';
import { HSEQInspectionLIBReferenceAddComponent } from './Library/hseq-inspection-lib-reference/hseq-inspection-lib-reference-add/hseq-inspection-lib-reference-add.component';
import { HSEQRiskAssessmentWorkActivitiesComponent } from './Library/hseq-risk-assessment-work-activities/hseq-risk-assessment-work-activities.component';
import { HSEQRiskAssessmentWorkActivitiesAddComponent } from './Library/hseq-risk-assessment-work-activities/hseq-risk-assessment-work-activities-add/hseq-risk-assessment-work-activities-add.component';
import { HSEQRAActivityOperationControlComponent } from './Library/hseq-ra-activity-operation-control/hseq-ra-activity-operation-control.component';
import { HSEQRAActivityOperationControlAddComponent } from './Library/hseq-ra-activity-operation-control/hseq-ra-activity-operation-control-add/hseq-ra-activity-operation-control-add.component';
import { HSEQLIKELIHOODDETAILSComponent } from './Library/hseq-likelihood-details/hseq-likelihood-details.component';
import { HSEQLIKELIHOODDETAILSAddComponent } from './Library/hseq-likelihood-details/hseq-likelihood-details-add/hseq-likelihood-details-add.component';
import { HSEQDEGREEOFIMPACTComponent } from './Library/hseq-degree-of-impact/hseq-degree-of-impact.component';
import { HSEQDEGREEOFIMPACTADDComponent } from './Library/hseq-degree-of-impact/hseq-degree-of-impact-add/hseq-degree-of-impact-add.component';
import { HSEQRiskAssessmentAdditionalControlsComponent } from './Library/hseq-risk-assessment-additional-controls/hseq-risk-assessment-additional-controls.component';
import { HSEQRiskAssessmentReviewFrequencyComponent } from './Library/hseq-risk-assessment-review-frequency/hseq-risk-assessment-review-frequency.component';
import { HSEQRiskAssessmentAdditionalControlsAddComponent } from './Library/hseq-risk-assessment-additional-controls/hseq-risk-assessment-additional-controls-add/hseq-risk-assessment-additional-controls-add.component';
import { HSEQRiskAssessmentReviewFrequencyAddComponent } from './Library/hseq-risk-assessment-review-frequency/hseq-risk-assessment-review-frequency-add/hseq-risk-assessment-review-frequency-add.component';
import { HSEQISPSSecurityDrillComponent } from './Library/hseq-isps-security-drill/hseq-isps-security-drill.component';
import { HSEQISPSSecurityDrillAddComponent } from './Library/hseq-isps-security-drill/hseq-isps-security-drill-add/hseq-isps-security-drill-add.component';
import { HSEQAlertManageCategoryFormsComponent } from './Library/hseq-alert-manage-category-forms/hseq-alert-manage-category-forms.component';
import { HSEQAlertManageCategoryFormsAddComponent } from './Library/hseq-alert-manage-category-forms/hseq-alert-manage-category-forms-add/hseq-alert-manage-category-forms-add.component';
import { HSEQLIBVESSELKPIComponent } from './Library/hseq-lib-vessel-kpi/hseq-lib-vessel-kpi.component';
import { HSEQVESSELINSPECTIONSLIBComponent } from './Library/hseq-vessel-inspections-lib/hseq-vessel-inspections-lib.component';


@NgModule({
  declarations: [
    HSEQInspectionLIBReferenceComponent,
    HSEQInspectionLIBReferenceAddComponent,
    HSEQRiskAssessmentWorkActivitiesComponent,
    HSEQRiskAssessmentWorkActivitiesAddComponent,
    HSEQRAActivityOperationControlComponent,
    HSEQRAActivityOperationControlAddComponent,
    HSEQLIKELIHOODDETAILSComponent,
    HSEQLIKELIHOODDETAILSAddComponent,
    HSEQDEGREEOFIMPACTComponent,
    HSEQDEGREEOFIMPACTADDComponent,
    HSEQRiskAssessmentAdditionalControlsComponent,
    HSEQRiskAssessmentReviewFrequencyComponent,
    HSEQRiskAssessmentAdditionalControlsAddComponent,
    HSEQRiskAssessmentReviewFrequencyAddComponent,
    HSEQISPSSecurityDrillComponent,
    HSEQISPSSecurityDrillAddComponent,
    HSEQAlertManageCategoryFormsComponent,
    HSEQAlertManageCategoryFormsAddComponent,
    HSEQLIBVESSELKPIComponent,
    HSEQVESSELINSPECTIONSLIBComponent,
   
  ],
  imports: [
    CommonModule,
    HSEQRoutingModule,
    CommonModule,
    TECHRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    QuillModule.forRoot(),
  ]
})
export class HSEQModule { }
