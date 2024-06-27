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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { AdminSystemParametersComponent } from './library/admin-system-parameters/admin-system-parameters.component';
import { AdminModuleAddComponent } from './library/admin-system-parameters/admin-module-add/admin-module-add.component';
import { AdminParentAddComponent } from './library/admin-system-parameters/admin-parent-add/admin-parent-add.component';
import { AdminChildAddComponent } from './library/admin-system-parameters/admin-child-add/admin-child-add.component';
import { AdminGrandchildAddComponent } from './library/admin-system-parameters/admin-grandchild-add/admin-grandchild-add.component';
import { AdminGreatgrandchildAddComponent } from './library/admin-system-parameters/admin-greatgrandchild-add/admin-greatgrandchild-add.component';
import { AdminCompaniesComponent } from './library/admin-companies/admin-companies.component';
import { AdminCompanyOfficeComponent } from './library/admin-company-office/admin-company-office.component';
import { AdminCompaniesAddComponent } from './library/admin-companies/admin-companies-add/admin-companies-add.component';
import { AdminCompanyOfficeAddComponent } from './library/admin-company-office/admin-company-office-add/admin-company-office-add.component';
import { AdminCompaniesAddTimezoneComponent } from './library/admin-companies/admin-companies-add/admin-companies-add-timezone/admin-companies-add-timezone.component';
import { AdminCompanyBankAccountComponent } from './library/admin-company-bank-account/admin-company-bank-account.component';
import { AdminFleetsComponent } from './library/admin-fleets/admin-fleets.component';
import { AdminFleetsAddComponent } from './library/admin-fleets/admin-fleets-add/admin-fleets-add.component';
import { AdminVesselFlagsComponent } from './library/admin-vessel-flags/admin-vessel-flags.component';
import { AdminVesselFlagsAddComponent } from './library/admin-vessel-flags/admin-vessel-flags-add/admin-vessel-flags-add.component';
import { AdminCompanyBankAccountAddComponent } from './library/admin-company-bank-account/admin-company-bank-account-add/admin-company-bank-account-add.component';
import { AdminOfficeDepartmentsComponent } from './library/admin-office-departments/admin-office-departments.component';
import { AdminOfficeDepartmentsAddComponent } from './library/admin-office-departments/admin-office-departments-add/admin-office-departments-add.component';



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
    AdminLibVesselsAddComponent,
    AdminSystemParametersComponent,
    AdminModuleAddComponent,
    AdminParentAddComponent,
    AdminChildAddComponent,
    AdminGrandchildAddComponent,
    AdminGreatgrandchildAddComponent,
    AdminCompaniesComponent,
    AdminCompanyOfficeComponent,
    AdminCompaniesAddComponent,
    AdminCompanyOfficeAddComponent,
    AdminCompaniesAddTimezoneComponent,
    AdminCompanyBankAccountComponent,
    AdminCompanyBankAccountAddComponent,
    AdminFleetsComponent,
    AdminFleetsAddComponent,
    AdminVesselFlagsComponent,
    AdminVesselFlagsAddComponent,
    AdminOfficeDepartmentsComponent,
    AdminOfficeDepartmentsAddComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    NgxMatDatetimePickerModule,
    ListModule,
    BreadcrumbsModule,
    FuryCardModule,
    HighlightModule,
    MatDatepickerModule,
    QuillModule.forRoot(),
  ]
})
export class AdminModule { }
