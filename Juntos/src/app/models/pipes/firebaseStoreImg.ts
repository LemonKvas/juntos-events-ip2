import { Pipe, PipeTransform } from '@angular/core';
import {getDownloadURL, getStorage, ref} from "@angular/fire/storage";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Pipe({ name: 'firestoreImg' })
export class FirestoreImgToIonicImg implements PipeTransform {

    constructor(private afStorage: AngularFireStorage) { }

    transform(img: string){
        return this.afStorage.ref('/event-photos/').child(img).getDownloadURL();
    }

}
