//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from "../models/models";

import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactService{
 private contacts: Contact []=
[{"nombre":"Andres","organizacion":"UC3M","movil":"666666666",correo:"andres@example.com"}];

  private contactsRef = this.db.list<Contact>('AgendaFirebase');
 constructor(private db:AngularFireDatabase){
 }
 addContact(value: Contact){
  //this.contacts.push(value);
  return this.contactsRef.push(value);
 }
 getContacts(){
  //return this.contacts;
  return this.contactsRef;
 }
 updateContact(value: Contact){
   return this.contactsRef.update(value.key, value);
 }
 removeContact(value: Contact){
   return this.contactsRef.remove(value.key);
 }
}