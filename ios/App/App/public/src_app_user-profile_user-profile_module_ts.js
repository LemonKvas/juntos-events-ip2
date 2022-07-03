"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-profile_user-profile_module_ts"],{

/***/ 2218:
/*!****************************************************!*\
  !*** ./src/app/event-item/event-item.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventItemComponent": () => (/* binding */ EventItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-item.component.html?ngResource */ 8622);
/* harmony import */ var _event_item_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-item.component.scss?ngResource */ 142);
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

/***/ 5030:
/*!*************************************************************!*\
  !*** ./src/app/user-profile/user-profile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePageRoutingModule": () => (/* binding */ UserProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page */ 5058);




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_0__.UserProfilePage
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

/***/ 7582:
/*!*****************************************************!*\
  !*** ./src/app/user-profile/user-profile.module.ts ***!
  \*****************************************************/
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
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile-routing.module */ 5030);
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page */ 5058);
/* harmony import */ var src_app_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/event-item/event-item.component */ 2218);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);









let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserProfilePageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_1__.UserProfilePage, src_app_event_item_event_item_component__WEBPACK_IMPORTED_MODULE_2__.EventItemComponent]
    })
], UserProfilePageModule);



/***/ }),

/***/ 5058:
/*!***************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfilePage": () => (/* binding */ UserProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile.page.html?ngResource */ 3444);
/* harmony import */ var _user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.page.scss?ngResource */ 2349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);











let UserProfilePage = class UserProfilePage {
    constructor(location, userDataService, router, eventService, platform, friendService, notificationService) {
        this.location = location;
        this.userDataService = userDataService;
        this.router = router;
        this.eventService = eventService;
        this.platform = platform;
        this.friendService = friendService;
        this.notificationService = notificationService;
        this.events = [];
        this.followFriendsIndicator = undefined;
        this.isFriends = false;
        this.currentLocation = location;
        this.profileUserId = this.currentLocation.path().split('/').pop();
    }
    ngOnInit() {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.currentUserId = yield this.userDataService.getCurrentUserID();
                this.ownProfile = this.location.isCurrentPathEqualTo('/profile/' + this.currentUserId);
                console.log(this.ownProfile, this.currentUserId, this.profileUserId);
                this.userSubscription = yield this.userDataService.getUserById_Observable(this.profileUserId).subscribe((userData) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (userData) {
                        this.user = (yield userData);
                        this.socialPointsCalculated = `${0 + '.'}${this.user.socialPoints}`;
                        this.userLoaded = true;
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
    checkFrienshipStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.currentUserId) {
                    if (!this.ownProfile) {
                        this.currentUserSubscription = this.userDataService.getUserById_Observable(this.currentUserId).subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //let outlinedIcon = this.followFriendsIcon;
            try {
                switch (indicator.followFriendsIndicator) {
                    case 0: {
                        //this.followFriendsIcon = 'person-add';
                        console.log("Freund hinzufügen");
                        yield this.notificationService.createNotification(3, this.profileUserId);
                        break;
                    }
                    case 1: {
                        //this.followFriendsIcon = 'person-remove';
                        yield this.friendService.unfriendUser(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                    }
                    case 2: {
                        //this.followFriendsIcon = 'person-add';
                        yield this.friendService.followOrganizer(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                    }
                    case 3: {
                        //this.followFriendsIcon = 'person-remove';
                        yield this.friendService.unfollowOrganizer(this.profileUserId)
                            .then((result) => {
                            console.log(result);
                        });
                        break;
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            finally {
                //this.followFriendsIcon = outlinedIcon;
            }
        });
    }
    /**
     * followFriendsIndicator: 0=befriend; 1=unfriend; 2=follow; 3=unfollow
     */
    determineFollowFriendsIndicator() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let isNormalUser = yield this.userDataService.getCurrentUserRole();
            if (isNormalUser == null || isNormalUser == 1) {
                this.followFriendsIndicator = undefined;
            }
            console.log(this.user.rights);
            if (isNormalUser === ( false || 2)) {
                this.followFriendsIndicator = isNormalUser == ( false || 2) ?
                    (this.user.rights == ( false || 2) ?
                        (!this.isFriends ? 1 : 0) :
                        (!this.isFriends ? 3 : 2)) : undefined;
            }
            this.followFriendsIcon = this.followFriendsIndicator == ( false || 3) ? 'person-add-outline' : 'person-remove-outline';
        });
    }
    switchProfileEventAndBadges(event) {
        this.eventAndBadgesIndicator = event.detail.value;
    }
    openNotifications($event) {
        this.notificationService.presentPopover($event);
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_4__.FriendsService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService }
];
UserProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-user-profile',
        template: _user_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserProfilePage);



/***/ }),

/***/ 142:
/*!*****************************************************************!*\
  !*** ./src/app/event-item/event-item.component.scss?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  width: 100%;\n  height: 100%;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin: 10px auto;\n  border: 1px solid white;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n@media (max-width: 576px) {\n  ion-item {\n    width: 12rem;\n    min-width: 10rem;\n    max-width: 20rem;\n  }\n}\n@media (max-width: 820px) {\n  ion-item {\n    min-width: 40rem;\n  }\n}\n@media (max-width: 1100px) {\n  ion-item {\n    min-width: 50rem;\n    max-height: 10rem;\n  }\n}\n@media (min-width: 1100px) {\n  ion-item {\n    min-width: 68rem;\n    max-height: 10rem;\n  }\n}\nion-img {\n  height: 100%;\n  width: 100%;\n  border: 1px solid black;\n  object-fit: cover;\n}\n@media (max-width: 820px) {\n  ion-img {\n    max-width: 7rem;\n    max-height: 7rem;\n  }\n}\n@media (min-width: 820px) {\n  ion-img {\n    max-width: 8rem;\n    max-height: 8rem;\n  }\n}\nh1 {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n@media (max-width: 576px) {\n  h1 {\n    font-size: 0.6rem;\n  }\n}\n@media (max-width: 820px) {\n  h1 {\n    font-size: 1rem;\n  }\n}\n@media (max-width: 1100px) {\n  h1 {\n    font-size: 1.3rem;\n  }\n}\n@media (min-width: 1100px) {\n  h1 {\n    font-size: 1.8rem;\n  }\n}\np {\n  font-size: 0.6rem;\n}\n@media (max-width: 576px) {\n  p {\n    font-size: 0.4rem;\n  }\n}\n@media (max-width: 820px) {\n  p {\n    font-size: 0.7rem;\n  }\n}\n@media (max-width: 1100px) {\n  p {\n    font-size: 0.9rem;\n  }\n}\n@media (min-width: 1100px) {\n  p {\n    font-size: 1.1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0RUFBQTtBQUNGO0FBQ0k7RUFWSjtJQVdNLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBRUo7QUFDRjtBQURJO0VBZko7SUFnQk0sZ0JBQUE7RUFJSjtBQUNGO0FBSEk7RUFsQko7SUFtQk0sZ0JBQUE7SUFDQSxpQkFBQTtFQU1KO0FBQ0Y7QUFMSTtFQXRCSjtJQXVCTSxnQkFBQTtJQUNBLGlCQUFBO0VBUUo7QUFDRjtBQUxBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBUUY7QUFQRTtFQUxGO0lBTUksZUFBQTtJQUNBLGdCQUFBO0VBVUY7QUFDRjtBQVRFO0VBVEY7SUFVSSxlQUFBO0lBQ0EsZ0JBQUE7RUFZRjtBQUNGO0FBVEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBWUY7QUFYRTtFQUhGO0lBSUksaUJBQUE7RUFjRjtBQUNGO0FBWkU7RUFQRjtJQVFJLGVBQUE7RUFlRjtBQUNGO0FBYkU7RUFYRjtJQVlJLGlCQUFBO0VBZ0JGO0FBQ0Y7QUFmRTtFQWRGO0lBZUksaUJBQUE7RUFrQkY7QUFDRjtBQWRBO0VBQ0UsaUJBQUE7QUFpQkY7QUFoQkU7RUFGRjtJQUdJLGlCQUFBO0VBbUJGO0FBQ0Y7QUFqQkU7RUFORjtJQU9JLGlCQUFBO0VBb0JGO0FBQ0Y7QUFsQkU7RUFWRjtJQVdJLGlCQUFBO0VBcUJGO0FBQ0Y7QUFwQkU7RUFiRjtJQWNJLGlCQUFBO0VBdUJGO0FBQ0YiLCJmaWxlIjoiZXZlbnQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgd2lkdGg6IDEycmVtO1xyXG4gICAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG4gICAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgIG1pbi13aWR0aDogNDByZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAgIG1pbi13aWR0aDogNTByZW07XHJcbiAgICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkgIHtcclxuICAgICAgbWluLXdpZHRoOiA2OHJlbTtcclxuICAgICAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIG1heC13aWR0aDogN3JlbTtcclxuICAgIG1heC1oZWlnaHQ6IDdyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xyXG4gICAgbWF4LXdpZHRoOiA4cmVtO1xyXG4gICAgbWF4LWhlaWdodDogOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCkgIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgZm9udC1zaXplOiAwLjRyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpICB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 2349:
/*!****************************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".userBio {\n  border-radius: 5px;\n  border: 1px solid lightgrey;\n  text-align: start;\n  box-shadow: 2px 2px lightgrey;\n}\n\n.userBio p {\n  margin: 3px;\n}\n\nion-content {\n  overflow-y: scroll;\n  overflow-x: scroll;\n  --offset-bottom: 0 !important;\n  background-color: #f2f2f2;\n}\n\nion-avatar {\n  width: 30vw;\n  height: 30vw;\n}\n\n@media (min-width: 820px) {\n  ion-avatar {\n    width: 15rem;\n    height: 15rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRUY7O0FBRUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJCaW8ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgYm94LXNoYWRvdzogIDJweCAycHggbGlnaHRncmV5O1xyXG59XHJcbi51c2VyQmlvIHAge1xyXG4gIG1hcmdpbjogM3B4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAtLW9mZnNldC1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcblxyXG5pb24tYXZhdGFye1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MjBweCkge1xyXG4gIGlvbi1hdmF0YXJ7XHJcbiAgICB3aWR0aDogMTVyZW07XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 8622:
/*!*****************************************************************!*\
  !*** ./src/app/event-item/event-item.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "<ion-item>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ng-container *ngIf=\"!windowWithOver800 else strechtedDetails\">\r\n        <ion-col size=\"4\">\r\n          <!-- get Photo through Photo Service by photoID or url -->\r\n          <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"6\">\r\n          <!-- (click) on event name or photo to go to the detail page of the event -->\r\n          <h1>{{event.name}}</h1>\r\n          <p>{{event.eventDate | date: 'dd.MM.yyyy'}} um {{event.eventDate | date: 'H:mm'}}</p>\r\n          <p>{{event.address['street']}} {{event.address['house']}}, <br>\r\n            {{event.address['zipCode']}} {{event.address['city']}}\r\n          </p>\r\n          <p *ngIf=\"getPrice(event)\"><strong>{{event.price}}</strong></p>\r\n        </ion-col>\r\n      <ion-col size=\"2\">\r\n        <ion-buttons>\r\n          <ion-button slot=\"end\" [id]=\"'favorEventButton'\">\r\n            <ion-icon slot=\"icon-only\" name=\"heart-outline\" size=\"medium\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons>\r\n          <ion-button slot=\"end\" [id]=\"'shareEventButton'\" (click)=\"shareEvent()\">\r\n            <ion-icon slot=\"icon-only\" name=\"share-outline\" size=\"medium\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-col>\r\n      </ng-container>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-item>\r\n\r\n<ng-template #strechtedDetails>\r\n  <ion-col size=\"2\">\r\n    <!-- get Photo through Photo Service by photoID or url -->\r\n    <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 0.5rem\">\r\n    <!-- (click) on event name or photo to go to the detail page of the event -->\r\n    <h1>{{event.name}}</h1>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 2rem\">\r\n    <p>{{event.eventDate | date: 'dd.MM.yyyy'}} um {{event.eventDate | date: 'H:mm'}}</p>\r\n  </ion-col>\r\n  <ion-col size=\"2.5\" style=\"margin-top: 1.7rem\">\r\n    <p>{{event.address['street']}} {{event.address['house']}}, <br>\r\n      {{event.address['zipCode']}} {{event.address['city']}}\r\n    </p>\r\n  </ion-col>\r\n  <ion-col size=\"1.5\" style=\"margin-top: 2rem\">\r\n    <p *ngIf=\"getPrice(event)\"><strong>{{event.price}}</strong></p>\r\n  </ion-col>\r\n  <ion-col size=\"1\">\r\n    <ion-buttons>\r\n      <ion-button slot=\"end\" [id]=\"'favorEventButton'\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart-outline\" size=\"medium\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons>\r\n      <ion-button slot=\"end\" [id]=\"'shareEventButton'\" (click)=\"shareEvent()\">\r\n        <ion-icon slot=\"icon-only\" name=\"share-outline\" size=\"medium\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-col>\r\n</ng-template>\r\n";

/***/ }),

/***/ 3444:
/*!****************************************************************!*\
  !*** ./src/app/user-profile/user-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngIf=\"userLoaded\">\r\n\r\n  <!-- Header -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title *ngIf=\"user.userName else firstNameProfileTitle\">{{user.userName}}</ion-title>\r\n      <ion-buttons slot=\"end\" (click)=\"openNotifications($event)\">\r\n        <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"notifications-outline\"></ion-icon>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"end\" *ngIf=\"followFriendsIndicator\">\r\n          <ion-icon size=\"large\" style=\"zoom:0.8\" [name]=\"followFriendsIcon\" (click)=\"determineFollowFriendsButtonFunction({followFriendsIndicator})\"></ion-icon>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <!--Titel Optionen-->\r\n  <ng-template #firstNameProfileTitle>\r\n    <ion-title *ngIf=\"user.firstName else standardProfileTitle\">{{user.firstName}}</ion-title>\r\n  </ng-template>\r\n\r\n  <ng-template #standardProfileTitle>\r\n    <ion-title>Profile</ion-title>\r\n  </ng-template>\r\n\r\n\r\n  <!-- Profil Inhalt -->\r\n  <ion-content >\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n        <ion-col size=\"auto\">\r\n          <ion-avatar>\r\n            <img *ngIf=\"user.photoUrl.includes('.png') || user.photoUrl.includes('googleusercontent'); else noNeed\" alt=\"User avatar\" src=\"{{user.photoUrl}}\">\r\n            <ng-template #noNeed>\r\n              <img alt=\"User avatar\" src=\"{{user.photoUrl | fireStorageImg: '/avatars' | async}}\">\r\n            </ng-template>\r\n          </ion-avatar>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"ion-align-self-center\" style=\"text-align: center\">\r\n          <!-- Name unter Bild festlegen -->\r\n          <h2 *ngIf=\"user.firstName else usernameCaption\">{{user.firstName}}</h2>\r\n          <ng-template #usernameCaption>\r\n            <h2 *ngIf=\"user.userName\" >{{user.userName}}</h2>\r\n          </ng-template>\r\n          <!-- weiter mit User Bio -->\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"userBio\">\r\n            <p>{{user[\"bio\"]}}</p>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"10\">\r\n          <ion-progress-bar value=\"{{socialPointsCalculated}}\"></ion-progress-bar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div class=\"loginDiv\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"12\">\r\n            <ion-segment (ionChange)=\"switchProfileEventAndBadges($event)\" value=\"user\">\r\n              <ion-segment-button value=\"events\">\r\n                <ion-label>Events</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"badges\">\r\n                <ion-label>{{user[\"socialPoints\"]}} SP</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ng-container [ngSwitch]=\"eventAndBadgesIndicator\">\r\n          <ng-container *ngSwitchCase=\"'events'\" >\r\n            <ion-list lines=\"full\" class=\"ion-align-items-center\">\r\n              <ion-row class=\"ion-align-items-center\" size=\"12\" *ngFor=\"let event of events; let i = index\">\r\n                <ion-col class=\"ion-justify-content-center\" size=\"12\">\r\n                  <app-event-item [event]=\"event\"></app-event-item>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-list>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"'badges'\" >\r\n\r\n          </ng-container>\r\n        </ng-container>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-content>\r\n</ng-container>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user-profile_user-profile_module_ts.js.map