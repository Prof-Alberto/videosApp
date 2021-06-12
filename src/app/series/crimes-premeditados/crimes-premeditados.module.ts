import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrimesPremeditadosPageRoutingModule } from './crimes-premeditados-routing.module';

import { CrimesPremeditadosPage } from './crimes-premeditados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrimesPremeditadosPageRoutingModule
  ],
  declarations: [CrimesPremeditadosPage]
})
export class CrimesPremeditadosPageModule {}
