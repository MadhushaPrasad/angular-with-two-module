import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PageModuleRoutingModule} from './page-module-routing.module';
import {CustomerComponent} from "./customer/customer.component";


@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    PageModuleRoutingModule
  ]
})
export class PageModuleModule {
}
