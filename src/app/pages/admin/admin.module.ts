import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCountriesComponent } from './library/admin-countries/admin-countries.component';
import { AdminCitiesComponent } from './library/admin-cities/admin-cities.component';
import { AdminAirportsComponent } from './library/admin-airports/admin-airports.component';
import { AdminPortsComponent } from './library/admin-ports/admin-ports.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { QuillModule } from 'ngx-quill';
import { AdminCountriesAddComponent } from './library/admin-countries/admin-countries-add/admin-countries-add.component';
import { AdminCitiesAddComponent } from './library/admin-cities/admin-cities-add/admin-cities-add.component';
import { AdminAirportsAddComponent } from './library/admin-airports/admin-airports-add/admin-airports-add.component';
import { AdminPortsAddComponent } from './library/admin-ports/admin-ports-add/admin-ports-add.component';
import { AdminLibVesselsDepartmentComponent } from './library/admin-lib-vessels-department/admin-lib-vessels-department.component';
import { AdminLibVesselsDepartmentAddComponent } from './library/admin-lib-vessels-department/admin-lib-vessels-department-add/admin-lib-vessels-department-add.component';
import { AdminLibVesselsComponent } from './library/admin-lib-vessels/admin-lib-vessels.component';
import { AdminLibVesselsAddComponent } from './library/admin-lib-vessels/admin-lib-vessels-add/admin-lib-vessels-add.component';



@NgModule({
  declarations: [
    AdminCountriesComponent,
    AdminCountriesAddComponent,
    AdminCitiesComponent,
    AdminCitiesAddComponent,
    AdminAirportsComponent,
    AdminAirportsAddComponent,
    AdminPortsComponent,
    AdminPortsAddComponent,
    AdminLibVesselsDepartmentComponent,
    AdminLibVesselsDepartmentAddComponent,
    AdminLibVesselsComponent,
    AdminLibVesselsAddComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    ListModule,
    BreadcrumbsModule,
    FuryCardModule,
    HighlightModule,
    QuillModule.forRoot(),
  ]
})
export class AdminModule { }
