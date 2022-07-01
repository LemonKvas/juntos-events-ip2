import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import {ModalController} from "@ionic/angular";

/**
 * DE:
 * Komponente die als Modal genutzt wird, um die Events eines Nutzers zu anzuzeigen.
 * Die Komponente muss mit einer userId als Input aufgerufen werden.
 * EN:
 * Component that is used as a modal to display the events of a user.
 * The component must be called with a userId as input.
 */
@Component({
  selector: 'app-user-events-modal',
  templateUrl: './user-events-modal.component.html',
  styleUrls: ['./user-events-modal.component.scss'],
})
export class UserEventsModalComponent implements OnDestroy, OnInit{
  events;
  @Input() userId;
  eventSub: Subscription;

  /**
   * Constructor
   * @param eventService
   * @param modal
   */
  constructor(private eventService: EventService, private modal: ModalController) {}

  /**
   * DE:
   * Ruft ein Observable auf, welches alle Events eines Nutzers zurückgibt. Diese Events
   * werden in der Variable events gespeichert.
   * EN:
   * Calls an observable that returns all events of a user. These events
   * are stored in the events variable.
   * @protected
   */
  protected loadData(){
    this.eventSub = this.eventService.getUserEvents(this.userId).subscribe((userEvs)=>{
      this.events = userEvs;
    })
  }

  /**
   * DE:
   * Ruft bei der Komponenten Initialisierung die Methode loadData() auf.
   * EN:
   * Calls the loadData() method during component initialization.
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   * DE:
   * Löst die Subscription für alle Events, sobald die Komponente zerstört wird.
   * EN:
   * Releases the subscription for all events as soon as the component is destroyed.
   */
  ngOnDestroy() {
    this.eventSub.unsubscribe();
  }

  /**
   * DE:
   * Schließt die geöffnete Komponente, bzw. das Modal.
   * EN:
   * Closes the open component.
   */
  dismissModal(){
    this.modal.dismiss('cancel');
  }

  /**
   * DE:
   * Ruft die Methode deleteEvent(event) aus dem event Service auf.
   * EN:
   * Calls the deleteEvent(event) method from the event service.
   *
   * @param event
   */
  public deleteEvent(event: any) {
    this.eventService.deleteEvent(event);
  }
}
