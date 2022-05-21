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
  imgName: string;
  photoID: string;
  constructor(private afs: AngularFirestore, private afStorage: AngularFireStorage) {
  }
  async storePhoto(imgData: any){
    try {
      this.photoID = this.afs.createId();
      this.imgName = this.photoID + '_' + imgData.name;
      return new Promise((resolve, reject) => {
        const photoRef = this.afStorage.ref(this.location + this.imgName);

        photoRef.put(imgData).then(function(){
          photoRef.getDownloadURL().subscribe((url:any) => {
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
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.photos.unshift({
      name: capturedPhoto.webPath.substring(27),
      webviewPath: capturedPhoto.webPath,
      type: capturedPhoto.format,
    });
    await this.storePhoto(capturedPhoto);
    this.photoURL = capturedPhoto.webPath.substring(5);
  }
}
export interface EventPhoto {
  name: string;
  webviewPath: string;
  type: string;
}
