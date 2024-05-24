import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoneyTransferRoutingModule } from './money-transfer-routing.module';
import { BankToBankComponent } from './bank-to-bank/bank-to-bank.component';
import { WalletToBankComponent } from './wallet-to-bank/wallet-to-bank.component';
import { StoreModule } from '@ngrx/store';
import { customerFeatureKey, reducer } from './store/reducer/money-transfer.reducer';


@NgModule({
  declarations: [
    BankToBankComponent,
    WalletToBankComponent
  ],
  imports: [
    CommonModule,
    MoneyTransferRoutingModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ]
})
export class MoneyTransferModule { }
