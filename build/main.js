webpackJsonp([4],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/assignments/assignments.module": [
		280,
		3
	],
	"../pages/calculator/calculator.module": [
		277,
		2
	],
	"../pages/profile/profile.module": [
		278,
		1
	],
	"../pages/timetable/timetable.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calculator_calculator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_assignments_assignments__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_date_time_date_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_navigation_navigation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_timetable_timetable__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_assignments_assignments__["a" /* AssignmentsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_timetable_timetable__["a" /* TimetablePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calculator/calculator.module#CalculatorPageModule', name: 'CalculatorPage', segment: 'calculator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetable/timetable.module#TimetablePageModule', name: 'TimetablePage', segment: 'timetable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/assignments/assignments.module#AssignmentsPageModule', name: 'AssignmentsPage', segment: 'assignments', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calculator_calculator__["a" /* CalculatorPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_assignments_assignments__["a" /* AssignmentsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_timetable_timetable__["a" /* TimetablePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_date_time_date_time__["a" /* DateTimeProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_navigation_navigation__["a" /* NavigationProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DateTimeProvider = /** @class */ (function () {
    function DateTimeProvider() {
        this.Date = new Date().toDateString();
        console.log('Hello DateTimeProvider Provider');
    }
    DateTimeProvider.prototype.checktime = function () {
        this.myTime = new Date().getHours();
        if (this.myTime >= 0 && this.myTime <= 11) {
            this.sky = "AM";
            if (this.myTime >= 5) {
                this.skyicon = "sunny";
            }
            else {
                this.skyicon = "moon";
            }
            if (this.myTime > 7)
                this.bgtheme = "midday";
            else if (this.myTime >= 5)
                this.bgtheme = "dawn";
            else
                this.bgtheme = "night";
        }
        else {
            this.sky = "PM";
            if (this.myTime < 19) {
                this.skyicon = "sunny";
            }
            else {
                this.skyicon = "moon";
            }
            if (this.myTime >= 19)
                this.bgtheme = "night";
            else if (this.myTime >= 17)
                this.bgtheme = "evening";
            else
                this.bgtheme = "midday";
        }
        if (this.myTime == 0)
            this.myTime = 12;
        if (this.myTime > 12)
            this.myTime -= 12;
        if (this.bgtheme == "dawn" || this.bgtheme == "midday")
            this.card = "clear";
        if (this.bgtheme == "night" || this.bgtheme == "evening")
            this.card = "opaque";
    };
    DateTimeProvider.prototype.custombg = function () {
        var stuff = ["dawn", "midday", "evening", "night"];
        var style = ["clear", "clear", "opaque", "opaque"];
        for (var i = 0; i < 4; i++) {
            if (this.bgtheme == stuff[i])
                this.num = i;
        }
        if (this.num != 3)
            this.num++;
        else
            this.num = 0;
        this.bgtheme = stuff[this.num];
        this.card = style[this.num];
    };
    DateTimeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DateTimeProvider);
    return DateTimeProvider;
}());

