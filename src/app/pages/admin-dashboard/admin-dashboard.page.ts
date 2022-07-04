import { AfterViewInit, Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { EventService } from 'src/app/services/event.service';

/**
 * Admin Dashboard Page
 *
 * DE:
 * Wird genutzt, um eine Liste aller Nutzer anzuzeigen um als Admin Nutzer und Events löschen zu können.
 * EN:
 * Used to display a list of all users to be able to delete users and events as admin.
 */
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss']
})
export class AdminDashboardPage implements AfterViewInit {
  receivedUsers;
  users?;

  /**
   * Ruft eine Observable mit allen Nutzern aus der Datenbank auf und speichert diese in den Variablen
   * receivedUsers und users.
   *
   * @param userDataService
   * @param eventService
   */
  constructor(private userDataService: UserDataService, private eventService: EventService) {
    this.userDataService.getAllUser().subscribe((userDocs) => {
      this.receivedUsers = userDocs;
      this.users = userDocs;
    });
  }

  /**
   * Speichert alle erhaltenen Nutzern aus der Variable receivedUsers in der Variable
   * users
   */
  initalUser() {
    this.users = this.receivedUsers;
  }

  /**
   * DE:
   * Erst wird die users Variable mit der Variable receivedUsers überschrieben. Daraufhin werden alle Nutzer
   * deren Nutzername oder ID mit dem eingegebenen Suchtext übereinstimmt in der Variable users gespeichert.
   * Dies dient dazu um die angezeigten Nutzer im DOM anzupassen.
   *
   * EN:
   * First the users variable is overwritten with the receivedUsers variable. Then all users whose username
   * or ID matches the entered search text are stored in the users variable.
   * This is used to customize the displayed users in the DOM.
   *
   * @param ev {String} (Suchtext)
   */
  getUser(ev) {
    this.initalUser();
    const searchInput = ev.target.value;
    if (searchInput && searchInput.trim() !== '') {
      this.users = this.users.filter(
        (user) =>
          user.userId.concat(user.userName).toLowerCase().indexOf(searchInput.toLowerCase()) > -1
      );
    }
  }

  /**
   * DE:
   * Nach dem die Ansicht initialisiert wurde, wird die Funktion initalUser() aufgerufen.
   * EN:
   * After the view has been initialized, the function initalUser() is called.
   */
  ngAfterViewInit() {
    this.initalUser();
  }

  /**
   * DE:
   * Ruft die Methode userEventsModal im Event Service auf.
   *
   * EN:
   * Calls the userEventsModal method in the event service.
   *
   * @param userId
   */
  userEvents(userId) {
    this.eventService.userEventsModal(userId);
  }

  /*Function needs to be implemented.
  Löschen von Nutzern nur mit Cloud Functions möglich
   * @param userId
  deleteUser(userId: any) {}
   */
}
