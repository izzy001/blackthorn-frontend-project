import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutClickthroughComponent } from './checkout-clickthrough/checkout-clickthrough.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { Checkout2Component } from './checkout2/checkout2.component';

const routes: Routes = [
  {path: '', redirectTo: 'checkout-1', pathMatch: 'full'},
  {path: 'checkout-1', component: CheckoutComponent},
  {path: 'checkout-clickthrough', component: CheckoutClickthroughComponent},
  {path: 'checkout-2', component: Checkout2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
