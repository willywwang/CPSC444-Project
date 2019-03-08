(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-item lines=\"none\">\n\t      <ion-avatar routerLink=\"{{route}}\">\n\t        <img src=\"{{img}}\">\n\t      </ion-avatar>\n\t\t\t<span style=\"padding-left:15px\">Messages</span>\n\t\t</ion-item>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-searchbar placeholder=\"Search Messenger\"></ion-searchbar>\n\t<ion-list>\n\t\t<ion-item style=\"padding-top: 5px\" *ngFor=\"let mentor of mentors\" (click)=\"openChat(mentor)\">\n\t\t\t<ion-avatar slot=\"start\" style=\"height:50px;width:50px;\">\n\t\t\t\t<img src=\"{{mentor.img}}\">\n\t\t\t</ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<div style=\"width:100%;display:inline-flex\">\n\t\t\t\t\t<div style=\"float:left;width:80%\">\n\t\t\t\t\t\t<h2>{{mentor.name}}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"float:right;text-align:right;width:20%\">\n\t\t\t\t\t\t<p>{{mentor.time}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p>{{mentor.message}}</p>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-native {\n  padding-left: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Msa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaXRlbS1uYXRpdmUge1xuXHRwYWRkaW5nLWxlZnQ6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var Tab3Page = /** @class */ (function () {
    function Tab3Page(router) {
        this.router = router;
        this.mentors = [];
        this.mentors = [
            {
                id: 17,
                name: 'Pierre Dot',
                time: '4:08 PM',
                message: 'Yes, let\'s meet at Starbucks at 2PM.',
                img: '../../assets/photos/pierre-dot.jpg'
            },
            {
                id: 18,
                name: 'Thomas Gaul',
                time: '3:59 PM',
                message: 'Hi Jeffrey, it\'s nice to meet you I\'m Thomas. How are you doing?',
                img: '../../assets/photos/thomas-gaul.jpg'
            },
            {
                id: 19,
                name: 'Elora Bang',
                time: 'Feb 9',
                message: 'You: I\'m currently a full time student so picking a time would be hard.',
                img: '../../assets/photos/elora-bang.jpg'
            },
            {
                id: 20,
                name: 'Greg Davidson',
                time: 'Jan 2',
                message: 'You: I\'m doing well and yourself?',
                img: '../../assets/photos/greg-davidson.jpg'
            },
            {
                id: 21,
                name: 'Bruce Willis',
                time: 'Dec 11',
                message: 'When you have time, let\'s arrange a time and date to meet.',
                img: '../../assets/photos/bruce-willis.jpg'
            }
        ];
        this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));
        this.route = '/profile/' + this.loggedInUser;
        this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
    }
    Tab3Page.prototype.openChat = function (mentor) {
        this.router.navigate(['/chat', mentor.id]);
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map