import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventItemComponent } from 'src/app/components/event-item/event-item.component';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "src/environments/environment.prod";

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EventItemComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
