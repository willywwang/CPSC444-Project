(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");








var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }]),
                ng2_dragula__WEBPACK_IMPORTED_MODULE_7__["DragulaModule"]
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-avatar routerLink=\"{{route}}\">\n\t\t\t\t<img src=\"{{img}}\">\n\t\t\t</ion-avatar>\n\t\t\t<span style=\"padding-left:15px\">Explore</span>\n\t\t</ion-item>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"switchMode()\">\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"switch\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"mode == 1\">\n\t<ion-card *ngFor=\"let mentor of mentors\" (click)=\"goToMember(mentor)\">\n\t\t<div style=\"height:225px;overflow:hidden\">\n\t\t\t<img src=\"{{mentor.img}}\" style=\"filter: blur(2px) opacity(80%);\">\n\t\t</div>\n\t\t<div style=\"position:absolute;top:0%;width:100%;text-align:center\">\n\t\t\t<div style=\"text-align: right\">\n\t\t\t\t<p style=\"color:black;font-weight:750;font-family:'Verla Round', sans-serif;padding-right:15px\">{{mentor.match}}</p>\n\t\t\t</div>\n\t\t\t<div style=\"padding-left:15px;padding-right:15px\">\n\t\t\t\t<h2 style=\"color:black;font-weight:750;font-family: 'Varela Round', sans-serif;margin-bottom:0\">{{mentor.name}}</h2>\n\t\t\t\t<h3 style=\"color:black;font-weight:500;font-family: 'Varela Round', sans-serif;margin-top:5px\">{{mentor.job}}</h3>\n\t\t\t\t<span style=\"height:100px;color:black;font-weight:250;font-family: 'Varela Round', sans-serif;\">\n\t\t\t\t\t{{mentor.bio}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</ion-card>\n</ion-content>\n<!-- checkmark x -->\n<ion-content *ngIf=\"mode==2\">\n\t<ion-card style=\"transform:translateY(50%);\">\n\t\t<div style=\"height:225px;overflow:hidden\">\n\t\t\t<img src=\"{{mentor.img}}\" style=\"filter: blur(2px) opacity(80%);\">\n\t\t</div>\n\t\t<div style=\"position:absolute;top:0%;width:100%;text-align:center\">\n\t\t\t<div style=\"padding-left:15px;padding-right:15px\">\n\t\t\t\t<h2 style=\"color:black;font-weight:750;font-family: 'Varela Round', sans-serif;margin-bottom:0\">{{mentor.name}}</h2>\n\t\t\t\t<h3 style=\"color:black;font-weight:500;font-family: 'Varela Round', sans-serif;margin-top:5px\">{{mentor.job}}</h3>\n\t\t\t\t<span style=\"height:100px;color:black;font-weight:250;font-family: 'Varela Round', sans-serif;\">\n\t\t\t\t\t{{mentor.bio}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<ion-card-content style=\"padding: 0\" *ngIf=\"mentor.id != -1\">\n\t\t\t<ion-buttons style=\"padding: 10px\">\n\t\t\t\t<ion-button style=\"width:50%;border-right:1px solid #e5e3e3\">\n\t\t\t\t\t<ion-icon name=\"checkmark\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button style=\"width:50%\" (click)=\"switchMentors()\">\n\t\t\t\t\t<ion-icon name=\"close\"></ion-icon>\n\t\t\t\t</ion-button>\n\t\t\t</ion-buttons>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>\n<!-- show 6 circles drag and drop -->\n<ion-content *ngIf=\"mode==3\">\n\t<ion-grid style=\"transform:translateY(12%)\">\n\t\t<ion-row>\n\t\t\t<ion-row dragula=\"MENTORS\" [(dragulaModel)]=\"subsetMentors\" style=\"width:100%\">\n\t\t\t\t<ion-col size=\"6\" *ngFor=\"let mentor of subsetMentors\">\n\t\t\t\t\t<ion-avatar style=\"width:150px;height:150px;margin-left:auto;margin-right:auto\">\n\t\t\t\t\t\t<img src=\"{{mentor.img}}\"/>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<ion-row style=\"width:100%\">\n\t\t\t\t<ion-col size=\"6\" ng-if=\"!finishedSearch\" dragula=\"MENTORS\" [(dragulaModel)]=\"favorites\" class=\"no-drag\">\n\t\t\t\t\t<ion-avatar style=\"width:150px;height:150px;margin-left:auto;margin-right:auto;border:1px solid #FCAF17;text-align:center\">\n\t\t\t\t\t\t<img style=\"width:50px;height:50px;position:relative;top:29%\" src=\"../../assets/photos/star.png\"/>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\" ng-if=\"!finishedSearch\" dragula=\"MENTORS\" [(dragulaModel)]=\"garbage\" class=\"no-drag\">\n\t\t\t\t\t<ion-avatar style=\"width:150px;height:150px;margin-left:auto;margin-right:auto;border:1px solid #9A9B9D;text-align:center\">\n\t\t\t\t\t\t<img style=\"width:50px;height:50px;position:relative;top:29%\" src=\"../../assets/photos/trash.png\"/>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n<ion-content *ngIf=\"finishedSearch && mode == 3\" style=\"text-align:center\">\n\t<span>Favorited Mentors</span>\n\t<ion-grid style=\"transform:translateY(12%)\">\n\t\t<ion-row>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"6\" *ngFor=\"let mentor of favorites\">\n\t\t\t\t\t<ion-avatar style=\"width:150px;height:150px;margin-left:auto;margin-right:auto\">\n\t\t\t\t\t\t<img src=\"{{mentor.img}}\"/>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(router, dragulaService) {
        var _this = this;
        this.router = router;
        this.dragulaService = dragulaService;
        this.mentors = [];
        this.subsetMentors = [];
        this.index = 0;
        this.sliceIndex = 0;
        this.mode = 1;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.favorites = [];
        this.garbage = [];
        this.finishedSearch = false;
        this.mentors = [
            {
                id: 1,
                name: 'Jeffrey Parkhouse',
                job: 'BCs Student at UBC',
                education: 'University of British Columbia',
                bio: 'I\'m a 4th year computer science student at UBC who specializes in full stack development.',
                img: '../../assets/photos/jeffrey-parkhouse.jpg',
                verified: true,
                skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'C', 'Android', 'IntelliJ'],
                interests: ['Coding', 'Software', 'Hiking', 'Hackathons', 'Mobile', 'Web', 'Database'],
                jobs: [
                    {
                        img: '../../assets/photos/ubc-logo.png',
                        title: 'Full Stack Developer Co-op',
                        company: 'UBC',
                        dates: 'Sept 2018 - Dec 2018'
                    },
                    {
                        img: '../../assets/photos/hootsuite-logo.png',
                        title: 'Software Developer Intern',
                        company: 'Hootsuite',
                        dates: 'Jan 2017 - Aug 2017'
                    }
                ]
            },
            {
                id: 2,
                name: 'Andrew Guay',
                job: 'Financial Advisor at BMO',
                bio: '',
                img: '../../assets/photos/andrew-guay.jpg'
            },
            {
                id: 3,
                name: 'Brendan Popowich',
                job: '',
                bio: '',
                img: '../../assets/photos/brendan-popowich.jpg'
            },
            {
                id: 4,
                name: 'Christian Grey',
                job: '',
                bio: '',
                img: '../../assets/photos/christian-grey.jpg'
            },
            {
                id: 5,
                name: 'Christine Lee',
                job: '',
                bio: '',
                img: '../../assets/photos/christine-lee.jpg'
            },
            {
                id: 6,
                name: 'Cindy Trac',
                job: '',
                bio: '',
                img: '../../assets/photos/cindy-trac.jpg'
            },
            {
                id: 7,
                name: 'Citra Ult',
                job: '',
                bio: '',
                img: '../../assets/photos/citra-ult.jpg'
            },
            {
                id: 8,
                name: 'Hanah Afro',
                job: '',
                bio: '',
                img: '../../assets/photos/hanah-afro.jpg'
            },
            {
                id: 9,
                name: 'Jonathan Habibi',
                job: '',
                bio: '',
                img: '../../assets/photos/jonathan-habibi.jpg'
            },
            {
                id: 10,
                name: 'Jordan Wilde',
                job: '',
                bio: '',
                img: '../../assets/photos/jordan-wilde.jpg'
            },
            {
                id: 11,
                name: 'Karen Bertini',
                job: '',
                bio: '',
                img: '../../assets/photos/karen-bertini.jpg'
            },
            {
                id: 12,
                name: 'Mohammed Aryan',
                job: '',
                bio: '',
                img: '../../assets/photos/mohammed-aryan.jpg'
            },
            {
                id: 13,
                name: 'Nelson Power',
                job: 'Software Engineer at Hootsuite',
                bio: 'I have been coding for 8 years and have experience with both mobile and web development. I previously worked at companies such as Google and Amazon as a full stack engineer and have mentored several interns in the past.',
                img: '../../assets/photos/nelson-power.jpg',
                match: '97%'
            },
            {
                id: 14,
                name: 'Phanuel Smith',
                job: '',
                bio: '',
                img: '../../assets/photos/phanuel-smith.jpg'
            },
            {
                id: 15,
                name: 'Sally Kim',
                job: '',
                bio: '',
                img: '../../assets/photos/sally-kim.jpg'
            },
            {
                id: 16,
                name: 'Sofia Gomez',
                job: '',
                bio: '',
                img: '../../assets/photos/sofia-gomez.jpg'
            }
        ];
        this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));
        this.mentors = this.mentors.filter(function (mentor) {
            return mentor.id != _this.loggedInUser;
        });
        this.mentor = this.mentors[this.index];
        this.subsetMentors = this.mentors.slice(this.sliceIndex, this.sliceIndex + 4);
        this.sliceIndex += 4;
        this.route = '/profile/' + this.loggedInUser;
        this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
        this.dragulaService.createGroup('MENTORS', {
            moves: function (el, container, handle) {
                if (container.classList.contains('no-drag')) {
                    return false;
                }
                return true;
            }
        });
        this.subs.add(this.dragulaService.drop("MENTORS")
            .subscribe(function (_a) {
            var name = _a.name, el = _a.el, target = _a.target, source = _a.source, sibling = _a.sibling;
            if (_this.sliceIndex < 16 && _this.subsetMentors.length == 0) {
                _this.subsetMentors = _this.mentors.slice(_this.sliceIndex, _this.sliceIndex + 4);
                _this.sliceIndex += 4;
            }
            else if (_this.sliceIndex >= 16 && _this.subsetMentors.length == 0) {
                _this.finishedSearch = true;
            }
        }));
    }
    Tab2Page.prototype.switchMode = function () {
        this.mode++;
        if (this.mode > 3) {
            this.mode = 1;
        }
    };
    Tab2Page.prototype.goToMember = function (member) {
        this.router.navigate(['/profile', member.id]);
    };
    Tab2Page.prototype.switchMentors = function () {
        this.index++;
        if (this.index == this.mentors.length) {
            this.mentor = {};
            this.mentor.name = "No more mentors can be found at the moment.";
            this.mentor.id = -1;
            return;
        }
        this.mentor = this.mentors[this.index];
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map