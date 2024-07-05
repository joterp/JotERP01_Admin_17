import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLibCodesComponent } from './Libraries/accounts-lib-codes/accounts-lib-codes.component';
import { AccountsLibManageCurrenciesComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies.component';
import { AccountsLibDrcCategoryComponent } from './Libraries/accounts-lib-drc-category/accounts-lib-drc-category.component';
import { AccountsLibDrcAccCategorisationComponent } from './Libraries/accounts-lib-drc-acc-categorisation/accounts-lib-drc-acc-categorisation.component';
import { AccountsLibDebitCreditCardsComponent } from './Libraries/accounts-lib-debit-credit-cards/accounts-lib-debit-credit-cards.component';
import { AccountsLibQUOItemsComponent } from './Libraries/accounts-lib-quo-items/accounts-lib-quo-items.component';
import { AccountsDRCQUOCompanyComponent } from './Libraries/accounts-drc-quo-company/accounts-drc-quo-company.component';
import { AccountsDRCQUOFootNotesComponent } from './Libraries/accounts-drc-quo-foot-notes/accounts-drc-quo-foot-notes.component';



const routes: Routes = [
  {
    path: "libraries/Accounts_Lib_Currency", component: AccountsLibManageCurrenciesComponent
  },  
  {
    path: "libraries/Accounts_Lib_Codes", component: AccountsLibCodesComponent
  },  
  {
    path: "libraries/Accounts_Lib_Categories", component: AccountsLibDrcCategoryComponent
  },  
  {
    path: "libraries/Accounts_Lib_Report_ACC_Categorization", component: AccountsLibDrcAccCategorisationComponent
  },  
  
  {
    path: "libraries/Accounts_Lib_Debit_Credit_Card", component: AccountsLibDebitCreditCardsComponent
  },  
  {
    path: "libraries/Accounts_Lib_QUO_Items", component: AccountsLibQUOItemsComponent
  },  

  {
    path: "libraries/Accounts_Lib_DRC_QUO_Company", component: AccountsDRCQUOCompanyComponent
  },   
  {
    path: "libraries/Accounts_Lib_DRC_QUO_FootNotes", component: AccountsDRCQUOFootNotesComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
