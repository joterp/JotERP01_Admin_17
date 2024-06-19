import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,

} from "@angular/core";
import { map, filter } from "rxjs/operators";
import { ThemeService } from "../../../@fury/services/theme.service";
import {
  Router,
  NavigationEnd,
  ActivatedRoute,
  RoutesRecognized,
  ActivationStart,
} from "@angular/router";
import { SidenavService } from "../sidenav/sidenav.service";
import { Title } from "@angular/platform-browser";
import { ApiService } from "src/app/providers/services/ApiService";
import { CommonService } from "src/app/providers/services/CommonService";

@Component({
  selector: "fury-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],

  
})
export class ToolbarComponent implements OnInit {
  @Input()
  @HostBinding("class.no-box-shadow")
  hasNavigation: boolean;

  @Output() openSidenav = new EventEmitter();
  @Output() openQuickPanel = new EventEmitter();

  topNavigation$ = this.themeService.config$.pipe(
    map((config) => config.navigation === "top")
  );
  routeTitle: string = "";
  startEvent = null;
  constructor(
    private themeService: ThemeService,
    private router: Router,
    private sidenavService: SidenavService,
    private titleService: Title,
    private api: ApiService,
    private common: CommonService,
  ) {}
  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }
  ngOnInit() {
    // this.getSystemParams();
    if (!this.startEvent) {
      this.startEvent = this.router.events.subscribe((data) => {
        if (data instanceof ActivationStart) {
          this.routeTitle = data.snapshot.data["title"];
          if (data.snapshot.data["title"]) {
            this.titleService.setTitle(data.snapshot.data["title"]);
          }
        }
      });
    }
    this.routeTitle = this.titleService.getTitle();

  }

  // getSystemParams() {
  //   this.api.GetDataService("purc/sp/all").subscribe(
  //     (res: any) => {
  //       console.log(res,"ressyspara")
  //       if (res["Status"] === 200) {
  //         const sysparam = res["Data"]
  //           .filter((item) => 1 === item["Active_Status"])
  //           console.log(sysparam,"purc_sysparam")
  //         localStorage.setItem("systemParamsData", JSON.stringify(sysparam));
      
  //       } else {
  //         this.common.ShowMessage(res.Message, "notify-error", 4000);
  //       }
  //     },
  //   );
  // }
  goto2(route: string, title: string) {
    console.log('Navigating to:', route, 'with title:', title);
    this.router.navigate(['PURC_ApproveSupplier'], { queryParams: { title: title } });
  }
  
  
  
  goto(buttonName: string) {
    if (buttonName === 'PURC_UnitPacking') {
      this.router.navigate(['PURC/Library/PURC_UnitPacking']);
    } else if (buttonName === 'Catalogues') {
      this.router.navigate(['PURC/Catalogues']);
    // } else if (buttonName === 'PURC_ApproveSupplier') {
    //   this.router.navigate(['PURC/PURC_ApproveSupplier', { title: 'Approved Supplier List' }]);
    // }
    // else if (buttonName === 'ManningAgentsList') {
    //   this.router.navigate(['PURC/PURC_ApproveSupplier', { title: 'Manning Agents\' List' }]);
    // 
    }
     else if(buttonName === 'DirectPurchaseOrder') {
      this.router.navigate(['PURC/PURC_DirectPurchaseOrder'])
    } else if(buttonName === 'ApprovalPortal'){
      this.router.navigate(['PURC/PURC_Approval_Portal'])  
    } else if(buttonName === 'PURCAccountPayable'){
      this.router.navigate(['PURC/PURC_Account_Payable'])
    } else if(buttonName === 'PURCNewIndex'){
      this.router.navigate(['PURC/Index'])
    } else if(buttonName === 'PURCPurchaseRemarkIndex'){
      this.router.navigate(['PURC/PURC_Purchase_Remark_Index'])
    } else if(buttonName === 'PURCContractModule'){
      this.router.navigate(['PURC/PURC_Contract_Module'])
    } else if(buttonName === 'PURCUpdateInventory'){
      this.router.navigate(['PURC/PURC_Update_Inventory'])
    } else if(buttonName === 'PURCShipManagerCommission'){
      this.router.navigate(['PURC/PURC_ShipManager_Commission'])
    } else if(buttonName === 'TECHPMSJobStatus'){
      this.router.navigate(['TECH/TECH_PMS_JobStatus'])
    } else if(buttonName === 'TECHPMSFOLLOWUPINDEX'){
      this.router.navigate(['TECH/TECH_PMS_FOLLOWUP_INDEX'])
    } else if(buttonName === 'TECHPMSUpdateRunningStatus'){
      this.router.navigate(['TECH/TECH_PMS_UpdateRunningStatus'])
    } else if(buttonName === 'PMSDefermentJobIndex'){
      this.router.navigate(['TECH/PMS_Deferment_Job_Index'])
    } else if(buttonName === 'TECHDefectListIndex'){
      this.router.navigate(['TECH/TECH_DefectList_Index'])
    } else if(buttonName === 'TECHVMPPMSChangeRequestIndex'){
      this.router.navigate(['TECH/TECH_VMP_PMS_Change_Request_Index'])
    } else if(buttonName === 'TECHEngineLogIndex'){
       this.router.navigate(['TECH/TECH_EngineLog_Index'])
    } else if(buttonName === 'TECHLubeOilSampleLabTestingLog'){
       this.router.navigate(['TECH/TECH_Lube_Oil_Sample_Lab_Testing_Log'])
    } else if(buttonName === 'TECHDMMMeetingIndex'){
      this.router.navigate(['TECH/TECH_DMM_Meeting_Index'])
    } else if(buttonName === 'OPSVIDIndex'){
      this.router.navigate(['OPS/OPS_VID_Index'])
    } else if(buttonName === 'OPSVOYAGECPLIBRARY'){
      this.router.navigate(['OPS/OPS_VOYAGE_CP_LIBRARY'])
    } else if(buttonName === 'OPS_VesselPortCall'){
      this.router.navigate(['OPS/OPS_VesselPortCall'])
    } else if(buttonName === 'OPS_PortCall_Reports'){
      this.router.navigate(['OPS/OPS_PortCall_Reports'])
    } else if(buttonName === 'OPS_VesselPortCall_CheckListIndex'){
      this.router.navigate(['OPS/OPS_VesselPortCall_CheckListIndex'])
    } else if(buttonName === 'OPS_NAD_Index'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Index'])
    } else if(buttonName === 'OPS_NAD_Add_ArrivalReport'){
      this.router.navigate(['OPS/NAD/OPS_NAD_Add_ArrivalReport'])
    } else if(buttonName === 'ASM_OPS_NAD_Index'){
      this.router.navigate(['OPS/NAD/ASM_OPS_NAD_Index'])
    } else if(buttonName === 'NAD_Bunker_Costs'){
      this.router.navigate(['OPS/NAD/NAD_Bunker_Costs'])
    } else if(buttonName === 'OPS_Vessel_Threshold'){
      this.router.navigate(['OPS/NAD/OPS_Vessel_Threshold'])
    } else if(buttonName === 'OPS_SEEMP_REPORTS'){
      this.router.navigate(['OPS/NAD/OPS_SEEMP_REPORTS'])
    } else if(buttonName === 'OPS_NAD_CHARTER_PARTY_ACTIVITY'){
      this.router.navigate(['OPS/NAD/OPS_NAD_CHARTER_PARTY_ACTIVITY'])
    } else if(buttonName === 'OPS_NAD_CHARTER_PARTY_CONS_INDEX'){
      this.router.navigate(['OPS/NAD/OPS_NAD_CHARTER_PARTY_CONS_INDEX'])
    } else if(buttonName === 'OPS_NAD_LIBRARY_CHARTERER_THRESHOLD'){
      this.router.navigate(['OPS/NAD/OPS_NAD_LIBRARY_CHARTERER_THRESHOLD'])
    } else if(buttonName === 'OPS_NAD_LIB_CO2_PERMITS'){
      this.router.navigate(['OPS/OPS_NAD_LIB_CO2_PERMITS'])
    } else if(buttonName === 'OPS_NAD_LIB_CO2_CF'){
      this.router.navigate(['OPS/OPS_NAD_LIB_CO2_CF'])
    } else if(buttonName === 'OPS_LIB_NAD_CII_REDUCTION_FACTOR'){
      this.router.navigate(['OPS/OPS_LIB_NAD_CII_REDUCTION_FACTOR'])
    } else if(buttonName === 'OPS_LIB_OPS_NAD_CII_DETAILS'){
      this.router.navigate(['OPS/OPS_LIB_OPS_NAD_CII_DETAILS'])
    } else if(buttonName === 'OPS_NAD_CII_CALCULATION_INDEX'){
      this.router.navigate(['OPS/NAD/OPS_NAD_CII_CALCULATION_INDEX'])
    } else if(buttonName === 'CREW_Index_New'){
      this.router.navigate(['CREW/CREW_Index_New'])
    } else if(buttonName === 'CREW_Client_Index'){
      this.router.navigate(['CREW/CREW_Client_Index'])
    } else if(buttonName === 'Crew_Registration'){
      this.router.navigate(['CREW/Crew_Registration'])
    } else if(buttonName === 'ProposeToOwner_Index'){
      this.router.navigate(['CREW/ProposeToOwner_Index'])
    } else if(buttonName === 'ProposeToOwner'){
      this.router.navigate(['CREW/ProposeToOwner'])
    } else if(buttonName === 'CREW_Calender'){
      this.router.navigate(['CREW/CREW_Calender'])
    } else if(buttonName === 'CREW_ManningRequirement'){
      this.router.navigate(['CREW/CREW_ManningRequirement'])
    } else if(buttonName === 'Crew_Proposal'){
      this.router.navigate(['CREW/Crew_Proposal'])
    } else if(buttonName === 'Rotation_And_Assignment'){
      this.router.navigate(['CREW/Rotation_And_Assignment'])
    } else if (buttonName === 'VesselAssignment'){
      this.router.navigate(['CREW/VesselAssignment'])
    } else if(buttonName === 'EventPlanningIndex'){
      this.router.navigate(['CREW/EventPlanningIndex'])
    } else if(buttonName === 'PortageBill_Record_Summary'){
      this.router.navigate(['CREW/PortageBill/PortageBill_Record_Summary'])
    } else if(buttonName === 'Salary_Structure'){
      this.router.navigate(['CREW/PortageBill/Salary_Structure'])

    } else if(buttonName === 'Salary_Names'){
      this.router.navigate(['CREW/PortageBill/Salary_Names'])

    } else if(buttonName === 'RankSalaryAssignment'){
      this.router.navigate(['CREW/PortageBill/RankSalaryAssignment']) 
    } else if(buttonName === 'SeniorityManagement'){
      this.router.navigate(['CREW/PortageBill/SeniorityManagement']) 
    } else if(buttonName === 'AllotmentsMinimumValueIndex'){
      this.router.navigate(['CREW/PortageBill/AllotmentsMinimumValueIndex'])   
      
    } else if(buttonName === 'PBVictuallingMealIndex'){
      this.router.navigate(['CREW/PortageBill/PBVictuallingMealIndex'])   
    } else if(buttonName === 'PB_Victualling_Purchase_Index'){
      this.router.navigate(['CREW/PortageBill/PB_Victualling_Purchase_Index'])
    } else if(buttonName === 'PBVictuallingStdRates'){
      this.router.navigate(['CREW/PortageBill/PBVictuallingStdRates']) 
    } else if(buttonName === 'PBBondedItems'){
      this.router.navigate(['CREW/PortageBill/PBBondedItems'])   
    }       
      else if(buttonName === 'MatrixIndex'){
        this.router.navigate(['CREW/MatrixIndex'])   
       }
       else if(buttonName === 'MatrixExceptionLog'){
        this.router.navigate(['CREW/MatrixExceptionLog'])
       }
       else if(buttonName === 'MatrixRuleTemplate'){
        this.router.navigate(['CREW/MatrixRuleTemplate'])
       }
       else if(buttonName === 'MatrixRuleAssignment'){
        this.router.navigate(['CREW/MatrixRuleAssignment'])  
       }  
       else if(buttonName === 'MatrixExceptionLog'){
        this.router.navigate(['CREW/MatrixExceptionLog'])  
       } 
       
        else if(buttonName === 'ManningFeeTransaction'){
          this.router.navigate(['CREW/Manning_Agent/ManningFeeTransaction'])
         }
         else if(buttonName === 'ManningAnnualReport'){
          this.router.navigate(['CREW/Manning_Agent/ManningAnnualReport'])
         }
         else if(buttonName === 'ManningFeeManagement'){
          this.router.navigate(['CREW/Manning_Agent/ManningFeeManagement'])
         }
         else if(buttonName === 'ManningFeeStructure'){
          this.router.navigate(['CREW/Manning_Agent/ManningFeeStructure'])
         }
          else if(buttonName === 'CadetTrainingPlan'){
            this.router.navigate(['CREW/Cadet_Log/CadetTrainingPlan'])
           }
           else if(buttonName === 'CadetLogType'){
            this.router.navigate(['CREW/Cadet_Log/CadetLogType'])
           }
           else if(buttonName === 'CadetLogChapters'){
            this.router.navigate(['CREW/Cadet_Log/CadetLogChapters'])
           }
           else if(buttonName === 'CadetLogCategories'){
            this.router.navigate(['CREW/Cadet_Log/CadetLogCategories'])
           }
           else if(buttonName === 'CadetLogGrades'){
            this.router.navigate(['CREW/Cadet_Log/CadetLogGrades'])
           }
           else if(buttonName === 'CadetLogItems'){
            this.router.navigate(['CREW/Cadet_Log/CadetLogItems'])
            // Contract Template mgmt
           }
   else if(buttonName === 'ContractTemplateIndex'){
    this.router.navigate(['CREW/ContractTemplateIndex'])
   

      
    }else if(buttonName === 'TECH_DTL_WINCH_Index'){
      this.router.navigate(['TECH/TECH_DTL_WINCH_Index'])
    }

    else if (buttonName === 'SURVEY_Certificate_Index') {
      this.router.navigate(['Survey_Certificate/SURVEY_Certificate_Index']);

    } else if (buttonName === 'SURVEY_Categories') {
      this.router.navigate(['Survey_Certificate/Library/SURVEY_Categories']);
    }
    else if (buttonName === 'SURVEY_Tenure') {
      this.router.navigate(['Survey_Certificate/Library/SURVEY_Tenure']);
    }
    else if (buttonName === 'SURVEY_Certificate') {
      this.router.navigate(['Survey_Certificate/Library/SURVEY_Certificate']);
    }
    else if (buttonName === 'SURVEY_Vessel_Assignment') {
      this.router.navigate(['Survey_Certificate/Library/SURVEY_Vessel_Assignment']);
    }

    else if(buttonName === 'TECH_Library_PMS'){
      this.router.navigate(['TECH/Library/TECH_Library_PMS'])
     }
     else if(buttonName === 'TECH_LIB_PMS_JOB_LIST_EXCEL_IMPORT'){
      this.router.navigate(['TECH/Library/TECH_LIB_PMS_JOB_LIST_EXCEL_IMPORT'])
     }
     else if(buttonName === 'TECH_LIB_CRITICAL_ALARM'){
      this.router.navigate(['TECH/Library/TECH_LIB_CRITICAL_ALARM'])
     }
     else if(buttonName === 'TECH_LIB_Winch'){
      this.router.navigate(['TECH/Library/TECH_LIB_Winch'])
     }
     
     else if(buttonName === 'TECH_SFI_LIST'){
      this.router.navigate(['TECH/Library/TECH_SFI_LIST'])
     }

      //purchase
    else if (buttonName === 'PURC_Department') {
      this.router.navigate(['PURC/Library/PURC_Department']);
    }
    
    else if (buttonName === 'PURC_Add_ITEM_TEMPLATE') {
      this.router.navigate(['PURC/Library/PURC_Add_ITEM_TEMPLATE']);
    }
    else if (buttonName === 'Purc_Lib_Catalouge_Excel_Import') {
      this.router.navigate(['PURC/Library/Purc_Lib_Catalouge_Excel_Import']);
    }
    else if (buttonName === 'PURC_Spare_Parts_Excel_Import') {
      this.router.navigate(['PURC/Library/PURC_Spare_Parts_Excel_Import']);
    }
    else if (buttonName === 'PURC_New_RFQ_TERM') {
      this.router.navigate(['PURC/Library/PURC_New_RFQ_TERM']);
    }
    else if (buttonName === 'PURC_POTerms') {
      this.router.navigate(['PURC/Library/PURC_POTerms']);
    }
    else if (buttonName === 'PURC_LIB_ASL_EXCEL_IMPORT') {
      this.router.navigate(['PURC/Library/PURC_LIB_ASL_EXCEL_IMPORT']);
    }
    else if (buttonName === 'PURC_ApproveSupplier_Question') {
      this.router.navigate(['PURC/Library/PURC_ApproveSupplier_Question']);
    }
    else if (buttonName === 'PURC_LIB_Supplier_Documents') {
      this.router.navigate(['PURC/Library/PURC_LIB_Supplier_Documents']);
    }
    else if (buttonName === 'PURC_ASL_Supp_Type_Dept_Mapping') {
      this.router.navigate(['PURC/Library/PURC_ASL_Supp_Type_Dept_Mapping']);
    }
    else if (buttonName === 'PURC_Tacit_Relation') {
      this.router.navigate(['PURC/Library/PURC_Tacit_Relation']);
    }
    else if (buttonName === 'PURC_Location') {
      this.router.navigate(['PURC/Library/PURC_Location']);
    }
    else if(buttonName === 'TECH_TimeLapse_Index'){
      this.router.navigate(['TECH/TECH_TimeLapse_Index'])
     }
   
     else if(buttonName === 'TECH_Weekly_Work_Index'){
      this.router.navigate(['TECH/TECH_Weekly_Work_Index'])
     }
     else if(buttonName === 'TECH_DTL_CRITICAL_ALARM_INDEX'){
      this.router.navigate(['TECH/TECH_DTL_CRITICAL_ALARM_INDEX'])
     }

     else if(buttonName === 'OPS_LIB_LUBE_SAMPLE_NAME'){
      this.router.navigate(['OPS/Library/OPS_LIB_LUBE_SAMPLE_NAME'])
     }
     //Crew Module Library
     else if(buttonName === 'CREW_Rank'){
      this.router.navigate(['CREW/Libraries/CREW_Rank'])
     }
   else if(buttonName === 'CREW_Rank_Category'){
    this.router.navigate(['CREW/Libraries/CREW_Rank_Category'])
   }
   else if(buttonName === 'CREW_Signoff_Reason'){
    this.router.navigate(['CREW/Libraries/CREW_Signoff_Reason'])
   }
   else if(buttonName === 'CREW_Additional_Checks'){
    this.router.navigate(['CREW/Libraries/CREW_Additional_Checks'])
   }
   else if(buttonName === 'CREW_QuestionCategory'){
    this.router.navigate(['CREW/Libraries/CREW_QuestionCategory'])
   }
   else if(buttonName === 'CREW_InterviewGrade'){
    this.router.navigate(['CREW/Libraries/CREW_InterviewGrade'])
   }
   else if(buttonName === 'InterviewQuestions'){
    this.router.navigate(['CREW/Libraries/InterviewQuestions'])
   }
   else if(buttonName === 'IntreviewSheet'){
    this.router.navigate(['CREW/Libraries/IntreviewSheet'])
   }
   else if(buttonName === 'CREW_Document'){
    this.router.navigate(['CREW/Libraries/CREW_Document'])
   }
   else if(buttonName === 'CREW_RankAssignment'){
    this.router.navigate(['CREW/Libraries/CREW_RankAssignment'])
   }
   else if(buttonName === 'RankExpiryNotifications'){
    this.router.navigate(['CREW/Libraries/RankExpiryNotifications'])
   }
   else if(buttonName === 'EvaluationSheet'){
    this.router.navigate(['CREW/Libraries/EvaluationSheet'])
   }
   else if(buttonName === 'EvaluationCategory'){
    this.router.navigate(['CREW/Libraries/EvaluationCategory'])
   }
   else if(buttonName === 'EvaluationGrade'){
    this.router.navigate(['CREW/Libraries/EvaluationGrade'])
   }
   else if(buttonName === 'EvaluationPeriods'){
    this.router.navigate(['CREW/Libraries/EvaluationPeriods'])
   }
   else if(buttonName === 'EvaluationQuestions'){
    this.router.navigate(['CREW/Libraries/EvaluationQuestions'])
   }
   else if(buttonName === 'Tainings'){
    this.router.navigate(['CREW/Libraries/Tainings'])
   }
   else if(buttonName === 'RankAssignment'){
    this.router.navigate(['CREW/Libraries/RankAssignment'])
   }
   else if(buttonName === 'GreetingCards'){
    this.router.navigate(['CREW/Libraries/GreetingCards'])
   }

   else if(buttonName === 'CostRegistration'){
    this.router.navigate(['CREW/CostRegistration'])
   }
   else if(buttonName === 'QueryIndex'){
    this.router.navigate(['CREW/QueryIndex'])
   }
   else if(buttonName === 'MedicalIndex'){   
    this.router.navigate(['CREW/MedicalIndex'])
   }
   else if(buttonName === 'EvaluationIndex'){
    this.router.navigate(['CREW/EvaluationIndex'])   
   }
   else if(buttonName === 'EvaluationCalender'){    
    this.router.navigate(['CREW/EvaluationCalender'])
   }

   //Operation Module
   else if(buttonName === 'OPS_FAM_AmmunitionKit'){
    this.router.navigate(['OPS/FireArmsMovement/OPS_FAM_AmmunitionKit'])
   }
   else if(buttonName === 'OPS_FAM_AmmunitionItem'){
    this.router.navigate(['OPS/FireArmsMovement/OPS_FAM_AmmunitionItem'])
   }
   else if(buttonName === 'OPS_SEC_SecurityDashBoard'){
    this.router.navigate(['OPS/SecurityAlerts/OPS_SEC_SecurityDashBoard'])
   }
   else if(buttonName === 'OPS_SEC_AlertList'){
    this.router.navigate(['OPS/SecurityAlerts/OPS_SEC_AlertList'])
   }
   else if(buttonName === 'OPS_SEC_VesselList'){
    this.router.navigate(['OPS/SecurityAlerts/OPS_SEC_VesselList'])
   }
   else if(buttonName === 'OPS_SEC_AlertAreas'){
    this.router.navigate(['OPS/SecurityAlerts/OPS_SEC_AlertAreas'])
   }
   else if(buttonName === 'OPS_RPT_Report_Index'){
    this.router.navigate(['OPS/VesselReport_Chng/OPS_RPT_Report_Index'])
   }
   else if(buttonName === 'OPS_RPT_FOLLOWUP_INDEX'){
    this.router.navigate(['OPS/VesselReport_Chng/OPS_RPT_FOLLOWUP_INDEX'])
   }
   else if(buttonName === 'OPS_NAD_Voyage_Log_Abstract'){
    this.router.navigate(['OPS/NAD/OPS_NAD_Voyage_Log_Abstract'])
   }
   else if(buttonName === 'OPS_CARGO_LOG_MAIN'){
    this.router.navigate(['OPS/OPS_CARGO_LOG_MAIN'])
   }
   else if(buttonName === 'OPS_DeckLogBook_Index'){
    this.router.navigate(['OPS/OPS_DeckLogBook_Index'])
   }
   
   else if(buttonName === 'OPS_FleetLocationMap'){
    this.router.navigate(['OPS/FleetLocation/OPS_FleetLocationMap'])
   }

   else if(buttonName === 'OPS_Offshore_Mid_Night_Report_Index'){
    this.router.navigate(['OPS/OPS_Offshore_Mid_Night_Report_Index'])
   }

else if(buttonName === 'OPS_LIB_LUBE_SAMPLE_NAME'){
    this.router.navigate(['OPS/Library/OPS_LIB_LUBE_SAMPLE_NAME'])
   }
   else if(buttonName === 'OPS_VID_NEW_LIBRARY'){
    this.router.navigate(['OPS/Library/OPS_VID_NEW_LIBRARY'])
   }
   else if(buttonName === 'OPS_Lib_Nad_Custom_Fields'){
    this.router.navigate(['OPS/Library/OPS_Lib_Nad_Custom_Fields'])
   }
   else if(buttonName === 'OPS_LIB_NAD_Custom_Fields_Assignment'){
    this.router.navigate(['OPS/Library/OPS_LIB_NAD_Custom_Fields_Assignment'])
   }
   else if(buttonName === 'OPS_NAD_LIB_DOCUMENTS'){
    this.router.navigate(['OPS/Library/OPS_NAD_LIB_DOCUMENTS'])
   }
   else if(buttonName === 'OPS_NAD_LIB_DOCUMENTS_VESSEL_ASSIGNMENT'){
    this.router.navigate(['OPS/Library/OPS_NAD_LIB_DOCUMENTS_VESSEL_ASSIGNMENT'])
   }
   else if(buttonName === 'OPS_NAD_LIB_DOCUMENTS_VESSEL_ASSIGNMENT'){
    this.router.navigate(['OPS/Library/OPS_NAD_LIB_DOCUMENTS_VESSEL_ASSIGNMENT'])
   }
   else if(buttonName === 'OPS_LIB_OMR_PRODUCT'){
    this.router.navigate(['OPS/Library/OPS_LIB_OMR_PRODUCT'])
   }
   else if(buttonName === 'OPS_LIB_WaterIN'){
    this.router.navigate(['OPS/Library/OPS_LIB_WaterIN'])
   }
   else if(buttonName === 'OPS_LIB_VesselPortcall_Checklist'){
    this.router.navigate(['OPS/Library/OPS_LIB_VesselPortcall_Checklist'])
   }
   else if(buttonName === 'OPS_RPT_Add_Report'){
    this.router.navigate(['OPS/Library/OPS_RPT_Add_Report'])
   }
   else if(buttonName === 'OPS_RPT_VESSEL_Assignement'){
    this.router.navigate(['OPS/Library/OPS_RPT_VESSEL_Assignement'])
   }
   else if(buttonName === 'OPS_LIB_VSL_PARTICULARS_LABELS'){
    this.router.navigate(['OPS/Library/OPS_LIB_VSL_PARTICULARS_LABELS'])
   }
   //hseq Lib
   //hseq
   else if(buttonName === 'InspectionReference'){
    this.router.navigate(['HSEQ/Library/InspectionReference'])
   } 
   else if(buttonName === 'RiskAssessment'){
    this.router.navigate(['HSEQ/Library/RiskAssessment'])   
   } 
   else if(buttonName === 'RAAcitivityOperationControl'){
    this.router.navigate(['HSEQ/Library/RAAcitivityOperationControl'])
   } 
   else if(buttonName === 'LikehoodDetails'){
    this.router.navigate(['HSEQ/Library/LikehoodDetails'])
   } 
   else if(buttonName === 'DegreeOfImpact'){
    this.router.navigate(['HSEQ/Library/DegreeOfImpact'])
   }  
   else if(buttonName === 'AdditionalControls'){
    this.router.navigate(['HSEQ/Library/AdditionalControls'])
   } 
   else if(buttonName === 'ReviewFrequency'){
    this.router.navigate(['HSEQ/Library/ReviewFrequency'])  
   }   
   else if(buttonName === 'SecurityDrill'){
    this.router.navigate(['HSEQ/Library/SecurityDrill'])   
   } 
   else if(buttonName === 'AlertManageCategoryForms'){
    this.router.navigate(['HSEQ/Library/AlertManageCategoryForms'])   
   } 
   else if(buttonName === 'VesselKPILibrary'){
    this.router.navigate(['HSEQ/Library/VesselKPILibrary'])
   } 
   else if(buttonName === 'VesselInspectionLibrary'){
    this.router.navigate(['HSEQ/Library/VesselInspectionLibrary'])
   } 

   else if(buttonName === 'Admin_Lib_Countries'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Countries'])
   } 
   else if(buttonName === 'Admin_Lib_Cities'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Cities'])
   }
   else if(buttonName === 'Admin_Lib_Airports'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Airports'])
   } 
   else if(buttonName === 'Admin_Lib_Ports'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Ports'])
   } 
   else if(buttonName === 'Admin_Lib_Vessel_Department'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Vessel_Department'])
   } 
   else if(buttonName === 'Admin_Lib_Vessel'){
    this.router.navigate(['ADMIN/library/Admin_Lib_Vessel'])
   } 

   else if(buttonName === 'Accounts_Lib_Currency'){
    this.router.navigate(['ACCOUNTS/libraries/Accounts_Lib_Currency'])
   }
  }
  
}
