/*
 *Pour déclarer une classe comme composant
 *de notre application, on importe "Component"
 * via @angular/core
 */
import {Component} from '@angular/core';
import {Contact} from './shared/models/contact';
import {ContactStorageService} from './shared/services/contact-storage.service';
import {ContactApiService} from './shared/services/contact-api.service';


/*
 * @Component est ce qu'on appelle un décorateur.
 * Il va nous permettre de définir 3 paramètres essentiel à notre application...
 */
@Component({
  /*
  * 1. Le sélecteur ( selector ) détermine
  * le nom de la balise HTML permettant d'afficher
  * notre composant dans l'app. <app-root></app-root>
  */
  selector: 'app-root',
  /*
   *2. "templateUrl" : C'est la partie visible du composant.
   * C'est ce qui s'affiche à l'écran lorsque le composant
   *est utilisé. (HTML, CSS)*/
  templateUrl: './app.component.html',
  /*"styleUrls" : La déclaration des feuilles de style CSS. nb: C'est un tableau JS.*/
  styleUrls: ['./app.component.css']
})

/*
 *La classe contient les données du composant, mais aussi son comportement.
 *Dans notre contexte MVVM, notre classe correspond au Model
 */
export class AppComponent {
  // -- Déclaration de variable
  title = 'Gestion de Contacts';
  contactActif: Contact;
  // -- Déclaration d'un objet
  unContact: Contact = {
    id: 1,
    name: 'CHEYLAS Thomas',
    username: 'SupositeWar',
    email: 'blablabla@bla.fr',
  };
  // -- Tableau de Contacts
  mesContacts: Contact[] = [
    // {
    //   id: 1,
    //   name: 'Hugo LIEGEARD',
    //   username: 'hugoliegeard',
    //   email: 'wf3@hl-media.fr',
    // },
    // {
    //   id: 1,
    //   name: 'David GUERRA',
    //   username: 'davidguerra',
    //   email: 'g.david@gmail.com',
    // },
    // {
    //   id: 1,
    //   name: 'Zita NGUYEN',
    //   username: 'zitanguyen',
    //   email: 'n.zita@gmail.com',
    // },
    // {
    //   id: 1,
    //   name: 'Stevenson ILANSEGARIN',
    //   username: 'stevensonilansegarin',
    //   email: 'i.stevenson@gmail.com',
    // }
  ];

  /**
   * Au moment de l'initilisation de AppComponent,
   * cette fonction est appelée automatiquement.
   */
  constructor(private contactApiService: ContactApiService,
              private contactStorage: ContactStorageService) {
    //Récupération des contacts depuis le storage.
    this.mesContacts = this.contactStorage.get();
    //Récupération des contacts depuis l'API
    this.contactApiService.getContacts().subscribe(
      contacts => {
        this.mesContacts = contacts;
      }
    );
  }

  /**Permet d'afficher le profil d'un contact.
   */
  showContact(contact: Contact) {
    this.contactActif = contact;

  }

  addContact(nouveauContact: Contact) {
    this.mesContacts.push(nouveauContact);
    this.contactStorage.save(this.mesContacts);
  }

  saveContact() {
    this.contactStorage.save(this.mesContacts);
  }

  /**
   * Suppression du contact
   */
  deleteContact(contact: Contact) {
    // 1. -- Code de suppression du contact
    this.mesContacts.splice(
      this.mesContacts.indexOf(contact),
      1
    );
    // 2. -- Sauvegarde des contacts
    this.saveContact();
  }
}




