import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {GoogleMap, Marker} from "@capacitor/google-maps";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('map', { static: true })mapRef: ElementRef;
  map: GoogleMap;

  constructor() {

  }

  ngOnInit() {

  }

  ionViewDidEnter() {
  }

  ngAfterViewInit() {
    this.createMap();
  }

  async createMap() {
    console.log('createMap')
    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapskey,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 50.571851,
          lng: 8.6630666,
        },
        zoom: 12,
      }
    });
    await this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: 50.551851,
          lng: 8.6630666,
        },
        title: 'test1',
        snippet: 'The place',
      },
      {
        coordinate: {
          lat: 50.561,
          lng: 8.6630666,
        },
        title: 'test2',
        snippet: 'The place2',
      },
      {
        coordinate: {
          lat: 50.5718,
          lng: 8.630666,
        },
        title: 'test2',
        snippet: 'The place2',
      },
    ];
    await this.map.addMarkers(markers);

    await this.map.setOnMarkerClickListener(async (marker) => {
      console.log(marker);
    })

    await this.map.enableClustering();
  }
}