//# sourceMappingURL=date-time.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_calculator_calculator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__timetable_timetable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//DateTimeProvider not imported here
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, alertCtrl, Noti) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.Noti = Noti;
        this.ShowDeadlines = false;
        this.ShowEvents = false;
        this.bgtheme = "photo"; //needs to be initialized to work
        this.stime = 0;
        this.avatar = "Art/A.png";
        storage.get('Avatar').then(function (val) {
            if (val != undefined)
                _this.avatar = val;
        });
        storage.get('AvatarList').then(function (val) {
            if (val != undefined) {
                _this.images = val;
            }
        });
        storage.get('FName').then(function (val) {
            if (val == undefined)
                _this.welcome();
        });
        Noti.getinfo();
        Noti.Events("blank");
        this.myDate = new Date().toString();
        this.fullhour = new Date().getHours();
        this.myTime = new Date().getHours();
        if (this.myTime >= 0 && this.myTime <= 11) {
            this.SkyCheck("morning");
        }
        else {
            this.SkyCheck("night");
        }
        if (this.myTime == 0)
            this.myTime = 12;
        if (this.myTime > 12)
            this.myTime -= 12;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.welcome = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Welcome New User!',
            subTitle: 'Thank you for installing \"School Assist\"! Now all you need to do is fill out some information and you can get started.',
            buttons: [
                {
                    text: 'Set up Profile',
                    handler: function () {
                        _this.open("Profile");
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.changetime = function (time) {
        if (time == 1)
            this.bgtheme = "dawn";
        if (time == 2)
            this.bgtheme = "midday";
        if (time == 3)
            this.bgtheme = "evening";
        if (time == 4)
            this.bgtheme = "night";
        this.changecard();
    };
    HomePage.prototype.switchtime = function () {
        if (this.fullhour != 23)
            this.fullhour++;
        else
            this.fullhour = 0;
        this.myTime = this.fullhour;
        if (this.myTime >= 0 && this.myTime <= 11) {
            this.SkyCheck("morning");
        }
        else {
            this.SkyCheck("night");
        }
        if (this.fullhour == 0)
            this.myTime = 12;
        if (this.fullhour > 12)
            this.myTime -= 12;
        this.changecard();
    };
    HomePage.prototype.open = function (page) {
        if (page == "Calculator") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_calculator_calculator__["a" /* CalculatorPage */]);
        }
        if (page == "Profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_profile_profile__["a" /* ProfilePage */]);
        }
        if (page == "Assignments") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__["a" /* AssignmentsPage */]);
        }
        if (page == "Timetable") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__timetable_timetable__["a" /* TimetablePage */]);
        }
    };
    HomePage.prototype.SkyCheck = function (time) {
        if (time == "morning") {
            this.sky = "AM";
            if (this.myTime >= 5) {
                this.skyicon = "sunny";
            }
            else {
                this.skyicon = "moon";
            }
            if (this.myTime > 7)
                this.bgtheme = "midday";
            else if (this.myTime >= 5)
                this.bgtheme = "dawn";
            else
                this.bgtheme = "night";
        }
        if (time == "night") {
            this.sky = "PM";
            if (this.myTime < 19) {
                this.skyicon = "sunny";
            }
            else {
                this.skyicon = "moon";
            }
            if (this.myTime >= 19)
                this.bgtheme = "night";
            else if (this.myTime >= 17)
                this.bgtheme = "evening";
            else
                this.bgtheme = "midday";
        }
        if (this.bgtheme == "dawn")
            this.stime = 1;
        if (this.bgtheme == "midday")
            this.stime = 2;
        if (this.bgtheme == "evening")
            this.stime = 3;
        if (this.bgtheme == "night")
            this.stime = 4;
    };
    HomePage.prototype.reset = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.changecard = function () {
        if (this.bgtheme == "dawn" || this.bgtheme == "midday")
            this.Noti.card = "clear";
        if (this.bgtheme == "night" || this.bgtheme == "evening")
            this.Noti.card = "opaque";
    };
    HomePage.prototype.switch = function () {
        var pic;
        for (var i = 0; i < this.images.length; i++) {
            if (this.avatar == this.images[i])
                pic = i;
        }
        if (pic < this.images.length - 1)
            pic++;
        else
            pic = 0;
        this.avatar = this.images[pic];
        this.storage.set('Avatar', this.avatar);
    };
    HomePage.prototype.saveProgress = function () {
        var list = [];
        var Events = this.Noti.myEvents;
        list = [new Date().getDay()];
        for (var i = 0; i < Events.length; i++)
            list.push(Events[i].done);
        this.storage.set('ToDo', list);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\home\home.html"*/'<ion-content padding class="{{bgtheme}}" id="circle">\n\n  <h1 align="center" style="color: white" (click)="switchtime()">\n    <ion-icon name="{{skyicon}}"></ion-icon> {{myTime}} {{sky}}\n  </h1>\n\n  <div *ngIf="Noti.ShowBirth">\n    <ion-card class="box" color="{{ Noti.card }}" (click)="Noti.presentAlert(\'Birthday\')"> <ion-icon name="images"></ion-icon> Happy Birthday {{ Noti.user }}! <ion-icon name="ice-cream"></ion-icon> </ion-card>\n  </div>\n  <div *ngIf="Noti.ShowBirth == false && Noti.Holiday == false">\n    <ion-card class="box" color="{{ Noti.card }}"> {{Noti.Date}} </ion-card>\n  </div>\n  <div *ngIf="Noti.Holiday != false">\n    <ion-card class="box" color="{{ Noti.card }}" (click)="Noti.presentAlert(Noti.Holiday)"> <ion-icon name="snow"></ion-icon> {{Noti.Holiday}} {{Noti.user}}!! <ion-icon name="snow"></ion-icon> </ion-card>\n  </div>\n\n  <div *ngIf="ShowDeadlines==false && ShowEvents==false">\n    <div style="text-align:center;">\n      <img src="assets/imgs/{{ avatar }}" (swipe)="switch()" style="border-radius: 100%" height="200px" width="200px">\n    </div>\n\n    <button ion-button full color="royal" (click)="open(\'Profile\')"> View Student Profile </button>\n    <button ion-button full color="sky" (click)="open(\'Timetable\')"> Event Timetable </button>\n    <button ion-button full color="royal" (click)="open(\'Assignments\')"> Your Assignments </button>\n    <button ion-button full color="sky" (click)="open(\'Calculator\')"> Calculator </button>\n  \n    <br>\n\n    <ion-item color="clear" style="border-radius: 100px; border: none">\n      <ion-range min="1" max="4" step="1" snaps="true" color="royal" [(ngModel)]="stime" (ionChange)="changetime(stime)">\n        <ion-icon range-left name="sunny" color="gold"></ion-icon>\n        <ion-icon range-right name="moon" color="light"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <br>\n  </div>\n  \n  <div align="center"><ion-card class="box" color="{{ Noti.card }}"> Notices & Reminders </ion-card></div>\n\n  <button id="meh" *ngIf="ShowDeadlines==true" ion-button color="{{ Noti.card }}" (click)="ShowDeadlines = false"> Close Deadlines &emsp; <ion-badge item-end> {{ Noti.numdue }} <ion-icon name="paper"></ion-icon> </ion-badge></button>\n  <button id="meh" *ngIf="ShowDeadlines==false" ion-button color="{{ Noti.card }}" (click)="ShowDeadlines = true; ShowEvents = false"> View Deadlines &emsp; <ion-badge> {{ Noti.numdue }} <ion-icon name="paper"></ion-icon> </ion-badge></button>\n  \n  <button id="meh" *ngIf="ShowEvents==true" ion-button color="{{ Noti.card }}" (click)="ShowEvents = false"> Close Events &emsp; <ion-badge> {{Noti.EventStatus}} <ion-icon name="school"></ion-icon> </ion-badge></button>\n  <button id="meh" *ngIf="ShowEvents==false" ion-button color="{{ Noti.card }}" (click)="ShowEvents = true; ShowDeadlines = false"> View Events &emsp; <ion-badge> {{Noti.EventStatus}} <ion-icon name="school"></ion-icon></ion-badge></button>\n\n  <div *ngIf="ShowDeadlines">\n    <br>\n    <ion-item color="primary"> Work due Today! </ion-item>\n    <div *ngFor="let num of Noti.myAssignments">\n      <button id="meh" ion-button full *ngIf="num.daysleft==0" color="{{ Noti.card }}" (click)="Noti.DueAlert(num)"> {{ num.subject }} </button>\n    </div>\n    <br>\n    <ion-item color="secondary"> Work due Tomorrow! </ion-item>\n    <div *ngFor="let num of Noti.myAssignments">\n      <button id="meh" ion-button full *ngIf="num.daysleft==1" color="{{ Noti.card }}" (click)="Noti.DueAlert(num)"> {{ num.subject }} </button>\n    </div>\n    <br>\n    <ion-item color="dark"> Work due in less than a week </ion-item>\n    <div *ngFor="let num of Noti.myAssignments">\n      <button id="meh" ion-button full *ngIf="num.daysleft<=7 && num.daysleft>1" color="{{ Noti.card }}" (click)="Noti.DueAlert(num)"> {{ num.subject }} </button>\n    </div>\n    <br> <br> <br>\n  </div>\n\n  <div *ngIf="ShowEvents">\n    <br> <ion-item color="royal"> Today\'s Schedule! </ion-item>\n    <ion-item no-lines color="{{ Noti.card }}" *ngFor="let num of Noti.myEvents">\n      <ion-label> {{num.event.event}} </ion-label>\n      <ion-checkbox color="secondary" [(ngModel)]="num.done" (ionChange)="saveProgress()"></ion-checkbox>\n    </ion-item>\n  </div>\n\n  <ion-fab bottom center *ngIf="ShowEvents || ShowDeadlines">\n    <button color="royal" ion-fab>Menu</button>\n    <ion-fab-list side="left">\n      <button color="fog" ion-fab (click)="open(\'Timetable\')"><ion-icon name="school"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Profile\')"><ion-icon name="person"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button color="fog" ion-fab (click)="open(\'Calculator\')"><ion-icon name="calculator"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Assignments\')"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab bottom right>\n    <button ion-fab mini color="{{Noti.card}}" (click)=\'reset()\'> <ion-icon name="refresh"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__["a" /* NavigationProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_date_time_date_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_assignments_assignments__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_timetable_timetable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CalculatorPage = /** @class */ (function () {
    function CalculatorPage(navCtrl, Time, Noti) {
        this.navCtrl = navCtrl;
        this.Time = Time;
        this.Noti = Noti;
        this.stack = [];
        this.opcount = 1;
        this.numcontents = 0;
        this.num = 0; // Stores the actual number used in the calculation
        this.process = "NIL"; // The operation selected
        this.ans = 0; // Stores Answer
        this.keepans = 0; // 0 = Don't save answer & 1 = save previous answer
        this.show = false;
        this.bgtext = "Change Background";
        this.theme = ["dawn", "midday", "evening", "night"];
        this.currentyear = new Date().getFullYear();
        this.From = "??";
        this.To = "??";
        this.days = "??";
        Time.checktime();
        this.yrRange = 1;
    }
    CalculatorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculatorPage');
    };
    CalculatorPage.prototype.setRange = function (add) {
        if (this.yrRange == 0 && add < 0)
            return;
        this.yrRange = this.yrRange + add;
    };
    CalculatorPage.prototype.select = function (location) {
        for (var i = 0; i < 17; i++)
            document.getElementById("case").getElementsByTagName("button")[i].className = "b";
        document.getElementById("case").getElementsByTagName("button")[location].className = "pressed";
    };
    CalculatorPage.prototype.press = function (val) {
        if (this.opclicked == "yes")
            this.firsthalf = this.equation; // Backs up current equation
        this.text = document.getElementById("case").getElementsByTagName("button")[val].innerHTML; //Gets number on the button
        this.num = (this.num * 10) + parseInt(this.text); // Moves other digits up by one place value
        this.keepans = 0; // Clears answer from previous equation
        if (this.opcount == 1)
            this.equation = '' + this.num; // Starts a new equation
        else
            this.equation = this.firsthalf + this.num; // Uses back up equation and adds updated number
        this.stack[this.numcontents] = this.num;
        this.select(val); // Changes appearance of selected button
        document.getElementById("display").innerHTML = this.equation; // Prints current equation to the screen
        this.opclicked = "no";
    };
    CalculatorPage.prototype.operation = function (val) {
        this.select(val);
        if (this.keepans == 1) {
            this.stack[0] = this.ans;
            this.equation = '' + this.ans; // Starts new equation
            this.firsthalf = this.equation; // Backs up current equation
        }
        if (this.process != "NIL") {
            if (this.opclicked == "no")
                this.numcontents++;
            this.stack[this.numcontents] = this.process;
        }
        if (this.opclicked == "yes") {
            this.numcontents--;
            this.equation = this.firsthalf;
        }
        else {
            if (this.opclicked == "no")
                this.firsthalf = this.equation; // Backs up current equation
        }
        this.opcount++;
        this.numcontents++;
        this.num = 0; // Clears the number value
        this.process = document.getElementById("case").getElementsByTagName("button")[val].innerHTML; // Reads operation symbol on the button selected
        this.equation += this.process; // Adds the operation symbol to the equation    
        document.getElementById("display").innerHTML = this.equation;
        this.opclicked = "yes";
    };
    CalculatorPage.prototype.reset = function () {
        this.stack = [];
        this.num = 0;
        this.numcontents = 0;
        this.opcount = 1;
        this.process = "NIL";
        this.keepans = 1;
        this.equation = "\0";
        this.firsthalf = "\0";
    };
    CalculatorPage.prototype.clear = function () {
        this.reset();
        this.ans = 0;
        document.getElementById("display").innerHTML = "0";
        this.select(0);
    };
    CalculatorPage.prototype.delete = function () {
        if (isNaN(parseInt(this.stack[this.numcontents]))) {
            this.stack.splice(this.numcontents, 1);
            this.numcontents--;
        }
        this.num = ((this.num / 10) - (this.num % 10 / 10)) / 10;
        this.press(14);
        this.select(1);
    };
    CalculatorPage.prototype.calc = function (val) {
        this.select(val);
        if (this.process != "NIL") {
            this.numcontents++;
            this.stack[this.numcontents] = this.process;
        }
        this.numcontents++;
        var highpriority = "/0";
        var temp;
        var loc1, loc2;
        var i;
        for (i = 0; i < this.numcontents; i++) {
            if (isNaN(parseInt(this.stack[i]))) {
                if ((this.stack[i] == " / " || this.stack[i] == " x ") && (highpriority == " - " || highpriority == " + ")) {
                    temp = highpriority;
                    loc1 = loc2;
                    highpriority = this.stack[i];
                    loc2 = i;
                    status = "swap";
                    this.stack.splice(loc1, 1);
                    this.stack.splice(loc2, 0, temp);
                    highpriority = "/0";
                    loc1 = 0;
                    loc2 = 0;
                }
                if ((this.stack[i] == " - " || this.stack[i] == " + ") && (highpriority != " / " && highpriority != " x ")) {
                    highpriority = this.stack[i];
                    loc2 = i;
                    status = "none";
                }
            }
        }
        while (this.numcontents != 1) {
            for (i = 2; i < this.numcontents; i++) {
                if (isNaN(parseInt(this.stack[i]))) {
                    this.op1 = this.stack[i - 2];
                    this.op2 = this.stack[i - 1];
                    this.process = this.stack[i];
                    break;
                }
            }
            this.numcontents++;
            if (this.process == " + ") {
                this.ans = this.op1 + this.op2;
            }
            if (this.process == " - ") {
                this.ans = this.op1 - this.op2;
            }
            if (this.process == " / ") {
                this.ans = this.op1 / this.op2;
            }
            if (this.process == " x ") {
                this.ans = this.op1 * this.op2;
            }
            this.stack.splice(i - 2, 1, this.ans);
            this.stack.splice(i - 1, 2);
            this.numcontents -= 2;
        }
        document.getElementById("display").innerHTML = '' + this.ans; // Displays final answer to the screen
        this.reset();
    };
    CalculatorPage.prototype.changebg = function (pic) {
        this.Time.bgtheme = pic;
        this.show = false;
        this.bgtext = "Change Background";
    };
    CalculatorPage.prototype.showlist = function () {
        if (this.show == false) {
            this.show = true;
            this.bgtext = "Cancel";
        }
        else {
            this.show = false;
            this.bgtext = "Change Background";
        }
    };
    CalculatorPage.prototype.open = function (page) {
        if (page == "Home") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
        }
        if (page == "Profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile__["a" /* ProfilePage */]);
        }
        if (page == "Assignments") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_assignments_assignments__["a" /* AssignmentsPage */]);
        }
        if (page == "Timetable") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_timetable_timetable__["a" /* TimetablePage */]);
        }
    };
    CalculatorPage.prototype.datecount = function () {
        if (this.To == "??" || this.From == "??")
            return 0;
        this.days = 0;
        var date1 = this.From;
        var date2 = this.To;
        var mzero, dzero, end, year, mon, day;
        var start, stop;
        if (date1 > date2) {
            year = date2.substring(0, 4);
            mon = parseInt(date2.substring(5, 7));
            day = parseInt(date2.substring(8));
        }
        else {
            year = date1.substring(0, 4);
            mon = parseInt(date1.substring(5, 7));
            day = parseInt(date1.substring(8));
        }
        date1 = this.From.substring(0, 4) + this.From.substring(5, 7) + this.From.substring(8);
        date2 = this.To.substring(0, 4) + this.To.substring(5, 7) + this.To.substring(8);
        if (mon == 9 || mon == 4 || mon == 6 || mon == 11) {
            end = 30;
        }
        else if (mon == 2) {
            end = 28;
            if ((year % 4) == 0) {
                end++;
            }
        }
        else
            end = 31;
        if (date1 > date2) {
            start = date2;
            stop = date1;
        }
        else {
            start = date1;
            stop = date2;
        }
        while (start != stop) {
            this.days++;
            if (day != end) {
                day++;
            }
            else {
                day = 1;
                if (mon != 12) {
                    mon++;
                }
                else {
                    mon = 1;
                    year++;
                }
                if (mon == 9 || mon == 4 || mon == 6 || mon == 11) {
                    end = 30;
                }
                else if (mon == 2) {
                    end = 28;
                    if ((year % 4) == 0) {
                        end++;
                    }
                }
                else
                    end = 31;
            }
            if (mon <= 9)
                mzero = "0";
            else
                mzero = "";
            if (day <= 9)
                dzero = "0";
            else
                dzero = "";
            start = year + '' + mzero + mon + '' + dzero + day;
        }
        if (date1 > date2) {
            this.days = 0 - this.days;
        }
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\calculator\calculator.html"*/'<ion-header>\n  <ion-navbar color="royal">\n    <ion-title>Calculator\n      <span style="float:right"> <ion-icon name="{{Time.skyicon}}"></ion-icon> {{Time.myTime}} {{Time.sky}} </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="{{ Time.bgtheme }}">\n  <div id="case">\n    <!--Display Screen-->\n    <div id="display"> {{ ans }} </div>\n    <p>\n      <button class="b" (click)="clear()" style="width: 125px"> Clear </button>\n      <button class="b" (click)="delete()" style="font-size: 15px"> <ion-icon name="backspace"></ion-icon> </button>\n    </p>\n    <p> <!--First Row--> </p>\n    <button class="b" (click)="press(\'2\')"> 7 </button>\n    <button class="b" (click)="press(\'3\')"> 8 </button>\n    <button class="b" (click)="press(\'4\')"> 9 </button>\n    <button class="b" (click)="operation(\'5\')"> x </button>\n    <p> <!--Second Row--> </p>\n    <button class="b" (click)="press(\'6\')"> 4 </button>\n    <button class="b" (click)="press(\'7\')"> 5 </button>\n    <button class="b" (click)="press(\'8\')"> 6 </button>\n    <button class="b" (click)="operation(\'9\')"> - </button>\n    <p> <!--Third Row--> </p>\n    <button class="b" (click)="press(\'10\')"> 1 </button>\n    <button class="b" (click)="press(\'11\')"> 2 </button>\n    <button class="b" (click)="press(\'12\')"> 3 </button>\n    <button class="b" (click)="operation(\'13\')"> + </button>\n    <p> <!--Fourth Row--> </p><!--WIDTH:105PX-->\n    <button class="b" (click)="press(\'14\')" style="width:125px"> 0 </button>\n    <button class="b" (click)="calc(\'15\')"> = </button>\n    <button class="b" (click)="operation(\'16\')"> / </button>\n  </div>\n\n  <br>\n\n  <div align="center"><ion-card class="box" color="opaque"> Day Counter </ion-card></div>\n  <ion-item>\n    <ion-label color="royal">From</ion-label>\n    <ion-datetime min="{{currentyear - yrRange}}" max="{{currentyear + yrRange}}" displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="From" (ionChange)="datecount()"></ion-datetime>\n  </ion-item>\n  <ion-item no-lines>\n    <ion-label color="royal">To</ion-label>\n    <ion-datetime min="{{currentyear - yrRange}}" max="{{currentyear + yrRange}}" displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="To" (ionChange)="datecount()"></ion-datetime>\n  </ion-item>\n  <div align="center"><ion-card class="box" color="opaque"> {{ days }} Day<span *ngIf="days*days != 1">s</span> from {{ From }} to {{ To }} </ion-card></div>\n  <div align="center">\n    <button ion-button style="float:left" class="box" color="{{ Noti.card }}" (click)="setRange(-1)"> - </button>\n    <button ion-button style="width:50%" class="box" color="{{ Noti.card }}"> Range: {{yrRange}} year<span *ngIf="yrRange != 1">s</span> </button>\n    <button ion-button style="float:right" class="box" color="{{ Noti.card }}" (click)="setRange(+1)"> + </button>\n  </div>\n  \n  <br>\n\n  <div align="center" *ngIf="show">\n    <button class="bgswitch" *ngFor="let current of theme" ion-button color="dark" round (click)="changebg(current)" style="width: 150px;">\n      {{ current }}\n    </button>\n    <br>\n  </div>\n  \n  <div align="center">\n    <button class="bgswitch" (click)="showlist()" full ion-button color="royal"> {{ bgtext }} </button>\n  </div>\n\n  <br><br><br><br>\n\n  <ion-fab bottom center>\n    <button color="royal" ion-fab>Menu</button>\n    <ion-fab-list side="left">\n      <button color="fog" ion-fab (click)="open(\'Timetable\')"><ion-icon name="school"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Profile\')"><ion-icon name="person"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button color="fog" ion-fab color="dark"><ion-icon name="calculator"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Assignments\')"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <button color="fog" ion-fab (click)="open(\'Home\')"><ion-icon name="home"></ion-icon></button>\n    </ion-fab-list>  \n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\calculator\calculator.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_date_time_date_time__["a" /* DateTimeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_date_time_date_time__["a" /* DateTimeProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_navigation_navigation__["a" /* NavigationProvider */]) === "function" && _c || Object])
    ], CalculatorPage);
    return CalculatorPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetable_timetable__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, Time, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Time = Time;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.avatar = "Art/A.png";
        this.totalsub = 0;
        this.totalclub = 0;
        this.SubjectIcon = "book";
        this.ShowBirth = false;
        this.text = "Edit Profile Info";
        storage.get('AvatarList').then(function (val) {
            var item;
            if (val == undefined) {
                _this.images = ["Art/A.png"];
                for (var i = 1; i <= 9; i++) {
                    item = "Art/" + i + ".png";
                    _this.images.push(item);
                }
            }
            else {
                _this.images = val;
            }
        });
        storage.get('FName').then(function (val) {
            if (val == undefined)
                _this.presentAlert("Rewrite");
            else
                _this.FirstName = val;
        });
        storage.get('LName').then(function (val) { _this.LastName = val; });
        storage.get('bday').then(function (val) {
            _this.birthdate = val;
            if (val != undefined) {
                _this.findAge(val);
            }
        });
        storage.get('Level').then(function (val) { _this.Level = val; });
        storage.get('Year').then(function (val) { _this.Year = val; });
        storage.get('School').then(function (val) { _this.School = val; });
        storage.get('Class').then(function (val) { _this.Class = val; });
        storage.get('Gender').then(function (val) { _this.myGender = val; });
        storage.get('Avatar').then(function (val) {
            if (val == undefined)
                _this.avatar = "Art/A.png";
            else
                _this.avatar = val;
        });
        storage.get('UserSubjects').then(function (val) {
            if (val == undefined)
                _this.mySubjects = [];
            else
                _this.mySubjects = val;
        });
        storage.get('SubjectNum').then(function (val) {
            if (val == undefined)
                _this.subnum = [];
            else
                _this.subnum = val;
        });
        storage.get('TotalSubjects').then(function (val) {
            if (val == undefined)
                _this.totalsub = 0;
            else
                _this.totalsub = val;
        });
        storage.get('UserClubs').then(function (val) {
            if (val == undefined)
                _this.myExtras = [];
            else
                _this.myExtras = val;
        });
        storage.get('ClubNum').then(function (val) {
            if (val == undefined)
                _this.clubnum = [];
            else
                _this.clubnum = val;
        });
        storage.get('TotalClubs').then(function (val) {
            if (val == undefined)
                _this.totalclub = 0;
            else
                _this.totalclub = val;
        });
        Time.checktime();
    }
    ProfilePage.prototype.findAge = function (str) {
        this.currentyear = new Date().getFullYear();
        this.birthyear = str.substring(0, 4);
        this.Age = this.currentyear - this.birthyear;
        var bmonth = parseInt(str.substring(5, 7));
        var bday = parseInt(str.substring(8));
        var cmonth = new Date().getMonth() + 1;
        var cday = new Date().getDate();
        this.ShowBirth = false;
        if ((cmonth >= bmonth)) {
            if ((cmonth == bmonth) && (cday == bday)) {
                this.ShowBirth = true;
            }
            if ((cmonth == bmonth) && (cday < bday)) {
                this.Age--;
            }
        }
        else {
            this.Age--;
        }
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.toogleform = function () {
        if (this.show == true) {
            this.text = "Edit Profile Info";
            this.show = false;
        }
        else {
            this.text = "Cancel";
            this.show = true;
        }
    };
    ProfilePage.prototype.AddSubject = function (newtotal) {
        this.mySubjects.push("");
        this.subnum.push(newtotal);
        this.totalsub++;
    };
    ProfilePage.prototype.RemoveSubject = function () {
        if (this.totalsub != 0) {
            this.mySubjects.pop();
            this.subnum.pop();
            this.totalsub--;
        }
    };
    ProfilePage.prototype.AddExtra = function (newtotal) {
        this.myExtras.push("");
        this.clubnum.push(newtotal);
        this.totalclub++;
    };
    ProfilePage.prototype.RemoveExtra = function () {
        if (this.totalclub != 0) {
            this.myExtras.pop();
            this.clubnum.pop();
            this.totalclub--;
        }
    };
    ProfilePage.prototype.open = function (page) {
        if (page == "Calculator") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__["a" /* CalculatorPage */]);
        }
        if (page == "Home") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
        if (page == "Assignments") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_assignments_assignments__["a" /* AssignmentsPage */]);
        }
        if (page == "Timetable") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_timetable_timetable__["a" /* TimetablePage */]);
        }
    };
    ProfilePage.prototype.presentAlert = function (event) {
        var _this = this;
        var alert;
        if (event == "Update") {
            alert = this.alertCtrl.create({
                title: 'Profile Update',
                subTitle: 'Your changes have been saved',
                buttons: ['Dismiss'],
            });
        }
        if (event == "Birthday") {
            alert = this.alertCtrl.create({
                title: 'It\'s your birthday!',
                subTitle: 'Happy birthday ' + this.FirstName + '!',
                buttons: ['Thank you!'],
            });
        }
        if (event == "Rewrite") {
            alert = this.alertCtrl.create({
                title: 'Let\'s get started!',
                subTitle: 'Simply fill out the form and save once you\'re done',
                buttons: ['Okay!'],
            });
            this.toogleform();
        }
        if (event == "Delete") {
            alert = this.alertCtrl.create({
                title: 'Are you sure?',
                subTitle: 'All of your profile information and assignments will be lost.',
                buttons: [
                    { text: 'No' },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.DeleteInfo();
                        }
                    }
                ]
            });
        }
        alert.present();
    };
    ProfilePage.prototype.SaveInfo = function (type) {
        if (this.FirstName == "Lazy") {
            this.AutoFill();
        }
        this.text = "Edit Profile Info";
        this.show = false;
        this.storage.set('FName', this.FirstName);
        this.storage.set('LName', this.LastName);
        this.storage.set('bday', this.birthdate);
        this.storage.set('Phrase', this.Phrase);
        // this.storage.set('Age', this.Age);
        this.storage.set('Level', this.Level);
        this.storage.set('Year', this.Year);
        this.storage.set('School', this.School);
        this.storage.set('Class', this.Class);
        this.storage.set('Gender', this.myGender);
        this.storage.set('Avatar', this.avatar);
        this.storage.set('UserSubjects', this.mySubjects);
        this.storage.set('SubjectNum', this.subnum);
        this.storage.set('TotalSubjects', this.totalsub);
        this.storage.set('UserClubs', this.myExtras);
        this.storage.set('ClubNum', this.clubnum);
        this.storage.set('TotalClubs', this.totalclub);
        this.presentAlert(type);
    };
    ProfilePage.prototype.DeleteInfo = function () {
        this.FirstName = undefined;
        this.LastName = "";
        this.Phrase = "";
        this.birthdate = "";
        this.Age = undefined;
        this.Level = "University";
        this.Year = "";
        this.School = "";
        this.Class = "";
        this.myGender = "";
        this.avatar = "Art/A.png";
        this.mySubjects = [];
        this.subnum = [];
        this.totalsub = 0;
        this.myExtras = [];
        this.clubnum = [];
        this.totalclub = 0;
        this.storage.set('UserAssignments', []);
        this.storage.set('TotalAssignments', 0);
        this.storage.set('Keys', 0);
        var item;
        this.images = ["Art/A.png"];
        for (var i = 1; i <= 9; i++) {
            item = "Art/" + i + ".png";
            this.images.push(item);
        }
        this.storage.set('AvatarList', this.images);
        this.storage.set('StoreList', undefined);
        var events = [{
                mon: [{ i: 0, event: "Nothing" }],
                monnum: 0,
                tues: [{ i: 0, event: "Nothing" }],
                tuesnum: 0,
                wed: [{ i: 0, event: "Nothing" }],
                wednum: 0,
                thurs: [{ i: 0, event: "Nothing" }],
                thursnum: 0,
                fri: [{ i: 0, event: "Nothing" }],
                frinum: 0,
                sat: [{ i: 0, event: "Nothing" }],
                satnum: 0,
                sun: [{ i: 0, event: "Nothing" }],
                sunnum: 0,
            }];
        this.storage.set('Events', events);
        this.SaveInfo("Rewrite");
    };
    ProfilePage.prototype.AutoFill = function () {
        this.FirstName = "Xaria";
        this.LastName = "Prempeh";
        this.Age = 17;
        this.Level = "Secondary School";
        this.School = "Queen's College";
        this.Year = "Upper 6th Form";
        this.Class = "Upper 6 Science 2";
        this.birthdate = "2001-07-02";
        this.myGender = "Female";
        this.avatar = "Desserts/dessert-3.jpg";
        this.mySubjects = ["Physics", "Pure Mathematics", "Computer Science", "Caribbean Studies"];
        this.subnum = [1, 2, 3, 4];
        this.totalsub = 4;
        this.myExtras = ["Art Club", "Builders Club"];
        this.clubnum = [1, 2];
        this.totalclub = 2;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar color="sky">\n    <ion-title>\n      {{ FirstName }}\'s Profile\n      <span style="float:right"> <ion-icon name="{{ Time.skyicon }}"></ion-icon> {{Time.myTime}} {{Time.sky}} </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="{{Time.bgtheme}}">\n  \n  <div id="notice">\n    <button id="notice" *ngIf="ShowBirth" ion-button color="{{ Time.card }}" (click)="presentAlert(\'Birthday\')"> It\'s your birthday! </button>\n  </div>\n\n  <button ion-button full color="royal" (click)="toogleform()"> {{ text }} </button>\n  \n  <p> </p>\n  <div id="NewUser" *ngIf="show">\n    <ion-item>\n      <ion-label color="royal">Level of Education</ion-label>\n    </ion-item>\n    <ion-list radio-group [(ngModel)]="Level">\n      <ion-item>\n        <ion-label>  &emsp; University </ion-label>\n        <ion-radio value="University" color="secondary"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label> &emsp; Secondary School </ion-label>\n        <ion-radio value="Secondary School" color="secondary"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item>\n      <ion-label color="royal">First Name</ion-label>\n      <ion-input [(ngModel)]="FirstName" placeholder="Text Input"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="royal">Last Name</ion-label>\n      <ion-input [(ngModel)]="LastName" placeholder="Text Input"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="royal">Birthdate</ion-label>\n      <ion-datetime displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="birthdate" (ionChange)="findAge(birthdate)"></ion-datetime>\n    </ion-item>\n\n    <div *ngIf="Level == \'University\'">\n      <ion-item>\n        <ion-label color="royal">University</ion-label>\n        <ion-input [(ngModel)]="School" placeholder="Text Input"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="royal">Program</ion-label>\n        <ion-input [(ngModel)]="Class" placeholder="Text Input"></ion-input>\n      </ion-item>\n    </div>\n    \n    <div *ngIf="Level != \'University\'">          \n      <ion-item>\n        <ion-label color="royal">School</ion-label>\n        <ion-input [(ngModel)]="School" placeholder="Text Input"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="royal">Class</ion-label>\n        <ion-input [(ngModel)]="Class" placeholder="Text Input"></ion-input>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label color="royal">Year</ion-label>\n      <ion-input [(ngModel)]="Year" placeholder="Text Input"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="royal">Gender</ion-label>\n    </ion-item>\n    <ion-list radio-group [(ngModel)]="myGender">\n      <ion-item>\n        <ion-label> &emsp; Female</ion-label>\n        <ion-radio value="Female" color="secondary"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>  &emsp; Male</ion-label>\n        <ion-radio value="Male" color="secondary"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item *ngFor="let index of subnum">\n        <ion-label color="royal">Subject #{{ index }}</ion-label>\n        <ion-input [(ngModel)]="mySubjects[index - 1]" placeholder="Text Input"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="royal" (click)="AddSubject(totalsub + 1)"> Add Subject </button>\n    <button ion-button color="royal" *ngIf="totalsub != 0" (click)="RemoveSubject()"> Remove Subject </button>\n    \n    <p></p>\n    \n    <ion-list>\n      <ion-item *ngFor="let index of clubnum">\n        <ion-label color="royal">Activity #{{ index }}</ion-label>\n        <ion-input [(ngModel)]="myExtras[index - 1]" placeholder="Text Input"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button color="royal" (click)="AddExtra(totalclub + 1)"> Add Activity </button>\n    <button ion-button color="royal" *ngIf="totalclub != 0" (click)="RemoveExtra()"> Remove Activity </button>\n  \n    <p>\n    <ion-item>\n      <ion-label color="royal">Avatar</ion-label>\n    </ion-item>\n    </p>\n    <ion-list radio-group [(ngModel)]="avatar">\n      <ion-scroll scrollY="true" style="height:20vh">\n        <ion-item *ngFor="let index of images">\n          <ion-label> <img height=75px src="assets/imgs/{{ index }}"> </ion-label>\n          <ion-radio value="{{ index }}" color="secondary"></ion-radio>\n        </ion-item>\n      </ion-scroll>\n    </ion-list>\n\n\n    <p align="right">\n      <button ion-button color="royal" (click)="SaveInfo(\'Update\')"> Save Changes </button>\n    </p>\n  </div>\n  \n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/{{ avatar }}">\n      </ion-avatar>\n      <h2>{{ FirstName }} {{ LastName }}</h2>\n      <p> .:. {{ Year }} .:. </p>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <div *ngIf="Level == \'University\'">\n        <p> <b> University: </b> {{ School }} </p>\n        <p> <b> Program: </b> {{ Class }} </p>\n      </div>\n\n      <div *ngIf="Level != \'University\'">\n        <p> <b> School: </b> {{ School }} </p>\n        <p> <b> Class: </b> {{ Class }} </p>\n      </div>\n\n      <p> <b> Year: </b> {{ Year }} </p>\n      <p> <b> Birthday: </b> {{ birthdate }} </p>\n      <p> <b> Age: </b> {{ Age }} </p>\n      <p> <b> Gender: </b> {{ myGender}} </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <h2> <b> My Subjects </b> </h2>\n      <hr>\n      <p *ngFor="let current of mySubjects"> &emsp; <ion-icon name="{{ SubjectIcon }}"></ion-icon> {{ current }}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <h2> <b> My Extra Curricular Activities </b> </h2>\n      <hr>\n      <p *ngFor="let current of myExtras"> &emsp; <ion-icon name="clipboard"></ion-icon> {{ current }}</p>\n    </ion-card-content>\n  </ion-card>\n\n  <p>\n    <button ion-button color="{{ Time.card }}" (click)="Time.custombg()"> Change Background </button>\n    <button float-right ion-button color="{{ Time.card }}" (click)="presentAlert(\'Delete\')"> Delete Profile </button>\n  </p>\n  <br><br><br><br>\n\n  <ion-fab bottom center>\n    <button color="royal" ion-fab>Menu</button>\n    <ion-fab-list side="left">\n      <button color="fog" ion-fab (click)="open(\'Timetable\')"><ion-icon name="school"></ion-icon></button>\n      <button color="fog" ion-fab color="dark"><ion-icon name="person"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button color="fog" ion-fab (click)="open(\'Calculator\')"><ion-icon name="calculator"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Assignments\')"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <button color="fog" ion-fab (click)="open(\'Home\')"><ion-icon name="home"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__["a" /* DateTimeProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetable_timetable__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_navigation_navigation__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AssignmentsPage = /** @class */ (function () {
    function AssignmentsPage(navCtrl, Time, storage, actionSheetCtrl, alertCtrl, Noti) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Time = Time;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.Noti = Noti;
        this.currentyear = new Date().getFullYear();
        this.text = "Add Assignment";
        this.showAssignment = 'all';
        //5:48 CUSTOM TYPE TAGS
        this.dueyear = "0000";
        this.duemonth = "00";
        this.dueday = "00";
        this.showStore = false;
        this.StoreItems = [];
        this.defaultItems = [
            { title: "Art", price: 2, key: "A", content: "default", items: 4, ext: ".png" },
            { title: "Art", price: 4, key: "B", content: "default", items: 4, ext: ".png" },
            { title: "Art", price: 8, key: "C", content: "default", items: 4, ext: ".png" },
        ];
        this.sets = [
            { title: "Hearts", price: 4, key: "Y_Heart", content: "different coloured hearts I stole from an utaite video!", items: 5, ext: ".png" },
            { title: "People", price: 6, key: "Z_School", content: "different coloured images I also got from an utaite video!", items: 7, ext: ".png" },
            { title: "Utaites", price: 8, key: "utaite", content: "cute utaite related characters images!", items: 7, ext: ".png" },
            { title: "Mafumafu", price: 10, key: "mafu", content: "cute images of the utaite Mafumafu's character!", items: 7, ext: ".jpg" },
            { title: "Anime", price: 12, key: "anime", content: "cute anime pics! Featuring Mikaze Ai and Horimiya!", items: 7, ext: ".jpg" },
            // {title: "Nature", price: 12, key: "nature", content: "images of beautiful scenery!", items: 2, ext: ".png"},
            { title: "Nature", price: 12, key: "nature", content: "images of beautiful scenery!", items: 7, ext: ".jpg" },
            { title: "Desserts", price: 14, key: "dessert", content: "delicious desserts!", items: 11, ext: ".jpg" }
        ];
        this.images = [];
        storage.get('myTags').then(function (val) {
            // console.log("1st Retrieval" + val);
            if (val == undefined || val.length == 0) {
                _this.myTags = [
                    { tag: "Test", color: "hotpink" }, { tag: "Exam", color: "danger" },
                    { tag: "Assignment", color: "light" }, { tag: "Other", color: "royal" },
                ];
            }
            else {
                _this.myTags = val;
            }
        });
        storage.get('UserSubjects').then(function (UserSubjects) {
            _this.mySubjects = UserSubjects;
        });
        storage.get('TotalSubjects').then(function (val) {
            if (val == undefined || val == 0)
                _this.nosub = true;
            else
                _this.nosub = false;
        });
        storage.get('UserAssignments').then(function (val) {
            if (val == undefined)
                _this.myAssignments = [];
            else {
                _this.myAssignments = val;
                _this.shownAssignments = val;
            }
        });
        storage.get('TotalAssignments').then(function (val) {
            if (val == undefined)
                _this.total = 0;
            else {
                _this.total = val;
                _this.updatedays();
            }
        });
        storage.get('Keys').then(function (val) {
            if (val == undefined)
                _this.myPoints = 0;
            else
                _this.myPoints = val;
        });
        storage.get('StoreList').then(function (val) {
            if (val != undefined)
                _this.StoreItems = val;
            else
                _this.setDefaultSets();
            //  this.sortItems();
        });
        storage.get('AvatarList').then(function (val) {
            var item;
            if (val == undefined) {
                _this.images = ["Art\\A.png"];
                for (var i = 1; i <= 9; i++) {
                    item = "Art\\" + i + ".png";
                    _this.images.push(item);
                }
            }
            else {
                _this.images = val;
            }
        });
        Time.checktime();
    }
    AssignmentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AssignmentsPage');
    };
    AssignmentsPage.prototype.showAssign = function (label) {
        this.showAssignment = label;
        label = label.toLowerCase();
        if (label == 'all') {
            this.shownAssignments = this.myAssignments;
        }
        else if (label == "!overdue") {
            this.shownAssignments = [];
            for (var _i = 0, _a = this.myAssignments; _i < _a.length; _i++) {
                var task = _a[_i];
                if (task.daysleft >= 0)
                    this.shownAssignments.push(task);
            }
        }
        else if (label == "overdue") {
            this.shownAssignments = [];
            for (var _b = 0, _c = this.myAssignments; _b < _c.length; _b++) {
                var task = _c[_b];
                if (task.daysleft < 0)
                    this.shownAssignments.push(task);
            }
        }
        else {
            this.shownAssignments = [];
            for (var _d = 0, _e = this.myAssignments; _d < _e.length; _d++) {
                var task = _e[_d];
                if (task.type.toLowerCase() == label)
                    this.shownAssignments.push(task);
            }
        }
    };
    AssignmentsPage.prototype.toogleform = function (status) {
        if (status == "edit")
            this.edit = true;
        else
            this.edit = false;
        if (this.show == true) {
            this.text = "Add Assignment";
            this.show = false;
        }
        else {
            this.text = "Cancel";
            this.show = true;
        }
    };
    AssignmentsPage.prototype.addwork = function (status) {
        var countdown = this.Noti.countdays(this.Due);
        if (countdown == -1)
            countdown--;
        if (status == "new") {
            if (this.total != 0) {
                this.myAssignments.push({
                    id: this.total,
                    subject: this.subject,
                    task: this.LatestWork,
                    due: this.Due,
                    daysleft: countdown,
                    notice: this.Noti.reminder,
                    status: this.Noti.rstatus,
                    type: "blank",
                    typecolor: "blank",
                });
            }
            else {
                this.myAssignments = [{
                        id: this.total,
                        subject: this.subject,
                        task: this.LatestWork,
                        due: this.Due,
                        daysleft: countdown,
                        notice: this.Noti.reminder,
                        status: this.Noti.rstatus,
                        type: "blank",
                        typecolor: "blank",
                    }];
            }
            this.total++;
        }
        if (status == "edit") {
            var location = this.currentindex;
            var task = this.myAssignments[location];
            task = {
                id: task.id,
                subject: this.subject,
                task: this.LatestWork,
                due: this.Due,
                daysleft: countdown,
                notice: this.Noti.reminder,
                status: this.Noti.rstatus,
                type: task.type,
                typecolor: task.typecolor,
            };
            this.myAssignments.splice(location, 1, task);
        }
        this.sortbydate();
        this.savechanges();
        this.text = "Add Assignment";
        this.show = false;
        this.LatestWork = "";
    };
    AssignmentsPage.prototype.sortbydate = function () {
        var task = this.myAssignments;
        var temp, min;
        for (var j = 0; j < this.total - 1; j++) {
            min = j;
            for (var i = j + 1; i < this.total; i++) {
                if (task[min].daysleft > task[i].daysleft) {
                    min = i;
                }
            }
            temp = task[j];
            task[j] = task[min];
            task[min] = temp;
        }
        for (var i = 0; i < this.total; i++) {
            task[i].id = i;
            if (task[i].type == "blank") {
                task[i].type = "Assignment";
                task[i].typecolor = "light";
                for (var _i = 0, _a = this.myTags; _i < _a.length; _i++) {
                    var tag = _a[_i];
                    if (task[i].task != undefined && (task[i].task.toLowerCase().includes(tag.tag.toLowerCase()) || task[i].subject.toLowerCase().includes(tag.tag.toLowerCase()))) {
                        task[i].type = tag.tag;
                        task[i].typecolor = tag.color;
                    }
                }
            }
            // if (task[i].task != undefined && task[i].task.includes('Test')){
            //   task[i].type = "Test";
            //   task[i].typecolor = "danger";
            // }
            // if (task[i].task != undefined && task[i].task.includes('Exam')){
            //   task[i].type = "Exam";
            //   task[i].typecolor = "danger";
            // }
        }
    };
    AssignmentsPage.prototype.options = function (location) {
        var _this = this;
        var task = this.myAssignments[location];
        this.currentindex = location;
        var actionSheet = this.actionSheetCtrl.create({
            title: task.subject + ' Assignment: ' + task.task,
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Completed',
                    icon: 'checkmark',
                    handler: function () {
                        _this.removework(location, "complete");
                        //message: keep up the good work! You earned points!
                    }
                },
                {
                    text: 'Edit Details',
                    icon: 'create',
                    handler: function () {
                        _this.subject = task.subject;
                        _this.LatestWork = task.task;
                        _this.Due = task.due;
                        _this.toogleform("edit");
                        _this.edit = true;
                    }
                },
                {
                    text: 'Set Tag',
                    icon: 'filing',
                    handler: function () {
                        _this.setTag(task);
                    }
                },
                {
                    text: 'Postpone Due Date',
                    icon: 'calendar',
                    handler: function () {
                        _this.pickDate("year");
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: function () {
                        _this.warning("one");
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: 'close',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AssignmentsPage.prototype.removework = function (location, status) {
        var earned = this.myAssignments[location].daysleft + 1;
        if (status == "complete") {
            this.myPoints += (earned);
            this.storage.set('Keys', this.myPoints);
            this.reward(earned);
        }
        this.myAssignments.splice(location, 1);
        this.total--;
        for (var i = 0; i < this.total; i++) {
            this.myAssignments[i].id = i;
        }
        this.savechanges();
    };
    AssignmentsPage.prototype.clearwork = function () {
        this.total = 0;
        this.myAssignments = [];
        this.savechanges();
    };
    AssignmentsPage.prototype.savechanges = function () {
        this.storage.set('UserAssignments', this.myAssignments);
        this.storage.set('TotalAssignments', this.total);
        this.storage.set('myTags', this.myTags);
    };
    AssignmentsPage.prototype.open = function (page) {
        if (page == "Calculator") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__["a" /* CalculatorPage */]);
        }
        if (page == "Profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */]);
        }
        if (page == "Home") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        }
        if (page == "Timetable") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_timetable_timetable__["a" /* TimetablePage */]);
        }
    };
    AssignmentsPage.prototype.updatedays = function () {
        for (var i = 0; i < this.total; i++) {
            this.myAssignments[i].daysleft = this.Noti.countdays(this.myAssignments[i].due);
            this.myAssignments[i].notice = this.Noti.reminder;
            this.myAssignments[i].status = this.Noti.rstatus;
        }
        this.savechanges();
    };
    AssignmentsPage.prototype.pickDate = function (section) {
        var _this = this;
        var val;
        var prev;
        var alert = this.alertCtrl.create();
        if (section == "day") {
            alert.setTitle('Day');
            for (var i = 1; i <= 31; i++) {
                if (this.myAssignments[this.currentindex].due.substring(8) == i)
                    prev = true;
                else
                    prev = false;
                if (i < 10)
                    val = "0" + i;
                else
                    val = i;
                alert.addInput({ type: 'radio', label: val, value: val, checked: prev, });
            }
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    _this.dueday = data;
                    var newdue = _this.dueyear + '-' + _this.duemonth + '-' + _this.dueday;
                    var task = _this.myAssignments[_this.currentindex];
                    _this.postponeAll(task.due, newdue, task);
                    task.due = newdue;
                    _this.updatedays();
                    _this.sortbydate();
                }
            });
        }
        if (section == "month") {
            alert.setTitle('Month');
            var original = this.myAssignments[this.currentindex].due.substring(5, 7);
            if (original == "01") {
                var jan = true;
            }
            if (original == "02") {
                var feb = true;
            }
            if (original == "03") {
                var mar = true;
            }
            if (original == "04") {
                var apr = true;
            }
            if (original == "05") {
                var may = true;
            }
            if (original == "06") {
                var jun = true;
            }
            if (original == "07") {
                var jul = true;
            }
            if (original == "08") {
                var aug = true;
            }
            if (original == "09") {
                var sep = true;
            }
            if (original == "10") {
                var oct = true;
            }
            if (original == "11") {
                var nov = true;
            }
            if (original == "12") {
                var dec = true;
            }
            alert.addInput({ type: 'radio', label: 'January', value: '01', checked: jan, });
            alert.addInput({ type: 'radio', label: 'February', value: '02', checked: feb, });
            alert.addInput({ type: 'radio', label: 'March', value: '03', checked: mar, });
            alert.addInput({ type: 'radio', label: 'April', value: '04', checked: apr, });
            alert.addInput({ type: 'radio', label: 'May', value: '05', checked: may, });
            alert.addInput({ type: 'radio', label: 'June', value: '06', checked: jun, });
            alert.addInput({ type: 'radio', label: 'July', value: '07', checked: jul, });
            alert.addInput({ type: 'radio', label: 'August', value: '08', checked: aug, });
            alert.addInput({ type: 'radio', label: 'September', value: '09', checked: sep, });
            alert.addInput({ type: 'radio', label: 'October', value: '10', checked: oct, });
            alert.addInput({ type: 'radio', label: 'November', value: '11', checked: nov, });
            alert.addInput({ type: 'radio', label: 'December', value: '12', checked: dec, });
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    _this.duemonth = data;
                    _this.pickDate("day");
                }
            });
        }
        if (section == "year") {
            alert.setTitle('Year');
            for (var i = this.currentyear + 1; i >= this.currentyear; i--) {
                if (this.myAssignments[this.currentindex].due.substring(0, 4) == i)
                    prev = true;
                else
                    prev = false;
                val = i;
                alert.addInput({ type: 'radio', label: val, value: val, checked: prev, });
            }
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    _this.dueyear = data;
                    _this.pickDate("month");
                }
            });
        }
        alert.present();
    };
    AssignmentsPage.prototype.warning = function (amt) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Are you sure?',
            subTitle: 'You won\'t be able to get back your assignments once you delete them.',
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Delete',
                    handler: function () {
                        if (amt == "all")
                            _this.clearwork();
                        if (amt == "one")
                            _this.removework(_this.currentindex, "delete");
                    }
                }
            ]
        });
        alert.present();
    };
    AssignmentsPage.prototype.postponeAll = function (date, newdue, changed) {
        var _this = this;
        var alert = this.alertCtrl.create();
        var empty = true;
        for (var _i = 0, _a = this.myAssignments; _i < _a.length; _i++) {
            var task = _a[_i];
            if (task.due == date && task != changed) {
                alert.addInput({ type: 'checkbox', label: task.subject + " - " + task.task, value: task, checked: true });
                empty = false;
            }
        }
        if (empty)
            return; // End function early
        alert.setTitle('Postpone Others?');
        alert.setSubTitle("Should any other assignment due " + date + " also be postponed to " + newdue + "?");
        alert.setMessage("Deselect the ones you wish to remain unchanged.");
        alert.addButton({
            text: 'Postpone These Too',
            handler: function (data) {
                console.log(data);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var task = data_1[_i];
                    task.due = newdue;
                }
                _this.updatedays();
                _this.sortbydate();
            }
        });
        alert.addButton({
            text: 'No',
            handler: function (data) {
            }
        });
        alert.present();
    };
    AssignmentsPage.prototype.reward = function (amt) {
        var alert;
        var text;
        if (amt == 1)
            text = " key";
        else
            text = " keys";
        if (amt >= 0) {
            alert = this.alertCtrl.create({
                title: 'You just earned ' + amt + text,
                subTitle: 'Nice! You completed it right on time!',
                buttons: [{ text: 'Great!' },]
            });
        }
        else {
            alert = this.alertCtrl.create({
                title: 'You just lost ' + (0 - amt) + text + "...",
                subTitle: 'You didn\'t complete the assignment on time.',
                buttons: [{ text: 'Dismiss' },]
            });
        }
        alert.present();
    };
    AssignmentsPage.prototype.setDefaultSets = function () {
        // For every default set create the number of items in that set
        this.StoreItems = [];
        for (var _i = 0, _a = this.defaultItems; _i < _a.length; _i++) {
            var set = _a[_i];
            for (var i = 1; i <= set.items; i++)
                this.StoreItems.push({ id: this.StoreItems.length, folder: set.title, path: set.key + "-" + i + set.ext, status: "Not Owned", price: set.price });
        }
    };
    AssignmentsPage.prototype.restock = function () {
        // Removes sets already unlocked
        // for (let i = 12; i < this.StoreItems.length; i++)
        //   for (let s = 0; s < this.sets.length; s++)
        //     if (this.sets[s].search == this.StoreItems[i].link)
        //       this.sets.splice(s, 1);
        var _this = this;
        var menu = this.alertCtrl.create();
        menu.setTitle("The following image packs are available:");
        menu.setSubTitle("Opening a pack is free, but images must be purchased individually!");
        for (var i = 0; i < this.sets.length; i++) {
            menu.addInput({ type: 'radio', label: this.sets[i].title + " (" + this.sets[i].price + " keys)", value: '' + i });
        }
        if (this.sets.length == 0) {
            menu.setSubTitle("Nothing new here...");
            menu.addButton({
                text: "reset",
                handler: function () {
                    _this.removesets();
                }
            });
            menu.addButton({ text: 'Aw man...' });
        }
        else {
            menu.addButton({ text: "Cancel" });
            menu.addButton({
                text: "Open Pack",
                handler: function (data) {
                    var last = _this.StoreItems.length;
                    var pack = _this.sets[data];
                    for (var o = 1; o <= pack.items; o++) {
                        _this.StoreItems.push({
                            id: last++,
                            folder: pack.title,
                            path: pack.key + "-" + o + pack.ext,
                            status: "Not Owned",
                            price: pack.price,
                        });
                    }
                    _this.sets.splice(data, 1);
                    var alert = _this.alertCtrl.create();
                    alert.setTitle(pack.items + " new items have been added!");
                    alert.setSubTitle("Enjoy these " + pack.content);
                    alert.addButton({ text: 'Yay!' });
                    _this.storage.set('StoreList', _this.StoreItems);
                    alert.present();
                }
            });
        }
        menu.present();
    };
    AssignmentsPage.prototype.buy = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create();
        if (this.myPoints >= item.price) {
            alert.setTitle("Are you sure you want to purchase this for " + item.price + " keys?");
            alert.addButton({ text: 'Cancel' });
            alert.addButton({
                text: 'Purchase',
                handler: function () {
                    _this.images.splice(0, 0, item.folder + "/" + item.path);
                    _this.StoreItems[item.id].status = "Purchased";
                    _this.myPoints -= item.price;
                    _this.savepurchase();
                }
            });
        }
        else {
            alert.setTitle("You don't have enough keys to spend.");
            alert.addButton({ text: 'Cancel' });
        }
        alert.present();
    };
    AssignmentsPage.prototype.savepurchase = function () {
        this.storage.set('AvatarList', this.images);
        this.storage.set('StoreList', this.StoreItems);
        this.storage.set('Keys', this.myPoints);
    };
    AssignmentsPage.prototype.setTag = function (task) {
        this.editTag(task, "set tag");
    };
    AssignmentsPage.prototype.removesets = function () {
        var _this = this;
        var warning = this.alertCtrl.create();
        warning.setTitle("Are you sure?");
        warning.setSubTitle("All packs you opened will be removed and anything you purchased will be lost. Don't worry, your keys will be returned.");
        warning.addButton({ text: "No" });
        warning.addButton({
            text: "Yes",
            handler: function () {
                // var bin;
                // var last = this.StoreItems.length - 1;
                // for (let t = last; t > 11; t--){ //Goes through each item in store except default items
                //   bin = this.StoreItems.pop();
                for (var p = 10; p < _this.images.length; p++) {
                    for (var _i = 0, _a = _this.sets; _i < _a.length; _i++) {
                        var set = _a[_i];
                        if (_this.images[p].includes(set.title)) {
                            _this.myPoints += set.price;
                        }
                    }
                }
                // this.images.splice(10, this.images.length-9);
                _this.setDefaultSets(); //Loses purchased items... no keys back
                // this.StoreItems = undefined;
                _this.images = undefined; // To reset images
                _this.storage.set('StoreList', _this.StoreItems);
                _this.storage.set('AvatarList', _this.images);
                _this.storage.set('Keys', _this.myPoints);
            }
        });
        warning.present();
    };
    AssignmentsPage.prototype.editTag = function (tag, attr) {
        var _this = this;
        var alert = this.alertCtrl.create();
        if (attr == "name" || attr == "both") {
            alert.setTitle('Label Name');
            alert.addInput({ type: 'text', label: "Name", value: tag.tag });
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    tag.tag = data[0];
                    if (attr == "both")
                        _this.editTag(tag, "color");
                    else
                        _this.savechanges();
                }
            });
        }
        if (attr == "color") {
            var themes = ["primary", "secondary", "danger", "light", "dark", "fog", "royal", "sky", "gold", "pink", "hotpink", "orange", "clear", "opaque"];
            alert.setTitle('Label Colour');
            for (var _i = 0, themes_1 = themes; _i < themes_1.length; _i++) {
                var color = themes_1[_i];
                alert.addInput({ type: 'radio', label: color, value: color, checked: tag.color == color });
            }
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    tag.color = data;
                    _this.savechanges();
                }
            });
        }
        if (attr == "set tag") {
            alert.setTitle('Change Tag');
            for (var _a = 0, _b = this.myTags; _a < _b.length; _a++) {
                var tag2 = _b[_a];
                alert.addInput({ type: 'radio', label: tag2.tag, value: tag2, checked: tag2.tag == tag.type });
            }
            alert.addButton({
                text: 'OK',
                handler: function (data) {
                    tag.type = data.tag;
                    tag.typecolor = data.color;
                    _this.savechanges();
                }
            });
        }
        alert.present();
    };
    AssignmentsPage.prototype.tagOpts = function (tag) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: tag.tag + ' Label',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Edit Label Name',
                    icon: 'create',
                    handler: function () {
                        _this.editTag(tag, "name");
                    }
                },
                {
                    text: 'Edit Label Colour',
                    icon: 'color-palette',
                    handler: function () {
                        _this.editTag(tag, "color");
                    }
                },
                {
                    text: 'View Assignments',
                    icon: 'eye',
                    handler: function () {
                        _this.showAssign(tag.tag);
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: function () {
                        _this.myTags.splice(_this.myTags.indexOf(tag), 1);
                        _this.savechanges();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AssignmentsPage.prototype.addTag = function () {
        var newTag = { tag: "New", color: "primary" };
        this.myTags.push(newTag);
        this.editTag(newTag, "both");
        this.savechanges();
    };
    AssignmentsPage.prototype.help = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle("Tips & Tricks");
        alert.setSubTitle("Labels");
        alert.setMessage("Creating labels called <b>'all', 'overdue', and '!overdue'</b> work as shortcuts for filtering your assignments!" +
            "<p>If you have a label matching a keyword in your assignment task or subject, your assignment automatically receives that tag.");
        // alert.
        alert.present();
    };
    AssignmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-assignments',template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\assignments\assignments.html"*/'<ion-header>\n  <ion-navbar color="royal">\n    <ion-title> <span *ngIf="showStore==false"> Assignments </span> <span *ngIf="showStore"> Key Store </span>\n      ({{ myPoints }} <ion-icon name="key"></ion-icon>)\n      <span style="float:right"> <ion-icon name="{{Time.skyicon}}"></ion-icon> {{Time.myTime}} {{Time.sky}} </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="{{ Time.bgtheme }}">\n  <div align="center">\n    <ion-card class="box" color="{{ Time.card }}" style="width:75%">\n        {{ Time.Date }}\n    </ion-card>\n  </div>\n\n  <div *ngIf="showStore">\n    <button ion-button color="{{ Time.card }}" (click)="Time.custombg()"> Change Background </button>\n    <button ion-button color="{{Time.card}}" (click)="showStore=false"> Exit Store </button>\n    <ion-item color="{{ Time.card }}">\n      <ion-label>Profile Images</ion-label>\n    </ion-item>\n\n    <ion-list>\n      <ion-item *ngFor="let index of StoreItems" color="{{Time.card}}">\n        <ion-thumbnail item-start> <img src="assets/imgs/{{index.folder}}/{{index.path}}"> </ion-thumbnail>\n        <h2> {{ index.status }} </h2>\n        \n        <button *ngIf="index.status == \'Not Owned\'" ion-button clear item-end (click)="buy(index)">Buy for {{index.price}} <ion-icon name="key"></ion-icon></button>\n        <button *ngIf="index.status != \'Not Owned\'" ion-button clear item-end (click)="open(\'Profile\')">Visit Profile</button>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button color="{{Time.card}}" (click)="restock()"> Check for New Items </button>\n    <button ion-button color="{{Time.card}}" (click)="removesets()"> Remove Bonus Sets </button>\n    <br><br><br>\n  </div>\n\n  <div *ngIf="showStore==false">\n    <button ion-button color="royal" (click)="toogleform(\'new\')"> {{ text }} </button>\n\n    <div id="NewItem" *ngIf="show">\n      <ion-item color="{{ Time.card }}">\n        <ion-label>My Subjects</ion-label>\n      </ion-item>\n      <ion-item *ngIf="nosub">\n        <ion-label>You have not added any subjects!</ion-label>\n      </ion-item>\n\n      <ion-list radio-group [(ngModel)]="subject">\n        <ion-item *ngFor="let option of mySubjects">\n          <ion-label>{{ option }}</ion-label>\n          <ion-radio value="{{ option }}" color="secondary"></ion-radio>\n        </ion-item>\n      </ion-list>\n      <br>\n      <ion-list>\n        <ion-item>\n          <ion-label color="royal">Subject</ion-label>\n          <ion-input [(ngModel)]="subject" placeholder="Text Input"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="royal">Assignment</ion-label>\n          <ion-input [(ngModel)]="LatestWork" placeholder="Text Input"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color="royal">Due Date</ion-label>\n          <ion-datetime min="{{currentyear}}" max="{{currentyear + 1}}" displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="Due"></ion-datetime>\n        </ion-item>\n      </ion-list>\n\n      <p align="right" *ngIf="edit==false">\n        <button ion-button color="royal" (click)="addwork(\'new\')"> Done </button>\n      </p>\n\n      <p align="right" *ngIf="edit">\n        <button ion-button color="royal" (click)="addwork(\'edit\')"> Save Changes </button>\n      </p>\n    </div>\n    \n    <button ion-button color="danger" (click)="warning(\'all\')"> Clear All </button>\n    <button ion-button color="{{Time.card}}" (click)="Time.custombg()"> Change Background </button>\n    <button ion-button color="{{Time.card}}" (click)="showStore=true"> Open Store </button>\n    <!-- <button ion-button color="danger" (click)="showAssign(\'!overdue\')"> Hide Overdue </button>\n    <button ion-button color="royal" (click)="showAssign(\'all\')"> Show All </button> -->\n    <p></p>\n\n    <ion-list>\n      <button color="{{ Time.card }}" ion-item *ngFor="let index of shownAssignments; let i = index;" (click)="options(index.id)">\n        <b> {{i + 1}}. {{ index.subject }} </b>\n        <p> {{ index.task }} </p>\n        <p> Due: {{ index.due }} </p>\n          <p style="float:left"> <ion-badge color="{{index.typecolor}}" item-start> {{index.type}} </ion-badge> </p>\n          <p style="float:right"> {{ index.notice }} <ion-badge color="{{index.status}}" item-end>{{ index.daysleft + 1}}<ion-icon name="key"></ion-icon></ion-badge> </p>\n        </button>\n      </ion-list>\n\n    <br><br><br>\n    <ion-card class="box" color="{{ Time.card }}"> <span *ngIf="showAssignment == \'all\'">Your Labels</span> <span *ngIf="showAssignment != \'all\'">Showing {{showAssignment}}</span> </ion-card>\n    <button ion-button style="width: max-content;" *ngFor="let tag of myTags" color="{{tag.color}}" (click)="tagOpts(tag)"> {{tag.tag}} </button>\n    <button ion-button color="{{ Time.card }}" (click)="addTag()"> Add Tag </button>\n    <br><br><br><br>\n  </div>\n  \n  <ion-fab bottom center>\n    <button color="royal" ion-fab>Menu</button>\n    <ion-fab-list side="left">\n      <button color="fog" ion-fab (click)="open(\'Timetable\')"><ion-icon name="school"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Profile\')"><ion-icon name="person"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button color="fog" ion-fab (click)="open(\'Calculator\')"><ion-icon name="calculator"></ion-icon></button>\n      <button color="fog" ion-fab color="dark"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="top">\n      <button color="fog" ion-fab (click)="open(\'Home\')"><ion-icon name="home"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <ion-fab bottom left>\n    <button ion-fab color="{{Time.card}}" (click)="help()"><ion-icon name="help"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\assignments\assignments.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__["a" /* DateTimeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__["a" /* DateTimeProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__providers_navigation_navigation__["a" /* NavigationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_navigation_navigation__["a" /* NavigationProvider */]) === "function" && _f || Object])
    ], AssignmentsPage);
    return AssignmentsPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=assignments.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_navigation_navigation__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_calculator_calculator__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_assignments_assignments__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TimetablePage = /** @class */ (function () {
    function TimetablePage(navCtrl, Time, storage, alertCtrl, Noti) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.Time = Time;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.Noti = Noti;
        this.week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.monnum = 0;
        this.tuesnum = 0;
        this.wednum = 0;
        this.thursnum = 0;
        this.frinum = 0;
        this.satnum = 0;
        this.sunnum = 0;
        this.display = new Date().getDay();
        storage.get('UserSubjects').then(function (val) { _this.mySubjects = val; });
        storage.get('TotalSubjects').then(function (val) {
            if (val == undefined)
                _this.totalsub = 0;
            else
                _this.totalsub = val;
        });
        storage.get('UserClubs').then(function (val) { _this.myClubs = val; });
        storage.get('TotalClubs').then(function (val) {
            if (val == undefined)
                _this.totalclub = 0;
            else
                _this.totalclub = val;
        });
        Time.checktime();
        this.markcurrentday(new Date().getDay());
        storage.get('Events').then(function (val) {
            if (val == undefined) {
                _this.mon = [{ i: 0, event: "Nothing" }];
                _this.monnum = 0;
                _this.tues = [{ i: 0, event: "Nothing" }];
                _this.tuesnum = 0;
                _this.wed = [{ i: 0, event: "Nothing" }];
                _this.wednum = 0;
                _this.thurs = [{ i: 0, event: "Nothing" }];
                _this.thursnum = 0;
                _this.fri = [{ i: 0, event: "Nothing" }];
                _this.frinum = 0;
                _this.sat = [{ i: 0, event: "Nothing" }];
                _this.satnum = 0;
                _this.sun = [{ i: 0, event: "Nothing" }];
                _this.sunnum = 0;
            }
            else {
                _this.mon = val[0].mon;
                _this.monnum = val[0].monnum;
                _this.tues = val[0].tues;
                _this.tuesnum = val[0].tuesnum;
                _this.wed = val[0].wed;
                _this.wednum = val[0].wednum;
                _this.thurs = val[0].thurs;
                _this.thursnum = val[0].thursnum;
                _this.fri = val[0].fri;
                _this.frinum = val[0].frinum;
                _this.sat = val[0].sat;
                _this.satnum = val[0].satnum;
                _this.sun = val[0].sun;
                _this.sunnum = val[0].sunnum;
            }
        });
    }
    TimetablePage.prototype.add = function (day) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("What do you have planned?");
        alert.addInput({ type: 'radio', label: 'Study', value: 'Study ' });
        alert.addInput({ type: 'radio', label: 'Lessons', value: 'Lessons for ' });
        alert.addInput({ type: 'radio', label: 'Extra Curricular Activity', value: 'Go to ' });
        alert.addInput({ type: 'radio', label: 'Custom', value: 'Custom' });
        alert.addButton({ text: 'Cancel' });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.activity = data;
                if (data == "Go to " && _this.totalclub == 0) {
                    _this.error("club activities");
                }
                else if (data != "Go to " && data != "Custom" && _this.totalsub == 0) {
                    _this.error("subjects");
                }
                else
                    _this.nextinput(data, day);
            }
        });
        alert.present();
    };
    TimetablePage.prototype.error = function (type) {
        var alert = this.alertCtrl.create();
        alert.setTitle("No Options Available");
        alert.setSubTitle("It seems like you haven't added any " + type + " to choose from.");
        alert.addButton({ text: 'Cancel', });
        alert.present();
    };
    TimetablePage.prototype.nextinput = function (action, day) {
        var _this = this;
        var val;
        var alert = this.alertCtrl.create();
        if (action == "Study " || action == "Lessons for ") {
            alert.setTitle("Select a subject");
            for (var i = 0; i < this.totalsub; i++) {
                val = this.mySubjects[i];
                alert.addInput({ type: 'radio', label: val, value: val });
            }
        }
        if (action == "Go to ") {
            alert.setTitle("Select an activity");
            for (var i = 0; i < this.totalclub; i++) {
                val = this.myClubs[i];
                alert.addInput({ type: 'radio', label: val, value: val });
            }
        }
        if (action == "Custom") {
            alert.setTitle("Enter your activity");
            alert.setMessage("Examples: Take a break, do hobby");
            alert.addInput({ label: 'title', placeholder: 'Custom Activity' });
        }
        alert.addButton({ text: 'Cancel' });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.saveday(action, day, data);
            }
        });
        alert.present();
    };
    TimetablePage.prototype.changedisplay = function (num) {
        if (this.display != num)
            this.display = num;
        this.markcurrentday(this.display);
    };
    TimetablePage.prototype.remove = function (day, num) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle("Delete Activity");
        alert.setSubTitle("Are you sure?");
        alert.addButton({ text: "No" });
        alert.addButton({
            text: "Yes",
            handler: function () {
                _this.removeActivity(day, num);
            }
        });
        alert.present();
    };
    TimetablePage.prototype.removeActivity = function (day, num) {
        if (day == "mon") {
            this.mon.splice(num, 1);
            if (this.monnum != 0)
                this.monnum--;
            if (this.monnum == 0) {
                this.mon = [];
                this.mon.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.monnum; index++)
                    this.mon[index].i = index;
        }
        if (day == "tues") {
            this.tues.splice(num, 1);
            if (this.tuesnum != 0)
                this.tuesnum--;
            if (this.tuesnum == 0) {
                this.tues = [];
                this.tues.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.tuesnum; index++)
                    this.tues[index].i = index;
        }
        if (day == "wed") {
            this.wed.splice(num, 1);
            if (this.wednum != 0)
                this.wednum--;
            if (this.wednum == 0) {
                this.wed = [];
                this.wed.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.wednum; index++)
                    this.wed[index].i = index;
        }
        if (day == "thurs") {
            this.thurs.splice(num, 1);
            if (this.thursnum != 0)
                this.thursnum--;
            if (this.thursnum == 0) {
                this.thurs = [];
                this.thurs.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.thursnum; index++)
                    this.thurs[index].i = index;
        }
        if (day == "fri") {
            this.fri.splice(num, 1);
            if (this.frinum != 0)
                this.frinum--;
            if (this.frinum == 0) {
                this.fri = [];
                this.fri.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.frinum; index++)
                    this.fri[index].i = index;
        }
        if (day == "sat") {
            this.sat.splice(num, 1);
            if (this.satnum != 0)
                this.satnum--;
            if (this.satnum == 0) {
                this.sat = [];
                this.sat.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.satnum; index++)
                    this.sat[index].i = index;
        }
        if (day == "sun") {
            this.sun.splice(num, 1);
            if (this.sunnum != 0)
                this.sunnum--;
            if (this.sunnum == 0) {
                this.sun = [];
                this.sun.push({ i: 0, event: "Nothing" });
            }
            else
                for (var index = 0; index < this.sunnum; index++)
                    this.sun[index].i = index;
        }
        this.saveInfo();
    };
    TimetablePage.prototype.edit = function (day, num) {
        var _this = this;
        var to_change;
        if (day == "mon") {
            to_change = this.mon[num];
        }
        if (day == "tues") {
            to_change = this.tues[num];
        }
        if (day == "wed") {
            to_change = this.wed[num];
        }
        if (day == "thurs") {
            to_change = this.thurs[num];
        }
        if (day == "fri") {
            to_change = this.fri[num];
        }
        if (day == "sat") {
            to_change = this.sat[num];
        }
        if (day == "sun") {
            to_change = this.sun[num];
        }
        var alert = this.alertCtrl.create();
        alert.setTitle("Rename your activity");
        alert.setMessage("Examples: Take a break, do hobby");
        alert.addInput({ label: 'title', placeholder: 'Custom Activity', value: to_change.event });
        alert.addButton({ text: 'Cancel' });
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                var edit = data[0];
                to_change.event = edit;
                _this.saveInfo();
            }
        });
        alert.present();
    };
    TimetablePage.prototype.markcurrentday = function (k) {
        if (k == 0) {
            this.su = "primary";
            this.currentday = "sun";
        }
        else
            this.su = "";
        if (k == 1) {
            this.m = "primary";
            this.currentday = "mon";
        }
        else
            this.m = "";
        if (k == 2) {
            this.t = "primary";
            this.currentday = "tues";
        }
        else
            this.t = "";
        if (k == 3) {
            this.w = "primary";
            this.currentday = "wed";
        }
        else
            this.w = "";
        if (k == 4) {
            this.th = "primary";
            this.currentday = "thurs";
        }
        else
            this.th = "";
        if (k == 5) {
            this.f = "primary";
            this.currentday = "fri";
        }
        else
            this.f = "";
        if (k == 6) {
            this.s = "primary";
            this.currentday = "sat";
        }
        else
            this.s = "";
    };
    TimetablePage.prototype.saveInfo = function () {
        var events = [{
                mon: this.mon,
                monnum: this.monnum,
                tues: this.tues,
                tuesnum: this.tuesnum,
                wed: this.wed,
                wednum: this.wednum,
                thurs: this.thurs,
                thursnum: this.thursnum,
                fri: this.fri,
                frinum: this.frinum,
                sat: this.sat,
                satnum: this.satnum,
                sun: this.sun,
                sunnum: this.sunnum,
            }];
        this.storage.set('Events', events);
        this.Noti.Events(events);
    };
    TimetablePage.prototype.open = function (page) {
        if (page == "Calculator") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_calculator_calculator__["a" /* CalculatorPage */]);
        }
        if (page == "Home") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]);
        }
        if (page == "Assignments") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_assignments_assignments__["a" /* AssignmentsPage */]);
        }
        if (page == "Profile") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_profile_profile__["a" /* ProfilePage */]);
        }
    };
    TimetablePage.prototype.saveday = function (action, day, data) {
        if (action == "Custom") {
            action = '';
            data = data[0];
        }
        if (day == "mon") {
            if (this.monnum == 0)
                this.mon[0].event = action + data;
            else
                this.mon.push({ i: this.monnum, event: action + data });
            this.monnum++;
        }
        if (day == "tues") {
            if (this.tuesnum == 0)
                this.tues[0].event = action + data;
            else
                this.tues.push({ i: this.tuesnum, event: action + data });
            this.tuesnum++;
        }
        if (day == "wed") {
            if (this.wednum == 0)
                this.wed[0].event = action + data;
            else
                this.wed.push({ i: this.wednum, event: action + data });
            this.wednum++;
        }
        if (day == "thurs") {
            if (this.thursnum == 0)
                this.thurs[0].event = action + data;
            else
                this.thurs.push({ i: this.thursnum, event: action + data });
            this.thursnum++;
        }
        if (day == "fri") {
            if (this.frinum == 0)
                this.fri[0].event = action + data;
            else
                this.fri.push({ i: this.frinum, event: action + data });
            this.frinum++;
        }
        if (day == "sat") {
            if (this.satnum == 0)
                this.sat[0].event = action + data;
            else
                this.sat.push({ i: this.satnum, event: action + data });
            this.satnum++;
        }
        if (day == "sun") {
            if (this.sunnum == 0)
                this.sun[0].event = action + data;
            else
                this.sun.push({ i: this.sunnum, event: action + data });
            this.sunnum++;
        }
        this.saveInfo();
    };
    TimetablePage.prototype.help = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle("Tips & Tricks");
        alert.setSubTitle("Activities");
        alert.setMessage("To edit an activity <b>press down</b> on it. <p> To delete an activity <b>tap</b> it once!");
        alert.present();
    };
    TimetablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timetable',template:/*ion-inline-start:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\timetable\timetable.html"*/'<ion-header>\n  <ion-navbar color="sky">\n    <ion-title> Event Timetable\n      <span style="float:right"> <ion-icon name="{{ Time.skyicon }}"></ion-icon> {{Time.myTime}} {{Time.sky}} </span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="{{ Time.bgtheme }}">\n  <div align="center">\n    <ion-card center class="box" color="{{ Time.card }}"> {{ Time.Date }} </ion-card>\n  </div>\n\n  <div id="notice">\n    <button ion-button color="sky" (click)="add(currentday)"> <ion-icon name="add"> </ion-icon> &emsp; Add Activity to {{ week[display] }} </button>\n  </div>\n  <br>\n\n  <ion-list>\n    <button color="{{su}}" ion-item (click)="changedisplay(0)"> Sunday <ion-badge item-end>{{sunnum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==0">\n      <button ion-item (click)="remove(\'sun\', period.i)" (press)="edit(\'sun\', period.i)" color="{{Time.card}}" *ngFor="let period of sun"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{m}}" ion-item (click)="changedisplay(1)"> Monday <ion-badge item-end>{{monnum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==1">\n      <button ion-item (click)="remove(\'mon\', period.i)" (press)="edit(\'mon\', period.i)" color="{{Time.card}}" *ngFor="let period of mon"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{t}}" ion-item (click)="changedisplay(2)"> Tuesday <ion-badge item-end>{{tuesnum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==2">\n      <button ion-item (click)="remove(\'tues\', period.i)" (press)="edit(\'tues\', period.i)" color="{{Time.card}}" *ngFor="let period of tues"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{w}}" ion-item (click)="changedisplay(3)"> Wednesday <ion-badge item-end>{{wednum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==3">\n      <button ion-item (click)="remove(\'wed\', period.i)" (press)="edit(\'wed\', period.i)" color="{{Time.card}}" *ngFor="let period of wed"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{th}}" ion-item (click)="changedisplay(4)"> Thursday <ion-badge item-end>{{thursnum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==4">\n      <button ion-item (click)="remove(\'thurs\', period.i)" (press)="edit(\'thurs\', period.i)" color="{{Time.card}}" *ngFor="let period of thurs"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{f}}" ion-item (click)="changedisplay(5)"> Friday <ion-badge item-end>{{frinum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==5">\n      <button ion-item (click)="remove(\'fri\', period.i)" (press)="edit(\'fri\', period.i)" color="{{Time.card}}" *ngFor="let period of fri"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <ion-list>\n    <button color="{{s}}" ion-item (click)="changedisplay(6)"> Saturday <ion-badge item-end>{{satnum}} <ion-icon name="calendar"></ion-icon></ion-badge> </button>\n    <div *ngIf="display==6">\n      <button ion-item (click)="remove(\'sat\', period.i)" (press)="edit(\'sat\', period.i)" color="{{Time.card}}" *ngFor="let period of sat"> {{ period.event }} </button>\n    </div>\n  </ion-list>\n\n  <br><br>\n\n  <ion-fab bottom center>\n    <button color="royal" ion-fab>Menu</button>\n    <ion-fab-list side="left">\n      <button color="fog" ion-fab color="dark"><ion-icon name="school"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Profile\')"><ion-icon name="person"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button color="fog" ion-fab (click)="open(\'Calculator\')"><ion-icon name="calculator"></ion-icon></button>\n      <button color="fog" ion-fab (click)="open(\'Assignments\')"><ion-icon name="paper"></ion-icon></button>\n    </ion-fab-list>\n\n    <ion-fab-list side="top">\n        <button color="fog" ion-fab (click)="open(\'Home\')"><ion-icon name="home"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <ion-fab bottom left>\n    <button ion-fab color="{{Time.card}}" (click)="help()"><ion-icon name="help"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\xaria\Desktop\Harddrive\Final Project\Student App\src\pages\timetable\timetable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_date_time_date_time__["a" /* DateTimeProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_navigation_navigation__["a" /* NavigationProvider */]])
    ], TimetablePage);
    return TimetablePage;
}());

