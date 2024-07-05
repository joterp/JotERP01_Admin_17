import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HSEQInspectionLIBReferenceComponent } from './Library/hseq-inspection-lib-reference/hseq-inspection-lib-reference.component';
import { HSEQRiskAssessmentWorkActivitiesComponent } from './Library/hseq-risk-assessment-work-activities/hseq-risk-assessment-work-activities.component';
import { HSEQRAActivityOperationControlComponent } from './Library/hseq-ra-activity-operation-control/hseq-ra-activity-operation-control.component';
import { HSEQLIKELIHOODDETAILSComponent } from './Library/hseq-likelihood-details/hseq-likelihood-details.component';
import { HSEQDEGREEOFIMPACTComponent } from './Library/hseq-degree-of-impact/hseq-degree-of-impact.component';
import { HSEQRiskAssessmentAdditionalControlsComponent } from './Library/hseq-risk-assessment-additional-controls/hseq-risk-assessment-additional-controls.component';
import { HSEQRiskAssessmentReviewFrequencyComponent } from './Library/hseq-risk-assessment-review-frequency/hseq-risk-assessment-review-frequency.component';
import { HSEQISPSSecurityDrillComponent } from './Library/hseq-isps-security-drill/hseq-isps-security-drill.component';
import { HSEQAlertManageCategoryFormsComponent } from './Library/hseq-alert-manage-category-forms/hseq-alert-manage-category-forms.component';
import { HSEQLIBVESSELKPIComponent } from './Library/hseq-lib-vessel-kpi/hseq-lib-vessel-kpi.component';
import { HSEQVESSELINSPECTIONSLIBComponent } from './Library/hseq-vessel-inspections-lib/hseq-vessel-inspections-lib.component';
import { HseqInspectionQRCodeListComponent } from './Library/hseq-inspection-qr-code-list/hseq-inspection-qr-code-list.component';


const routes: Routes = [
  {
    path:"Library/InspectionReference", component:HSEQInspectionLIBReferenceComponent
  },
  {
    path:"Library/RiskAssessment", component:HSEQRiskAssessmentWorkActivitiesComponent
  },
  {
    path:"Library/RAAcitivityOperationControl", component:HSEQRAActivityOperationControlComponent
  }, 
  {
    path:"Library/LikehoodDetails", component:HSEQLIKELIHOODDETAILSComponent
  },
  {
    path:"Library/DegreeOfImpact", component:HSEQDEGREEOFIMPACTComponent
  },
  {
    path:"Library/AdditionalControls", component:HSEQRiskAssessmentAdditionalControlsComponent
  },    
  {
    path:"Library/ReviewFrequency", component:HSEQRiskAssessmentReviewFrequencyComponent  
  },
  {
    path:"Library/SecurityDrill", component:HSEQISPSSecurityDrillComponent    
  },
  {
    path:"Library/AlertManageCategoryForms", component:HSEQAlertManageCategoryFormsComponent
  },
  {
    path:"Library/VesselKPILibrary", component:HSEQLIBVESSELKPIComponent
  },
  {
    path:"Library/VesselInspectionLibrary", component:HSEQVESSELINSPECTIONSLIBComponent
  },  
  {
    path:"Library/VesselInspectionQRCodes", component:HseqInspectionQRCodeListComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HSEQRoutingModule { }
