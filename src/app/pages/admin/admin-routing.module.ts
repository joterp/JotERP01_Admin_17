import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCountriesComponent } from './library/admin-countries/admin-countries.component';
import { AdminAirportsComponent } from './library/admin-airports/admin-airports.component';
import { AdminPortsComponent } from './library/admin-ports/admin-ports.component';
import { AdminCitiesComponent } from './library/admin-cities/admin-cities.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
