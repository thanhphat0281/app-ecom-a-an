import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShopPageComponent } from './shop-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopPageRoutingModule } from './shop-page-routing.module';
import { FilterProductComponent } from './filter-product/filter-product.component';
import { PaginatorModule } from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { GetDataService } from 'src/app/shared/service/get-data.service';


const declarations: any[] = [ShopPageComponent];

const imports = [CommonModule, SharedModule,ShopPageRoutingModule];

@NgModule({
  declarations: [...declarations, FilterProductComponent],
  exports: [...declarations, ...imports],
  imports: [...imports],
  providers: [GetDataService]
})
export class ShopPageModule {}
