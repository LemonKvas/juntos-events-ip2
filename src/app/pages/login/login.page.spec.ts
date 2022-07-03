import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from 'src/app/pages/login/login.page';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.loginIndicator = 'user';
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loginIndicator should be initialized with user', () => {
    expect(component.loginIndicator).toEqual('user');
  });

  it('loginIndicator should have changed values after test call', () => {
    expect(component.loginIndicator).toEqual('user');
    const mockEvent = {
      detail: {
        value: 'test'
      }
    };
    component.switchUserLogin(mockEvent);
    expect(component.loginIndicator).toEqual('test');
  });
});
