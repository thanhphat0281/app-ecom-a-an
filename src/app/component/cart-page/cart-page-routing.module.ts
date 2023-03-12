import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutPageComponent } from '../check-out-page/check-out-page.component';
import { CartPageComponent } from './cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: CartPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartPageRoutingModule { }
