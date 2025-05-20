import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NouveauConsultationComponent } from './nouveau-consultation/nouveau-consultation.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { EtatStockComponent } from './etat-stock/etat-stock.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'NewConsultation',
    component: NouveauConsultationComponent,
  },
  {
    path: 'listConsultation',
    component: ConsultationListComponent,

  },
  {
    path: 'Ordonnance',
    component: OrdonnanceComponent,

  },
  {
    path: 'Etat_stock',
    component: EtatStockComponent,

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
