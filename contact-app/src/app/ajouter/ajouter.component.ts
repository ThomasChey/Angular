import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  nouveauContact: Contact = new Contact();
  @Output() newContactEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Fonction appelée après le submit
   * du formulaire.
   */
  submitContact() {
    this.newContactEvent.emit(this.nouveauContact);
    this.nouveauContact = new Contact();
  }
}
