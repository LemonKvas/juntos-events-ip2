import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from "@angular/common";
import { Event } from '../model/event.model';
import {IonDatetime} from "@ionic/angular";
import {EventService} from "../service/event.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AlertService} from "../service/alert.service";
import {PhotoService} from "../service/photo.service";

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
  eventDate = '';
  date = '';
  time = '';
  price = '';
  eventBio = '';
  categories = ['Musik', 'Natur', 'Sport', 'Essen & Trinken', 'Party', 'Einweihung', 'Festival'];
  selectedCategories = [];
  participants = [];
  maxParticipants;
  address: Map<string, string>;
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
  public createEventForm: FormGroup;

  constructor(private router: Router, private location: Location,
              private route: ActivatedRoute, private eventService: EventService,
              public alertService: AlertService, public photoService: PhotoService) {
    this.today = new Date();
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
  addEvent(){
    this.publishStatus = true;
    this.photoURLs.push(this.photoService.imgName);
    this.errors.clear();
    if(!this.eventName){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else if(!this.eventDate){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventDate', 'Datum und Uhrzeit darf nicht leer sein!');
    } else if(!this.eventBio){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventBio', 'Beschreibung darf nicht leer sein!');
    } else if(!this.street){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Straße darf nicht leer sein!');
    } else if(!this.zipCode){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'PLZ darf nicht leer sein!');
    } else if(!this.city){
      this.alertService.emptyInputsAlert();
      this.errors.set('eventAddress', 'Stadt darf nicht leer sein!');
    } else if(!this.price){
      this.alertService.emptyInputsAlert();
      this.errors.set('price', 'Preis darf nicht leer sein!');
    } else if(this.maxParticipants === undefined){
      this.alertService.emptyInputsAlert();
      this.errors.set('maxParticipants', 'Feld darf nicht leer sein!');
    } else if(this.selectedCategories.length === 0){
      this.alertService.emptyInputsAlert();
      this.errors.set('categories', 'Wähle mind. eine Kategorie aus!');
    } else if(this.errors.size === 0){
      this.event = new Event(
        this.eventName,
        this.photoURLs,
        new Date(this.eventDate),
        this.price,
        this.eventBio,
        this.selectedCategories,
        this.participants,
        this.maxParticipants,
        this.street,
        this.house,
        this.zipCode,
        this.city,
        this.publishStatus,
        'eventId',
        '',
      );
      console.log(this.event);
      this.eventService.addEvent(this.event);
      this.createEventForm.reset();
      this.eventDate = '';
      this.photoUploads = [];
      this.publishStatus = false;
      // later navigate to event-detail page
      this.router.navigate(['home']);
    }
  }
  saveEventAsDraft(){
    this.publishStatus = false;
    if(!this.eventName){
      this.alertService.eventDraftAlert();
      this.errors.set('eventName', 'Event Name darf nicht leer sein!');
    } else {
      this.event = new Event(
        this.eventName,
        this.photoURLs,
        new Date(this.eventDate),
        this.price,
        this.eventBio,
        this.selectedCategories,
        this.participants,
        this.maxParticipants,
        this.street,
        this.house,
        this.zipCode,
        this.city,
        this.publishStatus,
        'eventId',
        '',
      );
      console.log(this.event);
      this.eventService.addEvent(this.event);
      this.createEventForm.reset();
      this.eventDate = '';
      this.photoUploads = [];
      this.publishStatus = false;
      // later navigate to event-detail page
      this.router.navigate(['home']);
    }
  }
  remove(item){
    this.eventService.removeEvent(item.id);
    this.location.back();
  }
  back(){
    this.alertService.unsaveAlert();
  }
  setDate(dateTime: string){
    this.eventDate = dateTime;
  }
  uploadPhoto(event){
    this.uploadStatus = true;
    this.photoService.storePhoto(event.target.files[0]).then((res: any) => {
      if(res){
        this.uploadStatus = false;
        this.photoService.photos.unshift(res);
      }
    },
      (error: any) =>{
        this.uploadStatus = false;
        console.log(error);
      });
  }
  addPhotoToGallery(event){
    this.photoService.addNewToGallery();
    this.uploadPhoto(event);
  }
}
