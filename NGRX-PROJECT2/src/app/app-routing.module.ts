import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:"recharge",
    loadChildren:()=>import('./recharge/recharge.module').then(m=>m.RechargeModule)
  },
  {
    path:"money-transfer",
    loadChildren:()=>import('./money-transfer/money-transfer.module').then(m=>m.MoneyTransferModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
