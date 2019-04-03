import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ModelsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModelsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ModelsProvider Provider');
  }

}

export interface Contact {
  key?: string;//manejará el id cuando se utiliza firebase
  nombre: string;
  organizacion: string;
  movil: string;
  correo: string;
 }