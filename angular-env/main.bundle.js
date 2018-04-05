export default

`<script>
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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {
/***************************** changed *******************************************/
module.exports = "@code@"
/*************************** changed end *****************************************/
/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
/***************************** changed *******************************************/
    function AppComponent() {
        @constructor@
    }
/*************************** changed end *****************************************/
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__ = __webpack_require__("./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__ = __webpack_require__("./node_modules/bhp-ui-angular/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["a" /* BHPAccordionModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["b" /* BHPAlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["o" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["d" /* BHPBadgeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["e" /* BHPCardModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["f" /* BHPCheckboxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["h" /* BHPIconModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["j" /* BHPLogoModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["i" /* BHPListModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["k" /* BHPModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["l" /* BHPNavbarModule */].forRoot(),
                //BsDatepickerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["c" /* PopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["c" /* BHPAppbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["g" /* BHPDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["n" /* BHPSwitchModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_bhp_ui_angular__["m" /* BHPSpinnerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["d" /* ProgressbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["e" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__["a" /* OwlDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_pick_datetime__["b" /* OwlNativeDateTimeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
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
</script>`
