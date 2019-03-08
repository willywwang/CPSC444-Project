(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\t\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button text=\"\" defaultHref=\"/tabs/tab3\" routerLink=\"/tabs/tab3\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-item lines=\"none\">\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img src=\"{{member.img}}\"/>\n\t\t\t</ion-avatar>\n\t\t\t<ion-label>\n\t\t\t\t<span>{{member.name}}</span>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t\t<ion-buttons slot=\"end\" style=\"padding-right:5px\">\n\t\t\t<ion-icon name=\"menu\" size=\"large\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content>\n\t<ion-list>\n\t\t<ion-item *ngFor=\"let message of filteredMessages\" lines=\"none\">\n\t\t\t<ion-avatar slot=\"{{message.from == loggedInUser ? 'end' : 'start'}}\">\n\t\t\t\t<img src=\"{{message.from == loggedInUser ? img : members[message.from-1].img}}\"/>\n\t\t\t</ion-avatar>\n\t\t\t<ion-label text-wrap>\n\t\t\t\t<div style=\"border-radius:1.3rem;\" [ngClass]=\"{ 'mentor-chat': message.from != loggedInUser, 'mentee-chat': message.from == loggedInUser}\">\n\t\t\t\t\t<div style=\"margin:0 auto;width:85%;padding:5px 0\">\n\t\t\t\t\t\t<span style=\"padding:5px 0\">{{message.text}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n<ion-footer>\n\t<ion-input [(ngModel)]=\"messageText\" placeholder=\"  Type a message\" style=\"border:1px solid #e5e3e3\" (keyup.enter)=\"sendMessage()\"></ion-input>\n</ion-footer>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mentor-chat {\n  background-color: #e9ebee;\n  color: black; }\n\n.mentee-chat {\n  background-color: #0084ff;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dpbGwvRGVza3RvcC9TY2hvb2wvY3BzYzQ0NC9DUFNDNDQ0LVByb2plY3Qvc3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdiO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW50b3ItY2hhdCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlOWViZWU7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuLm1lbnRlZS1jaGF0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwODRmZjtcblx0Y29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(route) {
        this.route = route;
        this.members = [
            {
                id: 1,
                name: 'Jeffrey Parkhouse',
                img: '../../assets/photos/jeffrey-parkhouse.jpg'
            },
            {
                id: 2,
                name: 'Andrew Guay',
                img: '../../assets/photos/andrew-guay.jpg'
            },
            {
                id: 3,
                name: 'Brendan Popowich',
                img: '../../assets/photos/brendan-popowich.jpg'
            },
            {
                id: 4,
                name: 'Christian Grey',
                img: '../../assets/photos/christian-grey.jpg'
            },
            {
                id: 5,
                name: 'Christine Lee',
                img: '../../assets/photos/christine-lee.jpg'
            },
            {
                id: 6,
                name: 'Cindy Trac',
                img: '../../assets/photos/cindy-trac.jpg'
            },
            {
                id: 7,
                name: 'Citra Ult',
                img: '../../assets/photos/citra-ult.jpg'
            },
            {
                id: 8,
                name: 'Hanah Afro',
                img: '../../assets/photos/hanah-afro.jpg'
            },
            {
                id: 9,
                name: 'Jonathan Habibi',
                img: '../../assets/photos/jonathan-habibi.jpg'
            },
            {
                id: 10,
                name: 'Jordan Wilde',
                img: '../../assets/photos/jordan-wilde.jpg'
            },
            {
                id: 11,
                name: 'Karen Bertini',
                img: '../../assets/photos/karen-bertini.jpg'
            },
            {
                id: 12,
                name: 'Mohammed Aryan',
                img: '../../assets/photos/mohammed-aryan.jpg'
            },
            {
                id: 13,
                name: 'Nelson Power',
                img: '../../assets/photos/nelson-power.jpg',
            },
            {
                id: 14,
                name: 'Phanuel Smith',
                img: '../../assets/photos/phanuel-smith.jpg'
            },
            {
                id: 15,
                name: 'Sally Kim',
                img: '../../assets/photos/sally-kim.jpg'
            },
            {
                id: 16,
                name: 'Sofia Gomez',
                img: '../../assets/photos/sofia-gomez.jpg'
            },
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
        var user = JSON.parse(localStorage.getItem('user'));
        this.members.push(user);
        this.loggedInUser = parseInt(sessionStorage.getItem('loggedInId'));
        this.img = this.loggedInUser == 1 ? '../../assets/photos/jeffrey-parkhouse.jpg' : '../../assets/photos/user.png';
        this.messages = [
            {
                id: 17,
                chatId: 0,
                from: this.loggedInUser,
                text: 'Hi Pierre, would you be free to meet up on Saturday?'
            },
            {
                id: 17,
                chatId: 1,
                from: 17,
                text: 'Yes, let\'s meet at Starbucks at 2PM.'
            }
        ];
        var sentMessages = sessionStorage.getItem('messages');
        if (sentMessages) {
            this.messages = this.messages.concat(JSON.parse(sentMessages));
            this.messages.splice(0, 2);
        }
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.member = _this.members.find(function (member) {
                return member.id === _this.id;
            });
            _this.filteredMessages = _this.messages.filter(function (message) {
                return message.id === _this.id;
            });
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var newMessage = {
            id: this.id,
            chatId: this.messages[this.messages.length - 1].chatId + 1,
            from: this.loggedInUser,
            text: this.messageText
        };
        this.messages.push(newMessage);
        sessionStorage.setItem('messages', JSON.stringify(this.messages));
        this.messageText = "";
        this.filteredMessages.push(newMessage);
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");







var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"] }])
            ],
            declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map