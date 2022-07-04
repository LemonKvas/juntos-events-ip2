import {
  Component,
  ElementRef, Input,
  ViewChild
} from '@angular/core';
import {GoogleMap} from "@capacitor/google-maps";
import {environment} from "src/environments/environment";
import { Geolocation } from '@capacitor/geolocation';
import {GeoService} from "src/app/services/geo.service";
import {Observable} from "rxjs";


/**
 * Google Maps Component. Wenn die Karte auf Android nicht angezeigt wird müssen Element transparent gesetzt
 * werden. Beispielsweise ion-content oder root HTML.
 * Wenn die Komponente für ein einzelnes Event genutzt wird den camera Input auf die long und lat Werte des
 * Markers setzen. Ansonsten kann die userLocation aus dem geoService genutzt werden,
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  @Input() markers: Observable<any>;
  camera: any;
  map!: GoogleMap;
  mapClosed: boolean;
  btnText: string;


  constructor(public geoService: GeoService) {
    this.geoService.getCurrentCoordinate();
    this.mapClosed = true;
    this.btnText = "Karte öffnen";
    this.requestPermissions();
  }

  async requestPermissions() {
    //TODO: add device checker and call google maps geo allowance on dektop
    await Geolocation.requestPermissions();
    await this.map.enableCurrentLocation(true).then((x) => {
    })
  }

  async createMap() {
    if (this.mapClosed) {
      if (!this.geoService.userCoordinates) {
        await this.geoService.getCurrentCoordinate();
      }
      this.mapClosed = false;
      this.btnText = 'Karte schließen';
      await GoogleMap.create({
        id: 'my-cool-map',
        element: this.mapRef.nativeElement,
        apiKey: environment.maps.apiKey,
        config: {
          center: {
            lat: this.geoService.userCoordinates.latitude,
            lng: this.geoService.userCoordinates.longitude
          },
          zoom: 10,
        },
      }).then((map) => {
        this.map = map;
        console.log(this.geoService.marker);
        this.initializeMapFunctions();
      })

    } else {
      this.mapClosed = true;
      this.btnText = "Karte öffnen";
      await this.map.destroy();
    }


  }

  initializeMapFunctions() {
    if (this.geoService.marker != undefined && this.geoService.marker.length > 0) {
      this.map.addMarkers(this.geoService.marker);
      this.map.setOnMarkerClickListener(async (marker) => {
        //TODO: popup oder sowas zeigen mit event infos
        console.log(this.geoService.marker);
      })
      this.map.enableClustering();
      //}
    }

  }
}
