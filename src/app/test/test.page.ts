import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from "../components/map/map.component";
import {GoogleMap, Marker} from "@capacitor/google-maps";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  @ViewChild('map')
  mapRef: ElementRef<HTMLElement>;
  map: GoogleMap;
  constructor(public MyMap : MapComponent) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
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
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      }
    });
    await this.addMarkers();
  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: 33.7,
          lng: -117.8,
        },
        title: 'test1',
        snippet: 'The place',
      },
      {
        coordinate: {
          lat: 33.5,
          lng: -117.6,
        },
        title: 'test2',
        snippet: 'The place2',
      },
      {
        coordinate: {
          lat: 33.4,
          lng: -117.9,
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
