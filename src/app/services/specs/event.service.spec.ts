import { TestBed } from '@angular/core/testing';

import { EventService } from 'src/app/services/event.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
