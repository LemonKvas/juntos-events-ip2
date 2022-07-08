import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from 'src/app/models/classes/event.model';
import { IonDatetime, ModalController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserDataService } from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import { CreatedEvent } from 'src/app/models/interfaces/created-event';
import { SupportMessagePage } from '../support-message/support-message.page';

/**
 * DE:
 * Seite zum Event Formular.
 * EN:
 * Page for the event form.
 */
@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss']
})
export class EventCreatePage implements OnInit {
  @Input() event: Event;
  @ViewChild('eventName')
  @ViewChild(IonDatetime, { static: true })
  datetime: IonDatetime;
  eventId = '';
  eventName: string;
  photoURLs = [];
  creationDate = new Date();
  eventDate: any;
  date = '';
  time = '';
  price = '';
  eventBio = '';
  categories = ['Musik', 'Natur', 'Sport', 'Essen & Trinken', 'Party', 'Einweihung', 'Festival'];
  selectedCategories = [];
  participants = [];
  maxParticipants;
  address: object;
  street = '';
  house = '';
  zipCode: number;
  city = '';
  publishStatus = false;
  today;
  errors: Map<string, string> = new Map<string, string>();
  events: Event[];
  uploadStatus = false;
  photoUploads = [];
  creator: User;
  creatorId: string;
  createdEvent: CreatedEvent;
  editMode = false;
  public createEventForm: FormGroup;

