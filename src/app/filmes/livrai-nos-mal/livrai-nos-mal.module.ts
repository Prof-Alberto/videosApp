import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivraiNosMalPageRoutingModule } from './livrai-nos-mal-routing.module';

import { LivraiNosMalPage } from './livrai-nos-mal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraiNosMalPageRoutingModule
  ],
  declarations: [LivraiNosMalPage]
})
export class LivraiNosMalPageModule {}
