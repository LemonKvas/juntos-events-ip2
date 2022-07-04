import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

/**
 * DE:
 * Pipe um die Download-URL für ein Bild aus dem Firebase Storage zu bekommen.
 * EN:
 * Pipe to get the download URL for an image from the Firebase storage.
 */
@Pipe({
  name: 'fireStorageImg'
})
export class FireStorageImgPipe implements PipeTransform {
  /**
   * @param afStorage
   */
  constructor(private afStorage: AngularFireStorage) {}

  /**
   * DE:
   * Gibt ein Promise mit der Download URL aus dem Firebase Storage zurück.
   * EN:
   * Returns a Promise with the download URL from the firebase storage.
   * @param img
   * @param path
   */
  transform(img: string, path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.afStorage.storage
        .ref(path)
        .child(img)
        .getDownloadURL()
        .then((url) => {
          resolve(url);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
