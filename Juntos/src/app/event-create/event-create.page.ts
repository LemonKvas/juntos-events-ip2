import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { Location } from "@angular/common";
import { Event } from '../model/event.model';
import {IonDatetime} from "@ionic/angular";
import { format, parseISO } from "date-fns";
import {EventService} from "../service/event.service";

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
  dateValue;
  timeValue;
  eventDescription = '';
  eventStreet = '';
  eventStreetNumber = '';
  eventZip = 0;
  eventCity = '';
  eventPrice = 0;
  eventMaxParticipants = 0;
  eventCategories = [];
  today;
  errors: Map<string, string> = new Map<string, string>();

  constructor(private router: Router, private location: Location,
              private eventService: EventService) {
    this.today = new Date();
  }

  ngOnInit() {
  }

  async addEvent(){
    this.event = new Event(
      null,
      null,
      this.eventName,
      null,
      this.dateValue,
      this.timeValue,
      this.eventPrice,
      this.eventDescription,
      this.eventCategories,
      null,
      this.eventMaxParticipants,
      this.eventStreet,
      this.eventStreetNumber,
      this.eventZip,
      this.eventCity,
    );
    await this.eventService.addEvent(this.event);
  }

  back(){
    this.router.navigate(['home']);
    //this.location.back();
  }

  formatDate(value: string): string{
    return format(parseISO(value), 'dd-MM-yyyy');
  }
  formatTime(value: string): string{
    return format(parseISO(value), 'hh:mm');
  }
}
