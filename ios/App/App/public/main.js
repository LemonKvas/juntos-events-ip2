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
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'edit-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_edit-user_edit-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edit-user/edit-user.module */ 9873)).then(m => m.EditUserPageModule),
        canActivate: [src_app_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard]
    },
    {
        path: 'event-create',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_event-create_event-create_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-create/event-create.module */ 6211)).then(m => m.EventCreatePageModule),
        canActivate: [src_app_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard]
    },
    {
        path: 'event-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_event-list_event-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-list/event-list.module */ 5419)).then(m => m.EventListPageModule),
        canActivate: [src_app_guards_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard]
    },
    {
        path: 'profile/:userId',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user-profile_user-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-profile/user-profile.module */ 7582)).then(m => m.UserProfilePageModule)
    },
    {
        path: 'event-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_event-details_event-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-details/event-details.module */ 1230)).then(m => m.EventDetailsPageModule)
    },
    {
        path: 'event-details/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_event-details_event-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-details/event-details.module */ 1230)).then(m => m.EventDetailsPageModule)
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/database */ 2575);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/storage */ 5574);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_9__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
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
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let FootermenuComponent = class FootermenuComponent {
    constructor(router) {
        this.router = router;
        this.currentPage = this.router.url;
    }
    ngOnInit() {
        console.log('this.router.url', this.router.url);
    }
};
FootermenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FootermenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footermenu',
        template: _footermenu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footermenu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FootermenuComponent);



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
        return new Promise((resolve, reject) => {
            if (!this.authService.isloggedin()) {
                reject(false);
            }
            resolve(true);
        });
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
    constructor(receiverId, senderId, content, type, date) {
        this.receiverId = receiverId;
        this.senderId = senderId;
        this.content = content;
        this.type = type;
        this.date = date.toDate();
    }
}
class Notification extends BaseNotification {
    constructor(senderName, ...baseNotification) {
        super(...baseNotification);
        this.senderName = senderName;
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

/***/ 5392:
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 3163);
/* harmony import */ var _notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.scss?ngResource */ 6357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_services_friends_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/friends.service */ 7974);






let NotificationsComponent = class NotificationsComponent {
    constructor(notificationService, friendsService) {
        this.notificationService = notificationService;
        this.friendsService = friendsService;
        this.notifications = [];
    }
    ngOnInit() {
        this.getNotification();
    }
    getNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.notificationService.getNotificationInitializer();
            this.notifications = this.notificationService.notifications;
        });
    }
    acceptFriendRequest(senderId) {
        this.friendsService.befriendUser(senderId)
            .then(response => console.log(response));
    }
    declineFriendRequest() {
        this.notificationService.removeNotification();
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
    isloggedin() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== undefined;
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
    SignOut() {
        this.afAuth.signOut().then(() => {
            this.refreshUserDataSub.unsubscribe();
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        });
    }
    /** FOR APP MODULE INIT **/
    initalizeService() {
        console.log("Authentication Serivce successfully initialized");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);





let FriendsService = class FriendsService {
    constructor(afs, userDataService) {
        this.afs = afs;
        this.userDataService = userDataService;
        this.userCollection = this.afs.collection(`user`);
    }
    isUserFriendWith(potentialFriendId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                return yield this.userDataService.getCurrentUser().then((userData) => {
                    console.log(userData);
                    return userData.friends.includes(potentialFriendId);
                });
            }
            catch (e) {
                return false;
            }
        });
    }
    followOrganizer(organizerIdToFollow) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserID = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserID).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayUnion)(organizerIdToFollow)
                });
                return "followed successfully";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    unfollowOrganizer(organizerIdToUnfollow) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayRemove)(organizerIdToUnfollow)
                });
                return "successfully removed";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    unfriendUser(userIdToUnfriend) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayRemove)(userIdToUnfriend)
                });
                yield this.userCollection.doc(userIdToUnfriend).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayRemove)(currentUserId)
                });
                return "successfully removed";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
    befriendUser(userIdToBefriend) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const currentUserId = yield this.userDataService.getCurrentUserID();
                yield this.userCollection.doc(currentUserId).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayUnion)(userIdToBefriend)
                });
                yield this.userCollection.doc(userIdToBefriend).update({
                    friends: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.arrayUnion)(currentUserId)
                });
                return "successfully added";
            }
            catch (e) {
                return "something went wrong";
            }
        });
    }
};
FriendsService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService }
];
FriendsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var src_app_models_classes_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/classes/notification.model */ 3314);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/notifications/notifications.component */ 5392);








