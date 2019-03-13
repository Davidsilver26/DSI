//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from "../models/models";


/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactService{
 private contacts: Contact []=
[{"nombre":"Andres","organizacion":"UC3M","movil":"666666666",correo:"andres@example.com"}];
 constructor(){
 }
 addContact(value: Contact){
 this.contacts.push(value);
 }
 getContacts(){
 return this.contacts;
 }
 updateContact(value: Contact){
 }
 removeContact(value: Contact){
 }
}