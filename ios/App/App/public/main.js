(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/guards/logged-in.guard */ 4186);




const routes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'edit-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_edit-user_edit-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-user/edit-user.module */ 798)).then(m => m.EditUserPageModule),
    },
    {
        path: 'event-create',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_event-create_event-create_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event-create/event-create.module */ 4339)).then(m => m.EventCreatePageModule),
    },
    {
        path: 'event-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_event-list_event-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event-list/event-list.module */ 6208)).then(m => m.EventListPageModule),
    },
    {
        path: 'profile/:userId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_user-profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-profile/user-profile.module */ 1749)).then(m => m.UserProfilePageModule)
    },
    {
        path: 'event-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_event-details_event-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event-details/event-details.module */ 9393)).then(m => m.EventDetailsPageModule)
    },
    {
        path: 'event-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_event-details_event-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/event-details/event-details.module */ 9393)).then(m => m.EventDetailsPageModule)
    },
    {
        path: 'friendlist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_friendlist_friendlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/friendlist/friendlist.module */ 6147)).then(m => m.FriendlistPageModule),
        canActivate: [src_app_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);





let AppComponent = class AppComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.notificationService.getNotificationInitializer();
    }
};
AppComponent.ctorParameters = () => [
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuthModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorageModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__.AngularFireDatabaseModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule],
        providers: [{
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
            },
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService,
            {
                provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__.APP_INITIALIZER,
                useFactory: (ds) => () => ds.initalizeService(),
                deps: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService],
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 8935:
/*!***************************************************************!*\
  !*** ./src/app/components/footermenu/footermenu.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FootermenuComponent": () => (/* binding */ FootermenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footermenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footermenu.component.html?ngResource */ 7593);
/* harmony import */ var _footermenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footermenu.component.scss?ngResource */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-data.service */ 5944);






let FootermenuComponent = class FootermenuComponent {
    constructor(router, userData) {
        this.router = router;
        this.userData = userData;
        this.currentPage = this.router.url;
    }
    ngOnInit() {
        console.log('this.router.url', this.router.url);
        this.getUser();
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.currentUser = yield this.userData.getCurrentUserID();
        });
    }
};
FootermenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService }
];
FootermenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-footermenu',
        template: _footermenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footermenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FootermenuComponent);



/***/ }),

/***/ 4646:
/*!*******************************************************!*\
  !*** ./src/app/components/friend/friend.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendComponent": () => (/* binding */ FriendComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _friend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friend.component.html?ngResource */ 7574);
/* harmony import */ var _friend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friend.component.scss?ngResource */ 177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);







let FriendComponent = class FriendComponent {
    constructor(friendsService, userDataService, notificationService) {
        this.friendsService = friendsService;
        this.userDataService = userDataService;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.getCurrentUser();
        this.isFriendsWith();
        //User is still logged in, but this.isLoggedIn toggles friend add and remove icon
        console.log(this.userId, this.loggedInUserId);
        if (this.userId === this.loggedInUserId) {
            this.isLoggedIn = false;
        }
    }
    sendFriendRequest() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.user["rights"] === 0 || this.user["rights"] === 2) {
                    yield this.notificationService.createNotification(3, this.userId);
                }
                else if (this.user["rights"] === 1) {
                    yield this.friendsService.followOrganizer(this.userId);
                }
                this.isFriendsWith();
            }
            catch (_a) {
            }
        });
    }
    removeFriend() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.user["rights"] === 0 || this.user["rights"] === 2) {
                    yield this.friendsService.unfriendUser(this.userId);
                }
                else if (this.user["rights"] === 1) {
                    yield this.friendsService.unfollowOrganizer(this.userId);
                }
                this.isFriendsWith();
            }
            catch (_a) {
            }
        });
    }
    getCurrentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.user = yield this.userDataService.getUserById(this.userId).then((user) => {
                    if (user.firstName === null) {
                        user.firstName = '';
                    }
                    if (user.lastName === null) {
                        user.lastName = '';
                    }
                    console.log(user);
                    if (user.photoUrl === null) {
                        user.photoUrl = '';
                    }
                    return user;
                });
                console.log(this.user);
                this.isLoaded = true;
            }
            catch (_a) {
            }
        });
    }
    isFriendsWith() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.isLoggedIn) {
                    let friendshipStatus = yield this.friendsService.isUserFriendWith(this.userId);
                    this.isFriends = friendshipStatus;
                    this.addRemoveIcon = friendshipStatus ? "person-remove-outline" : "person-add-outline";
                    return;
                }
                this.isFriends = undefined;
            }
            catch (_a) {
                this.isFriends = undefined;
            }
        });
    }
};
FriendComponent.ctorParameters = () => [
    { type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_2__.FriendsService },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_3__.UserDataService },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService }
];
FriendComponent.propDecorators = {
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    isLoggedIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    loggedInUserId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
FriendComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-friend',
        template: _friend_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_friend_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FriendComponent);



