import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from '@angular/common';
import { Event } from 'src/app/models/classes/event.model';
import {IonDatetime} from '@ionic/angular';
import {EventService} from 'src/app/services/event.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AlertService} from 'src/app/services/alert.service';
import {PhotoService} from 'src/app/services/photo.service';
import {UserDataService} from 'src/app/services/user-data.service';
import User from 'src/app/models/classes/user';
import {CreatedEvent} from 'src/app/models/interfaces/created-event';

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
  createEventForm: FormGroup;

  /**
   * Injected all imported services.
   *
   * @param router
   * @param location
   * @param route
   * @param eventService
   * @param alertService
   * @param photoService
   * @param userService
   */
  constructor(private router: Router, private location: Location,
              private route: ActivatedRoute, private eventService: EventService,
              public alertService: AlertService, public photoService: PhotoService,
              private userService: UserDataService) {
    /**
     * Set value of variable 'today' to current date
     */
    this.today = new Date();
    /**
     * Call function to fetch creator data upon page loading
     */
    this.getCreatorData().catch((err) => console.log('Error: ', err));
    /**
     * Set variable createEvenForm with new FormGroup of input fields
     */
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

  /**
   * This method will get all input values to set variable event value.
   */
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

  /**
   * This method will add the new created event and publish it. All required input fields will be
   * checked if they are empty and user will be informed.
   *
   * If there are no errors, data will be fetched through the method setInputValues().
   * Event will be added to firebase through addEvent() from eventService.
   *
   * Created event data will be created through createdEvent() from eventService and will be added
   * to user information through addCreatedEvent() from userService.
   *
   * Method clearEventForm() will empty all input field and set values to null or ''.
   */
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

  /**
   * This method save event as draft. For drafts publishStatus will be set as false.
   * If statement to check if required input field is empty and user will be informed
   * if that's the case.
   *
   * If there are no errors, data will be fetched through the method setInputValues().
   * Event will be added to firebase through addEvent() from eventService.
   *
   * Created event data will be created through createdEvent() from eventService and will be added
   * to user information through addCreatedEvent() from userService.
   *
   * Method clearEventForm() will empty all input field and set values to null or ''.
   */
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

  /**
   * This method fetched data from current / logged-in user through getCurrentUser() from
   * userService.
   */
  async getCreatorData(){
    this.creator = await this.userService.getCurrentUser();
    this.creatorId = this.creator.userId;
  }

  /**
   * Method to empty input fields and set values back to null or ''.
   * Afterwards navigate user to the page 'event-list'
   */
  async clearEventForm(){
    this.createEventForm.reset();
    this.eventDate = null;
    this.photoUploads = [];
    this.publishStatus = false;
    await this.router.navigate(['event-list']);
  }

  /**
   * This method will remove an event by given data.
   * With the given data, the data id will be passed to the method removeEvent()
   * from eventService to delete event from the firebase collection.
   * Afterwards the user will be navigated back to previous page.
   *
   * @example
   * Call it with an id as string
   * remove('hr89f4')
   *
   * @param id
   */
  async remove(id: string){
    await this.eventService.removeEvent(id);
    this.location.back();
  }

  /**
   * This method will inform user that there are unsaved changes before
   * user will be navigated back to previous page.
   */
  async back(){
    await this.alertService.unsaveAlert();
  }

  /**
   * This method will add given data to firebase storage through storePhoto() from
   * photoService.
   *
   * UploadStatus will be set true if data is still loading and be set as false once
   * photoService method returned a promise. The photoID from photoService will be
   * pushed into the array photoURLs.
   *
   * @example
   * Call it with an event
   * uploadPhoto($event)
   *
   * @param event
   */
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
}
