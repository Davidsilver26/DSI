import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FlyServiceProvider } from '../../providers/fly-service/fly-service';

/**
 * Generated class for the NuevoVueloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-vuelo',
  templateUrl: 'nuevo-vuelo.html',
})
export class NuevoVueloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private FlyServiceProvider:FlyServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoVueloPage');
  }

  onNewFly(value: {idVuelo:string, origen:string, destino:string, fecha:Date}){
    value.fecha = new Date(value.fecha);
    this.FlyServiceProvider.addFly(value);
    this.navCtrl.pop();
  }

}
