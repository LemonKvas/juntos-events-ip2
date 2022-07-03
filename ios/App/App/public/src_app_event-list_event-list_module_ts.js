"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_event-list_event-list_module_ts"],{

/***/ 8850:
/*!*********************************************************!*\
  !*** ./src/app/event-list/event-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPageRoutingModule": () => (/* binding */ EventListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _event_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list.page */ 369);




const routes = [
    {
        path: '',
        component: _event_list_page__WEBPACK_IMPORTED_MODULE_0__.EventListPage
    }
];
let EventListPageRoutingModule = class EventListPageRoutingModule {
};
EventListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventListPageRoutingModule);



/***/ }),

/***/ 5419:
/*!*************************************************!*\
  !*** ./src/app/event-list/event-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPageModule": () => (/* binding */ EventListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list-routing.module */ 8850);
/* harmony import */ var _event_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.page */ 369);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let EventListPageModule = class EventListPageModule {
};
EventListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventListPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_event_list_page__WEBPACK_IMPORTED_MODULE_1__.EventListPage]
    })
], EventListPageModule);



/***/ }),

/***/ 369:
/*!***********************************************!*\
  !*** ./src/app/event-list/event-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPage": () => (/* binding */ EventListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list.page.html?ngResource */ 9012);
/* harmony import */ var _event_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.page.scss?ngResource */ 6412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ 9426);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/share */ 8921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let EventListPage = class EventListPage {
    constructor(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.events = [];
    }
    ngOnInit() {
        this.getEvents();
    }
    getEvents() {
        this.eventService.getPublishedEvents().subscribe((res) => {
            this.events = res.map((e) => (Object.assign({ eventId: e.payload.doc.id }, e.payload.doc.data())));
        });
    }
    shareEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const msgText = 'Hallo,\n';
            _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.canShare().then(canShare => {
                if (canShare.value) {
                    _capacitor_share__WEBPACK_IMPORTED_MODULE_3__.Share.share({
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
    createEvent() {
        this.router.navigate(['event-create']);
    }
    /* Navigate to Event Details */
    eventDetailsState(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedEvent = yield this.eventService.getEventById(id);
            const navigationExtras = {
                state: {
                    name: this.selectedEvent.name,
                    photoURLs: this.selectedEvent.photoURLs,
                    creationDate: this.selectedEvent.creationDate,
                    eventDate: this.selectedEvent.eventDate,
                    price: this.selectedEvent.price,
                    bio: this.selectedEvent.bio,
                    categories: this.selectedEvent.categories,
                    participants: this.selectedEvent.participants,
                    maxParticipants: this.selectedEvent.maxParticipants,
                    address: this.selectedEvent.address,
                    publishStatus: this.selectedEvent.publishStatus,
                    eventId: this.selectedEvent.eventId,
                    creatorId: this.selectedEvent.creatorId,
                }
            };
            yield this.router.navigateByUrl(`event-details/${id}`, navigationExtras);
        });
    }
};
EventListPage.ctorParameters = () => [
    { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
EventListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-event-list',
        template: _event_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_event_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventListPage);



/***/ }),

/***/ 6412:
/*!************************************************************!*\
  !*** ./src/app/event-list/event-list.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "h1 {\n  font-size: 3.5vw;\n  font-weight: bold;\n}\n\np {\n  font-size: 2vw;\n}\n\nion-item {\n  width: 90%;\n  height: 40%;\n  margin: 5px;\n  border: 1px solid white;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nion-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\nion-searchbar {\n  border-radius: 15px;\n}\n\nion-list {\n  margin: 10px;\n  justify-content: center;\n  vertical-align: middle;\n}\n\n.img-div {\n  width: 20vw;\n  height: 20vw;\n}\n\nion-col {\n  margin: 5px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRFQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7QUFPRiIsImZpbGUiOiJldmVudC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDMuNXZ3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIC8vcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5pb24taW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmltZy1kaXYge1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogMjB2dztcclxufVxyXG5pb24tY29sIHtcclxuICBtYXJnaW46IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5pb24taWNvbiB7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9012:
/*!************************************************************!*\
  !*** ./src/app/event-list/event-list.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n    <ion-searchbar placeholder=\"Suchen\">\r\n    </ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"favoriteListButton\">\r\n        <ion-icon slot=\"icon-only\" name=\"heart-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"filter-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-list lines=\"full\" class=\"ion-align-items-center\">\r\n      <ion-row class=\"ion-justify-content-center\" size=\"12\" *ngFor=\"let event of events; let i = index\">\r\n        <ion-item>\r\n          <ion-col size=\"4\">\r\n            <!-- get Photo through Photo Service by photoID or url -->\r\n            <div class=\"img-div\">\r\n              <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <!-- (click) on event name or photo to go to the detail page of the event -->\r\n            <div text-wrap>\r\n              <h1 button (click)=\"eventDetailsState(event.eventId)\">{{event.name}}</h1>\r\n              <p>{{event.eventDate | date: 'dd.MM.yyyy'}} um {{event.eventDate | date: 'H:mm'}}</p>\r\n              <p>{{event.address['street']}} {{event.address['house']}}, <br>\r\n                {{event.address['zipCode']}} {{event.address['city']}}\r\n              </p>\r\n              <p *ngIf=\"this.eventService.freeEvent(event)\"><strong>{{event.price}}€</strong></p>\r\n              <p *ngIf=\"!this.eventService.freeEvent(event)\"><strong>{{event.price}}</strong></p>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n            <ion-buttons>\r\n              <ion-button slot=\"end\" class=\"favorEventButton\">\r\n                <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"heart-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n            <ion-buttons>\r\n              <ion-button slot=\"end\" class=\"shareEventButton\" (click)=\"shareEvent()\">\r\n                <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"share-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-item>\r\n      </ion-row>\r\n    </ion-list>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"createEvent()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footermenu>\r\n\r\n</app-footermenu>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_event-list_event-list_module_ts.js.map