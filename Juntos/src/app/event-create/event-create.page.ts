import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { Location } from "@angular/common";
import { Event } from '../model/event.model';
import {IonDatetime, ModalController} from "@ionic/angular";
import { format, parseISO } from "date-fns";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  @Input() event: Event;
  @ViewChild('eventName')
  @ViewChild(IonDatetime, {static: true}) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = format(new Date(), 'dd-mm-yyyy') + 'T09:00:00.000Z';
  timeValue = '';
  eventName: string;
  today;
  errors: Map<string, string> = new Map<string, string>();

  constructor(private router: Router, private location: Location, public modalController: ModalController) {
    this.today = new Date();
    console.log(this.today);
  }

  ngOnInit() {
  }

  save(){
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
