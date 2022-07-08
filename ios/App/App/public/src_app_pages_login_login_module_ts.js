"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 244:
/*!*****************************************************************!*\
  !*** ./src/app/components/login-child/login-child.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginChildComponent": () => (/* binding */ LoginChildComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_child_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-child.component.html?ngResource */ 1045);
/* harmony import */ var _login_child_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-child.component.scss?ngResource */ 25);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 5414);







let LoginChildComponent = class LoginChildComponent {
    constructor(authService, platform) {
        this.authService = authService;
        this.platform = platform;
        if (!this.platform.is('capacitor')) {
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.initialize();
        }
    }
    ngOnInit() {
        if (this.platform.is('mobile') || this.platform.is('ios') || this.platform.is('android')) {
            this.deviceIndicator = 1;
        }
        else {
            this.deviceIndicator = 0;
        }
    }
    EmailLogin() {
        if (this.authService.checkEmailAndPasswort(this.email, this.password)) {
            this.authService.EmailLogin(this.email, this.password);
        }
    }
    EmailRegister() {
        if (this.authService.checkEmailAndPasswort(this.email, this.password)) {
            this.authService.EmailRegister(this.userType, this.email, this.password);
        }
    }
    GoogleMobileLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.authService.GoogleMobileAuth(this.userType);
        });
    }
    GoogleLogin() {
        this.authService.GoogleAuth(this.userType);
    }
    FacebookLogin() {
        this.authService.FacebookAuth(this.userType);
    }
};
LoginChildComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform }
];
LoginChildComponent.propDecorators = {
    userType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
LoginChildComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-child',
        template: _login_child_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_child_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginChildComponent);



/***/ }),

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/login/login.page */ 6552);




const routes = [
    {
        path: '',
        component: src_app_pages_login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_login_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/login/login-routing.module */ 3403);
/* harmony import */ var src_app_pages_login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/login/login.page */ 6552);
/* harmony import */ var src_app_components_login_child_login_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/login-child/login-child.component */ 244);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_pages_login_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [src_app_pages_login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, src_app_components_login_child_login_child_component__WEBPACK_IMPORTED_MODULE_2__.LoginChildComponent]
    })
], LoginPageModule);



/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);