let NotificationService = class NotificationService {
    constructor(userDataService, afs, popoverController) {
        this.userDataService = userDataService;
        this.afs = afs;
        this.popoverController = popoverController;
        //TODO: get names from senderIds and pass to array
        this.notificationWithExtraInformation = [];
        this.notifications = [];
        this.notificationIds = [];
        this.currentUserId = undefined;
        this.currentUserObservable = undefined;
        this.updateUserId();
        this.notificationCollecton = this.afs.collection('notifications');
    }
    updateUserId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (this.currentUserId == null || this.currentUserObservable == null) {
                    yield this.updateUserId().catch(() => { throw new Error("Could not get user data"); });
                }
                this.currentUserObservable.subscribe((userData) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                    if (userData.notifications) {
                        this.notificationIds = yield userData.notifications;
                        if (this.notificationIds.length > 0) {
                            //TODO: ADD ORDER BY DATE IN QUERY
                            this.NotificationObservable = this.afs.collection('notifications', ref => ref.where((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.documentId)(), 'in', this.notificationIds)).valueChanges({ idField: 'notificationId' });
                            yield this.getNotification();
                        }
                    }
                    else {
                        throw new Error("No notifications found");
                    }
                }));
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getNotification() {
        this.NotificationObservable.forEach((notificationDocs) => {
            console.log(notificationDocs["id"], notificationDocs);
            this.notifications = notificationDocs;
        });
    }
    createNotification(notificationType, receiverId, content, eventOrUserName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const notificationId = this.afs.createId();
            const currentUser = yield this.userDataService.getCurrentUser();
            let notificationContent;
            let newNotification;
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
                    notificationContent = currentUser.userName + " hat dir eine Freunschaftsanfrage geschickt";
                    break;
                }
            }
            newNotification = new src_app_models_classes_notification_model__WEBPACK_IMPORTED_MODULE_1__.BaseNotification(receiverId, this.currentUserId, notificationContent, notificationType, new Date());
            const data = JSON.parse(JSON.stringify(newNotification));
            yield this.notificationCollecton.doc(notificationId).set(data)
                .catch((err) => console.log(err));
        });
    }
    removeNotification() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_2__.NotificationsComponent,
                event: ev,
                animated: true,
                translucent: true,
                showBackdrop: false,
                alignment: 'end'
            });
            popover.onDidDismiss().then((result) => {
                console.log(result.data);
            });
            return yield popover.present();
            /** Sync event from popover component */
        });
    }
};
NotificationService.ctorParameters = () => [
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_0__.UserDataService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
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
                this.router.navigate(['event-list']);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/pipes/fire-storage-img.pipe */ 2417);
/* harmony import */ var src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/notifications/notifications.component */ 5392);
/* harmony import */ var _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footermenu/footermenu.component */ 8935);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);







/**
 * Import of this Module is needed to provide declared and exported Pipes and Components
 */
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__.FireStorageImgPipe, _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__.FootermenuComponent, src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule
        ],
        exports: [src_app_models_pipes_fire_storage_img_pipe__WEBPACK_IMPORTED_MODULE_0__.FireStorageImgPipe, _components_footermenu_footermenu_component__WEBPACK_IMPORTED_MODULE_2__.FootermenuComponent, src_app_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_1__.NotificationsComponent]
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
		3500,
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
module.exports = "ion-content {\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-family: Agrandir-Regular, serif !important;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\nion-button, ion-label {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLCtDQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUlBO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtBQURGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyBvdmVyd3JpdGUgaW5saW5lIHN0eWxlc1xyXG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1SZWd1bGFyLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbiwgaW9uLWxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1468:
/*!****************************************************************************!*\
  !*** ./src/app/components/footermenu/footermenu.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6357:
/*!***********************************************************************!*\
  !*** ./src/app/notifications/notifications.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */";

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
module.exports = "<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row class=\"ion-justify-content-around\">\n        <ion-buttons>\n          <ion-col>\n            <ion-button (click)=\"router.navigate(['event-list'])\">\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/event-list'; else not_home\" slot=\"icon-only\" name=\"home\"></ion-icon>\n              <ng-template #not_home>\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"home-outline\"></ion-icon>\n              </ng-template>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button>\n                <!--TODO: See if URL fits-->\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/search-event'; else not_search\" slot=\"icon-only\" name=\"search\"></ion-icon>\n              <ng-template #not_search>\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"search-outline\"></ion-icon>\n              </ng-template>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button>\n              <!--TODO: See if URL fits-->\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/qr-code'; else not_qr_code\" slot=\"icon-only\" name=\"qr-code\"></ion-icon>\n              <ng-template #not_qr_code>\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"qr-code-outline\"></ion-icon>\n              </ng-template>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button>\n              <!--TODO: See if URL fits-->\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage === '/chat'; else not_chat\" slot=\"icon-only\" name=\"chatbubble-ellipses\"></ion-icon>\n              <ng-template #not_chat>\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"chatbubble-ellipses-outline\"></ion-icon>\n              </ng-template>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <!--TODO: See if URL fits, change navigate url-->\n            <ion-button (click)=\"router.navigate(['edit-user'])\">\n              <ion-icon size=\"large\" style=\"zoom:0.8\" *ngIf=\"currentPage  === '/profile'; else not_profile\" slot=\"icon-only\" name=\"person\"></ion-icon>\n              <ng-template #not_profile>\n                <ion-icon size=\"large\" style=\"zoom:0.8\" slot=\"icon-only\" name=\"person-outline\"></ion-icon>\n              </ng-template>\n            </ion-button>\n          </ion-col>\n        </ion-buttons>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 3163:
/*!***********************************************************************!*\
  !*** ./src/app/notifications/notifications.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ion-list>\r\n    <ng-container *ngFor=\"let notification of notifications\">\r\n      <ion-item [button]=\"false\" [detail]=\"false\">\r\n        <ion-label>\r\n          <h2>{{notification.senderId}}</h2>\r\n          <p>{{notification.content}}</p>\r\n          <ng-container *ngIf=\"notification.type == 3\">\r\n            <ion-button slot=\"start\">\r\n              <ion-icon (click)=\"acceptFriendRequest(notification.senderId)\" size=\"large\" style=\"zoom:0.8\" name=\"checkmark-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button slot=\"end\">\r\n              <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ng-container>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ng-container>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map