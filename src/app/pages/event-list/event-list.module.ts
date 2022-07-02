import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventListPageRoutingModule } from 'src/app/pages/event-list/event-list-routing.module';
import { EventListPage } from 'src/app/pages/event-list/event-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventListPageRoutingModule,
    SharedModule,
    SwiperModule
  ],
  declarations: [EventListPage, CarouselComponent]
})
export class EventListPageModule {}
