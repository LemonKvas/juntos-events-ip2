import { Component, HostListener, Input } from '@angular/core';
import { Event } from 'src/app/models/classes/event.model';
import { Share } from '@capacitor/share';

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

  /**
   * @ignore
   */
  constructor() {
    this.onResize(undefined);
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
}
