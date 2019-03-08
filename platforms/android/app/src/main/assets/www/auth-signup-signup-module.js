(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-signup-module"],{

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaultHref=\"\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\tRegister\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row style=\"height:90px;padding-top:5px\">\n\t\t\t<ion-avatar style=\"width:90px;height:95px;margin-left:auto;margin-right:auto;\">\n\t\t\t\t<img style=\"border-radius:50%;width:90px!important;height:90px!important;max-width:none!important\" src=\"{{profile.img}}\"/>\n\t\t\t</ion-avatar>\n\t\t</ion-row>\n\t\t<div style=\"text-align:center;padding-top:20px\">\n\t\t\t<span style=\"color:#1474a4;font-weight:600\">Edit Photo</span>\n\t\t</div>\n\t\t<ion-row style=\"padding-top:10px;width:80%;margin-left:auto;margin-right:auto\">\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"profile.username\" placeholder=\"Username\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"profile.password\" placeholder=\"Password\" type=\"password\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">General Information</span>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%;\">\n\t\t\t\t<ion-input [(ngModel)]=\"profile.name\" placeholder=\"Full Name\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"profile.job\" placeholder=\"Current Occupation\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"profile.education\" placeholder=\"Education\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-textarea [(ngModel)]=\"profile.bio\" style=\"height:100px\" placeholder=\"Bio\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Work Experience</span>\n\t\t\t<ion-list style=\"margin:0;width:100%\">\n\t\t\t\t<ion-item style=\"padding-top: 5px;width: 100%;margin:0 auto\" *ngFor=\"let job of profile.jobs\">\n\t\t\t\t\t<ion-avatar slot=\"start\" style=\"height:50px;width:50px;\">\n\t\t\t\t\t\t<img src=\"{{job.img}}\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label style=\"line-height:1.1\">\n\t\t\t\t\t\t<span style=\"font-size:0.9em;font-weight:550\">{{job.title}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em;\">{{job.company}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em\">{{job.dates}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeJob(job)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"job.title\" placeholder=\"Job Title\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"job.company\" placeholder=\"Company\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"job.start\" display-format=\"MMM DD, YYYY\" placeholder=\"Start Date\"></ion-datetime>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"job.end\" display-format=\"MMM DD, YYYY\" placeholder=\"End Date\"></ion-datetime>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<ion-buttons style=\"margin-left:auto;margin-right:auto;padding-top:10px\">\n\t\t\t\t\t<ion-button class=\"action-button\" (click)=\"addJob()\">\n\t\t\t\t\t\tAdd Work Experience\n\t\t\t\t\t\t<ion-icon name=\"add-circle-outline\" size=\"large\" slot=\"start\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-list>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Skills</span>\n\t\t\t<ion-list style=\"width:100%;margin:0;\">\n\t\t\t\t<ion-item *ngFor=\"let skill of profile.skills\" lines=\"full\" style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<span>{{skill}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeSkill(skill)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t\t<ion-input [(ngModel)]=\"skill\" placeholder=\"New Skill\" (keyup.enter)=\"addSkill()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Interests</span>\n\t\t\t<ion-list style=\"width:100%;margin:0;\">\n\t\t\t\t<ion-item *ngFor=\"let interest of profile.interests\" lines=\"full\" style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<span>{{interest}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeInterest(interest)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t\t<ion-input [(ngModel)]=\"interest\" placeholder=\"New Interest\" (keyup.enter)=\"addInterest()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-buttons>\n\t\t\t<ion-button expand=\"block\" fill=\"solid\" size=\"default\" color=\"#0077B5\" style=\"margin-left:auto;width:50%;background-color:#0077B5!important;border-radius:0.25rem\">\n\t\t\t\t<ion-icon name=\"logo-linkedin\"></ion-icon>\n\t\t\t\t&nbsp;Connect&nbsp;\n\t\t\t</ion-button>\n\t\t\t<ion-button expand=\"block\" fill=\"solid\" size=\"default\" color=\"#459758\" style=\"margin-right:auto;width:50%;background-color:#459758!important;border-radius:0.25rem\" (click)=\"save()\">\n\t\t\t\t<ion-icon name=\"save\"></ion-icon>&nbsp;&nbsp;Save&nbsp;&nbsp;\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".signup-page {\n  background-color: #1474a4 !important; }\n\nion-input {\n  --padding-start: 0px; }\n\nion-item {\n  --padding-start: 0px; }\n\nion-datetime {\n  --padding-start: 0px; }\n\n.action-button {\n  background: #1474a4;\n  font-size: 16px;\n  text-transform: none;\n  min-height: initial;\n  height: 40px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-family: 'Open Sans', san-serif;\n  border-radius: 1.3em;\n  padding-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQ0FBb0MsRUFBQTs7QUFHckM7RUFDQyxvQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxvQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxvQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLG9CQUFvQjtFQUNwQixrQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtcGFnZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNDc0YTQgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6ICMxNDc0YTQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5cdGhlaWdodDogNDBweDtcblx0cGFkZGluZy10b3A6IDEycHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMnB4O1xuXHRtYXJnaW4tbGVmdDphdXRvO1xuXHRtYXJnaW4tcmlnaHQ6YXV0bztcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbi1zZXJpZjtcblx0Ym9yZGVyLXJhZGl1czogMS4zZW07XG5cdHBhZGRpbmctcmlnaHQ6NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.profile = {
            id: 99,
            img: '../../../assets/photos/user.png',
            skills: [],
            interests: [],
            jobs: []
        };
        this.job = {};
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.addSkill = function () {
        if (this.skill && this.skill.trim() != '') {
            this.profile.skills.push(this.skill);
            this.skill = null;
        }
    };
    SignupComponent.prototype.removeSkill = function (removedSkill) {
        this.profile.skills = this.profile.skills.filter(function (skill) {
            return skill != removedSkill;
        });
    };
    SignupComponent.prototype.addInterest = function () {
        if (this.interest && this.interest.trim() != '') {
            this.profile.interests.push(this.interest);
            this.interest = null;
        }
    };
    SignupComponent.prototype.removeInterest = function (removedInterest) {
        this.profile.interests = this.profile.interests.filter(function (interest) {
            return interest != removedInterest;
        });
    };
    SignupComponent.prototype.addJob = function () {
        this.job.img = '../../../assets/photos/company.png';
        this.job.dates = this.job.start + ' - ' + this.job.end;
        this.profile.jobs.push(this.job);
        this.job = {};
    };
    SignupComponent.prototype.removeJob = function (removedJob) {
        this.profile.jobs = this.profile.jobs.filter(function (job) {
            return removedJob.title != job.title && removedJob.company != job.company;
        });
    };
    SignupComponent.prototype.save = function () {
        localStorage.setItem('user', JSON.stringify(this.profile));
        this.router.navigate(['/tabs']);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/signup/signup.module.ts ***!
  \**********************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "./src/app/auth/signup/signup.component.ts");







var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] }])
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-signup-signup-module.js.map