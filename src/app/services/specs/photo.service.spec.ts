import { TestBed } from '@angular/core/testing';

import { PhotoService } from 'src/app/services/photo.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }]
    });
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
