"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_event-details_event-details_module_ts"],{

/***/ 7171:
/*!*********************************************************************!*\
  !*** ./src/app/pages/event-details/event-details-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPageRoutingModule": () => (/* binding */ EventDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/event-details/event-details.page */ 952);




const routes = [
    {
        path: '',
        component: src_app_pages_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPage
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

/***/ 9393:
/*!*************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var src_app_pages_event_details_event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/event-details/event-details-routing.module */ 7171);
/* harmony import */ var src_app_pages_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/event-details/event-details.page */ 952);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_pages_event_details_event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [src_app_pages_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_1__.EventDetailsPage]
    })
], EventDetailsPageModule);



/***/ }),

/***/ 952:
/*!***********************************************************!*\
  !*** ./src/app/pages/event-details/event-details.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPage": () => (/* binding */ EventDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.page.html?ngResource */ 9618);
/* harmony import */ var _event_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details.page.scss?ngResource */ 56);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
/* harmony import */ var src_app_models_classes_event_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/classes/event.model */ 1568);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);










let EventDetailsPage = class EventDetailsPage {
    constructor(router, eventService, authService, userService, alertService, route) {
        this.router = router;
        this.eventService = eventService;
        this.authService = authService;
        this.userService = userService;
        this.alertService = alertService;
        this.route = route;
        this.event = new src_app_models_classes_event_model__WEBPACK_IMPORTED_MODULE_3__.Event();
        this.participants = [];
        this.event = this.router.getCurrentNavigation().extras.state;
        this.getCreatorData();
        this.getUserlist();
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
    getUserlist() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.event.participants.length; i++) {
                const user = yield this.userService.getUserById(this.event.participants[i]);
                this.participants.unshift(user);
            }
        });
    }
    attendEvent(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.authService.isLoggedIn() === false) {
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
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_5__.UserDataService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute }
];
EventDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-event-details/',
        template: _event_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventDetailsPage);



/***/ }),

/***/ 56:
/*!************************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  background-color: transparent;\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  position: center;\n  object-fit: cover;\n}\n\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 20px;\n    font-weight: bold;\n    font-family: \"Yeseva One\", cursive;\n  }\n\n  h2 {\n    font-size: 15px;\n  }\n\n  p {\n    font-size: 10px;\n  }\n\n  ion-label {\n    font-size: 10px;\n  }\n\n  .img-div {\n    width: 100%;\n    height: 120px;\n  }\n\n  .profile-div {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n  }\n\n  .profile-img {\n    border-radius: 50%;\n  }\n\n  .chat-btn {\n    display: inline-block;\n  }\n}\n\n@media screen and (min-width: 610px) {\n  h1 {\n    font-size: 30px;\n    font-weight: bold;\n    font-family: \"Yeseva One\", cursive;\n  }\n\n  h2 {\n    font-size: 20px;\n  }\n\n  p {\n    font-size: 15px;\n  }\n\n  ion-label {\n    font-size: 20px;\n  }\n\n  ion-segment-button {\n    min-width: auto;\n  }\n\n  ion-row {\n    justify-content: center;\n    margin: 0;\n    width: 100%;\n  }\n\n  .img-div {\n    width: 100%;\n    height: 40vh;\n  }\n\n  .profile-div {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n  }\n\n  .profile-img {\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWRldGFpbHMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEludGVncmF0aW9uc3Byb2pla3QlMjAyXFxqdW50b3MtZXZlbnRzLWlwMlxcSnVudG9zXFxzcmNcXGFwcFxccGFnZXNcXGV2ZW50LWRldGFpbHNcXGV2ZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsNkJBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQ0FBQTtFQ0NGOztFRENBO0lBQ0UsZUFBQTtFQ0VGOztFREFBO0lBQ0UsZUFBQTtFQ0dGOztFRERBO0lBQ0UsZUFBQTtFQ0lGOztFREZBO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNLRjs7RURIQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUNNRjs7RURKQTtJQUNFLGtCQUFBO0VDT0Y7O0VETEE7SUFDRSxxQkFBQTtFQ1FGO0FBQ0Y7O0FETEE7RUFDRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtDQUFBO0VDT0Y7O0VETEE7SUFDRSxlQUFBO0VDUUY7O0VETkE7SUFDRSxlQUFBO0VDU0Y7O0VEUEE7SUFDRSxlQUFBO0VDVUY7O0VEUkE7SUFDRSxlQUFBO0VDV0Y7O0VEVEE7SUFDRSx1QkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0VDWUY7O0VEVkE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2FGOztFRFhBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQ2NGOztFRFpBO0lBQ0Usa0JBQUE7RUNlRjtBQUNGIiwiZmlsZSI6ImV2ZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9JbiBHZW5lcmFsXHJcbmlvbi1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi8vTW9iaWxlIFZlcnNpb25cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlllc2V2YSBPbmVcIiwgY3Vyc2l2ZTtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLmltZy1kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZS1kaXYge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5jaGF0LWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG59XHJcbi8vRGVza3RvcCBWZXJzaW9uXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYxMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogXCJZZXNldmEgT25lXCIsIGN1cnNpdmU7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIGlvbi1yb3cge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmltZy1kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWRpdiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAucHJvZmlsZS1pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICAvLyNldmVudFBhcnRha2VCdG4ge1xyXG4gIC8vICBoZWlnaHQ6IDR2dztcclxuICAvLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy99XHJcbn1cclxuXHJcbiIsImlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtZmFtaWx5OiBcIlllc2V2YSBPbmVcIiwgY3Vyc2l2ZTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIC5pbWctZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICB9XG5cbiAgLnByb2ZpbGUtZGl2IHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgLnByb2ZpbGUtaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cblxuICAuY2hhdC1idG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjEwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogXCJZZXNldmEgT25lXCIsIGN1cnNpdmU7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuXG4gIGlvbi1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pbWctZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gIH1cblxuICAucHJvZmlsZS1kaXYge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIC5wcm9maWxlLWltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG59Il19 */";

