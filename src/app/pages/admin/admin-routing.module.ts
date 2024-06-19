import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCountriesComponent } from './library/admin-countries/admin-countries.component';
import { AdminAirportsComponent } from './library/admin-airports/admin-airports.component';
import { AdminPortsComponent } from './library/admin-ports/admin-ports.component';
import { AdminCitiesComponent } from './library/admin-cities/admin-cities.component';
import { AdminLibVesselsDepartmentComponent } from './library/admin-lib-vessels-department/admin-lib-vessels-department.component';
import { AdminLibVesselsComponent } from './library/admin-lib-vessels/admin-lib-vessels.component';


const routes: Routes = [
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
    path: "library/Admin_Lib_Vessel_Department", component: AdminLibVesselsDepartmentComponent
  },
  {
    path: "library/Admin_Lib_Vessel", component: AdminLibVesselsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
