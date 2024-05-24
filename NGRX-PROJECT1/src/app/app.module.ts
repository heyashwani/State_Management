import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, customerFeatureKey, reducer, userReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot({ user:userReducer,count: counterReducer }),
    
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(customerFeatureKey, reducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
