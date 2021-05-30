import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraiNosMalPage } from './livrai-nos-mal.page';

const routes: Routes = [
  {
    path: '',
    component: LivraiNosMalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraiNosMalPageRoutingModule {}
