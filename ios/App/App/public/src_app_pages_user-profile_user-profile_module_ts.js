"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_user-profile_user-profile_module_ts"],{

/***/ 6814:
/*!***************************************************************!*\
  !*** ./src/app/components/event-item/event-item.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventItemComponent": () => (/* binding */ EventItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-item.component.html?ngResource */ 4253);
/* harmony import */ var _event_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item.component.scss?ngResource */ 6301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/share */ 8921);





let EventItemComponent = class EventItemComponent {
    constructor() {
        this.onResize(undefined);
    }
    onResize(event) {
        this.windowWithOver800 = window.innerWidth > 800;
    }
    getPrice(event) {
        if (event.price === '0' || event.price === undefined || event.price === null) {
            event.price = 'Kostenlos';
            return event.price;
        }
        return event.price;
    }
    shareEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const msgText = 'Hallo,\n';
            _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.canShare().then(canShare => {
                if (canShare.value) {
                    _capacitor_share__WEBPACK_IMPORTED_MODULE_2__.Share.share({
                        title: 'Juntos Event',
                        text: msgText,
                        dialogTitle: 'Event teilen'
                    }).then((v) => console.log('ok: ', v))
                        .catch(err => console.log(err));
                }
                else {
                    console.log('Error: Sharing not available!');
                }
            });
        });
    }
};
EventItemComponent.ctorParameters = () => [];
EventItemComponent.propDecorators = {
    event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['window:resize', ['$event'],] }]
};
EventItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-event-item',
        template: _event_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventItemComponent);



/***/ }),

/***/ 3376:
/*!*******************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageRoutingModule": () => (/* binding */ UserProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/user-profile/user-profile.page */ 1553);




const routes = [
    {
        path: '',
        component: src_app_pages_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UserProfilePage
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ 1749:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageModule": () => (/* binding */ UserProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_user_profile_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/user-profile/user-profile-routing.module */ 3376);
/* harmony import */ var src_app_pages_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/user-profile/user-profile.page */ 1553);
/* harmony import */ var src_app_components_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/event-item/event-item.component */ 6814);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);









let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_pages_user_profile_user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserProfilePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [src_app_pages_user_profile_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UserProfilePage, src_app_components_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_2__.EventItemComponent]
    })
], UserProfilePageModule);



/***/ }),

/***/ 1553:
/*!*********************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePage": () => (/* binding */ UserProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page.html?ngResource */ 9886);
/* harmony import */ var _user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page.scss?ngResource */ 9358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ 7556);













let UserProfilePage = class UserProfilePage {
    constructor(location, userDataService, router, eventService, platform, friendService, notificationService, alertService, menu, auth) {
        this.location = location;
        this.userDataService = userDataService;
        this.router = router;
        this.eventService = eventService;
        this.platform = platform;
        this.friendService = friendService;
        this.notificationService = notificationService;
        this.alertService = alertService;
        this.menu = menu;
        this.auth = auth;
        this.friendIds = [];
        this.followFriendsIndicator = undefined;
        this.isFriends = false;
        this.currentLocation = location;
        this.profileUserId = this.currentLocation.path().split('/').pop();
    }
    ngOnInit() {
        this.eventAndBadgesIndicator = 'events';
        this.isDesktop = !(this.platform.is('mobileweb') || this.platform.is('ios') || this.platform.is('android') ||
            this.platform.is('iphone'));
        this.loadUser()
            .then(() => {
            //TODO: calculate points korrekt kalkulieren wenn Badges implementiert wurden!
        });
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
    loadUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.currentUserId = yield this.userDataService.getCurrentUserID();
                this.ownProfile = this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId);
                this.userSubscription = yield this.userDataService.getUserById_Observable(this.profileUserId).subscribe((userData) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                    if (userData) {
                        this.user = (yield userData);
                        this.socialPointsCalculated = `${0 + '.'}${this.user.socialPoints}`;
                        this.userLoaded = true;
                        this.getFriends();
                        this.getAttendedEvents();
                        //onStorageChange updates addfriendbutton text and frienship status
                        yield this.checkFrienshipStatus();
                    }
                    else {
                        throw new Error('Nutzer konnte nicht geladen werden');
                    }
                }));
            }
            catch (e) {
                console.log(e);
                yield this.router.navigate(['/login']);
            }
        });
    }
    getFriends() {
        this.friendIds = this.user.friends;
    }
    checkFrienshipStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.currentUserId) {
                    if (!this.ownProfile) {
                        this.currentUserSubscription = this.userDataService.getUserById_Observable(this.currentUserId).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                            this.isFriends = yield this.friendService.isUserFriendWith(this.profileUserId);
                            yield this.determineFollowFriendsIndicator();
                        }));
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getAttendedEvents() {
        if (this.user.registeredEvents) {
            const attendedEventIds = this.user.registeredEvents.reduce((attendedEventIds, event) => {
                if (event.ticket) {
                    attendedEventIds.push(event.eventId);
                }
                return attendedEventIds;
            }, []);
            this.eventService.getMultipleEventsByEventId(attendedEventIds).forEach((eventDocs) => {
                this.events = eventDocs;
            });
        }
    }
    determineFollowFriendsButtonFunction(indicator) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            //let outlinedIcon = this.followFriendsIcon;
            try {
                switch (indicator.followFriendsIndicator) {
                    case 0:
                        //this.followFriendsIcon = 'person-add';
                        yield this.notificationService.createNotification(3, this.profileUserId).then(() => {
                        });
                        break;
                    case 1:
                        //this.followFriendsIcon = 'person-remove';
                        yield this.friendService.unfriendUser(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                    case 2:
                        //this.followFriendsIcon = 'person-add';
                        yield this.friendService.followOrganizer(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                    case 3:
                        //this.followFriendsIcon = 'person-remove';
                        yield this.friendService.unfollowOrganizer(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                }
            }
            catch (e) {
            }
        });
    }
    openMenu() {
        console.log('open');
        this.menu.enable(true, 'first');
        this.menu.open('first').then(r => {
            'it is opens';
        }).catch(e => {
            console.log(e);
        });
    }
    openFriendlist() {
        this.friendService.openFriendlistModal(this.friendIds);
    }
    /**
     * followFriendsIndicator: 0=befriend; 1=unfriend; 2=follow; 3=unfollow
     */
    determineFollowFriendsIndicator() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let isNormalUser = yield this.userDataService.getCurrentUserRole();
            if (isNormalUser === 0 || isNormalUser === 2) {
                if (this.user.rights === 0 || this.user.rights === 2) {
                    if (this.isFriends) {
                        this.followFriendsIndicator = 1;
                        this.followFriendsIcon = 'person-remove-outline';
                    }
                    else {
                        this.followFriendsIndicator = 0;
                        this.followFriendsIcon = 'person-add-outline';
                    }
                }
                else {
                    if (this.isFriends) {
                        this.followFriendsIndicator = 3;
                        this.followFriendsIcon = 'person-remove-outline';
                    }
                    else {
                        this.followFriendsIndicator = 2;
                        this.followFriendsIcon = 'person-add-outline';
                    }
                }
            }
            else {
                this.followFriendsIndicator = undefined;
            }
        });
    }
    switchProfileEventAndBadges(event) {
        console.log('Segment changed', event);
    }
    openNotifications($event) {
        this.notificationService.presentPopover($event);
    }
    logOut() {
        this.auth.signOut();
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_4__.FriendsService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.MenuController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService }
];
UserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-user-profile',
        template: _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserProfilePage);



/***/ }),

