import { TestBed } from '@angular/core/testing';

import { FriendsService } from '../friends.service';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "src/environments/environment.prod";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

describe('FriendsService', () => {
  let service: FriendsService;
  const modalControllerMock = {
    create: () => null,
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");}},
        { provide: ModalController, useValue: modalControllerMock}]
    });
    service = TestBed.inject(FriendsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
