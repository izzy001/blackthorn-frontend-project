import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutClickthroughComponent } from './checkout-clickthrough/checkout-clickthrough.component';
import { Checkout2Component } from './checkout2/checkout2.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CheckoutClickthroughComponent,
    Checkout2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
