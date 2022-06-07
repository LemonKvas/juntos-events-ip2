import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: EventPhoto[] = [];
  photoURL: string;
  location = 'event-photos/';
  photoID: string;
  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {
  }
  async getPhotoById(id: any){
    return this.afStorage.ref(this.location + JSON.stringify(id));
  }
  async storePhoto(imgData: any){
    try {
      this.photoID = this.afs.createId();
      return new Promise((resolve, reject) => {
        const photoRef = this.afStorage.ref(this.location + this.photoID);
        photoRef.put(imgData).then(function(){
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
    this.photos = [];
  }
  async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      allowEditing: false,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      name: JSON.stringify(this.photoID),
      webviewPath: capturedPhoto.webPath,
      type: capturedPhoto.format,
    });
    await this.storePhoto(capturedPhoto);
  }
}
export interface EventPhoto {
  name: string;
  webviewPath: string;
  type: string;
}
