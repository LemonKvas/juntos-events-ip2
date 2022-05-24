import { Component, OnInit } from '@angular/core';
import { Event } from '../models/classes/event.model';
import { EventService } from '../services/event.service';
import { Share } from '@capacitor/share';
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  constructor(private eventService: EventService, private router: Router) {
  }
  ngOnInit() {
    this.getEvents();
  }
  getEvents(){
    this.eventService.getAllEvents().subscribe((res) => {
      this.events = res.map((e) => {
        return {
          eventId: e.payload.doc.id,
          ... e.payload.doc.data() as Event
        }
      });
    });
  }
  getPrice(event: Event): string{
    if(event.price === '0' || event.price === undefined || event.price === null){
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }
  async shareEvent(){
    const msgText = 'Hallo,\n';
    Share.canShare().then(canShare => {
      if(canShare.value){
        Share.share({
          title: 'Juntos Event',
          text: msgText,
          dialogTitle: 'Event teilen'
        }).then((v) => console.log('ok: ', v))
          .catch(err => console.log(err));
      } else {
        console.log('Error: Sharing not available!');
      }
    });
  }
  createEvent(){
    this.router.navigate(['event-create']);
  }
}
