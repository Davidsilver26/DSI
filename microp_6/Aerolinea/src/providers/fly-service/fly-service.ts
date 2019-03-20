import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Fly } from '../../models/fly.model';

/*
  Generated class for the FlyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlyServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FlyServiceProvider Provider');
  }

  private flys: Fly []=
  [{"idVuelo":"1234", "origen":"casa", "destino":"colme"}];

  getFlys(){
    return this.flys;
  }

  addFly(value: Fly){
    this.flys.push(value);
  }

}
