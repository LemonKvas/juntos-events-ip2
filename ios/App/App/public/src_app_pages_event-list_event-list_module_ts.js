"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_event-list_event-list_module_ts"],{

/***/ 7607:
/*!***************************************************************!*\
  !*** ./src/app/pages/event-list/event-list-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPageRoutingModule": () => (/* binding */ EventListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_event_list_event_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/event-list/event-list.page */ 9258);




const routes = [
    {
        path: '',
        component: src_app_pages_event_list_event_list_page__WEBPACK_IMPORTED_MODULE_0__.EventListPage
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

/***/ 6208:
/*!*******************************************************!*\
  !*** ./src/app/pages/event-list/event-list.module.ts ***!
  \*******************************************************/
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
/* harmony import */ var src_app_pages_event_list_event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/event-list/event-list-routing.module */ 7607);
/* harmony import */ var src_app_pages_event_list_event_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/event-list/event-list.page */ 9258);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let EventListPageModule = class EventListPageModule {
};
EventListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_pages_event_list_event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventListPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [src_app_pages_event_list_event_list_page__WEBPACK_IMPORTED_MODULE_1__.EventListPage]
    })
], EventListPageModule);



/***/ }),

/***/ 9258:
/*!*****************************************************!*\
  !*** ./src/app/pages/event-list/event-list.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPage": () => (/* binding */ EventListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _event_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list.page.html?ngResource */ 8369);
/* harmony import */ var _event_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.page.scss?ngResource */ 1716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 9426);
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
            //await this.router.navigateByUrl(`event-details/${id}`);
        });
    }
};
EventListPage.ctorParameters = () => [
    { type: src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService },
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

/***/ 1716:
/*!******************************************************************!*\
  !*** ./src/app/pages/event-list/event-list.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  vertical-align: middle;\n}\n\nion-item {\n  border: 1px solid white;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 15px;\n    font-weight: bold;\n  }\n\n  p {\n    font-size: 10px;\n  }\n\n  ion-item {\n    width: 100%;\n    height: 40%;\n    padding: 0;\n    margin: 5px 5px 5px 0;\n  }\n\n  ion-searchbar {\n    border-radius: 15px;\n  }\n\n  ion-list {\n    margin: 10px;\n    justify-content: center;\n    vertical-align: middle;\n  }\n\n  ion-col {\n    height: 100%;\n    padding-top: 5px;\n    margin: 2px 2px 5px;\n    justify-content: left;\n    display: inline-block;\n  }\n\n  .img-col {\n    height: 80%;\n    margin-left: 0;\n    padding-left: 0;\n    vertical-align: center;\n  }\n\n  .img-div {\n    height: 120px;\n    width: 90%;\n    text-align: center;\n  }\n\n  .event-address {\n    position: absolute;\n    opacity: 0;\n  }\n\n  .buttons-col {\n    position: absolute;\n    opacity: 0;\n  }\n}\n\n@media screen and (min-width: 610px) {\n  ion-item {\n    width: 60%;\n    margin: 10px;\n    padding: 10px;\n  }\n\n  .img-div {\n    height: 220px;\n    width: 80%;\n    padding-bottom: 5px;\n  }\n\n  ion-col {\n    margin: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3QucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEludGVncmF0aW9uc3Byb2pla3QlMjAyXFxqdW50b3MtZXZlbnRzLWlwMlxcSnVudG9zXFxzcmNcXGFwcFxccGFnZXNcXGV2ZW50LWxpc3RcXGV2ZW50LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDQUY7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxlQUFBO0VDRUY7O0VEQUE7SUFDRSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxxQkFBQTtFQ0dGOztFRERBO0lBQ0UsbUJBQUE7RUNJRjs7RURGQTtJQUNFLFlBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0VDS0Y7O0VESEE7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EscUJBQUE7RUNNRjs7RURKQTtJQUNFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VDT0Y7O0VETEE7SUFDRSxhQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0VDUUY7O0VETkE7SUFDRSxrQkFBQTtJQUNBLFVBQUE7RUNTRjs7RURQQTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtFQ1VGO0FBQ0Y7O0FEUEE7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ1NGOztFRFBBO0lBQ0UsYUFBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtFQ1VGOztFRFJBO0lBQ0UsV0FBQTtFQ1dGO0FBQ0YiLCJmaWxlIjoiZXZlbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL0luIEdlbmVyYWxcclxuaW9uLWltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4vL01vYmlsZSBWZXJzaW9uXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMDtcclxuICB9XHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBpb24tbGlzdCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIGlvbi1jb2wge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbjogMnB4IDJweCA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5pbWctY29sIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuaW1nLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmV2ZW50LWFkZHJlc3Mge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLmJ1dHRvbnMtY29sIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcbi8vRGVza3RvcCBWZXJzaW9uXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYxMHB4KSB7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5pbWctZGl2IHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgaW9uLWNvbCB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCAwO1xuICB9XG5cbiAgaW9uLXNlYXJjaGJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbjogMnB4IDJweCA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5pbWctY29sIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbWctZGl2IHtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmV2ZW50LWFkZHJlc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmJ1dHRvbnMtY29sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjEwcHgpIHtcbiAgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuaW1nLWRpdiB7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuICBpb24tY29sIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 8369:
/*!******************************************************************!*\
  !*** ./src/app/pages/event-list/event-list.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title></ion-title>\r\n    <ion-searchbar placeholder=\"Suchen\">\r\n    </ion-searchbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button id=\"favoriteListButton\">\r\n        <ion-icon slot=\"icon-only\" size=\"small\" name=\"heart-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" size=\"small\" name=\"filter-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-list lines=\"full\" class=\"ion-align-items-center\">\r\n      <ion-row class=\"ion-justify-content-center\" size=\"12\">\r\n        <ion-item class=\"ion-justify-content-start\" *ngFor=\"let event of events\">\r\n          <ion-col class=\"img-col\" size=\"5\">\r\n            <!-- get Photo through Photo Service by photoID or url -->\r\n            <div class=\"img-div\">\r\n              <ion-img src=\"{{event.photoURLs[0] | fireStorageImg: '/event-photos' | async }}\"></ion-img>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"5\">\r\n            <!-- (click) on event name or photo to go to the detail page of the event -->\r\n            <div>\r\n              <h1 button (click)=\"eventDetailsState(event.eventId)\">{{event.name}}</h1>\r\n              <p>am {{event.eventDate | date: 'dd.MM.yyyy'}}</p>\r\n              <p>um {{event.eventDate | date: 'H:mm'}} Uhr</p>\r\n              <p class=\"event-address\">{{event.address['street']}} {{event.address['house']}}, <br>\r\n                {{event.address['zipCode']}} {{event.address['city']}}\r\n              </p>\r\n              <p *ngIf=\"this.eventService.freeEvent(event)\"><strong>{{event.price}}€</strong></p>\r\n              <p *ngIf=\"!this.eventService.freeEvent(event)\"><strong>{{event.price}}</strong></p>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col class=\"buttons-col\" size=\"2\">\r\n            <ion-buttons>\r\n              <ion-button slot=\"end\" class=\"favorEventButton\">\r\n                <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"heart-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n            <ion-buttons>\r\n              <ion-button slot=\"end\" class=\"shareEventButton\" (click)=\"shareEvent()\">\r\n                <ion-icon class=\"item-icon\" slot=\"icon-only\" name=\"share-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-col>\r\n        </ion-item>\r\n      </ion-row>\r\n    </ion-list>\r\n  </ion-grid>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"createEvent()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<app-footermenu>\r\n\r\n</app-footermenu>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_event-list_event-list_module_ts.js.map