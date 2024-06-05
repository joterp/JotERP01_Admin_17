import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TECHPMSJobStatusComponent } from './tech-pms-job-status/tech-pms-job-status.component';
import { TECHPMSJobStatusEditComponent } from './tech-pms-job-status/tech-pms-job-status-edit/tech-pms-job-status-edit.component';
import { TECHPMSFollowupIndexComponent } from './tech-pms-followup-index/tech-pms-followup-index.component';
import { TECHPMSUpdateRunningStatusComponent } from './tech-pms-update-running-status/tech-pms-update-running-status.component';
import { TECHPMSDefermentJobIndexComponent } from './tech-pms-deferment-job-index/tech-pms-deferment-job-index.component';
import { TECHPMSJobHistoryComponent } from './tech-pms-job-status/tech-pms-job-history/tech-pms-job-history.component';
import { TECHDefectListIndexComponent } from './tech-defect-list-index/tech-defect-list-index.component';
import { TECHDefectListIndexEditComponent } from './tech-defect-list-index/tech-defect-list-index-edit/tech-defect-list-index-edit.component';
import { TECHVMPPMSChangeRequestIndexComponent } from './tech-vmp-pms-change-request-index/tech-vmp-pms-change-request-index.component';
import { TECHEngineLogIndexComponent } from './tech-engine-log-index/tech-engine-log-index.component';
import { TECHEngineLogDetailsComponent } from './tech-engine-log-index/tech-engine-log-details/tech-engine-log-details.component';
import { TECHLubeOilSampleLabTestingLogComponent } from './tech-lube-oil-sample-lab-testing-log/tech-lube-oil-sample-lab-testing-log.component';
import { TECHDMMMeetingIndexComponent } from './tech-dmm-meeting-index/tech-dmm-meeting-index.component';
import { TECHDTLWINCHIndexComponent } from './tech-dtl-winch-index/tech-dtl-winch-index.component';
import { TECHLibraryPMSComponent } from './Library/tech-library-pms/tech-library-pms.component';
import { TECHLIBPMSJOBLISTEXCELIMPORTComponent } from './Library/tech-lib-pms-job-list-excel-import/tech-lib-pms-job-list-excel-import.component';
import { TECHLIBCRITICALALARMComponent } from './Library/tech-lib-critical-alarm/tech-lib-critical-alarm.component';
import { TECHLIBWinchComponent } from './Library/tech-lib-winch/tech-lib-winch.component';
import { TECHSFILISTComponent } from './Library/tech-sfi-list/tech-sfi-list.component';
import { TECHDTLCRITICALALARMINDEXComponent } from './tech-dtl-critical-alarm-index/tech-dtl-critical-alarm-index.component';
import { TECHTimelapseIndexComponent } from './tech-timelapse-index/tech-timelapse-index.component';
import { TECHWeeklyWorkIndexComponent } from './tech-weekly-work-index/tech-weekly-work-index.component';
import { TECHWeeklyWorkIndexAddComponent } from './tech-weekly-work-index/tech-weekly-work-index-add/tech-weekly-work-index-add.component';
import { COMPARETIMELAPSEComponent } from './tech-timelapse-index/compare-timelapse/compare-timelapse.component';



const routes: Routes = [
  {
    path:"TECH_PMS_JobStatus", component:TECHPMSJobStatusComponent
  },
  {
    path:"TECH_PMS_JobStatus_Edit", component:TECHPMSJobStatusEditComponent
  },
  {
    path:"TECH_PMS_FOLLOWUP_INDEX", component: TECHPMSFollowupIndexComponent
  },
  {
    path:"TECH_PMS_UpdateRunningStatus", component: TECHPMSUpdateRunningStatusComponent
  },
  {
    path:"PMS_Deferment_Job_Index", component: TECHPMSDefermentJobIndexComponent
  },
  {
    path:"TECH_PMS_JobHistory", component: TECHPMSJobHistoryComponent
  },
  {
    path:"TECH_DefectList_Index", component:TECHDefectListIndexComponent
  },
  {
    path:"TECH_DefectList_Individual", component:TECHDefectListIndexEditComponent
  },
  {
    path:"TECH_VMP_PMS_Change_Request_Index", component:TECHVMPPMSChangeRequestIndexComponent
  },
  {
    path:"TECH_EngineLog_Index", component:TECHEngineLogIndexComponent
  },
  {
    path:"TECH_EngineLog_Details", component:TECHEngineLogDetailsComponent
  },
  {
    path:"TECH_Lube_Oil_Sample_Lab_Testing_Log", component:TECHLubeOilSampleLabTestingLogComponent
  },
  {
    path:"TECH_DMM_Meeting_Index", component:TECHDMMMeetingIndexComponent
  },

  {
    path:"TECH_DTL_WINCH_Index", component:TECHDTLWINCHIndexComponent
  },
  {
    path:"Library/TECH_PMS_JobStatus_Edit", component:TECHPMSJobStatusEditComponent
  },
  {
    path:"Library/TECH_Library_PMS", component:TECHLibraryPMSComponent
  },
  {
    path:"Library/TECH_LIB_PMS_JOB_LIST_EXCEL_IMPORT", component:TECHLIBPMSJOBLISTEXCELIMPORTComponent
  },
  {
    path:"Library/TECH_LIB_CRITICAL_ALARM", component:TECHLIBCRITICALALARMComponent
  },
  {
    path:"Library/TECH_LIB_Winch", component:TECHLIBWinchComponent
  },
  {
    path:"Library/TECH_SFI_LIST", component:TECHSFILISTComponent
  },
  {
    path:"TECH_DTL_CRITICAL_ALARM_INDEX", component:TECHDTLCRITICALALARMINDEXComponent
  },
 
  {
    path:"TECH_Weekly_Work_Index", component:TECHWeeklyWorkIndexComponent
  },
  {
    path:"TECH_Weekly_Work_Details", component:TECHWeeklyWorkIndexAddComponent
  },
  {
    path:"TECH_TimeLapse_Index", component:TECHTimelapseIndexComponent
  },
  {
    path:"TL_Compare_List", component:COMPARETIMELAPSEComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TECHRoutingModule { }
