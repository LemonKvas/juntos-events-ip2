import { Component, HostListener, Input } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { Share } from '@capacitor/share';
import { NavigationExtras, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

/**
 * @deprecated
 */
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() event: Event;
  windowWithOver800: boolean;
  selectedEvent: Event;

  /**
   * @ignore
   */
  constructor(private eventService: EventService, private router: Router) {
    this.onResize();
  }
  /**
   * @ignore
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWithOver800 = window.innerWidth > 800;
  }
  /**
   * @ignore
   */
  getPrice(event: Event): string {
    if (event.price === '0' || event.price === undefined || event.price === null) {
      event.price = 'Kostenlos';
      return event.price;
    }
    return event.price;
  }
  /**
   * @ignore
   */
  async shareEvent() {
    const msgText = 'Hallo,\n';
    Share.canShare().then((canShare) => {
      if (canShare.value) {
        Share.share({
          title: 'Juntos Event',
          text: msgText,
          dialogTitle: 'Event teilen'
        })
          .then((v) => console.log('ok: ', v))
          .catch((err) => console.log(err));
      } else {
        console.log('Error: Sharing not available!');
      }
    });
  }
  async eventDetailsState(id: string) {
    this.selectedEvent = await this.eventService.getEventById(id);
    const navigationExtras: NavigationExtras = {
      state: {
        name: this.selectedEvent.name,
        photoURLs: this.selectedEvent.photoURLs,
        creationDate: this.selectedEvent.creationDate,
        eventDate: this.selectedEvent.eventDate,
        price: this.selectedEvent.price,
        bio: this.selectedEvent.bio,
        categories: this.selectedEvent.categories,
        participants: this.selectedEvent.participants,
        maxParticipants: this.selectedEvent.maxParticipants,
        address: this.selectedEvent.address,
        publishStatus: this.selectedEvent.publishStatus,
        eventId: this.selectedEvent.eventId,
        creatorId: this.selectedEvent.creatorId
      }
    };
    if (this.selectedEvent.long && this.selectedEvent.lat) {
      navigationExtras.state.long = this.selectedEvent.long;
      navigationExtras.state.lat = this.selectedEvent.lat;
    }
    console.log(navigationExtras);
    await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
  }
}
