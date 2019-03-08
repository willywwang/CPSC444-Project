(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"background:#1474a4\">\n\t<div style=\"display:flex;align-items:center;transform:translateY(33%)\">\n\t\t<img style=\"margin-left:auto;margin-right:auto;\" src=\"../../assets/photos/orca.png\"/>\n\t</div>\n\n\t<ion-grid style=\"padding-top:25px;transform:translateY(75%)\">\n\t\t<ion-row>\n\t\t\t<ion-buttons style=\"margin-left:auto;margin-right:auto\">\n\t\t\t\t<ion-button class=\"action-button\" (click)=\"routeToPath('/signup')\">\n\t\t\t\t\tRegister\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-row>\n\t\t<ion-row style=\"padding-top:10px\">\n\t\t\t<ion-buttons style=\"margin-left:auto;margin-right:auto\">\n\t\t\t\t<ion-button class=\"action-button\" (click)=\"routeToPath('/login')\">\n\t\t\t\t\tLogin\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button {\n  background: #1474a4;\n  font-size: 16px;\n  text-transform: none;\n  min-height: initial;\n  height: 40px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-family: 'Open Sans', san-serif;\n  border-radius: 1.3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLmFjdGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICMxNDc0YTQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW4tbGVmdDphdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbi1zZXJpZjtcbiAgICBib3JkZXItcmFkaXVzOiAxLjNlbTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.routeToPath = function (route) {
        var routes = [];
        routes.push(route);
        this.router.navigate(routes);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map