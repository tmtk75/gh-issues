webpackJsonp([0,3],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(23);
/* unused harmony export parseLinkHeader */
/* unused harmony export parsePage */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubIssuesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





function toRepository(e) {
    var _a = [-2, -1].map(function (i) { return e.repository_url.split("/").slice(i).join("/"); }), full_name = _a[0], name = _a[1];
    return {
        id: -1,
        owner: {
            login: full_name.split("/")[0],
            id: null,
            avatar_url: null,
            html_url: null,
        },
        full_name: full_name,
        name: name,
    };
}
function parseLinkHeader(link) {
    if (!link) {
        return { first: "?page=1" };
    }
    return link.split(",").map(function (e) { return e.split(";"); })
        .map(function (_a) {
        var url = _a[0], rel = _a[1];
        return [rel.match("rel=\"(.*)\"")[1], url.match("<(.*)>")[1]];
    })
        .map(function (_a) {
        var key = _a[0], url = _a[1];
        return ((_b = {}, _b[key] = url, _b));
        var _b;
    })
        .reduce(function (a, b) { return Object.assign(a, b); });
}
function parsePage(h) {
    var f = function (s) { return s ? parseInt(s[1]) : null; };
    return Object.keys(h).map(function (k) { return ((_a = {}, _a[k] = f(h[k].match("\\??&?page=([0-9]+)&?")), _a)); var _a; })
        .reduce(function (a, b) { return Object.assign(a, b); });
}
var GithubIssuesService = (function () {
    function GithubIssuesService(http, _app) {
        this.http = http;
        this._app = _app;
    }
    GithubIssuesService.prototype.searchIssues = function (query, page) {
        var token = this._app.getAccessToken();
        var headers = token ? { authorization: "token " + token } : {};
        var opts = { search: "q=" + query + "&page=" + page, headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headers) };
        return this.http.get("https://api.github.com/search/issues", opts)
            .map(function (res) { return [parseLinkHeader(res.headers.get("link")), res.json()]; })
            .map(function (_a) {
            var link = _a[0], issues = _a[1];
            return [link, parsePage(link), issues];
        })
            .map(function (_a) {
            var link = _a[0], page = _a[1], issues = _a[2];
            return ({
                linkHeader: link,
                linkPage: page,
                total_count: issues.total_count,
                issues: issues.items.map(function (e) { return Object.assign(e, { repository: toRepository(e) }); }),
            });
        });
    };
    GithubIssuesService.prototype.getIssues = function (urls) {
        var _this = this;
        var token = this._app.getAccessToken();
        var headers = token ? { authorization: "token " + token } : {};
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].from(urls)
            .map(function (url) { return _this.http.get(url, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headers) }); })
            .flatMap(function (e) { return e.map(function (res) { return res.json(); }); })
            .map(function (e) { return Object.assign(e, { repository: toRepository(e) }); })
            .reduce(function (a, b) { return a.push(b); }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_immutable__["List"])())
            .map(function (e) { return e.toJS(); });
    };
    GithubIssuesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], GithubIssuesService);
    return GithubIssuesService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issues.service.js.map

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubProfileService = (function () {
    function GithubProfileService(_http) {
        this._http = _http;
        this._profiles = {}; // cache
    }
    GithubProfileService.prototype.getGithubProfile = function (token) {
        var _this = this;
        if (this._profiles[token]) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this._profiles[token]);
        }
        var headers = token ? { authorization: "token " + token } : {};
        var opts = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](headers) };
        return this._http.get("https://api.github.com/user", opts)
            .map(function (res) {
            _this._profiles[token] = res.json();
            return _this._profiles[token];
        });
    };
    GithubProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], GithubProfileService);
    return GithubProfileService;
    var _a;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-profile.service.js.map

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/ng_for.ngfactory.js.map

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_DefaultValueAccessor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_DefaultValueAccessor = (function () {
    function Wrapper_DefaultValueAccessor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */](p0, p1);
    }
    Wrapper_DefaultValueAccessor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DefaultValueAccessor.prototype.ngOnDestroy = function () {
    };
    Wrapper_DefaultValueAccessor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DefaultValueAccessor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DefaultValueAccessor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = (this.context.onChange($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.onTouched() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_DefaultValueAccessor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DefaultValueAccessor;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/default_value_accessor.ngfactory.js.map

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgControlStatusGroup; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgControlStatus = (function () {
    function Wrapper_NgControlStatus(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatus.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatus.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatus.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatus.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatus.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatus.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatus;
}());
var Wrapper_NgControlStatusGroup = (function () {
    function Wrapper_NgControlStatusGroup(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatusGroup.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatusGroup.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatusGroup.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatusGroup.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatusGroup.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatusGroup.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatusGroup;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/ng_control_status.ngfactory.js.map

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_FormControlName; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_FormControlName = (function () {
    function Wrapper_FormControlName(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_FormControlName.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FormControlName.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_FormControlName.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._changes['name'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.check_model = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.model = currValue;
            this._changes['model'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.check_isDisabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.isDisabled = currValue;
            this._changes['isDisabled'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_FormControlName.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_FormControlName.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FormControlName.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_FormControlName.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.update.subscribe(_eventHandler.bind(view, 'ngModelChange')));
        }
    };
    return Wrapper_FormControlName;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/form_control_name.ngfactory.js.map

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_FormGroupDirective; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_FormGroupDirective = (function () {
    function Wrapper_FormGroupDirective(p0, p1) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_FormGroupDirective.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_FormGroupDirective.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_FormGroupDirective.prototype.check_form = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.form = currValue;
            this._changes['form'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_FormGroupDirective.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_FormGroupDirective.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_FormGroupDirective.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'submit')) {
            var pd_sub_0 = (this.context.onSubmit($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'reset')) {
            var pd_sub_1 = (this.context.onReset() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_FormGroupDirective.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ngSubmit.subscribe(_eventHandler.bind(view, 'ngSubmit')));
        }
    };
    return Wrapper_FormGroupDirective;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/form_group_directive.ngfactory.js.map

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__ = __webpack_require__(77);
/* unused harmony export Wrapper_RouterLink */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RouterLinkWithHref; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */




var Wrapper_RouterLink = (function () {
    function Wrapper_RouterLink(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["a" /* RouterLink */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RouterLink.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLink.prototype.ngOnDestroy = function () {
    };
    Wrapper_RouterLink.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLink.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterLink.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterLink.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLink.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLink;
}());
var Wrapper_RouterLinkWithHref = (function () {
    function Wrapper_RouterLinkWithHref(p0, p1, p2) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RouterLinkWithHref.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterLinkWithHref.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
    };
    Wrapper_RouterLinkWithHref.prototype.check_target = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.target = currValue;
            this._changes['target'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_queryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.queryParams = currValue;
            this._changes['queryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_fragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.fragment = currValue;
            this._changes['fragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveQueryParams = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.preserveQueryParams = currValue;
            this._changes['preserveQueryParams'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_preserveFragment = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currValue))) {
            this._changed = true;
            this.context.preserveFragment = currValue;
            this._changes['preserveFragment'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_4, currValue);
            this._expr_4 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_skipLocationChange = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currValue))) {
            this._changed = true;
            this.context.skipLocationChange = currValue;
            this._changes['skipLocationChange'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_5, currValue);
            this._expr_5 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_replaceUrl = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currValue))) {
            this._changed = true;
            this.context.replaceUrl = currValue;
            this._changes['replaceUrl'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_6, currValue);
            this._expr_6 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.check_routerLink = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currValue))) {
            this._changed = true;
            this.context.routerLink = currValue;
            this._changes['routerLink'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_7, currValue);
            this._expr_7 = currValue;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_RouterLinkWithHref.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_8 = this.context.href;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            view.renderer.setElementProperty(el, 'href', view.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_8));
            this._expr_8 = currVal_8;
        }
    };
    Wrapper_RouterLinkWithHref.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_RouterLinkWithHref.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RouterLinkWithHref;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/router_link.ngfactory.js.map

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_issues_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__github_profile_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubIssuesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GithubIssuesComponent = (function () {
    function GithubIssuesComponent(_fb, route, _router, service, profileService, appService) {
        this._fb = _fb;
        this.route = route;
        this._router = _router;
        this.service = service;
        this.profileService = profileService;
        this.appService = appService;
        this.searchResult = { linkPage: null, linkHeader: null, issues: [], total_count: 0 };
        this.searchCountWidth = "0px";
        this.debug = false;
        this.predefinedQueryButtons = [
            { text: "Created", query: "is:open is:issue author:<login>" },
            { text: "Assigned", query: "is:open is:issue assignee:<login>" },
            { text: "Mentioned", query: "is:open is:issue mentions:<login>" },
        ];
        this.issueDescStyle = {}; //{display: "none"};
    }
    GithubIssuesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this._fb.group({
            query: [""],
            page: 3,
        });
        this.route.queryParams.forEach(function (params) {
            var q = params['q'];
            var page = params['page'];
            _this.form.get('query').setValue(q);
            _this.form.get('page').setValue(page);
            _this.query(q, page);
        });
        var node = document.getElementById("search-form.search-count");
        new MutationObserver(function (mutations) {
            return mutations.forEach(function (_) { return _this.searchCountWidth = (30 + 7 + node.clientWidth) + "px"; });
        } // See .scss file for `30 + 7`
        ).observe(node, { characterData: true, subtree: true });
    };
    GithubIssuesComponent.prototype.onJump = function (page) {
        this.onEnterQuery(this.form.get('query').value, page);
    };
    GithubIssuesComponent.prototype.onEnterQuery = function (q, page) {
        if (page === void 0) { page = 1; }
        //this._router.navigate([], {queryParams: {q, page}});
        this.selectQuery({ q: q, page: page });
    };
    GithubIssuesComponent.prototype.query = function (q, page) {
        var _this = this;
        if (!q) {
            return;
        }
        this.service.searchIssues(q, page)
            .subscribe(function (result) {
            _this.searchResult = result;
            _this.error = null;
            _this.appService.saveLastQueryParams({ q: q, page: page });
            if (_this.debug) {
                _this.focusedIssue = _this.searchResult.issues[0];
            }
        }, function (err) { return _this.error = err; });
    };
    GithubIssuesComponent.prototype.isSelected = function (i) {
        return this.appService.isSelected(i);
    };
    GithubIssuesComponent.prototype.onSelect = function (e) {
        if (e.selected) {
            this.appService.selectIssue(e.issue);
        }
        else {
            this.appService.unselectIssue(e.issue);
        }
    };
    GithubIssuesComponent.prototype.selectQuery = function (p) {
        //NOTE: I think routerLink with queryParams should work, but I couldn't.
        //  e.g) <a routerLink="/search" [queryParams]="query">...</a>
        this._router.navigate([], { queryParams: p });
    };
    GithubIssuesComponent.prototype.onClickPredefinedQuery = function (e) {
        var _this = this;
        var token = this.appService.getAccessToken();
        this.profileService.getGithubProfile(token).subscribe(function (profile) {
            var q = e['query'].replace(/<login>/g, profile.login);
            _this.selectQuery({ q: q, page: 1 });
        }, function (err) { return _this.error = err; });
    };
    GithubIssuesComponent.prototype.onClickLabel = function (label) {
        var q = "is:open is:issue label:\"" + label['name'] + "\"";
        var org = this.appService.getDefaultOrganization();
        if (org) {
            q += " org:\"" + org + "\"";
        }
        this.selectQuery({ q: q });
    };
    GithubIssuesComponent.prototype.onHover = function (event) {
        this.focusedIssue = event.issue;
        this.issueDescStyle = { display: "block" };
    };
    GithubIssuesComponent.prototype.onHide = function (e) {
        if (!this.debug) {
            this.issueDescStyle = { display: "none" };
        }
    };
    GithubIssuesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'github-issues',
            templateUrl: './github-issues.component.html',
            styleUrls: ['./github-issues.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__github_issues_service__["a" /* GithubIssuesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__github_issues_service__["a" /* GithubIssuesService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__github_profile_service__["a" /* GithubProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__github_profile_service__["a" /* GithubProfileService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === 'function' && _f) || Object])
    ], GithubIssuesComponent);
    return GithubIssuesComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issues.component.js.map

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFound404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFound404Component = (function () {
    function NotFound404Component() {
    }
    NotFound404Component.prototype.ngOnInit = function () {
    };
    NotFound404Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-not-found404',
            templateUrl: './not-found404.component.html',
            styleUrls: ['./not-found404.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], NotFound404Component);
    return NotFound404Component;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/not-found404.component.js.map

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_github_issues_service__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectedIssuesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectedIssuesComponent = (function () {
    function SelectedIssuesComponent(_http, _app, _gh) {
        this._http = _http;
        this._app = _app;
        this._gh = _gh;
        this.issues = [];
    }
    SelectedIssuesComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    SelectedIssuesComponent.prototype.reload = function () {
        var _this = this;
        var a = this._app.getSelectedIssues().map(function (e) { return e.url; });
        this._gh.getIssues(a).subscribe(function (e) { return _this.issues = e; });
    };
    SelectedIssuesComponent.prototype.onClickClearAll = function () {
        this._app.clearAllSelections();
        this.reload();
    };
    SelectedIssuesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-selected-issues',
            templateUrl: './selected-issues.component.html',
            styleUrls: ['./selected-issues.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__github_github_issues_service__["a" /* GithubIssuesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__github_github_issues_service__["a" /* GithubIssuesService */]) === 'function' && _c) || Object])
    ], SelectedIssuesComponent);
    return SelectedIssuesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/selected-issues.component.js.map

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_github_profile_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(_fb, _app, _gh) {
        this._fb = _fb;
        this._app = _app;
        this._gh = _gh;
        this.avatarURL = ""; //"https://avatars3.githubusercontent.com/u/9919?v=3&s=72";
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.theForm = this._fb.group({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]({ value: '', disabled: true }),
        });
        var token = this._app.getAccessToken();
        if (!token) {
            return;
        }
        this._gh.getGithubProfile(token).subscribe(function (profile) {
            _this.login = profile.login;
            _this.theForm.get("name").setValue(profile.name);
            _this.avatarURL = profile.avatar_url;
        }, function (err) { return _this.error = err; });
    };
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-account',
            templateUrl: './account.component.html',
            styleUrls: ['./account.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__github_github_profile_service__["a" /* GithubProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__github_github_profile_service__["a" /* GithubProfileService */]) === 'function' && _c) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/account.component.js.map

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrganizationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrganizationComponent = (function () {
    function OrganizationComponent(_fb, appService) {
        this._fb = _fb;
        this.appService = appService;
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        this.theForm = this._fb.group({ organization: '' });
        this.theForm.get('organization').setValue(this.appService.getDefaultOrganization());
    };
    OrganizationComponent.prototype.onClick = function () {
        this.appService.saveDefaultOrganization(this.theForm.get('organization').value);
    };
    OrganizationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-organization',
            templateUrl: './organization.component.html',
            styleUrls: ['./organization.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], OrganizationComponent);
    return OrganizationComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/organization.component.js.map

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(router) {
        this.router = router;
        this.navigationEnd = { id: -1, url: "", urlAfterRedirects: "" };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]) {
                _this.navigationEnd = e;
            }
        });
    };
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/settings.component.js.map

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TokensComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokensComponent = (function () {
    function TokensComponent(_fb, _app) {
        this._fb = _fb;
        this._app = _app;
    }
    TokensComponent.prototype.ngOnInit = function () {
        this.theForm = this._fb.group({
            token: '',
        });
        this.theForm.get('token').setValue(this._app.getAccessToken());
    };
    TokensComponent.prototype.onClick = function () {
        this._app.saveAccessToken(this.theForm.get('token').value);
        return false;
    };
    TokensComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-tokens',
            templateUrl: './tokens.component.html',
            styleUrls: ['./tokens.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === 'function' && _b) || Object])
    ], TokensComponent);
    return TokensComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/tokens.component.js.map

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = (function () {
    function AppService() {
    }
    AppService.prototype.getAccessToken = function () {
        return localStorage.getItem("GITHUB_TOKEN");
    };
    AppService.prototype.saveAccessToken = function (token) {
        localStorage.setItem("GITHUB_TOKEN", token);
    };
    AppService.prototype.selectIssue = function (issue) {
        var s = this.getSelectedIssueIDs();
        localStorage.setItem("selectedIssueIDs", JSON.stringify(s.add(issue.id).toArray()));
        var id2issue = JSON.parse(localStorage.getItem("selectedID2issue") || '{}');
        id2issue[issue.id] = { id: issue.id, url: issue.url };
        localStorage.setItem("selectedID2issue", JSON.stringify(id2issue));
    };
    AppService.prototype.unselectIssue = function (issue) {
        var s = this.getSelectedIssueIDs();
        localStorage.setItem("selectedIssueIDs", JSON.stringify(s.remove(issue.id).toArray()));
        var id2issue = JSON.parse(localStorage.getItem("selectedID2issue") || '{}');
        delete id2issue[issue.id];
        localStorage.setItem("selectedID2issue", JSON.stringify(id2issue));
    };
    AppService.prototype.getSelectedIssueIDs = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(JSON.parse(localStorage.getItem("selectedIssueIDs")) || []).toSet();
    };
    AppService.prototype.getSelectedIssues = function () {
        var m = JSON.parse(localStorage.getItem("selectedID2issue")) || {};
        return Object.keys(m).map(function (k) { return m[k]; });
    };
    AppService.prototype.isSelected = function (i) {
        var m = JSON.parse(localStorage.getItem("selectedID2issue")) || {};
        return m[i.id.toString()];
    };
    AppService.prototype.clearAllSelections = function () {
        localStorage.setItem("selectedID2issue", "{}");
        localStorage.setItem("selectedIssueIDs", "[]");
    };
    AppService.prototype.saveLastQueryParams = function (params) {
        var h = this.getQueryHistory();
        if ((h.first() || {})['q'] == params['q']) {
            return;
        }
        var n = h.unshift(params).slice(0, 10);
        localStorage.setItem("queryHistory", JSON.stringify(n.toJS()));
    };
    AppService.prototype.getLastQueryParams = function () {
        return this.getQueryHistory().first() || {};
    };
    AppService.prototype.getQueryHistory = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])(JSON.parse(localStorage.getItem("queryHistory")) || []);
    };
    AppService.prototype.getDefaultOrganization = function () {
        return localStorage.getItem("defaultOrganization");
    };
    AppService.prototype.saveDefaultOrganization = function (org) {
        localStorage.setItem("defaultOrganization", org);
    };
    AppService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FromNowPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_0_moment__(value).fromNow();
    };
    FromNowPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* Pipe */])({
            name: 'fromNow'
        }), 
        __metadata('design:paramtypes', [])
    ], FromNowPipe);
    return FromNowPipe;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/from-now.pipe.js.map

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_color___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_color__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_issue__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_issue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__github_issue__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubIssueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var fadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_4" /* trigger */])('fadeInState', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_6" /* style */])({ opacity: 0.1 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_6" /* style */])({ opacity: 1.0 })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_7" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* animate */])('300ms ease-in')),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_7" /* transition */])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* animate */])('300ms ease-out'))
]);
var GithubIssueComponent = (function () {
    function GithubIssueComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* EventEmitter */]();
        this.clickLabel = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* EventEmitter */]();
        this.hover = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* EventEmitter */]();
        this.hide = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* EventEmitter */]();
        this.fadeInState = "inactive";
    }
    GithubIssueComponent.prototype.ngOnInit = function () {
        var _this = this;
        var t = this.titleRef.nativeElement;
        var enter = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromEvent(t, "mouseenter");
        var leave = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromEvent(t, "mouseleave");
        var move = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].fromEvent(t, "mousemove");
        var entered = enter.map(function (e) { return true; }).merge(leave.map(function (e) { return false; }));
        var hover = __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].combineLatest(move, entered)
            .debounceTime(300)
            .filter(function (_a) {
            var e = _a[0], b = _a[1];
            return b;
        })
            .map(function (_a) {
            var e = _a[0], _ = _a[1];
            return e;
        });
        hover.subscribe(function (e) { return _this.hover.emit({ issue: _this.issue, event: e }); });
        leave.subscribe(function (e) { return _this.hide.emit({ issue: _this.issue, event: e }); });
    };
    // @HostListener('document:keyup', ['$event'])
    // @HostListener('document:keydown', ['$event'])
    // onKeyUp(ev:KeyboardEvent) {
    //   console.log(`The user just pressed ${ev.key}!`);
    // }
    GithubIssueComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.fadeInState = "active"; }, 0);
    };
    GithubIssueComponent.prototype.onChange = function (src, issue) {
        this.select.emit({ selected: src.checked, issue: issue });
    };
    GithubIssueComponent.prototype.labelColor = function (hexColor) {
        var c = __WEBPACK_IMPORTED_MODULE_1_color__('#' + hexColor);
        var w = __WEBPACK_IMPORTED_MODULE_1_color__('white');
        var p = (luminanace(w) + 0.05) / (luminanace(c) + 0.05);
        return p <= 4 ? "#1c2733" : "white";
    };
    GithubIssueComponent.prototype.onClickLabel = function (label) {
        this.clickLabel.emit(label);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__github_issue__["GithubIssue"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__github_issue__["GithubIssue"]) === 'function' && _a) || Object)
    ], GithubIssueComponent.prototype, "issue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], GithubIssueComponent.prototype, "selected", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], GithubIssueComponent.prototype, "select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], GithubIssueComponent.prototype, "clickLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], GithubIssueComponent.prototype, "hover", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], GithubIssueComponent.prototype, "hide", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('title'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* ElementRef */]) === 'function' && _b) || Object)
    ], GithubIssueComponent.prototype, "titleRef", void 0);
    GithubIssueComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_3" /* Component */])({
            selector: 'github-issue',
            templateUrl: './github-issue.component.html',
            styleUrls: ['./github-issue.component.scss'],
            animations: [fadeIn],
        }), 
        __metadata('design:paramtypes', [])
    ], GithubIssueComponent);
    return GithubIssueComponent;
    var _a, _b;
}());
function luminanace(c) {
    var a = c.array().map(function (v) {
        v /= 255;
        return (v <= 0.03928) ?
            v / 12.92 :
            Math.pow(((v + 0.055) / 1.055), 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issue.component.js.map

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_issue__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_issue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__github_issue__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubPaginationComponent; });
/* unused harmony export toPages */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubPaginationComponent = (function () {
    function GithubPaginationComponent() {
        this.jump = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.leftItems = [];
        this.omitLeft = false;
        this.pages = [];
        this.omitRight = false;
        this.rightItems = [];
        this.hasNoPrevious = true;
        this.hasNoNext = true;
    }
    GithubPaginationComponent.prototype.ngOnInit = function () {
    };
    GithubPaginationComponent.prototype.ngOnChanges = function () {
        if (!(this.page && this.link)) {
            return;
        }
        this.current = (this.page.next - 1) || (this.page.prev + 1);
        var e = omit(toPages(this.page), this.current - 1, 2, 2);
        this.leftItems = e.leftItems;
        this.omitLeft = e.omittedLeft;
        this.pages = e.items;
        this.omitRight = e.omittedRight;
        this.rightItems = e.rightItems;
        this.hasNoPrevious = !this.page.prev;
        this.hasNoNext = !this.page.last;
    };
    GithubPaginationComponent.prototype.onClick = function (p) {
        this.jump.emit(p);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__github_issue__["LinkPage"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__github_issue__["LinkPage"]) === 'function' && _a) || Object)
    ], GithubPaginationComponent.prototype, "page", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__github_issue__["LinkHeader"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__github_issue__["LinkHeader"]) === 'function' && _b) || Object)
    ], GithubPaginationComponent.prototype, "link", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(), 
        __metadata('design:type', Object)
    ], GithubPaginationComponent.prototype, "jump", void 0);
    GithubPaginationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'github-pagination',
            templateUrl: './github-pagination.component.html',
            styleUrls: ['./github-pagination.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], GithubPaginationComponent);
    return GithubPaginationComponent;
    var _a, _b;
}());
function range(f, t) {
    var a = [];
    for (var i = f; i < t; i++)
        a.push(i);
    return a;
}
function toPages(page) {
    var first = page.first || page.next - 1;
    var last = page.last || page.prev + 1;
    return range(first, last + 1);
}
function omit(array, pivot, num, extra) {
    if (array.length <= (num * 2 + 1)) {
        return {
            items: array,
            omittedLeft: false,
            omittedRight: false,
            leftItems: [],
            rightItems: [],
        };
    }
    var l = pivot - num >= 0 ? pivot - num : 0;
    var r = num + (l + 1) + num;
    if (r > array.length) {
        l = array.length - num * 2 - 1;
        r = array.length;
    }
    var lo = extra < l;
    var ro = r < (array.length - extra);
    return {
        items: array.slice(l, r),
        omittedLeft: lo,
        omittedRight: ro,
        leftItems: array.slice(0, Math.min(extra, l)),
        rightItems: array.slice(Math.max(array.length - extra, r), array.length),
    };
}
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-pagination.component.js.map

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_class__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgClass; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgClass = (function () {
    function Wrapper_NgClass(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_class__["a" /* NgClass */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgClass.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgClass.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgClass.prototype.check_klass = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.klass = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgClass.prototype.check_ngClass = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngClass = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgClass.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgClass.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgClass.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgClass.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgClass;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/ng_class.ngfactory.js.map

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_style__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgStyle; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgStyle = (function () {
    function Wrapper_NgStyle(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_style__["a" /* NgStyle */](p0, p1, p2);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgStyle.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgStyle.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgStyle.prototype.check_ngStyle = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngStyle = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgStyle.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgStyle.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgStyle.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgStyle.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgStyle;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/ng_style.ngfactory.js.map

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RouterOutlet; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_RouterOutlet = (function () {
    function Wrapper_RouterOutlet(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */](p0, p1, p2, p3);
    }
    Wrapper_RouterOutlet.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RouterOutlet.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_RouterOutlet.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RouterOutlet.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_RouterOutlet.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RouterOutlet.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.activateEvents.subscribe(_eventHandler.bind(view, 'activate')));
        }
        if (emit1) {
            (this.subscription1 = this.context.deactivateEvents.subscribe(_eventHandler.bind(view, 'deactivate')));
        }
    };
    return Wrapper_RouterOutlet;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/router_outlet.ngfactory.js.map

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(app) {
        this.app = app;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.component.js.map

/***/ },

/***/ 317:
/***/ function(module, exports) {

//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issue.js.map

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__github_issues_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__github_issue_github_issue_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__github_pagination_github_pagination_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_issues_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__github_issue_from_now_pipe__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__markdown_pipe__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubIssuesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GithubIssuesModule = (function () {
    function GithubIssuesModule() {
    }
    GithubIssuesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__github_issues_service__["a" /* GithubIssuesService */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__github_issues_component__["a" /* GithubIssuesComponent */],
                __WEBPACK_IMPORTED_MODULE_4__github_issue_github_issue_component__["a" /* GithubIssueComponent */],
                __WEBPACK_IMPORTED_MODULE_5__github_pagination_github_pagination_component__["a" /* GithubPaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__github_issue_from_now_pipe__["a" /* FromNowPipe */],
                __WEBPACK_IMPORTED_MODULE_8__markdown_pipe__["a" /* MarkdownPipe */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], GithubIssuesModule);
    return GithubIssuesModule;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issues.module.js.map

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_marked__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MarkdownPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarkdownPipe = (function () {
    function MarkdownPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MarkdownPipe.prototype.transform = function (value, args) {
        if (value === undefined || value === null) {
            return '';
        }
        return this.sanitizer.bypassSecurityTrustHtml(__WEBPACK_IMPORTED_MODULE_2_marked__(value));
    };
    MarkdownPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'markdown'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], MarkdownPipe);
    return MarkdownPipe;
    var _a;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/markdown.pipe.js.map

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_routes__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tokens_tokens_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__organization_organization_component__ = __webpack_require__(178);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__settings_routes__["a" /* settingsRouting */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tokens_tokens_component__["a" /* TokensComponent */],
                __WEBPACK_IMPORTED_MODULE_7__organization_organization_component__["a" /* OrganizationComponent */],
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], SettingsModule);
    return SettingsModule;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/settings.module.js.map

/***/ },

/***/ 393:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(120);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_10" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/main.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_location_location_strategy__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router_src_router_outlet_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router_src_directives_router_link__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router_src_directives_router_outlet__ = __webpack_require__(122);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



















var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */](p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__app_app_service__["a" /* AppService */], this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'content'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'ul', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'app-menu mt-4 mb-4'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'routerLink', '/search'), null);
        this._RouterLinkWithHref_7_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, 'Search', null);
        this._text_9 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'routerLink', '/select'), null);
        this._RouterLinkWithHref_11_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_12 = this.renderer.createText(this._el_11, 'Select', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_14, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'routerLink', '/settings'), null);
        this._RouterLinkWithHref_15_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_12__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_16 = this.renderer.createText(this._el_15, 'Settings', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, '\n        ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'href', 'https://github.com/tmtk75/gh-issues', 'target', 'repository'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n          ', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_20, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray16"](10, 'class', 'octicon', 'height', '18', 'version', '1.1', 'viewBox', '0 0 18 18', 'width', '18'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n            ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_22, ':svg:use', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#mark-github'), null);
        this._text_25 = this.renderer.createText(this._el_22, '\n          ', null);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_18, '\n      ', null);
        this._text_28 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_29 = this.renderer.createText(this._el_2, '\n\n    ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'router-outlet', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._vc_30 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](30, 2, this, this._el_30);
        this._RouterOutlet_30_5 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__["a" /* Wrapper_RouterOutlet */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_15__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */], this.parentIndex), this._vc_30.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), null);
        this._text_31 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_32 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'footer', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'footer'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n    © 2017 ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'href', 'https://github.com/tmtk75'), null);
        this._text_36 = this.renderer.createText(this._el_35, 'tmtk75', null);
        this._text_37 = this.renderer.createText(this._el_33, '\n  ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_39 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_7));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_11, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_15, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_15));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLinkWithHref_11_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkWithHref_15_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */]) && (30 === requestNodeIndex))) {
            return this._RouterOutlet_30_5.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this.context.app.getLastQueryParams();
        this._RouterLinkWithHref_7_3.check_queryParams(currVal_7_0_0, throwOnChange, false);
        var currVal_7_0_1 = '/search';
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_1, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        var currVal_11_0_0 = '/select';
        this._RouterLinkWithHref_11_3.check_routerLink(currVal_11_0_0, throwOnChange, false);
        this._RouterLinkWithHref_11_3.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_15_0_0 = '/settings';
        this._RouterLinkWithHref_15_3.check_routerLink(currVal_15_0_0, throwOnChange, false);
        this._RouterLinkWithHref_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        this._RouterOutlet_30_5.ngDoCheck(this, this._el_30, throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_11_3.checkHost(this, this, this._el_11, throwOnChange);
        this._RouterLinkWithHref_15_3.checkHost(this, this, this._el_15, throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_30.destroyNestedViews();
        this._RouterLinkWithHref_7_3.ngOnDestroy();
        this._RouterLinkWithHref_11_3.ngOnDestroy();
        this._RouterLinkWithHref_15_3.ngOnDestroy();
        this._RouterOutlet_30_5.ngOnDestroy();
    };
    View_AppComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_11_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AppComponent0.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_15_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.component.ngfactory.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.app-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap; }\n  .app-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 90px;\n    text-align: center; }\n\n.container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh; }\n  .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    margin: 40px 0; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_settings_settings_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_github_github_issues_github_issues_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_src_localization__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_init__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_testability_testability__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_application_ref__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_compiler__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_animation_animation_queue__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_browser_title__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_browser_xhr__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_response_options__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http_src_backends_xhr_backend__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_http_src_base_request_options__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_form_builder__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_github_github_issues_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_src_location_location__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_router_src_url_tree__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_router_src_router_outlet_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_core_src_linker_system_js_ng_module_factory_loader__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_github_github_profile_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__settings_settings_component_ngfactory__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__settings_account_account_component_ngfactory__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__settings_organization_organization_component_ngfactory__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__settings_tokens_tokens_component_ngfactory__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__github_github_issues_github_issues_component_ngfactory__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__select_selected_issues_component_ngfactory__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__not_found404_not_found404_component_ngfactory__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__app_component_ngfactory__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_core_src_application_tokens__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_core_src_zone_ng_zone__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__app_settings_settings_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__app_settings_account_account_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__app_settings_organization_organization_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__app_settings_tokens_tokens_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__app_github_github_issues_github_issues_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__app_select_selected_issues_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__app_not_found404_not_found404_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_common_src_location_platform_location__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__angular_common_src_location_location_strategy__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__angular_router_src_url_handling_strategy__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__angular_router_src_route_reuse_strategy__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__angular_core_src_console__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__angular_core_src_i18n_tokens__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__angular_core_src_error_handler__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__angular_core_src_render_api__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__angular_core_src_security__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__angular_http_src_interfaces__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__angular_http_src_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__angular_router_src_router_config_loader__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__angular_core_src_linker_ng_module_factory_loader__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













































































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_38__settings_settings_component_ngfactory__["a" /* SettingsComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_39__settings_account_account_component_ngfactory__["a" /* AccountComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_40__settings_organization_organization_component_ngfactory__["a" /* OrganizationComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_41__settings_tokens_tokens_component_ngfactory__["a" /* TokensComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_42__github_github_issues_github_issues_component_ngfactory__["a" /* GithubIssuesComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_43__select_selected_issues_component_ngfactory__["a" /* SelectedIssuesComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_44__not_found404_not_found404_component_ngfactory__["a" /* NotFound404ComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_45__app_component_ngfactory__["a" /* AppComponentNgFactory */]
        ], [__WEBPACK_IMPORTED_MODULE_45__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_12", {
        get: function () {
            if ((this.__LOCALE_ID_12 == null)) {
                (this.__LOCALE_ID_12 = 'en-US');
            }
            return this.__LOCALE_ID_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_13", {
        get: function () {
            if ((this.__NgLocalization_13 == null)) {
                (this.__NgLocalization_13 = new __WEBPACK_IMPORTED_MODULE_11__angular_common_src_localization__["c" /* NgLocaleLocalization */](this._LOCALE_ID_12));
            }
            return this.__NgLocalization_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_18", {
        get: function () {
            if ((this.__ApplicationRef_18 == null)) {
                (this.__ApplicationRef_18 = this._ApplicationRef__17);
            }
            return this.__ApplicationRef_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_19", {
        get: function () {
            if ((this.__Compiler_19 == null)) {
                (this.__Compiler_19 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_compiler__["b" /* Compiler */]());
            }
            return this.__Compiler_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_20", {
        get: function () {
            if ((this.__APP_ID_20 == null)) {
                (this.__APP_ID_20 = __WEBPACK_IMPORTED_MODULE_46__angular_core_src_application_tokens__["e" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_21", {
        get: function () {
            if ((this.__DOCUMENT_21 == null)) {
                (this.__DOCUMENT_21 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["e" /* _document */]());
            }
            return this.__DOCUMENT_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_22", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_22 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_22 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_23", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_23 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_23 = [
                    new __WEBPACK_IMPORTED_MODULE_47__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_48__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_22)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_24", {
        get: function () {
            if ((this.__EventManager_24 == null)) {
                (this.__EventManager_24 = new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_23, this.parent.get(__WEBPACK_IMPORTED_MODULE_49__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_25", {
        get: function () {
            if ((this.__DomSharedStylesHost_25 == null)) {
                (this.__DomSharedStylesHost_25 = new __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_21));
            }
            return this.__DomSharedStylesHost_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_26", {
        get: function () {
            if ((this.__AnimationDriver_26 == null)) {
                (this.__AnimationDriver_26 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["f" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_27", {
        get: function () {
            if ((this.__DomRootRenderer_27 == null)) {
                (this.__DomRootRenderer_27 = new __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer_ */](this._DOCUMENT_21, this._EventManager_24, this._DomSharedStylesHost_25, this._AnimationDriver_26, this._APP_ID_20));
            }
            return this.__DomRootRenderer_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_28", {
        get: function () {
            if ((this.__NgProbeToken_28 == null)) {
                (this.__NgProbeToken_28 = [__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["c" /* routerNgProbeToken */]()]);
            }
            return this.__NgProbeToken_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_29", {
        get: function () {
            if ((this.__RootRenderer_29 == null)) {
                (this.__RootRenderer_29 = __WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_debug_ng_probe__["b" /* _createConditionalRootRenderer */](this._DomRootRenderer_27, this.parent.get(__WEBPACK_IMPORTED_MODULE_50__angular_platform_browser_src_dom_debug_ng_probe__["c" /* NgProbeToken */], null), this._NgProbeToken_28));
            }
            return this.__RootRenderer_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_30", {
        get: function () {
            if ((this.__DomSanitizer_30 == null)) {
                (this.__DomSanitizer_30 = new __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_31", {
        get: function () {
            if ((this.__Sanitizer_31 == null)) {
                (this.__Sanitizer_31 = this._DomSanitizer_30);
            }
            return this.__Sanitizer_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_32", {
        get: function () {
            if ((this.__AnimationQueue_32 == null)) {
                (this.__AnimationQueue_32 = new __WEBPACK_IMPORTED_MODULE_21__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_49__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_33", {
        get: function () {
            if ((this.__ViewUtils_33 == null)) {
                (this.__ViewUtils_33 = new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_29, this._Sanitizer_31, this._AnimationQueue_32));
            }
            return this.__ViewUtils_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_34", {
        get: function () {
            if ((this.__IterableDiffers_34 == null)) {
                (this.__IterableDiffers_34 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_35", {
        get: function () {
            if ((this.__KeyValueDiffers_35 == null)) {
                (this.__KeyValueDiffers_35 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_36", {
        get: function () {
            if ((this.__SharedStylesHost_36 == null)) {
                (this.__SharedStylesHost_36 = this._DomSharedStylesHost_25);
            }
            return this.__SharedStylesHost_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_37", {
        get: function () {
            if ((this.__Title_37 == null)) {
                (this.__Title_37 = new __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_38", {
        get: function () {
            if ((this.__RadioControlRegistry_38 == null)) {
                (this.__RadioControlRegistry_38 = new __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_39", {
        get: function () {
            if ((this.__BrowserXhr_39 == null)) {
                (this.__BrowserXhr_39 = new __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_40", {
        get: function () {
            if ((this.__ResponseOptions_40 == null)) {
                (this.__ResponseOptions_40 = new __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_response_options__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_41", {
        get: function () {
            if ((this.__XSRFStrategy_41 == null)) {
                (this.__XSRFStrategy_41 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_42", {
        get: function () {
            if ((this.__XHRBackend_42 == null)) {
                (this.__XHRBackend_42 = new __WEBPACK_IMPORTED_MODULE_27__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */](this._BrowserXhr_39, this._ResponseOptions_40, this._XSRFStrategy_41));
            }
            return this.__XHRBackend_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_43", {
        get: function () {
            if ((this.__RequestOptions_43 == null)) {
                (this.__RequestOptions_43 = new __WEBPACK_IMPORTED_MODULE_28__angular_http_src_base_request_options__["b" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_44", {
        get: function () {
            if ((this.__Http_44 == null)) {
                (this.__Http_44 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* httpFactory */](this._XHRBackend_42, this._RequestOptions_43));
            }
            return this.__Http_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FormBuilder_45", {
        get: function () {
            if ((this.__FormBuilder_45 == null)) {
                (this.__FormBuilder_45 = new __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_form_builder__["a" /* FormBuilder */]());
            }
            return this.__FormBuilder_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_46", {
        get: function () {
            if ((this.__ROUTES_46 == null)) {
                (this.__ROUTES_46 = [
                    [{
                            path: 'settings',
                            component: __WEBPACK_IMPORTED_MODULE_51__app_settings_settings_component__["a" /* SettingsComponent */],
                            children: [
                                {
                                    path: '',
                                    redirectTo: 'account',
                                    pathMatch: 'full'
                                },
                                {
                                    path: 'account',
                                    component: __WEBPACK_IMPORTED_MODULE_52__app_settings_account_account_component__["a" /* AccountComponent */]
                                },
                                {
                                    path: 'organization',
                                    component: __WEBPACK_IMPORTED_MODULE_53__app_settings_organization_organization_component__["a" /* OrganizationComponent */]
                                },
                                {
                                    path: 'tokens',
                                    component: __WEBPACK_IMPORTED_MODULE_54__app_settings_tokens_tokens_component__["a" /* TokensComponent */]
                                }
                            ]
                        }
                    ],
                    [
                        {
                            path: '',
                            redirectTo: 'search',
                            pathMatch: 'full'
                        },
                        {
                            path: 'search',
                            component: __WEBPACK_IMPORTED_MODULE_55__app_github_github_issues_github_issues_component__["a" /* GithubIssuesComponent */]
                        },
                        {
                            path: 'select',
                            component: __WEBPACK_IMPORTED_MODULE_56__app_select_selected_issues_component__["a" /* SelectedIssuesComponent */]
                        },
                        {
                            path: '**',
                            component: __WEBPACK_IMPORTED_MODULE_57__app_not_found404_not_found404_component__["a" /* NotFound404Component */]
                        }
                    ]
                ]);
            }
            return this.__ROUTES_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AppService_47", {
        get: function () {
            if ((this.__AppService_47 == null)) {
                (this.__AppService_47 = new __WEBPACK_IMPORTED_MODULE_30__app_app_service__["a" /* AppService */]());
            }
            return this.__AppService_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_GithubIssuesService_48", {
        get: function () {
            if ((this.__GithubIssuesService_48 == null)) {
                (this.__GithubIssuesService_48 = new __WEBPACK_IMPORTED_MODULE_31__app_github_github_issues_service__["a" /* GithubIssuesService */](this._Http_44, this._AppService_47));
            }
            return this.__GithubIssuesService_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_49", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_49 == null)) {
                (this.__ROUTER_CONFIGURATION_49 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_50", {
        get: function () {
            if ((this.__LocationStrategy_50 == null)) {
                (this.__LocationStrategy_50 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["d" /* provideLocationStrategy */](this.parent.get(__WEBPACK_IMPORTED_MODULE_58__angular_common_src_location_platform_location__["a" /* PlatformLocation */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_59__angular_common_src_location_location_strategy__["b" /* APP_BASE_HREF */], null), this._ROUTER_CONFIGURATION_49));
            }
            return this.__LocationStrategy_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_51", {
        get: function () {
            if ((this.__Location_51 == null)) {
                (this.__Location_51 = new __WEBPACK_IMPORTED_MODULE_32__angular_common_src_location_location__["a" /* Location */](this._LocationStrategy_50));
            }
            return this.__Location_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_52", {
        get: function () {
            if ((this.__UrlSerializer_52 == null)) {
                (this.__UrlSerializer_52 = new __WEBPACK_IMPORTED_MODULE_33__angular_router_src_url_tree__["i" /* DefaultUrlSerializer */]());
            }
            return this.__UrlSerializer_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_53", {
        get: function () {
            if ((this.__RouterOutletMap_53 == null)) {
                (this.__RouterOutletMap_53 = new __WEBPACK_IMPORTED_MODULE_34__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */]());
            }
            return this.__RouterOutletMap_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_54", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_54 == null)) {
                (this.__NgModuleFactoryLoader_54 = new __WEBPACK_IMPORTED_MODULE_35__angular_core_src_linker_system_js_ng_module_factory_loader__["a" /* SystemJsNgModuleLoader */](this._Compiler_19, this.parent.get(__WEBPACK_IMPORTED_MODULE_35__angular_core_src_linker_system_js_ng_module_factory_loader__["b" /* SystemJsNgModuleLoaderConfig */], null)));
            }
            return this.__NgModuleFactoryLoader_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_55", {
        get: function () {
            if ((this.__Router_55 == null)) {
                (this.__Router_55 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["e" /* setupRouter */](this._ApplicationRef_18, this._UrlSerializer_52, this._RouterOutletMap_53, this._Location_51, this, this._NgModuleFactoryLoader_54, this._Compiler_19, this._ROUTES_46, this._ROUTER_CONFIGURATION_49, this.parent.get(__WEBPACK_IMPORTED_MODULE_60__angular_router_src_url_handling_strategy__["b" /* UrlHandlingStrategy */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_61__angular_router_src_route_reuse_strategy__["a" /* RouteReuseStrategy */], null)));
            }
            return this.__Router_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_56", {
        get: function () {
            if ((this.__ActivatedRoute_56 == null)) {
                (this.__ActivatedRoute_56 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["f" /* rootRoute */](this._Router_55));
            }
            return this.__ActivatedRoute_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_60", {
        get: function () {
            if ((this.__PreloadAllModules_60 == null)) {
                (this.__PreloadAllModules_60 = new __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["c" /* PreloadAllModules */]());
            }
            return this.__PreloadAllModules_60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_61", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_61 == null)) {
                (this.__ROUTER_INITIALIZER_61 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["g" /* initialRouterNavigation */](this._Router_55, this._ApplicationRef_18, this._RouterPreloader_59, this._ROUTER_CONFIGURATION_49));
            }
            return this.__ROUTER_INITIALIZER_61;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_62", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_62 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_62 = [this._ROUTER_INITIALIZER_61]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_62;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_GithubProfileService_63", {
        get: function () {
            if ((this.__GithubProfileService_63 == null)) {
                (this.__GithubProfileService_63 = new __WEBPACK_IMPORTED_MODULE_37__app_github_github_profile_service__["a" /* GithubProfileService */](this._Http_44));
            }
            return this.__GithubProfileService_63;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */]();
        this._ReactiveFormsModule_6 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["b" /* ReactiveFormsModule */]();
        this._ROUTER_FORROOT_GUARD_7 = __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["h" /* provideForRootGuard */](this.parent.get(__WEBPACK_IMPORTED_MODULE_62__angular_router_src_router__["a" /* Router */], null));
        this._RouterModule_8 = new __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["b" /* RouterModule */](this._ROUTER_FORROOT_GUARD_7);
        this._SettingsModule_9 = new __WEBPACK_IMPORTED_MODULE_9__app_settings_settings_module__["a" /* SettingsModule */]();
        this._GithubIssuesModule_10 = new __WEBPACK_IMPORTED_MODULE_10__app_github_github_issues_github_issues_module__["a" /* GithubIssuesModule */]();
        this._AppModule_11 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_14 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["g" /* errorHandler */]();
        this._ApplicationInitStatus_15 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_16 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_49__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__17 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_application_ref__["d" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_49__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_63__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_14, this, this._ApplicationInitStatus_15, this.parent.get(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_16);
        this._NoPreloading_57 = new __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["b" /* NoPreloading */]();
        this._PreloadingStrategy_58 = this._NoPreloading_57;
        this._RouterPreloader_59 = new __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["a" /* RouterPreloader */](this._Router_55, this._NgModuleFactoryLoader_54, this._Compiler_19, this, this._PreloadingStrategy_58);
        return this._AppModule_11;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["b" /* ReactiveFormsModule */])) {
            return this._ReactiveFormsModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["i" /* ROUTER_FORROOT_GUARD */])) {
            return this._ROUTER_FORROOT_GUARD_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["b" /* RouterModule */])) {
            return this._RouterModule_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__app_settings_settings_module__["a" /* SettingsModule */])) {
            return this._SettingsModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__app_github_github_issues_github_issues_module__["a" /* GithubIssuesModule */])) {
            return this._GithubIssuesModule_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_64__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_65__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_application_ref__["d" /* ApplicationRef_ */])) {
            return this._ApplicationRef__17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_application_ref__["e" /* ApplicationRef */])) {
            return this._ApplicationRef_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_compiler__["b" /* Compiler */])) {
            return this._Compiler_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_core_src_application_tokens__["d" /* APP_ID */])) {
            return this._APP_ID_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_66__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_67__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer */])) {
            return this._DomRootRenderer_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_core_src_application_ref__["g" /* NgProbeToken */])) {
            return this._NgProbeToken_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_68__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */])) {
            return this._DomSanitizer_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_69__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_70__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_71__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_26__angular_http_src_base_response_options__["a" /* ResponseOptions */])) {
            return this._ResponseOptions_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_72__angular_http_src_interfaces__["b" /* XSRFStrategy */])) {
            return this._XSRFStrategy_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */])) {
            return this._XHRBackend_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__angular_http_src_base_request_options__["a" /* RequestOptions */])) {
            return this._RequestOptions_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_73__angular_http_src_http__["a" /* Http */])) {
            return this._Http_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_form_builder__["a" /* FormBuilder */])) {
            return this._FormBuilder_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_74__angular_router_src_router_config_loader__["c" /* ROUTES */])) {
            return this._ROUTES_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__app_app_service__["a" /* AppService */])) {
            return this._AppService_47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_31__app_github_github_issues_service__["a" /* GithubIssuesService */])) {
            return this._GithubIssuesService_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["j" /* ROUTER_CONFIGURATION */])) {
            return this._ROUTER_CONFIGURATION_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_59__angular_common_src_location_location_strategy__["a" /* LocationStrategy */])) {
            return this._LocationStrategy_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_common_src_location_location__["a" /* Location */])) {
            return this._Location_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_33__angular_router_src_url_tree__["h" /* UrlSerializer */])) {
            return this._UrlSerializer_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */])) {
            return this._RouterOutletMap_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_75__angular_core_src_linker_ng_module_factory_loader__["b" /* NgModuleFactoryLoader */])) {
            return this._NgModuleFactoryLoader_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_62__angular_router_src_router__["a" /* Router */])) {
            return this._Router_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_76__angular_router_src_router_state__["b" /* ActivatedRoute */])) {
            return this._ActivatedRoute_56;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["b" /* NoPreloading */])) {
            return this._NoPreloading_57;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["d" /* PreloadingStrategy */])) {
            return this._PreloadingStrategy_58;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["a" /* RouterPreloader */])) {
            return this._RouterPreloader_59;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_router_src_router_preloader__["c" /* PreloadAllModules */])) {
            return this._PreloadAllModules_60;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_module__["k" /* ROUTER_INITIALIZER */])) {
            return this._ROUTER_INITIALIZER_61;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_core_src_application_tokens__["b" /* APP_BOOTSTRAP_LISTENER */])) {
            return this._APP_BOOTSTRAP_LISTENER_62;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_37__app_github_github_profile_service__["a" /* GithubProfileService */])) {
            return this._GithubProfileService_63;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__17.ngOnDestroy();
        this._RouterPreloader_59.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.module.ngfactory.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_github_github_issue_github_issue_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__github_issue_component_scss_shim_ngstyle__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_animation_animation_transition__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_sequence_player__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_keyframe__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_player__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_query_list__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_github_github_issue_from_now_pipe__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__gendir_node_modules_angular_common_src_directives_ng_style_ngfactory__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common_src_directives_ng_style__ = __webpack_require__(136);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_GithubIssueComponent; });
/* unused harmony export GithubIssueComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return View_GithubIssueComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





























var Wrapper_GithubIssueComponent = (function () {
    function Wrapper_GithubIssueComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_github_github_issue_github_issue_component__["a" /* GithubIssueComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_GithubIssueComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_GithubIssueComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
        (this.subscription2 && this.subscription2.unsubscribe());
        (this.subscription3 && this.subscription3.unsubscribe());
    };
    Wrapper_GithubIssueComponent.prototype.check_issue = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.issue = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_GithubIssueComponent.prototype.check_selected = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.selected = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_GithubIssueComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_GithubIssueComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_GithubIssueComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_GithubIssueComponent.prototype.subscribe = function (view, _eventHandler, emit0, emit1, emit2, emit3) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view, 'select')));
        }
        if (emit1) {
            (this.subscription1 = this.context.clickLabel.subscribe(_eventHandler.bind(view, 'clickLabel')));
        }
        if (emit2) {
            (this.subscription2 = this.context.hover.subscribe(_eventHandler.bind(view, 'hover')));
        }
        if (emit3) {
            (this.subscription3 = this.context.hide.subscribe(_eventHandler.bind(view, 'hide')));
        }
    };
    return Wrapper_GithubIssueComponent;
}());
var renderType_GithubIssueComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_GithubIssueComponent_Host0 = (function (_super) {
    __extends(View_GithubIssueComponent_Host0, _super);
    function View_GithubIssueComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubIssueComponent_Host0, renderType_GithubIssueComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_GithubIssueComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'github-issue', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_GithubIssueComponent0(this.viewUtils, this, 0, this._el_0);
        this._GithubIssueComponent_0_3 = new Wrapper_GithubIssueComponent();
        this.compView_0.create(this._GithubIssueComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._GithubIssueComponent_0_3.context);
    };
    View_GithubIssueComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_github_github_issue_github_issue_component__["a" /* GithubIssueComponent */]) && (0 === requestNodeIndex))) {
            return this._GithubIssueComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssueComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._GithubIssueComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._GithubIssueComponent_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_GithubIssueComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._GithubIssueComponent_0_3.ngOnDestroy();
    };
    View_GithubIssueComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var GithubIssueComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('github-issue', View_GithubIssueComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_github_github_issue_github_issue_component__["a" /* GithubIssueComponent */]);
var styles_GithubIssueComponent = [__WEBPACK_IMPORTED_MODULE_8__github_issue_component_scss_shim_ngstyle__["a" /* styles */]];
var GithubIssueComponent_fadeInState_states = {
    'inactive': { 'opacity': '0.1' },
    'active': { 'opacity': '1' },
    '*': {}
};
function GithubIssueComponent_fadeInState_factory(view, element, currentState, nextState) {
    var previousPlayers = view.animationContext.getAnimationPlayers(element, ((nextState == 'void') ? null : 'fadeInState'));
    var collectedStyles = {};
    var player = null;
    var totalTime = 0;
    var defaultStateStyles = GithubIssueComponent_fadeInState_states['*'];
    var startStateStyles = GithubIssueComponent_fadeInState_states[currentState];
    if ((startStateStyles == null)) {
        (startStateStyles = defaultStateStyles);
    }
    var endStateStyles = GithubIssueComponent_fadeInState_states[nextState];
    if ((endStateStyles == null)) {
        (endStateStyles = defaultStateStyles);
    }
    if (((player == null) && ((currentState == 'inactive') && (nextState == 'active')))) {
        player = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 300, 0, 'ease-in', previousPlayers)]);
        totalTime = 300;
    }
    if (((player == null) && ((currentState == 'active') && (nextState == 'inactive')))) {
        player = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */]([view.renderer.animate(element, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [startStateStyles])), __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["b" /* balanceAnimationKeyframes */](collectedStyles, endStateStyles, [
                new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](0, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}]))),
                new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_animation_animation_keyframe__["a" /* AnimationKeyframe */](1, new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_animation_animation_styles__["a" /* AnimationStyles */](__WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["f" /* collectAndResolveStyles */](collectedStyles, [{}])))
            ]), 300, 0, 'ease-out', previousPlayers)]);
        totalTime = 300;
    }
    if ((player == null)) {
        (player = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_animation_animation_player__["a" /* NoOpAnimationPlayer */]());
    }
    player.onDone(function () {
        player.destroy();
        __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["a" /* prepareFinalAnimationStyles */](startStateStyles, endStateStyles));
    });
    new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_animation_animation_sequence_player__["a" /* AnimationSequencePlayer */](previousPlayers).destroy();
    __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["e" /* renderStyles */](element, view.renderer, __WEBPACK_IMPORTED_MODULE_12__angular_core_src_animation_animation_style_util__["d" /* clearStyles */](startStateStyles));
    view.animationContext.queueAnimation(element, 'fadeInState', player);
    return new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_animation_animation_transition__["a" /* AnimationTransition */](player, currentState, nextState, totalTime);
}
var renderType_GithubIssueComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_GithubIssueComponent, { fadeInState: GithubIssueComponent_fadeInState_factory });
var View_GithubIssueComponent0 = (function (_super) {
    __extends(View_GithubIssueComponent0, _super);
    function View_GithubIssueComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubIssueComponent0, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_87 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_88 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_89 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_90 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_91 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_92 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_93 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_94 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_95 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_96 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_97 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_100 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_101 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_102 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_103 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_104 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_105 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_106 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_107 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_108 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssueComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_title_0 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'label', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell cb'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'input', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'cb', 'type', 'checkbox'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell icon'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n    ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._vc_9 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](9, 7, this, this._anchor_9);
        this._TemplateRef_9_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 9, this._anchor_9);
        this._NgIf_9_6 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_7, '\n    ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 7, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgIf_11_6 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_7, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._vc_13 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](13, 7, this, this._anchor_13);
        this._TemplateRef_13_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 13, this._anchor_13);
        this._NgIf_13_6 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_7, '\n    ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_7, null);
        this._vc_15 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](15, 7, this, this._anchor_15);
        this._TemplateRef_15_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 15, this._anchor_15);
        this._NgIf_15_6 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_7, '\n  ', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell title'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n    ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'link'), null);
        this._text_21 = this.renderer.createText(this._el_20, '', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n    ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-meta text-small'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-meta-section opened-by'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n        ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_25, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'muted-link', 'target', 'repository'), null);
        this._text_28 = this.renderer.createText(this._el_27, '', null);
        this._text_29 = this.renderer.createText(this._el_25, '', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_25, 'time', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'htmlIs', 'relative-time'), null);
        this._text_31 = this.renderer.createText(this._el_30, '', null);
        this._text_32 = this.renderer.createText(this._el_25, ' by\n        ', null);
        this._el_33 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_25, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'tooltipped tooltipped-s muted-link', 'target', 'https://github.com/issues'), null);
        this._text_34 = this.renderer.createText(this._el_33, '', null);
        this._text_35 = this.renderer.createText(this._el_25, '\n      ', null);
        this._text_36 = this.renderer.createText(this._el_23, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_18, '\n  ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_39 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell avatar'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n    ', null);
        this._el_41 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_39, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'tooltipped tooltipped-n', 'target', 'https://github.com/issues'), null);
        this._text_42 = this.renderer.createText(this._el_41, '\n      ', null);
        this._el_43 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_41, 'img', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray8"](6, 'data-user', '', 'height', '20', 'width', '20'), null);
        this._text_44 = this.renderer.createText(this._el_41, '\n    ', null);
        this._text_45 = this.renderer.createText(this._el_39, '\n    ', null);
        this._anchor_46 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_46 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](46, 39, this, this._anchor_46);
        this._TemplateRef_46_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 46, this._anchor_46);
        this._NgIf_46_6 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_46.vcRef, this._TemplateRef_46_5);
        this._text_47 = this.renderer.createText(this._el_39, '\n  ', null);
        this._text_48 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_49 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell comment'), null);
        this._text_50 = this.renderer.createText(this._el_49, '\n    ', null);
        this._el_51 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_49, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'muted-link'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_53 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-comment', 'height', '16', 'version', '1.1', 'viewBox', '0 0 16 16', 'width', '16'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n        ', null);
        this._el_55 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_53, ':svg:use', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#comment'), null);
        this._text_56 = this.renderer.createText(this._el_53, '\n      ', null);
        this._text_57 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_58 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'text-small text-bold'), null);
        this._text_59 = this.renderer.createText(this._el_58, '', null);
        this._text_60 = this.renderer.createText(this._el_51, '\n    ', null);
        this._text_61 = this.renderer.createText(this._el_49, '\n  ', null);
        this._text_62 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_63 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-list-cell labels'), null);
        this._text_64 = this.renderer.createText(this._el_63, '\n    ', null);
        this._anchor_65 = this.renderer.createTemplateAnchor(this._el_63, null);
        this._vc_65 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_view_container__["a" /* ViewContainer */](65, 63, this, this._anchor_65);
        this._TemplateRef_65_5 = new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 65, this._anchor_65);
        this._NgFor_65_6 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_65.vcRef, this._TemplateRef_65_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_66 = this.renderer.createText(this._el_63, '\n  ', null);
        this._text_67 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_4, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'change', null), this.eventHandler(this.handleEvent_4));
        this._pipe_fromNow_0 = new __WEBPACK_IMPORTED_MODULE_19__app_github_github_issue_from_now_pipe__["a" /* FromNowPipe */]();
        this._pipe_fromNow_0_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["pureProxy1"](this._pipe_fromNow_0.transform.bind(this._pipe_fromNow_0));
        this._viewQuery_title_0.reset([new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_20)]);
        this.context.titleRef = this._viewQuery_title_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._anchor_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._text_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._text_62,
            this._el_63,
            this._text_64,
            this._anchor_65,
            this._text_66,
            this._text_67
        ]), [disposable_0]);
        return null;
    };
    View_GithubIssueComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (46 === requestNodeIndex))) {
            return this._TemplateRef_46_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (46 === requestNodeIndex))) {
            return this._NgIf_46_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (65 === requestNodeIndex))) {
            return this._TemplateRef_65_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (65 === requestNodeIndex))) {
            return this._NgFor_65_6.context;
        }
        return notFoundResult;
    };
    View_GithubIssueComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        var currVal_87 = this.context.fadeInState;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_87, currVal_87)) {
            var animationTransition_fadeInState = this.componentType.animations['fadeInState'](this, this._el_0, ((this._expr_87 == __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */]) ? 'void' : this._expr_87), ((currVal_87 == __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */]) ? 'void' : currVal_87));
            this._expr_87 = currVal_87;
        }
        var currVal_9_0_0 = ((this.context.issue.state == 'open') && !this.context.issue.pull_request);
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        var currVal_11_0_0 = ((this.context.issue.state == 'closed') && !this.context.issue.pull_request);
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        var currVal_13_0_0 = ((this.context.issue.state == 'open') && this.context.issue.pull_request);
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        var currVal_15_0_0 = ((this.context.issue.state == 'closed') && this.context.issue.pull_request);
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        var currVal_46_0_0 = this.context.issue.assignee;
        this._NgIf_46_6.check_ngIf(currVal_46_0_0, throwOnChange, false);
        this._NgIf_46_6.ngDoCheck(this, this._anchor_46, throwOnChange);
        var currVal_65_0_0 = this.context.issue.labels;
        this._NgFor_65_6.check_ngForOf(currVal_65_0_0, throwOnChange, false);
        this._NgFor_65_6.ngDoCheck(this, this._anchor_65, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._vc_46.detectChangesInNestedViews(throwOnChange);
        this._vc_65.detectChangesInNestedViews(throwOnChange);
        var currVal_88 = this.context.selected;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_88, currVal_88)) {
            this.renderer.setElementProperty(this._el_4, 'checked', currVal_88);
            this._expr_88 = currVal_88;
        }
        var currVal_89 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.issue.id, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_89, currVal_89)) {
            this.renderer.setElementProperty(this._el_4, 'value', currVal_89);
            this._expr_89 = currVal_89;
        }
        var currVal_90 = this.context.issue.html_url;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_90, currVal_90)) {
            this.renderer.setElementProperty(this._el_20, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_90));
            this._expr_90 = currVal_90;
        }
        var currVal_91 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, 'issue', this.context.issue.id, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_91, currVal_91)) {
            this.renderer.setElementProperty(this._el_20, 'target', currVal_91);
            this._expr_91 = currVal_91;
        }
        var currVal_92 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.issue.title, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_92, currVal_92)) {
            this.renderer.setText(this._text_21, currVal_92);
            this._expr_92 = currVal_92;
        }
        var currVal_93 = ('https://github.com/' + this.context.issue.repository.full_name);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_93, currVal_93)) {
            this.renderer.setElementProperty(this._el_27, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_93));
            this._expr_93 = currVal_93;
        }
        var currVal_94 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.issue.repository.name, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_94, currVal_94)) {
            this.renderer.setText(this._text_28, currVal_94);
            this._expr_94 = currVal_94;
        }
        var currVal_95 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '\n        #', this.context.issue.number, '\n        opened\n        ');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_95, currVal_95)) {
            this.renderer.setText(this._text_29, currVal_95);
            this._expr_95 = currVal_95;
        }
        var currVal_96 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.issue.created_at, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_96, currVal_96)) {
            this.renderer.setElementProperty(this._el_30, 'dateTime', currVal_96);
            this._expr_96 = currVal_96;
        }
        valUnwrapper.reset();
        var currVal_97 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["castByValue"](this._pipe_fromNow_0_0, this._pipe_fromNow_0.transform)(this.context.issue.created_at)), '');
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_97, currVal_97))) {
            this.renderer.setText(this._text_31, currVal_97);
            this._expr_97 = currVal_97;
        }
        var currVal_100 = (('https://github.com/issues?q=author%3A' + this.context.issue.user.login) + '+is%3Aopen');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_100, currVal_100)) {
            this.renderer.setElementProperty(this._el_33, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_100));
            this._expr_100 = currVal_100;
        }
        var currVal_101 = ('View all issues opened by ' + this.context.issue.user.login);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_101, currVal_101)) {
            this.renderer.setElementAttribute(this._el_33, 'aria-label', ((currVal_101 == null) ? null : currVal_101.toString()));
            this._expr_101 = currVal_101;
        }
        var currVal_102 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '\n          ', this.context.issue.user.login, '\n        ');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_102, currVal_102)) {
            this.renderer.setText(this._text_34, currVal_102);
            this._expr_102 = currVal_102;
        }
        var currVal_103 = (('https://github.com/issues?q=author%3A' + this.context.issue.user.login) + '+is%3Aopen');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_103, currVal_103)) {
            this.renderer.setElementProperty(this._el_41, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_103));
            this._expr_103 = currVal_103;
        }
        var currVal_104 = ('View everything assigned to ' + this.context.issue.user.login);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_104, currVal_104)) {
            this.renderer.setElementAttribute(this._el_41, 'aria-label', ((currVal_104 == null) ? null : currVal_104.toString()));
            this._expr_104 = currVal_104;
        }
        var currVal_105 = ('@' + this.context.issue.user.login);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_105, currVal_105)) {
            this.renderer.setElementProperty(this._el_43, 'alt', currVal_105);
            this._expr_105 = currVal_105;
        }
        var currVal_106 = (this.context.issue.user.avatar_url + '&s=32');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_106, currVal_106)) {
            this.renderer.setElementProperty(this._el_43, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_106));
            this._expr_106 = currVal_106;
        }
        var currVal_107 = this.context.issue.html_url;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_107, currVal_107)) {
            this.renderer.setElementProperty(this._el_51, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_107));
            this._expr_107 = currVal_107;
        }
        var currVal_108 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.issue.comments, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_108, currVal_108)) {
            this.renderer.setText(this._text_59, currVal_108);
            this._expr_108 = currVal_108;
        }
    };
    View_GithubIssueComponent0.prototype.destroyInternal = function () {
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this._vc_15.destroyNestedViews();
        this._vc_46.destroyNestedViews();
        this._vc_65.destroyNestedViews();
    };
    View_GithubIssueComponent0.prototype.detachInternal = function () {
        var animationTransition_fadeInState = this.componentType.animations['fadeInState'](this, this._el_0, this._expr_87, 'void');
    };
    View_GithubIssueComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_GithubIssueComponent1(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 11)) {
            return new View_GithubIssueComponent2(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        if ((nodeIndex == 13)) {
            return new View_GithubIssueComponent3(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        if ((nodeIndex == 15)) {
            return new View_GithubIssueComponent4(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        if ((nodeIndex == 46)) {
            return new View_GithubIssueComponent5(this.viewUtils, this, 46, this._anchor_46, this._vc_46);
        }
        if ((nodeIndex == 65)) {
            return new View_GithubIssueComponent6(this.viewUtils, this, 65, this._anchor_65, this._vc_65);
        }
        return null;
    };
    View_GithubIssueComponent0.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChange(this._el_4, this.context.issue) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubIssueComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent1 = (function (_super) {
    __extends(View_GithubIssueComponent1, _super);
    function View_GithubIssueComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent1, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssueComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'aria-label', 'Open issue', 'class', 'tooltipped tooltipped-n'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-issue-opened opened', 'height', '16', 'version', '1.1', 'viewBox', '0 0 14 16', 'width', '14'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, ':svg:use', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#issue-opened'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_GithubIssueComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent2 = (function (_super) {
    __extends(View_GithubIssueComponent2, _super);
    function View_GithubIssueComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent2, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssueComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'aria-label', 'Closed issue', 'class', 'tooltipped tooltipped-n'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-issue-closed closed', 'height', '16', 'version', '1.1', 'viewBox', '0 0 16 16', 'width', '16'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, ':svg:use', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#issue-closed'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_GithubIssueComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent2;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent3 = (function (_super) {
    __extends(View_GithubIssueComponent3, _super);
    function View_GithubIssueComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent3, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssueComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'aria-label', 'Open pull request', 'class', 'tooltipped tooltipped-n'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-git-pull-request open', 'height', '16', 'version', '1.1', 'viewBox', '0 0 12 16', 'width', '12'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, ':svg:use', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#git-pull-request'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_GithubIssueComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent3;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent4 = (function (_super) {
    __extends(View_GithubIssueComponent4, _super);
    function View_GithubIssueComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent4, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssueComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'aria-label', 'Merged pull request', 'class', 'tooltipped tooltipped-n'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-git-merge merged', 'height', '16', 'version', '1.1', 'viewBox', '0 0 12 16', 'width', '12'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, ':svg:use', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#git-merge'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_GithubIssueComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent4;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent5 = (function (_super) {
    __extends(View_GithubIssueComponent5, _super);
    function View_GithubIssueComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent5, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_8 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssueComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'a', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'tooltipped tooltipped-n', 'target', 'https://github.com/issues'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'img', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray8"](6, 'data-user', '', 'height', '20', 'width', '20'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_GithubIssueComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7 = (('https://github.com/issues?q=assignee%3A' + this.parentView.context.issue.assignee.login) + '+is%3Aopen');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_2, 'href', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_7));
            this._expr_7 = currVal_7;
        }
        var currVal_8 = ('View everything assigned to ' + this.parentView.context.issue.assignee.login);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-label', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = ('@' + this.parentView.context.issue.assignee.login);
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementProperty(this._el_4, 'alt', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = (this.parentView.context.issue.assignee.avatar_url + '&s=32');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_25__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_10));
            this._expr_10 = currVal_10;
        }
    };
    View_GithubIssueComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssueComponent5;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssueComponent6 = (function (_super) {
    __extends(View_GithubIssueComponent6, _super);
    function View_GithubIssueComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssueComponent6, renderType_GithubIssueComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._map_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["pureProxy2"](function (p0, p1) {
            return {
                backgroundColor: p0,
                color: p1
            };
        });
        this._expr_7 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssueComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'style', 'cursor: pointer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'label'), null);
        this._NgStyle_2_3 = new __WEBPACK_IMPORTED_MODULE_26__gendir_node_modules_angular_common_src_directives_ng_style_ngfactory__["a" /* Wrapper_NgStyle */](this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentView.parentIndex), new __WEBPACK_IMPORTED_MODULE_22__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_GithubIssueComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_common_src_directives_ng_style__["a" /* NgStyle */]) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgStyle_2_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssueComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this._map_6(('#' + this.context.$implicit.color), this.parentView.context.labelColor(this.context.$implicit.color));
        this._NgStyle_2_3.check_ngStyle(currVal_2_0_0, throwOnChange, false);
        this._NgStyle_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.name, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_GithubIssueComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssueComponent6.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClickLabel(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubIssueComponent6;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issue.component.ngfactory.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.issue[_ngcontent-%COMP%] {\n  display: table-row; }\n\n.issue-list-cell[_ngcontent-%COMP%] {\n  display: table-cell;\n  position: relative;\n  vertical-align: top;\n  border-top: 1px solid #eee;\n  padding: 8px 10px;\n  padding-top: 13px; }\n\n.cb[_ngcontent-%COMP%] {\n  width: 30px; }\n  .cb[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n    display: none; }\n\n.icon[_ngcontent-%COMP%] {\n  width: 40px;\n  text-align: center; }\n  .icon[_ngcontent-%COMP%]   .octicon-issue-opened[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   .octicon-git-pull-request[_ngcontent-%COMP%] {\n    color: #6cc644; }\n  .icon[_ngcontent-%COMP%]   .octicon-issue-closed[_ngcontent-%COMP%] {\n    color: #bd2c00; }\n  .icon[_ngcontent-%COMP%]   .merged.octicon[_ngcontent-%COMP%] {\n    color: #6e5494; }\n\n.title[_ngcontent-%COMP%] {\n  width: 480px;\n  word-break: break-word;\n  padding-top: 12px; }\n  .title[_ngcontent-%COMP%]   .issue-meta[_ngcontent-%COMP%] {\n    margin-bottom: 2px;\n    font-weight: normal;\n    color: #999; }\n\n.avatar[_ngcontent-%COMP%] {\n  width: 16px;\n  overflow: visible; }\n\n.comment[_ngcontent-%COMP%] {\n  width: 60px;\n  font-weight: bold;\n  text-align: right;\n  white-space: nowrap; }\n  .comment[_ngcontent-%COMP%]   .octicon[_ngcontent-%COMP%] {\n    vertical-align: middle; }\n\n.starred[_ngcontent-%COMP%]   .cb[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none; }\n\n.starred[_ngcontent-%COMP%]   .cb[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  display: block;\n  color: #ffde7b; }\n\n.starred[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none; }\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 4px;\n  margin: 0 0 0 1px;\n  font-size: 11px;\n  line-height: 1;\n  font-weight: bold;\n  border-radius: 2px;\n  font-family: Helvetica, arial, freesans, clean, sans-serif;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12); }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issue.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_github_github_issues_github_issues_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_github_github_issues_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_github_github_profile_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__github_issues_component_scss_shim_ngstyle__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__gendir_node_modules_angular_common_src_directives_ng_style_ngfactory__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_github_github_issue_from_now_pipe__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_github_github_issues_markdown_pipe__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_src_directives_ng_for__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_src_directives_ng_style__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_forms_src_directives_ng_control__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_forms_src_directives_ng_control_status__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_forms_src_directives_control_container__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__app_github_github_pagination_github_pagination_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__github_pagination_github_pagination_component_ngfactory__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__app_github_github_issue_github_issue_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__github_issue_github_issue_component_ngfactory__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_core_src_security__ = __webpack_require__(77);
/* unused harmony export Wrapper_GithubIssuesComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GithubIssuesComponentNgFactory; });
/* unused harmony export View_GithubIssuesComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













































var Wrapper_GithubIssuesComponent = (function () {
    function Wrapper_GithubIssuesComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_github_github_issues_github_issues_component__["a" /* GithubIssuesComponent */](p0, p1, p2, p3, p4, p5);
    }
    Wrapper_GithubIssuesComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_GithubIssuesComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_GithubIssuesComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_GithubIssuesComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_GithubIssuesComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_GithubIssuesComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_GithubIssuesComponent;
}());
var renderType_GithubIssuesComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_GithubIssuesComponent_Host0 = (function (_super) {
    __extends(View_GithubIssuesComponent_Host0, _super);
    function View_GithubIssuesComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubIssuesComponent_Host0, renderType_GithubIssuesComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_GithubIssuesComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'github-issues', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_GithubIssuesComponent0(this.viewUtils, this, 0, this._el_0);
        this._GithubIssuesComponent_0_3 = new Wrapper_GithubIssuesComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__["a" /* FormBuilder */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__angular_router_src_router__["a" /* Router */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_10__app_github_github_issues_service__["a" /* GithubIssuesService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_11__app_github_github_profile_service__["a" /* GithubProfileService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_12__app_app_service__["a" /* AppService */], this.parentIndex));
        this.compView_0.create(this._GithubIssuesComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._GithubIssuesComponent_0_3.context);
    };
    View_GithubIssuesComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_github_github_issues_github_issues_component__["a" /* GithubIssuesComponent */]) && (0 === requestNodeIndex))) {
            return this._GithubIssuesComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._GithubIssuesComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_GithubIssuesComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_GithubIssuesComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssuesComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var GithubIssuesComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('github-issues', View_GithubIssuesComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_github_github_issues_github_issues_component__["a" /* GithubIssuesComponent */]);
var styles_GithubIssuesComponent = [__WEBPACK_IMPORTED_MODULE_13__github_issues_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_GithubIssuesComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_GithubIssuesComponent, {});
var View_GithubIssuesComponent0 = (function (_super) {
    __extends(View_GithubIssuesComponent0, _super);
    function View_GithubIssuesComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubIssuesComponent0, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._map_86 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["pureProxy1"](function (p0) {
            return { 'padding-left': p0 };
        });
        this._expr_87 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 0, this._anchor_0);
        this._NgIf_0_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'columns'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'one-fifth column'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'predefined-queries'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n      ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_8 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](8, 6, this, this._anchor_8);
        this._TemplateRef_8_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 8, this._anchor_8);
        this._NgFor_8_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_8.vcRef, this._TemplateRef_8_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_26__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_9 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'menu'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'menu-heading'), null);
        this._text_14 = this.renderer.createText(this._el_13, 'Query history', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n      ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_16 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](16, 11, this, this._anchor_16);
        this._TemplateRef_16_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 16, this._anchor_16);
        this._NgFor_16_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_16.vcRef, this._TemplateRef_16_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_26__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_17 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n\n  ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'four-fifths column'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n    ', null);
        this._text_22 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_20, 'form', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'search-form'), null);
        this._FormGroupDirective_23_3 = new __WEBPACK_IMPORTED_MODULE_17__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__["a" /* Wrapper_FormGroupDirective */](null, null);
        this._ControlContainer_23_4 = this._FormGroupDirective_23_3.context;
        this._NgControlStatusGroup_23_5 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_23_4);
        this._text_24 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'form-control input-block search-input', 'formControlName', 'query', 'placeholder', 'GitHub search syntax is available'), null);
        this._NgStyle_25_3 = new __WEBPACK_IMPORTED_MODULE_19__gendir_node_modules_angular_common_src_directives_ng_style_ngfactory__["a" /* Wrapper_NgStyle */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_25), this.renderer);
        this._DefaultValueAccessor_25_4 = new __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_25));
        this._NG_VALUE_ACCESSOR_25_5 = [this._DefaultValueAccessor_25_4.context];
        this._FormControlName_25_6 = new __WEBPACK_IMPORTED_MODULE_21__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_23_4, null, null, this._NG_VALUE_ACCESSOR_25_5);
        this._NgControl_25_7 = this._FormControlName_25_6.context;
        this._NgControlStatus_25_8 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_25_7);
        this._text_26 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray16"](12, 'aria-hidden', 'true', 'class', 'octicon octicon-search search-icon', 'height', '16', 'version', '1.1', 'viewBox', '0 0 16 16', 'width', '16'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_27, ':svg:use', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#search'), null);
        this._text_30 = this.renderer.createText(this._el_27, '\n      ', null);
        this._text_31 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'search-count', 'id', 'search-form.search-count'), null);
        this._text_33 = this.renderer.createText(this._el_32, '', null);
        this._text_34 = this.renderer.createText(this._el_23, '\n      ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'formControlName', 'page', 'style', 'display: none;'), null);
        this._DefaultValueAccessor_35_3 = new __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_35));
        this._NG_VALUE_ACCESSOR_35_4 = [this._DefaultValueAccessor_35_3.context];
        this._FormControlName_35_5 = new __WEBPACK_IMPORTED_MODULE_21__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_23_4, null, null, this._NG_VALUE_ACCESSOR_35_4);
        this._NgControl_35_6 = this._FormControlName_35_5.context;
        this._NgControlStatus_35_7 = new __WEBPACK_IMPORTED_MODULE_18__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_35_6);
        this._text_36 = this.renderer.createText(this._el_23, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_20, '\n\n    ', null);
        this._anchor_38 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_38 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](38, 20, this, this._anchor_38);
        this._TemplateRef_38_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 38, this._anchor_38);
        this._NgIf_38_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_38.vcRef, this._TemplateRef_38_5);
        this._text_39 = this.renderer.createText(this._el_20, '\n\n    ', null);
        this._anchor_40 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_40 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](40, 20, this, this._anchor_40);
        this._TemplateRef_40_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 40, this._anchor_40);
        this._NgIf_40_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_40.vcRef, this._TemplateRef_40_5);
        this._text_41 = this.renderer.createText(this._el_20, '\n\n    ', null);
        this._anchor_42 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_42 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](42, 20, this, this._anchor_42);
        this._TemplateRef_42_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 42, this._anchor_42);
        this._NgIf_42_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_42.vcRef, this._TemplateRef_42_5);
        this._text_43 = this.renderer.createText(this._el_20, '\n  ', null);
        this._text_44 = this.renderer.createText(this._el_2, '\n\n', null);
        this._text_45 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_46 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'container'), null);
        this._NgStyle_46_3 = new __WEBPACK_IMPORTED_MODULE_19__gendir_node_modules_angular_common_src_directives_ng_style_ngfactory__["a" /* Wrapper_NgStyle */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_28__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_46), this.renderer);
        this._text_47 = this.renderer.createText(this._el_46, '\n  ', null);
        this._anchor_48 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._vc_48 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](48, 46, this, this._anchor_48);
        this._TemplateRef_48_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 48, this._anchor_48);
        this._NgIf_48_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_48.vcRef, this._TemplateRef_48_5);
        this._text_49 = this.renderer.createText(this._el_46, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_23, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_23));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_25, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'keyup.enter', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_25));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_35, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_35));
        this._pipe_fromNow_0 = new __WEBPACK_IMPORTED_MODULE_22__app_github_github_issue_from_now_pipe__["a" /* FromNowPipe */]();
        this._pipe_markdown_1 = new __WEBPACK_IMPORTED_MODULE_23__app_github_github_issues_markdown_pipe__["a" /* MarkdownPipe */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */], this.parentIndex));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._anchor_38,
            this._text_39,
            this._anchor_40,
            this._text_41,
            this._anchor_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._anchor_48,
            this._text_49
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_GithubIssuesComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_31__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_31__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_32__angular_common_src_directives_ng_style__["a" /* NgStyle */]) && (25 === requestNodeIndex))) {
            return this._NgStyle_25_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_33__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_34__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_35__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && (25 === requestNodeIndex))) {
            return this._FormControlName_25_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_36__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (25 === requestNodeIndex))) {
            return this._NgControl_25_7;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_37__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_8.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_33__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (35 === requestNodeIndex))) {
            return this._DefaultValueAccessor_35_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_34__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (35 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_35_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_35__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && (35 === requestNodeIndex))) {
            return this._FormControlName_35_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_36__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (35 === requestNodeIndex))) {
            return this._NgControl_35_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_37__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (35 === requestNodeIndex))) {
            return this._NgControlStatus_35_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_38__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */]) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._FormGroupDirective_23_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_39__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ControlContainer_23_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_37__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._NgControlStatusGroup_23_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (38 === requestNodeIndex))) {
            return this._TemplateRef_38_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (38 === requestNodeIndex))) {
            return this._NgIf_38_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (40 === requestNodeIndex))) {
            return this._TemplateRef_40_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (40 === requestNodeIndex))) {
            return this._NgIf_40_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (42 === requestNodeIndex))) {
            return this._TemplateRef_42_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (42 === requestNodeIndex))) {
            return this._NgIf_42_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (48 === requestNodeIndex))) {
            return this._TemplateRef_48_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (48 === requestNodeIndex))) {
            return this._NgIf_48_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_32__angular_common_src_directives_ng_style__["a" /* NgStyle */]) && ((46 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgStyle_46_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.error;
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_8_0_0 = this.context.predefinedQueryButtons;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_16_0_0 = this.context.appService.getQueryHistory().slice(1, (1 + 5));
        this._NgFor_16_6.check_ngForOf(currVal_16_0_0, throwOnChange, false);
        this._NgFor_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_23_0_0 = this.context.form;
        this._FormGroupDirective_23_3.check_form(currVal_23_0_0, throwOnChange, false);
        this._FormGroupDirective_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatusGroup_23_5.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_25_0_0 = this._map_86(this.context.searchCountWidth);
        this._NgStyle_25_3.check_ngStyle(currVal_25_0_0, throwOnChange, false);
        this._NgStyle_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        this._DefaultValueAccessor_25_4.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_25_2_0 = 'query';
        this._FormControlName_25_6.check_name(currVal_25_2_0, throwOnChange, false);
        this._FormControlName_25_6.ngDoCheck(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_8.ngDoCheck(this, this._el_25, throwOnChange);
        this._DefaultValueAccessor_35_3.ngDoCheck(this, this._el_35, throwOnChange);
        var currVal_35_1_0 = 'page';
        this._FormControlName_35_5.check_name(currVal_35_1_0, throwOnChange, false);
        this._FormControlName_35_5.ngDoCheck(this, this._el_35, throwOnChange);
        this._NgControlStatus_35_7.ngDoCheck(this, this._el_35, throwOnChange);
        var currVal_38_0_0 = (this.context.searchResult.linkPage ? !!(this.context.searchResult.linkPage.prev || this.context.searchResult.linkPage.next) : false);
        this._NgIf_38_6.check_ngIf(currVal_38_0_0, throwOnChange, false);
        this._NgIf_38_6.ngDoCheck(this, this._anchor_38, throwOnChange);
        var currVal_40_0_0 = (this.context.searchResult.issues.length > 0);
        this._NgIf_40_6.check_ngIf(currVal_40_0_0, throwOnChange, false);
        this._NgIf_40_6.ngDoCheck(this, this._anchor_40, throwOnChange);
        var currVal_42_0_0 = (this.context.searchResult.issues.length == 0);
        this._NgIf_42_6.check_ngIf(currVal_42_0_0, throwOnChange, false);
        this._NgIf_42_6.ngDoCheck(this, this._anchor_42, throwOnChange);
        var currVal_46_0_0 = this.context.issueDescStyle;
        this._NgStyle_46_3.check_ngStyle(currVal_46_0_0, throwOnChange, false);
        this._NgStyle_46_3.ngDoCheck(this, this._el_46, throwOnChange);
        var currVal_48_0_0 = this.context.focusedIssue;
        this._NgIf_48_6.check_ngIf(currVal_48_0_0, throwOnChange, false);
        this._NgIf_48_6.ngDoCheck(this, this._anchor_48, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_38.detectChangesInNestedViews(throwOnChange);
        this._vc_40.detectChangesInNestedViews(throwOnChange);
        this._vc_42.detectChangesInNestedViews(throwOnChange);
        this._vc_48.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_23_5.checkHost(this, this, this._el_23, throwOnChange);
        this._NgControlStatus_25_8.checkHost(this, this, this._el_25, throwOnChange);
        var currVal_87 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.searchResult.total_count, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_87, currVal_87)) {
            this.renderer.setText(this._text_33, currVal_87);
            this._expr_87 = currVal_87;
        }
        this._NgControlStatus_35_7.checkHost(this, this, this._el_35, throwOnChange);
    };
    View_GithubIssuesComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_38.destroyNestedViews();
        this._vc_40.destroyNestedViews();
        this._vc_42.destroyNestedViews();
        this._vc_48.destroyNestedViews();
        this._FormControlName_25_6.ngOnDestroy();
        this._FormControlName_35_5.ngOnDestroy();
        this._FormGroupDirective_23_3.ngOnDestroy();
    };
    View_GithubIssuesComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_GithubIssuesComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 8)) {
            return new View_GithubIssuesComponent2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 16)) {
            return new View_GithubIssuesComponent3(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 38)) {
            return new View_GithubIssuesComponent4(this.viewUtils, this, 38, this._anchor_38, this._vc_38);
        }
        if ((nodeIndex == 40)) {
            return new View_GithubIssuesComponent5(this.viewUtils, this, 40, this._anchor_40, this._vc_40);
        }
        if ((nodeIndex == 42)) {
            return new View_GithubIssuesComponent7(this.viewUtils, this, 42, this._anchor_42, this._vc_42);
        }
        if ((nodeIndex == 48)) {
            return new View_GithubIssuesComponent8(this.viewUtils, this, 48, this._anchor_48, this._vc_48);
        }
        return null;
    };
    View_GithubIssuesComponent0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_23_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_GithubIssuesComponent0.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_25_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'keyup.enter')) {
            var pd_sub_0 = (this.context.onEnterQuery(this._el_25.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_GithubIssuesComponent0.prototype.handleEvent_35 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_35_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_GithubIssuesComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent1 = (function (_super) {
    __extends(View_GithubIssuesComponent1, _super);
    function View_GithubIssuesComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent1, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'flash flash-error mb-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_GithubIssuesComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.error, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_GithubIssuesComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssuesComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent2 = (function (_super) {
    __extends(View_GithubIssuesComponent2, _super);
    function View_GithubIssuesComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent2, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'btn btn-outline btn-sm mb-1', 'type', 'button'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_GithubIssuesComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.text, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_GithubIssuesComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent2.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClickPredefinedQuery(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubIssuesComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent3 = (function (_super) {
    __extends(View_GithubIssuesComponent3, _super);
    function View_GithubIssuesComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent3, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'menu-item', 'style', 'cursor: pointer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_GithubIssuesComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '\n        ', this.context.$implicit.q, '\n      ');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_GithubIssuesComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.selectQuery(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubIssuesComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent4 = (function (_super) {
    __extends(View_GithubIssuesComponent4, _super);
    function View_GithubIssuesComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent4, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssuesComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'github-pagination', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_41__github_pagination_github_pagination_component_ngfactory__["a" /* View_GithubPaginationComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._GithubPaginationComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_41__github_pagination_github_pagination_component_ngfactory__["b" /* Wrapper_GithubPaginationComponent */]();
        this.compView_0.create(this._GithubPaginationComponent_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'jump', null), this.eventHandler(this.handleEvent_0));
        this._GithubPaginationComponent_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return null;
    };
    View_GithubIssuesComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_40__app_github_github_pagination_github_pagination_component__["a" /* GithubPaginationComponent */]) && (0 === requestNodeIndex))) {
            return this._GithubPaginationComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context.searchResult.linkPage;
        this._GithubPaginationComponent_0_3.check_page(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.parentView.context.searchResult.linkHeader;
        this._GithubPaginationComponent_0_3.check_link(currVal_0_0_1, throwOnChange, false);
        this._GithubPaginationComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_GithubIssuesComponent4.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._GithubPaginationComponent_0_3.ngOnDestroy();
    };
    View_GithubIssuesComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent4.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'jump')) {
            var pd_sub_0 = (this.parentView.context.onJump($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubIssuesComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent5 = (function (_super) {
    __extends(View_GithubIssuesComponent5, _super);
    function View_GithubIssuesComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent5, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssuesComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_26__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_GithubIssuesComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_31__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.searchResult.issues;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_GithubIssuesComponent5.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_GithubIssuesComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_GithubIssuesComponent6(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_GithubIssuesComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent6 = (function (_super) {
    __extends(View_GithubIssuesComponent6, _super);
    function View_GithubIssuesComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent6, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssuesComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'github-issue'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'github-issue', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_2 = new __WEBPACK_IMPORTED_MODULE_43__github_issue_github_issue_component_ngfactory__["a" /* View_GithubIssueComponent0 */](this.viewUtils, this, 2, this._el_2);
        this._GithubIssueComponent_2_3 = new __WEBPACK_IMPORTED_MODULE_43__github_issue_github_issue_component_ngfactory__["b" /* Wrapper_GithubIssueComponent */]();
        this.compView_2.create(this._GithubIssueComponent_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'select', null, 'clickLabel', null, 'hover', null, 'hide', null), this.eventHandler(this.handleEvent_2));
        this._GithubIssueComponent_2_3.subscribe(this, this.eventHandler(this.handleEvent_2), true, true, true, true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_GithubIssuesComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_42__app_github_github_issue_github_issue_component__["a" /* GithubIssueComponent */]) && (2 === requestNodeIndex))) {
            return this._GithubIssueComponent_2_3.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._GithubIssueComponent_2_3.check_issue(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.parentView.parentView.context.isSelected(this.context.$implicit);
        this._GithubIssueComponent_2_3.check_selected(currVal_2_0_1, throwOnChange, false);
        this._GithubIssueComponent_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._GithubIssueComponent_2_3.context.ngAfterViewInit();
            }
        }
    };
    View_GithubIssuesComponent6.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this._GithubIssueComponent_2_3.ngOnDestroy();
    };
    View_GithubIssuesComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent6.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'select')) {
            var pd_sub_0 = (this.parentView.parentView.context.onSelect($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'clickLabel')) {
            var pd_sub_1 = (this.parentView.parentView.context.onClickLabel($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'hover')) {
            var pd_sub_2 = (this.parentView.parentView.context.onHover($event) !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'hide')) {
            var pd_sub_3 = (this.parentView.parentView.context.onHide($event) !== false);
            result = (pd_sub_3 && result);
        }
        return result;
    };
    return View_GithubIssuesComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent7 = (function (_super) {
    __extends(View_GithubIssuesComponent7, _super);
    function View_GithubIssuesComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent7, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssuesComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'blankslate mt-1'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, ':svg:svg', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray16"](10, 'aria-hidden', 'true', 'class', 'octicon octicon-issue-opened', 'height', '24', 'version', '1.1', 'width', '24'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, ':svg:use', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, ':xlink:href', '#issue-opened'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'h3', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_8 = this.renderer.createText(this._el_7, 'No found issues', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_11 = this.renderer.createText(this._el_10, 'Please check the query.', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ]), null);
        return null;
    };
    View_GithubIssuesComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssuesComponent7;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent8 = (function (_super) {
    __extends(View_GithubIssuesComponent8, _super);
    function View_GithubIssuesComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent8, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_32 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_33 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_34 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_35 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_36 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_38 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'the-issue markdown-body comment-body'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'title'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n      ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'number'), null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'meta'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_13 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'height', '20', 'width', '20'), null);
        this._text_14 = this.renderer.createText(this._el_11, '\n      ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'author'), null);
        this._text_16 = this.renderer.createText(this._el_15, '', null);
        this._text_17 = this.renderer.createText(this._el_11, ' opened this issue\n       ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_11, 'time', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'htmlIs', 'relative-time'), null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_11, '', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_22 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](22, 0, this, this._anchor_22);
        this._TemplateRef_22_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 22, this._anchor_22);
        this._NgIf_22_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_24 = new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_view_container__["a" /* ViewContainer */](24, 0, this, this._anchor_24);
        this._TemplateRef_24_5 = new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 24, this._anchor_24);
        this._NgIf_24_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_0, '\n  ', null);
        this._pipe_fromNow_0_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["pureProxy1"](this.parentView._pipe_fromNow_0.transform.bind(this.parentView._pipe_fromNow_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._anchor_24,
            this._text_25
        ]), null);
        return null;
    };
    View_GithubIssuesComponent8.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        return notFoundResult;
    };
    View_GithubIssuesComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        var currVal_22_0_0 = this.parentView.context.focusedIssue.body;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        var currVal_24_0_0 = !this.parentView.context.focusedIssue.body;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        var currVal_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.focusedIssue.title, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setText(this._text_5, currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '#', this.parentView.context.focusedIssue.number, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setText(this._text_8, currVal_33);
            this._expr_33 = currVal_33;
        }
        var currVal_34 = (this.parentView.context.focusedIssue.user.avatar_url + '&s=32');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_34, currVal_34)) {
            this.renderer.setElementProperty(this._el_13, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_44__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_34));
            this._expr_34 = currVal_34;
        }
        var currVal_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.focusedIssue.user.login, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_35, currVal_35)) {
            this.renderer.setText(this._text_16, currVal_35);
            this._expr_35 = currVal_35;
        }
        valUnwrapper.reset();
        var currVal_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["castByValue"](this._pipe_fromNow_0_0, this.parentView._pipe_fromNow_0.transform)(this.parentView.context.focusedIssue.created_at)), '');
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_36, currVal_36))) {
            this.renderer.setText(this._text_19, currVal_36);
            this._expr_36 = currVal_36;
        }
        var currVal_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '\n      · ', this.parentView.context.focusedIssue.comments, ' comments\n    ');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_38, currVal_38)) {
            this.renderer.setText(this._text_20, currVal_38);
            this._expr_38 = currVal_38;
        }
    };
    View_GithubIssuesComponent8.prototype.destroyInternal = function () {
        this._vc_22.destroyNestedViews();
        this._vc_24.destroyNestedViews();
    };
    View_GithubIssuesComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubIssuesComponent8.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 22)) {
            return new View_GithubIssuesComponent9(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        if ((nodeIndex == 24)) {
            return new View_GithubIssuesComponent10(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    return View_GithubIssuesComponent8;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent9 = (function (_super) {
    __extends(View_GithubIssuesComponent9, _super);
    function View_GithubIssuesComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent9, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubIssuesComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._pipe_markdown_1_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["pureProxy1"](this.parentView.parentView._pipe_markdown_1.transform.bind(this.parentView.parentView._pipe_markdown_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_GithubIssuesComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new __WEBPACK_IMPORTED_MODULE_24__angular_core_src_change_detection_change_detection_util__["c" /* ValueUnwrapper */]();
        valUnwrapper.reset();
        var currVal_1 = valUnwrapper.unwrap(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["castByValue"](this._pipe_markdown_1_0, this.parentView.parentView._pipe_markdown_1.transform)(this.parentView.parentView.context.focusedIssue.body));
        if ((valUnwrapper.hasWrappedValue || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1))) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_44__angular_core_src_security__["b" /* SecurityContext */].HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_GithubIssuesComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssuesComponent9;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubIssuesComponent10 = (function (_super) {
    __extends(View_GithubIssuesComponent10, _super);
    function View_GithubIssuesComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubIssuesComponent10, renderType_GithubIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubIssuesComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'No description provided.', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_GithubIssuesComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubIssuesComponent10;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issues.component.ngfactory.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.github-issue[_ngcontent-%COMP%] {\n  list-style: none; }\n\n.predefined-queries[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%; }\n\n.search-form[_ngcontent-%COMP%] {\n  position: relative; }\n  .search-form[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    color: #ccc;\n    position: absolute;\n    top: 9px;\n    left: 8px; }\n  .search-form[_ngcontent-%COMP%]   .search-count[_ngcontent-%COMP%] {\n    color: #aaa;\n    position: absolute;\n    height: 30px;\n    top: 6px;\n    left: 31px; }\n  .search-form[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    padding-left: 30px; }\n\n.container[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: auto;\n  margin: 2px; }\n\n.the-issue[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 640px;\n  height: 100%;\n  margin: auto 0;\n  padding: 0.5rem;\n  border: 1px solid gray;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1); }\n  .the-issue[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .the-issue[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%] {\n    font-weight: bold; }\n  .the-issue[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n    color: #aaa; }\n  .the-issue[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    border: 1px solid #ddd;\n    padding: 15px;\n    border-radius: 3px; }\n  .the-issue[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n    margin: 2px 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .the-issue[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      margin: 2px; }\n\n.comment-body[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: visible;\n  font-size: 14px; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-issues.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_github_github_pagination_github_pagination_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__github_pagination_component_scss_shim_ngstyle__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_src_directives_ng_class__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_GithubPaginationComponent; });
/* unused harmony export GithubPaginationComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return View_GithubPaginationComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




















var Wrapper_GithubPaginationComponent = (function () {
    function Wrapper_GithubPaginationComponent() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_github_github_pagination_github_pagination_component__["a" /* GithubPaginationComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_GithubPaginationComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_GithubPaginationComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_GithubPaginationComponent.prototype.check_page = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.page = currValue;
            this._changes['page'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_GithubPaginationComponent.prototype.check_link = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.link = currValue;
            this._changes['link'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_GithubPaginationComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_GithubPaginationComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_GithubPaginationComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_GithubPaginationComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.jump.subscribe(_eventHandler.bind(view, 'jump')));
        }
    };
    return Wrapper_GithubPaginationComponent;
}());
var renderType_GithubPaginationComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_GithubPaginationComponent_Host0 = (function (_super) {
    __extends(View_GithubPaginationComponent_Host0, _super);
    function View_GithubPaginationComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubPaginationComponent_Host0, renderType_GithubPaginationComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_GithubPaginationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'github-pagination', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_GithubPaginationComponent0(this.viewUtils, this, 0, this._el_0);
        this._GithubPaginationComponent_0_3 = new Wrapper_GithubPaginationComponent();
        this.compView_0.create(this._GithubPaginationComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._GithubPaginationComponent_0_3.context);
    };
    View_GithubPaginationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_github_github_pagination_github_pagination_component__["a" /* GithubPaginationComponent */]) && (0 === requestNodeIndex))) {
            return this._GithubPaginationComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_GithubPaginationComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._GithubPaginationComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_GithubPaginationComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._GithubPaginationComponent_0_3.ngOnDestroy();
    };
    View_GithubPaginationComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubPaginationComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var GithubPaginationComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('github-pagination', View_GithubPaginationComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_github_github_pagination_github_pagination_component__["a" /* GithubPaginationComponent */]);
var styles_GithubPaginationComponent = [__WEBPACK_IMPORTED_MODULE_8__github_pagination_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_GithubPaginationComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_GithubPaginationComponent, {});
var View_GithubPaginationComponent0 = (function (_super) {
    __extends(View_GithubPaginationComponent0, _super);
    function View_GithubPaginationComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_GithubPaginationComponent0, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_GithubPaginationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'ul', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'pages'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page-prev'), null);
        this._NgClass_2_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, 'Previous', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_5 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 5, this._anchor_5);
        this._NgFor_5_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_5.vcRef, this._TemplateRef_5_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_6 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_7 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](7, 0, this, this._anchor_7);
        this._TemplateRef_7_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 7, this._anchor_7);
        this._NgIf_7_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_9 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](9, 0, this, this._anchor_9);
        this._TemplateRef_9_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 9, this._anchor_9);
        this._NgFor_9_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_9.vcRef, this._TemplateRef_9_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_10 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 0, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgIf_11_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_0, '\n  \n  ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_13 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_linker_view_container__["a" /* ViewContainer */](13, 0, this, this._anchor_13);
        this._TemplateRef_13_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 13, this._anchor_13);
        this._NgFor_13_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_13.vcRef, this._TemplateRef_13_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_14 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page-next'), null);
        this._NgClass_15_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_15), this.renderer);
        this._text_16 = this.renderer.createText(this._el_15, 'Next', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_15, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_15));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_GithubPaginationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._NgClass_2_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (9 === requestNodeIndex))) {
            return this._NgFor_9_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._NgClass_15_3.context;
        }
        return notFoundResult;
    };
    View_GithubPaginationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = 'page-prev';
        this._NgClass_2_3.check_klass(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = (this.context.hasNoPrevious ? 'has-no-prev' : '');
        this._NgClass_2_3.check_ngClass(currVal_2_0_1, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_5_0_0 = this.context.leftItems;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.context.omitLeft;
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        var currVal_9_0_0 = this.context.pages;
        this._NgFor_9_6.check_ngForOf(currVal_9_0_0, throwOnChange, false);
        this._NgFor_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        var currVal_11_0_0 = this.context.omitRight;
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        var currVal_13_0_0 = this.context.rightItems;
        this._NgFor_13_6.check_ngForOf(currVal_13_0_0, throwOnChange, false);
        this._NgFor_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        var currVal_15_0_0 = 'page-next';
        this._NgClass_15_3.check_klass(currVal_15_0_0, throwOnChange, false);
        var currVal_15_0_1 = (this.context.hasNoNext ? 'has-no-next' : '');
        this._NgClass_15_3.check_ngClass(currVal_15_0_1, throwOnChange, false);
        this._NgClass_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
    };
    View_GithubPaginationComponent0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_13.destroyNestedViews();
    };
    View_GithubPaginationComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_GithubPaginationComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 7)) {
            return new View_GithubPaginationComponent2(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        if ((nodeIndex == 9)) {
            return new View_GithubPaginationComponent3(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 11)) {
            return new View_GithubPaginationComponent4(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        if ((nodeIndex == 13)) {
            return new View_GithubPaginationComponent5(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        return null;
    };
    View_GithubPaginationComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick((this.context.current - 1)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_GithubPaginationComponent0.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick((this.context.current + 1)) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubPaginationComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubPaginationComponent1 = (function (_super) {
    __extends(View_GithubPaginationComponent1, _super);
    function View_GithubPaginationComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubPaginationComponent1, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubPaginationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_GithubPaginationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_GithubPaginationComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubPaginationComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClick(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubPaginationComponent1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubPaginationComponent2 = (function (_super) {
    __extends(View_GithubPaginationComponent2, _super);
    function View_GithubPaginationComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubPaginationComponent2, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubPaginationComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page gap'), null);
        this._text_1 = this.renderer.createText(this._el_0, '…', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_GithubPaginationComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubPaginationComponent2;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubPaginationComponent3 = (function (_super) {
    __extends(View_GithubPaginationComponent3, _super);
    function View_GithubPaginationComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubPaginationComponent3, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubPaginationComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page'), null);
        this._NgClass_0_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentView.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_GithubPaginationComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_GithubPaginationComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'page';
        this._NgClass_0_3.check_klass(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = ((this.context.$implicit == this.parentView.context.current) ? 'current' : '');
        this._NgClass_0_3.check_ngClass(currVal_0_0_1, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_GithubPaginationComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubPaginationComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClick(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubPaginationComponent3;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubPaginationComponent4 = (function (_super) {
    __extends(View_GithubPaginationComponent4, _super);
    function View_GithubPaginationComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubPaginationComponent4, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_GithubPaginationComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page gap'), null);
        this._text_1 = this.renderer.createText(this._el_0, '…', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_GithubPaginationComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_GithubPaginationComponent4;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_GithubPaginationComponent5 = (function (_super) {
    __extends(View_GithubPaginationComponent5, _super);
    function View_GithubPaginationComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_GithubPaginationComponent5, renderType_GithubPaginationComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_GithubPaginationComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'page'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_GithubPaginationComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_GithubPaginationComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_GithubPaginationComponent5.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClick(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_GithubPaginationComponent5;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-pagination.component.ngfactory.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.pages[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .pages[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    cursor: pointer; }\n  .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .page-prev[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .page-next[_ngcontent-%COMP%] {\n    border-top: 1px #aaa solid;\n    border-left: 1px #aaa solid;\n    border-bottom: 1px #aaa solid;\n    text-align: center;\n    padding: 7px 12px;\n    margin: 4px 0;\n    color: #4183c4;\n    font-weight: bold;\n    list-style-type: none; }\n  .pages[_ngcontent-%COMP%]   .page-next[_ngcontent-%COMP%] {\n    border-right: 1px #aaa solid;\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .pages[_ngcontent-%COMP%]   .page-prev[_ngcontent-%COMP%] {\n    border-top-left-radius: 3px;\n    border-bottom-left-radius: 3px; }\n  .pages[_ngcontent-%COMP%]   .page.current[_ngcontent-%COMP%] {\n    color: white;\n    background-color: #4183c4; }\n  .pages[_ngcontent-%COMP%]   .page-prev.has-no-prev[_ngcontent-%COMP%], .pages[_ngcontent-%COMP%]   .page-next.has-no-next[_ngcontent-%COMP%] {\n    color: #d3d3d3;\n    pointer-events: none; }\n  .pages[_ngcontent-%COMP%]   .page.gap[_ngcontent-%COMP%] {\n    color: #d3d3d3; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/github-pagination.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_not_found404_not_found404_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found404_component_scss_shim_ngstyle__ = __webpack_require__(469);
/* unused harmony export Wrapper_NotFound404Component */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFound404ComponentNgFactory; });
/* unused harmony export View_NotFound404Component0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};








var Wrapper_NotFound404Component = (function () {
    function Wrapper_NotFound404Component() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_not_found404_not_found404_component__["a" /* NotFound404Component */]();
    }
    Wrapper_NotFound404Component.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NotFound404Component.prototype.ngOnDestroy = function () {
    };
    Wrapper_NotFound404Component.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NotFound404Component.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NotFound404Component.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NotFound404Component.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NotFound404Component;
}());
var renderType_NotFound404Component_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_NotFound404Component_Host0 = (function (_super) {
    __extends(View_NotFound404Component_Host0, _super);
    function View_NotFound404Component_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NotFound404Component_Host0, renderType_NotFound404Component_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NotFound404Component_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-not-found404', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_NotFound404Component0(this.viewUtils, this, 0, this._el_0);
        this._NotFound404Component_0_3 = new Wrapper_NotFound404Component();
        this.compView_0.create(this._NotFound404Component_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._NotFound404Component_0_3.context);
    };
    View_NotFound404Component_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_not_found404_not_found404_component__["a" /* NotFound404Component */]) && (0 === requestNodeIndex))) {
            return this._NotFound404Component_0_3.context;
        }
        return notFoundResult;
    };
    View_NotFound404Component_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NotFound404Component_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NotFound404Component_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NotFound404Component_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NotFound404Component_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var NotFound404ComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-not-found404', View_NotFound404Component_Host0, __WEBPACK_IMPORTED_MODULE_0__app_not_found404_not_found404_component__["a" /* NotFound404Component */]);
var styles_NotFound404Component = [__WEBPACK_IMPORTED_MODULE_7__not_found404_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_NotFound404Component = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_NotFound404Component, {});
var View_NotFound404Component0 = (function (_super) {
    __extends(View_NotFound404Component0, _super);
    function View_NotFound404Component0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_NotFound404Component0, renderType_NotFound404Component, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_NotFound404Component0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  Not found\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_4 = this.renderer.createText(this._el_3, '\n  404\n', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5
        ]), null);
        return null;
    };
    return View_NotFound404Component0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/not-found404.component.ngfactory.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/not-found404.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_select_selected_issues_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_github_github_issues_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selected_issues_component_scss_shim_ngstyle__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_src_location_location_strategy__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_for__ = __webpack_require__(90);
/* unused harmony export Wrapper_SelectedIssuesComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SelectedIssuesComponentNgFactory; });
/* unused harmony export View_SelectedIssuesComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
























var Wrapper_SelectedIssuesComponent = (function () {
    function Wrapper_SelectedIssuesComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_select_selected_issues_component__["a" /* SelectedIssuesComponent */](p0, p1, p2);
    }
    Wrapper_SelectedIssuesComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SelectedIssuesComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SelectedIssuesComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_SelectedIssuesComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SelectedIssuesComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SelectedIssuesComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SelectedIssuesComponent;
}());
var renderType_SelectedIssuesComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_SelectedIssuesComponent_Host0 = (function (_super) {
    __extends(View_SelectedIssuesComponent_Host0, _super);
    function View_SelectedIssuesComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SelectedIssuesComponent_Host0, renderType_SelectedIssuesComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_SelectedIssuesComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-selected-issues', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_SelectedIssuesComponent0(this.viewUtils, this, 0, this._el_0);
        this._SelectedIssuesComponent_0_3 = new Wrapper_SelectedIssuesComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_http_src_http__["a" /* Http */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_app_service__["a" /* AppService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__app_github_github_issues_service__["a" /* GithubIssuesService */], this.parentIndex));
        this.compView_0.create(this._SelectedIssuesComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._SelectedIssuesComponent_0_3.context);
    };
    View_SelectedIssuesComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_select_selected_issues_component__["a" /* SelectedIssuesComponent */]) && (0 === requestNodeIndex))) {
            return this._SelectedIssuesComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SelectedIssuesComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SelectedIssuesComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SelectedIssuesComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SelectedIssuesComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SelectedIssuesComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var SelectedIssuesComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-selected-issues', View_SelectedIssuesComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_select_selected_issues_component__["a" /* SelectedIssuesComponent */]);
var styles_SelectedIssuesComponent = [__WEBPACK_IMPORTED_MODULE_10__selected_issues_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_SelectedIssuesComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_SelectedIssuesComponent, {});
var View_SelectedIssuesComponent0 = (function (_super) {
    __extends(View_SelectedIssuesComponent0, _super);
    function View_SelectedIssuesComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SelectedIssuesComponent0, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_SelectedIssuesComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_0 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](0, null, this, this._anchor_0);
        this._TemplateRef_0_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 0, this._anchor_0);
        this._NgIf_0_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_0.vcRef, this._TemplateRef_0_5);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, null, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._anchor_0,
            this._text_1,
            this._anchor_2
        ]), null);
        return null;
    };
    View_SelectedIssuesComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (0 === requestNodeIndex))) {
            return this._TemplateRef_0_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (0 === requestNodeIndex))) {
            return this._NgIf_0_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_SelectedIssuesComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = (this.context.issues.length == 0);
        this._NgIf_0_6.check_ngIf(currVal_0_0_0, throwOnChange, false);
        this._NgIf_0_6.ngDoCheck(this, this._anchor_0, throwOnChange);
        var currVal_2_0_0 = (this.context.issues.length > 0);
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_SelectedIssuesComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_2.destroyNestedViews();
    };
    View_SelectedIssuesComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 0)) {
            return new View_SelectedIssuesComponent1(this.viewUtils, this, 0, this._anchor_0, this._vc_0);
        }
        if ((nodeIndex == 2)) {
            return new View_SelectedIssuesComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_SelectedIssuesComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent1 = (function (_super) {
    __extends(View_SelectedIssuesComponent1, _super);
    function View_SelectedIssuesComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent1, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_SelectedIssuesComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'blankslate'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'h3', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'No issues were selected.', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Please select issues ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_5, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'routerLink', '/search'), null);
        this._RouterLinkWithHref_7_3 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, 'here', null);
        this._text_9 = this.renderer.createText(this._el_5, '.', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10
        ]), [disposable_0]);
        return null;
    };
    View_SelectedIssuesComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    View_SelectedIssuesComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = '/search';
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
    };
    View_SelectedIssuesComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    View_SelectedIssuesComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SelectedIssuesComponent1.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_SelectedIssuesComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent2 = (function (_super) {
    __extends(View_SelectedIssuesComponent2, _super);
    function View_SelectedIssuesComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent2, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_40 = __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_SelectedIssuesComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'columns'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'two-thirds column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'ul', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issues'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgFor_6_6 = new __WEBPACK_IMPORTED_MODULE_20__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_22__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.ref);
        this._text_7 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n\n  ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'one-third column'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n    ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'header', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'header my-2'), null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_14 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 14, this._anchor_14);
        this._NgIf_14_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_12, '\n      ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_16 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](16, 12, this, this._anchor_16);
        this._TemplateRef_16_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 16, this._anchor_16);
        this._NgIf_16_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_16.vcRef, this._TemplateRef_16_5);
        this._text_17 = this.renderer.createText(this._el_12, '\n      ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_18 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](18, 12, this, this._anchor_18);
        this._TemplateRef_18_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 18, this._anchor_18);
        this._NgIf_18_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_12, ' selected.\n    ', null);
        this._text_20 = this.renderer.createText(this._el_10, '\n\n    ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'div', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, '\n      ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_21, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'btn btn-outline btn-sm', 'style', 'display: block; width: 100%', 'type', 'button'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'Clear all', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_10, '\n  ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_23, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_23));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._anchor_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27
        ]), [disposable_0]);
        return null;
    };
    View_SelectedIssuesComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (16 === requestNodeIndex))) {
            return this._NgIf_16_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        return notFoundResult;
    };
    View_SelectedIssuesComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.parentView.context.issues;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_14_0_0 = (this.parentView.context.issues.length > 1);
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_16_0_0 = (this.parentView.context.issues.length > 1);
        this._NgIf_16_6.check_ngIf(currVal_16_0_0, throwOnChange, false);
        this._NgIf_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_18_0_0 = (this.parentView.context.issues.length <= 1);
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        var currVal_40 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '\n      ', this.parentView.context.issues.length, ' issue');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setText(this._text_13, currVal_40);
            this._expr_40 = currVal_40;
        }
    };
    View_SelectedIssuesComponent2.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._vc_14.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_18.destroyNestedViews();
    };
    View_SelectedIssuesComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_SelectedIssuesComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_SelectedIssuesComponent3(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 14)) {
            return new View_SelectedIssuesComponent4(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 16)) {
            return new View_SelectedIssuesComponent5(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 18)) {
            return new View_SelectedIssuesComponent6(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        return null;
    };
    View_SelectedIssuesComponent2.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onClickClearAll() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_SelectedIssuesComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent3 = (function (_super) {
    __extends(View_SelectedIssuesComponent3, _super);
    function View_SelectedIssuesComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent3, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_9 = __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_10 = __WEBPACK_IMPORTED_MODULE_21__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_SelectedIssuesComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'li', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'title'), null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'href', '#'), null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'issue-meta text-small'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n      ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_SelectedIssuesComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit.title, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setText(this._text_4, currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](2, '', this.context.$implicit.repository.full_name, '#', this.context.$implicit.number, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_7, currVal_10);
            this._expr_10 = currVal_10;
        }
    };
    View_SelectedIssuesComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SelectedIssuesComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent4 = (function (_super) {
    __extends(View_SelectedIssuesComponent4, _super);
    function View_SelectedIssuesComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent4, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_SelectedIssuesComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, 's', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_SelectedIssuesComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SelectedIssuesComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent5 = (function (_super) {
    __extends(View_SelectedIssuesComponent5, _super);
    function View_SelectedIssuesComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent5, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_SelectedIssuesComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, 'are', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_SelectedIssuesComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SelectedIssuesComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_SelectedIssuesComponent6 = (function (_super) {
    __extends(View_SelectedIssuesComponent6, _super);
    function View_SelectedIssuesComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_SelectedIssuesComponent6, renderType_SelectedIssuesComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_SelectedIssuesComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, 'is', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_SelectedIssuesComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SelectedIssuesComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/selected-issues.component.ngfactory.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.issues[_ngcontent-%COMP%] {\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap; }\n\n.issue[_ngcontent-%COMP%] {\n  border-top: 1px #eee solid;\n  padding: 13px 5px 8px 5px;\n  margin: 1px;\n  width: 48%; }\n\n.title[_ngcontent-%COMP%] {\n  font-size: 14px; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/selected-issues.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings_account_account_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_github_github_profile_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_component_scss_shim_ngstyle__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_src_location_location_strategy__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_ng_control__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_ng_control_status__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_control_container__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_core_src_security__ = __webpack_require__(77);
/* unused harmony export Wrapper_AccountComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccountComponentNgFactory; });
/* unused harmony export View_AccountComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


































var Wrapper_AccountComponent = (function () {
    function Wrapper_AccountComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_settings_account_account_component__["a" /* AccountComponent */](p0, p1, p2);
    }
    Wrapper_AccountComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AccountComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AccountComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AccountComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AccountComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AccountComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AccountComponent;
}());
var renderType_AccountComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AccountComponent_Host0 = (function (_super) {
    __extends(View_AccountComponent_Host0, _super);
    function View_AccountComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AccountComponent_Host0, renderType_AccountComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AccountComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-account', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AccountComponent0(this.viewUtils, this, 0, this._el_0);
        this._AccountComponent_0_3 = new Wrapper_AccountComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__["a" /* FormBuilder */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_app_service__["a" /* AppService */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_9__app_github_github_profile_service__["a" /* GithubProfileService */], this.parentIndex));
        this.compView_0.create(this._AccountComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AccountComponent_0_3.context);
    };
    View_AccountComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_settings_account_account_component__["a" /* AccountComponent */]) && (0 === requestNodeIndex))) {
            return this._AccountComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AccountComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AccountComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AccountComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AccountComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AccountComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AccountComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-account', View_AccountComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_settings_account_account_component__["a" /* AccountComponent */]);
var styles_AccountComponent = [__WEBPACK_IMPORTED_MODULE_10__account_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_AccountComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AccountComponent, {});
var View_AccountComponent0 = (function (_super) {
    __extends(View_AccountComponent0, _super);
    function View_AccountComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AccountComponent0, renderType_AccountComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AccountComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'subhead mt-0 mb-0'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Your profile', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgIf_6_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_8 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](8, null, this, this._anchor_8);
        this._TemplateRef_8_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 8, this._anchor_8);
        this._NgIf_8_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_10 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](10, null, this, this._anchor_10);
        this._TemplateRef_10_5 = new __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 10, this._anchor_10);
        this._NgIf_10_6 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(parentRenderNode, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._anchor_10,
            this._text_11
        ]), null);
        return null;
    };
    View_AccountComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        return notFoundResult;
    };
    View_AccountComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = !this.context._app.getAccessToken();
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_8_0_0 = this.context.error;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_10_0_0 = this.context._app.getAccessToken();
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
    };
    View_AccountComponent0.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
        this._vc_10.destroyNestedViews();
    };
    View_AccountComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_AccountComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_AccountComponent2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 10)) {
            return new View_AccountComponent3(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        return null;
    };
    return View_AccountComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AccountComponent1 = (function (_super) {
    __extends(View_AccountComponent1, _super);
    function View_AccountComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AccountComponent1, renderType_AccountComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AccountComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'flash flash-warn'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'No access token.', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_6 = this.renderer.createText(this._el_5, 'Set your personal access token ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_5, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'routerLink', '/settings/tokens'), null);
        this._RouterLinkWithHref_7_3 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, 'here', null);
        this._text_9 = this.renderer.createText(this._el_5, '.', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_7, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10
        ]), [disposable_0]);
        return null;
    };
    View_AccountComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    View_AccountComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = '/settings/tokens';
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
    };
    View_AccountComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    View_AccountComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AccountComponent1.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AccountComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AccountComponent2 = (function (_super) {
    __extends(View_AccountComponent2, _super);
    function View_AccountComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AccountComponent2, renderType_AccountComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AccountComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'flash flash-error'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AccountComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.error, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AccountComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AccountComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AccountComponent3 = (function (_super) {
    __extends(View_AccountComponent3, _super);
    function View_AccountComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AccountComponent3, renderType_AccountComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_50 = __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_51 = __WEBPACK_IMPORTED_MODULE_20__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AccountComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'form', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._FormGroupDirective_0_3 = new __WEBPACK_IMPORTED_MODULE_21__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__["a" /* Wrapper_FormGroupDirective */](null, null);
        this._ControlContainer_0_4 = this._FormGroupDirective_0_3.context;
        this._NgControlStatusGroup_0_5 = new __WEBPACK_IMPORTED_MODULE_22__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'dl', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-group'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'dt', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'login'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Login', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'dd', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'dl', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-group'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_14, 'dt', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_17 = this.renderer.createText(this._el_16, '\n      ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'name'), null);
        this._text_19 = this.renderer.createText(this._el_18, 'Name', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n    ', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_14, 'dd', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_23 = this.renderer.createText(this._el_22, '\n      ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_22, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'form-control', 'formControlName', 'name', 'type', 'text'), null);
        this._DefaultValueAccessor_24_3 = new __WEBPACK_IMPORTED_MODULE_23__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_25__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_24));
        this._NG_VALUE_ACCESSOR_24_4 = [this._DefaultValueAccessor_24_3.context];
        this._FormControlName_24_5 = new __WEBPACK_IMPORTED_MODULE_24__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_24_4);
        this._NgControl_24_6 = this._FormControlName_24_5.context;
        this._NgControlStatus_24_7 = new __WEBPACK_IMPORTED_MODULE_22__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_24_6);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_14, '\n  ', null);
        this._text_27 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'dl', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-group'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n    ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'dt', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, '\n      ', null);
        this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_30, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'picture'), null);
        this._text_33 = this.renderer.createText(this._el_32, 'Profile picture', null);
        this._text_34 = this.renderer.createText(this._el_30, '\n    ', null);
        this._text_35 = this.renderer.createText(this._el_28, '\n    ', null);
        this._el_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'dd', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_37 = this.renderer.createText(this._el_36, '\n      ', null);
        this._el_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_36, 'img', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'class', 'avatar', 'height', '200', 'width', '200'), null);
        this._text_39 = this.renderer.createText(this._el_36, '\n    ', null);
        this._text_40 = this.renderer.createText(this._el_28, '\n  ', null);
        this._text_41 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_24, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_24));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AccountComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (24 === requestNodeIndex))) {
            return this._DefaultValueAccessor_24_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (24 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_24_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && (24 === requestNodeIndex))) {
            return this._FormControlName_24_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (24 === requestNodeIndex))) {
            return this._NgControl_24_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (24 === requestNodeIndex))) {
            return this._NgControlStatus_24_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_31__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._FormGroupDirective_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_32__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_30__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 41)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    };
    View_AccountComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.parentView.context.theForm;
        this._FormGroupDirective_0_3.check_form(currVal_0_0_0, throwOnChange, false);
        this._FormGroupDirective_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._DefaultValueAccessor_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_24_1_0 = 'name';
        this._FormControlName_24_5.check_name(currVal_24_1_0, throwOnChange, false);
        this._FormControlName_24_5.ngDoCheck(this, this._el_24, throwOnChange);
        this._NgControlStatus_24_7.ngDoCheck(this, this._el_24, throwOnChange);
        this._NgControlStatusGroup_0_5.checkHost(this, this, this._el_0, throwOnChange);
        var currVal_50 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.parentView.context.login, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setText(this._text_11, currVal_50);
            this._expr_50 = currVal_50;
        }
        this._NgControlStatus_24_7.checkHost(this, this, this._el_24, throwOnChange);
        var currVal_51 = this.parentView.context.avatarURL;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_51, currVal_51)) {
            this.renderer.setElementProperty(this._el_38, 'src', this.viewUtils.sanitizer.sanitize(__WEBPACK_IMPORTED_MODULE_33__angular_core_src_security__["b" /* SecurityContext */].URL, currVal_51));
            this._expr_51 = currVal_51;
        }
    };
    View_AccountComponent3.prototype.destroyInternal = function () {
        this._FormControlName_24_5.ngOnDestroy();
        this._FormGroupDirective_0_3.ngOnDestroy();
    };
    View_AccountComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AccountComponent3.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AccountComponent3.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_24_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AccountComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/account.component.ngfactory.js.map

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.subhead[_ngcontent-%COMP%] {\n  border-bottom: 1px #e5e5e5 solid; }\n\n.form-group[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0 0 6px; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/account.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings_organization_organization_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__organization_component_scss_shim_ngstyle__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_ng_control__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_ng_control_status__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_control_container__ = __webpack_require__(29);
/* unused harmony export Wrapper_OrganizationComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OrganizationComponentNgFactory; });
/* unused harmony export View_OrganizationComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






















var Wrapper_OrganizationComponent = (function () {
    function Wrapper_OrganizationComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_settings_organization_organization_component__["a" /* OrganizationComponent */](p0, p1);
    }
    Wrapper_OrganizationComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_OrganizationComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_OrganizationComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_OrganizationComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_OrganizationComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_OrganizationComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_OrganizationComponent;
}());
var renderType_OrganizationComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_OrganizationComponent_Host0 = (function (_super) {
    __extends(View_OrganizationComponent_Host0, _super);
    function View_OrganizationComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OrganizationComponent_Host0, renderType_OrganizationComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_OrganizationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-organization', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_OrganizationComponent0(this.viewUtils, this, 0, this._el_0);
        this._OrganizationComponent_0_3 = new Wrapper_OrganizationComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__["a" /* FormBuilder */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_app_service__["a" /* AppService */], this.parentIndex));
        this.compView_0.create(this._OrganizationComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._OrganizationComponent_0_3.context);
    };
    View_OrganizationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_settings_organization_organization_component__["a" /* OrganizationComponent */]) && (0 === requestNodeIndex))) {
            return this._OrganizationComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_OrganizationComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._OrganizationComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_OrganizationComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_OrganizationComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_OrganizationComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var OrganizationComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-organization', View_OrganizationComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_settings_organization_organization_component__["a" /* OrganizationComponent */]);
var styles_OrganizationComponent = [__WEBPACK_IMPORTED_MODULE_9__organization_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_OrganizationComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_OrganizationComponent, {});
var View_OrganizationComponent0 = (function (_super) {
    __extends(View_OrganizationComponent0, _super);
    function View_OrganizationComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_OrganizationComponent0, renderType_OrganizationComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_OrganizationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'subhead mt-0 mb-0'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Organization', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'form', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._FormGroupDirective_6_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__["a" /* Wrapper_FormGroupDirective */](null, null);
        this._ControlContainer_6_4 = this._FormGroupDirective_6_3.context;
        this._NgControlStatusGroup_6_5 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'dl', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-group warn'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dt', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'token'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Organization', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dd', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_17 = this.renderer.createText(this._el_16, '\n      ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'form-control', 'formControlName', 'organization', 'placeholder', 'Your default organization', 'type', 'text'), null);
        this._DefaultValueAccessor_18_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_14__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_18));
        this._NG_VALUE_ACCESSOR_18_4 = [this._DefaultValueAccessor_18_3.context];
        this._FormControlName_18_5 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_18_4);
        this._NgControl_18_6 = this._FormControlName_18_5.context;
        this._NgControlStatus_18_7 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_18_6);
        this._text_19 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dd', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'note'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n      This orgnization is used whenever to query.\n    ', null);
        this._text_23 = this.renderer.createText(this._el_8, '\n  ', null);
        this._text_24 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_26 = this.renderer.createText(this._el_25, '\n    ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_25, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'btn'), null);
        this._text_28 = this.renderer.createText(this._el_27, 'Save', null);
        this._text_29 = this.renderer.createText(this._el_25, '\n  ', null);
        this._text_30 = this.renderer.createText(this._el_6, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_6, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_18, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_27, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_27));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._text_30
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_OrganizationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && (18 === requestNodeIndex))) {
            return this._FormControlName_18_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (18 === requestNodeIndex))) {
            return this._NgControl_18_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._FormGroupDirective_6_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 30)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        return notFoundResult;
    };
    View_OrganizationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.theForm;
        this._FormGroupDirective_6_3.check_form(currVal_6_0_0, throwOnChange, false);
        this._FormGroupDirective_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = 'organization';
        this._FormControlName_18_5.check_name(currVal_18_1_0, throwOnChange, false);
        this._FormControlName_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_7.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._NgControlStatus_18_7.checkHost(this, this, this._el_18, throwOnChange);
    };
    View_OrganizationComponent0.prototype.destroyInternal = function () {
        this._FormControlName_18_5.ngOnDestroy();
        this._FormGroupDirective_6_3.ngOnDestroy();
    };
    View_OrganizationComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_OrganizationComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_OrganizationComponent0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_OrganizationComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/organization.component.ngfactory.js.map

/***/ },

/***/ 475:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/organization.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings_settings_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component_scss_shim_ngstyle__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router_src_router_outlet_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_component_factory_resolver__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_class__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_router_src_directives_router_outlet__ = __webpack_require__(122);
/* unused harmony export Wrapper_SettingsComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SettingsComponentNgFactory; });
/* unused harmony export View_SettingsComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};























var Wrapper_SettingsComponent = (function () {
    function Wrapper_SettingsComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_settings_settings_component__["a" /* SettingsComponent */](p0);
    }
    Wrapper_SettingsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_SettingsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_SettingsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_SettingsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_SettingsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_SettingsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_SettingsComponent;
}());
var renderType_SettingsComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_SettingsComponent_Host0 = (function (_super) {
    __extends(View_SettingsComponent_Host0, _super);
    function View_SettingsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SettingsComponent_Host0, renderType_SettingsComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_SettingsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-settings', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_SettingsComponent0(this.viewUtils, this, 0, this._el_0);
        this._SettingsComponent_0_3 = new Wrapper_SettingsComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__["a" /* Router */], this.parentIndex));
        this.compView_0.create(this._SettingsComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._SettingsComponent_0_3.context);
    };
    View_SettingsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_settings_settings_component__["a" /* SettingsComponent */]) && (0 === requestNodeIndex))) {
            return this._SettingsComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_SettingsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._SettingsComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_SettingsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_SettingsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_SettingsComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var SettingsComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-settings', View_SettingsComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_settings_settings_component__["a" /* SettingsComponent */]);
var styles_SettingsComponent = [__WEBPACK_IMPORTED_MODULE_8__settings_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_SettingsComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_SettingsComponent, {});
var View_SettingsComponent0 = (function (_super) {
    __extends(View_SettingsComponent0, _super);
    function View_SettingsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_SettingsComponent0, renderType_SettingsComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_SettingsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'columns'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'one-fifth column'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_2, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'menu'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'span', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'menu-heading'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Personal settings', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'menu-item', 'routerLink', 'account'), null);
        this._NgClass_9_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_9), this.renderer);
        this._RouterLinkWithHref_9_4 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_10 = this.renderer.createText(this._el_9, 'Account', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'menu-item', 'routerLink', 'organization'), null);
        this._NgClass_12_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_12), this.renderer);
        this._RouterLinkWithHref_12_4 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_13 = this.renderer.createText(this._el_12, 'Organization', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'menu-item', 'routerLink', 'tokens'), null);
        this._NgClass_15_3 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_common_src_directives_ng_class_ngfactory__["a" /* Wrapper_NgClass */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_14__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */], this.parentIndex), new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_15), this.renderer);
        this._RouterLinkWithHref_15_4 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_router_src_directives_router_link_ngfactory__["a" /* Wrapper_RouterLinkWithHref */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_router_src_router__["a" /* Router */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_16__angular_router_src_router_state__["b" /* ActivatedRoute */], this.parentIndex), this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_common_src_location_location_strategy__["a" /* LocationStrategy */], this.parentIndex));
        this._text_16 = this.renderer.createText(this._el_15, 'Access tokens', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n  ', null);
        this._text_19 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'four-fifths column'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n    ', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_20, 'router-outlet', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._vc_22 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](22, 20, this, this._el_22);
        this._RouterOutlet_22_5 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_router_src_directives_router_outlet_ngfactory__["a" /* Wrapper_RouterOutlet */](this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_18__angular_router_src_router_outlet_map__["a" /* RouterOutletMap */], this.parentIndex), this._vc_22.vcRef, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_component_factory_resolver__["a" /* ComponentFactoryResolver */], this.parentIndex), null);
        this._text_23 = this.renderer.createText(this._el_20, '\n  ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_9, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_9));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_12, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_12));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_15, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_15));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_SettingsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._NgClass_9_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._RouterLinkWithHref_9_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._NgClass_12_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLinkWithHref_12_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_common_src_directives_ng_class__["a" /* NgClass */]) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._NgClass_15_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_router_src_directives_router_link__["b" /* RouterLinkWithHref */]) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkWithHref_15_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_router_src_directives_router_outlet__["a" /* RouterOutlet */]) && (22 === requestNodeIndex))) {
            return this._RouterOutlet_22_5.context;
        }
        return notFoundResult;
    };
    View_SettingsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_9_0_0 = 'menu-item';
        this._NgClass_9_3.check_klass(currVal_9_0_0, throwOnChange, false);
        var currVal_9_0_1 = (this.context.navigationEnd.urlAfterRedirects.match('/account') ? 'selected' : '');
        this._NgClass_9_3.check_ngClass(currVal_9_0_1, throwOnChange, false);
        this._NgClass_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_9_1_0 = 'account';
        this._RouterLinkWithHref_9_4.check_routerLink(currVal_9_1_0, throwOnChange, false);
        this._RouterLinkWithHref_9_4.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_12_0_0 = 'menu-item';
        this._NgClass_12_3.check_klass(currVal_12_0_0, throwOnChange, false);
        var currVal_12_0_1 = (this.context.navigationEnd.urlAfterRedirects.match('/organization') ? 'selected' : '');
        this._NgClass_12_3.check_ngClass(currVal_12_0_1, throwOnChange, false);
        this._NgClass_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = 'organization';
        this._RouterLinkWithHref_12_4.check_routerLink(currVal_12_1_0, throwOnChange, false);
        this._RouterLinkWithHref_12_4.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_15_0_0 = 'menu-item';
        this._NgClass_15_3.check_klass(currVal_15_0_0, throwOnChange, false);
        var currVal_15_0_1 = (this.context.navigationEnd.urlAfterRedirects.match('/tokens') ? 'selected' : '');
        this._NgClass_15_3.check_ngClass(currVal_15_0_1, throwOnChange, false);
        this._NgClass_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_1_0 = 'tokens';
        this._RouterLinkWithHref_15_4.check_routerLink(currVal_15_1_0, throwOnChange, false);
        this._RouterLinkWithHref_15_4.ngDoCheck(this, this._el_15, throwOnChange);
        this._RouterOutlet_22_5.ngDoCheck(this, this._el_22, throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_9_4.checkHost(this, this, this._el_9, throwOnChange);
        this._RouterLinkWithHref_12_4.checkHost(this, this, this._el_12, throwOnChange);
        this._RouterLinkWithHref_15_4.checkHost(this, this, this._el_15, throwOnChange);
    };
    View_SettingsComponent0.prototype.destroyInternal = function () {
        this._vc_22.destroyNestedViews();
        this._RouterLinkWithHref_9_4.ngOnDestroy();
        this._RouterLinkWithHref_12_4.ngOnDestroy();
        this._RouterLinkWithHref_15_4.ngOnDestroy();
        this._RouterOutlet_22_5.ngOnDestroy();
    };
    View_SettingsComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_9_4.handleEvent(eventName, $event) && result);
        return result;
    };
    View_SettingsComponent0.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_12_4.handleEvent(eventName, $event) && result);
        return result;
    };
    View_SettingsComponent0.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_15_4.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_SettingsComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/settings.component.ngfactory.js.map

/***/ },

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/settings.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 478:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_settings_tokens_tokens_component__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tokens_component_scss_shim_ngstyle__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_reactive_directives_form_control_name__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_reactive_directives_form_group_directive__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_control_container__ = __webpack_require__(29);
/* unused harmony export Wrapper_TokensComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TokensComponentNgFactory; });
/* unused harmony export View_TokensComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






























var Wrapper_TokensComponent = (function () {
    function Wrapper_TokensComponent(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_settings_tokens_tokens_component__["a" /* TokensComponent */](p0, p1);
    }
    Wrapper_TokensComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TokensComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_TokensComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TokensComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TokensComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TokensComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TokensComponent;
}());
var renderType_TokensComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_TokensComponent_Host0 = (function (_super) {
    __extends(View_TokensComponent_Host0, _super);
    function View_TokensComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TokensComponent_Host0, renderType_TokensComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_TokensComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-tokens', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_TokensComponent0(this.viewUtils, this, 0, this._el_0);
        this._TokensComponent_0_3 = new Wrapper_TokensComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_forms_src_form_builder__["a" /* FormBuilder */], this.parentIndex), this.injectorGet(__WEBPACK_IMPORTED_MODULE_8__app_app_service__["a" /* AppService */], this.parentIndex));
        this.compView_0.create(this._TokensComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._TokensComponent_0_3.context);
    };
    View_TokensComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_settings_tokens_tokens_component__["a" /* TokensComponent */]) && (0 === requestNodeIndex))) {
            return this._TokensComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TokensComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TokensComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TokensComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TokensComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TokensComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var TokensComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-tokens', View_TokensComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_settings_tokens_tokens_component__["a" /* TokensComponent */]);
var styles_TokensComponent = [__WEBPACK_IMPORTED_MODULE_9__tokens_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_TokensComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_TokensComponent, {});
var View_TokensComponent0 = (function (_super) {
    __extends(View_TokensComponent0, _super);
    function View_TokensComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TokensComponent0, renderType_TokensComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_49 = __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_TokensComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'subhead mt-0 mb-0'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_3 = this.renderer.createText(this._el_2, 'Personal access token', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'form', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._FormGroupDirective_6_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_group_directive_ngfactory__["a" /* Wrapper_FormGroupDirective */](null, null);
        this._ControlContainer_6_4 = this._FormGroupDirective_6_3.context;
        this._NgControlStatusGroup_6_5 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'dl', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'form-group warn'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dt', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_11 = this.renderer.createText(this._el_10, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_10, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'token'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Access token', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_16 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dd', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_17 = this.renderer.createText(this._el_16, '\n      ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_16, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray16"](10, 'class', 'form-control', 'formControlName', 'token', 'placeholder', 'Your personal access token', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_18_3 = new __WEBPACK_IMPORTED_MODULE_12__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_18));
        this._RequiredValidator_18_4 = new __WEBPACK_IMPORTED_MODULE_13__gendir_node_modules_angular_forms_src_directives_validators_ngfactory__["a" /* Wrapper_RequiredValidator */]();
        this._NG_VALIDATORS_18_5 = [this._RequiredValidator_18_4.context];
        this._NG_VALUE_ACCESSOR_18_6 = [this._DefaultValueAccessor_18_3.context];
        this._FormControlName_18_7 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_forms_src_directives_reactive_directives_form_control_name_ngfactory__["a" /* Wrapper_FormControlName */](this._ControlContainer_6_4, this._NG_VALIDATORS_18_5, null, this._NG_VALUE_ACCESSOR_18_6);
        this._NgControl_18_8 = this._FormControlName_18_7.context;
        this._NgControlStatus_18_9 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_18_8);
        this._text_19 = this.renderer.createText(this._el_16, '\n    ', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n    ', null);
        this._anchor_21 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_21 = new __WEBPACK_IMPORTED_MODULE_15__angular_core_src_linker_view_container__["a" /* ViewContainer */](21, 8, this, this._anchor_21);
        this._TemplateRef_21_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 21, this._anchor_21);
        this._NgIf_21_6 = new __WEBPACK_IMPORTED_MODULE_16__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_21.vcRef, this._TemplateRef_21_5);
        this._text_22 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_8, 'dd', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'note'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n      You can take your personal access token from\n      ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_23, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'href', 'https://github.com/settings/tokens', 'target', 'github.com'), null);
        this._text_26 = this.renderer.createText(this._el_25, 'here', null);
        this._text_27 = this.renderer.createText(this._el_23, '\n      if you don\'t have it.\n    ', null);
        this._text_28 = this.renderer.createText(this._el_8, '\n  ', null);
        this._text_29 = this.renderer.createText(this._el_6, '\n  ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, '\n    ', null);
        this._el_32 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_30, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'btn'), null);
        this._text_33 = this.renderer.createText(this._el_32, 'Save', null);
        this._text_34 = this.renderer.createText(this._el_30, '\n  ', null);
        this._text_35 = this.renderer.createText(this._el_6, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_6, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_18, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_32, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_32));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._anchor_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_TokensComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_validators__["a" /* RequiredValidator */]) && (18 === requestNodeIndex))) {
            return this._RequiredValidator_18_4.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_22__angular_forms_src_validators__["b" /* NG_VALIDATORS */]) && (18 === requestNodeIndex))) {
            return this._NG_VALIDATORS_18_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_23__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_24__angular_forms_src_directives_reactive_directives_form_control_name__["a" /* FormControlName */]) && (18 === requestNodeIndex))) {
            return this._FormControlName_18_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_25__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (18 === requestNodeIndex))) {
            return this._NgControl_18_8;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_9.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (21 === requestNodeIndex))) {
            return this._TemplateRef_21_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_27__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (21 === requestNodeIndex))) {
            return this._NgIf_21_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_28__angular_forms_src_directives_reactive_directives_form_group_directive__["a" /* FormGroupDirective */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._FormGroupDirective_6_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_29__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_26__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        return notFoundResult;
    };
    View_TokensComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.context.theForm;
        this._FormGroupDirective_6_3.check_form(currVal_6_0_0, throwOnChange, false);
        this._FormGroupDirective_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = '';
        this._RequiredValidator_18_4.check_required(currVal_18_1_0, throwOnChange, false);
        this._RequiredValidator_18_4.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_2_0 = 'token';
        this._FormControlName_18_7.check_name(currVal_18_2_0, throwOnChange, false);
        this._FormControlName_18_7.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_9.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_21_0_0 = (this._el_18.value.length == 0);
        this._NgIf_21_6.check_ngIf(currVal_21_0_0, throwOnChange, false);
        this._NgIf_21_6.ngDoCheck(this, this._anchor_21, throwOnChange);
        this._vc_21.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._RequiredValidator_18_4.checkHost(this, this, this._el_18, throwOnChange);
        this._NgControlStatus_18_9.checkHost(this, this, this._el_18, throwOnChange);
        var currVal_49 = !this._FormGroupDirective_6_3.context.valid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementProperty(this._el_32, 'disabled', currVal_49);
            this._expr_49 = currVal_49;
        }
    };
    View_TokensComponent0.prototype.destroyInternal = function () {
        this._vc_21.destroyNestedViews();
        this._FormControlName_18_7.ngOnDestroy();
        this._FormGroupDirective_6_3.ngOnDestroy();
    };
    View_TokensComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 21)) {
            return new View_TokensComponent1(this.viewUtils, this, 21, this._anchor_21, this._vc_21);
        }
        return null;
    };
    View_TokensComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._FormGroupDirective_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TokensComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_TokensComponent0.prototype.handleEvent_32 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TokensComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_TokensComponent1 = (function (_super) {
    __extends(View_TokensComponent1, _super);
    function View_TokensComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TokensComponent1, renderType_TokensComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_TokensComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'dd', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'warning'), null);
        this._text_1 = this.renderer.createText(this._el_0, 'This field is mandatory.', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_TokensComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TokensComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/tokens.component.ngfactory.js.map

/***/ },

/***/ 479:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.subhead[_ngcontent-%COMP%] {\n  border-bottom: 1px #e5e5e5 solid; }'];
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/tokens.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_RequiredValidator; });
/* unused harmony export Wrapper_MinLengthValidator */
/* unused harmony export Wrapper_MaxLengthValidator */
/* unused harmony export Wrapper_PatternValidator */
/* unused harmony export Wrapper_CheckboxRequiredValidator */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_RequiredValidator = (function () {
    function Wrapper_RequiredValidator() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["a" /* RequiredValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_RequiredValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_RequiredValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_RequiredValidator.prototype.check_required = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.required = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_RequiredValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_RequiredValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.required ? '' : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'required', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_RequiredValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_RequiredValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_RequiredValidator;
}());
var Wrapper_MinLengthValidator = (function () {
    function Wrapper_MinLengthValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["b" /* MinLengthValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_MinLengthValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MinLengthValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_MinLengthValidator.prototype.check_minlength = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.minlength = currValue;
            this._changes['minlength'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MinLengthValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_MinLengthValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.minlength ? this.context.minlength : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'minlength', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_MinLengthValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MinLengthValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MinLengthValidator;
}());
var Wrapper_MaxLengthValidator = (function () {
    function Wrapper_MaxLengthValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["c" /* MaxLengthValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_MaxLengthValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_MaxLengthValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_MaxLengthValidator.prototype.check_maxlength = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.maxlength = currValue;
            this._changes['maxlength'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_MaxLengthValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_MaxLengthValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.maxlength ? this.context.maxlength : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'maxlength', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_MaxLengthValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_MaxLengthValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_MaxLengthValidator;
}());
var Wrapper_PatternValidator = (function () {
    function Wrapper_PatternValidator() {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["d" /* PatternValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_PatternValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_PatternValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_PatternValidator.prototype.check_pattern = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.pattern = currValue;
            this._changes['pattern'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_PatternValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_PatternValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.pattern ? this.context.pattern : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'pattern', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_PatternValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_PatternValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_PatternValidator;
}());
var Wrapper_CheckboxRequiredValidator = (function () {
    function Wrapper_CheckboxRequiredValidator() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_validators__["e" /* CheckboxRequiredValidator */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_CheckboxRequiredValidator.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_CheckboxRequiredValidator.prototype.ngOnDestroy = function () {
    };
    Wrapper_CheckboxRequiredValidator.prototype.check_required = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.required = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_CheckboxRequiredValidator.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_CheckboxRequiredValidator.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_1 = (this.context.required ? '' : null);
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementAttribute(el, 'required', ((currVal_1 == null) ? null : currVal_1.toString()));
            this._expr_1 = currVal_1;
        }
    };
    Wrapper_CheckboxRequiredValidator.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_CheckboxRequiredValidator.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_CheckboxRequiredValidator;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/validators.ngfactory.js.map

/***/ },

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rx_extensions__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rx_extensions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rx_extensions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__github_github_issues_github_issues_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found404_not_found404_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select_selected_issues_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__github_github_profile_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
;













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found404_not_found404_component__["a" /* NotFound404Component */],
                __WEBPACK_IMPORTED_MODULE_10__select_selected_issues_component__["a" /* SelectedIssuesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__settings_settings_module__["a" /* SettingsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__github_github_issues_github_issues_module__["a" /* GithubIssuesModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_12__github_github_profile_service__["a" /* GithubProfileService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.module.js.map

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__github_github_issues_github_issues_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_selected_issues_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found404_not_found404_component__ = __webpack_require__(175);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });




var appRoutes = [
    { path: "", redirectTo: "search", pathMatch: "full" },
    { path: "search", component: __WEBPACK_IMPORTED_MODULE_1__github_github_issues_github_issues_component__["a" /* GithubIssuesComponent */] },
    { path: "select", component: __WEBPACK_IMPORTED_MODULE_2__select_selected_issues_component__["a" /* SelectedIssuesComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__not_found404_not_found404_component__["a" /* NotFound404Component */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/app.routes.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);




// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/rx-extensions.js.map

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organization_organization_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tokens_tokens_component__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return settingsRouting; });





var appRoutes = [
    {
        path: "settings",
        component: __WEBPACK_IMPORTED_MODULE_1__settings_component__["a" /* SettingsComponent */],
        children: [
            { path: "", redirectTo: "account", pathMatch: 'full' },
            { path: "account", component: __WEBPACK_IMPORTED_MODULE_2__account_account_component__["a" /* AccountComponent */] },
            { path: "organization", component: __WEBPACK_IMPORTED_MODULE_3__organization_organization_component__["a" /* OrganizationComponent */] },
            { path: "tokens", component: __WEBPACK_IMPORTED_MODULE_4__tokens_tokens_component__["a" /* TokensComponent */] },
        ]
    },
];
var settingsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(appRoutes);
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/settings.routes.js.map

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/environment.js.map

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/polyfills.js.map

/***/ },

/***/ 910:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 910;


/***/ },

/***/ 911:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=/Users/tsakuma/.ghq/github.com/tmtk75/gh-issues/src/ng_if.ngfactory.js.map

/***/ }

},[911]);
//# sourceMappingURL=main.bundle.map