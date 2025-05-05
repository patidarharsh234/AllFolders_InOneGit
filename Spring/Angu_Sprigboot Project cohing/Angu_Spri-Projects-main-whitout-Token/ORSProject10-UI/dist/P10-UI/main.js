(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");








var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .app {\n    margin: 48px;\n  }\n  \n  .buttons {\n    display: flex;\n    max-width: 500px;\n    justify-content: space-evenly;\n    margin-bottom: 48px;\n\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYXBwIHtcbiAgICBtYXJnaW46IDQ4cHg7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxuICB9XG5cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_14__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_13__["DataValidator"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<br> <br> <br><br> <br><br> <br>\n<h1 align=\"center\">\n    <b>\n        <font size=\"10px\" color=\"navy\">Welcome to ORS</font>\n    </b>\n</h1>\n<br> <br> <br> <br> <br> <br> <br>\n<br> <br> <br> <br> <br> <br> <br>\n<br> <br> <br>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    background-color: White;\n    color: black;\n    text-align: center;\n  }\n\n  .dark-hr {\n    border-color: darkgray;\n  }\n</style>\n<div class=\"footer\">\n  <hr class=\"dark-hr\">\n  <h4>\n    <strong>Copyrights &copy; Rays Technologies</strong>\n  </h4>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(httpClient) {
        this.httpClient = httpClient;
    }
    HttpServiceService.prototype.get = function (endpoint, callback) {
        return this.httpClient.get(endpoint).subscribe(function (data) {
            console.log('get data => ', data);
            callback(data);
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        return this.httpClient.post(endpoint, bean).subscribe(function (data) {
            console.log('post data => ', data);
            callback(data);
        });
    };
    HttpServiceService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .error {\n    color: red;\n    font-weight: bold;\n  }\n\n  .success {\n    color: green;\n    font-weight: bold;\n  }\n\n  input,\n  select {\n    width: 250px;\n  }\n\n  th,\n  td {\n    padding: 5px;\n  }\n</style>\n<br><br>\n<div align=\"center\">\n  <h1 style=\"color: navy;\">Login</h1>\n  <div style=\"height: 15px; margin-bottom: 12px\" align=\"center\" class=\"error\" *ngIf=\"form.error\">\n    {{ form.message }}\n  </div>\n  <table>\n    <tr>\n      <th>Login ID :</th>\n      <td><input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" /> </td>\n      <td *ngIf=\"inputerror.loginId != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.loginId}}\n      </td>\n    </tr>\n    <tr>\n      <th>Password :</th>\n      <td><input type=\"text\" name=\"password\" [(ngModel)]=\"form.password\" /> </td>\n      <td *ngIf=\"inputerror.password != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.password}}\n      </td>\n    </tr>\n    <tr>\n      <th></th>\n      <td>\n        <button (click)=\"signIn()\" style=\"margin-right: 5px;\">signIn</button>\n        <button (click)=\"signUp()\">signUp</button>\n      </td>\n    </tr>\n  </table>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, httpService, dataValidator) {
        this.router = router;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.form = {
            error: false,
            loginId: '',
            password: '',
            message: ''
        };
        this.inputerror = {};
        this.message = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signIn = function () {
        var self = this;
        this.httpService.post('http://localhost:8080/Auth/login', this.form, function (res) {
            self.form.message = '';
            self.inputerror = {};
            self.form.error = !res.success;
            if (self.dataValidator.isNotNullObject(res.result.inputerror)) {
                self.inputerror = res.result.inputerror;
            }
            if (self.dataValidator.isNotNullObject(res.result.message)) {
                self.form.message = res.result.message;
            }
            if (res.success) {
                localStorage.setItem("fname", res.result.data.firstName);
                localStorage.setItem("role", res.result.data.roleName);
                self.router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent.prototype.signUp = function () {
        this.router.navigateByUrl('/signup');
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .error {\n    color: red;\n    font-weight: bold;\n  }\n\n  .success {\n    color: green;\n    font-weight: bold;\n  }\n\n  input,\n  select {\n    width: 250px;\n  }\n\n  th,\n  td {\n    padding: 5px;\n  }\n</style>\n<div align=\"center\">\n  <h2 style=\"color: navy\">User Registration</h2>\n  <div style=\"height: 15px; margin-bottom: 12px\" align=\"center\" class=\"success\" *ngIf=\"form.message\">\n    {{ form.message }}\n  </div>\n  <table>\n    <tr>\n      <th>first Name :</th>\n      <td><input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" /> </td>\n      <td *ngIf=\"inputerror.firstName != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.firstName}}\n      </td>\n    </tr>\n    <tr>\n      <th>Last Name :</th>\n      <td><input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" /> </td>\n      <td *ngIf=\"inputerror.lastName != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.lastName}}\n      </td>\n    </tr>\n    <tr>\n      <th>Login ID :</th>\n      <td><input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" /> </td>\n      <td *ngIf=\"inputerror.loginId != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.loginId}}\n      </td>\n    </tr>\n    <tr>\n      <th>Password :</th>\n      <td><input type=\"text\" name=\"password\" [(ngModel)]=\"form.data.password\" /> </td>\n      <td *ngIf=\"inputerror.password != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.password}}\n      </td>\n    </tr>\n    <tr>\n      <th>DOB :</th>\n      <td><input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" /> </td>\n    </tr>\n    <tr>\n      <th></th>\n      <td><button (click)=\"signUp()\">signUp</button></td>\n    </tr>\n  </table>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(httpService, dataValidator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.form = {
            data: { id: null },
            message: ''
        };
        this.inputerror = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        var self = this;
        this.httpService.post('http://localhost:8080/Auth/signUp', this.form.data, function (res) {
            self.form.message = '';
            self.inputerror = {};
            if (self.dataValidator.isNotNullObject(res.result.inputerror)) {
                self.inputerror = res.result.inputerror;
            }
            if (self.dataValidator.isNotNullObject(res.result.message)) {
                self.form.message = res.result.message;
            }
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .dark-hr {\n    border-color: darkgray;\n  }\n</style>\n<table width=\"100%\" border=\"0\">\n  <tr>\n    <td width=\"90%\">\n      <a href=\"/dashboard\"><b>Dashboard</b></a> |\n      <ng-container *ngIf=\"isLogin(); else el\">\n        <a (click)=\"logout()\">\n          <font color=\"blue\"><b>Logout</b></font>\n        </a>\n      </ng-container>\n      <ng-template #el>\n        <a href=\"/login\"><b>Login</b></a>\n      </ng-template>\n    </td>\n    <td rowspan=\"2\">\n      <a href=\"/dashboard\">\n        <img src=\"assets\\files\\logo.png\" height=\"25px\" width=\"120px\" alt=\"Logo\">\n      </a>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <ng-container *ngIf=\"isLogin(); else elseBlock\">\n        <a href=\"/login\">\n          <font color=\"black\"><b>Hi, {{form.data.fname }} ({{form.data.role}})</b></font>\n        </a> |\n        <a href=\"/user\"><b>Add User</b></a> |\n        <a href=\"/userlist\"><b>User List</b></a>\n      </ng-container>\n      <ng-template #elseBlock>\n        <b>Hi, Guest</b><br>\n      </ng-template>\n    </td>\n  </tr>\n</table>\n<hr class=\"dark-hr\">"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
        this.form = {
            data: { id: null, fname: null, role: null }
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.role = localStorage.getItem("role");
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div align=\"center\" style=\"padding-top: 1%; padding-bottom:4%;\">\n  <h1 align=\"center\" style=\"margin-bottom: -15; color: navy;\">User\n    List</h1>\n  <table style=\"width: 30%\">\n    <tr>\n      <td><input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.searchParams.firstName\"\n          placeholder=\"Enter First Name Here\" style=\"margin-right: 5px;\" /></td>\n      <td><input type=\"date\" name=\"dob\" [(ngModel)]=\"form.searchParams.dob\" placeholder=\"Enter Date Of Birth Here\"\n          style=\"margin-right: 5px;\" /></td>\n      <td> <select name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\">\n          <option [ngValue]=\"\" value=\"undefined\">{{'------Select Role-------' }}</option>\n          <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n        </select></td>\n      <td>\n        <button (click)=\"search()\">search</button>\n      </td>\n    </tr>\n  </table>\n  <br>\n  <table border=\"1\" style=\"width: 100%; border: groove;\">\n    <tr style=\"background-color: #e1e6f1e3;\">\n      <th width=\"5%\" style=\"text-align: center;\">Select</th>\n      <th width=\"5%\" style=\"text-align: center;\">S.No.</th>\n      <th width=\"5%\" style=\"text-align: center;\">Image</th>\n      <th width=\"13%\" style=\"text-align: center;\">FirstName</th>\n      <th width=\"13%\" style=\"text-align: center;\">LastName</th>\n      <th width=\"13%\" style=\"text-align: center;\">LoginId</th>\n      <th width=\"8%\" style=\"text-align: center;\">Password</th>\n      <th width=\"8%\" style=\"text-align: center;\">Role</th>\n      <th width=\"13%\" style=\"text-align: center;\">DOB</th>\n      <th width=\"5%\" style=\"text-align: center;\">Edit</th>\n    </tr>\n    <tr *ngFor=\"let m of form.list; let i = index\">\n      <td style=\"text-align: center;\">\n        <input type=\"checkbox\" name=\"ids\" value=\"{{m.id}}\" />\n      </td>\n      <td style=\"text-align: center;\">{{(form.pageNo*5)+i+ 1}}</td>\n      <td>\n        <div *ngIf=\"m.imageId\">\n          <img src=\"http://localhost:8080/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\n        </div>\n        <div *ngIf=\"!m.imageId\">\n          <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n        </div>\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.firstName}}\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.lastName}}\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.loginId}}\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.password}}\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.roleName}}\n      </td>\n      <td style=\"text-align: center;\">\n        {{m.dob | date : 'dd-MM-yyyy'}}\n      </td>\n      <td style=\"text-align: center;\"> <a (click)=\"edit( '/user/' +  m.id)\">edit\n        </a></td>\n    </tr>\n  </table>\n  <table style=\"width: 100%\">\n    <tr>\n      <td style=\"width: 25%\"><button [disabled]=\"form.pageNo == 0\" (click)=\"previous()\">previous</button></td>\n      <td align=\"center\" style=\"width: 25%\"><button (click)=\"add()\">add</button></td>\n      <td align=\"center\" style=\"width: 25%\"><input type=\"submit\" name=\"operation\" value=\"delete\"></td>\n      <td style=\"width: 25%\" align=\"right\"><button [disabled]=\"form.list.length < 5\" (click)=\"next()\">next</button></td>\n    </tr>\n  </table>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");




var UserListComponent = /** @class */ (function () {
    function UserListComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.form = {
            pageNo: 0,
            data: { id: null },
            searchParams: {},
            list: [],
            preload: []
        };
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.preload();
        this.search();
    };
    UserListComponent.prototype.next = function () {
        this.form.pageNo++;
        this.search();
    };
    UserListComponent.prototype.previous = function () {
        this.form.pageNo--;
        this.search();
    };
    UserListComponent.prototype.add = function () {
        this.router.navigateByUrl('/user');
    };
    UserListComponent.prototype.edit = function (page) {
        this.router.navigateByUrl(page);
    };
    UserListComponent.prototype.preload = function () {
        var self = this;
        this.httpService.get('http://localhost:8080/User/preload', function (res) {
            self.form.preload = res.result;
        });
    };
    UserListComponent.prototype.search = function () {
        var self = this;
        this.httpService.post('http://localhost:8080/User/search/' + self.form.pageNo, self.form.searchParams, function (res) {
            self.form.list = res.result.data;
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .error {\n    color: red;\n    font-weight: bold;\n  }\n\n  .success {\n    color: green;\n    font-weight: bold;\n  }\n\n  input,\n  select {\n    width: 250px;\n  }\n\n  th,\n  td {\n    padding: 5px;\n  }\n</style>\n<div align=\"center\" style=\"padding-top: 1%; padding-bottom:4%;\">\n  <h2 style=\"color: navy\">Add User</h2>\n  <div style=\"height: 15px; margin-bottom: 12px\" align=\"center\" class=\"success\" *ngIf=\"form.message\">\n    {{ form.message }}\n  </div>\n  <table>\n    <tr>\n      <th>Role Name : </th>\n      <td> <select name=\"roleId\" [(ngModel)]=\"form.data.roleId\">\n          <option [ngValue]=\"\" value=\"undefined\">{{'------Select Role-------' }}</option>\n          <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n        </select></td>\n    </tr>\n    <tr>\n      <th>First Name : </th>\n      <td><input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" /> </td>\n      <td *ngIf=\"inputerror.firstName != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.firstName}}\n      </td>\n    </tr>\n    <tr>\n      <th>Last Name : </th>\n      <td><input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" /> </td>\n      <td *ngIf=\"inputerror.lastName != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.lastName}}\n      </td>\n    </tr>\n    <tr>\n      <th>Login ID : </th>\n      <td><input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" /> </td>\n      <td *ngIf=\"inputerror.loginId != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.loginId}}\n      </td>\n    </tr>\n    <tr>\n      <th>Password : </th>\n      <td><input type=\"text\" name=\"password\" [(ngModel)]=\"form.data.password\" /> </td>\n      <td *ngIf=\"inputerror.password != null\" class=\"error\" style=\"position: fixed;\">\n        {{inputerror.password}}\n      </td>\n    </tr>\n    <tr>\n      <th>DOB : </th>\n      <td><input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" /> </td>\n    </tr>\n    <tr>\n      <th>Profile : </th>\n      <td>\n        <div *ngIf=\"form.data.id\">\n          <img src=\"http://localhost:8080/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\n        </div>\n        <div *ngIf=\"!form.data.id\">\n          <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th>Image : </th>\n      <td><input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\n          accept=\"image/*\"> </td>\n    </tr>\n    <tr>\n      <th></th>\n      <td><button (click)=\"submit()\">save</button></td>\n    </tr>\n  </table>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");






var UserComponent = /** @class */ (function () {
    function UserComponent(httpClient, httpService, dataValidator, route) {
        this.httpClient = httpClient;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.route = route;
        this.form = {
            data: { id: null },
            message: '',
            preload: []
        };
        this.fileToUpload = null;
        this.inputerror = {};
        var self = this;
        httpService.getPathVariable(route, function (params) {
            self.form.data.id = params["id"];
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    UserComponent.prototype.display = function () {
        var self = this;
        this.httpService.get('http://localhost:8080/User/get/' + self.form.data.id, function (res) {
            self.form.data = res.result.data;
        });
    };
    UserComponent.prototype.preload = function () {
        var self = this;
        this.httpService.get('http://localhost:8080/User/preload', function (res) {
            self.form.preload = res.result;
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        var self = this;
        var formData = new FormData();
        formData.append('file', this.fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/" + this.form.data.id, formData).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
        ;
    };
    UserComponent.prototype.submit = function () {
        var self = this;
        this.httpService.post('http://localhost:8080/User/save', this.form.data, function (res) {
            self.form.message = '';
            self.inputerror = {};
            if (self.dataValidator.isNotNullObject(res.result.inputerror)) {
                self.inputerror = res.result.inputerror;
            }
            self.form.data.id = res.result.data;
            self.myFile();
            if (self.dataValidator.isNotNullObject(res.result.message)) {
                self.form.message = res.result.message;
            }
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_5__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Om prakash Patidar\Desktop\new prioject_10\savan sir git project\Angular-Projects-main\Angular-Projects-main\ORSProject10-UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map