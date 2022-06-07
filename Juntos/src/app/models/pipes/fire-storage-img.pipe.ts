import { Pipe, PipeTransform } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Pipe({
  name: 'fireStorageImg'
})
export class FireStorageImgPipe implements PipeTransform {

  constructor(private afStorage: AngularFireStorage) { }

    transform(img: string, path: string): Promise<string> {
      return new Promise<string>((resolve, reject) => {
           this.afStorage.storage.ref(path).child(img).getDownloadURL()
              .then((url) => {
                  resolve(url);
              }).catch((err)=>{
                  reject(err);
           });
      });
    }
}
