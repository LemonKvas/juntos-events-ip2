"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_edit-user_edit-user_module_ts"],{

/***/ 1729:
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageRoutingModule": () => (/* binding */ EditUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/edit-user/edit-user.page */ 1967);




const routes = [
    {
        path: '',
        component: src_app_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_0__.EditUserPage
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ 798:
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageModule": () => (/* binding */ EditUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_edit_user_edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/edit-user/edit-user-routing.module */ 1729);
/* harmony import */ var src_app_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/edit-user/edit-user.page */ 1967);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_pages_edit_user_edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditUserPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [src_app_pages_edit_user_edit_user_page__WEBPACK_IMPORTED_MODULE_1__.EditUserPage]
    })
], EditUserPageModule);



/***/ }),

/***/ 1967:
/*!***************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": () => (/* binding */ EditUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.page.html?ngResource */ 7062);
/* harmony import */ var _edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page.scss?ngResource */ 8573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-data.service */ 5944);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/photo.service */ 1957);








/**
 * Page for editing the user profile
 */
let EditUserPage = class EditUserPage {
    constructor(userDataService, alertService, router, photoService) {
        this.userDataService = userDataService;
        this.alertService = alertService;
        this.router = router;
        this.photoService = photoService;
        this.allLanguages = [
            { code: 'de', name: 'German' },
            { code: 'en', name: 'English' },
            { code: 'ab', name: 'Abkhazian' },
            { code: 'aa', name: 'Afar' },
            { code: 'af', name: 'Afrikaans' },
            { code: 'ak', name: 'Akan' },
            { code: 'sq', name: 'Albanian' },
            { code: 'am', name: 'Amharic' },
            { code: 'ar', name: 'Arabic' },
            { code: 'an', name: 'Aragonese' },
            { code: 'hy', name: 'Armenian' },
            { code: 'as', name: 'Assamese' },
            { code: 'av', name: 'Avaric' },
            { code: 'ae', name: 'Avestan' },
            { code: 'ay', name: 'Aymara' },
            { code: 'az', name: 'Azerbaijani' },
            { code: 'bm', name: 'Bambara' },
            { code: 'ba', name: 'Bashkir' },
            { code: 'eu', name: 'Basque' },
            { code: 'be', name: 'Belarusian' },
            { code: 'bn', name: 'Bengali' },
            { code: 'bh', name: 'Bihari languages' },
            { code: 'bi', name: 'Bislama' },
            { code: 'bs', name: 'Bosnian' },
            { code: 'br', name: 'Breton' },
            { code: 'bg', name: 'Bulgarian' },
            { code: 'my', name: 'Burmese' },
            { code: 'ca', name: 'Catalan, Valencian' },
            { code: 'km', name: 'Central Khmer' },
            { code: 'ch', name: 'Chamorro' },
            { code: 'ce', name: 'Chechen' },
            { code: 'ny', name: 'Chichewa, Chewa, Nyanja' },
            { code: 'zh', name: 'Chinese' },
            { code: 'cu', name: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
            { code: 'cv', name: 'Chuvash' },
            { code: 'kw', name: 'Cornish' },
            { code: 'co', name: 'Corsican' },
            { code: 'cr', name: 'Cree' },
            { code: 'hr', name: 'Croatian' },
            { code: 'cs', name: 'Czech' },
            { code: 'da', name: 'Danish' },
            { code: 'dv', name: 'Divehi, Dhivehi, Maldivian' },
            { code: 'nl', name: 'Dutch, Flemish' },
            { code: 'dz', name: 'Dzongkha' },
            { code: 'eo', name: 'Esperanto' },
            { code: 'et', name: 'Estonian' },
            { code: 'ee', name: 'Ewe' },
            { code: 'fo', name: 'Faroese' },
            { code: 'fj', name: 'Fijian' },
            { code: 'fi', name: 'Finnish' },
            { code: 'fr', name: 'French' },
            { code: 'ff', name: 'Fulah' },
            { code: 'gd', name: 'Gaelic, Scottish Gaelic' },
            { code: 'gl', name: 'Galician' },
            { code: 'lg', name: 'Ganda' },
            { code: 'ka', name: 'Georgian' },
            { code: 'ki', name: 'Gikuyu, Kikuyu' },
            { code: 'el', name: 'Greek (Modern)' },
            { code: 'kl', name: 'Greenlandic, Kalaallisut' },
            { code: 'gn', name: 'Guarani' },
            { code: 'gu', name: 'Gujarati' },
            { code: 'ht', name: 'Haitian, Haitian Creole' },
            { code: 'ha', name: 'Hausa' },
            { code: 'he', name: 'Hebrew' },
            { code: 'hz', name: 'Herero' },
            { code: 'hi', name: 'Hindi' },
            { code: 'ho', name: 'Hiri Motu' },
            { code: 'hu', name: 'Hungarian' },
            { code: 'is', name: 'Icelandic' },
            { code: 'io', name: 'Ido' },
            { code: 'ig', name: 'Igbo' },
            { code: 'id', name: 'Indonesian' },
            { code: 'ia', name: 'Interlingua (International Auxiliary Language Association)' },
            { code: 'ie', name: 'Interlingue' },
            { code: 'iu', name: 'Inuktitut' },
            { code: 'ik', name: 'Inupiaq' },
            { code: 'ga', name: 'Irish' },
            { code: 'it', name: 'Italian' },
            { code: 'ja', name: 'Japanese' },
            { code: 'jv', name: 'Javanese' },
            { code: 'kn', name: 'Kannada' },
            { code: 'kr', name: 'Kanuri' },
            { code: 'ks', name: 'Kashmiri' },
            { code: 'kk', name: 'Kazakh' },
            { code: 'rw', name: 'Kinyarwanda' },
            { code: 'kv', name: 'Komi' },
            { code: 'kg', name: 'Kongo' },
            { code: 'ko', name: 'Korean' },
            { code: 'kj', name: 'Kwanyama, Kuanyama' },
            { code: 'ku', name: 'Kurdish' },
            { code: 'ky', name: 'Kyrgyz' },
            { code: 'lo', name: 'Lao' },
            { code: 'la', name: 'Latin' },
            { code: 'lv', name: 'Latvian' },
            { code: 'lb', name: 'Letzeburgesch, Luxembourgish' },
            { code: 'li', name: 'Limburgish, Limburgan, Limburger' },
            { code: 'ln', name: 'Lingala' },
            { code: 'lt', name: 'Lithuanian' },
            { code: 'lu', name: 'Luba-Katanga' },
            { code: 'mk', name: 'Macedonian' },
            { code: 'mg', name: 'Malagasy' },
            { code: 'ms', name: 'Malay' },
            { code: 'ml', name: 'Malayalam' },
            { code: 'mt', name: 'Maltese' },
            { code: 'gv', name: 'Manx' },
            { code: 'mi', name: 'Maori' },
            { code: 'mr', name: 'Marathi' },
            { code: 'mh', name: 'Marshallese' },
            { code: 'ro', name: 'Moldovan, Moldavian, Romanian' },
            { code: 'mn', name: 'Mongolian' },
            { code: 'na', name: 'Nauru' },
            { code: 'nv', name: 'Navajo, Navaho' },
            { code: 'nd', name: 'Northern Ndebele' },
            { code: 'ng', name: 'Ndonga' },
            { code: 'ne', name: 'Nepali' },
            { code: 'se', name: 'Northern Sami' },
            { code: 'no', name: 'Norwegian' },
            { code: 'nb', name: 'Norwegian Bokmål' },
            { code: 'nn', name: 'Norwegian Nynorsk' },
            { code: 'ii', name: 'Nuosu, Sichuan Yi' },
            { code: 'oc', name: 'Occitan (post 1500)' },
            { code: 'oj', name: 'Ojibwa' },
            { code: 'or', name: 'Oriya' },
            { code: 'om', name: 'Oromo' },
            { code: 'os', name: 'Ossetian, Ossetic' },
            { code: 'pi', name: 'Pali' },
            { code: 'pa', name: 'Panjabi, Punjabi' },
            { code: 'ps', name: 'Pashto, Pushto' },
            { code: 'fa', name: 'Persian' },
            { code: 'pl', name: 'Polish' },
            { code: 'pt', name: 'Portuguese' },
            { code: 'qu', name: 'Quechua' },
            { code: 'rm', name: 'Romansh' },
            { code: 'rn', name: 'Rundi' },
            { code: 'ru', name: 'Russian' },
            { code: 'sm', name: 'Samoan' },
            { code: 'sg', name: 'Sango' },
            { code: 'sa', name: 'Sanskrit' },
            { code: 'sc', name: 'Sardinian' },
            { code: 'sr', name: 'Serbian' },
            { code: 'sn', name: 'Shona' },
            { code: 'sd', name: 'Sindhi' },
            { code: 'si', name: 'Sinhala, Sinhalese' },
            { code: 'sk', name: 'Slovak' },
            { code: 'sl', name: 'Slovenian' },
            { code: 'so', name: 'Somali' },
            { code: 'st', name: 'Sotho, Southern' },
            { code: 'nr', name: 'South Ndebele' },
            { code: 'es', name: 'Spanish, Castilian' },
            { code: 'su', name: 'Sundanese' },
            { code: 'sw', name: 'Swahili' },
            { code: 'ss', name: 'Swati' },
            { code: 'sv', name: 'Swedish' },
            { code: 'tl', name: 'Tagalog' },
            { code: 'ty', name: 'Tahitian' },
            { code: 'tg', name: 'Tajik' },
            { code: 'ta', name: 'Tamil' },
            { code: 'tt', name: 'Tatar' },
            { code: 'te', name: 'Telugu' },
            { code: 'th', name: 'Thai' },
            { code: 'bo', name: 'Tibetan' },
            { code: 'ti', name: 'Tigrinya' },
            { code: 'to', name: 'Tonga (Tonga Islands)' },
            { code: 'ts', name: 'Tsonga' },
            { code: 'tn', name: 'Tswana' },
            { code: 'tr', name: 'Turkish' },
            { code: 'tk', name: 'Turkmen' },
            { code: 'tw', name: 'Twi' },
            { code: 'ug', name: 'Uighur, Uyghur' },
            { code: 'uk', name: 'Ukrainian' },
            { code: 'ur', name: 'Urdu' },
            { code: 'uz', name: 'Uzbek' },
            { code: 've', name: 'Venda' },
            { code: 'vi', name: 'Vietnamese' },
            { code: 'vo', name: 'Volap_k' },
            { code: 'wa', name: 'Walloon' },
            { code: 'cy', name: 'Welsh' },
            { code: 'fy', name: 'Western Frisian' },
            { code: 'wo', name: 'Wolof' },
            { code: 'xh', name: 'Xhosa' },
            { code: 'yi', name: 'Yiddish' },
            { code: 'yo', name: 'Yoruba' },
            { code: 'za', name: 'Zhuang, Chuang' },
            { code: 'zu', name: 'Zulu' }
        ];
        this.uploadStatus = false;
        this.photoUploads = [];
        this.userData = this.userDataService.getCurrentUser();
        this.userData = this.userData.__zone_symbol__value;
        this.allLanguages;
        if (this.userData.id) {
            this.firstName = this.userData.firstName;
        }
        else {
            this.firstName = '';
        }
        if (this.userData.firstName) {
            this.firstName = this.userData.firstName;
        }
        else {
            this.firstName = '';
        }
        if (this.userData.lastName) {
            this.lastName = this.userData.lastName;
        }
        else {
            this.lastName = '';
        }
        if (this.userData.userName) {
            this.userName = this.userData.userName;
        }
        else {
            this.userName = '';
        }
        if (this.userData.languages) {
            this.languages = this.userData.languages;
        }
        else {
            this.languages = '';
        }
        if (this.userData.description) {
            this.description = this.userData.description;
        }
        else {
            this.description = '';
        }
        if (this.userData.photoUrl) {
            this.displayUrl = this.userData.photoUrl;
        }
        else {
            this.displayUrl = "https://cdn.picpng.com/head/head-the-dummy-avatar-man-tie-72756.png";
        }
        this.oldPhotoUrl = this.displayUrl;
    }
    ngOnInit() {
        this.getUserId();
        //TODO: maybe get userdata from firestore and subscribe
        //this.db.doc(`user/${id}`).valueChanges().subscribe(user => this.user = user);
    }
    getUserId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.userId = yield this.userDataService.getCurrentUserID();
        });
    }
    /**
     * Let the user upload an avatar, and updates the avatar
     * @param event
     */
    uploadAvatar(event) {
        if (this.oldPhotoUrl != this.displayUrl) {
            this.beforeUrl = this.displayUrl;
        }
        this.uploadStatus = true;
        this.photoService.storePhoto(event.target.files[0], 'avatars/').then((res) => {
            if (res) {
                this.uploadStatus = false;
                this.photoUploads.unshift(res);
                this.displayUrl = this.photoService.photoID;
                if (this.beforeUrl) {
                    this.deleteAvatar(this.beforeUrl);
                }
            }
        }, (error) => {
            this.uploadStatus = false;
            console.log(error);
            this.alertService.basicAlert('Fehler aufgetreten', 'Bitte versuchen Sie es erneut', ['OK']);
        });
    }
    /**
     * Deletes the photo in firestore storage with the given url
     * @param {string} url
     */
    deleteAvatar(url) {
        this.photoService.deletePhoto(url, 'avatars/');
    }
    /**
     * Closes the editing page without saving the changes and deletes uploaded photos which are not used
     */
    close() {
        if (this.userData.userName.length === 0) {
            this.alertService.basicAlert('Sie müssen einen Benutzernamen angeben', 'Bitte setzen sie einen Benutzernamen', ['OK']);
            return;
        }
        // delete photo which is not in use
        if (this.oldPhotoUrl != this.displayUrl) {
            const tmp = this.displayUrl;
            this.displayUrl = this.oldPhotoUrl;
            this.deleteAvatar(tmp);
        }
        this.router.navigate(['profile', this.userId]);
    }
    /**
     * Updates the user data in firestore
     */
    updateUser() {
        if (this.userName.length === 0) {
            this.alertService.basicAlert('Sie müssen einen Benutzernamen angeben', 'Bitte setzen sie einen Benutzernamen', ['OK']);
            return;
        }
        if (this.oldPhotoUrl != this.displayUrl) {
            this.deleteAvatar(this.oldPhotoUrl);
        }
        let data = {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'userName': this.userName,
            'languages': this.languages,
            'description': this.description,
            'photoUrl': this.displayUrl,
        };
        this.router.navigate(['profile', this.userId]);
        this.userDataService.updateCurrentUser(data);
    }
};
EditUserPage.ctorParameters = () => [
    { type: src_app_services_user_data_service__WEBPACK_IMPORTED_MODULE_2__.UserDataService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService }
];
EditUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-user',
        template: _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditUserPage);



/***/ }),

/***/ 8573:
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "#photoInput {\n  position: absolute;\n  opacity: 0;\n}\n\n.myFakeUploadButton {\n  color: #FF8766;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdXNlci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcSW50ZWdyYXRpb25zcHJvamVrdCUyMDJcXGp1bnRvcy1ldmVudHMtaXAyXFxKdW50b3NcXHNyY1xcYXBwXFxwYWdlc1xcZWRpdC11c2VyXFxlZGl0LXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoiZWRpdC11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaG90b0lucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3BhY2l0eTogMDtcclxuXHJcbn1cclxuXHJcbi5teUZha2VVcGxvYWRCdXR0b24ge1xyXG4gIGNvbG9yOiAjRkY4NzY2O1xyXG59XHJcbiIsIiNwaG90b0lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubXlGYWtlVXBsb2FkQnV0dG9uIHtcbiAgY29sb3I6ICNGRjg3NjY7XG59Il19 */";

/***/ }),

/***/ 7062:
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-user/edit-user.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Profil bearbeiten</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"updateUser()\">\r\n        <ion-icon size=\"large\" style=\"zoom:0.8\" name=\"create-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center ion-align-items-center\">\r\n      <ion-col size=\"auto\">\r\n        <ion-avatar>\r\n          <img *ngIf=\"displayUrl.includes('.png') || displayUrl.includes('googleusercontent'); else noNeed\" alt=\"User avatar\" src=\"{{displayUrl}}\">\r\n          <ng-template #noNeed>\r\n            <img alt=\"User avatar\" src=\"{{displayUrl | fireStorageImg: '/avatars' | async}}\">\r\n          </ng-template>\r\n        </ion-avatar>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col class=\"fileUpload\" size=\"auto\">\r\n        <ion-input id=\"photoInput\"  type=\"file\" (change)=\"uploadAvatar($event)\" accept=\".png,.jpg\" multiple=\"false\"></ion-input>\r\n        <label class=\"myFakeUploadButton\" for=\"photoInput\">Profilbild ändern</label>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Vorname</ion-label>\r\n          <ion-input [(ngModel)]=\"firstName\">\r\n          </ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Nachname</ion-label>\r\n          <ion-input [(ngModel)]=\"lastName\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Benutzername</ion-label>\r\n          <ion-input [(ngModel)]=\"userName\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Sprachen*</ion-label>\r\n          <ion-select [(ngModel)]=\"languages\" multiple=\"true\">\r\n            <ion-select-option *ngFor=\"let allLanguage of allLanguages; let i = index\">{{allLanguage.name}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Beschreibung</ion-label>\r\n          <ion-textarea [(ngModel)]=\"description\"\r\n          ></ion-textarea>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_edit-user_edit-user_module_ts.js.map