/***/ }),

/***/ 9618:
/*!************************************************************************!*\
  !*** ./src/app/pages/event-details/event-details.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons>\r\n      <ion-button slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon name=\"heart-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon name=\"share-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <!-- Event image -->\r\n    <ion-row>\r\n      <div class=\"img-div\">\r\n        <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n      </div>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-start\">\r\n      <h1>{{event.name}}</h1>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <p>\r\n          <ion-icon name=\"calendar-outline\"></ion-icon>\r\n          {{event.eventDate | date: 'dd.MM.yyyy'}}\r\n        </p>\r\n      </ion-col>\r\n      <ion-col>\r\n        <p>\r\n          <ion-icon name=\"time-outline\"></ion-icon>\r\n          {{event.eventDate | date: 'H:mm'}}\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"segmentChanged($event)\">\r\n        <ion-segment-button value=\"information\">\r\n          <ion-label>Informationen</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"participants\">\r\n          <ion-label>Teilnehmer*Innen ({{event.participants.length}}/{{event.maxParticipants}})</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-row>\r\n\r\n    <!-- Event Information Segment -->\r\n    <div class=\"segment-divs\" *ngIf=\"segment === 'information'\">\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Beschreibung</h2>\r\n        <p>{{event.bio}}</p>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Standort</h2> <br>\r\n        <p>{{event.address['street']}} {{event.address['house']}}, {{event.address['zipCode']}} {{event.address['city']}}</p>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-start\">\r\n        <h2>Kommentare</h2>\r\n      </ion-row>\r\n    </div>\r\n\r\n    <!-- Participants Segment -->\r\n    <div class=\"segment-divs\" *ngIf=\"segment === 'participants'\">\r\n      <ion-list>\r\n        <ion-item class=\"ion-text-justify\" *ngIf=\"event.participants.length === 0\">\r\n          <p>Nehme als Erste(r) an dem Event teil!</p>\r\n        </ion-item>\r\n        <ion-item *ngFor=\"let participant of participants\">\r\n          <ion-row class=\"ion-justify-content-center\" [routerLink]=\"['/profile/' + participant.userId]\">\r\n            <ion-col size=\"5\">\r\n              <div class=\"profile-div\">\r\n                <ion-img class=\"profile-img\" src=\"{{participant.photoUrl | fireStorageImg: '/avatars' | async }}\"></ion-img>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <p>\r\n                {{participant.firstName}} {{participant.lastName}}\r\n              </p>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n              <ion-buttons class=\"chat-btn\">\r\n                <ion-button slot=\"end\">\r\n                  <ion-icon name=\"chatbubble-ellipses-outline\" size=\"small\"></ion-icon>\r\n                </ion-button>\r\n              </ion-buttons>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-justify-content-center\">\r\n  <ion-toolbar>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col class=\"ion-text-center\" id=\"eventSaveAsDraftBtnCol\" size-sm=\"6\">\r\n        <h2 *ngIf=\"this.eventService.freeEvent(event)\"><strong>{{event.price}}€/Ticket</strong></h2>\r\n        <h2 *ngIf=\"!this.eventService.freeEvent(event)\"><strong>{{event.price}}</strong></h2>\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center\" size-sm=\"6\">\r\n        <ion-button id=\"eventPartakeBtn\" (click)=\"attendEvent(event)\">\r\n          <p>Teilnehmen</p>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_event-details_event-details_module_ts.js.map