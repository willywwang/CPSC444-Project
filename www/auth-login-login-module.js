(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n    \tLogin\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n\t<div style=\"display:flex;align-items:center;transform:translateY(33%)\">\n\t\t<img style=\"margin-left:auto;margin-right:auto;\" src=\"../../../assets/photos/orca.png\"/>\n\t</div>\n\t<ion-grid style=\"transform:translateY(75%)\">\n\t\t<ion-row style=\"padding-bottom:7px\" *ngIf=\"loginError\">\n\t\t\t<div style=\"text-align:center;width:100%\">\n\t\t\t\t<span>Your password or username is incorrect</span>\n\t\t\t</div>\n\t\t</ion-row>\n\t\t<ion-row>\n\t\t\t<div style=\"width:67%;margin-left:auto;margin-right:auto\">\n\t\t\t\t<ion-input class=\"form-input\" [(ngModel)]=\"username\" placeholder=\"Username\"></ion-input>\n\t\t\t</div>\n\t\t</ion-row>\n\t\t<ion-row style=\"padding-top:10px\">\n\t\t\t<div style=\"width:67%;margin-left:auto;margin-right:auto\">\n\t\t\t\t<ion-input class=\"form-input\" [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\"></ion-input>\n\t\t\t</div>\n\t\t</ion-row>\t\n\t\t<ion-row style=\"padding-top:15px\">\n\t\t\t<ion-buttons style=\"margin-left:auto;margin-right:auto\">\n\t\t\t\t<ion-button class=\"action-button\" (click)=\"login()\">\n\t\t\t\t\tLogin\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n  background-color: #1474a4 !important; }\n\n.form-input {\n  background: white;\n  color: black;\n  border-radius: 1.3em; }\n\nion-input {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --border-radius: 1.3em; }\n\n.action-button {\n  background: #1474a4;\n  font-size: 16px;\n  text-transform: none;\n  min-height: initial;\n  height: 40px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-family: 'Open Sans', san-serif;\n  border-radius: 1.3em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msb0NBQW9DLEVBQUE7O0FBR3JDO0VBQ0MsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBb0IsRUFBQTs7QUFHckI7RUFDQyxxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxzQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1DQUFtQztFQUNuQyxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNDc0YTQgIWltcG9ydGFudDtcbn1cblxuLmZvcm0taW5wdXQge1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Y29sb3I6IGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiAxLjNlbTtcbn1cblxuaW9uLWlucHV0IHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuXHQtLXBhZGRpbmctZW5kOiAxNXB4O1xuXHQtLWJvcmRlci1yYWRpdXM6IDEuM2VtO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6ICMxNDc0YTQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5cdGhlaWdodDogNDBweDtcblx0cGFkZGluZy10b3A6IDEycHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMnB4O1xuXHR3aWR0aDogMTUwcHg7XG5cdG1hcmdpbi1sZWZ0OmF1dG87XG5cdG1hcmdpbi1yaWdodDphdXRvO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2FuLXNlcmlmO1xuXHRib3JkZXItcmFkaXVzOiAxLjNlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.loginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        this.loginError = false;
        var unparsedUser = localStorage.getItem('user');
        var user = {
            username: '',
            password: ''
        };
        var that = this;
        if (unparsedUser) {
            user = JSON.parse(unparsedUser);
        }
        if (this.username == 'testuser') {
            sessionStorage.setItem('loggedInId', '1');
            setTimeout(function () {
                that.router.navigate(['/tabs']);
            }, 500);
            return;
        }
        else if (this.username == user.username && this.password == user.password) {
            sessionStorage.setItem('loggedInId', '99');
            setTimeout(function () {
                that.router.navigate(['/tabs']);
            }, 500);
            return;
        }
        this.loginError = true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }])
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module.js.map