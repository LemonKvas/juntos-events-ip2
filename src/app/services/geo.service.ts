import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
import { Marker } from '@capacitor/google-maps';
import { Event } from 'src/app/models/classes/event.model';

/**
 * DE:
 * Service für alle Speicherungen und Methoden bezüglich Geodaten.
 * EN:
 * Service for all storage and methods related to geodata.
 */
@Injectable({
  providedIn: 'root'
})
export class GeoService {
  /**
   * DE:
   * toRadians soll genutzt werden, um das Bogenmaß zu errechnen
   * EN:
   * toRadians is to be used to calculate the radian measure
   */
  toRadians;
  userCords;
  camera;
  currentEventLongLats;
  marker: Marker[];

  /**
   * DE:
   * Gibt toRadians einen Callback in dem das Bogenmaß aus dem eingegebenen Längen- und Breitengraden errechnet wird.
   * EN:
   * Gives toRadians a callback in which the radian is calculated from the entered longitude and latitude.
   * @param http
   */
  constructor(private http: HttpClient) {
    this.toRadians = (value) => {
      if (value < 0) {
        value += 360;
      }
      return (value / 180) * Math.PI;
    };
  }

  /**
   * DE:
   * Nutzt die externe API von geocode.xyz um durch die Mitgabe von einer Adresse Längen- und Breitengrade im JSON Format zu erhalten
   * EN:
   * Uses the external API of geocode.xyz to get latitude and longitude in JSON format by providing an address.
   * @param {street: string, house: string, zipcode: string, city: string} address
   */
  async getLongLat(address) {
    let concatAddress =
      address.street + ' ' + address.house + ' ' + address.zipCode + ' ' + address.city;
    console.log(concatAddress, address);
    let params = new HttpParams();
    params = await params.append('auth', '112611770720734e15737329x13374');
    params = await params.append('locate', concatAddress);
    params = await params.append('json', '1');

    return this.http.get(`https://geocode.xyz`, { params: params });
  }

  /**
   * DE:
   * Speichert einen einzelnen Marker den Längen- und Breitengraden des Events entsprechend im Array marker.
   * camera bekommt dabei dieselben Werte zugeteilt, damit die Kamera der Karte auf den Marker zentriert werden kann.
   * EN:
   * Stores a single marker in the marker array according to the latitude and longitude of the event.
   * camera is assigned the same values so that the camera of the map can be centered on the marker.
   * @param event
   */
  setMarkerAndCameraForSingleEvent(event: Event) {
    this.marker = [
      {
        coordinate: {
          lng: Number(event.long),
          lat: Number(event.lat)
        },
        title: event.name
      }
    ];
    this.camera = {
      latitude: Number(event.long),
      longitude: Number(event.lat)
    };
  }

  /**
   * DE:
   * Speichert für alle eingegebenen Events Marker im marker Array. Dabei werden der Event Titel und die Event-ID ebenfalls gespeichert.
   * EN:
   * Stores markers for all entered events in the marker array. The event title and event ID are also stored.
   * @param events
   */
  setMarkerArray(events) {
    this.marker = events
      .filter((event) => !!event.long && !!event.lat)
      .map((e) => {
        console.log('setMarkerarry', e.eventId);
        return {
          coordinate: {
            lng: Number(e.long),
            lat: Number(e.lat)
          },
          title: e.name,
          eventId: e.eventId
        };
      });
  }

  /**
   * DE:
   * Durch die Eingabe von Längen und Breitengraden zweier Standorte, wird die Distanz zwischen den jeweiligen Orten in Kilometern berechnet.
   * EN:
   * By entering the longitude and latitude of two locations, the distance between the respective locations is calculated in kilometers.
   * @param lat1
   * @param lng1
   * @param lat2
   * @param lng2
   */
  calculateDistance(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371;
    let dLat = this.toRadians(lat2 - lat1);
    let dLng = this.toRadians(lng2 - lng1);

    let sindLat = Math.sin(dLat / 2);
    let sindLng = Math.sin(dLng / 2);

    let a =
      Math.pow(sindLat, 2) +
      Math.pow(sindLng, 2) * Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2));

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c; // Kilometer Distanz
  }

  /**
   * DE:
   * Überprüft, ob das Capacitor-plugin Geolocation verfügbar ist und speichert daraufhin die Standortdaten des Nutzers in der Variable
   * userCords und camera. Daraufhin wird die Methode setMarkerForUserCords() aufgerufen.
   * EN:
   * Checks if the Capacitor-plugin Geolocation is available and stores the user's location data in the variable
   * userCords and camera. The method setMarkerForUserCords() is then called.
   */
  getCurrentCoordinate() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }
    Geolocation.getCurrentPosition().then((data) => {
      this.userCords = {
        latitude: Number(data.coords.latitude),
        longitude: Number(data.coords.longitude),
        accuracy: Number(data.coords.accuracy)
      };
      this.camera = {
        latitude: Number(data.coords.latitude),
        longitude: Number(data.coords.longitude)
      };
      this.setMarkerForUserCords();
    });
  }

  /**
   * DE:
   * Speichert einen Marker der gespeicherten Position des Nutzers im Array marker. Der Marker erhält dabei ein persönliches
   * Icon.
   * EN:
   * Stores a marker of the stored position of the user in the array marker. The marker gets a personal
   * icon.
   */
  setMarkerForUserCords() {
    const index = this.marker.map((e) => e.title).indexOf('Meine Position');
    if (index >= 0) {
      this.marker[index] = {
        coordinate: {
          lng: Number(this.userCords.longitude),
          lat: Number(this.userCords.latitude)
        },
        title: 'Meine Position',
        iconUrl: '../../assets/icon/person-svgrepo-com.svg'
      };
    } else {
      this.marker.push({
        coordinate: {
          lng: Number(this.userCords.longitude),
          lat: Number(this.userCords.latitude)
        },
        title: 'Meine Position',
        iconUrl: '../../assets/icon/person-svgrepo-com.svg'
      });
    }
  }

  /**
   * DE:
   * Wird genutzt, um den Geoservice in Modulen zu initialisieren.
   * EN:
   * Used to initialize the geoservice in modules.
   */
  initGeoService() {
    console.log('geo service initialized');
  }
}
