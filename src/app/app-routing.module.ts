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
  },
  {
    path: 'evil',
    loadChildren: () => import('./series/evil/evil.module').then( m => m.EvilPageModule)
  },
  {
    path: 'crimes-premeditados',
    loadChildren: () => import('./series/crimes-premeditados/crimes-premeditados.module').then( m => m.CrimesPremeditadosPageModule)
  },
  {
    path: 'svu',
    loadChildren: () => import('./series/svu/svu.module').then( m => m.SvuPageModule)
  },
  {
    path: 'good-doctor',
    loadChildren: () => import('./series/good-doctor/good-doctor.module').then( m => m.GoodDoctorPageModule)
  },
  {
    path: 'private-eyes',
    loadChildren: () => import('./series/private-eyes/private-eyes.module').then( m => m.PrivateEyesPageModule)
  },
  {
    path: 'dados-serie',
    loadChildren: () => import('./dados-serie/dados-serie.module').then( m => m.DadosSeriePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
