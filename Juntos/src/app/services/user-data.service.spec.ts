import {TestBed} from '@angular/core/testing';

import {UserDataService} from 'src/app/services/user-data.service';
import User from "src/app/models/classes/user";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {environment} from "src/environments/environment";
import {FIREBASE_OPTIONS} from "@angular/fire/compat";

describe('UserDataService', () => {
  let service: UserDataService;
  let fireStore: AngularFirestore;
  let getDoc: Function;

  const ReturnResult = new User("tedstId", "super@test.de");

  /*
  const userDocSpy = jasmine.createSpyObj('testId',{
      ref: ReturnResult
  })

   */

  const userCollectionSpy = jasmine.createSpyObj('user', {
    doc: ReturnResult
  })

  const userAfSpy = jasmine.createSpyObj('AngularFireStore', {
    collection: userCollectionSpy
  })

  function mockGetDoc(){
    return Promise.resolve({data: (new User("testId", "test@test.de"))});
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AngularFirestore, useValue: userAfSpy},
        { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
        {provide: getDoc, useValue: mockGetDoc()}
      ]
    });
    service = TestBed.inject(UserDataService);
    fireStore = TestBed.inject(AngularFirestore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*
  it('should be undefined, since a wrong user id is given', () => {
    let result = null;
    service.getUserById('0').then((potentialUser)=> {
      result = potentialUser;
    })
      .catch(() => {
        result = undefined;
      })
    expect(result).toBeUndefined();
  });



  it('should return an User', () => {
      expect(service.getUserById('0')).toEqual(Promise.resolve(new User("testId", "test@test.de")));
  })


   */


});