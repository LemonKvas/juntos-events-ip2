import { Pipe, PipeTransform } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Pipe({ name: 'firestoreImg' })
export class FirestoreImgToIonicImg implements PipeTransform {

    constructor(private storage: AngularFireStorage){
    }



    transform(img: string){
        let pathReference = this.storage.ref(img);
        let downloadUrl = pathReference.getDownloadURL;



    }

}