//# sourceMappingURL=timetable.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_time_date_time__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationProvider = /** @class */ (function () {
    function NavigationProvider(storage, alertCtrl, Time) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.Time = Time;
        this.ShowBirth = false;
        this.Date = new Date().toDateString();
        this.Holiday = false;
        console.log('Hello NavigationProvider Provider');
        this.getinfo();
        this.Events("blank");
    }
    NavigationProvider.prototype.Events = function (array) {
        var _this = this;
        var num, event, i;
        var display = new Date().getDay(); //not same as display in timetable
        if (array == "blank") {
            this.storage.get('Events').then(function (val) {
                if (val == undefined) {
                    num = 0;
                }
                else {
                    if (display == 0) {
                        num = val[0].sunnum;
                        event = val[0].sun;
                    }
                    if (display == 1) {
                        num = val[0].monnum;
                        event = val[0].mon;
                    }
                    if (display == 2) {
                        num = val[0].tuesnum;
                        event = val[0].tues;
                    }
                    if (display == 3) {
                        num = val[0].wednum;
                        event = val[0].wed;
                    }
                    if (display == 4) {
                        num = val[0].thursnum;
                        event = val[0].thurs;
                    }
                    if (display == 5) {
                        num = val[0].frinum;
                        event = val[0].fri;
                    }
                    if (display == 6) {
                        num = val[0].satnum;
                        event = val[0].sat;
                    }
                    _this.EventStatus = num;
                    _this.storage.get('ToDo').then(function (completed) {
                        if (completed == undefined || completed[0] != display) {
                            completed = [display];
                            for (i = 0; i < event.length; i++)
                                completed.push(false);
                        }
                        completed.splice(0, 1);
                        _this.myEvents = [];
                        for (i = 0; i < event.length; i++) {
                            _this.myEvents.push({
                                event: event[i],
                                done: completed[i],
                            });
                        }
                    });
                }
            });
        }
        else {
            if (display == 0)
                this.EventStatus = array[0].sunnum;
            if (display == 1)
                this.EventStatus = array[0].monnum;
            if (display == 2)
                this.EventStatus = array[0].tuesnum;
            if (display == 3)
                this.EventStatus = array[0].wednum;
            if (display == 4)
                this.EventStatus = array[0].thursnum;
            if (display == 5)
                this.EventStatus = array[0].frinum;
            if (display == 6)
                this.EventStatus = array[0].satnum;
        }
    };
    NavigationProvider.prototype.getinfo = function () {
        var _this = this;
        var bmonth, bday;
        var cmonth, cday;
        this.storage.get('bday').then(function (val) {
            if (val != undefined) {
                bmonth = val.substring(5, 7);
                bday = val.substring(8);
                cmonth = new Date().getMonth() + 1;
                cday = new Date().getDate();
                _this.ShowBirth = false;
                if ((cmonth == bmonth) && (cday == bday)) {
                    _this.ShowBirth = true;
                }
            }
            _this.Time.checktime();
            _this.card = _this.Time.card;
            _this.Date = new Date().toDateString();
            if (cmonth == 1 && cday == 1)
                _this.Holiday = "Happy New Year ";
            if (cmonth == 12 && cday == 25)
                _this.Holiday = "Merry Christmas ";
        });
        this.storage.get('FName').then(function (val) {
            _this.user = val;
        });
        this.storage.get('UserAssignments').then(function (val) {
            if (val == undefined)
                _this.myAssignments = [];
            else {
                _this.myAssignments = val;
            }
        });
        this.storage.get('TotalAssignments').then(function (val) {
            var text, counttmr;
            if (val == undefined)
                _this.total = 0;
            else {
                _this.total = val;
                for (var i = 0; i < _this.total; i++)
                    _this.myAssignments[i].daysleft = _this.countdays(_this.myAssignments[i].due);
                _this.numdue = 0;
                for (var test = 0; test < 2; test++) {
                    counttmr = 0;
                    if (test == 0)
                        text = "today!";
                    else
                        text = "tomorrow!";
                    for (var i = 0; i < _this.total; i++) {
                        if (_this.myAssignments[i].daysleft == test)
                            counttmr++;
                    }
                    _this.numdue += counttmr;
                    if (counttmr == 0) {
                        _this.myAssignments.push({
                            id: 10,
                            subject: 'Nothing',
                            task: 'Horray! You have nothing to complete for ' + text,
                            daysleft: test,
                            due: 20000101,
                            notice: 'blank',
                            status: 'blank',
                        });
                    }
                }
                counttmr = 0;
                for (var i = 0; i < _this.total; i++) {
                    if (_this.myAssignments[i].daysleft <= 7 && _this.myAssignments[i].daysleft > 1) {
                        counttmr++;
                        _this.numdue++;
                    }
                }
                if (counttmr == 0) {
                    _this.myAssignments.push({
                        id: 10,
                        subject: 'Nothing',
                        task: 'Horray! You have nothing to complete for the rest of the week!',
                        daysleft: 2,
                        due: 20000101,
                        notice: 'blank',
                        status: 'blank',
                    });
                }
            }
        });
    };
    NavigationProvider.prototype.presentAlert = function (event) {
        var alert = this.alertCtrl.create();
        if (event == "Birthday") {
            alert.setTitle('It\'s your birthday!');
            alert.setSubTitle('Happy birthday ' + this.user + '! I hope you have a fantastic one!');
            alert.addButton('Thank you!');
        }
        if (event == "Happy New Year ") {
            alert.setTitle('Happy New Year!');
            alert.setSubTitle(this.user + ', it\'s already ' + new Date().getFullYear() + '! Can you believe it?');
            alert.addButton('Time flies!');
        }
        if (event == "Merry Christmas ") {
            alert.setTitle('Merry Christmas!');
            alert.setSubTitle(this.user + ', I\'d like to wish you a merry Christmas!');
            alert.addButton('Thank you!');
        }
        alert.present();
    };
    NavigationProvider.prototype.DueAlert = function (assignment) {
        var sub;
        if (assignment.subject == "Nothing")
            sub = assignment.task;
        else
            sub = assignment.task + ' (' + assignment.notice + ')';
        var alert = this.alertCtrl.create({
            title: assignment.subject,
            subTitle: sub,
            buttons: ['Dismiss'],
        });
        alert.present();
    };
    NavigationProvider.prototype.countdays = function (date) {
        var days = 0;
        this.due = date.substring(0, 4) + date.substring(5, 7) + date.substring(8);
        var mzero, dzero;
        if (new Date().getDate() <= 9)
            dzero = "0";
        else
            dzero = "";
        if ((new Date().getMonth() + 1) <= 9)
            mzero = "0";
        else
            mzero = "";
        var day = new Date().getDate();
        var mon = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var end;
        if (mon == 9 || mon == 4 || mon == 6 || mon == 11) {
            end = 30;
        }
        else if (mon == 2) {
            end = 28;
            if ((year % 4) == 0) {
                end++;
            }
        }
        else
            end = 31;
        this.today = year + '' + mzero + mon + '' + dzero + day;
        var stop = this.due;
        var start = this.today;
        if (this.today > this.due) {
            start = this.due;
            stop = this.today;
            year = date.substring(0, 4);
            mon = parseInt(date.substring(5, 7));
            day = parseInt(date.substring(8));
        }
        while (start != stop) {
            days++;
            if (day < end) {
                day++; // 2:13AM 2nd Nov, 2019      (App froze on 1st Nov, checked Midnight, worked fine the day before)
            } // Possible cause is never had an overdue assignment on the 31st of month while current month is 30 max
            else {
                day = 1;
                if (mon != 12) {
                    mon++;
                }
                else {
                    mon = 1;
                    year++;
                }
                if (mon == 9 || mon == 4 || mon == 6 || mon == 11) {
                    end = 30;
                }
                else if (mon == 2) {
                    end = 28;
                    if ((year % 4) == 0) {
                        end++;
                    }
                }
                else
                    end = 31;
            }
            if (mon <= 9)
                mzero = "0";
            else
                mzero = "";
            if (day <= 9)
                dzero = "0";
            else
                dzero = "";
            start = year + '' + mzero + mon + '' + dzero + day;
        }
        if (this.today > this.due) {
            if (days == 1)
                this.reminder = days + " DAY OVERDUE!";
            else
                this.reminder = days + " DAYS OVERDUE!";
            this.rstatus = "danger";
            return -1 - days;
        }
        if (days == 0) {
            this.reminder = "Due today!";
            this.rstatus = "primary";
        }
        else if (days == 1) {
            this.reminder = days + " day left!";
            this.rstatus = "secondary";
        }
        else {
            this.reminder = days + " days left!";
            this.rstatus = "secondary";
        }
        return days;
    };
    NavigationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__date_time_date_time__["a" /* DateTimeProvider */]])
    ], NavigationProvider);
    return NavigationProvider;
}());

//# sourceMappingURL=navigation.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map