/***/ 6301:
/*!****************************************************************************!*\
  !*** ./src/app/components/event-item/event-item.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  vertical-align: middle;\n}\n\nion-item {\n  border: 1px solid white;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 15px;\n    font-weight: bold;\n  }\n\n  p {\n    font-size: 10px;\n  }\n\n  ion-item {\n    width: 100%;\n    height: 40%;\n    padding: 0;\n    margin: 5px 5px 5px 0;\n  }\n\n  ion-searchbar {\n    border-radius: 15px;\n  }\n\n  ion-list {\n    margin: 10px;\n    justify-content: center;\n    vertical-align: middle;\n  }\n\n  ion-col {\n    height: 100%;\n    padding-top: 5px;\n    margin: 2px 2px 5px;\n    justify-content: left;\n    display: inline-block;\n  }\n\n  .img-col {\n    height: 80%;\n    margin-left: 0;\n    padding-left: 0;\n    vertical-align: center;\n  }\n\n  .img-div {\n    height: 120px;\n    width: 90%;\n    text-align: center;\n  }\n\n  .event-address {\n    position: absolute;\n    opacity: 0;\n  }\n\n  .buttons-col {\n    position: absolute;\n    opacity: 0;\n  }\n}\n\n@media screen and (min-width: 610px) {\n  ion-item {\n    width: 60%;\n    margin: 10px;\n    padding: 10px;\n  }\n\n  .img-div {\n    height: 220px;\n    width: 80%;\n    padding-bottom: 5px;\n  }\n\n  ion-col {\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSW50ZWdyYXRpb25zcHJvamVrdCUyMDJcXGp1bnRvcy1ldmVudHMtaXAyXFxKdW50b3NcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxldmVudC1pdGVtXFxldmVudC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7O0VEQUE7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ0dGOztFRERBO0lBQ0UsbUJBQUE7RUNJRjs7RURGQTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VDS0Y7O0VESEE7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7RUNNRjs7RURKQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDT0Y7O0VETEE7SUFDRSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDUUY7O0VETkE7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUNTRjs7RURQQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQ1VGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ1NGOztFRFBBO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ1VGOztFRFJBO0lBQ0UsV0FBQTtFQ1dGO0FBQ0YiLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW4gR2VuZXJhbFxyXG5pb24taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcbi8vTW9iaWxlIFZlcnNpb25cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xyXG4gIH1cclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luOiAycHggMnB4IDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmltZy1jb2wge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5pbWctZGl2IHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZXZlbnQtYWRkcmVzcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuYnV0dG9ucy1jb2wge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuLy9EZXNrdG9wIFZlcnNpb25cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjEwcHgpIHtcclxuICBpb24taXRlbSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLmltZy1kaXYge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBpb24tY29sIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxufVxyXG4iLCJpb24taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDA7XG4gIH1cblxuICBpb24tc2VhcmNoYmFyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB9XG5cbiAgaW9uLWxpc3Qge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG5cbiAgaW9uLWNvbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luOiAycHggMnB4IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmltZy1jb2wge1xuICAgIGhlaWdodDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmltZy1kaXYge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZXZlbnQtYWRkcmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICAuYnV0dG9ucy1jb2wge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MTBweCkge1xuICBpb24taXRlbSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gIC5pbWctZGl2IHtcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIG1hcmdpbjogNXB4O1xuICB9XG59Il19 */";

/***/ }),

/***/ 9358:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".userBio {\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  text-align: start;\n  box-shadow: 2px 2px lightgrey;\n}\n\n.userBio p {\n  margin: 3px;\n}\n\nion-content {\n  overflow-y: scroll;\n  overflow-carousel: scroll;\n  --offset-bottom: 0 !important;\n  background-color: #ffffff;\n}\n\nion-avatar {\n  width: 30vw;\n  height: 30vw;\n}\n\n@media (min-width: 820px) {\n  ion-avatar {\n    width: 15rem;\n    height: 15rem;\n  }\n}\n\n#logoutBtn {\n  position: fixed;\n  left: 0;\n  bottom: 10px;\n  right: 0;\n}\n\nion-segment-button {\n  --indicator-box-shadow: transparent!important;\n  --background:white;\n  --color: var( --ion-color-secondary);\n  --background-checked: var(--ion-color-primary)!important;\n  --color-checked: black;\n  --indicator-color: transparent!important;\n  font-family: Agrandir-Regular, serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSW50ZWdyYXRpb25zcHJvamVrdCUyMDJcXGp1bnRvcy1ldmVudHMtaXAyXFxKdW50b3NcXHNyY1xcYXBwXFxwYWdlc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREVBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDQUY7O0FER0E7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQ0FBQTtBQ0FGIiwiZmlsZSI6InVzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckJpbyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBib3gtc2hhZG93OiAgMnB4IDJweCBsaWdodGdyZXk7XHJcbn1cclxuLnVzZXJCaW8gcCB7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIC0tb2Zmc2V0LWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXJ7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAzMHZ3O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgyMHB4KSB7XHJcbiAgaW9uLWF2YXRhcntcclxuICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIGhlaWdodDogMTVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4jbG9nb3V0QnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuICAtLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcclxuICAtLWluZGljYXRvci1jb2xvciA6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIudXNlckJpbyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCBsaWdodGdyZXk7XG59XG5cbi51c2VyQmlvIHAge1xuICBtYXJnaW46IDNweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgLS1vZmZzZXQtYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogMzB2dztcbiAgaGVpZ2h0OiAzMHZ3O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDE1cmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gIH1cbn1cbiNsb2dvdXRCdG4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDA7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xuICAtLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 4253:
/*!****************************************************************************!*\
  !*** ./src/app/components/event-item/event-item.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<!--<ng-template [routerLink]=\"['event-details/'+event.eventId]\">-->\r\n<!--<ion-col class=\"img-col\" size=\"5\">-->\r\n<!--  &lt;!&ndash; get Photo through Photo Service by photoID or url &ndash;&gt;-->\r\n<!--  <div class=\"img-div\">-->\r\n<!--    <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>-->\r\n<!--  </div>-->\r\n<!--</ion-col>-->\r\n<!--<ion-col size=\"5\">-->\r\n<!--  &lt;!&ndash; (click) on event name or photo to go to the detail page of the event &ndash;&gt;-->\r\n<!--  <div>-->\r\n<!--    <h1>{{event.name}}</h1>-->\r\n<!--    <p>am {{event.eventDate | date: 'dd.MM.yyyy'}}</p>-->\r\n<!--    <p>um {{event.eventDate | date: 'H:mm'}} Uhr</p>-->\r\n<!--    <p class=\"event-address\">{{event.address['street']}} {{event.address['house']}}, <br>-->\r\n<!--      {{event.address['zipCode']}} {{event.address['city']}}-->\r\n<!--    </p>-->\r\n<!--    <p *ngIf=\"getPrice(event)\"><strong>{{event.price}}</strong></p>-->\r\n<!--  </div>-->\r\n<!--</ion-col>-->\r\n<!--<ion-col class=\"buttons-col\" size=\"2\">-->\r\n<!--  <ion-buttons>-->\r\n<!--    <ion-button slot=\"end\" class=\"favorEventButton\">-->\r\n<!--      <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"heart-outline\"></ion-icon>-->\r\n<!--    </ion-button>-->\r\n<!--  </ion-buttons>-->\r\n<!--  <ion-buttons>-->\r\n<!--    <ion-button slot=\"end\" class=\"shareEventButton\" (click)=\"shareEvent()\">-->\r\n<!--      <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"share-outline\"></ion-icon>-->\r\n<!--    </ion-button>-->\r\n<!--  </ion-buttons>-->\r\n<!--</ion-col>-->\r\n<!--</ng-template>-->\r\n<ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ng-container *ngIf=\"!windowWithOver800 else strechtedDetails\">\r\n        <ion-col size=\"4\">\r\n          <!-- get Photo through Photo Service by photoID or url -->\r\n          <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <!-- (click) on event name or photo to go to the detail page of the event -->\r\n          <h1>{{event.name}}</h1>\r\n          <p>{{event.eventDate | date: 'dd.MM.yyyy'}} um {{event.eventDate | date: 'H:mm'}}</p>\r\n          <p>{{event.address['street']}} {{event.address['house']}}, <br>\r\n            {{event.address['zipCode']}} {{event.address['city']}}\r\n          </p>\r\n          <p *ngIf=\"getPrice(event)\"><strong>{{event.price}}</strong></p>\r\n        </ion-col>\r\n      <ion-col size=\"2\">\r\n<!--        <ion-buttons>-->\r\n<!--          <ion-button slot=\"end\" [id]=\"'favorEventButton'\">-->\r\n<!--            <ion-icon slot=\"icon-only\" name=\"heart-outline\" size=\"medium\"></ion-icon>-->\r\n<!--          </ion-button>-->\r\n<!--        </ion-buttons>-->\r\n<!--        <ion-buttons>-->\r\n<!--          <ion-button slot=\"end\" [id]=\"'shareEventButton'\" (click)=\"shareEvent()\">-->\r\n<!--            <ion-icon slot=\"icon-only\" name=\"share-outline\" size=\"medium\"></ion-icon>-->\r\n<!--          </ion-button>-->\r\n<!--        </ion-buttons>-->\r\n      </ion-col>\r\n      </ng-container>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-item>\r\n\r\n<ng-template #strechtedDetails>\r\n  <ion-col size=\"2\">\r\n    <!-- get Photo through Photo Service by photoID or url -->\r\n    <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 0.5rem\">\r\n    <!-- (click) on event name or photo to go to the detail page of the event -->\r\n    <h1>{{event.name}}</h1>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 2rem\">\r\n    <p>{{event.eventDate | date: 'dd.MM.yyyy'}} um {{event.eventDate | date: 'H:mm'}}</p>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 1.7rem\">\r\n    <p>{{event.address['street']}} {{event.address['house']}}, <br>\r\n      {{event.address['zipCode']}} {{event.address['city']}}\r\n    </p>\r\n  </ion-col>\r\n  <ion-col size=\"1.5\" style=\"margin-top: 2rem\">\r\n    <p *ngIf=\"getPrice(event)\"><strong>{{event.price}}</strong></p>\r\n  </ion-col>\r\n  <ion-col size=\"1\">\r\n<!--    <ion-buttons>-->\r\n<!--      <ion-button slot=\"end\" [id]=\"'favorEventButton'\">-->\r\n<!--        <ion-icon slot=\"icon-only\" name=\"heart-outline\" size=\"medium\"></ion-icon>-->\r\n<!--      </ion-button>-->\r\n<!--    </ion-buttons>-->\r\n<!--    <ion-buttons>-->\r\n<!--      <ion-button slot=\"end\" [id]=\"'shareEventButton'\" (click)=\"shareEvent()\">-->\r\n<!--        <ion-icon slot=\"icon-only\" name=\"share-outline\" size=\"medium\"></ion-icon>-->\r\n<!--      </ion-button>-->\r\n<!--    </ion-buttons>-->\r\n  </ion-col>\r\n</ng-template>\r\n";

/***/ }),

/***/ 9886:
/*!**********************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"userLoaded\">\r\n\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n                <ion-back-button></ion-back-button>\r\n<!--        <ion-button (click)=\"openMenu()\">-->\r\n<!--          <ion-icon name=\"menu-outline\"></ion-icon>-->\r\n<!--        </ion-button>-->\r\n      </ion-buttons>\r\n      <ion-buttons *ngIf=\"friendIds\" slot=\"end\">\r\n        <ion-icon size=\"large\" style=\"zoom:0.95\" (click)=\"openFriendlist()\" name=\"people-outline\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\">\r\n        <ng-container *ngIf=\"ownProfile\">\r\n          <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"notifications-outline\" (click)=\"openNotifications($event)\"></ion-icon>\r\n          <!--          <ng-template #noNotis>-->\r\n          <!--            <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"notifications-outline\" (click)=\"openNotifications($event)\"></ion-icon>-->\r\n          <!--          </ng-template>-->\r\n          <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"settings-outline\" routerLink=\"/edit-user\" routerLinkActive=\"active\"></ion-icon>\r\n          <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"log-out-outline\" (click)=\"logOut()\"></ion-icon>\r\n        </ng-container>\r\n        <ion-icon *ngIf=\"followFriendsIndicator !== undefined\"size=\"large\" style=\"zoom:0.8\" [name]=\"followFriendsIcon\"\r\n                  (click)=\"determineFollowFriendsButtonFunction({followFriendsIndicator})\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!--Titel Optionen-->\r\n  <ng-template #firstNameProfileTitle>\r\n    <ion-title *ngIf=\"user.firstName else standardProfileTitle\">{{user.firstName}}</ion-title>\r\n  </ng-template>\r\n\r\n  <ng-template #standardProfileTitle>\r\n    <ion-title>Profile</ion-title>\r\n  </ng-template>\r\n\r\n\r\n\r\n\r\n\r\n  <!-- Profil Inhalt -->\r\n  <ion-content>\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <img *ngIf=\"user.photoUrl.includes('.png') || user.photoUrl.includes('googleusercontent'); else noNeed\"\r\n                 alt=\"User avatar\" src=\"{{user.photoUrl}}\">\r\n            <ng-template #noNeed>\r\n              <img alt=\"User avatar\" src=\"{{user.photoUrl | fireStorageImg: '/avatars' | async}}\">\r\n            </ng-template>\r\n          </ion-avatar>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\" style=\"text-align: center\">\r\n          <!-- Name unter Bild festlegen -->\r\n          <h2 *ngIf=\"user.firstName else usernameCaption\">{{user.firstName}}</h2>\r\n          <ng-template #usernameCaption>\r\n            <h2 *ngIf=\"user.userName\">{{user.userName}}</h2>\r\n          </ng-template>\r\n          <!-- weiter mit User Bio -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" *ngIf=\"user['description']\">\r\n          <div class=\"userBio\">\r\n            <p>{{user[\"description\"]}}</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"10\">\r\n          <ion-progress-bar value=\"{{socialPointsCalculated}}\"></ion-progress-bar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"loginDiv\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-segment (ionChange)=\"switchProfileEventAndBadges($event)\" [(ngModel)]=\"eventAndBadgesIndicator\">\r\n              <ion-segment-button value=\"events\">\r\n                <ion-label>Events</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"badges\">\r\n                <ion-label>{{user[\"socialPoints\"]}} SP</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ng-container [ngSwitch]=\"eventAndBadgesIndicator\">\r\n          <ng-container *ngSwitchCase=\"'events'\">\r\n            <ion-list lines=\"full\" class=\"ion-align-items-center\">\r\n              <ng-container *ngIf=\"events else noEvents\">\r\n                <ion-row class=\"ion-align-items-center\" size=\"12\" *ngFor=\"let event of events; let i = index\">\r\n                  <ion-col class=\"ion-justify-content-center ion-align-items-center\" size=\"auto\">\r\n                    <app-event-item class=\"ion-align-self-center\" [event]=\"event\"></app-event-item>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ng-container>\r\n              <ng-template #noEvents>\r\n                <ion-row class=\"ion-align-items-center ion-justify-content-center\" size=\"12\">\r\n                  <ion-col style=\"text-align: center\">\r\n                    <p *ngIf=\"ownProfile else youText\">Du hast dich leider noch zu keinem Event angemeldet.. </p>\r\n                    <ng-template #youText>\r\n                      <p>{{user.userName}} hat sich leider noch zu keinem Event angemeldet..</p>\r\n                    </ng-template>\r\n                    <p>Finde jetzt Events die dir gefallen könnten:</p>\r\n                    <ion-button routerLink=\"/event-list\" routerLinkActive=\"active\">Alle Events</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ng-template>\r\n            </ion-list>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'badges'\" >\r\n            <ion-row class=\"ion-align-items-center ion-justify-content-center\" size=\"12\">\r\n              <ion-col style=\"text-align: center\">\r\n                <p>Sammle Badges beim Besuchen von Events!</p>\r\n                <p>Bald verfügbar!</p>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ng-container>\r\n        </ng-container>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>\r\n</ng-container>\r\n\r\n<app-footermenu></app-footermenu>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-profile_user-profile_module_ts.js.map
