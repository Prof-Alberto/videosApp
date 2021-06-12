import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateEyesPage } from './private-eyes.page';

const routes: Routes = [
  {
    path: '',
    component: PrivateEyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateEyesPageRoutingModule {}
