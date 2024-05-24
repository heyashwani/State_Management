import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeRoutingModule } from './recharge-routing.module';
import { MobileRechargeComponent } from './mobile-recharge/mobile-recharge.component';
import { TvRechargeComponent } from './tv-recharge/tv-recharge.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/recharge.reducer';


@NgModule({
  declarations: [
    MobileRechargeComponent,
    TvRechargeComponent
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ]
})
export class RechargeModule { }