/***/ }),

/***/ 6548:
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 7905);
/* harmony import */ var _notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.scss?ngResource */ 1848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);






let NotificationsComponent = class NotificationsComponent {
    constructor(notificationService, friendsService) {
        this.notificationService = notificationService;
        this.friendsService = friendsService;
    }
    ngOnInit() {
        this.getNotification();
    }
    getNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.notificationService.getNotificationInitializer();
        });
    }
    acceptFriendRequest(notification) {
        this.friendsService.befriendUser(notification.senderId)
            .then(() => this.notificationService.removeNotification(notification.notificationId));
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService },
    { type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__.FriendsService }
];
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notifications',
        template: _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsComponent);



/***/ }),

/***/ 4186:
/*!*******************************************!*\
  !*** ./src/app/guards/logged-in.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInGuard": () => (/* binding */ LoggedInGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);



let LoggedInGuard = class LoggedInGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(route, state) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const isLoggedIn = yield this.authService.isLoggedIn();
            if (!isLoggedIn) {
                reject(false);
            }
            resolve(true);
        }));
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
LoggedInGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoggedInGuard);



/***/ }),

/***/ 3314:
/*!******************************************************!*\
  !*** ./src/app/models/classes/notification.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseNotification": () => (/* binding */ BaseNotification),
/* harmony export */   "Notification": () => (/* binding */ Notification)
/* harmony export */ });
class BaseNotification {
    constructor(receiverId, senderId, content, type, date, notificationId) {
        this.receiverId = receiverId;
        this.senderId = senderId;
        this.content = content;
        this.type = type;
        this.date = date;
        if (notificationId)
            this.notificationId = notificationId;
    }
}
class Notification extends BaseNotification {
    constructor(senderName, ...baseNotification) {
        super(...baseNotification);
        this.senderName = senderName;
        // @ts-ignore
        //this.date = (this.date typeof firebase["firestore.Timestamp"]) ? this.date.toDate() : this.date;
    }
}


/***/ }),

/***/ 3401:
/*!****************************************!*\
  !*** ./src/app/models/classes/user.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class User {
    constructor(userId, email, rights, emailVerified, socialPoints, firstName, lastName, birthDate, languages, paymentUrl, userName, premium, photoUrl, bio, friends, socialMedia, favoriteCreators, feedback, registeredEvents, createdEvents, badges) {
        this.userId = userId;
        this.email = email;
        if (rights != undefined)
            this.rights = rights;
        else
            this.rights = 0;
        if (emailVerified != undefined)
            this.emailVerified = emailVerified;
        else
            this.emailVerified = false;
        if (socialPoints != undefined)
            this.socialPoints = socialPoints;
        else
            this.socialPoints = 0;
        if (firstName != undefined)
            this.firstName = firstName;
        if (lastName != undefined)
            this.lastName = lastName;
        if (birthDate != undefined)
            this.birthDate = birthDate;
        if (languages != undefined)
            this.languages = languages;
        if (paymentUrl != undefined)
            this.paymentUrl = paymentUrl;
        if (userName != undefined)
            this.userName = userName;
        if (premium != undefined)
            this.premium = premium;
        else
            this.premium = false;
        if (photoUrl != undefined)
            this.photoUrl = photoUrl;
        if (bio != undefined)
            this.bio = bio;
        if (friends != undefined)
            this.friends = friends;
        if (socialMedia != undefined)
            this.socialMedia = socialMedia;
        if (favoriteCreators != undefined)
            this.favoriteCreators = favoriteCreators;
        if (feedback != undefined)
            this.feedback = feedback;
        if (registeredEvents != undefined)
            this.registeredEvents = registeredEvents;
        if (createdEvents != undefined)
            this.createdEvents = createdEvents;
        if (badges != undefined)
            this.badges = badges;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 2417:
/*!*******************************************************!*\
  !*** ./src/app/models/pipes/fire-storage-img.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FireStorageImgPipe": () => (/* binding */ FireStorageImgPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);



let FireStorageImgPipe = class FireStorageImgPipe {
    constructor(afStorage) {
        this.afStorage = afStorage;
    }
    transform(img, path) {
        return new Promise((resolve, reject) => {
            this.afStorage.storage.ref(path).child(img).getDownloadURL()
                .then((url) => {
                resolve(url);
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
FireStorageImgPipe.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_0__.AngularFireStorage }
];
FireStorageImgPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'fireStorageImg'
    })
], FireStorageImgPipe);



/***/ }),

/***/ 9005:
/*!*****************************************************!*\
  !*** ./src/app/pages/friendlist/friendlist.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendlistPage": () => (/* binding */ FriendlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _friendlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./friendlist.page.html?ngResource */ 8603);
/* harmony import */ var _friendlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendlist.page.scss?ngResource */ 9648);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);





let FriendlistPage = class FriendlistPage {
    constructor(friendsService) {
        this.friendsService = friendsService;
        this.limiter = 7;
        this.title = 'Freunde';
    }
    ngOnInit() {
        if (this.friendIds && this.friendIds.length > 0) {
            this.title = this.friendIds.length === 1 ? this.friendIds.length.toString() + ' Freund'
                : this.friendIds.length.toString() + ' Freunde';
        }
    }
    addLimit() {
        this.limiter += 5;
    }
};
FriendlistPage.ctorParameters = () => [
    { type: src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_2__.FriendsService }
];
FriendlistPage.propDecorators = {
    friendIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    isLoggedIn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    loggedInUserId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
FriendlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-friendlist',
        template: _friendlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_friendlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FriendlistPage);



/***/ }),

/***/ 5970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




let AlertService = class AlertService {
    constructor(alertService, location) {
        this.alertService = alertService;
        this.location = location;
    }
    basicAlert(header, message, buttons) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header,
                message,
                buttons,
            });
            this.alert.present();
        });
    }
    unsaveAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header: 'Sind Sie sicher?',
                message: 'Ihre Änderungen werden nicht gespeichert. Möchten Sie trotzdem fortfahren?',
                buttons: [
                    {
                        text: 'Ja',
                        handler: () => {
                            this.location.back();
                        }
                    },
                    {
                        text: 'Abbrechen',
                        role: 'cancel',
                    }
                ],
            });
            this.alert.present();
        });
    }
    emptyInputsAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header: 'ACHTUNG',
                message: 'Bitte füllen Sie alle mit * gekennzeichneten Felder aus.',
                buttons: ['OK']
            });
            this.alert.present();
        });
    }
    eventDraftAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header: 'ACHTUNG',
                message: 'Geben Sie dem Event Entwurf bitte einen Namen.',
                buttons: ['OK']
            });
            this.alert.present();
        });
    }
    plsSignInAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header: 'ACHTUNG',
                message: 'Bitte melden Sie sich an, um fortzufahren.',
                buttons: ['OK']
            });
            this.alert.present();
        });
    }
    partakeEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.alert = yield this.alertService.create({
                header: 'Zu Event angemeldet',
                message: 'Sie haben sich soeben erfolgreich zu ' + '<strong>' + event.name + '</strong>' + ' angemeldet!',
                buttons: ['OK']
            });
            this.alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 5414);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);






var GoogleAuthProvider = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider;
var FacebookAuthProvider = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.FacebookAuthProvider;


let AuthService = class AuthService {
    constructor(afAuth, userDataService, router, alertService) {
        this.afAuth = afAuth;
        this.userDataService = userDataService;
        this.router = router;
        this.alertService = alertService;
        this.afAuth.authState.subscribe((firebaseUser) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.user = undefined;
            this.token = undefined;
            if (firebaseUser && !firebaseUser.multiFactor["user"].isAnonymous) {
                this.refreshUserData(firebaseUser.uid);
                this.token = firebaseUser.getIdTokenResult(false);
                localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
            }
            else {
                localStorage.setItem('user', JSON.stringify(this.user));
                localStorage.setItem('token', JSON.stringify(firebaseUser.getIdTokenResult(true)));
                this.refreshUserDataSub.unsubscribe();
            }
        }));
    }
    refreshUserData(userId) {
        this.refreshUserDataSub = this.userDataService.getUserById_Observable(userId).subscribe((userData) => {
            if (userData) {
                this.user = userData;
                localStorage.setItem('user', JSON.stringify(this.user));
            }
        });
    }
    isLoggedIn() {
        return this.user !== undefined;
    }
    hasRole(role) {
        //returns true if user role equivalent or smaller
        return Number(role) >= Number(JSON.parse(localStorage.getItem('user')).rights);
    }
    checkEmailAndPasswort(email, password) {
        return email != undefined && password != undefined
            && email.trim().length > 3 && email.includes('@')
            && password.trim().length > 5;
    }
    //anonymous login
    AnonymousAuth() {
        this.afAuth.signInAnonymously()
            .then(userCredentials => {
            this.router.navigate(['event-list']);
        })
            .catch((error) => {
            console.log(error.message);
        });
    }
    //Login with E-Mail and password
    EmailLogin(email, password) {
        if (this.checkEmailAndPasswort) {
            this.afAuth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                this.router.navigate(['event-list']);
            })
                .catch((error) => {
                console.log(error.message);
                this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
            });
            return;
        }
        console.log('Email oder Passwort haben die Anforderungen nicht erfüllt');
        //TODO: alerts einfügen statt console logs
    }
    EmailRegister(userType, email, password) {
        if (this.checkEmailAndPasswort) {
            return this.afAuth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                this.CheckForNewUser(userCredential, userType);
            })
                .catch((error) => {
                if (String(error.code).includes('email-already-in-use')) {
                    this.EmailLogin(email, password);
                }
                else {
                    //TODO
                    this.alertService.basicAlert('Email oder Passwort haben die Anforderungen nicht erfüllt', 'Bitte versuchen Sie es mit anderen Werten', ['OK']);
                }
            });
        }
    }
    GoogleMobileAuth(userType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuth.signIn().then((user) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                const credential = yield firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider.credential(user.authentication.idToken);
                yield this.afAuth.signInWithCredential(credential)
                    .then((userCredential) => {
                    this.CheckForNewUser(userCredential, userType);
                })
                    .catch((error) => {
                    console.log('firebase error', error);
                });
            })).catch((error) => {
                console.log('google error', error);
            });
        });
    }
    // Sign in with Google
    GoogleAuth(userType) {
        return this.AuthLogin(new GoogleAuthProvider(), userType);
    }
    FacebookAuth(userType) {
        //TODO: MOBILE FUNKTIONIERT NUR MIT URLS
        //Dieses Tutorial benutzen:
        //https://enappd.com/blog/facebook-login-in-capacitor-apps-with-ionic-angular/128/
        //clientid 6ea09df3fcf00feb02b55194fc03d8c6
        //TODO: Nutzungsbedingungen URL & URL zur Datenrichtlinie bei Meta Developer hinzufügen
        //https://www.devopsschool.com/blog/error-app-not-set-up-this-app-is-still-in-development-mode-and-you-dont-have-access-to-it/#:~:text=returns%20this%20error-,App%20not%20set%20up%3A%20This%20app%20is%20still%20in%20development,t%20login%20with%20their%20facebook.
        return this.AuthLogin(new FacebookAuthProvider(), userType);
    }
    // Auth logic to run auth providers
    AuthLogin(provider, userType) {
        provider.setCustomParameters({
            display: 'popup'
        });
        return this.afAuth
            .signInWithPopup(provider)
            .then((userCredential) => {
            console.log(userCredential);
            this.CheckForNewUser(userCredential, userType);
            console.log('You have been successfully logged in!');
        })
            .catch((error) => {
            console.log(error);
        });
    }
    CheckForNewUser(userCredential, userType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (userCredential.additionalUserInfo.isNewUser) {
                yield this.userDataService.createNewUserInFirestore(userCredential, userType);
                yield this.router.navigate(['edit-user']);
            }
            else {
                yield this.router.navigate(['event-list']);
            }
        });
    }
    signOut() {
        this.afAuth.signOut().then(() => {
            this.refreshUserDataSub.unsubscribe();
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigate(['login']);
        }).catch((e) => {
            console.log(e);
        });
    }
    /** FOR APP MODULE INIT **/
    initalizeService() {
        console.log("Authentification Serivce successfully initialized");
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__.UserDataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 7974:
/*!*********************************************!*\
  !*** ./src/app/services/friends.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendsService": () => (/* binding */ FriendsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/friendlist/friendlist.page */ 9005);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);








