import { fakeAsync, TestBed } from '@angular/core/testing';

import { AuthService } from 'src/app/services/auth.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { authStub } from 'src/app/components/login-child/login-child.component.spec';

describe('AuthService', () => {
  let service: AuthService;
  let fireAuthService: AngularFireAuth;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AngularFireAuth, useValue: authStub },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    fireAuthService = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute google login with success', fakeAsync(() => {
    const googleSignInMethod = spyOn(fireAuthService, 'signInWithPopup');
    googleSignInMethod.and.returnValue(
      Promise.resolve({
        credential: {
          additionalUserInfo: {
            isNewUser: false
          },
          providerId: 'x.de',
          signInMethod: 'test',
          isNewUser: false,
          toJSON(): any {
            return 'ich weiss es auch nicht';
          }
        },
        user: null
      })
    );

    service.googleAuth(0).then(() => {
      expect(googleSignInMethod).toHaveBeenCalled();
    });
  }));

  it('should execute email login with success', fakeAsync(() => {
    const emailSignInMethod = spyOn(fireAuthService, 'signInWithEmailAndPassword');
    emailSignInMethod.and.returnValue(
      Promise.resolve({
        credential: null,
        user: null
      })
    );

    service.emailRegister(0, 'abc.de@x.de', '123456').then(() => {
      expect(emailSignInMethod).toHaveBeenCalled();
    });
  }));


});
