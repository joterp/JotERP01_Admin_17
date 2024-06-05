import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SURVEYCertificateIndexComponent } from './survey-certificate-index/survey-certificate-index.component';
import { SURVEYCategoriesComponent } from './Library/survey-categories/survey-categories.component';
import { SURVEYTenureComponent } from './Library/survey-tenure/survey-tenure.component';
import { SURVEYCertificateComponent } from './Library/survey-certificate/survey-certificate.component';
import { SURVEYVesselAssignmentComponent } from './Library/survey-vessel-assignment/survey-vessel-assignment.component';



const routes: Routes = [
  { path: 'SURVEY_Certificate_Index', component: SURVEYCertificateIndexComponent },

  { path: 'Library/SURVEY_Categories', component: SURVEYCategoriesComponent },

  { path: 'Library/SURVEY_Tenure', component: SURVEYTenureComponent },

  { path: 'Library/SURVEY_Certificate', component: SURVEYCertificateComponent },

  { path: 'Library/SURVEY_Vessel_Assignment', component: SURVEYVesselAssignmentComponent }

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Survey_CertificateRoutingModule { }
