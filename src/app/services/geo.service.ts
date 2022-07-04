import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Capacitor} from "@capacitor/core";
import {Geolocation} from "@capacitor/geolocation";
import {Marker} from "@capacitor/google-maps";

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  toRadians;
  userCords;
  userCoordinates;
  currentEventLongLats;
  marker: Marker[];

  constructor(private http: HttpClient) {
    this.toRadians = (value) => {
      if (value < 0) {
        value += 360;
      }
      return value / 180 * Math.PI;
    }
  }

  async getLongLat(address) {
    let concatAddress = address.street + ' ' + address.house + ', ' + address.zipcode + ' ' + address.city;

    let params = new HttpParams();
    params = await params.append('auth', '112611770720734e15737329x13374');
    params = await params.append('locate', concatAddress);
    params = await params.append('json', '1');

    return this.http.get(`https://geocode.xyz`, {params: params});
  }

  setMarkerArray(events){
    this.marker = events.filter(event => !!event.long && !!event.lat).map((e) => {
      return {
        coordinate: {
          lng: Number(e.long),
          lat: Number(e.lat)
        },
        title: e.name
      }
    });
  }


  calculateDistance(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371;
    let dLat = this.toRadians(lat2 - lat1);
    let dLng = this.toRadians(lng2 - lng1);

    let sindLat = Math.sin(dLat / 2);
    let sindLng = Math.sin(dLng / 2);

    let a = Math.pow(sindLat, 2) + Math.pow(sindLng, 2)
        * Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2));

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c; // Kilometer Distanz
  }

  getCurrentCoordinate() {
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }
    Geolocation.getCurrentPosition().then(data => {
      this.userCoordinates ={
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
      /*
      return {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
       */
    })
  }

}
