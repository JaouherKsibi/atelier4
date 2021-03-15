import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterEtudiantPageRoutingModule } from './ajouter-etudiant-routing.module';

import { AjouterEtudiantPage } from './ajouter-etudiant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterEtudiantPageRoutingModule
  ],
  declarations: [AjouterEtudiantPage]
})
export class AjouterEtudiantPageModule {}
