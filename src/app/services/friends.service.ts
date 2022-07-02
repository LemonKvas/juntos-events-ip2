import { Injectable } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { arrayRemove, arrayUnion } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { FriendlistPage } from 'src/app/pages/friendlist/friendlist.page';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friendlistModal;
  private readonly userCollection: AngularFirestoreCollection;

  constructor(
    private afs: AngularFirestore,
    private userDataService: UserDataService,
    public modalController: ModalController,
    private authService: AuthService
  ) {
    this.userCollection = this.afs.collection(`user`);
  }

  async isUserFriendWith(potentialFriendId) {
    try {
      return await this.userDataService
        .getCurrentUser()
        .then((userData) => userData.friends.includes(potentialFriendId));
    } catch (e) {
      return false;
    }
  }

  async followOrganizer(organizerIdToFollow) {
    try {
      const currentUserID = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserID).update({
        friends: arrayUnion(organizerIdToFollow)
      });
      return 'followed successfully';
    } catch (e) {
      return 'something went wrong';
    }
  }

  async unfollowOrganizer(organizerIdToUnfollow) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(organizerIdToUnfollow)
      });
      return 'successfully removed';
    } catch (e) {
      return 'something went wrong';
    }
  }

  async unfriendUser(userIdToUnfriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(userIdToUnfriend)
      });
      await this.userCollection.doc(userIdToUnfriend).update({
        friends: arrayRemove(currentUserId)
      });
      return 'successfully removed';
    } catch (e) {
      return 'something went wrong';
    }
  }

  async befriendUser(userIdToBefriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayUnion(userIdToBefriend)
      });
      await this.userCollection.doc(userIdToBefriend).update({
        friends: arrayUnion(currentUserId)
      });
      return 'successfully added';
    } catch (e) {
      return 'something went wrong';
    }
  }

  async openFriendlistModal(friendIds: any[]) {
    const currentUserId = await this.userDataService.getCurrentUserID();
    const isLoggedIn = this.authService.isLoggedIn();
    const modal = await this.modalController.create({
      component: FriendlistPage,
      cssClass: 'fullscreen',
      componentProps: {
        loggedInUserId: currentUserId,
        friendIds,
        isLoggedIn
      }
    });
    this.friendlistModal = modal;
    await modal.present();
  }

  dismissModal() {
    if (this.friendlistModal) {
      this.friendlistModal.dismiss().then(() => {
        this.friendlistModal = null;
      });
    }
  }
}
