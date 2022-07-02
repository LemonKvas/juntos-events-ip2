import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { Event } from 'src/app/models/classes/event.model';
import {IonDatetime} from '@ionic/angular';
import {EventService} from 'src/app/services/event.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AlertService} from 'src/app/services/alert.service';
import {PhotoService} from 'src/app/services/photo.service';
import {UserDataService} from '../services/user-data.service';
import User from '../models/classes/user';
import {CreatedEvent} from '../models/interfaces/created-event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  @Input() event: Event;
  @ViewChild('eventName')
  @ViewChild(IonDatetime, {static: true}) datetime: IonDatetime;
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
  public createEventForm: FormGroup;

  constructor(private router: Router, private location: Location,
              private route: ActivatedRoute, private eventService: EventService,
              public alertService: AlertService, public photoService: PhotoService,
              private userService: UserDataService) {
    this.today = new Date();
    this.getCreatorData();
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
      selectedCategories: new FormControl(),
    });
  }
  ngOnInit() {
  }
  setInputValues(){
    this.address = {
      street: this.street,
      house: this.house,
      zipCode: this.zipCode,
      city: this.city,
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
      'eventId',
      this.creatorId,
    );
  }
  async addEvent(){
    this.publishStatus = true;
    this.errors.clear();
    if(!this.eventName){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else if(!this.eventDate){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventDate', 'Datum und Uhrzeit darf nicht leer sein!');
    } else if(!this.eventBio){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventBio', 'Beschreibung darf nicht leer sein!');
    } else if(!this.street){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Straße darf nicht leer sein!');
    } else if(!this.zipCode){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'PLZ darf nicht leer sein!');
    } else if(!this.city){
      await this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Stadt darf nicht leer sein!');
    } else if(!this.price){
      await this.alertService.emptyInputsAlert();
      this.errors.set('price', 'Preis darf nicht leer sein!');
    } else if(this.maxParticipants === undefined){
      await this.alertService.emptyInputsAlert();
      this.errors.set('maxParticipants', 'Feld darf nicht leer sein!');
    } else if(this.selectedCategories.length === 0){
      await this.alertService.emptyInputsAlert();
      this.errors.set('categories', 'Wähle mind. eine Kategorie aus!');
    } else if(this.errors.size === 0){
      this.setInputValues();
      await this.eventService.addEvent(this.event);
      this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
      await this.userService.addCreatedEvent(this.createdEvent);
      await this.clearEventForm();
    }
  }
  async saveEventAsDraft(){
    this.publishStatus = false;
    if(!this.eventName){
      await this.alertService.eventDraftAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else {
      this.setInputValues();
      await this.eventService.addEvent(this.event);
      this.createdEvent = await this.eventService.createdEventData(this.publishStatus);
      await this.userService.addCreatedEvent(this.createdEvent);
      await this.clearEventForm();
    }
  }
  async getCreatorData(){
    this.creator = await this.userService.getCurrentUser();
    this.creatorId = this.creator.userId;
  }
  async clearEventForm(){
    this.createEventForm.reset();
    this.eventDate = null;
    this.photoUploads = [];
    this.publishStatus = false;
    await this.router.navigate(['event-list']);
  }
  async remove(item){
    await this.eventService.removeEvent(item.id);
    this.location.back();
  }
  async back(){
    await this.alertService.unsaveAlert();
  }
  uploadPhoto(event){
    this.uploadStatus = true;
    this.photoService.storePhoto(event.target.files[0]).then((res: any) => {
      if(res){
        this.uploadStatus = false;
        this.photoUploads.unshift(res);
        this.photoURLs.push(this.photoService.photoID);
      }
    },
      (error: any) =>{
        this.uploadStatus = false;
        console.log(error);
      });
  }
  async addPhotoToGallery(){
    await this.photoService.addNewToGallery();
  }
}
