import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutClickthroughComponent } from './checkout-clickthrough/checkout-clickthrough.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: 'checkout-1', pathMatch: 'full'},
  {path: 'checkout-1', component: CheckoutComponent},
  {path: 'checkout-clickthrough', component: CheckoutClickthroughComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
