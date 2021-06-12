import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrimesPremeditadosPage } from './crimes-premeditados.page';

const routes: Routes = [
  {
    path: '',
    component: CrimesPremeditadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrimesPremeditadosPageRoutingModule {}
