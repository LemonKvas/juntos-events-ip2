import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatListPageRoutingModule } from './chat-list-routing.module';

import { ChatListPage } from './chat-list.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FriendlistPageModule } from '../friendlist/friendlist.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatListPageRoutingModule,
    SharedModule,
    FriendlistPageModule
  ],
  declarations: [ChatListPage]
})
export class ChatListPageModule {}
