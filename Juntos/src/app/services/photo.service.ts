import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photoURL: string;
  location = 'event-photos/';
  photoID: string;
  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {
  }

  /**
   * A photo with the given data 'imgData' will be uploaded to the firebase storage.
   * The default path location is 'event-photos', which will be replaced if there is another given path e.g. 'loc'.
   * This function will return the url of the file as a Promise.
   *
   * @param imgData
   * @param loc
   * @returns url
   */
  async storePhoto(imgData: any, loc?: string){
    try {
      if (loc) {
        this.location = loc;
      }
      this.photoID = this.afs.createId();
      return new Promise((resolve, reject) => {
        const photoRef = this.afStorage.ref(this.location + this.photoID);
        photoRef.put(imgData).then(() =>{
          photoRef.getDownloadURL().subscribe((url: any) => {
            resolve(url);
          });
        }).catch((error) => {
          reject(error);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * A file with the given ID will be deleted from the firebase storage.
   * The path default is 'event-photos' but will be replaced if there is another given path e.g. 'loc'.
   *
   * @param id
   * @param loc
   */
  async deletePhoto(id: string, loc?: string) {
    try {
      if (loc) {
        this.location = loc;
      }
      this.photoID = id;

      return this.afStorage.ref(this.location + id).delete();

    } catch (e) {
      console.log(e);
    }
  }
}
