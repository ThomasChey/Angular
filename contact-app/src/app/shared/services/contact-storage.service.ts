import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactStorageService {

  constructor() { }
  /**Permet de sauvegarder nos contacts dans le storage
   */
  save(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  /**Permet de récupérer les contacts du storage.
   */
  get(): Contact[] {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (null !== contacts) {
      return contacts;
    } else {
      return [];
    }
  }}