let FriendsService = class FriendsService {
    constructor(afs, userDataService, modalController, authService) {
        this.afs = afs;
        this.userDataService = userDataService;
        this.modalController = modalController;
        this.authService = authService;
        this.userCollection = this.afs.collection(`user`);
    }
    isUserFriendWith(potentialFriendId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.userDataService.getCurrentUser().then((userData) => {
                    return userData.friends.includes(potentialFriendId);
                });
            }
            catch (e) {
                return false;
            }
        });
    }
    followOrganizer(organizerIdToFollow) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserID = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserID).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayUnion)(organizerIdToFollow)
                });
                return "followed successfully";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    unfollowOrganizer(organizerIdToUnfollow) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayRemove)(organizerIdToUnfollow)
                });
                return "successfully removed";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    unfriendUser(userIdToUnfriend) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayRemove)(userIdToUnfriend)
                });
                yield this.userCollection.doc(userIdToUnfriend).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayRemove)(currentUserId)
                });
                return "successfully removed";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    befriendUser(userIdToBefriend) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayUnion)(userIdToBefriend)
                });
                yield this.userCollection.doc(userIdToBefriend).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.arrayUnion)(currentUserId)
                });
                return "successfully added";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    openFriendlistModal(friendIds) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const currentUserId = yield this.userDataService.getCurrentUserID();
            const isLoggedIn = this.authService.isLoggedIn();
            const modal = yield this.modalController.create({
                component: src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_1__.FriendlistPage,
                cssClass: 'fullscreen',
                componentProps: {
                    loggedInUserId: currentUserId,
                    friendIds: friendIds,
                    isLoggedIn: isLoggedIn
                }
            });
            this.friendlistModal = modal;
            yield modal.present();
        });
    }
    dismissModal() {
        if (this.friendlistModal) {
            this.friendlistModal.dismiss().then(() => {
                this.friendlistModal = null;
            });
        }
    }
};
FriendsService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
FriendsService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], FriendsService);



/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var src_app_models_classes_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/classes/notification.model */ 3314);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/notifications/notifications.component */ 6548);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ 5970);









let NotificationService = class NotificationService {
    constructor(userDataService, afs, popoverController, alertService) {
        this.userDataService = userDataService;
        this.afs = afs;
        this.popoverController = popoverController;
        this.alertService = alertService;
        //TODO: get names from senderIds and pass to array
        this.notificationsSorted = [];
        this.notifications = [];
        this.notificationIds = [];
        this.currentUserId = undefined;
        this.currentUserObservable = undefined;
        this.hasNotifications = false;
        this.updateUserId();
        this.notificationCollecton = this.afs.collection('notifications');
        this.notificationCollectonRef = this.notificationCollecton.ref;
    }
    updateUserId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this.currentUserId = yield this.userDataService.getCurrentUserID();
                this.currentUserObservable = yield this.userDataService.getUserById_Observable(this.currentUserId);
            }
            catch (_a) {
                this.currentUserId = undefined;
                this.currentUserObservable = undefined;
            }
        });
    }
    getNotificationInitializer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.currentUserId == null || this.currentUserObservable == null) {
                    yield this.updateUserId().catch(() => {
                        throw new Error("Could not get user data");
                    });
                }
                this.currentUserObservable.subscribe((userData) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    if (userData.notifications) {
                        this.notificationIds = yield userData.notifications;
                        if (this.notificationIds.length > 0) {
                            this.NotificationObservable = this.afs.collection(this.notificationCollectonRef, ref => ref.where((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.documentId)(), 'in', this.notificationIds))
                                .valueChanges({ idField: 'notificationId' });
                            yield this.getNotification();
                        }
                        //   } else {
                        //
                        //     //throw new Error("No notifications found");
                        // }
                    }
                }));
            }
            catch (e) {
            }
        });
    }
    getNotification() {
        this.NotificationObservable.forEach((notificationDocs) => {
            if (notificationDocs) {
                this.notifications = notificationDocs;
                this.sortNotifications();
                this.hasNotifications = true;
            }
        });
    }
    sortNotifications() {
        this.notificationsSorted = this.notifications.sort((notification1, notification2) => {
            return notification1.date < notification2.date ? 1 : -1;
        });
    }
    createNotification(notificationType, receiverId, content, eventOrUserName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const notificationId = this.afs.createId();
                const currentUser = yield this.userDataService.getCurrentUser();
                let notificationContent;
                let newNotification;
                let alertText;
                switch (notificationType) {
                    case 0: {
                        //JuntosMessage
                        notificationContent = content;
                        break;
                    }
                    case 1: {
                        //EventCreated
                        notificationContent = "";
                        break;
                    }
                    case 2: {
                        //EventJoined
                        notificationContent = "";
                        break;
                    }
                    case 3: {
                        //FriendRequest
                        let doublicateCheck = yield this.checkNotificationDoublication(notificationType, currentUser['userId'], receiverId);
                        if (doublicateCheck) {
                            yield this.alertService.basicAlert('ACHTUNG', 'du hast dieser Person bereits eine Freundschaftsanfrage geschickt.', ['OK']);
                            return;
                        }
                        alertText = 'du hast deine Freundschaftsanfrage erfolgereich versendet!';
                        notificationContent = currentUser.userName + " hat dir eine Freunschaftsanfrage geschickt";
                        break;
                    }
                }
                newNotification = new src_app_models_classes_notification_model__WEBPACK_IMPORTED_MODULE_1__.Notification(currentUser.userName, receiverId, this.currentUserId, notificationContent, notificationType, new Date(), notificationId);
                const data = JSON.parse(JSON.stringify(newNotification));
                yield this.notificationCollecton.doc(notificationId).set(data)
                    .catch((err) => console.log(err));
                yield this.afs.collection('user').doc(receiverId).update({
                    notifications: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.arrayUnion)(notificationId)
                })
                    .then((res) => {
                    this.alertService.basicAlert('VERSCHICKT', alertText, ['OK']);
                })
                    .catch((err) => console.log(err));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    checkNotificationDoublication(type, senderId, receiverId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let result = false;
                const query = yield this.notificationCollectonRef.where('type', '==', type)
                    .where('senderId', '==', senderId)
                    .where('receiverId', '==', receiverId);
                const querySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(query);
                yield querySnapshot.forEach((doc) => {
                    if (doc.exists()) {
                        result = true;
                    }
                });
                return result;
            }
            catch (e) {
                return true;
            }
        });
    }
    removeNotification(notificationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.notificationCollecton.doc(notificationId).delete();
            yield this.afs.collection('user').doc(this.currentUserId).update({
                notifications: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.arrayRemove)(notificationId)
            });
        });
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsComponent,
                event: ev,
                animated: true,
                translucent: true,
                showBackdrop: false,
                alignment: 'start'
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 5944:
/*!***********************************************!*\
  !*** ./src/app/services/user-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDataService": () => (/* binding */ UserDataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var _models_classes_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/classes/user */ 3401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);









