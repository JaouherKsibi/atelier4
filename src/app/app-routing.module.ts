import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ajouter-etudiant',
    loadChildren: () => import('./ajouter-etudiant/ajouter-etudiant.module').then( m => m.AjouterEtudiantPageModule)
  },
  {
    path: 'modifier-etudiant',
    loadChildren: () => import('./modifier-etudiant/modifier-etudiant.module').then( m => m.ModifierEtudiantPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