let LoginPage = class LoginPage {
    constructor(authService) {
        this.authService = authService;
        this.loginIndicator = 'user';
    }
    ngOnInit() {
    }
    switchUserLogin(event) {
        this.loginIndicator = event.detail.value;
    }
    AnonymousLogin() {
        this.authService.AnonymousAuth();
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 25:
/*!******************************************************************************!*\
  !*** ./src/app/components/login-child/login-child.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "ion-button, p {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-input {\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-input::placeholder {\n  font-family: Agrandir-Thin, serif !important;\n}\n\nion-item {\n  --border-color: grey;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: #FF8766;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNoaWxkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEludGVncmF0aW9uc3Byb2pla3QlMjAyXFxqdW50b3MtZXZlbnRzLWlwMlxcSnVudG9zXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW4tY2hpbGRcXGxvZ2luLWNoaWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLCtDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNENBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQ0NGIiwiZmlsZSI6ImxvZ2luLWNoaWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiwgcHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1SZWd1bGFyLCBzZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItVGhpbiwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiBncmV5OyAvLyBkZWZhdWx0IHVuZGVybGluZSBjb2xvclxyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDsgLy8gaW52YWxpZCB1bmRlcmxpbmUgY29sb3JcclxuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogICNGRjg3NjY7IC8vIHZhbGlkIHVuZGVybGluZSBjb2xvclxyXG59XHJcbiIsImlvbi1idXR0b24sIHAge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1SZWd1bGFyLCBzZXJpZiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1UaGluLCBzZXJpZiAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiBncmV5O1xuICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiByZWQ7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjRkY4NzY2O1xufSJdfQ== */";

/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".loginDiv {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n  border: 2px solid #FF8766;\n  border-radius: 5px;\n}\n\n.JuntosWrtingCol {\n  height: 2.5em !important;\n  text-align: center;\n}\n\n.JuntosWritng {\n  margin-top: -0.6rem;\n  font-family: Twister, cursive !important;\n  font-size: 2em;\n  align-self: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-label {\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-segment-button {\n  --indicator-box-shadow: transparent!important;\n  --background:white;\n  --color: var( --ion-color-secondary);\n  --background-checked: var(--ion-color-primary)!important;\n  --color-checked: black;\n  --indicator-color: transparent!important;\n  font-family: Agrandir-Regular, serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxJbnRlZ3JhdGlvbnNwcm9qZWt0JTIwMlxcanVudG9zLWV2ZW50cy1pcDJcXEp1bnRvc1xcc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURHQTtFQUNFLCtDQUFBO0FDQUY7O0FESUE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQ0FBQTtBQ0RGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbkRpdntcclxuICB3aWR0aDogOTglO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBtYXJnaW4tcmlnaHQ6IDElO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRjg3NjY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uSnVudG9zV3J0aW5nQ29se1xyXG4gIGhlaWdodDogMi41ZW0gIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLkp1bnRvc1dyaXRuZ3tcclxuICBtYXJnaW4tdG9wOiAtMC42cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBUd2lzdGVyLCBjdXJzaXZlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDp3aGl0ZTtcclxuICAtLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSFpbXBvcnRhbnQ7XHJcbiAgLS1jb2xvci1jaGVja2VkOiBibGFjaztcclxuICAtLWluZGljYXRvci1jb2xvciA6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG4iLCIubG9naW5EaXYge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRjg3NjY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLkp1bnRvc1dydGluZ0NvbCB7XG4gIGhlaWdodDogMi41ZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uSnVudG9zV3JpdG5nIHtcbiAgbWFyZ2luLXRvcDogLTAuNnJlbTtcbiAgZm9udC1mYW1pbHk6IFR3aXN0ZXIsIGN1cnNpdmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IEFncmFuZGlyLVJlZ3VsYXIsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0taW5kaWNhdG9yLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOndoaXRlO1xuICAtLWNvbG9yOiB2YXIoIC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkhaW1wb3J0YW50O1xuICAtLWNvbG9yLWNoZWNrZWQ6IGJsYWNrO1xuICAtLWluZGljYXRvci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 1045:
/*!******************************************************************************!*\
  !*** ./src/app/components/login-child/login-child.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"11\">\r\n      <ion-item>\r\n        <ion-input type=\"text\" placeholder=\"E-Mail\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"11\">\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Passwort\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-evenly\">\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" (click)=\"EmailRegister()\">Registrieren</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" (click)=\"EmailLogin()\">Anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"height: 3rem;margin-top: -0.3rem;\">\r\n    <ion-col size=\"auto\">\r\n      <p>ODER</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"12\">\r\n      <ion-button *ngIf=\"deviceIndicator === 0; else googleMobile\" expand=\"block\" (click)=\"GoogleLogin()\">Mit Google anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"12\">\r\n      <ion-button disabled=\"true\" *ngIf=\"deviceIndicator === 0; else facebookMobile\" expand=\"block\" (click)=\"FacebookLogin()\">Mit Facebook anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!--TODO: Apple Login Button je nach Platoform-->\r\n</ion-grid>\r\n\r\n<ng-template #googleMobile>\r\n  <ion-button expand=\"block\" (click)=\"GoogleMobileLogin()\">Mit Google anmelden</ion-button>\r\n</ng-template>\r\n\r\n<ng-template #facebookMobile></ng-template>\r\n";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <ion-col size=\"5\" style=\"overflow:hidden;margin-top: 4vh;\">\r\n<!--          <p>icon placeholder</p>-->\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"JuntosWrtingCol\" size=\"6\">\r\n        <p class=\"JuntosWritng\">Juntos</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"loginDiv\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\">\r\n            <ion-segment (ionChange)=\"switchUserLogin($event)\" value=\"user\">\r\n              <ion-segment-button value=\"user\">\r\n                <ion-label>NutzerIn</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"organizer\">\r\n                <ion-label>VeranstalterIn</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\"  [ngSwitch]=\"loginIndicator\">\r\n            <app-login-child *ngSwitchCase=\"'user'\" [userType]=\"2\"></app-login-child>\r\n            <app-login-child *ngSwitchCase=\"'organizer'\" [userType]=\"1\"></app-login-child>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"text-align: center\">\r\n        <ion-col size=\"12\">\r\n          <p (click)=\"AnonymousLogin()\">Anonym einloggen</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map