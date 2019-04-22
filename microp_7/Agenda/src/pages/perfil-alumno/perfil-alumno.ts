import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contact } from '../../providers/models/contact.model';
import { QuizStats } from '../../providers/quiz-stats/quiz-stats';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from "angularfire2/database";


/**
 * Generated class for the PerfilAlumnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-alumno',
  templateUrl: 'perfil-alumno.html',
})
export class PerfilAlumnoPage {

  contacts$: Observable<QuizStats[]>;

  private contactsRef=this.db.list<QuizStats>('quizStats/'+this.navParams.data);

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    //console.log("asfasdfasdf "+ this.aa);
    
    console.log(this.navParams.data);
    debugger;
        //this.contacts = this.ContactService.getContacts();
        //this.contacts$ = this.ContactService.getContacts().snapshotChanges.map(changes => {return changes.map(c=> ({key: c.payload.key, ...c.payload.val()}))});
        this.contacts$ = this.contactsRef.snapshotChanges().map(
            changes => {return changes.map(c=> ({key: c.payload.key, ...c.payload.val()}));
            });
        debugger
  }

}
