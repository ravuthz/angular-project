import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';


@NgModule({
  declarations: [FrontendComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
