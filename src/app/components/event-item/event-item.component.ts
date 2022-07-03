import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Event} from 'src/app/models/classes/event.model';
import {Share} from '@capacitor/share';
import {NavigationExtras, Router} from '@angular/router';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss'],
})
export class EventItemComponent{
  @Input() event: Event;
  windowWithOver800: boolean;
  selectedEvent: Event;

  constructor(private eventService: EventService, private router: Router) {
    this.onResize(undefined);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWithOver800 = window.innerWidth > 800;
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
  async eventDetailsState(id: string) {
    this.selectedEvent = await this.eventService.getEventById(id);
    console.log(this.selectedEvent);
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
    await this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
    //await this.router.navigateByUrl(`event-details/${id}`);
  }
}
