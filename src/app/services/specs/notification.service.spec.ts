import { TestBed } from '@angular/core/testing';

import { NotificationService } from '../notification.service';
import {FIREBASE_OPTIONS} from "@angular/fire/compat";
import {environment} from "src/environments/environment.prod";

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
      ],
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
