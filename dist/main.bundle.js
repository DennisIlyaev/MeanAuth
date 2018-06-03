webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__private_private_component__ = __webpack_require__("./src/app/private/private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__protector_guard__ = __webpack_require__("./src/app/protector.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__private_private_component__["a" /* PrivateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__protector_guard__["a" /* ProtectorGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark primary-color\">\n    <a class=\"navbar-brand\" href=\"#\">Dennis Ilyaev</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n            <button routerLink='/home' routerLinkActive='active' class=\"btn btn-default waves-effect\">Home</button>\n            </li>\n            <li class=\"nav-item\">\n            <button routerLink='/users' routerLinkActive='active' class=\"btn btn-default waves-effect\">Users</button>\n            </li>\n            <li *ngIf='!this.auth.loggedIn()' class=\"nav-item\">\n            <button routerLink='/login' routerLinkActive='active' class=\"btn btn-default waves-effect\">Login</button>\n            </li>\n            <li *ngIf='!this.auth.loggedIn()' class=\"nav-item\">\n            <button routerLink='/register' routerLinkActive='active' class=\"btn btn-default waves-effect\">Register</button>\n            </li>\n            <li *ngIf='this.auth.loggedIn()' class=\"nav-item\">\n              <button (click)='this.auth.logOut()' class=\"btn btn-default waves-effect\">Logout</button>\n              </li>\n        </ul>\n    </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <router-outlet></router-outlet>\n</div>\n\n\n<!-- Footer -->\n<footer class=\"page-footer font-small mdb-color lighten-3 pt-4 mt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container text-center text-md-left\">\n  \n      <!-- Grid row -->\n      <div class=\"row\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1\">\n  \n          <!-- Content -->\n          <h5 class=\"font-weight-bold text-uppercase mb-4\">Footer Content</h5>\n          <p>Here you can use rows and columns here to organize your footer content.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum.</p>\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1\">\n  \n          <!-- Links -->\n          <h5 class=\"font-weight-bold text-uppercase mb-4\">About</h5>\n  \n          <ul class=\"list-unstyled\">\n            <li><p><a href=\"#!\">PROJECTS</a></p></li>\n            <li><p><a href=\"#!\">ABOUT US</a></p></li>\n            <li><p><a href=\"#!\">BLOG</a></p></li>\n            <li><p><a href=\"#!\">AWARDS</a></p></li>\n          </ul>\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1\">\n  \n          <!-- Contact details -->\n          <h5 class=\"font-weight-bold text-uppercase mb-4\">Address</h5>\n  \n          <ul class=\"list-unstyled\">\n            <li><p><i class=\"fa fa-home mr-3\"></i> New York, NY 10012, US</p></li>\n            <li><p><i class=\"fa fa-envelope mr-3\"></i> info@example.com</p></li>\n            <li><p><i class=\"fa fa-phone mr-3\"></i> + 01 234 567 88</p></li>\n            <li><p><i class=\"fa fa-print mr-3\"></i> + 01 234 567 89</p></li>\n          </ul>\n  \n        </div>\n        <!-- Grid column -->\n  \n        <hr class=\"clearfix w-100 d-md-none\">\n  \n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 text-center mx-auto my-4\">\n  \n          <!-- Social buttons -->\n          <h5 class=\"font-weight-bold text-uppercase mb-4\">Follow Us</h5>\n  \n          <!-- Facebook -->\n          <a type=\"button\" class=\"btn-floating btn-fb\"><i class=\"fa fa-facebook\"></i></a>\n          <!-- Twitter -->\n          <a type=\"button\" class=\"btn-floating btn-tw\"><i class=\"fa fa-twitter\"></i></a>\n          <!-- Google +-->\n          <a type=\"button\" class=\"btn-floating btn-gplus\"><i class=\"fa fa-google-plus\"></i></a>\n          <!-- Dribbble -->\n          <a type=\"button\" class=\"btn-floating btn-dribbble\"><i class=\"fa fa-dribbble\"></i></a>\n  \n        </div>\n        <!-- Grid column -->\n  \n      </div>\n      <!-- Grid row -->\n  \n    </div>\n    <!-- Footer Links -->\n  \n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://mdbootstrap.com/bootstrap-tutorial/\"> MDBootstrap.com</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->\n                        "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__private_private_component__ = __webpack_require__("./src/app/private/private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__protector_guard__ = __webpack_require__("./src/app/protector.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__token_interceptor_service__ = __webpack_require__("./src/app/token-interceptor.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__private_private_component__["a" /* PrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_11__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_12__protector_guard__["a" /* ProtectorGuard */], {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_13__token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post('http://localhost:3000/api/register', user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post('http://localhost:3000/api/login', user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/home']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: "\n  <div class=\"row\">\n  <div class=\"col-md-6 mb-4\">\n\n      <!--Card Primary-->\n      <div class=\"card indigo text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Primary-->\n      <br>\n      <!--Card Danger-->\n      <div class=\"card pink lighten-2 text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Danger-->\n      <br>\n      <!--Card Success-->\n      <div class=\"card info-color text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Success-->\n\n  </div>\n\n  <div class=\"col-md-6\">\n\n      <!--Card Warning-->\n      <div class=\"card red lighten-1 text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Warning-->\n      <br>\n      <!--Card Info-->\n      <div class=\"card success-color text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Info-->\n      <br>\n      <!--Card Default-->\n      <div class=\"card mdb-color lighten-2 text-center z-depth-2\">\n          <div class=\"card-body\">\n              <p class=\"white-text mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere\n                  erat a ante.</p>\n          </div>\n      </div>\n      <!--/.Card Default-->\n\n  </div>\n</div>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getData = function () {
        return this.http.get('http://localhost:3000/api/data');
    };
    HttpService.prototype.updateData = function (data) {
        return this.http.put('http://localhost:3000/api/update/' + data._id, data);
    };
    HttpService.prototype.deleteData = function (data) {
        return this.http.delete('http://localhost:3000/api/delete/' + data._id);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (data) {
        var _this = this;
        this.auth.loginUser(data).subscribe(function (res) {
            localStorage.setItem('token', res['token']);
            _this.router.navigate(['/users']);
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                _this.errorMessage = err.error;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: "\n  <div class=\"container\">\n  <!-- Material form register -->\n  <form ngNativeValidate #form='ngForm' (ngSubmit)='loginUser(form.value)'>\n      <p class=\"h4 text-center mb-4\">Login</p>\n      <div class=\"md-form\">\n          <i class=\"fa fa-envelope prefix grey-text\"></i>\n          <input type=\"email\" name='email' id=\"materialFormRegisterEmailEx\" class=\"form-control\" ngModel required>\n          <label for=\"materialFormRegisterEmailEx\">Email</label>\n      </div>\n      <br>\n      <div class=\"md-form\">\n      <i class=\"fa fa-lock prefix grey-text\"></i>\n      <input type=\"password\" name='password' id=\"materialFormLoginPasswordE\" class=\"form-control\" ngModel required>\n      <label for=\"materialFormLoginPasswordE\">Password</label>\n  </div>\n  <br *ngIf='errorMessage'>\n      <div *ngIf='errorMessage' class=\"alert alert-danger\" role=\"alert\">\n          {{errorMessage}}\n        </div>\n     <br>\n      <div class=\"text-center mt-4\">\n          <button class=\"btn btn-success\" type=\"submit\">Login</button>\n      </div>\n  </form>\n  </div>\n  ",
            styles: ["\n  .container {\n    max-width: 35%;\n   }\n"]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/private/private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateComponent = /** @class */ (function () {
    function PrivateComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    PrivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getData().subscribe(function (result) { return _this.data = result; }, function (err) {
            // tslint:disable-next-line:curly
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */])
                _this.router.navigate(['/login']);
        });
    };
    PrivateComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.http.updateData(user).subscribe(function () { return _this.selectedData = null; });
    };
    PrivateComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.http.deleteData(user).subscribe(function () {
            for (var i = 0; i < _this.data.length; i++) {
                // tslint:disable-next-line:no-unused-expression
                _this.data[i]._id === user._id ? _this.data.splice(i, 1) : null;
            }
            _this.selectedData = null;
        });
    };
    PrivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-private',
            template: "\n  <h2 class=\"h2-responsive\">User List</h2>\n  <hr>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-7\">\n    <div class=\"list-group\">\n    <ul>\n      <li class=\"list-group-item waves-effect\" (click)='this.selectedData = user' *ngFor='let user of data'>\n      Email: <span style='font-weight: bold'>{{user.email}}</span>\n      <br> Password: <span style='font-weight: bold'>{{user.password}}</span></li>\n    </ul>\n  </div>\n    </div>\n\n    <div class=\"col\">\n    <div class=\"list-group\">\n    <ul>\n\n\n<form *ngIf='selectedData' class='position-fixed'>\n    <p class=\"h4 text-center mb-4\">Actions</p>\n\n    <label for=\"defaultFormLoginEmailEx\" class=\"grey-text\">Email</label>\n    <input type=\"email\" name='email' id=\"defaultFormLoginEmailEx\" class=\"form-control\" required [(ngModel)]='selectedData.email'>\n\n    <br>\n\n    <label for=\"defaultFormLoginPasswordEx\" class=\"grey-text\">Password</label>\n    <input type=\"text\" name='password' id=\"defaultFormLoginPasswordEx\" class=\"form-control\" required [(ngModel)]='selectedData.password'>\n\n    <div class=\"text-center mt-4\">\n        <button class=\"btn btn-warning\" (click)='updateUser(this.selectedData)'>Update</button>\n        <button class=\"btn btn-danger\" (click)='deleteUser(this.selectedData)'>Delete</button>\n        <button class=\"btn btn-outline-elegant\" (click)='this.selectedData = null'>Cancel</button>\n    </div>\n</form>\n<!-- Default form login -->\n\n    </ul>\n  </div>\n    </div>\n  </div>\n  ",
            styles: ["\n    form {\n      max-width: 25%;\n    }\n\n    .container-fluid {\n      min-height: 600px;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], PrivateComponent);
    return PrivateComponent;
}());



/***/ }),

/***/ "./src/app/protector.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProtectorGuard = /** @class */ (function () {
    function ProtectorGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ProtectorGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    ProtectorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProtectorGuard);
    return ProtectorGuard;
}());



