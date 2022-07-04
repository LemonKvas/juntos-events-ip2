import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEventsModalComponent } from './user-events-modal.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

describe('UserEventsModalComponent', () => {
  let component: UserEventsModalComponent;
  let fixture: ComponentFixture<UserEventsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserEventsModalComponent],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEventsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
