(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rn0":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "X76u");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "xFpS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/user.service */ "CcaC");






let LoginComponent = class LoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.message = '';
        this.userService.getLoginErrors().subscribe(error => {
            this.message = error;
        });
    }
    ngOnInit() {
        if (this.userService.getIsAuth()) {
            this.router.navigate(['/flightplan']);
        }
    }
    onLogin(form) {
        console.log(form.value.email + '' + form.value.password);
        if (form.invalid) {
            return;
        }
        this.userService.login(form.value.email, form.value.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\FlightPlannerTask\AngularFrontEnd\src\main.ts */"zUnb");


/***/ }),

/***/ "0si1":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/flights/flights.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card style=\"width: 40%;\">\n    <form [formGroup]=\"form\" (submit)=\"onSaveFlight()\" >\n        <table>\n            <tr>\n<mat-form-field appearance=\"fill\">\n    <mat-label>Origin</mat-label>\n    <mat-select formControlName=\"OriginControl\" required (selectionChange)=\"getDestinations($event.value)\">\n        <mat-option>--</mat-option>\n        <mat-option *ngFor=\"let origin of origins\" [value]=\"origin\">\n            {{origin.name}}\n        </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('OriginControl').invalid\">Please select an Origin.</mat-error>\n\n\n</mat-form-field>\n            </tr>\n            <tr>\n    <mat-form-field appearance=\"fill\">\n\n    <mat-label>Destination</mat-label>\n    <mat-select formControlName=\"DestinationControl\" required >\n        <mat-option>--</mat-option>\n        <mat-option *ngFor=\"let destination of destinations\" [value]=\"destination\">\n            {{destination.name}}\n        </mat-option>\n    </mat-select>\n        <mat-error *ngIf=\"form.get('DestinationControl').invalid\">Please select a Destination.</mat-error>\n    </mat-form-field>\n            </tr>\n            <tr>\n    <mat-form-field>\n        <mat-label>Cost</mat-label>\n        <input\n                matInput\n                type=\"number\"\n                formControlName=\"CostControl\"\n                placeholder=\"40000\"\n        >\n        <mat-error *ngIf=\"form.get('CostControl').invalid\">Please enter a Cost.</mat-error>\n    </mat-form-field>\n            </tr>\n            <tr>\n        <input type=\"submit\" value=\"Save Flight\">\n            </tr>\n        </table>\n    </form>\n\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\n        {{successMessage}}\n    </div>\n\n    <!-- Error message -->\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n        {{serverErrorMessages}}\n    </div>\n\n\n</mat-card>");

/***/ }),

/***/ "2Uoe":
/*!***************************************************!*\
  !*** ./src/app/admin/cities/cities.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-scroll-bar{\r\n    height:30vh;\r\n    overflow-y:scroll;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.custom-scroll-bar::-webkit-scrollbar{\r\n    width: 5px;\r\n}\r\n\r\n.custom-scroll-bar::-webkit-scrollbar-thumb{\r\n    background: rgba(0,0,0,.26);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiY2l0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXNjcm9sbC1iYXJ7XHJcbiAgICBoZWlnaHQ6MzB2aDtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbC1iYXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgd2lkdGg6IDVweDtcclxufVxyXG5cclxuLmN1c3RvbS1zY3JvbGwtYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjI2KTtcclxufSJdfQ== */");

/***/ }),

