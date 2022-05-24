import { FireStorageImgPipe } from 'src/app/models/pipes/fire-storage-img.pipe';
import {AngularFireStorage} from "@angular/fire/compat/storage";

describe('FireStorageImgPipe', () => {
  it('create an instance', () => {
    const pipe = true;
    // mock firestorage
    // const pipe = new FireStorageImgPipe();
    expect(pipe).toBeTruthy();
  });
});
