import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Title } from '@angular/platform-browser';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { SidenavService } from 'src/app/layout/sidenav/sidenav.service';

@Component({
  selector: 'fury-tech-engine-log-details',
  templateUrl: './tech-engine-log-details.component.html',
  styleUrls: ['./tech-engine-log-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TECHEngineLogDetailsComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false})
  viewport: CdkVirtualScrollViewport;

  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("TABLE") table: ElementRef;

    //1nd table columns
  mainenginecolumns1:ListColumn[] = [
    { property: "blank_1", visible: true, name: "" },
    { property: "WATCH", visible: true, name: "WATCH" },
    { property: "HOURS", visible: true, name: "HOURS" },
    { property: "MINUTES", visible: true, name: "MINUTES" },
    { property: "REVOLUTIONS", visible: true, name: "REVOLUTIONS" },
    { property: "ME_CONTROL", visible: true, name: "M.E. CONTROL" },
    { property: "GOV_CONTROL", visible: true, name: "GOV. CONTROL" },
    { property: "LOAD_INDICATOR", visible: true, name: "LOAD INDICATOR" },
    { property: "FUEL_PP_INDEX", visible: true, name: "FUEL PP INDEX" },
    { property: "FUEL_FLOWMETER", visible: true, name: "FUEL FLOWMETER" },
    { property: "TEMPERATURE", visible: true, name: "TEMPERATURE" },
    { property: "CHGR", visible: true, name: "CHGR" },
    { property: "TURBO_TEMPERATURE", visible: true, name: "TEMPERATURE" },
    { property: "PRESSURE", visible: true, name: "PRESSURE" },
   
  ] as ListColumn[];
  
    enginelogcolumns2:ListColumn[] = [
    { property: "COUNTER", visible: true, name: "COUNTER" },
    { property: "RPM", visible: true, name: "RPM" },
    { property: "EXHAUST", visible: true, name: "EXHAUST" },
    { property: "CHGR_NUM_1", visible: true, name: "CHGR_NUM_1" },
    { property: "CHGR_NUM_2", visible: true, name: "CHGR_NUM_2" },
    { property: "CHGR_NUM_3", visible: true, name: "CHGR_NUM_3" },
    { property: "EXHAUST_GAS", visible: true, name: "EXHAUST GAS" },   
    { property: "AIR_COOLER_AIR", visible: true, name: "AIR COOLER AIR" },
    { property: "Scavenge", visible: true, name: "Scavenge" },
    { property: "COOLING_WATER", visible: true, name: "COOLING WATER" },
    { property: "LUB_OIL", visible: true, name: "LUB OIL" },
    { property: "Scav_Km", visible: true, name: "Scav Km/Cm-Square" },
    { property: "EXN_BACK", visible: true, name: "EXN BACK" },
    { property: "Press_Drop_Mm_Wc", visible: true, name: "Press Drop Mm Wc" },
   
  ] as ListColumn[];

  mainenginecolumns3:ListColumn[] = [
    { property: "EXHAUST_NUM_1", visible: true, name: "1" },
    { property: "EXHAUST_NUM_2", visible: true, name: "2" },
    { property: "EXHAUST_NUM_3", visible: true, name: "3" },
    { property: "EXHAUST_NUM_4", visible: true, name: "4" },
    { property: "EXHAUST_NUM_5", visible: true, name: "5" },
    { property: "EXHAUST_NUM_6", visible: true, name: "6" },
    { property: "EXHAUST_NUM_7", visible: true, name: "7" },
    { property: "EXHAUST_NUM_8", visible: true, name: "8" },
    { property: "EXHAUST_NUM_9", visible: true, name: "9" },
    { property: "EXHAUST_NUM_10", visible: true, name: "10" },
    { property: "EXHAUST_NUM_11", visible: true, name: "11" },
    { property: "EXHAUST_NUM_12", visible: true, name: "12" },
    { property: "INLET", visible: true, name: "INLET" },
    { property: "OUTLET", visible: true, name: "OUTLET" },
    { property: "AIR_COOLER_NUM_1", visible: true, name: "1" },
    { property: "AIR_COOLER_NUM_2", visible: true, name: "2" },
    { property: "AIR_COOLER_NUM_3", visible: true, name: "3" },
    { property: "COOLING_WATER_IN", visible: true, name: "IN" },
    { property: "COOLING_WATER_OUT", visible: true, name: "OUT" },
    { property: "LUB_OIL_NUM_1", visible: true, name: "1" },
    { property: "LUB_OIL_NUM_2", visible: true, name: "2" },
    { property: "LUB_OIL_NUM_3", visible: true, name: "3" },
    { property: "PRESS_DROP_AIR_COOLER", visible: true, name: "AIR COOLER" },
    { property: "PRESS_DROP_AIR_FILTER", visible: true, name: "AIR FILTER" },
   
  ] as ListColumn[];

  mainenginecolumns4:ListColumn[] = [
    { property: "INLET_NUM_1", visible: true, name: "1" },
    { property: "INLET_NUM_2", visible: true, name: "2" },
    { property: "INLET_NUM_3", visible: true, name: "3" },
    { property: "OUTLET_NUM_1", visible: true, name: "1" },
    { property: "OUTLET_NUM_2", visible: true, name: "2" },
    { property: "OUTLET_NUM_3", visible: true, name: "3" },
    { property: "AIR_COOLER_NUM_1_IN", visible: true, name: "IN" },
    { property: "AIR_COOLER_NUM_1_OUT", visible: true, name: "OUT" },
    { property: "AIR_COOLER_NUM_2_IN", visible: true, name: "IN" },
    { property: "AIR_COOLER_NUM_2_OUT", visible: true, name: "OUT" },
    { property: "AIR_COOLER_NUM_3_IN", visible: true, name: "IN" },
    { property: "AIR_COOLER_NUM_3_OUT", visible: true, name: "OUT" },
    { property: "COOLING_WATER_IN_BLANK", visible: true, name: "" },
    { property: "COOLING_WATER_OUT_NUM_1", visible: true, name: "1" },
    { property: "COOLING_WATER_OUT_NUM_2", visible: true, name: "2" },
    { property: "COOLING_WATER_OUT_NUM_3", visible: true, name: "3" },
    { property: "LUB_OIL_NUM_1_B", visible: true, name: "B" },
    { property: "LUB_OIL_NUM_1_T", visible: true, name: "T" },
    { property: "LUB_OIL_NUM_2_B", visible: true, name: "B" },
    { property: "LUB_OIL_NUM_2_T", visible: true, name: "T" },
    { property: "LUB_OIL_NUM_3_B", visible: true, name: "B" },
    { property: "LUB_OIL_NUM_3_T", visible: true, name: "T" },
    { property: "PRESS_DROP_AIR_COOLER_NUM_1", visible: true, name: "1" },
    { property: "PRESS_DROP_AIR_COOLER_NUM_2", visible: true, name: "2" },
    { property: "PRESS_DROP_AIR_COOLER_NUM_3", visible: true, name: "3" },
    { property: "PRESS_DROP_AIR_FILTER_NUM_1", visible: true, name: "1" },
    { property: "PRESS_DROP_AIR_FILTER_NUM_2", visible: true, name: "2" },
    { property: "PRESS_DROP_AIR_FILTER_NUM_3", visible: true, name: "3" },

  ] as ListColumn[];

  //2nd table columns
  mainenginecolumns2_1:ListColumn[] = [
    { property: "blank_1", visible: true, name: "" },
    { property: "WATCH", visible: true, name: "WATCH" },
    { property: "TEMPERATURE", visible: true, name: "TEMPERATURE Deg. C" },
    { property: "FUEL_VISC", visible: true, name: "FUEL VISC" },
    { property: "HEAT_EXCHANGERS_TEMP", visible: true, name: "HEAT EXCHANGERS TEMPERATURES Deg. C" },
    { property: "PRESSURE_Kg", visible: true, name: "pressure Kg/Cm-Sq." },
   
  ] as ListColumn[];

  mainenginecolumns2_2:ListColumn[] = [
    { property: "MAIN_BEARING", visible: true, name: "MAIN BEARING" },
    { property: "JACKET_COOLING", visible: true, name: "JACKET COOLING" },
    { property: "PISTON_COOLING", visible: true, name: "PISTON COOLING" },
    { property: "FUEL_OIL", visible: true, name: "FUEL OIL" },
    { property: "JACKET_COOLER", visible: true, name: "JACKET COOLER" },
    { property: "LO_COOLER", visible: true, name: "L.O. COOLER" },
    { property: "PISTON_COOLER", visible: true, name: "PISTON COOLER" },   
    { property: "Sea_Water", visible: true, name: "Sea Water" },
    { property: "Jacket_Water", visible: true, name: "Jacket Water" },
    { property: "Bearing", visible: true, name: "Bearing & X-Hd LO" },
    { property: "Canshaft_LO", visible: true, name: "Canshaft LO" },
    { property: "FV_Cooling", visible: true, name: "F V Cooling" },
    { property: "Fuel_Oil", visible: true, name: "Fuel Oil" },
    { property: "Piston_Cooling_2", visible: true, name: "Piston Cooling" },
    { property: "Control_Air", visible: true, name: "Control Air" },
    { property: "Service_Air", visible: true, name: "Service Air" },
   
  ] as ListColumn[];
  
  mainenginecolumns2_3:ListColumn[] = [
    { property: "MAIN_BEARING_IN", visible: true, name: "IN" },
    { property: "MAIN_BEARING_OUTLET", visible: true, name: "OUTLET" },
    { property: "JACKET_COOLING_IN", visible: true, name: "IN" },
    { property: "JACKET_COOLING_OUTLET", visible: true, name: "OUTLET" },
    { property: "PISTON_COOLING_IN", visible: true, name: "IN" },
    { property: "PISTON_COOLING_OUTLET", visible: true, name: "OUTLET" },
    { property: "JACKET_COOLER_SW", visible: true, name: "SW" },   
    { property: "JACKET_COOLER_FW", visible: true, name: "FW" },
    { property: "LO_COOLER_SW", visible: true, name: "SW" },
    { property: "LO_COOLER_FW", visible: true, name: "FW" },
    { property: "PISTON_COOLER_SW", visible: true, name: "SW" },
    { property: "PISTON_COOLER_LO", visible: true, name: "LO/FW" },
   
  ] as ListColumn[];

  mainenginecolumns2_4:ListColumn[] = [
    { property: "MAIN_BEARING_OUTLET_NUM_1", visible: true, name: "1" },
    { property: "MAIN_BEARING_OUTLET_NUM_2", visible: true, name: "2" },
    { property: "MAIN_BEARING_OUTLET_NUM_3", visible: true, name: "3" },
    { property: "MAIN_BEARING_OUTLET_NUM_4", visible: true, name: "4" },
    { property: "MAIN_BEARING_OUTLET_NUM_5", visible: true, name: "5" },
    { property: "MAIN_BEARING_OUTLET_NUM_6", visible: true, name: "6" },
    { property: "MAIN_BEARING_OUTLET_NUM_7", visible: true, name: "7" },   
    { property: "MAIN_BEARING_OUTLET_NUM_8", visible: true, name: "8" },
    { property: "MAIN_BEARING_OUTLET_NUM_9", visible: true, name: "9" },
    { property: "MAIN_BEARING_OUTLET_NUM_10", visible: true, name: "10" },
    { property: "MAIN_BEARING_OUTLET_NUM_11", visible: true, name: "11" },
    { property: "MAIN_BEARING_OUTLET_NUM_12", visible: true, name: "12" },
    { property: "JACKET_COOLING_OUTLET_NUM_1", visible: true, name: "1" },
    { property: "JACKET_COOLING_OUTLET_NUM_2", visible: true, name: "2" },
    { property: "JACKET_COOLING_OUTLET_NUM_3", visible: true, name: "3" },
    { property: "JACKET_COOLING_OUTLET_NUM_4", visible: true, name: "4" },
    { property: "JACKET_COOLING_OUTLET_NUM_5", visible: true, name: "5" },
    { property: "JACKET_COOLING_OUTLET_NUM_6", visible: true, name: "6" },
    { property: "JACKET_COOLING_OUTLET_NUM_7", visible: true, name: "7" },   
    { property: "JACKET_COOLING_OUTLET_NUM_8", visible: true, name: "8" },
    { property: "JACKET_COOLING_OUTLET_NUM_9", visible: true, name: "9" },
    { property: "JACKET_COOLING_OUTLET_NUM_10", visible: true, name: "10" },
    { property: "JACKET_COOLING_OUTLET_NUM_11", visible: true, name: "11" },
    { property: "JACKET_COOLING_OUTLET_NUM_12", visible: true, name: "12" },
    { property: "PISTON_COOLING_OUTLET_NUM_1", visible: true, name: "1" },
    { property: "PISTON_COOLING_OUTLET_NUM_2", visible: true, name: "2" },
    { property: "PISTON_COOLING_OUTLET_NUM_3", visible: true, name: "3" },
    { property: "PISTON_COOLING_OUTLET_NUM_4", visible: true, name: "4" },
    { property: "PISTON_COOLING_OUTLET_NUM_5", visible: true, name: "5" },
    { property: "PISTON_COOLING_OUTLET_NUM_6", visible: true, name: "6" },
    { property: "PISTON_COOLING_OUTLET_NUM_7", visible: true, name: "7" },   
    { property: "PISTON_COOLING_OUTLET_NUM_8", visible: true, name: "8" },
    { property: "PISTON_COOLING_OUTLET_NUM_9", visible: true, name: "9" },
    { property: "PISTON_COOLING_OUTLET_NUM_10", visible: true, name: "10" },
    { property: "PISTON_COOLING_OUTLET_NUM_11", visible: true, name: "11" },
    { property: "PISTON_COOLING_OUTLET_NUM_12", visible: true, name: "12" },
    { property: "JACKET_COOLER_SW_IN", visible: true, name: "IN" },
    { property: "JACKET_COOLER_SW_OUT", visible: true, name: "OUT" },
    { property: "JACKET_COOLER_FW_IN", visible: true, name: "IN" },
    { property: "JACKET_COOLER_FW_OUT", visible: true, name: "OUT" },
    { property: "LO_COOLER_SW_IN", visible: true, name: "IN" },
    { property: "LO_COOLER_SW_OUT", visible: true, name: "OUT" },
    { property: "LO_COOLER_FW_IN", visible: true, name: "IN" },
    { property: "LO_COOLER_FW_OUT", visible: true, name: "OUT" },
    { property: "PISTON_COOLER_SW_IN", visible: true, name: "IN" },
    { property: "PISTON_COOLER_SW_OUT", visible: true, name: "OUT" },
    { property: "PISTON_COOLER_LO_IN", visible: true, name: "IN" },
    { property: "PISTON_COOLER_LO_OUT", visible: true, name: "OUT" },
   
  ] as ListColumn[];


  //Boiler & Purifir 1nd table columns
  boilerpurifiercolumns1:ListColumn[] = [
    { property: "blank_1", visible: true, name: "" },
    { property: "WATCH", visible: true, name: "WATCH" },
    { property: "AIR_P", visible: true, name: "P" },
    { property: "AIR_S", visible: true, name: "S" },
    { property: "Air_Temp_Deg_C", visible: true, name: "Air Temp Deg. C" },
    { property: "PRESSURE_Kg", visible: true, name: "PRESSURE Kg/Cm-Sq." },
    { property: "Temp_Deg_C", visible: true, name: "Temp Deg. C" },
    { property: "Running_Hours", visible: true, name: "Running Hours" },
    { property: "Heat_Exchanger_Deg_C", visible: true, name: "Heat Exchanger Deg. C" },
    { property: "Vacuum_Cm", visible: true, name: "Vacuum Cm. Hg" },
    { property: "Shell_Temp_C", visible: true, name: "Shell Temp C	" },
    { property: "Salinity_PPM", visible: true, name: "Salinity PPM	" },
    { property: "Flowmeter", visible: true, name: "Flowmeter" },
    { property: "Oile_Finning_Hours", visible: true, name: "Oile Finning Hours	" },
    { property: "Stream_Press", visible: true, name: "Stream Press.	" },
    { property: "Feed_Water_Temp", visible: true, name: "Feed Water Temp." },
    { property: "EGE_Soot_Bown", visible: true, name: "EGE Soot Bown" },
    { property: "HO", visible: true, name: "HO" },
    { property: "LO", visible: true, name: "LO" },
    { property: "DO", visible: true, name: "DO" },
    { property: "Staff_Grounding", visible: true, name: "Staff Grounding " },
    { property: "Temperature_Deg_C", visible: true, name: "Temperature Deg. C	" },
    { property: "HO_Sett", visible: true, name: "HO Sett.	" },
    { property: "HO_Serv", visible: true, name: "HO Serv." },
    { property: "Incinerator_Run_Hrs", visible: true, name: "Incinerator Run Hrs." },
   
  ] as ListColumn[];

  boilerpurifiercolumns2:ListColumn[] = [
    { property: "P_Suct", visible: true, name: "Suct" },
    { property: "P_Disch", visible: true, name: "Disch" },
    { property: "P_LO", visible: true, name: "L. O." },
    { property: "P_Cooling_Water", visible: true, name: "Cooling Water" },
    { property: "S_Suct", visible: true, name: "Suct" },
    { property: "S_Disch", visible: true, name: "Disch" },
    { property: "S_LO", visible: true, name: "L. O." },
    { property: "S_Cooling_Water", visible: true, name: "Cooling Water" },
    { property: "Air_Temp_Deg_C_P", visible: true, name: "P" },
    { property: "Air_Temp_Deg_C_S", visible: true, name: "S" },
    { property: "PRESSURE_Kg_Comp_No", visible: true, name: "Comp. No." },
    { property: "PRESSURE_Kg_Suct", visible: true, name: "Suct" },
    { property: "PRESSURE_Kg_Disch", visible: true, name: "Disch" },
    { property: "PRESSURE_Kg_LO", visible: true, name: "L. O." },
    { property: "Temp_Deg_C_Meat", visible: true, name: "Meat" },
    { property: "Temp_Deg_C_Fish", visible: true, name: "Fish" },
    { property: "Temp_Deg_C_Veg", visible: true, name: "Veg/Labby" },
    { property: "Heat_Exchanger_Deg_C_FW", visible: true, name: "FW" },
    { property: "Heat_Exchanger_Deg_C_SW", visible: true, name: "SW" },
    { property: "HO_Hrs_Run", visible: true, name: "Hrs. Run	" },
    { property: "HO_Temp", visible: true, name: "Temp" },
    { property: "LO_Hrs_Run", visible: true, name: "Hrs. Run" },
    { property: "LO_Temp", visible: true, name: "Temp" },
    { property: "DO_Temp", visible: true, name: "Temp" },
    { property: "Temperature_Deg_C_Thust_Brg", visible: true, name: "Thust Brg.	" },
    { property: "Temperature_Deg_C_Interm_Brg", visible: true, name: "Interm Brg.	" },
    { property: "Temperature_Deg_C_Stem_Tube_Oil", visible: true, name: "Stem Tube Oil" },
    { property: "Temperature_Deg_C_Sea_Water", visible: true, name: "Sea Water" },
    { property: "Temperature_Deg_C_ER", visible: true, name: "E.R." },
    { property: "HO_Sett_1", visible: true, name: "1" },
    { property: "HO_Sett_2", visible: true, name: "2" },
    { property: "HO_Serv_1", visible: true, name: "1" },
    { property: "HO_Serv_2", visible: true, name: "2" },

  ] as ListColumn[];

  boilerpurifiercolumns3:ListColumn[] = [
    { property: "Air_Temp_Deg_C_P_IN", visible: true, name: "IN" },
    { property: "Air_Temp_Deg_C_P_OUT", visible: true, name: "OUT" },
    { property: "Air_Temp_Deg_C_S_IN", visible: true, name: "IN" },
    { property: "Air_Temp_Deg_C_S_OUT", visible: true, name: "OUT" },

    { property: "Heat_Exchanger_Deg_C_FW_IN", visible: true, name: "IN" },
    { property: "Heat_Exchanger_Deg_C_FW_OUT", visible: true, name: "OUT" },

    { property: "Heat_Exchanger_Deg_C_SW_IN", visible: true, name: "IN" },
    { property: "Heat_Exchanger_Deg_C_SW_OUT", visible: true, name: "OUT" },

  ] as ListColumn[];

//Boiler & Purifir 2nd table columns
boilercolumns1:ListColumn[] = [
  { property: "Boiler_blank_1", visible: true, name: "" },
  { property: "BLR", visible: true, name: "BLR" },
  { property: "ME", visible: true, name: "M/E" },
  { property: "AE", visible: true, name: "A/E" },
  { property: "COMPR", visible: true, name: "COMPR" },

] as ListColumn[];

boilercolumns2:ListColumn[] = [
  { property: "JKT", visible: true, name: "JKT" },
  { property: "PIST", visible: true, name: "PIST" },

] as ListColumn[];

// Generator Engine
generatorenginecolumns1_1:ListColumn[] = [
  { property: "Temperator", visible: true, name: "Temperator" },
  { property: "PRESSURE-Kg", visible: true, name: "PRESSURE-Kg/Cm-Sq." },
  { property: "Amps", visible: true, name: "Amps" },
  { property: "KW", visible: true, name: "KW" },
] as ListColumn[];

generatorenginecolumns1_2:ListColumn[] = [
  { property: "WATCH", visible: true, name: "WATCH" },
  { property: "blank_1", visible: true, name: "" },
  { property: "blank_2", visible: true, name: "" },
  { property: "Generator_No", visible: true, name: "Generator No." },
  { property: "Running_Hrs", visible: true, name: "Running Hrs." },
  { property: "Exhaust", visible: true, name: "Exhaust" },
  { property: "CW", visible: true, name: "CW" },
  { property: "LO", visible: true, name: "CW" },
  { property: "Boost_Air", visible: true, name: "Boost Air" },
  { property: "Pedestal_Bearing", visible: true, name: "Pedestal Bearing" },
  { property: "Fuel_IN", visible: true, name: "Fuel IN" },
  { property: "AE_LO_COOLER", visible: true, name: "A/E LO COOLER" },
  { property: "LO_1", visible: true, name: "L.O." },
  { property: "CW_1", visible: true, name: "C.W." },
  { property: "Boost_Air_1", visible: true, name: "Boost Air" },
  { property: "Fuel_Oil", visible: true, name: "Fuel Oil" },

] as ListColumn[];

generatorenginecolumns1_3:ListColumn[] = [
  { property: "Exhaust_Max", visible: true, name: "Max" },
  { property: "Exhaust_Min", visible: true, name: "Min" },
  { property: "CW_In", visible: true, name: "In" },
  { property: "CW_Out", visible: true, name: "Out" },
  { property: "LO_In", visible: true, name: "In" },
  { property: "LO_Out", visible: true, name: "Out" },
  { property: "SW", visible: true, name: "SW" },
  { property: "LO", visible: true, name: "LO" },

] as ListColumn[];

generatorenginecolumns1_4:ListColumn[] = [
  { property: "SW_In", visible: true, name: "In" },
  { property: "SW_Out", visible: true, name: "Out" },
  { property: "LO_In", visible: true, name: "In" },
  { property: "LO_Out", visible: true, name: "Out" },

] as ListColumn[];

//  Generator engine table 2

GeneratorEngine: ListColumn[] = [
  { property: "Run_Hrs_1", visible: true, name: "Run_Hrs_1" },
  { property: "Strim_Press_1", visible: true, name: "Strim_Press_1" },
  { property: "Cond_Vac_1", visible: true, name: "Cond_Vac_1" },
  { property: "Gland_Steam_1", visible: true, name: "Gland_Steam_1" },
  { property: "Lo_Press_1", visible: true, name: "Lo_Press_1" },
  { property: "Lo_Temp_1", visible: true, name: "Lo_Temp_1" },
  { property: "Thrust_Brg_1", visible: true, name: "thrust_Brg_1" },
  { property: "Thrust_End_1", visible: true, name: "Thrust_End_1" },
  { property: "Blank_1", visible: true, name: "Blank_1" },
  { property: "KW_1", visible: true, name: "KW_1" },
  { property: "Amps_1", visible: true, name: "Amps_1" },
  { property: "Run_Hrs_2", visible: true, name: "Run_Hrs_2" },
  { property: "Clutch_2", visible: true, name: "Clutch_2" },
  { property: "Lo_Press_2", visible: true, name: "Lo_Press_2" },
  { property: "Lo_Temp_2", visible: true, name: "Lo_Temp_2" },
  { property: "Blank_Data_2", visible: true, name: "Blank_Data_2" },
  { property: "SG_Cont_2", visible: true, name: "SG_Cont_2" },
  { property: "Blank_2", visible: true, name: "Blank_2" },
  { property: "KW_2", visible: true, name: "KW_2" },
  { property: "Amps_2", visible: true, name: "Amps_2" },
] as ListColumn[];


// Fuel & Fresh Water Account
fuelwateraccountcolumns:ListColumn[] = [
  { property: "WATCH", visible: true, name: "WATCH" },
  { property: "REMARK_OF_ENGINEER_OFFICER_ON_WATCH", visible: true, name: "REMARK OF ENGINEER OFFICER ON WATCH" },

] as ListColumn[];

fuelwateraccountcolumns2_1:ListColumn[] = [
  { property: "blank_1", visible: true, name: "" },
  { property: "HO", visible: true, name: "H.O." },
  { property: "DO", visible: true, name: "D.O." },
  { property: "GO", visible: true, name: "G.O." },

] as ListColumn[];

// Chief Engineer Remarks

chiefengineercolumns1:ListColumn[] = [
  { property: "Grade", visible: true, name: "Grade" },
  { property: "MECC", visible: true, name: "MECC" },
  { property: "MECYL", visible: true, name: "MECYL" },
  { property: "AECC", visible: true, name: "AECC" },

] as ListColumn[];

chiefengineercolumns2:ListColumn[] = [
  { property: "CHIEF_ENGINEER_REMARK", visible: true, name: "CHIEF ENGINEER'S REMARK" },
 

] as ListColumn[];

// Working & Daily Performance
workingdailycolumns1:ListColumn[] = [
  { property: "blank_1", visible: true, name: "" },
  { property: "ME", visible: true, name: "M/E" },
  { property: "AE-1", visible: true, name: "AE-1" },
  { property: "AE-2", visible: true, name: "AE-2" },
  { property: "AE-3", visible: true, name: "AE-3" },
  { property: "AE-4", visible: true, name: "AE-4" },
  { property: "TA", visible: true, name: "TA" },
  { property: "SG", visible: true, name: "SG" },

] as ListColumn[];

workingdailycolumns2_1:ListColumn[] = [
  { property: "blank_1", visible: true, name: "" },
  { property: "blank_2", visible: true, name: "" },
  { property: "blank_3", visible: true, name: "" },
  { property: "blank_4", visible: true, name: "" },
  { property: "blank_5", visible: true, name: "" },
  { property: "blank_6", visible: true, name: "" },
  { property: "blank_7", visible: true, name: "" },
  { property: "blank_8", visible: true, name: "" },

] as ListColumn[];

  pageSize = 10;
  
  MainEnginedataSource: MatTableDataSource<any> | null;
  MainEngine2dataSource: MatTableDataSource<any> | null;
  BoilerPurifierdataSource: MatTableDataSource<any> | null;
  BoilerdataSource: MatTableDataSource<any> | null;
  GeneratorEngine1dataSource: MatTableDataSource<any> | null;
  GeneratorEngine2dataSource: MatTableDataSource<any> | null;
  FuelWaterAccountdataSource_1: MatTableDataSource<any> | null;
  FuelWaterAccountdataSource_2: MatTableDataSource<any> | null;
  ChiefEngineerdataSource1: MatTableDataSource<any> | null;
  ChiefEngineerdataSource2: MatTableDataSource<any> | null;
  WorkingDailydataSource1: MatTableDataSource<any> | null;
  WorkingDailydataSource2: MatTableDataSource<any> | null;
 

  constructor(private sidenavService:SidenavService, private titleService:Title) { 
    this.titleService.setTitle(``);
  }

// Main Engine 1st table
  get visibleColumnsMainEngine1() {
    return this.mainenginecolumns1
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsMainEngine2() {
    return this.enginelogcolumns2
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  get visibleColumnsMainEngine3() {
    return this.mainenginecolumns3
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsMainEngine4() {
    return this.mainenginecolumns4
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

// Main Engine 2nd table
  get visibleColumnsMainEngine2_1() {
    return this.mainenginecolumns2_1
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsMainEngine2_2() {
    return this.mainenginecolumns2_2
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsMainEngine2_3() {
    return this.mainenginecolumns2_3
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsMainEngine2_4() {
    return this.mainenginecolumns2_4
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  
// Boiler && Purifier 1st table
get visibleColumnsBoilerPurifier1() {
  return this.boilerpurifiercolumns1
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsBoilerPurifier2() {
  return this.boilerpurifiercolumns2
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsBoilerPurifier3() {
  return this.boilerpurifiercolumns3
    .filter((column) => column.visible)
    .map((column) => column.property);
}

// Boiler & Purifier 2nd table
get visibleColumnsBoiler1() {
  return this.boilercolumns1
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsBoiler2() {
  return this.boilercolumns2
    .filter((column) => column.visible)
    .map((column) => column.property);
}

// Generator Engine
get visibleColumnsGeneratorEngine1_1() {
return this.generatorenginecolumns1_1
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsGeneratorEngine1_2() {
  return this.generatorenginecolumns1_2
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  get visibleColumnsGeneratorEngine1_3() {
    return this.generatorenginecolumns1_3
        .filter((column) => column.visible)
        .map((column) => column.property);
    }
    get visibleColumnsGeneratorEngine1_4() {
      return this.generatorenginecolumns1_4
          .filter((column) => column.visible)
          .map((column) => column.property);
      }

      // Generator engine table 2
 get visibleColumnsGeneratorEngine2() {
        return this.GeneratorEngine
          .filter((column) => column.visible)
          .map((column) => column.property);
 }


// Fuel & Fresh Water Account table 1
get visibleColumnsFuelWaterAccount() {
  return this.fuelwateraccountcolumns
    .filter((column) => column.visible)
    .map((column) => column.property);
}
// Fuel & Fresh Water Account table 2
get visibleColumnsFuelWaterAccount2_1() {
  return this.fuelwateraccountcolumns2_1
    .filter((column) => column.visible)
    .map((column) => column.property);
}

// Chief Engineer Remark
get visibleColumnsChiefEngineer1() {
  return this.chiefengineercolumns1
    .filter((column) => column.visible)
    .map((column) => column.property);
}
get visibleColumnsChiefEngineer2() {
  return this.chiefengineercolumns2
    .filter((column) => column.visible)
    .map((column) => column.property);
}

// Working & Daily Performance
get visibleColumnsWorkingDaily1() {
  return this.workingdailycolumns1
    .filter((column) => column.visible)
    .map((column) => column.property);
}

get visibleColumnsWorkingDaily2_1(){
  return this.workingdailycolumns2_1
    .filter((column) => column.visible)
    .map((column) => column.property);
}


  ngOnInit(): void {
    this.MainEnginedataSource = new MatTableDataSource();
    this.MainEngine2dataSource = new MatTableDataSource();
    this.BoilerPurifierdataSource = new MatTableDataSource();
    this.BoilerdataSource = new MatTableDataSource();
    this.GeneratorEngine1dataSource = new MatTableDataSource();
    this.GeneratorEngine2dataSource = new MatTableDataSource();
    this.FuelWaterAccountdataSource_1 =  new MatTableDataSource();
    this.FuelWaterAccountdataSource_2 =  new MatTableDataSource();
    this.ChiefEngineerdataSource1 =  new MatTableDataSource();
    this.ChiefEngineerdataSource2 =  new MatTableDataSource();
    this.WorkingDailydataSource1 = new MatTableDataSource();
    this.WorkingDailydataSource2 = new MatTableDataSource();
  }

  check() {
    const start = 0;
    const end = 10;
    this.viewport.setRenderedRange({start, end});
    this.viewport.checkViewportSize();
  }

  ngAfterViewInit() {
    this.sidenavService.setCollapsed(true);   
   
  }
  
  ngOnDestroy() {
    this.sidenavService.setCollapsed(false);
  }
}
