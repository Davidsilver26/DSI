import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import {VerContactoPage} from '../ver-contacto/ver-contacto'
import { Contact } from '../../providers/models/models';
import { ContactService } from '../../providers/services/services';
import { Observable } from 'rxjs/Observable';
import { c } from '@angular/core/src/render3';

@IonicPage()
@Component({
selector: 'page-libreta-contactos',
templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {
    contacts$: Observable<Contact[]>;
    //contacts: Contact[] =[];
    constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
     }
    ionViewWillEnter(){
        //this.contacts = this.ContactService.getContacts();
        //this.contacts$ = this.ContactService.getContacts().snapshotChanges.map(changes => {return changes.map(c=> ({key: c.payload.key, ...c.payload.val()}))});
        this.contacts$ = this.ContactService.getContacts().snapshotChanges().map(
            changes => {return changes.map(c=> ({key: c.payload.key, ...c.payload.val()}));
            });
    
    }

    onLoadContactosPage(){
     this.navCtrl.push(NuevoContactoPage);
     }

    onItemTrapped($event, contact){
        this.navCtrl.push(VerContactoPage);
    }
}