import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentSuccessPageComponent } from './payment-success-page.component';

const routes: Routes = [
  {
    path:'',
    component:PaymentSuccessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentSuccessPageRoutingModule { }
