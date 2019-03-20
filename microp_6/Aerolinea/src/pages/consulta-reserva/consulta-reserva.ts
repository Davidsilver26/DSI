import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoVueloPage } from '../nuevo-vuelo/nuevo-vuelo';
import { Fly } from '../../models/fly.model';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service';

/**
 * Generated class for the ConsultaReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-reserva',
  templateUrl: 'consulta-reserva.html',
})
export class ConsultaReservaPage {

  flys: Fly[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private FlyServiceProvider:FlyServiceProvider) {
  }

  ionViewWillEnter() {
    this.flys = this.FlyServiceProvider.getFlys();
  }

  addNewFly(){
    this.navCtrl.push(NuevoVueloPage);
  }

}
