import {fakeAsync, TestBed} from '@angular/core/testing';

import {AuthService} from 'src/app/services/auth.service';

import {AngularFireAuth} from '@angular/fire/compat/auth';


describe('AuthService', () => {
  let service: AuthService;
  let fireAuthService: AngularFireAuth;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        AngularFireAuth,

      ]
    });
    service = TestBed.inject(AuthService);
    fireAuthService = TestBed.inject(AngularFireAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should execute google login with success', fakeAsync(()=>{
    const googleSignInMethod = spyOn(fireAuthService, 'signInWithPopup');
    googleSignInMethod.and.returnValue(Promise.resolve({
      credential: null,
      user: null
    }));

    service.GoogleAuth(0).then(() => {
      expect(googleSignInMethod).toHaveBeenCalled();
    });
  }));

  it('should execute email login with success', fakeAsync(()=>{
    const emailSignInMethod = spyOn(fireAuthService, 'signInWithEmailAndPassword');
    emailSignInMethod.and.returnValue(Promise.resolve({
      credential: null,
      user: null
    }));

    service.EmailRegister(0).then(() => {
      expect(emailSignInMethod).toHaveBeenCalled();
    });
  }));

  it('expect Email and Passwort to fit criteria', () => {
    service.email = 'test@gmail.com';
    service.password = '11111111111111111111111111111111111111111111111111111111';
    expect(service.checkEmailAndPasswort).toBeTruthy();
  });

  it('expect Email and Password to not fulfill criteria', () => {
    service.email = 'test.com';
    service.password = undefined;
    expect(service.checkEmailAndPasswort).toBeFalse();
  });

});