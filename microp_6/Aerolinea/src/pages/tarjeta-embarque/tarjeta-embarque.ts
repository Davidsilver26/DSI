import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CheckInServiceProvider} from '../../providers/check-in-service/check-in-service';
import { checkIn } from '../../models/checkIn.model';

/**
 * Generated class for the TarjetaEmbarquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjeta-embarque',
  templateUrl: 'tarjeta-embarque.html',
})
export class TarjetaEmbarquePage {

  flyCheckIn: checkIn;

  constructor(public navCtrl: NavController, public navParams: NavParams, private CheckInServiceProvider:CheckInServiceProvider) {
    debugger;
    this.flyCheckIn = this.CheckInServiceProvider.getActualCheckIn();
  }

  ionViewDidLoad() {
  }



}
