import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { Contact } from '../../providers/models/models';
import { ContactService } from '../../providers/services/services';

@IonicPage()
@Component({
selector: 'page-libreta-contactos',
templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {
    contacts: Contact[] =[];
    constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
     }
    ionViewWillEnter(){
     this.contacts = this.ContactService.getContacts();
     }
    onLoadContactosPage(){
     this.navCtrl.push(NuevoContactoPage);
     }
}