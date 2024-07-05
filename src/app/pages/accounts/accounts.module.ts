import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { QuillModule } from 'ngx-quill';

import { AccountsLibCodesComponent } from './Libraries/accounts-lib-codes/accounts-lib-codes.component';
import { AccountsLibCodesAddComponent } from './Libraries/accounts-lib-codes/accounts-lib-codes-add/accounts-lib-codes-add.component';
import { AccountsLibDrcCategoryComponent } from './Libraries/accounts-lib-drc-category/accounts-lib-drc-category.component';
import { AccountsLibDrcCategoryAddComponent } from './Libraries/accounts-lib-drc-category/accounts-lib-drc-category-add/accounts-lib-drc-category-add.component';
import { AccountsLibDrcAccCategorisationComponent } from './Libraries/accounts-lib-drc-acc-categorisation/accounts-lib-drc-acc-categorisation.component';
import { AccountsLibDrcAccCategorisationAddComponent } from './Libraries/accounts-lib-drc-acc-categorisation/accounts-lib-drc-acc-categorisation-add/accounts-lib-drc-acc-categorisation-add.component';
import { AccountsLibDebitCreditCardsComponent } from './Libraries/accounts-lib-debit-credit-cards/accounts-lib-debit-credit-cards.component';
import { AccountsLibDebitCreditCardsAddComponent } from './Libraries/accounts-lib-debit-credit-cards/accounts-lib-debit-credit-cards-add/accounts-lib-debit-credit-cards-add.component';
import { AccountsLibManageCurrenciesComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies.component';
import { AccountsLibManageCurrenciesAddComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies-add/accounts-lib-manage-currencies-add.component';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AccountsLibQUOItemsComponent } from './Libraries/accounts-lib-quo-items/accounts-lib-quo-items.component';
import { AccountsLibQUOItemsAddComponent } from './Libraries/accounts-lib-quo-items/accounts-lib-quo-items-add/accounts-lib-quo-items-add.component';
import { AccountsDRCQUOCompanyComponent } from './Libraries/accounts-drc-quo-company/accounts-drc-quo-company.component';
import { AccountsDRCQUOCompanyAddComponent } from './Libraries/accounts-drc-quo-company/accounts-drc-quo-company-add/accounts-drc-quo-company-add.component';
import { AccountsDRCQUOFootNotesComponent } from './Libraries/accounts-drc-quo-foot-notes/accounts-drc-quo-foot-notes.component';
import { AccountsDRCQUOFootNotesAddComponent } from './Libraries/accounts-drc-quo-foot-notes/accounts-drc-quo-foot-notes-add/accounts-drc-quo-foot-notes-add.component';
import { AccountsDRCQUORecorderFootNotesAddComponent } from './Libraries/accounts-drc-quo-foot-notes/accounts-drc-quo-recorder-foot-notes-add/accounts-drc-quo-recorder-foot-notes-add.component';


@NgModule({
  declarations: [
   
    AccountsLibManageCurrenciesComponent,
    AccountsLibManageCurrenciesAddComponent,
    AccountsLibCodesComponent,
    AccountsLibCodesAddComponent,
    AccountsLibDrcCategoryComponent,
    AccountsLibDrcCategoryAddComponent,
    AccountsLibDrcAccCategorisationComponent,
    AccountsLibDrcAccCategorisationAddComponent,
    AccountsLibDebitCreditCardsComponent,
    AccountsLibDebitCreditCardsAddComponent,
    AccountsLibQUOItemsComponent,
    AccountsLibQUOItemsAddComponent,
    AccountsDRCQUOCompanyComponent,
    AccountsDRCQUOCompanyAddComponent,
    AccountsDRCQUOFootNotesComponent,
    AccountsDRCQUOFootNotesAddComponent,
    AccountsDRCQUORecorderFootNotesAddComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
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
export class AccountsModule { }
