import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.page.html',
  styleUrls: ['./modifier-etudiant.page.scss'],
})
export class ModifierEtudiantPage implements OnInit {
  lv:any;
  constructor(private db:AngularFirestore,private route:ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params=>{
      if(params&&params.special){
        this.lv=JSON.parse(params.special);

      }
    })
  }
  modifier(){
    this.db.doc("etudiant/"+this.lv.id).update(this.lv);
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
