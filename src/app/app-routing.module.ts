import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'setembro-shiraz',
    loadChildren: () => import('./filmes/setembro-shiraz/setembro-shiraz.module').then( m => m.SetembroShirazPageModule)
  },
  {
    path: 'livrai-nos-mal',
    loadChildren: () => import('./filmes/livrai-nos-mal/livrai-nos-mal.module').then( m => m.LivraiNosMalPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
