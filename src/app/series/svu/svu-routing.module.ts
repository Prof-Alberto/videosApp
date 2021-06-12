import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SvuPage } from './svu.page';

const routes: Routes = [
  {
    path: '',
    component: SvuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SvuPageRoutingModule {}
