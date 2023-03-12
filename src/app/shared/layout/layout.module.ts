import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { RouterModule } from '@angular/router';
import {DataViewModule} from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const declarations: any[] = [TopNavComponent,BottomNavComponent,SideNavComponent,LayoutComponent];

const PRIMENG = [  
  DataViewModule,
  InputTextModule
]
const imports = [
  CommonModule,
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  RouterModule,
  Ng2SearchPipeModule,
  ...PRIMENG

];

@NgModule({
  declarations: [...declarations],
  exports: [...declarations, ...imports],
  imports: [...imports],
})
export class LayoutModule {}