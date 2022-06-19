import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireStorageImgPipe } from 'src/app/models/pipes/fire-storage-img.pipe';

@NgModule({
  declarations: [FireStorageImgPipe],
  imports: [CommonModule],
  exports: [FireStorageImgPipe]
})
export class SharedModule {}
