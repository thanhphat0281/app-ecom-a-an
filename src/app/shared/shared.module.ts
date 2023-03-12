import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import {PaginatorModule} from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { InnerMsgDirective } from './directives/inner-msg.directive';

const declarations: any[] = [InnerMsgDirective];

const PRIMENG = [  
  DataViewModule,
  PaginatorModule,
  DropdownModule,
  DialogModule,
  PanelModule,
  RatingModule,
  ButtonModule,
  SliderModule,
  InputTextModule
]
const imports = [
  CommonModule,
 
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  
  ...PRIMENG
];


@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class SharedModule {}
