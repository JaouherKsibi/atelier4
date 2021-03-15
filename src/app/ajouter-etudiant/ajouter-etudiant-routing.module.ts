import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterEtudiantPage } from './ajouter-etudiant.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterEtudiantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterEtudiantPageRoutingModule {}
