import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageModuleRoutingModule} from './page-module-routing.module';
import {CustomerComponent} from "./customer/customer.component";
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [CustomerComponent, PagesComponent],
  imports: [
    CommonModule,
    PageModuleRoutingModule
  ]
})
export class PageModuleModule {
}
