import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankToBankComponent } from './bank-to-bank/bank-to-bank.component';
import { WalletToBankComponent } from './wallet-to-bank/wallet-to-bank.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"bank-to-bank",
    pathMatch:"full"
  },
  {
    path:"bank-to-bank",
    component:BankToBankComponent
  },
  {
    path:"wallet-to-bank",
    component:WalletToBankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoneyTransferRoutingModule { }
