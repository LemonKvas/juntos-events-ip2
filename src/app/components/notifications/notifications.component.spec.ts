import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "src/environments/environment.prod";

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationsComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
