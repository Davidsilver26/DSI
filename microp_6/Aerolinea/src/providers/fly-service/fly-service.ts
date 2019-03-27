import { Injectable } from '@angular/core';

import { Fly } from '../../models/fly.model';

/*
  Generated class for the FlyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlyServiceProvider {

  constructor() {
  }

  private flys: Fly []=
  [
    {"idVuelo":"0001", "origen":"Madrid", "destino":"Londres", "fecha":new Date("2019-03-30")},
    {"idVuelo":"0002", "origen":"Madrid", "destino":"Barcelona", "fecha":new Date("2019-03-25")},
    {"idVuelo":"0003", "origen":"Madrid", "destino":"Berlín", "fecha":new Date("2019-04-03")},
    {"idVuelo":"0004", "origen":"Londres", "destino":"Madrid", "fecha":new Date("2019-05-28")},
    {"idVuelo":"0005", "origen":"Madrid", "destino":"Barcelona", "fecha":new Date("2019-03-30")},
  ];

  private reservedFlys: Fly[] = [];

  getFlys(){
    return this.flys;
  }

  addFly(value: Fly){
    this.flys.push(value);
  }

  removeFly(value: Fly){
    for(var it = 0; it<this.flys.length; it++){
      if(this.flys[it] == value){
        this.flys.splice(it, 1);
      }
    }
    return this.flys;
  }

  addReservedFly(value: Fly){
    this.reservedFlys.push(value);
  }

  getReservedFlys(){
    return this.reservedFlys;
  }

}
