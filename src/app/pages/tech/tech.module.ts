import { NgModule } from '@angular/core';


import { TECHRoutingModule } from './tech-routing.module';
import { TECHPMSJobStatusComponent } from './tech-pms-job-status/tech-pms-job-status.component';
import { QuillModule } from "ngx-quill";
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TECHPMSJobStatusSFIListComponent } from './tech-pms-job-status/tech-pms-job-status-sfi-list/tech-pms-job-status-sfi-list.component';
import { TECHPMSJobStatusEditComponent } from './tech-pms-job-status/tech-pms-job-status-edit/tech-pms-job-status-edit.component';
import { TECHAddPMSFolloupModalComponent } from './tech-pms-job-status/tech-add-pms-folloup-modal/tech-add-pms-folloup-modal.component';
import { TECHAddAttachmentsComponent } from './tech-pms-job-status/tech-add-attachments/tech-add-attachments.component';
import { TECHEditSparePartItemComponent } from './tech-pms-job-status/tech-edit-spare-part-item/tech-edit-spare-part-item.component';
import { TECHAddSparePartsComponent } from './tech-pms-job-status/tech-add-spare-parts/tech-add-spare-parts.component';
import { TECHPMSFollowupIndexComponent } from './tech-pms-followup-index/tech-pms-followup-index.component';
import { TECHPMSUpdateRunningStatusComponent } from './tech-pms-update-running-status/tech-pms-update-running-status.component';
import { TECHPMSDefermentJobIndexComponent } from './tech-pms-deferment-job-index/tech-pms-deferment-job-index.component';
import { TECHImportPMSDetailsComponent } from './tech-pms-job-status/tech-import-pms-details/tech-import-pms-details.component';
import { TECHPMSJobHistoryComponent } from './tech-pms-job-status/tech-pms-job-history/tech-pms-job-history.component';
import { TECHRunningHoursHistoryComponent } from './tech-pms-job-status/tech-running-hours-history/tech-running-hours-history.component';
import { TECHMachineryDetailsComponent } from './tech-pms-job-status/tech-machinery-details/tech-machinery-details.component';
import { TECHDefectListIndexComponent } from './tech-defect-list-index/tech-defect-list-index.component';
import { TECHDefectListIndexAddComponent } from './tech-defect-list-index/tech-defect-list-index-add/tech-defect-list-index-add.component';
import { TECHDefectListIndexEditComponent } from './tech-defect-list-index/tech-defect-list-index-edit/tech-defect-list-index-edit.component';
import { TECHMailDefectModalComponent } from './tech-defect-list-index/tech-mail-defect-modal/tech-mail-defect-modal.component';
import { TECHSendMailModalComponent } from './tech-defect-list-index/tech-send-mail-modal/tech-send-mail-modal.component';
import { TECHVMPPMSChangeRequestIndexComponent } from './tech-vmp-pms-change-request-index/tech-vmp-pms-change-request-index.component';
import { TECHEngineLogIndexComponent } from './tech-engine-log-index/tech-engine-log-index.component';
import { TECHEngineLogDetailsComponent } from './tech-engine-log-index/tech-engine-log-details/tech-engine-log-details.component';
import { TECHLubeOilSampleLabTestingLogComponent } from './tech-lube-oil-sample-lab-testing-log/tech-lube-oil-sample-lab-testing-log.component';
import { TECHDMMMeetingIndexComponent } from './tech-dmm-meeting-index/tech-dmm-meeting-index.component';
import { TECHDMMMeetingIndexAddComponent } from './tech-dmm-meeting-index/tech-dmm-meeting-index-add/tech-dmm-meeting-index-add.component';
import { CommonModule } from '@angular/common';
import { TECHDTLWINCHIndexComponent } from './tech-dtl-winch-index/tech-dtl-winch-index.component';
import { LegendProcedureComponent } from './tech-dtl-winch-index/legend-procedure/legend-procedure.component';
import { TechDtlWinchIndexAddOpenComponent } from './tech-dtl-winch-index/tech-dtl-winch-index-add-open/tech-dtl-winch-index-add-open.component';
import { TECHLibraryPMSComponent } from './Library/tech-library-pms/tech-library-pms.component';
import { TECHLibraryPMSEditComponent } from './Library/tech-library-pms/tech-library-pms-edit/tech-library-pms-edit.component';
import { InformationModelComponent } from './Library/tech-library-pms/information-model/information-model.component';
import { CopyJobsModelComponent } from './Library/tech-library-pms/copy-jobs-model/copy-jobs-model.component';
import { TECHLIBPMSJOBLISTEXCELIMPORTComponent } from './Library/tech-lib-pms-job-list-excel-import/tech-lib-pms-job-list-excel-import.component';
import { TECHLIBCRITICALALARMComponent } from './Library/tech-lib-critical-alarm/tech-lib-critical-alarm.component';
import { TECHLIBWinchComponent } from './Library/tech-lib-winch/tech-lib-winch.component';
import { TECHLIBCRITICALALARMEditComponent } from './Library/tech-lib-critical-alarm/tech-lib-critical-alarm-edit/tech-lib-critical-alarm-edit.component';
import { TECHLIBWinchEditComponent } from './Library/tech-lib-winch/tech-lib-winch-edit/tech-lib-winch-edit.component';
import { TechLibPmsJobListExcelImportAlertComponent } from './Library/tech-lib-pms-job-list-excel-import/tech-lib-pms-job-list-excel-import-alert/tech-lib-pms-job-list-excel-import-alert.component';
import { TECHDTLCRITICALALARMINDEXComponent } from './tech-dtl-critical-alarm-index/tech-dtl-critical-alarm-index.component';
import { TECHDTLCRITICALALARMINDEXAddComponent } from './tech-dtl-critical-alarm-index/tech-dtl-critical-alarm-index-add/tech-dtl-critical-alarm-index-add.component';
import { TECHTimelapseIndexComponent } from './tech-timelapse-index/tech-timelapse-index.component';
import { ADDNEWTLComponent } from './tech-timelapse-index/add-new-tl/add-new-tl.component';
import { IMPORTDETAILSComponent } from './tech-timelapse-index/import-details/import-details.component';
import { EXPORTDETAILSComponent } from './tech-timelapse-index/export-details/export-details.component';
import { COMPARETIMELAPSEComponent } from './tech-timelapse-index/compare-timelapse/compare-timelapse.component';
import { TECHWeeklyWorkIndexComponent } from './tech-weekly-work-index/tech-weekly-work-index.component';
import { TECHWeeklyWorkIndexAddComponent } from './tech-weekly-work-index/tech-weekly-work-index-add/tech-weekly-work-index-add.component';
import { ReportDetailsComponent } from './tech-weekly-work-index/tech-weekly-work-index-add/report-details/report-details.component';
import { TECHSFILISTComponent } from './Library/tech-sfi-list/tech-sfi-list.component';


