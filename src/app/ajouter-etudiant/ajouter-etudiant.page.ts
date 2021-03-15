import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.page.html',
  styleUrls: ['./ajouter-etudiant.page.scss'],
})
export class AjouterEtudiantPage implements OnInit {
  nom:string;
  prenom:string;
  departement:string;
  groupe:string;
  constructor(private db:AngularFirestore,private router:Router) { }
  addEtudiant() {
    this.db.collection("etudiant").add({ nom: this.nom, prenom: this.prenom ,departement: this.departement,groupe: this.groupe})
    .then( data => { })
    .catch( err => { console.log(err); });
    this.router.navigateByUrl('/home');
   }
  ngOnInit() {
  }

}
