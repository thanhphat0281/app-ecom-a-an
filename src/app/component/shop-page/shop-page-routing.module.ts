import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { ShopPageComponent } from './shop-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent
  }, 
  {
    path: '',
    component: FilterProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopPageRoutingModule { }
