import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsLibManageCurrenciesComponent } from './Libraries/accounts-lib-manage-currencies/accounts-lib-manage-currencies.component';


const routes: Routes = [
  {
    path: "libraries/Accounts_Lib_Currency", component: AccountsLibManageCurrenciesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
