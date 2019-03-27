import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckInServiceProvider } from '../../providers/check-in-service/check-in-service';

/**
 * Generated class for the NuevoFacturacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-facturacion',
  templateUrl: 'nuevo-facturacion.html',
})
export class NuevoFacturacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private CheckInServiceProvider: CheckInServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoFacturacionPage');
  }

  onNewCheckIn(nombre: string, apellidos: string, pasaporte: string, numero: string){
    this.CheckInServiceProvider.addCheckInUserData(nombre, apellidos, pasaporte, numero);
    this.CheckInServiceProvider.addActualCheckIn();
    this.navCtrl.pop();
  }

}
