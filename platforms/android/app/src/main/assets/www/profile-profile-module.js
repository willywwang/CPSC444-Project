(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header *ngIf=\"!isEditing\">\t\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" *ngIf=\"!searchFocused\">\n\t\t\t<ion-back-button text=\"\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<div>\n\t\t\t<ion-searchbar placeholder=\"Search\" \n\t\t\t[(ngModel)]=\"searchedName\" \n\t\t\t(ionFocus)=\"searchFocus()\"\n\t\t\t(ionChange)=\"searchChanged()\"\n\t\t\t(keyup.escape)=\"searchLost()\"\n\t\t\t(keyup.enter)=\"search()\"></ion-searchbar>\n\t\t</div>\n\t\t<ion-buttons slot=\"end\" style=\"padding-right:5px\" *ngIf=\"searchFocused\" (click)=\"searchLost()\">\n\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"end\" style=\"padding-right:5px\" *ngIf=\"id == loggedInUser && !searchFocused\" (click)=\"updateProfile()\">\n\t\t\t<ion-icon name=\"create\" size=\"large\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-list *ngIf=\"searchFocused\" style=\"border-bottom:1px solid #e5e3e3;margin:0\">\n\t<ion-item *ngFor=\"let member of filteredMembers\" style=\"padding-top:5px\" lines=\"none\" (click)=\"routeMember(member)\">\n\t\t<ion-avatar slot=\"start\" style=\"height:25px;width:25px;\">\n\t\t\t<img src=\"{{member.img}}\">\n\t\t</ion-avatar>\n\t\t<ion-label>\n\t\t\t<span>{{member.name}}</span>\n\t\t</ion-label>\n\t</ion-item>\n</ion-list>\n\n<ion-content (click)=\"searchLost()\" *ngIf=\"!isEditing\">\n\t<ion-grid>\n\t\t<ion-row style=\"height:90px\">\n\t\t\t<ion-col size=\"3\">\n\t\t\t\t<ion-avatar style=\"padding-left:10px\">\n\t\t\t\t\t<img style=\"border-radius:50%;width:90px!important;height:90px!important;max-width:none!important\" src=\"{{profile.img}}\"/>\n\t\t\t\t</ion-avatar>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<div style=\"padding-left:18px;height:90px;display:table-cell;vertical-align:middle\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span style=\"margin:0;font-weight:600;vertical-align:middle;font-size:1.3em\">{{profile.name}}</span>\n\t\t\t\t\t\t<ion-icon name=\"checkmark-circle\" style=\"color:#d4a737;font-size:1.3em;vertical-align:middle;padding-bottom:3px;padding-left:2px\" *ngIf=\"profile.verified\"></ion-icon>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span style=\"margin:0;\">{{profile.job}}</span>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<span style=\"margin:0;\">{{profile.education}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<ion-row style=\"padding-top:5px;padding-left:10px;padding-bottom:5px\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<span style=\"margin:0;font-size:0.8em\">{{profile.bio}}</span>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t\t<div class=\"seperator\"></div>\n\t\t<ion-row style=\"padding-left:10px;padding-top:5px\">\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<span style=\"font-weight:550\">Work Experience</span>\n\t\t\t</ion-col>\n\t\t\t<ion-list *ngIf=\"profile.jobs && profile.jobs.length > 0\" style=\"width: 100%;margin-bottom:0\">\n\t\t\t\t<ion-item style=\"padding-top: 5px\" *ngFor=\"let job of profile.jobs\">\n\t\t\t\t\t<ion-avatar slot=\"start\" style=\"height:50px;width:50px;\">\n\t\t\t\t\t\t<img src=\"{{job.img}}\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label style=\"line-height:1.1\">\n\t\t\t\t\t\t<span style=\"font-size:0.9em;font-weight:550\">{{job.title}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em;\">{{job.company}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em\">{{job.dates}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<div style=\"width:100%\" *ngIf=\"!profile.jobs || profile.jobs.length == 0\">\n\t\t\t\t<ion-col size=\"12\">No work experience listed</ion-col>\n\t\t\t</div>\n\t\t\t<div style=\"height:10px;width:100%\"></div>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<span style=\"font-weight:550;\">Skills</span>\n\t\t\t</ion-col>\n\t\t\t<ion-row *ngIf=\"profile.skills && profile.skills.length > 0\" style=\"width:100%\">\n\t\t\t\t<ion-col size=\"4\" *ngFor=\"let skill of profile.skills\" style=\"padding:0\">\n\t\t\t\t\t<ul style=\"margin:0;padding-left:20px\">\n\t\t\t\t\t\t<li style=\"font-size:0.9em\">{{skill}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<div style=\"width:100%\" *ngIf=\"!profile.skills || profile.skills.length == 0\">\n\t\t\t\t<ion-col size=\"12\">No skills listed</ion-col>\n\t\t\t</div>\n\t\t\t<div style=\"height:10px;width:100%\"></div>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<span style=\"font-weight:550\">Interests</span>\n\t\t\t</ion-col>\n\t\t\t<ion-row *ngIf=\"profile.interests && profile.interests.length > 0\" style=\"width:100%\">\n\t\t\t\t<ion-col size=\"4\" *ngFor=\"let interest of profile.interests\" style=\"padding:0\">\n\t\t\t\t\t<ul style=\"margin:0;padding-left:20px\">\n\t\t\t\t\t\t<li style=\"font-size:0.9em\">{{interest}}</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t\t<div style=\"width:100%\" *ngIf=\"!profile.interests || profile.interests.length == 0\">\n\t\t\t\t<ion-col size=\"12\">No interests listed</ion-col>\n\t\t\t</div>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n\n<ion-content (click)=\"searchLost()\" *ngIf=\"isEditing\">\n\t<ion-grid>\n\t\t<ion-row style=\"height:90px;padding-top:5px\">\n\t\t\t<ion-avatar style=\"width:90px;height:95px;margin-left:auto;margin-right:auto;\">\n\t\t\t\t<img style=\"border-radius:50%;width:90px!important;height:90px!important;max-width:none!important\" src=\"{{editProfile.img}}\"/>\n\t\t\t</ion-avatar>\n\t\t</ion-row>\n\t\t<div style=\"text-align:center;padding-top:20px\">\n\t\t\t<span style=\"color:#1474a4;font-weight:600\">Edit Photo</span>\n\t\t</div>\n\t\t<ion-row style=\"padding-top:10px;width:80%;margin-left:auto;margin-right:auto\" class=\"a\">\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">General Information</span>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%;\">\n\t\t\t\t<ion-input [(ngModel)]=\"editProfile.name\" placeholder=\"Full Name\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"editProfile.job\" placeholder=\"Current Occupation\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-input [(ngModel)]=\"editProfile.education\" placeholder=\"Education\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t<ion-textarea [(ngModel)]=\"editProfile.bio\" style=\"height:100px\" placeholder=\"Bio\"></ion-textarea>\n\t\t\t</ion-item>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Work Experience</span>\n\t\t\t<ion-list *ngIf=\"editProfile.jobs && editProfile.jobs.length > 0\" style=\"width: 100%;margin-bottom:0\">\n\t\t\t\t<ion-item style=\"padding-top: 5px;width: 100%;margin:0 auto\" *ngFor=\"let job of editProfile.jobs\">\n\t\t\t\t\t<ion-avatar slot=\"start\" style=\"height:50px;width:50px;\">\n\t\t\t\t\t\t<img src=\"{{job.img}}\">\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t<ion-label style=\"line-height:1.1\">\n\t\t\t\t\t\t<span style=\"font-size:0.9em;font-weight:550\">{{job.title}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em;\">{{job.company}}</span>\n\t\t\t\t\t\t<br/>\n\t\t\t\t\t\t<span style=\"font-size:0.8em\">{{job.dates}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeJob(job)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<div>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"newJob.title\" placeholder=\"Job Title\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-input [(ngModel)]=\"newJob.company\" placeholder=\"Company\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"newJob.start\" display-format=\"MMM DD, YYYY\" placeholder=\"Start Date\"></ion-datetime>\n\t\t\t\t\t</ion-item>\n\t\t\t\t\t<ion-item style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t\t<ion-datetime [(ngModel)]=\"newJob.end\" display-format=\"MMM DD, YYYY\" placeholder=\"End Date\"></ion-datetime>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</div>\n\t\t\t\t<ion-buttons style=\"margin-left:auto;margin-right:auto;padding-top:10px\">\n\t\t\t\t\t<ion-button class=\"action-button\" (click)=\"addJob()\">\n\t\t\t\t\t\tAdd Work Experience\n\t\t\t\t\t\t<ion-icon name=\"add-circle-outline\" size=\"large\" slot=\"start\"></ion-icon>\n\t\t\t\t\t</ion-button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-list>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Skills</span>\n\t\t\t<ion-list style=\"width:100%;margin:0;\">\n\t\t\t\t<ion-item *ngFor=\"let skill of editProfile.skills\" lines=\"full\" style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<span>{{skill}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeSkill(skill)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t\t<ion-input [(ngModel)]=\"skill\" placeholder=\"New Skill\" (keyup.enter)=\"addSkill()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t\t<span style=\"padding-top: 15px;padding-bottom:5px;font-size:18px;color:#1474a4\">Interests</span>\n\t\t\t<ion-list style=\"width:100%;margin:0;\">\n\t\t\t\t<ion-item *ngFor=\"let interest of editProfile.interests\" lines=\"full\" style=\"width: 100%;margin:0 auto\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t<span>{{interest}}</span>\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-avatar slot=\"end\" (click)=\"removeInterest(interest)\">\n\t\t\t\t\t\t<ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n\t\t\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t\t\t<ion-item lines=\"full\" style=\"width:100%\">\n\t\t\t\t\t<ion-input [(ngModel)]=\"interest\" placeholder=\"New Interest\" (keyup.enter)=\"addInterest()\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-list>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n\n<ion-footer *ngIf=\"isEditing\">\n\t<ion-toolbar>\n\t\t<ion-buttons>\n\t\t\t<ion-button expand=\"block\" fill=\"solid\" size=\"default\" color=\"#0077B5\" style=\"margin-left:auto;width:33%;background-color:#0077B5!important;border-radius:0.25rem\">\n\t\t\t\t<ion-icon name=\"logo-linkedin\"></ion-icon>\n\t\t\t\t&nbsp;Connect&nbsp;\n\t\t\t</ion-button>\n\t\t\t<ion-button expand=\"block\" fill=\"solid\" size=\"default\" color=\"#459758\" style=\"width:33%;background-color:#459758!important;border-radius:0.25rem\" (click)=\"save()\">\n\t\t\t\t<ion-icon name=\"save\"></ion-icon>&nbsp;&nbsp;Save&nbsp;&nbsp;\n\t\t\t</ion-button>\n\t\t\t<ion-button expand=\"block\" fill=\"solid\" size=\"default\" color=\"#d7636e\" style=\"margin-right:auto;width:33%;background-color:#d7636e!important;border-radius:0.25rem\" (click)=\"cancelEdit()\">\n\t\t\t\t<ion-icon name=\"close-circle-outline\"></ion-icon>&nbsp;Cancel&nbsp;\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".seperator {\n  width: 100%;\n  height: 1px;\n  background-color: #e5e3e3; }\n\nion-input {\n  --padding-start: 0px; }\n\n.a ion-item {\n  --padding-start: 0px; }\n\nion-datetime {\n  --padding-start: 0px; }\n\n.action-button {\n  background: #1474a4;\n  font-size: 16px;\n  text-transform: none;\n  min-height: initial;\n  height: 40px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  margin-left: auto;\n  margin-right: auto;\n  color: white;\n  font-family: 'Open Sans', san-serif;\n  border-radius: 1.3em;\n  padding-right: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUcxQjtFQUNDLG9CQUFnQixFQUFBOztBQUdqQjtFQUNDLG9CQUFnQixFQUFBOztBQUdqQjtFQUNDLG9CQUFnQixFQUFBOztBQUdqQjtFQUNDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsb0JBQW9CO0VBQ3BCLGtCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcGVyYXRvciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDFweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTNlMztcbn1cblxuaW9uLWlucHV0IHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5hIGlvbi1pdGVtIHtcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbmlvbi1kYXRldGltZSB7XG5cdC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG5cdGJhY2tncm91bmQ6ICMxNDc0YTQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG5cdG1pbi1oZWlnaHQ6IGluaXRpYWw7XG5cdGhlaWdodDogNDBweDtcblx0cGFkZGluZy10b3A6IDEycHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMnB4O1xuXHRtYXJnaW4tbGVmdDphdXRvO1xuXHRtYXJnaW4tcmlnaHQ6YXV0bztcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbi1zZXJpZjtcblx0Ym9yZGVyLXJhZGl1czogMS4zZW07XG5cdHBhZGRpbmctcmlnaHQ6NXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, route) {
        this.router = router;
        this.route = route;
        this.members = [];
        this.filteredMembers = [];
        this.isEditing = false;
        this.searchFocused = false;
        this.newJob = {};
        this.members = [
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
        var user = JSON.parse(localStorage.getItem('user'));
        this.loggedInUser = parseInt(localStorage.getItem('loggedInId'));
        this.members.push(user);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.profile = _this.members.find(function (member) {
                return member.id === _this.id;
            });
            _this.searchedName = _this.profile.name;
            _this.searchChanged();
        });
    };
    ProfileComponent.prototype.searchFocus = function () {
        this.searchFocused = true;
    };
    ProfileComponent.prototype.searchLost = function () {
        this.searchFocused = false;
    };
    ProfileComponent.prototype.searchChanged = function () {
        var _this = this;
        this.filteredMembers = this.members;
        if (this.searchedName.trim() == '') {
            return;
        }
        this.filteredMembers = this.members.filter(function (member) {
            if (member.name.toLowerCase().includes(_this.searchedName.toLowerCase())) {
                return true;
            }
            return false;
        });
    };
    ProfileComponent.prototype.routeMember = function (member) {
        this.router.navigate(['/profile', member.id]);
    };
    ProfileComponent.prototype.search = function () {
        var _this = this;
        var tempMember = this.members.find(function (member) {
            return member.name.toLowerCase() == _this.searchedName.toLowerCase();
        });
        if (tempMember) {
            this.routeMember(tempMember);
        }
    };
    ProfileComponent.prototype.updateProfile = function () {
        this.isEditing = true;
        this.editProfile = JSON.parse(JSON.stringify(this.profile));
    };
    ProfileComponent.prototype.cancelEdit = function () {
        this.isEditing = false;
    };
    ProfileComponent.prototype.addJob = function () {
        this.newJob.img = '../../assets/photos/company.png';
        this.newJob.dates = this.newJob.start + ' - ' + this.newJob.end;
        this.editProfile.jobs.push(this.newJob);
        this.newJob = {};
    };
    ProfileComponent.prototype.removeJob = function (removedJob) {
        this.editProfile.jobs = this.editProfile.jobs.filter(function (job) {
            return removedJob.title != job.title && removedJob.company != job.company;
        });
    };
    ProfileComponent.prototype.addSkill = function () {
        if (this.skill && this.skill.trim() != '') {
            this.editProfile.skills.push(this.skill);
            this.skill = null;
        }
    };
    ProfileComponent.prototype.removeSkill = function (removedSkill) {
        this.editProfile.skills = this.editProfile.skills.filter(function (skill) {
            return skill != removedSkill;
        });
    };
    ProfileComponent.prototype.addInterest = function () {
        if (this.interest && this.interest.trim() != '') {
            this.editProfile.interests.push(this.interest);
            this.interest = null;
        }
    };
    ProfileComponent.prototype.removeInterest = function (removedInterest) {
        this.editProfile.interests = this.editProfile.interests.filter(function (interest) {
            return interest != removedInterest;
        });
    };
    ProfileComponent.prototype.save = function () {
        localStorage.setItem('user', JSON.stringify(this.editProfile));
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }])
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map