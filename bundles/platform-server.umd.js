/**
 * @license Angular v9.0.0-next.3+20.sha-d443a28.with-local-changes
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/platform-browser'), require('@angular/animations/browser'), require('@angular/common/http'), require('@angular/platform-browser-dynamic'), require('@angular/platform-browser/animations'), require('rxjs'), require('url'), require('@angular/compiler'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/platform-server', ['exports', '@angular/common', '@angular/core', '@angular/platform-browser', '@angular/animations/browser', '@angular/common/http', '@angular/platform-browser-dynamic', '@angular/platform-browser/animations', 'rxjs', 'url', '@angular/compiler', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.platformServer = {}), global.ng.common, global.ng.core, global.ng.platformBrowser, global.ng.animations.browser, global.ng.common.http, global.ng.platformBrowserDynamic, global.ng.platformBrowser.animations, global.rxjs, global.url, global.ng.compiler, global.rxjs.operators));
}(this, function (exports, common, i0, i1, browser, http, platformBrowserDynamic, animations, rxjs, url, compiler, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var domino = require('domino');
    function _notImplemented(methodName) {
        return new Error('This method is not implemented in DominoAdapter: ' + methodName);
    }
    function setDomTypes() {
        // Make all Domino types available as types in the global env.
        Object.assign(global, domino.impl);
        global['KeyboardEvent'] = domino.impl.Event;
    }
    /**
     * Parses a document string to a Document object.
     */
    function parseDocument(html, url) {
        if (url === void 0) { url = '/'; }
        var window = domino.createWindow(html, url);
        var doc = window.document;
        return doc;
    }
    /**
     * Serializes a document to string.
     */
    function serializeDocument(doc) {
        return doc.serialize();
    }
    /**
     * DOM Adapter for the server platform based on https://github.com/fgnass/domino.
     */
    var DominoAdapter = /** @class */ (function (_super) {
        __extends(DominoAdapter, _super);
        function DominoAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DominoAdapter.makeCurrent = function () {
            setDomTypes();
            i1.ɵsetRootDomAdapter(new DominoAdapter());
        };
        DominoAdapter.prototype.logError = function (error) { console.error(error); };
        DominoAdapter.prototype.log = function (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
        };
        DominoAdapter.prototype.logGroup = function (error) { console.error(error); };
        DominoAdapter.prototype.logGroupEnd = function () { };
        DominoAdapter.prototype.supportsDOMEvents = function () { return false; };
        DominoAdapter.prototype.supportsNativeShadowDOM = function () { return false; };
        DominoAdapter.prototype.contains = function (nodeA, nodeB) {
            var inner = nodeB;
            while (inner) {
                if (inner === nodeA)
                    return true;
                inner = inner.parent;
            }
            return false;
        };
        DominoAdapter.prototype.createHtmlDocument = function () {
            return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>');
        };
        DominoAdapter.prototype.getDefaultDocument = function () {
            if (!DominoAdapter.defaultDoc) {
                DominoAdapter.defaultDoc = domino.createDocument();
            }
            return DominoAdapter.defaultDoc;
        };
        DominoAdapter.prototype.createShadowRoot = function (el, doc) {
            if (doc === void 0) { doc = document; }
            el.shadowRoot = doc.createDocumentFragment();
            el.shadowRoot.parent = el;
            return el.shadowRoot;
        };
        DominoAdapter.prototype.getShadowRoot = function (el) { return el.shadowRoot; };
        DominoAdapter.prototype.isTextNode = function (node) { return node.nodeType === DominoAdapter.defaultDoc.TEXT_NODE; };
        DominoAdapter.prototype.isCommentNode = function (node) {
            return node.nodeType === DominoAdapter.defaultDoc.COMMENT_NODE;
        };
        DominoAdapter.prototype.isElementNode = function (node) {
            return node ? node.nodeType === DominoAdapter.defaultDoc.ELEMENT_NODE : false;
        };
        DominoAdapter.prototype.hasShadowRoot = function (node) { return node.shadowRoot != null; };
        DominoAdapter.prototype.isShadowRoot = function (node) { return this.getShadowRoot(node) == node; };
        DominoAdapter.prototype.getProperty = function (el, name) {
            if (name === 'href') {
                // Domino tries tp resolve href-s which we do not want. Just return the
                // attribute value.
                return this.getAttribute(el, 'href');
            }
            else if (name === 'innerText') {
                // Domino does not support innerText. Just map it to textContent.
                return el.textContent;
            }
            return el[name];
        };
        DominoAdapter.prototype.setProperty = function (el, name, value) {
            if (name === 'href') {
                // Even though the server renderer reflects any properties to attributes
                // map 'href' to attribute just to handle when setProperty is directly called.
                this.setAttribute(el, 'href', value);
            }
            else if (name === 'innerText') {
                // Domino does not support innerText. Just map it to textContent.
                el.textContent = value;
            }
            el[name] = value;
        };
        DominoAdapter.prototype.getGlobalEventTarget = function (doc, target) {
            if (target === 'window') {
                return doc.defaultView;
            }
            if (target === 'document') {
                return doc;
            }
            if (target === 'body') {
                return doc.body;
            }
            return null;
        };
        DominoAdapter.prototype.getBaseHref = function (doc) {
            var base = this.querySelector(doc.documentElement, 'base');
            var href = '';
            if (base) {
                href = this.getHref(base);
            }
            // TODO(alxhub): Need relative path logic from BrowserDomAdapter here?
            return href;
        };
        /** @internal */
        DominoAdapter.prototype._readStyleAttribute = function (element) {
            var styleMap = {};
            var styleAttribute = element.getAttribute('style');
            if (styleAttribute) {
                var styleList = styleAttribute.split(/;+/g);
                for (var i = 0; i < styleList.length; i++) {
                    var style = styleList[i].trim();
                    if (style.length > 0) {
                        var colonIndex = style.indexOf(':');
                        if (colonIndex === -1) {
                            throw new Error("Invalid CSS style: " + style);
                        }
                        var name_1 = style.substr(0, colonIndex).trim();
                        styleMap[name_1] = style.substr(colonIndex + 1).trim();
                    }
                }
            }
            return styleMap;
        };
        /** @internal */
        DominoAdapter.prototype._writeStyleAttribute = function (element, styleMap) {
            var styleAttrValue = '';
            for (var key in styleMap) {
                var newValue = styleMap[key];
                if (newValue) {
                    styleAttrValue += key + ':' + styleMap[key] + ';';
                }
            }
            element.setAttribute('style', styleAttrValue);
        };
        DominoAdapter.prototype.setStyle = function (element, styleName, styleValue) {
            styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            var styleMap = this._readStyleAttribute(element);
            styleMap[styleName] = styleValue || '';
            this._writeStyleAttribute(element, styleMap);
        };
        DominoAdapter.prototype.removeStyle = function (element, styleName) {
            // IE requires '' instead of null
            // see https://github.com/angular/angular/issues/7916
            this.setStyle(element, styleName, '');
        };
        DominoAdapter.prototype.getStyle = function (element, styleName) {
            var styleMap = this._readStyleAttribute(element);
            return styleMap[styleName] || '';
        };
        DominoAdapter.prototype.hasStyle = function (element, styleName, styleValue) {
            var value = this.getStyle(element, styleName);
            return styleValue ? value == styleValue : value.length > 0;
        };
        DominoAdapter.prototype.dispatchEvent = function (el, evt) {
            el.dispatchEvent(evt);
            // Dispatch the event to the window also.
            var doc = el.ownerDocument || el;
            var win = doc.defaultView;
            if (win) {
                win.dispatchEvent(evt);
            }
        };
        DominoAdapter.prototype.getHistory = function () { throw _notImplemented('getHistory'); };
        DominoAdapter.prototype.getLocation = function () { throw _notImplemented('getLocation'); };
        DominoAdapter.prototype.getUserAgent = function () { return 'Fake user agent'; };
        DominoAdapter.prototype.supportsWebAnimation = function () { return false; };
        DominoAdapter.prototype.performanceNow = function () { return Date.now(); };
        DominoAdapter.prototype.getAnimationPrefix = function () { return ''; };
        DominoAdapter.prototype.getTransitionEnd = function () { return 'transitionend'; };
        DominoAdapter.prototype.supportsAnimation = function () { return true; };
        DominoAdapter.prototype.getDistributedNodes = function (el) { throw _notImplemented('getDistributedNodes'); };
        DominoAdapter.prototype.supportsCookies = function () { return false; };
        DominoAdapter.prototype.getCookie = function (name) { throw _notImplemented('getCookie'); };
        DominoAdapter.prototype.setCookie = function (name, value) { throw _notImplemented('setCookie'); };
        return DominoAdapter;
    }(i1.ɵBrowserDomAdapter));

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Representation of the current platform state.
     *
     * @publicApi
     */
    var PlatformState = /** @class */ (function () {
        function PlatformState(_doc) {
            this._doc = _doc;
        }
        /**
         * Renders the current state of the platform to string.
         */
        PlatformState.prototype.renderToString = function () { return serializeDocument(this._doc); };
        /**
         * Returns the current DOM state.
         */
        PlatformState.prototype.getDocument = function () { return this._doc; };
        PlatformState.ngInjectableDef = i0.ɵɵdefineInjectable({ token: PlatformState, factory: function PlatformState_Factory(t) { return new (t || PlatformState)(i0.ɵɵinject(common.DOCUMENT)); }, providedIn: null });
        return PlatformState;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(PlatformState, [{
            type: i0.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var xhr2 = require('xhr2');
    var ServerXhr = /** @class */ (function () {
        function ServerXhr() {
        }
        ServerXhr.prototype.build = function () { return new xhr2.XMLHttpRequest(); };
        ServerXhr.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerXhr, factory: function ServerXhr_Factory(t) { return new (t || ServerXhr)(); }, providedIn: null });
        return ServerXhr;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerXhr, [{
            type: i0.Injectable
        }], null, null);
    var ZoneMacroTaskWrapper = /** @class */ (function () {
        function ZoneMacroTaskWrapper() {
        }
        ZoneMacroTaskWrapper.prototype.wrap = function (request) {
            var _this = this;
            return new rxjs.Observable(function (observer) {
                var task = null;
                var scheduled = false;
                var sub = null;
                var savedResult = null;
                var savedError = null;
                var scheduleTask = function (_task) {
                    task = _task;
                    scheduled = true;
                    var delegate = _this.delegate(request);
                    sub = delegate.subscribe(function (res) { return savedResult = res; }, function (err) {
                        if (!scheduled) {
                            throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                        }
                        savedError = err;
                        scheduled = false;
                        task.invoke();
                    }, function () {
                        if (!scheduled) {
                            throw new Error('An http observable was completed twice. This shouldn\'t happen, please file a bug.');
                        }
                        scheduled = false;
                        task.invoke();
                    });
                };
                var cancelTask = function (_task) {
                    if (!scheduled) {
                        return;
                    }
                    scheduled = false;
                    if (sub) {
                        sub.unsubscribe();
                        sub = null;
                    }
                };
                var onComplete = function () {
                    if (savedError !== null) {
                        observer.error(savedError);
                    }
                    else {
                        observer.next(savedResult);
                        observer.complete();
                    }
                };
                // MockBackend for Http is synchronous, which means that if scheduleTask is by
                // scheduleMacroTask, the request will hit MockBackend and the response will be
                // sent, causing task.invoke() to be called.
                var _task = Zone.current.scheduleMacroTask('ZoneMacroTaskWrapper.subscribe', onComplete, {}, function () { return null; }, cancelTask);
                scheduleTask(_task);
                return function () {
                    if (scheduled && task) {
                        task.zone.cancelTask(task);
                        scheduled = false;
                    }
                    if (sub) {
                        sub.unsubscribe();
                        sub = null;
                    }
                };
            });
        };
        return ZoneMacroTaskWrapper;
    }());
    var ZoneClientBackend = /** @class */ (function (_super) {
        __extends(ZoneClientBackend, _super);
        function ZoneClientBackend(backend) {
            var _this = _super.call(this) || this;
            _this.backend = backend;
            return _this;
        }
        ZoneClientBackend.prototype.handle = function (request) { return this.wrap(request); };
        ZoneClientBackend.prototype.delegate = function (request) {
            return this.backend.handle(request);
        };
        return ZoneClientBackend;
    }(ZoneMacroTaskWrapper));
    function zoneWrappedInterceptingHandler(backend, injector) {
        var realBackend = new http.ɵHttpInterceptingHandler(backend, injector);
        return new ZoneClientBackend(realBackend);
    }
    var SERVER_HTTP_PROVIDERS = [
        { provide: http.XhrFactory, useClass: ServerXhr }, {
            provide: http.HttpHandler,
            useFactory: zoneWrappedInterceptingHandler,
            deps: [http.HttpBackend, i0.Injector]
        }
    ];

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * The DI token for setting the initial config for the platform.
     *
     * @publicApi
     */
    var INITIAL_CONFIG = new i0.InjectionToken('Server.INITIAL_CONFIG');
    /**
     * A function that will be executed when calling `renderModuleFactory` or `renderModule` just
     * before current platform state is rendered to string.
     *
     * @publicApi
     */
    var BEFORE_APP_SERIALIZED = new i0.InjectionToken('Server.RENDER_MODULE_HOOK');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function parseUrl(urlStr) {
        var parsedUrl = url.parse(urlStr);
        return {
            hostname: parsedUrl.hostname || '',
            protocol: parsedUrl.protocol || '',
            port: parsedUrl.port || '',
            pathname: parsedUrl.pathname || '',
            search: parsedUrl.search || '',
            hash: parsedUrl.hash || '',
        };
    }
    /**
     * Server-side implementation of URL state. Implements `pathname`, `search`, and `hash`
     * but not the state stack.
     */
    var ServerPlatformLocation = /** @class */ (function () {
        function ServerPlatformLocation(_doc, _config) {
            this._doc = _doc;
            this.href = '/';
            this.hostname = '/';
            this.protocol = '/';
            this.port = '/';
            this.pathname = '/';
            this.search = '';
            this.hash = '';
            this._hashUpdate = new rxjs.Subject();
            var config = _config;
            if (!!config && !!config.url) {
                var parsedUrl = parseUrl(config.url);
                this.hostname = parsedUrl.hostname;
                this.protocol = parsedUrl.protocol;
                this.port = parsedUrl.port;
                this.pathname = parsedUrl.pathname;
                this.search = parsedUrl.search;
                this.hash = parsedUrl.hash;
            }
        }
        ServerPlatformLocation.prototype.getBaseHrefFromDOM = function () { return i1.ɵgetDOM().getBaseHref(this._doc); };
        ServerPlatformLocation.prototype.onPopState = function (fn) {
            // No-op: a state stack is not implemented, so
            // no events will ever come.
        };
        ServerPlatformLocation.prototype.onHashChange = function (fn) { this._hashUpdate.subscribe(fn); };
        Object.defineProperty(ServerPlatformLocation.prototype, "url", {
            get: function () { return "" + this.pathname + this.search + this.hash; },
            enumerable: true,
            configurable: true
        });
        ServerPlatformLocation.prototype.setHash = function (value, oldUrl) {
            var _this = this;
            if (this.hash === value) {
                // Don't fire events if the hash has not changed.
                return;
            }
            this.hash = value;
            var newUrl = this.url;
            scheduleMicroTask(function () { return _this._hashUpdate.next({
                type: 'hashchange', state: null, oldUrl: oldUrl, newUrl: newUrl
            }); });
        };
        ServerPlatformLocation.prototype.replaceState = function (state, title, newUrl) {
            var oldUrl = this.url;
            var parsedUrl = parseUrl(newUrl);
            this.pathname = parsedUrl.pathname;
            this.search = parsedUrl.search;
            this.setHash(parsedUrl.hash, oldUrl);
        };
        ServerPlatformLocation.prototype.pushState = function (state, title, newUrl) {
            this.replaceState(state, title, newUrl);
        };
        ServerPlatformLocation.prototype.forward = function () { throw new Error('Not implemented'); };
        ServerPlatformLocation.prototype.back = function () { throw new Error('Not implemented'); };
        // History API isn't available on server, therefore return undefined
        ServerPlatformLocation.prototype.getState = function () { return undefined; };
        ServerPlatformLocation.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerPlatformLocation, factory: function ServerPlatformLocation_Factory(t) { return new (t || ServerPlatformLocation)(i0.ɵɵinject(common.DOCUMENT), i0.ɵɵinject(INITIAL_CONFIG, 8)); }, providedIn: null });
        return ServerPlatformLocation;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerPlatformLocation, [{
            type: i0.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Inject,
                    args: [INITIAL_CONFIG]
                }] }]; }, null);
    function scheduleMicroTask(fn) {
        Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ServerEventManagerPlugin = /** @class */ (function () {
        function ServerEventManagerPlugin(doc) {
            this.doc = doc;
        }
        // Handle all events on the server.
        ServerEventManagerPlugin.prototype.supports = function (eventName) { return true; };
        ServerEventManagerPlugin.prototype.addEventListener = function (element, eventName, handler) {
            return i1.ɵgetDOM().onAndCancel(element, eventName, handler);
        };
        ServerEventManagerPlugin.prototype.addGlobalEventListener = function (element, eventName, handler) {
            var target = i1.ɵgetDOM().getGlobalEventTarget(this.doc, element);
            if (!target) {
                throw new Error("Unsupported event target " + target + " for event " + eventName);
            }
            return this.addEventListener(target, eventName, handler);
        };
        ServerEventManagerPlugin.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerEventManagerPlugin /* extends EventManagerPlugin which is private */, factory: function ServerEventManagerPlugin_Factory(t) { return new (t || ServerEventManagerPlugin /* extends EventManagerPlugin which is private */)(i0.ɵɵinject(common.DOCUMENT)); }, providedIn: null });
        return ServerEventManagerPlugin;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerEventManagerPlugin /* extends EventManagerPlugin which is private */, [{
            type: i0.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }]; }, null);

    var EMPTY_ARRAY = [];
    var DEFAULT_SCHEMA = new compiler.DomElementSchemaRegistry();
    var ServerRendererFactory2 = /** @class */ (function () {
        function ServerRendererFactory2(eventManager, ngZone, document, sharedStylesHost) {
            this.eventManager = eventManager;
            this.ngZone = ngZone;
            this.document = document;
            this.sharedStylesHost = sharedStylesHost;
            this.rendererByCompId = new Map();
            this.schema = DEFAULT_SCHEMA;
            this.defaultRenderer = new DefaultServerRenderer2(eventManager, document, ngZone, this.schema);
        }
        ServerRendererFactory2.prototype.createRenderer = function (element, type) {
            if (!element || !type) {
                return this.defaultRenderer;
            }
            switch (type.encapsulation) {
                case i0.ViewEncapsulation.Native:
                case i0.ViewEncapsulation.Emulated: {
                    var renderer = this.rendererByCompId.get(type.id);
                    if (!renderer) {
                        renderer = new EmulatedEncapsulationServerRenderer2(this.eventManager, this.document, this.ngZone, this.sharedStylesHost, this.schema, type);
                        this.rendererByCompId.set(type.id, renderer);
                    }
                    renderer.applyToHost(element);
                    return renderer;
                }
                default: {
                    if (!this.rendererByCompId.has(type.id)) {
                        var styles = i1.ɵflattenStyles(type.id, type.styles, []);
                        this.sharedStylesHost.addStyles(styles);
                        this.rendererByCompId.set(type.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
                }
            }
        };
        ServerRendererFactory2.prototype.begin = function () { };
        ServerRendererFactory2.prototype.end = function () { };
        ServerRendererFactory2.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerRendererFactory2, factory: function ServerRendererFactory2_Factory(t) { return new (t || ServerRendererFactory2)(i0.ɵɵinject(i1.EventManager), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(common.DOCUMENT), i0.ɵɵinject(i1.ɵSharedStylesHost)); }, providedIn: null });
        return ServerRendererFactory2;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerRendererFactory2, [{
            type: i0.Injectable
        }], function () { return [{ type: i1.EventManager }, { type: i0.NgZone }, { type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: i1.ɵSharedStylesHost }]; }, null);
    var DefaultServerRenderer2 = /** @class */ (function () {
        function DefaultServerRenderer2(eventManager, document, ngZone, schema) {
            this.eventManager = eventManager;
            this.document = document;
            this.ngZone = ngZone;
            this.schema = schema;
            this.data = Object.create(null);
        }
        DefaultServerRenderer2.prototype.destroy = function () { };
        DefaultServerRenderer2.prototype.createElement = function (name, namespace, debugInfo) {
            if (namespace) {
                return i1.ɵgetDOM().createElementNS(i1.ɵNAMESPACE_URIS[namespace], name, this.document);
            }
            return i1.ɵgetDOM().createElement(name, this.document);
        };
        DefaultServerRenderer2.prototype.createComment = function (value, debugInfo) { return i1.ɵgetDOM().createComment(value); };
        DefaultServerRenderer2.prototype.createText = function (value, debugInfo) { return i1.ɵgetDOM().createTextNode(value); };
        DefaultServerRenderer2.prototype.appendChild = function (parent, newChild) { i1.ɵgetDOM().appendChild(parent, newChild); };
        DefaultServerRenderer2.prototype.insertBefore = function (parent, newChild, refChild) {
            if (parent) {
                i1.ɵgetDOM().insertBefore(parent, refChild, newChild);
            }
        };
        DefaultServerRenderer2.prototype.removeChild = function (parent, oldChild) {
            if (parent) {
                i1.ɵgetDOM().removeChild(parent, oldChild);
            }
        };
        DefaultServerRenderer2.prototype.selectRootElement = function (selectorOrNode, debugInfo) {
            var el;
            if (typeof selectorOrNode === 'string') {
                el = i1.ɵgetDOM().querySelector(this.document, selectorOrNode);
                if (!el) {
                    throw new Error("The selector \"" + selectorOrNode + "\" did not match any elements");
                }
            }
            else {
                el = selectorOrNode;
            }
            i1.ɵgetDOM().clearNodes(el);
            return el;
        };
        DefaultServerRenderer2.prototype.parentNode = function (node) { return i1.ɵgetDOM().parentElement(node); };
        DefaultServerRenderer2.prototype.nextSibling = function (node) { return i1.ɵgetDOM().nextSibling(node); };
        DefaultServerRenderer2.prototype.setAttribute = function (el, name, value, namespace) {
            if (namespace) {
                i1.ɵgetDOM().setAttributeNS(el, i1.ɵNAMESPACE_URIS[namespace], namespace + ':' + name, value);
            }
            else {
                i1.ɵgetDOM().setAttribute(el, name, value);
            }
        };
        DefaultServerRenderer2.prototype.removeAttribute = function (el, name, namespace) {
            if (namespace) {
                i1.ɵgetDOM().removeAttributeNS(el, i1.ɵNAMESPACE_URIS[namespace], name);
            }
            else {
                i1.ɵgetDOM().removeAttribute(el, name);
            }
        };
        DefaultServerRenderer2.prototype.addClass = function (el, name) { i1.ɵgetDOM().addClass(el, name); };
        DefaultServerRenderer2.prototype.removeClass = function (el, name) { i1.ɵgetDOM().removeClass(el, name); };
        DefaultServerRenderer2.prototype.setStyle = function (el, style, value, flags) {
            i1.ɵgetDOM().setStyle(el, style, value);
        };
        DefaultServerRenderer2.prototype.removeStyle = function (el, style, flags) {
            i1.ɵgetDOM().removeStyle(el, style);
        };
        // The value was validated already as a property binding, against the property name.
        // To know this value is safe to use as an attribute, the security context of the
        // attribute with the given name is checked against that security context of the
        // property.
        DefaultServerRenderer2.prototype._isSafeToReflectProperty = function (tagName, propertyName) {
            return this.schema.securityContext(tagName, propertyName, true) ===
                this.schema.securityContext(tagName, propertyName, false);
        };
        DefaultServerRenderer2.prototype.setProperty = function (el, name, value) {
            checkNoSyntheticProp(name, 'property');
            i1.ɵgetDOM().setProperty(el, name, value);
            // Mirror property values for known HTML element properties in the attributes.
            // Skip `innerhtml` which is conservatively marked as an attribute for security
            // purposes but is not actually an attribute.
            var tagName = el.tagName.toLowerCase();
            if (value != null && (typeof value === 'number' || typeof value == 'string') &&
                name.toLowerCase() !== 'innerhtml' && this.schema.hasElement(tagName, EMPTY_ARRAY) &&
                this.schema.hasProperty(tagName, name, EMPTY_ARRAY) &&
                this._isSafeToReflectProperty(tagName, name)) {
                this.setAttribute(el, name, value.toString());
            }
        };
        DefaultServerRenderer2.prototype.setValue = function (node, value) { i1.ɵgetDOM().setText(node, value); };
        DefaultServerRenderer2.prototype.listen = function (target, eventName, callback) {
            checkNoSyntheticProp(eventName, 'listener');
            if (typeof target === 'string') {
                return this.eventManager.addGlobalEventListener(target, eventName, this.decoratePreventDefault(callback));
            }
            return this.eventManager.addEventListener(target, eventName, this.decoratePreventDefault(callback));
        };
        DefaultServerRenderer2.prototype.decoratePreventDefault = function (eventHandler) {
            var _this = this;
            return function (event) {
                // Ivy uses `Function` as a special token that allows us to unwrap the function
                // so that it can be invoked programmatically by `DebugNode.triggerEventHandler`.
                if (event === Function) {
                    return eventHandler;
                }
                // Run the event handler inside the ngZone because event handlers are not patched
                // by Zone on the server. This is required only for tests.
                var allowDefaultBehavior = _this.ngZone.runGuarded(function () { return eventHandler(event); });
                if (allowDefaultBehavior === false) {
                    event.preventDefault();
                    event.returnValue = false;
                }
                return undefined;
            };
        };
        return DefaultServerRenderer2;
    }());
    var AT_CHARCODE = '@'.charCodeAt(0);
    function checkNoSyntheticProp(name, nameKind) {
        if (name.charCodeAt(0) === AT_CHARCODE) {
            throw new Error("Found the synthetic " + nameKind + " " + name + ". Please include either \"BrowserAnimationsModule\" or \"NoopAnimationsModule\" in your application.");
        }
    }
    var EmulatedEncapsulationServerRenderer2 = /** @class */ (function (_super) {
        __extends(EmulatedEncapsulationServerRenderer2, _super);
        function EmulatedEncapsulationServerRenderer2(eventManager, document, ngZone, sharedStylesHost, schema, component) {
            var _this = _super.call(this, eventManager, document, ngZone, schema) || this;
            _this.component = component;
            // Add a 's' prefix to style attributes to indicate server.
            var componentId = 's' + component.id;
            var styles = i1.ɵflattenStyles(componentId, component.styles, []);
            sharedStylesHost.addStyles(styles);
            _this.contentAttr = i1.ɵshimContentAttribute(componentId);
            _this.hostAttr = i1.ɵshimHostAttribute(componentId);
            return _this;
        }
        EmulatedEncapsulationServerRenderer2.prototype.applyToHost = function (element) { _super.prototype.setAttribute.call(this, element, this.hostAttr, ''); };
        EmulatedEncapsulationServerRenderer2.prototype.createElement = function (parent, name) {
            var el = _super.prototype.createElement.call(this, parent, name, this.document);
            _super.prototype.setAttribute.call(this, el, this.contentAttr, '');
            return el;
        };
        return EmulatedEncapsulationServerRenderer2;
    }(DefaultServerRenderer2));

    var ServerStylesHost = /** @class */ (function (_super) {
        __extends(ServerStylesHost, _super);
        function ServerStylesHost(doc, transitionId) {
            var _this = _super.call(this) || this;
            _this.doc = doc;
            _this.transitionId = transitionId;
            _this.head = null;
            _this.head = i1.ɵgetDOM().getElementsByTagName(doc, 'head')[0];
            return _this;
        }
        ServerStylesHost.prototype._addStyle = function (style) {
            var adapter = i1.ɵgetDOM();
            var el = adapter.createElement('style');
            adapter.setText(el, style);
            if (!!this.transitionId) {
                adapter.setAttribute(el, 'ng-transition', this.transitionId);
            }
            adapter.appendChild(this.head, el);
        };
        ServerStylesHost.prototype.onStylesAdded = function (additions) {
            var _this = this;
            additions.forEach(function (style) { return _this._addStyle(style); });
        };
        ServerStylesHost.ngInjectableDef = i0.ɵɵdefineInjectable({ token: ServerStylesHost, factory: function ServerStylesHost_Factory(t) { return new (t || ServerStylesHost)(i0.ɵɵinject(common.DOCUMENT), i0.ɵɵinject(i1.ɵTRANSITION_ID, 8)); }, providedIn: null });
        return ServerStylesHost;
    }(i1.ɵSharedStylesHost));
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerStylesHost, [{
            type: i0.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: i0.Inject,
                    args: [common.DOCUMENT]
                }] }, { type: undefined, decorators: [{
                    type: i0.Optional
                }, {
                    type: i0.Inject,
                    args: [i1.ɵTRANSITION_ID]
                }] }]; }, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function notSupported(feature) {
        throw new Error("platform-server does not support '" + feature + "'.");
    }
    var INTERNAL_SERVER_PLATFORM_PROVIDERS = [
        { provide: common.DOCUMENT, useFactory: _document, deps: [i0.Injector] },
        { provide: i0.PLATFORM_ID, useValue: common.ɵPLATFORM_SERVER_ID },
        { provide: i0.PLATFORM_INITIALIZER, useFactory: initDominoAdapter, multi: true, deps: [i0.Injector] }, {
            provide: common.PlatformLocation,
            useClass: ServerPlatformLocation,
            deps: [common.DOCUMENT, [i0.Optional, INITIAL_CONFIG]]
        },
        { provide: PlatformState, deps: [common.DOCUMENT] },
        // Add special provider that allows multiple instances of platformServer* to be created.
        { provide: i0.ɵALLOW_MULTIPLE_PLATFORMS, useValue: true }
    ];
    function initDominoAdapter(injector) {
        return function () { DominoAdapter.makeCurrent(); };
    }
    function instantiateServerRendererFactory(renderer, engine, zone) {
        return new animations.ɵAnimationRendererFactory(renderer, engine, zone);
    }
    var SERVER_RENDER_PROVIDERS = [
        ServerRendererFactory2,
        {
            provide: i0.RendererFactory2,
            useFactory: instantiateServerRendererFactory,
            deps: [ServerRendererFactory2, browser.ɵAnimationEngine, i0.NgZone]
        },
        ServerStylesHost,
        { provide: i1.ɵSharedStylesHost, useExisting: ServerStylesHost },
        { provide: i1.EVENT_MANAGER_PLUGINS, multi: true, useClass: ServerEventManagerPlugin },
    ];
    /**
     * The ng module for the server.
     *
     * @publicApi
     */
    var ServerModule = /** @class */ (function () {
        function ServerModule() {
        }
        ServerModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: ServerModule });
        ServerModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function ServerModule_Factory(t) { return new (t || ServerModule)(); }, providers: [
                SERVER_RENDER_PROVIDERS,
                SERVER_HTTP_PROVIDERS,
                { provide: i0.Testability, useValue: null },
                { provide: common.ViewportScroller, useClass: common.ɵNullViewportScroller },
            ], imports: [[http.HttpClientModule, animations.NoopAnimationsModule],
                i1.BrowserModule] });
        return ServerModule;
    }());
    /*@__PURE__*/ i0.ɵɵsetNgModuleScope(ServerModule, { imports: [http.HttpClientModule, animations.NoopAnimationsModule], exports: [i1.BrowserModule] });
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerModule, [{
            type: i0.NgModule,
            args: [{
                    exports: [i1.BrowserModule],
                    imports: [http.HttpClientModule, animations.NoopAnimationsModule],
                    providers: [
                        SERVER_RENDER_PROVIDERS,
                        SERVER_HTTP_PROVIDERS,
                        { provide: i0.Testability, useValue: null },
                        { provide: common.ViewportScroller, useClass: common.ɵNullViewportScroller },
                    ],
                }]
        }], null, null);
    function _document(injector) {
        var config = injector.get(INITIAL_CONFIG, null);
        if (config && config.document) {
            return parseDocument(config.document, config.url);
        }
        else {
            return i1.ɵgetDOM().createHtmlDocument();
        }
    }
    /**
     * @publicApi
     */
    var platformServer = i0.createPlatformFactory(i0.platformCore, 'server', INTERNAL_SERVER_PLATFORM_PROVIDERS);
    /**
     * The server platform that supports the runtime compiler.
     *
     * @publicApi
     */
    var platformDynamicServer = i0.createPlatformFactory(platformBrowserDynamic.ɵplatformCoreDynamic, 'serverDynamic', INTERNAL_SERVER_PLATFORM_PROVIDERS);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function serializeTransferStateFactory(doc, appId, transferStore) {
        return function () {
            var script = doc.createElement('script');
            script.id = appId + '-state';
            script.setAttribute('type', 'application/json');
            script.textContent = i1.ɵescapeHtml(transferStore.toJson());
            doc.body.appendChild(script);
        };
    }
    /**
     * NgModule to install on the server side while using the `TransferState` to transfer state from
     * server to client.
     *
     * @publicApi
     */
    var ServerTransferStateModule = /** @class */ (function () {
        function ServerTransferStateModule() {
        }
        ServerTransferStateModule.ngModuleDef = i0.ɵɵdefineNgModule({ type: ServerTransferStateModule });
        ServerTransferStateModule.ngInjectorDef = i0.ɵɵdefineInjector({ factory: function ServerTransferStateModule_Factory(t) { return new (t || ServerTransferStateModule)(); }, providers: [
                i1.TransferState, {
                    provide: BEFORE_APP_SERIALIZED,
                    useFactory: serializeTransferStateFactory,
                    deps: [common.DOCUMENT, i0.APP_ID, i1.TransferState],
                    multi: true,
                }
            ] });
        return ServerTransferStateModule;
    }());
    /*@__PURE__*/ i0.ɵsetClassMetadata(ServerTransferStateModule, [{
            type: i0.NgModule,
            args: [{
                    providers: [
                        i1.TransferState, {
                            provide: BEFORE_APP_SERIALIZED,
                            useFactory: serializeTransferStateFactory,
                            deps: [common.DOCUMENT, i0.APP_ID, i1.TransferState],
                            multi: true,
                        }
                    ]
                }]
        }], null, null);

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function _getPlatform(platformFactory, options) {
        var extraProviders = options.extraProviders ? options.extraProviders : [];
        return platformFactory([
            { provide: INITIAL_CONFIG, useValue: { document: options.document, url: options.url } },
            extraProviders
        ]);
    }
    function _render(platform, moduleRefPromise) {
        return moduleRefPromise.then(function (moduleRef) {
            var transitionId = moduleRef.injector.get(i1.ɵTRANSITION_ID, null);
            if (!transitionId) {
                throw new Error("renderModule[Factory]() requires the use of BrowserModule.withServerTransition() to ensure\nthe server-rendered app can be properly bootstrapped into a client app.");
            }
            var applicationRef = moduleRef.injector.get(i0.ApplicationRef);
            return applicationRef.isStable.pipe((operators.first(function (isStable) { return isStable; })))
                .toPromise()
                .then(function () {
                var e_1, _a;
                var platformState = platform.injector.get(PlatformState);
                var asyncPromises = [];
                // Run any BEFORE_APP_SERIALIZED callbacks just before rendering to string.
                var callbacks = moduleRef.injector.get(BEFORE_APP_SERIALIZED, null);
                if (callbacks) {
                    try {
                        for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                            var callback = callbacks_1_1.value;
                            try {
                                var callbackResult = callback();
                                if (i0.ɵisPromise(callbackResult)) {
                                    asyncPromises.push(callbackResult);
                                }
                            }
                            catch (e) {
                                // Ignore exceptions.
                                console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e);
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                var complete = function () {
                    var output = platformState.renderToString();
                    platform.destroy();
                    return output;
                };
                if (asyncPromises.length === 0) {
                    return complete();
                }
                return Promise
                    .all(asyncPromises.map(function (asyncPromise) {
                    return asyncPromise.catch(function (e) { console.warn('Ignoring BEFORE_APP_SERIALIZED Exception: ', e); });
                }))
                    .then(complete);
            });
        });
    }
    /**
     * Renders a Module to string.
     *
     * `document` is the full document HTML of the page to render, as a string.
     * `url` is the URL for the current render request.
     * `extraProviders` are the platform level providers for the current render request.
     *
     * Do not use this in a production server environment. Use pre-compiled {@link NgModuleFactory} with
     * {@link renderModuleFactory} instead.
     *
     * @publicApi
     */
    function renderModule(module, options) {
        var platform = _getPlatform(platformDynamicServer, options);
        return _render(platform, platform.bootstrapModule(module));
    }
    /**
     * Renders a {@link NgModuleFactory} to string.
     *
     * `document` is the full document HTML of the page to render, as a string.
     * `url` is the URL for the current render request.
     * `extraProviders` are the platform level providers for the current render request.
     *
     * @publicApi
     */
    function renderModuleFactory(moduleFactory, options) {
        var platform = _getPlatform(platformServer, options);
        return _render(platform, platform.bootstrapModuleFactory(moduleFactory));
    }

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new i0.Version('9.0.0-next.3+20.sha-d443a28.with-local-changes');

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    exports.PlatformState = PlatformState;
    exports.ServerModule = ServerModule;
    exports.platformDynamicServer = platformDynamicServer;
    exports.platformServer = platformServer;
    exports.BEFORE_APP_SERIALIZED = BEFORE_APP_SERIALIZED;
    exports.INITIAL_CONFIG = INITIAL_CONFIG;
    exports.ServerTransferStateModule = ServerTransferStateModule;
    exports.renderModule = renderModule;
    exports.renderModuleFactory = renderModuleFactory;
    exports.VERSION = VERSION;
    exports.ɵINTERNAL_SERVER_PLATFORM_PROVIDERS = INTERNAL_SERVER_PLATFORM_PROVIDERS;
    exports.ɵSERVER_RENDER_PROVIDERS = SERVER_RENDER_PROVIDERS;
    exports.ɵServerRendererFactory2 = ServerRendererFactory2;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=platform-server.umd.js.map
