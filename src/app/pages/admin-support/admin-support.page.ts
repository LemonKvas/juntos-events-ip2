import { Component, OnInit } from '@angular/core';
import { SupportService } from 'src/app/services/support.service';
import {EventService} from "src/app/services/event.service";
import {Router} from "@angular/router";
import {UserDataService} from "src/app/services/user-data.service";
import {ActionSheetController} from "@ionic/angular";

/**
 * DE:
 * Page welche alle an Juntos geschickten Supporttickets anzeigt und
 * zur Bearbeitung gedacht ist.
 * EN:
 *
 */
@Component({
  selector: 'app-admin-support',
  templateUrl: './admin-support.page.html',
  styleUrls: ['./admin-support.page.scss'],
})
export class AdminSupportPage {
  doneTickets: any[];
  inProcessTickets: any[];
  openTickets: any[];

    /**
     * DE:
     * Ruft die Methode getTickets() auf.
     * EN:
     * Calls the method getTickets().
     * @param supportService
     * @param eventService
     * @param router
     * @param userDataService
     * @param actionSheetController
     */
  constructor(private supportService: SupportService, private eventService: EventService,
              private router: Router, private userDataService: UserDataService,
              public actionSheetController: ActionSheetController) {
    this.getTickets();
  }

    /**
     * DE:
     * Speichert durch Subscriptions alle bearbeiteten, offenen und in Arbeit befindlichen Tickets.
     * Diese Werte werden stets aktuell gehalten.
     * EN:
     * Stores all processed, open and in-progress tickets through subscriptions.
     * These values are always kept up-to-date.
     */
  async getTickets(){
   (await this.supportService.getAllDoneTickets()).subscribe(tickets => this.doneTickets = tickets);
   (await this.supportService.getAllInProcessTickets()).subscribe(tickets => this.inProcessTickets = tickets);
   (await this.supportService.getAllOpenTickets()).subscribe(tickets => this.openTickets = tickets);
  }

    /**
     * DE:
     * Ruft die Methode changeWorkingStatusOfTicket(ticketId, status) im supportService auf
     * um den Bearbeitungsstatus eines Tickets zu ändern.
     * EN:
     * Calls the changeWorkingStatusOfTicket(ticketId, status) method in supportService.
     * to change the working status of a ticket.
     * @param ticketId
     * @param status
     */
  changeTicketStatus(ticketId, status) {
    this.supportService.changeWorkingStatusOfTicket(ticketId, status);
  }

    /**
     * DE:
     * Holt alle Eventdaten zu der zugehörigen eingegebenen Event ID und öffnet ein ActionSheet mit dem
     * Namen oder der ID des Events. Der Nutzer hat nun die Möglichkeit das Event aufzurufen oder das ActionSheet wieder
     * zu schließen.
     * EN:
     * Fetches all event data for the corresponding entered event ID and
     * opens an ActionSheet with the name or ID of the event.
     * The user has now the possibility to call the event or to close
     * the ActionSheet.
     * @param eventId
     */
  async openEvent(eventId) {
      await this.eventService.getEventById(eventId).then(
          async(ev)=> {
              const actionSheet = await this.actionSheetController.create({
                  header: ev.name,
                  subHeader: ev.eventId,
                  buttons: [ {
                      text: 'Zum Event',
                      icon: 'golf-outline',
                      handler: () => {
                          this.eventService.navigateToEvent(ev.eventId);
                      }
                  },
                      {
                          text: 'Schließen',
                          icon: 'close',
                          role: 'cancel',
                      }]
              });
              await actionSheet.present();
          })
  }

    /**
     * DE:
     * Holt alle Userdaten zu der zugehörigen eingegebenen User ID und öffnet ein ActionSheet mit dem
     * Namen oder der ID des Nutzers. Der Nutzer hat nun die Möglichkeit das Event aufzurufen oder das ActionSheet wieder
     * zu schließen.
     * EN:
     * Fetches all user data for the corresponding entered User ID and opens an ActionSheet with the
     * name or ID of the user. The user has now the possibility to call the event or to close the ActionSheet.
     * @param userId
     */
  async openProfile(userId) {
    await this.userDataService.getUserById(userId)
        .then(async (userData)=>{
            const actionSheet = await this.actionSheetController.create({
                header: userData.userName,
                subHeader: userData.userId,
                buttons: [ {
                    text: 'Zum Profil',
                    icon: 'person-outline',
                    handler: () => {
                        this.router.navigate(['/profile/' + userData.userId])
                    }
                },
                    {
                    text: 'Schließen',
                    icon: 'close',
                    role: 'cancel',
                }]
            });
            await actionSheet.present();
        })
  }

}