let UserDataService = class UserDataService {
    constructor(afs, router, alertService) {
        this.afs = afs;
        this.router = router;
        this.alertService = alertService;
        this.userCollection = this.afs.collection(`user`);
    }
    /*** GET USER FUNCTIONS ***/
    getUserById(userId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const docRef = this.userCollection.doc(userId).ref;
            const docSnap = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)(docRef);
            return docSnap.data();
        });
    }
    getUserById_Observable(userId) {
        return this.userCollection.doc(userId).valueChanges();
    }
    getCurrentUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userData = localStorage.getItem('user');
                const jsonParsedUserData = JSON.parse(userData);
                return Promise.resolve(jsonParsedUserData);
            }
            catch (e) {
                return Promise.reject(e);
            }
        });
    }
    getCurrentUserID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userData = yield this.getCurrentUser();
                return userData.userId;
            }
            catch (e) {
                console.log(e.message);
                return undefined;
            }
        });
    }
    getCurrentUserRole() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const userData = yield this.getCurrentUser();
                return userData.rights;
            }
            catch (e) {
                console.log(e.message);
                return undefined;
            }
        });
    }
    /*** CRUD Firestore User ***/
    createNewUserInFirestore(userCredential, userType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let user;
            if (userCredential.additionalUserInfo.providerId == 'google.com') {
                user = new _models_classes_user__WEBPACK_IMPORTED_MODULE_1__["default"](String(userCredential.user.uid), userCredential.additionalUserInfo.profile.email || 'Please contact Juntos', Number(userType), userCredential.additionalUserInfo.profile.verified_email || false, undefined, userCredential.additionalUserInfo.profile.given_name || undefined, userCredential.additionalUserInfo.profile.family_name || undefined, undefined, undefined, undefined, userCredential.additionalUserInfo.profile.name || undefined, undefined, userCredential.additionalUserInfo.profile.picture || undefined);
            }
            else {
                user = new _models_classes_user__WEBPACK_IMPORTED_MODULE_1__["default"](String(userCredential.user.uid), userCredential.user._delegate.email || 'Please contact Juntos', Number(userType));
            }
            const data = JSON.parse(JSON.stringify(user));
            yield this.userCollection.doc(userCredential.user.uid).set(data)
                .catch((err) => console.log(err));
        });
    }
    updateCurrentUser(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore();
            const user = yield this.getCurrentUser();
            const userId = user.userId;
            db.collection('user').doc(userId).update(data).then((res) => {
            }).catch((e) => {
                this.alertService.basicAlert('Bearbeiten des Profils fehlgeschlagen', 'Bitte versuchen Sie es später noch mal', ['OK']);
                console.log('error');
                console.log(e);
            });
        });
    }
    addRegisteredEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('user');
            const user = yield this.getCurrentUser();
            const userId = user.userId;
            yield db.doc(userId).update({ registeredEvents: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.arrayUnion)(event) });
        });
    }
    addCreatedEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('user');
            const user = yield this.getCurrentUser();
            const userId = user.userId;
            yield db.doc(userId).update({ createdEvents: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__.arrayUnion)(event) });
        });
    }
};
UserDataService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
UserDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], UserDataService);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/pipes/fire-storage-img.pipe */ 2417);
/* harmony import */ var src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/notifications/notifications.component */ 6548);
/* harmony import */ var _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footermenu/footermenu.component */ 8935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_components_friend_friend_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/friend/friend.component */ 4646);