/***/ "2esG":
/*!*****************************************!*\
  !*** ./src/app/shared/admin.service.ts ***!
  \*****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "AytR");







let AdminService = class AdminService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.isadmin = false;
        this.origins = [];
        this.originsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.destinations = [];
        this.destinationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.selectedCity = {
            _id: '',
            name: '',
            country: '',
        };
    }
    login(userName, password) {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/admin/login', { userName, password })
            .subscribe(response => {
            this.isadmin = true;
            this.router.navigate(['/cities']).then();
        }, error => {
            console.log('invalid admin');
            this.isadmin = false;
            this.router.navigate(['/admin']).then();
        });
    }
    addCity(name, country) {
        console.log(name + '' + country);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/admin/city', { name, country });
    }
    addFlight(origin, destination, cost) {
        console.log(origin + '' + destination + '' + cost);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/admin/addflight', { origin, destination, cost });
    }
    getOrigins() {
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/admin/getOrigin')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((originData) => {
            return { origins: originData.cities.map((origin) => {
                    return {
                        name: origin.name,
                        _id: origin._id,
                    };
                }), maxCities: originData.maxCities };
        })) // change rterieving data
            .subscribe(transformedOriginsData => {
            this.origins = transformedOriginsData.origins;
            this.originsUpdated.next({
                origins: [...this.origins],
                maxCities: transformedOriginsData.maxCities
            });
        });
    }
    getOriginsUpdateListener() {
        return this.originsUpdated.asObservable();
    }
    getDestinations(id) {
        console.log(id);
        this.http
            .get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl + '/admin/getDestination/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((destinationData) => {
            return { destinations: destinationData.cities.map((destination) => {
                    return {
                        name: destination.name,
                        _id: destination._id,
                    };
                }), maxCities: destinationData.maxCities };
        })) // change rterieving data
            .subscribe(transformedDestinationsData => {
            this.destinations = transformedDestinationsData.destinations;
            this.destinationsUpdated.next({
                destinations: [...this.destinations],
                maxCities: transformedDestinationsData.maxCities
            });
        });
    }
    getDestinationsUpdateListener() {
        return this.destinationsUpdated.asObservable();
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AdminService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "3nXK":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "NP/T");
/* harmony import */ var _user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.css */ "hEVk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent.ctorParameters = () => [];
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserComponent);



/***/ }),

/***/ "8zNF":
/*!**************************************************!*\
  !*** ./src/app/admin/cities/cities.component.ts ***!
  \**************************************************/
/*! exports provided: CitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesComponent", function() { return CitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cities.component.html */ "CrY6");
/* harmony import */ var _cities_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities.component.css */ "2Uoe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");





