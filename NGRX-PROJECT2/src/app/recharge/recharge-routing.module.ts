import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { TvRechargeComponent } from './tv-recharge/tv-recharge.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"mobile-recharge",
    pathMatch:"full"
  },
  {
    path:"mobile-recharge",
    component:MobileRechargeComponent
  },
  {
    path:"tv-recharge",
    component:TvRechargeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechargeRoutingModule { }
