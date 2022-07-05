"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_friendlist_friendlist_module_ts"],{

/***/ 8435:
/*!***************************************************************!*\
  !*** ./src/app/pages/friendlist/friendlist-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendlistPageRoutingModule": () => (/* binding */ FriendlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/friendlist/friendlist.page */ 9005);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);





const routes = [
    {
        path: '',
        component: src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_0__.FriendlistPage
    }
];
let FriendlistPageRoutingModule = class FriendlistPageRoutingModule {
};
FriendlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], FriendlistPageRoutingModule);



/***/ }),

/***/ 6147:
/*!*******************************************************!*\
  !*** ./src/app/pages/friendlist/friendlist.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FriendlistPageModule": () => (/* binding */ FriendlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_pages_friendlist_friendlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pages/friendlist/friendlist-routing.module */ 8435);
/* harmony import */ var src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/friendlist/friendlist.page */ 9005);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 4466);








let FriendlistPageModule = class FriendlistPageModule {
};
FriendlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_pages_friendlist_friendlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.FriendlistPageRoutingModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [src_app_pages_friendlist_friendlist_page__WEBPACK_IMPORTED_MODULE_1__.FriendlistPage]
    })
], FriendlistPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_friendlist_friendlist_module_ts.js.map