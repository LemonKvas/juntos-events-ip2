"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_event-details_event-details_module_ts"],{

/***/ 9114:
/*!***************************************************************!*\
  !*** ./src/app/event-details/event-details-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPageRoutingModule": () => (/* binding */ EventDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.page */ 4825);




const routes = [
    {
        path: '',
        component: _event_details_page__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPage
    }
];
let EventDetailsPageRoutingModule = class EventDetailsPageRoutingModule {
};
EventDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventDetailsPageRoutingModule);



/***/ }),

/***/ 1230:
/*!*******************************************************!*\
  !*** ./src/app/event-details/event-details.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPageModule": () => (/* binding */ EventDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details-routing.module */ 9114);
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details.page */ 4825);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);








let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_1__.EventDetailsPage]
    })
], EventDetailsPageModule);



/***/ }),

/***/ 4825:
/*!*****************************************************!*\
  !*** ./src/app/event-details/event-details.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPage": () => (/* binding */ EventDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.page.html?ngResource */ 18);
/* harmony import */ var _event_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details.page.scss?ngResource */ 2425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ 9426);
/* harmony import */ var _models_classes_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/classes/event.model */ 1568);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-data.service */ 5944);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/alert.service */ 5970);










let EventDetailsPage = class EventDetailsPage {
    constructor(router, eventService, authService, userService, alertService) {
        this.router = router;
        this.eventService = eventService;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.event = new _models_classes_event_model__WEBPACK_IMPORTED_MODULE_3__.Event();
        this.event = this.router.getCurrentNavigation().extras.state;
        this.getCreatorData();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.segment = 'information';
        });
    }
    getCreatorData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.creator = yield this.userService.getUserById(this.event.eventId);
        });
    }
    segmentChanged(ev) {
        console.log('Segment changed to ', ev);
    }
    attendEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.authService.isloggedin() === false) {
                yield this.alertService.plsSignInAlert();
            }
            else {
                this.participant = yield this.userService.getCurrentUser();
                if (this.event.price === 'Kostenlos') {
                    this.registeredEvent = {
                        eventId: this.event.eventId,
                        ticket: true,
                    };
                }
                else {
                    this.registeredEvent = {
                        eventId: this.event.eventId,
                        ticket: false,
                    };
                }
                this.event.participants.unshift(this.participant.userId);
                yield this.eventService.addRegisteredUser(this.event);
                yield this.userService.addRegisteredEvent(this.registeredEvent);
                yield this.alertService.partakeEvent(event);
            }
        });
    }
};
EventDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
EventDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-event-details/',
        template: _event_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventDetailsPage);



/***/ }),

/***/ 2425:
/*!******************************************************************!*\
  !*** ./src/app/event-details/event-details.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background-color: transparent;\n}\n\nh1 {\n  font-size: 3.5vw;\n  font-weight: bold;\n  font-family: \"Yeseva One\", cursive;\n}\n\nh2 {\n  font-size: 3vw;\n}\n\nh3 {\n  font-size: 2.5vw;\n}\n\np {\n  font-size: 2vw;\n}\n\nion-label {\n  font-size: 3vw;\n}\n\nion-row {\n  justify-content: center;\n  margin: 0;\n}\n\n.segment-divs {\n  margin: 5px;\n}\n\n.img-div {\n  width: 100%;\n  height: 40vh;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  position: center;\n  object-fit: cover;\n}\n\n#eventPartakeBtn {\n  height: 4vw;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGNBQUE7QUFNRjs7QUFKQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtBQVFGOztBQU5BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFTRjs7QUFQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVVGOztBQVJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0FBV0YiLCJmaWxlIjoiZXZlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAzLjV2dztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJZZXNldmEgT25lXCIsIGN1cnNpdmU7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDIuNXZ3O1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5zZWdtZW50LWRpdnMge1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcbi5pbWctZGl2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwdmg7XHJcbn1cclxuaW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuI2V2ZW50UGFydGFrZUJ0biB7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./src/app/event-details/event-details.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"heart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon name=\"share-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- Event image -->\r\n    <ion-row>\r\n      <div class=\"img-div\">\r\n        <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n      </div>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-start\">\r\n      <h1>{{event.name}}</h1>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>\r\n          <ion-icon name=\"calendar-outline\"></ion-icon>\r\n          {{event.eventDate | date: 'dd.MM.yyyy'}}\r\n        </p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <p>\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n          {{event.eventDate | date: 'H:mm'}}\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"information\">\r\n          <ion-label>Informationen</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"participants\">\r\n          <ion-label>Teilnehmer*Innen ({{event.participants.length}}/{{event.maxParticipants}})</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-row>\r\n    <!-- Event Information Segment -->\r\n    <div class=\"segment-divs\" *ngIf=\"segment === 'information'\">\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Beschreibung</h2> <br>\r\n        <p>{{event.bio}}</p>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Standort</h2> <br>\r\n        <p>{{event.address['street']}} {{event.address['house']}}, {{event.address['zipCode']}} {{event.address['city']}}</p>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Kommentare</h2>\r\n      </ion-row>\r\n    </div>\r\n    <!-- Participants Segment -->\r\n    <div class=\"segment-divs\" *ngIf=\"segment === 'participants'\">\r\n      <p>Event Teilnehmer</p>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-justify-content-center\">\r\n  <ion-toolbar>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col class=\"ion-text-center\" id=\"eventSaveAsDraftBtnCol\" size-sm=\"6\">\r\n        <p *ngIf=\"this.eventService.freeEvent(event)\"><strong>{{event.price}}€</strong></p>\r\n        <p *ngIf=\"!this.eventService.freeEvent(event)\"><strong>{{event.price}}</strong></p>\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center\" size-sm=\"6\">\r\n        <ion-button id=\"eventPartakeBtn\" (click)=\"attendEvent(event)\">\r\n          <h3>Teilnehmen</h3>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_event-details_event-details_module_ts.js.map