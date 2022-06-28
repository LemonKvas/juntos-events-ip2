import { Injectable } from '@angular/core';
import {UserDataService} from 'src/app/services/user-data.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {arrayRemove, arrayUnion} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private readonly userCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private userDataService: UserDataService) {
    this.userCollection = this.afs.collection(`user`);
  }



  async isUserFriendWith(potentialFriendId) {
    try {
      return await this.userDataService.getCurrentUser().then((userData) => {
        console.log(userData);
        return userData.friends.includes(potentialFriendId)});
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
      return "followed successfully";
    }
    catch (e) {
      return "something went wrong";
    }
  }


  async unfollowOrganizer(organizerIdToUnfollow) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(organizerIdToUnfollow)
      })
      return "successfully removed";

    }
    catch (e) {
      return "something went wrong";
    }
  }

  async unfriendUser(userIdToUnfriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayRemove(userIdToUnfriend)
      })
      await this.userCollection.doc(userIdToUnfriend).update({
        friends: arrayRemove(currentUserId)
      })
      return "successfully removed";
    }
    catch (e) {
      return "something went wrong";
    }
  }

  async befriendUser(userIdToBefriend) {
    try {
      const currentUserId = await this.userDataService.getCurrentUserID();
      await this.userCollection.doc(currentUserId).update({
        friends: arrayUnion(userIdToBefriend)
      })
      await this.userCollection.doc(userIdToBefriend).update({
        friends: arrayUnion(currentUserId)
      })
      return "successfully added";
    }
    catch (e) {
      return "something went wrong";
    }
  }

}
