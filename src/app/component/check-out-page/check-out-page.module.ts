import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InnerMsgDirective } from 'src/app/shared/directives/inner-msg.directive';


import { SharedModule } from 'src/app/shared/shared.module';
import { CheckOutPageRoutingModule } from './check-out-page-routing.module';
import { CheckOutPageComponent } from './check-out-page.component';

const declarations: any[] = [CheckOutPageComponent];
const imports = [CommonModule, SharedModule,CheckOutPageRoutingModule];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class CheckOutPageModule {}
