import { Injectable } from '@angular/core';
import { checkIn } from '../../models/checkIn.model';

/*
  Generated class for the CheckInServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckInServiceProvider {

  checkInFlys: checkIn[]= [];
  actualCheck: checkIn = {"idVuelo":"", "origen":"", "destino":"", "fecha":new Date(), "nombre":"", "apellidos":"", "pasaporte":"", "numero":""};

  constructor() {
  }

  addCheckInFlyData(idVuelo:string, origen:string, destino:string, fecha:Date){
    this.actualCheck.idVuelo = idVuelo;
    this.actualCheck.origen = origen;
    this.actualCheck.destino = destino;
    this.actualCheck.fecha = fecha;
  }

  addCheckInUserData(nombre:string, apellidos:string, pasaporte:string, numero:string){
    this.actualCheck.nombre = nombre;
    this.actualCheck.apellidos = apellidos;
    this.actualCheck.pasaporte = pasaporte;
    this.actualCheck.numero = numero;
  }

  addActualCheckIn(){
    this.checkInFlys.push(this.actualCheck);
  }

  setActualCheckIn(idVuelo: string){
    for(var i = 0; i<this.checkInFlys.length; i++){
      if(idVuelo == this.checkInFlys[i].idVuelo){
        this.actualCheck = this.checkInFlys[i];
        break;
      }
    }
  }

  getActualCheckIn(){
    return this.actualCheck;
  }

}
