import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation';
import { GeoService } from 'src/app/services/geo.service';
import { EventService } from 'src/app/services/event.service';

/**
 * DE:
 * Google Maps Component. Wenn die Karte auf Android bzw. auf mobilen Geräten nicht angezeigt wird müssen Element transparent gesetzt
 * werden. Beispielsweise ion-content oder root HTML.
 * EN:
 * Google Maps Component. If the map is not displayed on Android or on mobile devices, elements must be set to transparent. For example ion-content or root HTML.
 * ion-content{
 *   overflow-y: scroll;
 *   overflow-x: hidden;
 *   --offset-bottom: 0 !important;
 *   background-color: #FFFFFF;
 * }
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnChanges {
  /**
   * DE:
   * Referenz für das HTML Element in der die Karte angezeigt wird
   * EN:
   * Reference for the HTML element in which the map is displayed
   */
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  /**
   * DE:
   * Input für Marker
   * EN:
   * Input for marker
   */
  @Input() marker: Marker[] = [];
  /**
   * DE:
   * Input für die Kameraeinstellungen, bzw. der angezeigte Ort der Karte
   * EN:
   * Input for the camera settings, or the displayed location of the map.
   */
  @Input() camera: { latitude: number; longitude: number } = { latitude: 50.62, longitude: 8.69 };
  map!: GoogleMap;
  mapClosed: boolean;
  btnText: string;

  /**
   * DE:
   * Setzt den Indicator mapClosed auf true, den Buttontext auf 'Karte öffnen' und ruft die Methode requestPermission() auf.
   * EN:
   * Sets the mapClosed indicator to true, the button text to 'Karte öffnen' and calls the requestPermission() method.
   * @param geoService
   * @param eventService
   */
  constructor(public geoService: GeoService, private eventService: EventService) {
    this.mapClosed = true;
    this.btnText = 'Karte öffnen';
    this.requestPermissions();
  }

  /**
   * DE:
   * Beim Änderungen der Marker oder Kameraeinstellung aus den Inputs soll ebenfalls die Karte erneuert werden.
   * EN:
   * When changing markers or camera settings from the inputs, the map should also be refreshed.
   */
  async ngOnChanges(changes: SimpleChanges) {
    if (this.map) {
      await this.map.destroy();
    }

    //TODO: Karte nicht neu erstellen sondern Kamera und Marker der Karte ändern
    if (changes['marker'].currentValue != undefined) {
      this.marker = changes['marker'].currentValue;
    } else if (changes['marker'].previousValue != undefined) {
      this.marker = changes['marker'].previousValue;
    }

    if (changes['camera'].currentValue != undefined) {
      this.camera = changes['camera'].currentValue;
    } else if (changes['camera'].previousValue != undefined) {
      this.marker = changes['camera'].previousValue;
    }

    if (!this.mapClosed) {
      await this.createMap();
    }
  }

  /**
   * DE:
   * Holt die Berechtigung für die Standortnutzung des Nutzers ein.
   * EN:
   * Obtains authorization for the location use of the user.
   */
  async requestPermissions() {
    //TODO: add device checker and call google maps geo allowance on dektop
    //TODO: falls die Permission nicht gegeben wird, die Daten aus dem Standort der IP Adresse ziehen
    await Geolocation.requestPermissions();
    await this.map.enableCurrentLocation(true).then((x) => {});
  }

  /**
   * DE:
   * Falls die Karte geschlossen ist, wird eine Karte generiert, falls sie geöffnet ist wird die Karte geschlossen und die Variable mapClosed wird auf true gesetzt
   * und die Variable btnText zum Text Karte öffnen.
   * EN:
   * If the map is closed a map is generated, if it is open the map is closed and the variable mapClosed is set to true
   * and the variable btnText to the text Karte öffnen.
   */
  async toggleMapBtn() {
    if (this.mapClosed) {
      await this.createMap();
    } else {
      this.mapClosed = true;
      this.btnText = 'Karte öffnen';
      await this.map.destroy();
    }
  }

  /**
   * DE:
   * Setzt mapClosed false und den btnText zu Karte schließen. Die Karte wird daraufhin erstellt. Sobald dies abgeschlossen ist, wird
   * die Referenz der Karte in map gespeichert und die Methode initializeMapFunctions() aufgerufen.
   * EN:
   * Sets mapClosed false and the btnText to close map. The map is then created. As soon as this is finished
   * the reference of the map is stored in map and the method initializeMapFunctions() is called.
   */
  async createMap() {
    this.mapClosed = false;
    this.btnText = 'Karte schließen';
    await this.awaitCamAndMarkerInit(0);
    await GoogleMap.create({
      id: 'eventMap',
      element: this.mapRef.nativeElement,
      apiKey: environment.maps.apiKey,
      config: {
        center: {
          lat: this.camera.latitude,
          lng: this.camera.longitude
        },
        zoom: 10
      }
    }).then((map) => {
      this.map = map;
      this.initializeMapFunctions();
    });
  }

  /**
   * DE:
   * wartet 5x 5000ms auf die Initialisierung der Variable camera
   * EN:
   * waits 5x 5000ms for the initialization of the variable camera
   * @param counter
   */
  async awaitCamAndMarkerInit(counter) {
    if (this.camera === undefined) {
      setTimeout(() => {
        counter++;
        if (counter > 5) {
          //TODO: standart Wert für Kamera setzen
          throw 'Fehler beim laden der Kamera';
        }
        this.awaitCamAndMarkerInit(counter);
      }, 5000);
    }
    return;
  }

  /**
   * DE:
   * Setzt alle Marker auf der Karte die sich im Array marker befinden und erlaubt clustering. Falls ein Marker angeklickt wird,
   * wird der Nutzer (falls event ID vorhanden) zum jeweiligen Event weitergeleitet.
   * EN:
   * Sets all markers on the map that are in the array marker and allows clustering. If a marker is clicked,
   * the user (if event ID exists) will be redirected to the respective event.
   */
  initializeMapFunctions() {
    if (this.camera != undefined && this.marker.length > 0) {
      this.map.addMarkers(this.marker);
      this.map.setOnMarkerClickListener(async (marker) => {
        if (this.marker[marker.markerId].eventId != undefined) {
          await this.eventService.navigateToEvent(this.marker[marker.markerId].eventId);
        }
      });
      this.map.enableClustering();
      //}
    }
  }
}
