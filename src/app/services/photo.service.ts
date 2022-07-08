import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

/**
 * DE:
 * Service wird genutzt, um Fotos in Firebase Storage hochzuladen und zu entfernen.
 * EN:
 * Service is used to upload and remove photos to Firebase Storage.
 */
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: EventPhoto[] = [];
  photoURL: string;
  location = 'event-photos/';
  photoID: string;

  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {}

  /**
   * DE:
   * Diese Methode holt ein Foto aus Firebase Storage anhand der ID.
   * EN:
   * This method retrieves a photo from Firebase Storage based on the ID.
   * @param id
   */
  async getPhotoById(id: any) {
    return this.afStorage.ref(this.location + JSON.stringify(id));
  }

  /**
   * DE:
   * Ein Foto mit den angegebenen Daten 'imgData' wird in dem Firebase Storage hochgeladen.
   * Der Standardpfad ist 'event-photos', der ersetzt wird, wenn ein anderer
   * Pfad angegeben wird, z.B. 'loc'. Diese Methode gibt die URL der Datei als Promise zurück.
   * EN:
   * A photo with the given data 'imgData' will be uploaded to the firebase storage.
   * The default path location is 'event-photos', which will be replaced if there is another
   * given path e.g. 'loc'. This function will return the URL of the file as a Promise.
   *
   * @param imgData
   * @param loc
   * @returns url
   */
  async storePhoto(imgData: any, loc?: string) {
    try {
      if (loc) {
        this.location = loc;
      }
      this.photoID = this.afs.createId();
      return new Promise((resolve, reject) => {
        const photoRef = this.afStorage.ref(this.location + this.photoID);
        photoRef
          .put(imgData)
          .then(() => {
            photoRef.getDownloadURL().subscribe((url: any) => {
              resolve(url);
            });
          })
          .catch((error) => {
            reject(error);
          });
      });
    } catch (e) {
      console.log(e);
    }
    this.photos = [];
  }

  /**
   * DE:
   * Eine Datei mit der angegebenen ID wird aus dem Firebase Storage gelöscht. Der Standardpfad ist
   * "event-photos", wird aber ersetzt, wenn ein anderer Pfad angegeben wird, z. B. "loc".
   * EN:
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
export interface EventPhoto {
  name: string;
  webviewPath: string;
  type: string;
}
