import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailPageRoutingModule } from './product-detail-page-routing.module';
import { ProductDetailPageComponent } from './product-detail-page.component';


const declarations: any[] = [ProductDetailPageComponent];
const imports = [CommonModule, SharedModule,ProductDetailPageRoutingModule];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class ProductDetailPageModule {}