let CitiesComponent = class CitiesComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.origins = [];
    }
    ngOnInit() {
        this.adminService.getOrigins();
        this.originSub = this.adminService.getOriginsUpdateListener()
            .subscribe((originData) => {
            this.origins = originData.origins;
        });
    }
    addCity(form) {
        if (form.invalid) {
            return;
        }
        this.adminService.addCity(form.value.cityName, form.value.countryname).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.adminService.getOrigins();
            this.resetForm(form);
        }, err => {
            this.serverErrorMessages = 'Something went wrong';
        });
    }
    resetForm(form) {
        this.adminService.selectedCity = {
            _id: '',
            name: '',
            country: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    }
};
CitiesComponent.ctorParameters = () => [
    { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
CitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cities',
        template: _raw_loader_cities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cities_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CitiesComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:3000/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CcaC":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");






let UserService = class UserService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.logInErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAuthenticated = false;
        this.isadvertiserAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
    }
    getLoginErrors() {
        return this.logInErrorSubject;
    }
    getToken() {
        return this.token;
    }
    getName() {
        return localStorage.getItem('username');
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getUserId() {
        return this.userId;
    }
    getMessage() {
        console.log(this.message);
        return this.message;
    }
    postUser(user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/user/register', user);
    }
    login(email, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/user/login', { email, password })
            .subscribe(response => {
            const token = response.token;
            console.log(response);
            this.token = token;
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userN = response.username;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + (expiresInDuration * 100000));
                this.saveAuthData(token, expirationDate, this.userId, this.userN);
                this.message = '';
                this.logInErrorSubject.next(this.message);
                this.router.navigate(['/flightplan']).then();
            }
        }, error => {
            this.message = 'invalid Email or Password';
            this.logInErrorSubject.next(this.message);
            console.log('error');
        });
    }
    setAuthTimer(duration) {
        console.log('Setting timer:' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 100000);
    }
    saveAuthData(token, expirationDate, userId, userNam) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('username', userNam);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('username');
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.userN = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "Cp0R":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "CcaC");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "CrY6":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/cities/cities.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mat-card style=\"width: 40%;\">\r\n    <form #cityForm=\"ngForm\" (ngSubmit)=\"cityForm.valid && addCity(cityForm)\">\r\n        <input type=\"text\" #cityName=\"ngModel\" [(ngModel)]=\"adminService.selectedCity.name\" name=\"cityName\" placeholder=\"City Name\"\r\n               required  [ngClass]=\"{'invalid-textbox' :cityForm.submitted && !cityName.valid }\">\r\n        <div *ngIf=\"cityForm.submitted && !cityName.valid\">\r\n            <label class=\"validation-message\">This field is required.</label>\r\n        </div>\r\n        <input type=\"text\" #countryname=\"ngModel\" [(ngModel)]=\"adminService.selectedCity.country\" name=\"countryname\" placeholder=\"Country Name\"\r\n                required [ngClass]=\"{'invalid-textbox' :cityForm.submitted && !countryname.valid }\">\r\n        <div *ngIf=\"cityForm.submitted && countryname.errors\">\r\n            <label *ngIf=\"countryname.errors.required\" class=\"validation-message\">This field is required.</label>\r\n           </div>\r\n        <input type=\"submit\" value=\"Add City\">\r\n    </form>\r\n\r\n    <!-- Success message -->\r\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\r\n        Saved successfully\r\n    </div>\r\n\r\n    <!-- Error message -->\r\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\r\n        {{serverErrorMessages}}\r\n    </div>\r\n\r\n    <mat-list role=\"list\" class=\"custom-scroll-bar\">\r\n        <mat-list-item *ngFor=\"let item of origins\"> {{item.name}}</mat-list-item>\r\n    </mat-list>\r\n</mat-card>\r\n");

/***/ }),

/***/ "Iyt7":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.ts ***!
  \************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin-login.component.html */ "Uxgr");
/* harmony import */ var _admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-login.component.css */ "tude");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");





let AdminLoginComponent = class AdminLoginComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnInit() {
    }
    onLogin(form) {
        if (form.invalid) {
            return;
        }
        this.adminService.login(form.value.email, form.value.password);
    }
};
AdminLoginComponent.ctorParameters = () => [
    { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
];
AdminLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-login',
        template: _raw_loader_admin_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminLoginComponent);



/***/ }),

/***/ "JEc0":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/flight-plan/flight-plan.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card style=\"width: 40%;\">\n    <form [formGroup]=\"form\" (submit)=\"getPlans\" >\n        <table>\n            <tr>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Origin</mat-label>\n                    <mat-select formControlName=\"OriginControl\" required (selectionChange)=\"getDestinations($event.value)\">\n                        <mat-option>--</mat-option>\n                        <mat-option *ngFor=\"let origin of origins\" [value]=\"origin\">\n                            {{origin.name}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"form.get('OriginControl').invalid\">Please select an Origin.</mat-error>\n\n\n                </mat-form-field>\n            </tr>\n            <tr>\n                <mat-form-field appearance=\"fill\">\n\n                    <mat-label>Destination</mat-label>\n                    <mat-select formControlName=\"DestinationControl\" required >\n                        <mat-option>--</mat-option>\n                        <mat-option *ngFor=\"let destination of destinations\" [value]=\"destination\">\n                            {{destination.name}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"form.get('DestinationControl').invalid\">Please select a Destination.</mat-error>\n                </mat-form-field>\n            </tr>\n\n            <tr>\n                <input type=\"submit\" value=\"Generate Plan\">\n            </tr>\n        </table>\n    </form>\n\n    <div class=\"success\" *ngIf=\"showSucessMessage\">\n        {{successMessage}}\n    </div>\n\n    <!-- Error message -->\n    <div class=\"alert\" *ngIf=\"serverErrorMessages\">\n        {{serverErrorMessages}}\n    </div>\n\n\n</mat-card>");