  /**
   * DE:
   * Grundvariablen werden initialisiert und die Event ID wird aus der URL ausgelesen, falls der/die
   * NutzerIn sich im Bearbeitungsmodus befindet. Befindet der / die NutzerIn sich im Bearbeitungsmodus,
   * wird die das Event anhand der Event ID geholt. Ansonsten werden die Daten von dem / der
   * eingeloggten NutzerIn geholt.
   * EN:
   * Basic variables are initialized and the event ID is read from the URL if the user is in edit mode.
   * If the user is in edit mode, the event is fetched from the event ID. Otherwise the data is
   * fetched from the logged in user.
   *
   * @param router
   * @param location
   * @param route
   * @param eventService
   * @param alertService
   * @param photoService
   * @param userService
   * @param modalCtrl
   */
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private eventService: EventService,
    public alertService: AlertService,
    public photoService: PhotoService,
    private userService: UserDataService,
    private modalCtrl: ModalController
  ) {
    this.eventId = this.route.snapshot.params.id;
    this.createEventForm = new FormGroup({
      eventName: new FormControl(),
      photoURLs: new FormControl(),
      eventDate: new FormControl(),
      eventBio: new FormControl(),
      street: new FormControl(),
      house: new FormControl(),
      zipCode: new FormControl(),
      city: new FormControl(),
      price: new FormControl(),
      maxParticipants: new FormControl(),
      selectedCategories: new FormControl()
    });
    this.photoURLs[0] = '';
    if (this.eventId) {
      this.editMode = true;
      this.getEventData().catch((err) => console.log('Error: ', err));
    } else if (this.eventId === undefined) {
      this.today = new Date();
    }
  }

  async ngOnInit() {
    await this.getCreatorData().catch((err) => console.log('Error: ', err));
  }
  /**
   * DE:
   * Diese Methode wird anhand der Event ID die restlichen Daten des Events mit der Methode getEventById()
   * von dem Event Service aus Firebase holen.
   * EN:
   * This function will get event data by calling getEventById() from event service with the event id
   * and set the values of the local variables.
   */
  async getEventData() {
    this.event = await this.eventService.getEventById(this.eventId);
    this.eventId = this.event.eventId;
    this.eventName = this.event.name;
    this.photoURLs = this.event.photoURLs;
    this.creationDate = this.event.creationDate;
    this.eventDate = this.event.eventDate;
    this.price = this.event.price;
    this.eventBio = this.event.bio;
    this.selectedCategories = this.event.categories;
    this.maxParticipants = this.event.maxParticipants;
    this.street = this.event.address['street'];
    this.house = this.event.address['house'];
    this.zipCode = this.event.address['zipCode'];
    this.city = this.event.address['city'];
    this.publishStatus = this.event.publishStatus;
    this.creatorId = this.event.creatorId;
  }

  /**
   * DE:
   * Diese Methode wird mit den Daten aus den Eingabefeldern ein neues Objekt des Typs 'Event' erstellen.
   * EN:
   * This function will get the values from all input fields and set these as a new object data
   * into the object 'event' from type 'Event'.
   */
  setInputValues() {
    if (this.eventDate === null) {
      this.eventDate = new Date();
    }
    this.address = {
      street: this.street,
      house: this.house,
      zipCode: this.zipCode,
      city: this.city
    };
    this.event = new Event(
      this.eventName,
      this.photoURLs,
      this.creationDate,
      new Date(this.eventDate),
      this.price,
      this.eventBio,
      this.selectedCategories,
      this.participants,
      this.maxParticipants,
      this.address,
      this.publishStatus,
      this.eventId,
      this.creatorId
    );
  }

  /**
   * DE:
   * Diese Methode überprüft, ob alle benötigten Daten vorhanden sind und ruft beim Hinzufügen eines
   * Events die addEvent() vom Event Service auf. Werden lediglich Daten eines bestehendes Objektes
   * überarbeitet, wird die Funktion updateEvent() gerufen.
   * EN:
   * This function will check if all required fields are filled out and by calling addEvent() from
   * event service, a new event object will be added to firebase. If an event has been updated, the
   * new data will be sent by calling the updateEvent().
   */
  async addEvent() {
    this.errors.clear();
    if (!this.eventName) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else if (!this.eventDate) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventDate', 'Datum und Uhrzeit darf nicht leer sein!');
    } else if (!this.eventBio) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventBio', 'Beschreibung darf nicht leer sein!');
    } else if (!this.street) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Straße darf nicht leer sein!');
    } else if (!this.zipCode) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'PLZ darf nicht leer sein!');
    } else if (!this.city) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Stadt darf nicht leer sein!');
    } else if (!this.price) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('price', 'Preis darf nicht leer sein!');
    } else if (this.maxParticipants === undefined) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('maxParticipants', 'Feld darf nicht leer sein!');
    } else if (this.selectedCategories.length === 0) {
      await this.alertService.emptyInputsAlert();
      this.errors.set('categories', 'Wähle mind. eine Kategorie aus!');
    } else if (this.photoURLs[0] === '') {
      await this.alertService.emptyInputsAlert();
      this.errors.set('photo', 'Bitte lade ein Foto hoch!');
    } else if (this.errors.size === 0) {
      // If user is not in edit mode, a new document with event object will be added
      if (this.editMode === false) {
        if (this.uploadStatus === false) {
          this.publishStatus = true;
          this.setInputValues();
          await this.eventService.addEvent(this.event);
          this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
          await this.userService.addCreatedEvent(this.createdEvent);
          await this.clearEventForm();
        } else if (this.uploadStatus === true) {
          await this.alertService.photoUpload();
        }
        // If user is in edit mode, event object will be updated in firebase
      } else if (this.editMode === true) {
        this.publishStatus = true;
        this.setInputValues();
        await this.eventService.updateEvent(this.event);
        await this.clearEventForm();
      }
    }
  }

  /**
   * DE:
   * Diese Methode speichert ein Event Objekt als Entwurf oder aktualisiert Daten eines bestehenden
   * Entwurfs.
   * EN:
   * This function will save an event object as a draft or update an even object draft in firebase.
   */
  async saveEventAsDraft() {
    this.publishStatus = false;
    // Check if required data 'name' is given
    if (!this.eventName) {
      await this.alertService.eventDraftAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
      // Check if user is in edit mode, if he / she is not object will be added
    } else if (this.editMode === false) {
      // Check if photo upload is done
      if (this.uploadStatus === false) {
        this.setInputValues();
        await this.eventService.addEvent(this.event);
        this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
        await this.userService.addCreatedEvent(this.createdEvent);
        await this.clearEventForm();
      } else {
        await this.alertService.photoUpload();
      }
      // If user is in edit mode, existing object will be updated in firebase
    } else if (this.editMode === true) {
      // Check if photo upload is done
      if (this.uploadStatus === false) {
        this.setInputValues();
        await this.eventService.updateEvent(this.event);
        await this.clearEventForm();
      } else {
        await this.alertService.photoUpload();
      }
    }
  }

  /**
   * DE:
   * Diese Methode holt die Daten von dem angemeldeten NutzerIn.
   * EN:
   * This function will get data for current / logged-in user.
   */
  async getCreatorData() {
    this.creator = await this.userService.getCurrentUser();
    this.creatorId = this.creator.userId;
  }

  /**
   * DE:
   * Diese Methode leert alle Eingabefelder und setzt sie auf den Default Wert zurück.
   *
   * EN:
   * This function will empty all input fields, set the local variables back to default
   */
  async clearEventForm() {
    this.createEventForm.reset();
    this.eventDate = null;
    this.photoUploads = [];
    this.publishStatus = false;
    if (this.editMode === false) {
      await this.router.navigate(['event-list']);
    } else if (this.editMode == true) {
      await this.router.navigate(['user-events', this.creatorId]);
    }
  }

  /**
   * DE:
   * Diese Methode ruft ein Alert auf, wenn der/die NutzerIn den Vorgang abbricht und erinnert ihn/sie
   * über möglichen Datenverlust.
   * EN:
   * This function will be called when the user cancel the process by leaving the page without saving
   * data. He / she will be reminded that changes might be discarded.
   */
  async back() {
    await this.alertService.unsaveAlert();
  }

  /**
   * DE:
   * Diese Methode wird durch ein event ausgelöst und das ausgewählte Foto wird mit der Funktion
   * storePhoto() von dem Photo Service in Firebase Storage gespeichert.
   * EN:
   * This function will be triggered by an event and upload selected image file to firebase storage.
   *
   * @example
   * Call it with an event
   * uploadPhoto($event)
   *
   * @param event
   */
  uploadPhoto(event) {
    this.uploadStatus = true;
    this.photoService.storePhoto(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          this.photoUploads.unshift(res);
          this.photoURLs[0] = this.photoService.photoID;
          this.uploadStatus = false;
        }
      },
      (error: any) => {
        this.uploadStatus = false;
        console.log(error);
      }
    );
  }

  /**
   * DE:
   * Diese Methode löscht das ausgewählte Foto von Firebase Storage.
   * EN:
   * This function will delete selected file from firebase storage.
   */
  async deletePhoto() {
    this.photoURLs[0] = null;
    const location = 'event-photos/';
    await this.photoService.deletePhoto(this.photoURLs[0], location);
  }

  /**
   * DE:
   * Diese Methode ruft ein Alert auf, um eine Bestätigung von dem / der NutzerIn für das Löschen des Events zu
   * erhalten. Wenn diese auf 'Ja' klickt, wird das Objekt aus Firebase gelöscht.
   * EN:
   * This function will call an alert to ask user if he / she will proceed to delete selected event. If user click on
   * 'Ja', event object will be deleted from firebase.
   */
  deleteEvent() {
    this.alertService.basicAlert('', 'Wollen Sie wirklich dieses Event löschen?', [
      {
        text: 'Ja',
        handler: () => {
          this.eventService.removeEvent(this.eventId).catch((err) => console.log('Error: ', err));
          this.router
            .navigate(['user-events', this.creatorId])
            .catch((err) => console.log('Error: ', err));
        }
      },
      {
        text: 'Abbrechen',
        role: 'cancel'
      }
    ]);
  }

  /**
   * DE:
   * Diese Methode öffnet ein Alert, um den / die NutzerIn darauf hinzuweisen, dass bei Problemen der
   * Support angeschrieben werden kann.
   * EN:
   * This method opens an alert to inform the user that in case of problems the support can be contacted.
   */
  async supportAlert() {
    await this.alertService.basicAlert(
      'Probleme',
      'Senden Sie unserem Support eine Nachricht und wir werden uns umgehend um ihr Anliegen kümmern.',
      [
        {
          text: 'Abbrechen',
          role: 'cancel'
        },
        {
          text: 'Support kontaktieren',
          handler: () => {
            this.openEventSupportMessageModal(this.creatorId, this.eventId);
          }
        }
      ]
    );
  }

  /**
   * DE:
   * Diese Methode ruft ein Alert auf und bietet den / der NutzerIn an, dass er / sie sich bei Problemen
   * beim Support melden kann. Daten die der Funktion mitgegeben werden, werden dem Alert für den weiteren
   * Verlauf übergeben.
   * EN:
   * This function will open an alert for user to contact support if there is a problem. User will be able
   * to send support a message if he / she click on 'Support kontaktieren'. A modal with input fields
   * will be opened for user to enter his / her message and given data will be sent to admin / support.
   *
   * @param userId
   * @param eventId
   */
  async openEventSupportMessageModal(userId: string, eventId: string) {
    const modal = await this.modalCtrl.create({
      component: SupportMessagePage,
      componentProps: {
        userId: userId,
        eventId: eventId
      }
    });
    await modal
      .present()
      .then(() => console.log('No error with presenting modal'))
      .catch((err) => console.log('error modal: ', err));
    await modal.onDidDismiss();
  }
}
