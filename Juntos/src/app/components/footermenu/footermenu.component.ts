import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footermenu',
  templateUrl: './footermenu.component.html',
  styleUrls: ['./footermenu.component.scss'],
})
export class FootermenuComponent implements OnInit {
  private currentPage : string;

  constructor(private router : Router) {
    this.currentPage = this.router.url;
  }

  ngOnInit() {
    console.log('this.router.url', this.router.url);
  }

}
