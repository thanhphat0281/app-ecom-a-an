import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PaymentSuccessPageComponent } from './payment-success-page.component';
import { SharedModule } from 'primeng/api';
import { PaymentSuccessPageRoutingModule } from './payment-success-page-routing.module';

const declarations: any[] =[PaymentSuccessPageComponent]
const imports =[CommonModule,SharedModule, PaymentSuccessPageRoutingModule]

@NgModule({
  declarations: [...declarations],
  imports: [...imports]
})
export class PaymentSuccessPageModule { }
