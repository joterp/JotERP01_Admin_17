import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsLibManageCurrenciesComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies.component';
import { AccountsLibManageCurrenciesAddComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies-add/accounts-lib-manage-currencies-add.component';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
   
    AccountsLibManageCurrenciesComponent,
    AccountsLibManageCurrenciesAddComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
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
export class AccountsModule { }
