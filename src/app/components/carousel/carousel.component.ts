import { Component, EventEmitter, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import SwiperCore, { Autoplay, EffectFade, Navigation, SwiperOptions } from 'swiper';

SwiperCore.use([EffectFade, IonicSlides, Autoplay, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
  @Output() carouselNavigate = new EventEmitter<string>();
  slides?;

  /**
   * Konfigurationen für das Karussell.
   */
  config: SwiperOptions = {
    /* eslint-disable */
    autoplay: true,
    keyboard: true,
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    centeredSlides: true,
    loop: true,
    freeMode: true,
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      '500': {
        slidesPerView: 1,
        spaceBetween: 10
      },
      '800': {
        slidesPerView: 2,
        spaceBetween: 20
      },
      '1000': {
        slidesPerView: 3,
        spaceBetween: 40
      },
      '1400': {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },
    scrollbar: {
      hide: false
    }
  };

  constructor(private eventService: EventService) {}


  /**
   * DE:
   * Rufe mit Hilfe des Event Services ein Observable für alle promoteten Events auf
   * und all Events die bereits veröffentlicht wurden, werden der Variable slides hinzugefügt
   * EN:
   * Call an observable for all promoted events using the Event Service
   * and all events that have already been published will be added to the variable slides
   */
  ngOnInit() {
    this.eventService.getPromotedEvents().subscribe((evs) => {
      this.slides = evs.filter((ev) => ev["publishStatus"] == true);
    });
  }

  /**
   * Gibt die Event Id an die Eltern Komponente zurück um auf das jeweilige Event zugreifen zu können
   * @param eventId
   */
  navigate(eventId: any) {
    this.carouselNavigate.emit(eventId);
  }
}
