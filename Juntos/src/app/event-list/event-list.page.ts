import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { EventService } from 'src/app/services/event.service';
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
    this.eventService.getAllEvents().subscribe((res) => {
      this.events = res.map((e) => {
        return {
          eventId: e.payload.doc.id,
          ... e.payload.doc.data() as Event
        }
      });
    });
  }

  createEvent() {
    this.router.navigate(['event-create']);
  }
}
