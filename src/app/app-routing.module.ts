import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: 'checkout-1', pathMatch: 'full'},
  {path: 'checkout-1', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