@NgModule({
  declarations: [
    TECHPMSJobStatusComponent,
    TECHPMSJobStatusSFIListComponent,
    TECHPMSJobStatusEditComponent,
    TECHAddPMSFolloupModalComponent,
    TECHAddAttachmentsComponent,
    TECHEditSparePartItemComponent,
    TECHAddSparePartsComponent,
    TECHPMSFollowupIndexComponent,
    TECHPMSUpdateRunningStatusComponent,
    TECHPMSDefermentJobIndexComponent,
    TECHImportPMSDetailsComponent,
    TECHPMSJobHistoryComponent,
    TECHRunningHoursHistoryComponent,
    TECHMachineryDetailsComponent,
    TECHDefectListIndexComponent,
    TECHDefectListIndexAddComponent,
    TECHDefectListIndexEditComponent,
    TECHMailDefectModalComponent,
    TECHSendMailModalComponent,
    TECHVMPPMSChangeRequestIndexComponent,
    TECHEngineLogIndexComponent,
    TECHEngineLogDetailsComponent,
    TECHLubeOilSampleLabTestingLogComponent,
    TECHDMMMeetingIndexComponent,
    TECHDMMMeetingIndexAddComponent,    
    LegendProcedureComponent,
    TECHPMSJobStatusComponent,
    TECHPMSJobStatusSFIListComponent,
    TECHPMSJobStatusEditComponent,
    TECHLibraryPMSComponent,
    TECHLibraryPMSEditComponent,
    InformationModelComponent,
    CopyJobsModelComponent,
    TECHLIBPMSJOBLISTEXCELIMPORTComponent,
    TECHLIBCRITICALALARMComponent,
    TECHLIBWinchComponent,
    TECHSFILISTComponent,
    TECHLIBCRITICALALARMEditComponent,
    TECHLIBWinchEditComponent,
    TechLibPmsJobListExcelImportAlertComponent,
    TECHDTLCRITICALALARMINDEXComponent,
    TECHDTLCRITICALALARMINDEXAddComponent,
    TechDtlWinchIndexAddOpenComponent,
    LegendProcedureComponent,
    TECHWeeklyWorkIndexComponent,
    TECHWeeklyWorkIndexAddComponent,
    ReportDetailsComponent,
    TECHTimelapseIndexComponent,
    ADDNEWTLComponent,
    TECHDTLWINCHIndexComponent,
    IMPORTDETAILSComponent,
    EXPORTDETAILSComponent,
    COMPARETIMELAPSEComponent
  //  
  ],
  imports: [
    CommonModule,
    TECHRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    QuillModule.forRoot(),
  ]
})
export class TECHModule { }
