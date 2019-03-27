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
  shownFlys: Fly[]= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private FlyServiceProvider:FlyServiceProvider) {
  }

  ionViewWillEnter() {
    this.flys = this.FlyServiceProvider.getFlys();
  }

  addNewFly(){
    this.navCtrl.push(NuevoVueloPage);
  }

  reserveFly(value: Fly){
    this.FlyServiceProvider.addReservedFly(value);
  }

  deleteFly(value: Fly){
    this.flys = this.FlyServiceProvider.removeFly(value);
  }

  onFlyFilters(origen: string, destino: string, fecha: string){
    this.flys = this.FlyServiceProvider.getFlys();
    this.shownFlys = [];
    var fechaDate = new Date(fecha);
    for(var i = 0; i<this.flys.length; i++){
      if( (origen == "" || origen == this.flys[i].origen) 
      && (destino == "" || destino == this.flys[i].destino) 
      && (fecha == "" || fechaDate.getTime() == this.flys[i].fecha.getTime())){
        this.shownFlys.push(this.flys[i]);
      }
    }
    this.flys = this.shownFlys;
  }

}