/**
 * Import of this Module is needed to provide declared Pipes and Components
 */
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__.FireStorageImgPipe, _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__.FootermenuComponent, src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent, src_app_components_friend_friend_component__WEBPACK_IMPORTED_MODULE_3__.FriendComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule
        ],
        exports: [src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__.FireStorageImgPipe, _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__.FootermenuComponent, src_app_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent, src_app_components_friend_friend_component__WEBPACK_IMPORTED_MODULE_3__.FriendComponent]
    })
], SharedModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCeIQ3u8SnX2K6cbfEZH6YxJgwFTVAgN0M',
        authDomain: 'juntos-ip2-ss22.firebaseapp.com',
        projectId: 'juntos-ip2-ss22',
        storageBucket: 'juntos-ip2-ss22.appspot.com',
        messagingSenderId: '295740835695',
        appId: '1:295740835695:web:d039a4ae0f3cb7a61e8a9a',
        measurementId: 'G-3LY362Q00Q'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-family: Agrandir-Regular, serif !important;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\nion-button, ion-label {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcSW50ZWdyYXRpb25zcHJvamVrdCUyMDJcXGp1bnRvcy1ldmVudHMtaXAyXFxKdW50b3NcXHNyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwrQ0FBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURJQTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7QUNERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLy8gb3ZlcndyaXRlIGlubGluZSBzdHlsZXNcclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24sIGlvbi1sYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IEFncmFuZGlyLVJlZ3VsYXIsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tYnV0dG9uLCBpb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 1468:
/*!****************************************************************************!*\
  !*** ./src/app/components/footermenu/footermenu.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 177:
/*!********************************************************************!*\
  !*** ./src/app/components/friend/friend.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmllbmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1848:
/*!**********************************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 9648:
/*!******************************************************************!*\
  !*** ./src/app/pages/friendlist/friendlist.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-modal.fullscreen {\n  --width: 100%;\n  --height: 100%;\n  --border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZGxpc3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEludGVncmF0aW9uc3Byb2pla3QlMjAyXFxqdW50b3MtZXZlbnRzLWlwMlxcSnVudG9zXFxzcmNcXGFwcFxccGFnZXNcXGZyaWVuZGxpc3RcXGZyaWVuZGxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6ImZyaWVuZGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1vZGFsLmZ1bGxzY3JlZW4ge1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbiAgLS1oZWlnaHQ6IDEwMCU7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbiIsImlvbi1tb2RhbC5mdWxsc2NyZWVuIHtcbiAgLS13aWR0aDogMTAwJTtcbiAgLS1oZWlnaHQ6IDEwMCU7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbn0iXX0= */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n";

/***/ }),

