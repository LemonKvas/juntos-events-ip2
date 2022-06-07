import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LoginChildComponent} from './login-child.component';
import {AuthService} from 'src/app/services/auth.service';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';
import {environment} from 'src/environments/environment';

export const authStub: any = {
  authState: {},
  auth: {
    signInWithEmailAndPassword() {
      return Promise.resolve();
    },
    signInWithPopup(){
      return Promise.resolve();
    }
  }
};

describe('LoginChildComponent', () => {
  let component: LoginChildComponent;
  let fixture: ComponentFixture<LoginChildComponent>;
  let authService: AuthService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginChildComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        AuthService,
        {provide: AngularFireAuth, useValue: authStub},
        {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click Registrieren button', ()=>{
    spyOn(authService, 'EmailLogin');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(authService.EmailLogin).toHaveBeenCalled();
    });
  });
});
