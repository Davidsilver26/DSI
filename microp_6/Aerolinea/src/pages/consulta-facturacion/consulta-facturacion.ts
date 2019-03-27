import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Fly } from '../../models/fly.model';
import { FlyServiceProvider } from '../../providers/fly-service/fly-service';
import { CheckInServiceProvider } from '../../providers/check-in-service/check-in-service';
import { NuevoFacturacionPage } from '../nuevo-facturacion/nuevo-facturacion';
import { TarjetaEmbarquePage } from '../tarjeta-embarque/tarjeta-embarque';

/**
 * Generated class for the ConsultaFacturacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta-facturacion',
  templateUrl: 'consulta-facturacion.html',
})
export class ConsultaFacturacionPage {

  facFlys: Fly[]= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private FlyServiceProvider:FlyServiceProvider, private CheckInServiceProvider:CheckInServiceProvider) {
  }

  ionViewDidLoad() {
    this.facFlys = this.FlyServiceProvider.getReservedFlys();
  }

  checkInFly(value: Fly){
    this.CheckInServiceProvider.addCheckInFlyData(value.idVuelo, value.origen, value.destino, value.fecha);
    this.navCtrl.push(NuevoFacturacionPage);
  }

  getCheckInDisabled(value: Fly){
    var today = new Date();
    var dateDiff = ( value.fecha.getTime() - today.getTime() ) / (24*3600*1000);
    if(dateDiff <= 1){
      return !this.getBoardingPassDisabled(value);
    }
    return true;
  }

  getBoardingPassDisabled(value: Fly){
    var checkedFlys = this.CheckInServiceProvider.checkInFlys;
    for(var i = 0; i<checkedFlys.length; i++){
      if(value.idVuelo == checkedFlys[i].idVuelo){
        return false;
      }
    }
    return true;
  }

  showBoardingPass(value: Fly){
    this.CheckInServiceProvider.setActualCheckIn(value.idVuelo);
    this.navCtrl.push(TarjetaEmbarquePage);
  }

}
