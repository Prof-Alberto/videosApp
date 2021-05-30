import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetembroShirazPage } from './setembro-shiraz.page';

const routes: Routes = [
  {
    path: '',
    component: SetembroShirazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetembroShirazPageRoutingModule {}
