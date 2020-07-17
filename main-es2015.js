(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header (click)=\"backToMain()\"></app-header>\r\n<div *ngIf=\"!selectedTab.lohnessy && !selectedTab.grafoman && !selectedTab.film\" [@inOutAnimation]>\r\n  <h1>Выбирай активность</h1>\r\n  <div class=\"test__select\">\r\n    <div class=\"test__select__article\">\r\n      <div class=\"test__select__article__img test__select__article__img_lohnessy\" (click)=\"selectedTab.lohnessy = true\">\r\n        <div class=\"test__select__article__img__title\">\r\n          Loh Nessy\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"test__select__article\">\r\n      <div class=\"test__select__article__img test__select__article__img_grafoman\" (click)=\"selectedTab.grafoman = true\">\r\n        <div class=\"test__select__article__img__title\">\r\n          Графоман\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"test__select__article\">\r\n      <div class=\"test__select__article__img test__select__article__img_film\">\r\n        <div class=\"test__select__article__img__title\">\r\n          Кинозал\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"test__select__article\">\r\n      <div class=\"test__select__article__img test__select__article__img_work\">\r\n        <div class=\"test__select__article__img__title\">\r\n          В разработке\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-lohnessy *ngIf=\"selectedTab.lohnessy\" [@inOutAnimation]></app-lohnessy>\r\n\r\n<app-grafoman *ngIf=\"selectedTab.grafoman\" [@inOutAnimation]></app-grafoman>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grafoman/grafoman.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grafoman/grafoman.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grafoman__container\">\n  <div class=\"grafoman__article\" *ngFor=\"let article of verses\">\n    <pre>{{article.verse}}</pre>\n    <p>{{article.data}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div class=\"header__menu\">\n    <img src=\"../../assets/img/house-logo.png\" alt=\"\" class=\"header__menu__img\">\n    <img src=\"../../assets/img/flower.png\" alt=\"\" class=\"header__menu__flower-img\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lohnessy/lohnessy.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lohnessy/lohnessy.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"lohnessy__container\">\n  <div *ngFor=\"let img of arts\" [style.width.%]=\"randomWidth()\" class=\"lohnessy__article\">\n    <img [src]=\"img.url\" alt=\"\">\n    <p>{{img.label}}</p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>question works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test__select {\r\n\r\n}\r\nh1 {\r\n  text-align: center;\r\n  font-family: Rumpelstiltskin;\r\n  color: #ffffff;\r\n  margin-top: 80px;\r\n  font-size: 48px;\r\n  line-height: 48px;\r\n  border-top: 3px solid #fff3e3;\r\n  border-bottom: 3px solid #fff3e3;\r\n  padding: 5px 0 1px;\r\n}\r\n.test__select {\r\n  width: 70%;\r\n  margin: 50px auto 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.test__select__article {\r\n  width: 31.5%;\r\n  margin-left: 15px;\r\n  border-radius: 3px;\r\n  padding: 10px 5px;\r\n}\r\n.test__select__article:hover .test__select__article__img {\r\n  cursor: pointer;\r\n  box-shadow: inset 0px 0px 100px 50px rgba(0,0,0,0.75);\r\n  transition: 0.3s;\r\n}\r\n.test__select__article:nth-child(3n+1) {\r\n  margin-left: 0;\r\n}\r\n.test__select__article:nth-child(n+4) {\r\n  margin-top: 45px;\r\n}\r\n.test__select__article__img {\r\n  height: 320px;\r\n  background-color: black;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: 0.3s;\r\n}\r\n.test__select__article__img_lohnessy {\r\n  background-image: url('nasty.jpg');\r\n}\r\n.test__select__article__img_grafoman {\r\n  background-image: url('grafoman.jpg');\r\n}\r\n.test__select__article__img_film {\r\n  background-image: url('film.jpg');\r\n}\r\n.test__select__article__img_work {\r\n  background-image: url('work.jpg');\r\n}\r\n.test__select__article__img__title {\r\n  color: #ffffff;\r\n  font-size: 48px;\r\n  line-height: 36px;\r\n  font-family: madeFont;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n@media (max-width: 640px) {\r\n  .test__select {\r\n    width: 100%;\r\n    margin-top: 30px;\r\n  }\r\n  .test__select__article {\r\n    width: 100%;\r\n    margin: 0 15px 15px;\r\n  }\r\n  .test__select__article:nth-child(3n+1) {\r\n    margin-left: 15px;\r\n  }\r\n  .test__select__article:nth-child(n+4) {\r\n    margin-top: 15px;\r\n  }\r\n  h1 {\r\n    margin-top: 40px;\r\n    font-size: 28px;\r\n    line-height: 28px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixxREFBcUQ7RUFDckQsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtDQUFnRDtBQUNsRDtBQUNBO0VBQ0UscUNBQW1EO0FBQ3JEO0FBQ0E7RUFDRSxpQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGlDQUErQztBQUNqRDtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXN0X19zZWxlY3Qge1xyXG5cclxufVxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBSdW1wZWxzdGlsdHNraW47XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmYzZTM7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmYzZTM7XHJcbiAgcGFkZGluZzogNXB4IDAgMXB4O1xyXG59XHJcbi50ZXN0X19zZWxlY3Qge1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlIHtcclxuICB3aWR0aDogMzEuNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG59XHJcbi50ZXN0X19zZWxlY3RfX2FydGljbGU6aG92ZXIgLnRlc3RfX3NlbGVjdF9fYXJ0aWNsZV9faW1nIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMDBweCA1MHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlOm50aC1jaGlsZCgzbisxKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuLnRlc3RfX3NlbGVjdF9fYXJ0aWNsZTpudGgtY2hpbGQobis0KSB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlX19pbWcge1xyXG4gIGhlaWdodDogMzIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlX19pbWdfbG9obmVzc3kge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9uYXN0eS5qcGcnKTtcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlX19pbWdfZ3JhZm9tYW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy9ncmFmb21hbi5qcGcnKTtcclxufVxyXG4udGVzdF9fc2VsZWN0X19hcnRpY2xlX19pbWdfZmlsbSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2ZpbG0uanBnJyk7XHJcbn1cclxuLnRlc3RfX3NlbGVjdF9fYXJ0aWNsZV9faW1nX3dvcmsge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ltZy93b3JrLmpwZycpO1xyXG59XHJcbi50ZXN0X19zZWxlY3RfX2FydGljbGVfX2ltZ19fdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICBsaW5lLWhlaWdodDogMzZweDtcclxuICBmb250LWZhbWlseTogbWFkZUZvbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC50ZXN0X19zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICAudGVzdF9fc2VsZWN0X19hcnRpY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDE1cHggMTVweDtcclxuICB9XHJcbiAgLnRlc3RfX3NlbGVjdF9fYXJ0aWNsZTpudGgtY2hpbGQoM24rMSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgfVxyXG4gIC50ZXN0X19zZWxlY3RfX2FydGljbGU6bnRoLWNoaWxkKG4rNCkge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'surprise';
        this.selectedTab = {
            lohnessy: false,
            grafoman: false,
            film: false
        };
    }
    backToMain() {
        this.selectedTab.lohnessy = false;
        this.selectedTab.grafoman = false;
        this.selectedTab.film = false;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('inOutAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.3s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question/question.component */ "./src/app/question/question.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _lohnessy_lohnessy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lohnessy/lohnessy.component */ "./src/app/lohnessy/lohnessy.component.ts");
/* harmony import */ var _grafoman_grafoman_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grafoman/grafoman.component */ "./src/app/grafoman/grafoman.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _lohnessy_lohnessy_component__WEBPACK_IMPORTED_MODULE_9__["LohnessyComponent"],
            _grafoman_grafoman_component__WEBPACK_IMPORTED_MODULE_10__["GrafomanComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/grafoman/grafoman.component.css":
/*!*************************************************!*\
  !*** ./src/app/grafoman/grafoman.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grafoman__container {\r\n  width: 80%;\r\n  margin: 100px auto 0;\r\n}\r\n.grafoman__article {\r\n  margin-top: 40px;\r\n}\r\n.grafoman__article pre {\r\n  font-size: 14px;\r\n  white-space: pre-wrap;\r\n}\r\n.grafoman__article p {\r\n  font-size: 12px;\r\n  font-family: Rumpelstiltskin;\r\n  color: #eedac1;\r\n  background-color: rgba(154, 100, 100, 0.5);\r\n  margin-top: 5px;\r\n  padding: 2px 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JhZm9tYW4vZ3JhZm9tYW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ncmFmb21hbi9ncmFmb21hbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWZvbWFuX19jb250YWluZXIge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvIDA7XHJcbn1cclxuLmdyYWZvbWFuX19hcnRpY2xlIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5ncmFmb21hbl9fYXJ0aWNsZSBwcmUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLmdyYWZvbWFuX19hcnRpY2xlIHAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LWZhbWlseTogUnVtcGVsc3RpbHRza2luO1xyXG4gIGNvbG9yOiAjZWVkYWMxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU0LCAxMDAsIDEwMCwgMC41KTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgcGFkZGluZzogMnB4IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/grafoman/grafoman.component.ts":
/*!************************************************!*\
  !*** ./src/app/grafoman/grafoman.component.ts ***!
  \************************************************/
/*! exports provided: GrafomanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrafomanComponent", function() { return GrafomanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GrafomanComponent = class GrafomanComponent {
    constructor() {
        this.verses = [
            {
                verse: 'Измены, похоть и разврат -\n' +
                    'Одним этим все вокруг горят.\n' +
                    'Великие слова давно уж потеряли вес,\n' +
                    'От них остался на груди лишь крест.\n' +
                    '\n' +
                    'Книжка в детстве про это умолчала,\n' +
                    'Сказки нет, осталась тьма.\n' +
                    'Буду ждать скорейшего финала,\n' +
                    'Смотря на небо с высокого холма.',
                data: '12.05.2020'
            },
            {
                verse: 'Жизнь прекрасна и чудесна,\n' +
                    'Скорей бы выйти погулять!\n' +
                    'Дома вдруг мне стало тесно:\n' +
                    '«Мама, пока, вернусь я в пять».\n' +
                    '\n' +
                    'Как же сильно ошибался,\n' +
                    'Мне жизнь больше не мила.\n' +
                    'Потерял свою я уникальность,\n' +
                    'Жизнь у меня всё забрала.\n' +
                    '\n' +
                    'В жизни смысла я больше не ищу,\n' +
                    'Смирился с ее обратной стороной.\n' +
                    'Притворяюсь, что все еще живу,\n' +
                    'За своей покорно следуя судьбой.\n',
                data: '14.05.2020'
            },
            {
                verse: 'Больно смотреть в глаза тому,\n' +
                    'Кого ты скоро потеряешь.\n' +
                    'Больно остаться одному,\n' +
                    'Когда надежды вдруг угасают.',
                data: '15.05.2020'
            },
            {
                verse: 'Так хочу всё это бросить,\n' +
                    'Уехать без ведома куда.\n' +
                    'Босые ноги обморозить,\n' +
                    'Скользя по тонкой кромке льда.\n' +
                    '\n' +
                    'Хочу просто лечь посреди поля,\n' +
                    'Смотреть на звёзды ночами напролёт,\n' +
                    'Опустошить бутылку алкоголя,\n' +
                    'Которая меня в итоге и убьёт.',
                data: '17.05.2020'
            },
            {
                verse: 'Да, я всё это прекрасно понимаю,\n' +
                    'Для тебя далеко не я тот самый идеал.\n' +
                    'Но подумал, что если другим я стану,\n' +
                    'То твое мнение обо мне бы поменял.\n' +
                    '\n' +
                    'Тебе нравятся парни, что с гитарою в руках,\n' +
                    'Парни, в которых видно дух творца.\n' +
                    'Но я другой, мы родились на разных полюсах,\n' +
                    'И на их фоне я как серая овца\n' +
                    '\n' +
                    'Теперь я снял свои розовые очки:\n' +
                    'Мы были вместе не благодаря, а вопреки,\n' +
                    'Все пути с самого начала к этому вели,\n' +
                    'И вот уже распутались наши узелки.\n',
                data: '20.05.2020'
            },
            {
                verse: 'Все вещички по чемоданам,\n' +
                    'Выходить уже пора.\n' +
                    'В одном лишь свитере я рваном\n' +
                    'В середине января.\n' +
                    '\n' +
                    'За окном бушует вьюга.\n' +
                    'Долгий путь мне предстоит.\n' +
                    'Каждый шаг даётся с му́кой,\n' +
                    'Но иду куда душа велит.\n' +
                    '\n' +
                    'И вот, на крыше оказавшись\n' +
                    'Со всем нажитым своим,\n' +
                    'Шагаю к краю, уже уставший,\n' +
                    'Я этот путь пройду один.',
                data: '24.05.2020'
            },
            {
                verse: 'Гуляя по улицам сонным\n' +
                    'Своего родного района,\n' +
                    'Где каждый мой старый знакомый\n' +
                    'Из «ребенка» стал обреченным.\n' +
                    '\n' +
                    'И их имена так были знакомы,\n' +
                    'Но каждый казался абсолютно мне новым,\n' +
                    'Будто только что вышел из комы,\n' +
                    'В которой провёл я многие годы.',
                data: '12.06.2020'
            },
        ];
    }
    ngOnInit() {
    }
};
GrafomanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grafoman',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grafoman.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grafoman/grafoman.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grafoman.component.css */ "./src/app/grafoman/grafoman.component.css")).default]
    })
], GrafomanComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\r\n  background-color: #fff3e3;\r\n  padding: 15px 0;\r\n  width: 100%;\r\n  margin: 25px auto 0;\r\n  box-shadow: 0px 10px 35px -30px rgba(0,0,0,0.25);\r\n  box-sizing: border-box;\r\n}\r\n.header__menu {\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.header__menu h1 {\r\n  font-size: 48px;\r\n  line-height: 48px;\r\n  margin: 0 0 0 60px;\r\n  font-family: madeFont;\r\n  color: #c5a08a;\r\n}\r\n.header__menu__img {\r\n  width: 100px;\r\n}\r\n.header__menu__flower-img {\r\n  width: 80px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  bottom: -40px;\r\n  right: 20%;\r\n}\r\n@media (max-width: 640px) {\r\n  .header {\r\n    width: 110px;\r\n    border-radius: 1000px;\r\n  }\r\n  .header__menu {\r\n    width: auto;\r\n    margin: 0px 10px;\r\n  }\r\n  .header__menu__link {\r\n    font-size: 13px;\r\n  }\r\n  .header__menu__img {\r\n    width: 70px;\r\n  }\r\n  .header__menu__flower-img {\r\n    right: 8vw;\r\n    width: 35px;\r\n    bottom: -33px;\r\n  }\r\n  .header__menu h1 {\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    margin: 15px 0 0 25px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTM7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMjVweCBhdXRvIDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMzVweCAtMzBweCByZ2JhKDAsMCwwLDAuMjUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmhlYWRlcl9fbWVudSB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaGVhZGVyX19tZW51IGgxIHtcclxuICBmb250LXNpemU6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCA2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBtYWRlRm9udDtcclxuICBjb2xvcjogI2M1YTA4YTtcclxufVxyXG4uaGVhZGVyX19tZW51X19pbWcge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4uaGVhZGVyX19tZW51X19mbG93ZXItaW1nIHtcclxuICB3aWR0aDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbiAgcmlnaHQ6IDIwJTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcclxuICB9XHJcbiAgLmhlYWRlcl9fbWVudSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMHB4IDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJfX21lbnVfX2xpbmsge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuaGVhZGVyX19tZW51X19pbWcge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJfX21lbnVfX2Zsb3dlci1pbWcge1xyXG4gICAgcmlnaHQ6IDh2dztcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgYm90dG9tOiAtMzNweDtcclxuICB9XHJcbiAgLmhlYWRlcl9fbWVudSBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMTVweCAwIDAgMjVweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/lohnessy/lohnessy.component.css":
/*!*************************************************!*\
  !*** ./src/app/lohnessy/lohnessy.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lohnessy__container {\r\n  width: 80%;\r\n  margin: 100px auto 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.lohnessy__article img {\r\n  width: 100%;\r\n}\r\n.lohnessy__article p {\r\n  color: #eedac1;\r\n  background-color: rgba(154, 100, 100, 0.5);\r\n  font-size: 22px;\r\n  line-height: 22px;\r\n  text-align: center;\r\n  font-family: Rumpelstiltskin;\r\n  margin-top: 10px;\r\n  padding: 5px 0 3px;\r\n  margin-bottom: 45px;\r\n}\r\n@media (max-width: 640px) {\r\n  .lohnessy__container {\r\n    margin-top: 80px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9obmVzc3kvbG9obmVzc3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9obmVzc3kvbG9obmVzc3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2huZXNzeV9fY29udGFpbmVyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2huZXNzeV9fYXJ0aWNsZSBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2huZXNzeV9fYXJ0aWNsZSBwIHtcclxuICBjb2xvcjogI2VlZGFjMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NCwgMTAwLCAxMDAsIDAuNSk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUnVtcGVsc3RpbHRza2luO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDAgM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmxvaG5lc3N5X19jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/lohnessy/lohnessy.component.ts":
/*!************************************************!*\
  !*** ./src/app/lohnessy/lohnessy.component.ts ***!
  \************************************************/
/*! exports provided: LohnessyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LohnessyComponent", function() { return LohnessyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LohnessyComponent = class LohnessyComponent {
    constructor() {
        this.arts = [
            {
                label: 'Девочка с каре',
                url: '../../assets/img/nasty-1.jpg'
            },
            {
                label: 'Смотри какой я серьёзный',
                url: '../../assets/img/nasty-2.jpg'
            },
            {
                label: 'Оп, закладка',
                url: '../../assets/img/nasty-3.jpg'
            },
            {
                label: 'Оп, накрыло',
                url: '../../assets/img/nasty-4.jpg'
            },
            {
                label: 'Оп, когда отпустит?',
                url: '../../assets/img/nasty-5.jpg'
            },
            {
                label: 'Кг',
                url: '../../assets/img/nasty-6.jpg'
            },
            {
                label: 'Пара рыбок',
                url: '../../assets/img/nasty-7.jpg'
            },
            {
                label: 'Ло',
                url: '../../assets/img/nasty-8.jpg'
            },
            {
                label: '9',
                url: '../../assets/img/nasty-9.jpg'
            },
            {
                label: '10',
                url: '../../assets/img/nasty-10.jpg'
            },
            {
                label: '11',
                url: '../../assets/img/nasty-11.jpg'
            },
            {
                label: '12',
                url: '../../assets/img/nasty-12.jpg'
            },
            {
                label: '13',
                url: '../../assets/img/nasty-13.jpg'
            },
            {
                label: '14',
                url: '../../assets/img/nasty-14.jpg'
            },
            {
                label: '15',
                url: '../../assets/img/nasty-15.jpg'
            }
        ];
    }
    ngOnInit() {
    }
    randomWidth() {
        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width >= 640) {
            const rand = 30 + Math.random() * (50 + 1 - 30);
            return Math.floor(rand);
        }
        else {
            return 100;
        }
    }
};
LohnessyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lohnessy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lohnessy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lohnessy/lohnessy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lohnessy.component.css */ "./src/app/lohnessy/lohnessy.component.css")).default]
    })
], LohnessyComponent);



/***/ }),

/***/ "./src/app/question/question.component.css":
/*!*************************************************!*\
  !*** ./src/app/question/question.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/question/question.component.ts":
/*!************************************************!*\
  !*** ./src/app/question/question.component.ts ***!
  \************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuestionComponent = class QuestionComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question/question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./question.component.css */ "./src/app/question/question.component.css")).default]
    })
], QuestionComponent);



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")).default]
    })
], TestComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mulfurion\WebstormProjects\surprise\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map