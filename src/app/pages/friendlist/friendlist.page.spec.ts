import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriendlistPage } from 'src/app/pages/friendlist/friendlist.page';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.prod';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

describe('FriendlistPage', () => {
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve(true))
      })
    })
  };
  let component: FriendlistPage;
  let fixture: ComponentFixture<FriendlistPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendlistPage],
      providers: [
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          }
        }
      ],
      imports: [RouterTestingModule, IonicModule.forRoot()]
    }).compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(FriendlistPage);
    component = fixture.componentInstance;

    /* initialize inputs */
    let ids = ['id1', 'id2'];
    let loggedInStatus = true;
    let loggedInUserId = 'id1';
    component.friendIds = ids;
    component.isLoggedIn = loggedInStatus;
    component.loggedInUserId = loggedInUserId;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set limiter to 12', () => {
    component.limiter = 7;
    component.addLimit();
    expect(component.limiter).toEqual(12);
  });
});
