"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5753:
/*!************************************************************!*\
  !*** ./src/app/login/login-child/login-child.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginChildComponent": () => (/* binding */ LoginChildComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_child_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-child.component.html?ngResource */ 3599);
/* harmony import */ var _login_child_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-child.component.scss?ngResource */ 7922);
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

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
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

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
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
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var src_app_login_login_child_login_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/login/login-child/login-child.component */ 5753);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, src_app_login_login_child_login_child_component__WEBPACK_IMPORTED_MODULE_2__.LoginChildComponent]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);





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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7922:
/*!*************************************************************************!*\
  !*** ./src/app/login/login-child/login-child.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-button, p {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-input {\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-input::placeholder {\n  font-family: Agrandir-Thin, serif !important;\n}\n\nion-item {\n  --border-color: grey;\n  --highlight-color-invalid: red;\n  --highlight-color-valid: #FF8766;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNoaWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLCtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLWNoaWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiwgcHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1SZWd1bGFyLCBzZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItVGhpbiwgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYm9yZGVyLWNvbG9yOiBncmV5OyAvLyBkZWZhdWx0IHVuZGVybGluZSBjb2xvclxyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6IHJlZDsgLy8gaW52YWxpZCB1bmRlcmxpbmUgY29sb3JcclxuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogICNGRjg3NjY7IC8vIHZhbGlkIHVuZGVybGluZSBjb2xvclxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".loginDiv {\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n  border: 2px solid #FF8766;\n  border-radius: 5px;\n}\n\n.JuntosWrtingCol {\n  height: 2.5em !important;\n  text-align: center;\n}\n\n.JuntosWritng {\n  margin-top: -0.6rem;\n  font-family: Twister, cursive !important;\n  font-size: 2em;\n  align-self: center;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-label {\n  font-family: Agrandir-Regular, serif !important;\n}\n\nion-segment-button {\n  text-transform: none !important;\n  letter-spacing: normal !important;\n  font-family: Agrandir-Regular, serif !important;\n  --background: var(--ion-color-secondary) !important;\n  --background-checked: var(--ion-color-success-contrast);\n  --color-checked: var(black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBR0E7RUFDRSwrQ0FBQTtBQUFGOztBQUlBO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSx1REFBQTtFQUNBLDJCQUFBO0FBREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luRGl2e1xyXG4gIHdpZHRoOiA5OCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGODc2NjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5KdW50b3NXcnRpbmdDb2x7XHJcbiAgaGVpZ2h0OiAyLjVlbSAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uSnVudG9zV3JpdG5ne1xyXG4gIG1hcmdpbi10b3A6IC0wLjZyZW07XHJcbiAgZm9udC1mYW1pbHk6IFR3aXN0ZXIsIGN1cnNpdmUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBBZ3JhbmRpci1SZWd1bGFyLCBzZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWwgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogQWdyYW5kaXItUmVndWxhciwgc2VyaWYgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0KTtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcihibGFjayk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3599:
/*!*************************************************************************!*\
  !*** ./src/app/login/login-child/login-child.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"11\">\r\n      <ion-item>\r\n        <ion-input type=\"text\" placeholder=\"E-Mail\" [(ngModel)]=\"email\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"11\">\r\n      <ion-item>\r\n        <ion-input type=\"password\" placeholder=\"Passwort\" [(ngModel)]=\"password\"></ion-input>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-evenly\">\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" (click)=\"EmailRegister()\">Registrieren</ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <ion-button expand=\"block\" (click)=\"EmailLogin()\">Anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\" style=\"height: 3rem;margin-top: -0.3rem;\">\r\n    <ion-col size=\"auto\">\r\n      <p>ODER</p>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"12\">\r\n      <ion-button *ngIf=\"deviceIndicator === 0; else googleMobile\" expand=\"block\" (click)=\"GoogleLogin()\">Mit Google anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-justify-content-center\">\r\n    <ion-col size=\"12\">\r\n      <ion-button *ngIf=\"deviceIndicator === 0; else facebookMobile\" expand=\"block\" (click)=\"FacebookLogin()\">Mit Facebook anmelden</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!--TODO: Apple Login Button je nach Platoform-->\r\n</ion-grid>\r\n\r\n<ng-template #googleMobile>\r\n  <ion-button expand=\"block\" (click)=\"GoogleMobileLogin()\">Mit Google anmelden</ion-button>\r\n</ng-template>\r\n\r\n<ng-template #facebookMobile></ng-template>\r\n";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <ion-col size=\"5\" style=\"background-color:yellow;overflow:hidden;margin-top: 4vh;\">\r\n          <p>icon placeholder</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"JuntosWrtingCol\" size=\"6\">\r\n        <p class=\"JuntosWritng\">Juntos</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"loginDiv\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\">\r\n            <ion-segment (ionChange)=\"switchUserLogin($event)\" value=\"user\">\r\n              <ion-segment-button value=\"user\">\r\n                <ion-label>NutzerIn</ion-label>\r\n              </ion-segment-button>\r\n              <ion-segment-button value=\"organizer\">\r\n                <ion-label>VeranstalterIn</ion-label>\r\n              </ion-segment-button>\r\n            </ion-segment>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\"  [ngSwitch]=\"loginIndicator\">\r\n            <app-login-child *ngSwitchCase=\"'user'\" [userType]=\"2\"></app-login-child>\r\n            <app-login-child *ngSwitchCase=\"'organizer'\" [userType]=\"1\"></app-login-child>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-justify-content-center\" style=\"text-align: center\">\r\n        <ion-col size=\"12\">\r\n          <p (click)=\"AnonymousLogin()\">Anonym einloggen</p>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map