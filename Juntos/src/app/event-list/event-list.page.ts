import { Component, OnInit } from '@angular/core';
import { Event } from '../model/event.model';
import { EventService } from '../service/event.service';
import { PhotoService} from '../service/photo.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {
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
}
