import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';



import { QuillModule } from 'ngx-quill';


import { CreateLinkOpenComponent } from './survey-certificate-index/create-link-open/create-link-open.component';
import { SendAttachmentModelComponent } from './survey-certificate-index/send-attachment-model/send-attachment-model.component';
import { SURVEYCertificateIndexComponent } from './survey-certificate-index/survey-certificate-index.component';
import { SURVEYCategoriesComponent } from './Library/survey-categories/survey-categories.component';
import { SurveyCategoriesEditComponent } from './Library/survey-categories/survey-categories-edit/survey-categories-edit.component';
import { SURVEYTenureComponent } from './Library/survey-tenure/survey-tenure.component';
import { SURVEYTenureEditComponent } from './Library/survey-tenure/survey-tenure-edit/survey-tenure-edit.component';
import { SURVEYCertificateComponent } from './Library/survey-certificate/survey-certificate.component';
import { SURVEYCertificateEditComponent } from './Library/survey-certificate/survey-certificate-edit/survey-certificate-edit.component';
import { SURVEYVesselAssignmentComponent } from './Library/survey-vessel-assignment/survey-vessel-assignment.component';
import { Survey_CertificateRoutingModule } from './Survey_Certificate-routing.module';
import { SORTCertificateModelComponent } from './Library/survey-certificate/sort-certificate-model/sort-certificate-model.component';
import { CopyCertificatesModelComponent } from './Library/survey-vessel-assignment/copy-certificates-model/copy-certificates-model.component';






@NgModule({
  declarations: [
SURVEYCertificateIndexComponent,
CreateLinkOpenComponent,
SendAttachmentModelComponent,
SURVEYCategoriesComponent,
SurveyCategoriesEditComponent,
SURVEYTenureComponent,
SURVEYTenureEditComponent,
SURVEYCertificateComponent,
SURVEYCertificateEditComponent,
CopyCertificatesModelComponent,
SURVEYVesselAssignmentComponent,
SORTCertificateModelComponent
    
  ],
  imports: [
    CommonModule,
    Survey_CertificateRoutingModule,   
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ListModule,
    BreadcrumbsModule,
    FuryCardModule,
    HighlightModule,
    QuillModule.forRoot(),
    
  ],

})
export class Survey_CertificateModule { }