/***/ 7593:
/*!****************************************************************************!*\
  !*** ./src/app/components/footermenu/footermenu.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-around\">\r\n        <ion-buttons>\r\n          <ion-col>\r\n            <ion-button (click)=\"router.navigate(['event-list'])\">\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/event-list'; else not_home\"\r\n                        slot=\"icon-only\" name=\"home\"></ion-icon>\r\n              <ng-template #not_home>\r\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"home-outline\"></ion-icon>\r\n              </ng-template>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button>\r\n              <!--TODO: See if URL fits-->\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/search-event'; else not_search\"\r\n                        slot=\"icon-only\" name=\"search\"></ion-icon>\r\n              <ng-template #not_search>\r\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"search-outline\"></ion-icon>\r\n              </ng-template>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button>\r\n              <!--TODO: See if URL fits-->\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/qr-code'; else not_qr_code\"\r\n                        slot=\"icon-only\" name=\"qr-code\"></ion-icon>\r\n              <ng-template #not_qr_code>\r\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"qr-code-outline\"></ion-icon>\r\n              </ng-template>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button>\r\n              <!--TODO: See if URL fits-->\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/chat'; else not_chat\" slot=\"icon-only\"\r\n                        name=\"chatbubble-ellipses\"></ion-icon>\r\n              <ng-template #not_chat>\r\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"chatbubble-ellipses-outline\"></ion-icon>\r\n              </ng-template>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-button (click)=\"router.navigate(['profile', currentUser])\">\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage.includes('/profile'); else not_profile\"\r\n                        slot=\"icon-only\" name=\"person\"></ion-icon>\r\n              <ng-template #not_profile>\r\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"person-outline\"></ion-icon>\r\n              </ng-template>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-buttons>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ }),

/***/ 7574:
/*!********************************************************************!*\
  !*** ./src/app/components/friend/friend.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngIf=\"isLoaded\">\r\n    <ion-item [routerLink]=\"['/profile/' + userId]\">\r\n         <ion-avatar>\r\n             <ion-img *ngIf=\"user.photoUrl.includes('.png') || user.photoUrl.includes('googleusercontent'); else noNeed\" alt=\"User avatar\" src=\"{{user.photoUrl}}\"></ion-img>\r\n             <ng-template #noNeed>\r\n                 <ion-img alt=\"User avatar\" src=\"{{user.photoUrl | fireStorageImg: '/avatars' | async}}\"></ion-img>\r\n             </ng-template>\r\n         </ion-avatar>\r\n          <ion-label>\r\n            <h2>{{user.userName}}</h2>\r\n            <p>{{user.firstName}} {{user.lastName}}</p>\r\n          </ion-label>\r\n          <ion-buttons slot=\"end\" *ngIf=\"isLoggedIn\">\r\n              <ng-container *ngIf=\"isFriends else noFriends\">\r\n                <ion-icon (click)=\"removeFriend()\" size=\"large\" style=\"zoom:0.8\" [name]=\"addRemoveIcon\"></ion-icon>\r\n              </ng-container>\r\n              <ng-template #noFriends>\r\n                  <ion-icon (click)=\"sendFriendRequest()\" size=\"large\" style=\"zoom:0.8\" [name]=\"addRemoveIcon\"></ion-icon>\r\n              </ng-template>\r\n          </ion-buttons>\r\n    </ion-item>\r\n</ng-container>\r\n";

/***/ }),

/***/ 7905:
/*!**********************************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-list>\r\n    <ng-container *ngFor=\"let notification of notificationService.notificationsSorted\">\r\n      <ion-item lines=\"full\" [button]=\"true\" [detail]=\"false\" [routerLink]=\"['/profile/' + notification.senderId]\">\r\n          <!--<ion-buttons slot=\"end\" (click)=\"notificationService.removeNotification(notification.notificationId)\">\r\n            <ion-icon  size=\"small\" style=\"zoom:0.8; position:absolute;\" name=\"close-outline\"></ion-icon>\r\n          </ion-buttons>\r\n          -->\r\n        <ion-label *ngIf=\"notification\">\r\n          <h2 *ngIF=\"notification.senderName else placeholderTitle\">{{notification.senderName}}</h2>\r\n          <ng-template #placeholderTitle>\r\n            <h2>Freundschaftsanfrage</h2>\r\n          </ng-template>\r\n          <p>{{notification.content}}</p>\r\n          <ng-container *ngIf=\"notification.type == 3\">\r\n            <ion-button slot=\"start\" (click)=\"acceptFriendRequest(notification)\">\r\n              <ion-icon  size=\"large\" style=\"zoom:0.8\" name=\"checkmark-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button slot=\"end\" (click)=\"notificationService.removeNotification(notification.notificationId)\">\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 8603:
/*!******************************************************************!*\
  !*** ./src/app/pages/friendlist/friendlist.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>{{title}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-icon size=\"large\" style=\"zoom:0.8\" (click)=\"friendsService.dismissModal()\" name=\"close-outline\"></ion-icon>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen>\r\n  <ion-list *ngFor=\"let friend of friendIds; let i=index\">\r\n    <ng-container *ngIf=\"i < limiter\">\r\n      <app-friend [userId]=\"friend\" [isLoggedIn]=\"isLoggedIn\"></app-friend>\r\n    </ng-container>\r\n  </ion-list>\r\n  <ion-button (click)=\"addLimit()\" *ngIf=\"limiter < friendIds.length\">Mehr anzeigen\r\n  </ion-button>\r\n</ion-content>\r\n\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map