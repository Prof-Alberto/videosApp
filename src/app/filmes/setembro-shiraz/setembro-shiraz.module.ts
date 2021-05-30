import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetembroShirazPageRoutingModule } from './setembro-shiraz-routing.module';

import { SetembroShirazPage } from './setembro-shiraz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetembroShirazPageRoutingModule
  ],
  declarations: [SetembroShirazPage]
})
export class SetembroShirazPageModule {}
