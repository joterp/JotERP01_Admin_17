import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCountriesComponent } from './library/admin-countries/admin-countries.component';
import { AdminAirportsComponent } from './library/admin-airports/admin-airports.component';
import { AdminPortsComponent } from './library/admin-ports/admin-ports.component';
import { AdminCitiesComponent } from './library/admin-cities/admin-cities.component';
import { AdminLibVesselsDepartmentComponent } from './library/admin-lib-vessels-department/admin-lib-vessels-department.component';
import { AdminLibVesselsComponent } from './library/admin-lib-vessels/admin-lib-vessels.component';
import { AdminSystemParametersComponent } from './library/admin-system-parameters/admin-system-parameters.component';
import { AdminCompaniesComponent } from './library/admin-companies/admin-companies.component';
import { AdminCompanyOfficeComponent } from './library/admin-company-office/admin-company-office.component';
import { AdminCompanyBankAccountComponent } from './library/admin-company-bank-account/admin-company-bank-account.component';
import { AdminFleetsComponent } from './library/admin-fleets/admin-fleets.component';
import { AdminVesselFlagsComponent } from './library/admin-vessel-flags/admin-vessel-flags.component';
import { AdminOfficeDepartmentsComponent } from './library/admin-office-departments/admin-office-departments.component';


const routes: Routes = [
  {
    path: "library/Admin_Lib_Companies", component: AdminCompaniesComponent
  }, 
  {
    path: "library/Admin_Lib_Companyoffice", component: AdminCompanyOfficeComponent
  }, 
  {
    path: "library/Admin_Lib_CompanyBankAccounts", component: AdminCompanyBankAccountComponent
  },
  {
    path: "library/Admin_Lib_Fleets", component: AdminFleetsComponent
  },
  {
    path: "library/Admin_Lib_VesselFlag", component: AdminVesselFlagsComponent
  },
  {
    path: "library/Admin_Lib_Countries", component: AdminCountriesComponent
  },
  {
    path: "library/Admin_Lib_Cities", component: AdminCitiesComponent
  },
  {
    path: "library/Admin_Lib_Airports", component: AdminAirportsComponent
  },
  {
    path: "library/Admin_Lib_Ports", component: AdminPortsComponent
  }, 
  {
    path: "library/Admin_Lib_Office_Departments", component: AdminOfficeDepartmentsComponent
  }, 
  {
    path: "library/Admin_Lib_Vessel_Department", component: AdminLibVesselsDepartmentComponent
  },
  {
    path: "library/Admin_Lib_Vessel", component: AdminLibVesselsComponent
  }, 
  {
    path: "library/Admin_Lib_System_Parameters", component: AdminSystemParametersComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
