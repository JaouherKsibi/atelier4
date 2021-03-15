import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  liste:any=[];


  constructor(private db:AngularFirestore,private router:Router) {
    this.getEtudiants();
  }
  getEtudiants(){
    this.db.collection("etudiant").snapshotChanges()
    .subscribe
    ( data=>{
      this.liste=data.map(
        e=>{
          return{
            id:e.payload.doc.id,
            nom:e.payload.doc.data()['nom'],
            prenom:e.payload.doc.data()['prenom'],
            departement:e.payload.doc.data()['departement'],
            groupe:e.payload.doc.data()['groupe']
          }
        }
      )
    })
  }
  delete(item) {
    this.db.doc("etudiant/" + item.id).delete();
    this.getEtudiants();
   }
   nom:string=""; prenom:string=""; departement="";groupe="";
   addEtudiant1(){
     this.router.navigateByUrl('/ajouter-etudiant');
   }

liv:any;

allermodif(lv){
  let navigationExtras:NavigationExtras={
    queryParams:{
      special:JSON.stringify(lv)
    }
  }
  this.router.navigate(['/modifier-etudiant'],navigationExtras);
}
}
