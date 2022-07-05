import { TestBed } from '@angular/core/testing';
import {Event} from '../../models/classes/event.model';

import { EventService } from 'src/app/services/event.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';

describe('EventService', () => {
  let service: EventService;
  let afs: AngularFirestore;
  let spy: any;
  const event: Event[] = [
    new Event('Kanufahren', ['fF8qQSTRoktB2e8vWiJr'], new Date(), new Date(), '30',
      'Kanufahren für Abenteuerlustige! Wer Interesse hat, kann sich ab sofort anmelden. Bei Frage einfach schreiben',
      ['Sport', 'Outdoor'], ['gD0SEr33LwVAkIQWZJdC2Aj67TA2', 'fdZbWH9uybaWwJuNJrOp7t0TwWU2'],
      10, {street: 'Am See', house: 43, zipCode: 64729, city: 'Hamburg'}, true,
      'gWpRSCzH4F2etkUS4tCy', 'fdZbWH9uybaWwJuNJrOp7t0TwWU2'),
    new Event('Party im Garten', ['fF8qQSTRoktB2e8vWiJr'], new Date(), new Date(), '0',
      'Party mit Musik, Getränke und Essen.',['Party', 'Musik'], ['8z6t59u43qt43', 'nh834wWU2'],
      50, {street: 'Danziger Straße', house: 1, zipCode: 36482, city: 'München'}, false,
      'u4923hhw39b', 'fe56tbaWw57JuNJrO'),
  ];
  const data = Observable.call(event);
  const collectionStub = {
    valueChanges: jasmine.createSpy('snapshotChanges').and.returnValue(data)
  };
  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        { provide: AngularFirestore, userValue: angularFirestoreStub }
      ]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(angularFirestoreStub.collection).toHaveBeenCalledWith('events');
  });
  it('should return all events', () =>{
    const result = service.getAllEvents();
    expect(result).toHaveSize(2);
  });
  it('should return all published events', () => {});
  it('should return all event drafts');
  it('should add an object', () => {});
  it('should remove an object by id', () => {});
  it('should return array of objects', () => {});
  it('return one object', () => {
    const id = 'gWpRSCzH4F2etkUS4tCy';
    expect(service.getEventById(id)).toBeNaN();
  });
  it('should return an object', () => {});
  it('should return a string', () => {});
  it('should return a boolean', () => {});
  it('should update participants array', () => {});
});