/***/ }),

/***/ "NP/T":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper fadeInDown\">\n    <div id=\"formContent\">\n        <h2 class=\"inactive underlineHover\">User</h2>\n        <router-outlet></router-outlet>\n    </div>\n</div>");

/***/ }),

/***/ "PwBB":
/*!****************************************************!*\
  !*** ./src/app/admin/flights/flights.component.ts ***!
  \****************************************************/
/*! exports provided: FlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightsComponent", function() { return FlightsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_flights_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./flights.component.html */ "0si1");
/* harmony import */ var _flights_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flights.component.css */ "RagP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");






let FlightsComponent = class FlightsComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.origins = [];
        this.destinations = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            OriginControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            DestinationControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            CostControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
        this.adminService.getOrigins();
        this.originSub = this.adminService.getOriginsUpdateListener()
            .subscribe((originData) => {
            this.origins = originData.origins;
        });
    }
    getDestinations(event) {
        this.adminService.getDestinations(event._id);
        this.destinationSub = this.adminService.getDestinationsUpdateListener()
            .subscribe((destinationData) => {
            this.destinations = destinationData.destinations;
        });
    }
    onSaveFlight() {
        if (this.form.invalid) {
            return;
        }
        this.adminService.addFlight(this.form.value.OriginControl._id, this.form.value.DestinationControl._id, this.form.value.CostControl).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.form.reset();
        }, err => {
            this.serverErrorMessages = 'Something went wrong';
        });
    }
};
FlightsComponent.ctorParameters = () => [
    { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
];
FlightsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flights',
        template: _raw_loader_flights_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_flights_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FlightsComponent);



/***/ }),

/***/ "RagP":
/*!*****************************************************!*\
  !*** ./src/app/admin/flights/flights.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGlnaHRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "SL0s":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\">\n    <div id=\"formContent\">\n        <h2 class=\"inactive underlineHover\">Admin</h2>\n        <router-outlet></router-outlet>\n    </div>\n</div>");

/***/ }),

/***/ "SZmd":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.component.html */ "q12R");
/* harmony import */ var _sign_up_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component.css */ "fPxl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/user.service */ "CcaC");





let SignUpComponent = class SignUpComponent {
    constructor(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        this.userService.postUser(form.value).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.resetForm(form);
        }, err => {
            if (err.status === 422) {
                this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                this.serverErrorMessages = 'Something went wrong';
        });
    }
    resetForm(form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [_sign_up_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignUpComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AngularFrontEnd';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "SL0s");
/* harmony import */ var _admin_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.css */ "yP50");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent.ctorParameters = () => [];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdminComponent);



/***/ }),

/***/ "Ugab":
/*!********************************************!*\
  !*** ./src/app/shared/auth-interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "CcaC");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "Uxgr":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-login/admin-login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n    <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" >\n            <input\n                    type=\"text\"\n                    placeholder=\"admin username\"\n                    name=\"email\"\n                    ngModel\n                    #emailInput=\"ngModel\"\n                    required\n\n            >\n        <div *ngIf=\"loginForm.submitted && !emailInput.valid\">\n            <label class=\"validation-message\">This field is required.</label>\n        </div>\n            <input\n                    type=\"password\"\n                    placeholder=\"Password\"\n                    name=\"password\"\n                    ngModel\n                    #passwordInput=\"ngModel\"\n                    required\n\n            >\n        <div *ngIf=\"loginForm.submitted && passwordInput.errors\">\n            <label *ngIf=\"passwordInput.errors.required\" class=\"validation-message\">This field is required.</label>\n        </div>\n\n        <input type=\"submit\" value=\"Login\">\n\n    </form>");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "X76u":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onLogin(signUpForm)\">\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n           required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n    <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n           minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n    <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Login\">\n</form>\n\n\n<!-- Error message -->\n<br/>\n<p style=\"color: darkred;\">{{message}}</p>\n<br/>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/user.service */ "CcaC");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/auth-interceptor */ "Ugab");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-auto-scroll */ "C7wj");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/cities/cities.component */ "8zNF");
/* harmony import */ var _admin_flights_flights_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/flights/flights.component */ "PwBB");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_flight_plan_flight_plan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/flight-plan/flight-plan.component */ "ddat");

//builtin imports













//components









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_15__["UserComponent"],
            _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
            _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_18__["AdminLoginComponent"],
            _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_19__["CitiesComponent"],
            _admin_flights_flights_component__WEBPACK_IMPORTED_MODULE_20__["FlightsComponent"],
            _user_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            _user_flight_plan_flight_plan_component__WEBPACK_IMPORTED_MODULE_22__["FlightPlanComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            ngx_auto_scroll__WEBPACK_IMPORTED_MODULE_12__["NgxAutoScrollModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptor"], multi: true },
            _shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZU6k":
/*!************************************************************!*\
  !*** ./src/app/user/flight-plan/flight-plan.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbGlnaHQtcGxhbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "ddat":
/*!***********************************************************!*\
  !*** ./src/app/user/flight-plan/flight-plan.component.ts ***!
  \***********************************************************/
/*! exports provided: FlightPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightPlanComponent", function() { return FlightPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_flight_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./flight-plan.component.html */ "JEc0");
/* harmony import */ var _flight_plan_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight-plan.component.css */ "ZU6k");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/admin.service */ "2esG");






let FlightPlanComponent = class FlightPlanComponent {
    constructor(adminService) {
        this.adminService = adminService;
        this.origins = [];
        this.destinations = [];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            OriginControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            DestinationControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            CostControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
        this.adminService.getOrigins();
        this.originSub = this.adminService.getOriginsUpdateListener()
            .subscribe((originData) => {
            this.origins = originData.origins;
        });
    }
    getDestinations(event) {
        this.adminService.getDestinations(event._id);
        this.destinationSub = this.adminService.getDestinationsUpdateListener()
            .subscribe((destinationData) => {
            this.destinations = destinationData.destinations;
        });
    }
};
FlightPlanComponent.ctorParameters = () => [
    { type: _shared_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] }
];
FlightPlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flight-plan',
        template: _raw_loader_flight_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_flight_plan_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FlightPlanComponent);



/***/ }),

/***/ "fPxl":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "hEVk":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "q12R":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/sign-up/sign-up.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n    <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\n           required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\">\n    <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n    </div>\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n           required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n    <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n           minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n    <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n    Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n</div>");

/***/ }),

/***/ "tude":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-login/admin-login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "SZmd");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "3nXK");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin-login/admin-login.component */ "Iyt7");
/* harmony import */ var _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/cities/cities.component */ "8zNF");
/* harmony import */ var _admin_flights_flights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/flights/flights.component */ "PwBB");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/login/login.component */ "+rn0");
/* harmony import */ var _user_flight_plan_flight_plan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/flight-plan/flight-plan.component */ "ddat");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/auth.guard */ "Cp0R");












const routes = [
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        children: [{
                path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
            }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        children: [{
                path: '', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            }]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"],
        children: [{
                path: '', component: _admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"]
            }]
    },
    {
        path: 'cities', component: _admin_cities_cities_component__WEBPACK_IMPORTED_MODULE_7__["CitiesComponent"]
    },
    {
        path: 'flights', component: _admin_flights_flights_component__WEBPACK_IMPORTED_MODULE_8__["FlightsComponent"]
    },
    {
        path: 'flightplan', component: _user_flight_plan_flight_plan_component__WEBPACK_IMPORTED_MODULE_10__["FlightPlanComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xFpS":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "yP50":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map