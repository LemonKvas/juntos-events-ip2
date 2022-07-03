import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventCreatePage } from 'src/app/pages/event-create/event-create.page';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "src/environments/environment.prod";
import {Router} from "@angular/router";

describe('EventCreatePage', () => {
  let component: EventCreatePage;
  let fixture: ComponentFixture<EventCreatePage>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventCreatePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}}
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(EventCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
