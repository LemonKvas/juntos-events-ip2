import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/classes/event.model';
import User from 'src/app/models/classes/user';
import { RegisteredEvent } from 'src/app/models/interfaces/registered-event';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { AlertService } from 'src/app/services/alert.service';
import { ChatService } from 'src/app/services/chat.service';

/**
 * DE:
 * Seite zur Anzeige eines Events.
 * EN:
 * Page to display details of an event.
 */
@Component({
  selector: 'app-event-details/',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss']
})
export class EventDetailsPage implements OnInit {
  event: Event = new Event();
  eventId: string;
  participant: User;
  participants: User[] = [];
  registeredEvent: RegisteredEvent;
  creator: User;
  currentUserId: string;
  segment = 'information';
  creatorRating: number | boolean;

  /**
   * DE:
   * Die Event Daten werden vom State geholt und in die lokale Variable 'event' gesetzt.
   * EN:
   * The event data is fetched from the state and put into the local variable 'event'.
   * @param router
   * @param eventService
   * @param authService
   * @param userService
   * @param alertService
   * @param route
   * @param chatService
   */
  constructor(
    private router: Router,
    public eventService: EventService,
    private authService: AuthService,
    private userService: UserDataService,
    public alertService: AlertService,
    private route: ActivatedRoute,
    private chatService: ChatService //public geoService: GeoService
  ) {
    this.event = this.router.getCurrentNavigation().extras.state;
  }

  /**
   * DE:
   * Bei Initialisierung der Komponente wird die Id des/der eingeloggten NutzerIn, die Daten vom Event
   * ErstellerIn sowie die Liste der Event TeilnehmerInnen holen.
   * EN:
   * When the component is initialized, the ID of the logged-in user, the data of the event
   * creator and the list of event participants will be fetched.
   */
  async ngOnInit() {
    this.currentUserId = await this.userService.getCurrentUserID();
    this.creatorRating = await this.userService.getRating(this.creator.userId);

    console.log(this.creatorRating)

    await this.getCreatorData();
    await this.getUserlist();
  }

  /**
   * DE:
   * Diese Methode wird die Daten von dem/der eingeloggten NutzerIn holen.
   * EN:
   * This method will fetch the data from the logged in user.
   */
  async getCreatorData() {
    this.creator = await this.userService.getUserById(this.event.eventId);
  }

  /**
   * DE:
   * Diese Methode wird die Teilnehmerliste des Events holen.
   * EN:
   * This method will fetch the list of participants of the event.
   */
  async getUserlist() {
    for (let participant of this.event.participants) {
      const user = await this.userService.getUserById(participant);
      this.participants.unshift(user);
    }
  }

  /**
   * DE:
   * Mit dieser Methode kann der/der NutzerIn an einem Event teilnehmen. Der/die NutzerIn wird der
   * TeilnehmerListe hinzugefügt und das Event Ticket wird dem/die NutzerIn zugeordnet.
   * EN:
   * This method allows the user to participate in an event. The user is added to the
   * event participant list and the purchased event ticket is assigned to the user.
   *
   * @example
   * Call it with an object of the type 'Event'
   * attendEvent(event: Event)
   *
   * @param event
   */
  async attendEvent(event: Event) {
    // Check if user is logged in
    if (this.authService.isLoggedIn() === false) {
      await this.alertService.plsSignInAlert();
    } else {
      this.participant = await this.userService.getCurrentUser();
      // If the event free, user will have a valid ticket
      if (this.event.price === 'Kostenlos') {
        this.registeredEvent = {
          eventId: this.event.eventId,
          ticket: true
        };
      } else {
        // User will have an event ticket but still has to pay
        this.registeredEvent = {
          eventId: this.event.eventId,
          ticket: false
        };
      }
      this.event.participants.unshift(this.participant.userId);
      await this.eventService.addRegisteredUser(this.event);
      await this.userService.addRegisteredEvent(this.registeredEvent);
      await this.alertService.partakeEvent(event);
    }
  }

  /**
   * DE:
   * Diese Methode wird einen Chat zwischen dem/der eingeloggten NutzerIn und dem/der ausgewählten NtzerIn
   * öffnen.
   * EN:
   * This method will open a chat between the logged in user and the selected user.
   *
   * @example
   * Call it with an object of type 'User'
   * openChat(user: User)
   *
   * @param user
   */
  async openChat(user: User) {
    const chatGroup = await this.chatService.createChat(user);
    await this.router.navigate(['chat', chatGroup.id, user.userId]);
  }
}
