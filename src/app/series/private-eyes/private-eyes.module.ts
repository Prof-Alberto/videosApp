import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivateEyesPageRoutingModule } from './private-eyes-routing.module';

import { PrivateEyesPage } from './private-eyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivateEyesPageRoutingModule
  ],
  declarations: [PrivateEyesPage]
})
export class PrivateEyesPageModule {}
