import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contact } from '../../providers/models/models';
import { ContactService } from '../../providers/services/services';

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-contacto',
  templateUrl: 'ver-contacto.html',
})
export class VerContactoPage {

  contact: Contact;
  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService:ContactService) {
    this.contact = this.navParams.data;
    console.log(this.contact.key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerContactoPage');
  }

  onUpdateContact(value: Contact){
    this.ContactService.updateContact(value);
    this.navCtrl.pop();
  }

  onRemoveContact(value:Contact){
    this.ContactService.removeContact(value);
    this.navCtrl.pop();
  }

}
