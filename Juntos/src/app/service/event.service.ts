import { Injectable } from '@angular/core';
import { Event } from '../model/event.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[];

  constructor() {
    const eventsJSON: string = localStorage.getItem('events');
    if(eventsJSON){
      this.events = JSON.parse(eventsJSON);
    } else {
      this.events = [];
      if(!environment.production){
        this.persist(new Event('e1', 'c1', 'Party'));
      }
    }
  }
  findAll(): Event[]{
    return this.events;
  }
  findById(id: string): Event | undefined {
    return this.events.find(e => e.eventId === id);
  }
  persist(event: Event): void{
    this.events.push(event);
    this.save();
  }

  save(): void{
    localStorage.setItem('events', JSON.stringify(this.events));
  }
}
