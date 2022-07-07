import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from 'src/app/models/classes/event.model';
import {IonDatetime, ModalController} from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserDataService } from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import { CreatedEvent } from 'src/app/models/interfaces/created-event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss']
})
export class EventCreatePage {
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
  creatorId = '';
  createdEvent: CreatedEvent;
  editMode = false;
  public createEventForm: FormGroup;

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
    if(this.eventId){
      this.editMode = true;
      this.getEventData().catch((err) => console.log('Error: ', err));
      console.log('Edit 1: ', this.editMode);
    } else if(this.eventId === undefined){
      this.today = new Date();
      this.getCreatorData().catch((err) => console.log('Error: ', err));
    }
  }
  async getEventData(){
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
  setInputValues() {
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
  async addEvent() {
    this.publishStatus = true;
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
    } else if (this.errors.size === 0) {
      this.setInputValues();
      if(this.editMode === false){
        if(this.uploadStatus === false){
          await this.eventService.addEvent(this.event);
          this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
          await this.userService.addCreatedEvent(this.createdEvent);
          await this.clearEventForm();
        } else {
          await this.alertService.photoUpload();
        }
      } else if(this.editMode === true){
        if(this.uploadStatus === false){
          await this.eventService.updateEvent(this.event);
          await this.clearEventForm();
        } else {
          await this.alertService.photoUpload();
        }
      }
    }
  }
  async saveEventAsDraft() {
    console.log('Edit Draft: ', this.editMode);
    this.publishStatus = false;
    if (!this.eventName) {
      await this.alertService.eventDraftAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else if(this.editMode === false){
      if(this.uploadStatus === false){
        this.setInputValues();
        await this.eventService.addEvent(this.event);
        this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
        await this.userService.addCreatedEvent(this.createdEvent);
        await this.clearEventForm();
      } else {
        await this.alertService.photoUpload();
      }
    } else if(this.editMode === true){
      if(this.uploadStatus === false){
        this.setInputValues();
        await this.eventService.updateEvent(this.event);
        await this.clearEventForm();
      } else {
        await this.alertService.photoUpload();
      }
    }
  }
  async getCreatorData() {
    this.creator = await this.userService.getCurrentUser();
    this.creatorId = this.creator.userId;
  }
  async clearEventForm() {
    this.createEventForm.reset();
    this.eventDate = null;
    this.photoUploads = [];
    this.publishStatus = false;
    if(this.editMode === false){
      await this.router.navigate(['event-list']);
    } else if(this.editMode == true){
      await this.router.navigate(['user-events', this.creatorId]);
    }
  }

  async back() {
    await this.alertService.unsaveAlert();
  }
  uploadPhoto(event) {
    this.uploadStatus = true;
    this.photoService.storePhoto(event.target.files[0]).then(
      (res: any) => {
        if (res) {
          this.uploadStatus = false;
          this.photoUploads.unshift(res);
          this.photoURLs[0] = this.photoService.photoID;
        }
      },
      (error: any) => {
        this.uploadStatus = false;
        console.log(error);
      }
    );
  }
  async deletePhoto(){
    this.photoURLs[0] = null;
    const location = 'event-photos/';
    await this.photoService.deletePhoto(this.photoURLs[0], location);
  }
  deleteEvent(){
    this.alertService.basicAlert(
      '',
      'Wollen Sie wirklich dieses Event löschen?',
      [
        {
          text: 'Ja',
          handler: () => {
            this.eventService.removeEvent(this.eventId).catch((err) => console.log('Error: ', err));
            this.router.navigate(['user-events', this.creatorId]).catch((err) => console.log('Error: ', err));
          }
        },
        {
          text: 'Abbrechen',
          role: 'cancel'
        }
        ]);
  }
  async openEventSupportMessageModal(userId: string, eventId: string){
    await this.alertService.supportAlert();
    // const modal = await this.modalCtrl.create({
    //   component: SupportMessageComponent,
    //   componentProps: {
    //     userId: userId,
    //     eventId: eventId,
    //   }
    // });
    // await modal.present()
    //   .then(() => console.log('No error with presenting modal'))
    //   .catch(err => console.log('error modal: ', err));
    // await modal.onDidDismiss();
  }
}
