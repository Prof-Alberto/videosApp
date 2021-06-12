import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SvuPageRoutingModule } from './svu-routing.module';

import { SvuPage } from './svu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SvuPageRoutingModule
  ],
  declarations: [SvuPage]
})
export class SvuPageModule {}
