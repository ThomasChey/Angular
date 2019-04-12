import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  @Input() contactActif: Contact;
  @Output() updateContactEvent = new EventEmitter();
  @Output() deleteContactEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Ce déclenche lors de la modif par mon utilisateur du champ input.
   */
  updateContact() {
    this.updateContactEvent.emit();
  }

  /**
   * Enclenche la suppression du contact dans l'appli.
   */
  deleteContact() {
    this.deleteContactEvent.emit(this.contactActif);
    delete this.contactActif;
  }
}
