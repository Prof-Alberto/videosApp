import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvilPageRoutingModule } from './evil-routing.module';

import { EvilPage } from './evil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvilPageRoutingModule
  ],
  declarations: [EvilPage]
})
export class EvilPageModule {}