/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function (user) {
        var _this = this;
        this.auth.registerUser(user).subscribe(function (res) {
            localStorage.setItem('token', res['token']);
            _this.router.navigate(['/users']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: "\n\n <div class=\"container\">\n <!-- Material form register -->\n <form ngNativeValidate #form='ngForm' (ngSubmit)='registerUser(form.value)'>\n     <p class=\"h4 text-center mb-4\">Register</p>\n\n     <div class=\"md-form\">\n         <i class=\"fa fa-envelope prefix grey-text\"></i>\n         <input type=\"email\" name='email' id=\"materialFormRegisterEmailEx\" class=\"form-control\" ngModel required>\n         <label for=\"materialFormRegisterEmailEx\">Email</label>\n     </div>\n     <br>\n     <div class=\"md-form\">\n     <i class=\"fa fa-lock prefix grey-text\"></i>\n     <input type=\"password\" name='password' id=\"materialFormLoginPasswordE\" class=\"form-control\" ngModel required>\n     <label for=\"materialFormLoginPasswordE\">Password</label>\n </div>\n    <br>\n     <div class=\"text-center mt-4\">\n         <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n     </div>\n </form>\n </div>\n  ",
            styles: ["\n    .container {\n     max-width: 35%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        // tslint:disable-next-line:prefer-const
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        // tslint:disable-next-line:prefer-const
        var tokenizedReq = req.clone({
            headers: req.headers.set('Authorization', 'bearer ' + auth.getToken())
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map