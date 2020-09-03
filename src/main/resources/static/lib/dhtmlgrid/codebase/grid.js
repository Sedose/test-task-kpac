/*
@license

dhtmlxGrid v.6.5.3 GPL

This software is covered by GPL license.
To use it in non-GPL project, you need obtain Commercial or Enterprise license
Please contact sales@dhtmlx.com. Usage without proper license is prohibited.
(c) XB Software.

*/
if (window.dhx){ window.dhx_legacy = dhx; delete window.dhx; }(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dhx"] = factory();
	else
		root["dhx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var dom = __webpack_require__(50);
exports.el = dom.defineElement;
exports.sv = dom.defineSvgElement;
exports.view = dom.defineView;
exports.create = dom.createView;
exports.inject = dom.injectView;
exports.KEYED_LIST = dom.KEYED_LIST;
function disableHelp() {
    dom.DEVMODE.mutations = false;
    dom.DEVMODE.warnings = false;
    dom.DEVMODE.verbose = false;
    dom.DEVMODE.UNKEYED_INPUT = false;
}
exports.disableHelp = disableHelp;
function resizer(handler) {
    var resize = window.ResizeObserver;
    var activeHandler = function (node) {
        var height = node.el.offsetHeight;
        var width = node.el.offsetWidth;
        handler(width, height);
    };
    if (resize) {
        return exports.el("div.dhx-resize-observer", {
            _hooks: {
                didInsert: function (node) {
                    new resize(function () { return activeHandler(node); }).observe(node.el);
                },
            },
        });
    }
    return exports.el("iframe.dhx-resize-observer", {
        _hooks: {
            didInsert: function (node) {
                node.el.contentWindow.onresize = function () { return activeHandler(node); };
                activeHandler(node);
            },
        },
    });
}
exports.resizer = resizer;
function resizeHandler(container, handler) {
    return exports.create({
        render: function () {
            return resizer(handler);
        },
    }).mount(container);
}
exports.resizeHandler = resizeHandler;
function awaitRedraw() {
    return new Promise(function (res) {
        requestAnimationFrame(function () {
            res();
        });
    });
}
exports.awaitRedraw = awaitRedraw;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var counter = new Date().valueOf();
function uid() {
    return "u" + counter++;
}
exports.uid = uid;
function extend(target, source, deep) {
    if (deep === void 0) { deep = true; }
    if (source) {
        for (var key in source) {
            var sobj = source[key];
            var tobj = target[key];
            if (sobj === undefined) {
                delete target[key];
            }
            else if (deep &&
                typeof tobj === "object" &&
                !(tobj instanceof Date) &&
                !(tobj instanceof Array)) {
                extend(tobj, sobj);
            }
            else {
                target[key] = sobj;
            }
        }
    }
    return target;
}
exports.extend = extend;
function copy(source, withoutInner) {
    var result = {};
    for (var key in source) {
        if (!withoutInner || !key.startsWith("$")) {
            result[key] = source[key];
        }
    }
    return result;
}
exports.copy = copy;
function naturalSort(arr) {
    return arr.sort(function (a, b) {
        var nn = typeof a === "string" ? a.localeCompare(b) : a - b;
        return nn;
    });
}
exports.naturalSort = naturalSort;
function findIndex(arr, predicate) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (predicate(arr[i])) {
            return i;
        }
    }
    return -1;
}
exports.findIndex = findIndex;
function isEqualString(from, to) {
    if (from.length > to.length) {
        return false;
    }
    for (var i = 0; i < from.length; i++) {
        if (from[i].toLowerCase() !== to[i].toLowerCase()) {
            return false;
        }
    }
    return true;
}
exports.isEqualString = isEqualString;
function singleOuterClick(fn) {
    var click = function (e) {
        if (fn(e)) {
            document.removeEventListener("click", click);
        }
    };
    document.addEventListener("click", click);
}
exports.singleOuterClick = singleOuterClick;
function detectWidgetClick(widgetId, cb) {
    var click = function (e) { return cb(html_1.locate(e, "dhx_widget_id") === widgetId); };
    document.addEventListener("click", click);
    return function () { return document.removeEventListener("click", click); };
}
exports.detectWidgetClick = detectWidgetClick;
function unwrapBox(box) {
    if (Array.isArray(box)) {
        return box[0];
    }
    return box;
}
exports.unwrapBox = unwrapBox;
function wrapBox(unboxed) {
    if (Array.isArray(unboxed)) {
        return unboxed;
    }
    return [unboxed];
}
exports.wrapBox = wrapBox;
function isDefined(some) {
    return some !== null && some !== undefined;
}
exports.isDefined = isDefined;
function range(from, to) {
    if (from > to) {
        return [];
    }
    var result = [];
    while (from <= to) {
        result.push(from++);
    }
    return result;
}
exports.range = range;
function isNumeric(val) {
    return !isNaN(val - parseFloat(val));
}
exports.isNumeric = isNumeric;
function downloadFile(data, filename, mimeType) {
    if (mimeType === void 0) { mimeType = "text/plain"; }
    var file = new Blob([data], { type: mimeType });
    if (window.navigator.msSaveOrOpenBlob) {
        // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    }
    else {
        var a_1 = document.createElement("a");
        var url_1 = URL.createObjectURL(file);
        a_1.href = url_1;
        a_1.download = filename;
        document.body.appendChild(a_1);
        a_1.click();
        setTimeout(function () {
            document.body.removeChild(a_1);
            window.URL.revokeObjectURL(url_1);
        }, 0);
    }
}
exports.downloadFile = downloadFile;
function debounce(func, wait, immediate) {
    var timeout;
    return function executedFunction() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(_this, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(this, args);
        }
    };
}
exports.debounce = debounce;
function compare(obj1, obj2) {
    for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
            return false;
        }
        switch (typeof obj1[p]) {
            case "object":
                if (!compare(obj1[p], obj2[p])) {
                    return false;
                }
                break;
            case "function":
                if (typeof obj2[p] === "undefined" ||
                    (p !== "compare" && obj1[p].toString() !== obj2[p].toString())) {
                    return false;
                }
                break;
            default:
                if (obj1[p] !== obj2[p]) {
                    return false;
                }
        }
    }
    for (var p in obj2) {
        if (typeof obj1[p] === "undefined") {
            return false;
        }
    }
    return true;
}
exports.compare = compare;
exports.isType = function (value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || "undefined").toLowerCase();
};
exports.isEmptyObj = function (obj) {
    for (var key in obj) {
        return false;
    }
    return true;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function toNode(node) {
    return typeof node === "string"
        ? document.getElementById(node) || document.querySelector(node) || document.body
        : node || document.body;
}
exports.toNode = toNode;
function eventHandler(prepare, hash) {
    var keys = Object.keys(hash);
    return function (ev) {
        var data = prepare(ev);
        var node = ev.target;
        while (node) {
            var cssstring = node.getAttribute ? node.getAttribute("class") || "" : "";
            if (cssstring.length) {
                var css = cssstring.split(" ");
                for (var j = 0; j < keys.length; j++) {
                    if (css.includes(keys[j])) {
                        return hash[keys[j]](ev, data);
                    }
                }
            }
            node = node.parentNode;
        }
        return true;
    };
}
exports.eventHandler = eventHandler;
function locateNode(target, attr, dir) {
    if (attr === void 0) { attr = "dhx_id"; }
    if (dir === void 0) { dir = "target"; }
    if (target instanceof Event) {
        target = target[dir];
    }
    while (target) {
        if (target.getAttribute && target.getAttribute(attr)) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNode = locateNode;
function locate(target, attr) {
    if (attr === void 0) { attr = "dhx_id"; }
    var node = locateNode(target, attr);
    return node ? node.getAttribute(attr) : "";
}
exports.locate = locate;
function locateNodeByClassName(target, className) {
    if (target instanceof Event) {
        target = target.target;
    }
    while (target) {
        if (className) {
            if (target.classList && target.classList.contains(className)) {
                return target;
            }
        }
        else if (target.getAttribute && target.getAttribute("dhx_id")) {
            return target;
        }
        target = target.parentNode;
    }
}
exports.locateNodeByClassName = locateNodeByClassName;
function getBox(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var top = box.top + scrollTop;
    var left = box.left + scrollLeft;
    var right = body.offsetWidth - box.right;
    var bottom = body.offsetHeight - box.bottom;
    var width = box.right - box.left;
    var height = box.bottom - box.top;
    return { top: top, left: left, right: right, bottom: bottom, width: width, height: height };
}
exports.getBox = getBox;
var scrollWidth = -1;
function getScrollbarWidth() {
    if (scrollWidth > -1) {
        return scrollWidth;
    }
    var scrollDiv = document.createElement("div");
    document.body.appendChild(scrollDiv);
    scrollDiv.style.cssText = "position: absolute;left: -99999px;overflow:scroll;width: 100px;height: 100px;";
    scrollWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
function isIE() {
    var ua = window.navigator.userAgent;
    return ua.includes("MSIE ") || ua.includes("Trident/");
}
exports.isIE = isIE;
function getRealPosition(node) {
    var rects = node.getBoundingClientRect();
    return {
        left: rects.left + window.pageXOffset,
        right: rects.right + window.pageXOffset,
        top: rects.top + window.pageYOffset,
        bottom: rects.bottom + window.pageYOffset,
    };
}
exports.getRealPosition = getRealPosition;
function getWindowBorders() {
    return {
        rightBorder: window.pageXOffset + window.innerWidth,
        bottomBorder: window.pageYOffset + window.innerHeight,
    };
}
function horizontalCentering(pos, width, rightBorder) {
    var nodeWidth = pos.right - pos.left;
    var diff = (width - nodeWidth) / 2;
    var left = pos.left - diff;
    var right = pos.right + diff;
    if (left >= 0 && right <= rightBorder) {
        return left;
    }
    if (left < 0) {
        return 0;
    }
    return rightBorder - width;
}
function verticalCentering(pos, height, bottomBorder) {
    var nodeHeight = pos.bottom - pos.top;
    var diff = (height - nodeHeight) / 2;
    var top = pos.top - diff;
    var bottom = pos.bottom + diff;
    if (top >= 0 && bottom <= bottomBorder) {
        return top;
    }
    if (top < 0) {
        return 0;
    }
    return bottomBorder - height;
}
function placeBottomOrTop(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var bottomDiff = bottomBorder - pos.bottom - config.height;
    var topDiff = pos.top - config.height;
    if (config.mode === "bottom") {
        if (bottomDiff >= 0) {
            top = pos.bottom;
        }
        else if (topDiff >= 0) {
            top = topDiff;
        }
    }
    else {
        if (topDiff >= 0) {
            top = topDiff;
        }
        else if (bottomDiff >= 0) {
            top = pos.bottom;
        }
    }
    if (bottomDiff < 0 && topDiff < 0) {
        if (config.auto) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            return placeRightOrLeft(pos, __assign(__assign({}, config), { mode: "right", auto: false }));
        }
        top = bottomDiff > topDiff ? pos.bottom : topDiff;
    }
    if (config.centering) {
        left = horizontalCentering(pos, config.width, rightBorder);
    }
    else {
        var leftDiff = rightBorder - pos.left - config.width;
        var rightDiff = pos.right - config.width;
        if (leftDiff >= 0) {
            left = pos.left;
        }
        else if (rightDiff >= 0) {
            left = rightDiff;
        }
        else {
            left = rightDiff > leftDiff ? pos.left : rightDiff;
        }
    }
    return { left: left, top: top };
}
function placeRightOrLeft(pos, config) {
    var _a = getWindowBorders(), rightBorder = _a.rightBorder, bottomBorder = _a.bottomBorder;
    var left;
    var top;
    var rightDiff = rightBorder - pos.right - config.width;
    var leftDiff = pos.left - config.width;
    if (config.mode === "right") {
        if (rightDiff >= 0) {
            left = pos.right;
        }
        else if (leftDiff >= 0) {
            left = leftDiff;
        }
    }
    else {
        if (leftDiff >= 0) {
            left = leftDiff;
        }
        else if (rightDiff >= 0) {
            left = pos.right;
        }
    }
    if (leftDiff < 0 && rightDiff < 0) {
        if (config.auto) {
            return placeBottomOrTop(pos, __assign(__assign({}, config), { mode: "bottom", auto: false }));
        }
        left = leftDiff > rightDiff ? leftDiff : pos.right;
    }
    if (config.centering) {
        top = verticalCentering(pos, config.height, rightBorder);
    }
    else {
        var bottomDiff = pos.bottom - config.height;
        var topDiff = bottomBorder - pos.top - config.height;
        if (topDiff >= 0) {
            top = pos.top;
        }
        else if (bottomDiff > 0) {
            top = bottomDiff;
        }
        else {
            top = bottomDiff > topDiff ? bottomDiff : pos.top;
        }
    }
    return { left: left, top: top };
}
function calculatePosition(pos, config) {
    var _a = config.mode === "bottom" || config.mode === "top"
        ? placeBottomOrTop(pos, config)
        : placeRightOrLeft(pos, config), left = _a.left, top = _a.top;
    return {
        left: Math.round(left) + "px",
        top: Math.round(top) + "px",
        minWidth: Math.round(config.width) + "px",
        position: "absolute",
    };
}
exports.calculatePosition = calculatePosition;
function fitPosition(node, config) {
    return calculatePosition(getRealPosition(node), config);
}
exports.fitPosition = fitPosition;
function getStrSize(str, textStyle) {
    if (textStyle === void 0) { textStyle = {
        fontSize: "14px",
        fontFamily: "Arial",
        lineHeight: "14px",
        fontWeight: "normal",
        fontStyle: "normal",
    }; }
    var span = document.createElement("span");
    var fontSize = textStyle.fontSize, fontFamily = textStyle.fontFamily, lineHeight = textStyle.lineHeight, fontWeight = textStyle.fontWeight, fontStyle = textStyle.fontStyle;
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.lineHeight = lineHeight;
    span.style.fontWeight = fontWeight;
    span.style.fontStyle = fontStyle;
    span.style.display = "inline-flex";
    span.innerText = str;
    document.body.appendChild(span);
    var offsetWidth = span.offsetWidth, clientHeight = span.clientHeight;
    document.body.removeChild(span);
    return { width: offsetWidth, height: clientHeight };
}
exports.getStrSize = getStrSize;
function getPageCss() {
    var css = [];
    for (var sheeti = 0; sheeti < document.styleSheets.length; sheeti++) {
        var sheet = document.styleSheets[sheeti];
        var rules = "cssRules" in sheet ? sheet.cssRules : sheet.rules;
        for (var rulei = 0; rulei < rules.length; rulei++) {
            var rule = rules[rulei];
            if ("cssText" in rule) {
                css.push(rule.cssText);
            }
            else {
                css.push(rule.selectorText + " {\n" + rule.style.cssText + "\n}\n");
            }
        }
    }
    return css.join("\n");
}
exports.getPageCss = getPageCss;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridEvents;
(function (GridEvents) {
    GridEvents["scroll"] = "scroll";
    GridEvents["sort"] = "sort";
    GridEvents["expand"] = "expand";
    GridEvents["filterChange"] = "filterChange";
    GridEvents["beforeResizeStart"] = "beforeResizeStart";
    GridEvents["resize"] = "resize";
    GridEvents["afterResizeEnd"] = "afterResizeEnd";
    GridEvents["cellClick"] = "cellClick";
    GridEvents["cellRightClick"] = "cellRightClick";
    GridEvents["cellMouseOver"] = "cellMouseOver";
    GridEvents["cellMouseDown"] = "cellMouseDown";
    GridEvents["cellDblClick"] = "cellDblClick";
    GridEvents["headerCellClick"] = "headerCellClick";
    GridEvents["footerCellClick"] = "footerCellClick";
    GridEvents["headerCellMouseOver"] = "headerCellMouseOver";
    GridEvents["footerCellMouseOver"] = "footerCellMouseOver";
    GridEvents["headerCellMouseDown"] = "headerCellMouseDown";
    GridEvents["footerCellMouseDown"] = "footerCellMouseDown";
    GridEvents["headerCellDblClick"] = "headerCellDblClick";
    GridEvents["footerCellDblClick"] = "footerCellDblClick";
    GridEvents["headerCellRightClick"] = "headerCellRightClick";
    GridEvents["footerCellRightClick"] = "footerCellRightClick";
    GridEvents["beforeEditStart"] = "beforeEditStart";
    GridEvents["afterEditStart"] = "afterEditStart";
    GridEvents["beforeEditEnd"] = "beforeEditEnd";
    GridEvents["afterEditEnd"] = "afterEditEnd";
    GridEvents["beforeKeyDown"] = "beforeKeyDown";
    GridEvents["afterKeyDown"] = "afterKeyDown";
    // TODO: remove suite_7.0
    GridEvents["headerInput"] = "headerInput";
})(GridEvents = exports.GridEvents || (exports.GridEvents = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventSystem = /** @class */ (function () {
    function EventSystem(context) {
        this.events = {};
        this.context = context || this;
    }
    EventSystem.prototype.on = function (name, callback, context) {
        var event = name.toLowerCase();
        this.events[event] = this.events[event] || [];
        this.events[event].push({ callback: callback, context: context || this.context });
    };
    EventSystem.prototype.detach = function (name, context) {
        var event = name.toLowerCase();
        var eStack = this.events[event];
        if (context && eStack && eStack.length) {
            for (var i = eStack.length - 1; i >= 0; i--) {
                if (eStack[i].context === context) {
                    eStack.splice(i, 1);
                }
            }
        }
        else {
            this.events[event] = [];
        }
    };
    EventSystem.prototype.fire = function (name, args) {
        if (typeof args === "undefined") {
            args = [];
        }
        var event = name.toLowerCase();
        if (this.events[event]) {
            var res = this.events[event].map(function (e) { return e.callback.apply(e.context, args); });
            return !res.includes(false);
        }
        return true;
    };
    EventSystem.prototype.clear = function () {
        this.events = {};
    };
    return EventSystem;
}());
exports.EventSystem = EventSystem;
function EventsMixin(obj) {
    obj = obj || {};
    var eventSystem = new EventSystem(obj);
    obj.detachEvent = eventSystem.detach.bind(eventSystem);
    obj.attachEvent = eventSystem.on.bind(eventSystem);
    obj.callEvent = eventSystem.fire.bind(eventSystem);
}
exports.EventsMixin = EventsMixin;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(20));
__export(__webpack_require__(55));
__export(__webpack_require__(56));
__export(__webpack_require__(9));
__export(__webpack_require__(58));
__export(__webpack_require__(8));
__export(__webpack_require__(23));
__export(__webpack_require__(22));
__export(__webpack_require__(59));
__export(__webpack_require__(21));
__export(__webpack_require__(14));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var html_1 = __webpack_require__(2);
var View = /** @class */ (function () {
    function View(_container, config) {
        this._uid = core_1.uid();
        this.config = config || {};
    }
    View.prototype.mount = function (container, vnode) {
        if (vnode) {
            this._view = vnode;
        }
        if (container && this._view && this._view.mount) {
            // init view inside of HTML container
            this._container = html_1.toNode(container);
            if (this._container.tagName) {
                this._view.mount(this._container);
            }
            else if (this._container.attach) {
                this._container.attach(this);
            }
        }
    };
    View.prototype.unmount = function () {
        var rootView = this.getRootView();
        if (rootView && rootView.node) {
            rootView.unmount();
            this._view = null;
        }
    };
    View.prototype.getRootView = function () {
        return this._view;
    };
    View.prototype.getRootNode = function () {
        return this._view && this._view.node && this._view.node.el;
    };
    View.prototype.paint = function () {
        if (this._view && // was mounted
            (this._view.node || // already rendered node
                this._container)) {
            // not rendered, but has container
            this._doNotRepaint = false;
            this._view.redraw();
        }
    };
    return View;
}());
exports.View = View;
function toViewLike(view) {
    return {
        getRootView: function () { return view; },
        paint: function () { return view.node && view.redraw(); },
        mount: function (container) { return view.mount(container); },
    };
}
exports.toViewLike = toViewLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TreeFilterType;
(function (TreeFilterType) {
    TreeFilterType["all"] = "all";
    TreeFilterType["level"] = "level";
    TreeFilterType["leafs"] = "leafs";
})(TreeFilterType = exports.TreeFilterType || (exports.TreeFilterType = {}));
var DropPosition;
(function (DropPosition) {
    DropPosition["top"] = "top";
    DropPosition["bot"] = "bot";
    DropPosition["in"] = "in";
})(DropPosition = exports.DropPosition || (exports.DropPosition = {}));
var DataEvents;
(function (DataEvents) {
    DataEvents["afterAdd"] = "afteradd";
    DataEvents["beforeAdd"] = "beforeadd";
    DataEvents["removeAll"] = "removeall";
    DataEvents["beforeRemove"] = "beforeremove";
    DataEvents["afterRemove"] = "afterremove";
    DataEvents["change"] = "change";
    DataEvents["load"] = "load";
    DataEvents["loadError"] = "loaderror";
    DataEvents["beforeLazyLoad"] = "beforelazyload";
    DataEvents["afterLazyLoad"] = "afterlazyload";
})(DataEvents = exports.DataEvents || (exports.DataEvents = {}));
var DragEvents;
(function (DragEvents) {
    DragEvents["beforeDrag"] = "beforedrag";
    DragEvents["beforeDrop"] = "beforeDrop";
    DragEvents["dragStart"] = "dragstart";
    DragEvents["dragEnd"] = "dragend";
    DragEvents["canDrop"] = "candrop";
    DragEvents["cancelDrop"] = "canceldrop";
    DragEvents["dropComplete"] = "dropcomplete";
    DragEvents["dragOut"] = "dragOut";
    DragEvents["dragIn"] = "dragIn";
    DragEvents["beforeColumnDrag"] = "beforeColumnDrag";
    DragEvents["beforeColumnDrop"] = "beforeColumnDrop";
})(DragEvents = exports.DragEvents || (exports.DragEvents = {}));
var DataDriver;
(function (DataDriver) {
    DataDriver["json"] = "json";
    DataDriver["csv"] = "csv";
    DataDriver["xml"] = "xml";
})(DataDriver = exports.DataDriver || (exports.DataDriver = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(9);
var drivers_1 = __webpack_require__(21);
function isEqualObj(a, b) {
    for (var key in a) {
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
exports.isEqualObj = isEqualObj;
function naturalCompare(a, b) {
    if (isNaN(a) || isNaN(b)) {
        var ax_1 = [];
        var bx_1 = [];
        a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            ax_1.push([$1 || Infinity, $2 || ""]);
        });
        b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) {
            bx_1.push([$1 || Infinity, $2 || ""]);
        });
        while (ax_1.length && bx_1.length) {
            var an = ax_1.shift();
            var bn = bx_1.shift();
            var nn = an[0] - bn[0] || an[1].localeCompare(bn[1]);
            if (nn) {
                return nn;
            }
        }
        return ax_1.length - bx_1.length;
    }
    return a - b;
}
exports.naturalCompare = naturalCompare;
function findByConf(item, conf) {
    if (typeof conf === "function") {
        if (conf.call(this, item)) {
            return item;
        }
    }
    else if (conf.by && conf.match) {
        if (item[conf.by] === conf.match) {
            return item;
        }
    }
}
exports.findByConf = findByConf;
function isDebug() {
    var dhx = window.dhx;
    if (typeof dhx !== "undefined") {
        return typeof dhx.debug !== "undefined" && dhx.debug;
    }
    // return typeof DHX_DEBUG_MODE !== "undefined" && DHX_DEBUG_MODE;
}
exports.isDebug = isDebug;
function dhxWarning(msg) {
    // tslint:disable-next-line:no-console
    console.warn(msg);
}
exports.dhxWarning = dhxWarning;
function dhxError(msg) {
    throw new Error(msg);
}
exports.dhxError = dhxError;
function toProxy(proxy) {
    var type = typeof proxy;
    if (type === "string") {
        return new dataproxy_1.DataProxy(proxy);
    }
    else if (type === "object") {
        return proxy;
    }
}
exports.toProxy = toProxy;
function toDataDriver(driver) {
    if (typeof driver === "string") {
        var dhx = window.dhx;
        var drivers = (dhx && dhx.dataDrivers) || drivers_1.dataDrivers;
        if (drivers[driver]) {
            return new drivers[driver]();
        }
        else {
            // tslint:disable-next-line:no-console
            console.warn("Incorrect data driver type:", driver);
            // tslint:disable-next-line:no-console
            console.warn("Available types:", JSON.stringify(Object.keys(drivers)));
        }
    }
    else if (typeof driver === "object") {
        return driver;
    }
}
exports.toDataDriver = toDataDriver;
function copyWithoutInner(obj, forbidden) {
    var result = {};
    for (var key in obj) {
        if (!key.startsWith("$") && (!forbidden || !forbidden[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.copyWithoutInner = copyWithoutInner;
function isTreeCollection(obj) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return Boolean(obj.getRoot);
}
exports.isTreeCollection = isTreeCollection;
function hasJsonOrArrayStructure(str) {
    if (typeof str === "object") {
        return true;
    }
    if (typeof str !== "string") {
        return false;
    }
    try {
        var result = JSON.parse(str);
        return Object.prototype.toString.call(result) === "[object Object]" || Array.isArray(result);
    }
    catch (err) {
        return false;
    }
}
exports.hasJsonOrArrayStructure = hasJsonOrArrayStructure;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ajax_1 = __webpack_require__(14);
var DataProxy = /** @class */ (function () {
    function DataProxy(url, config) {
        this.url = this._url = url;
        this.config = config;
    }
    DataProxy.prototype.updateUrl = function (url, params) {
        if (params === void 0) { params = {}; }
        this._url = this.url = url || this._url;
        this.url += "?";
        for (var param in params) {
            this.config[param] = params[param];
            this.url += param + "=" + encodeURIComponent(params[param]) + "&";
        }
        this.url = this.url.slice(0, -1);
    };
    DataProxy.prototype.load = function () {
        return ajax_1.ajax.get(this.url, null, { responseType: "text" });
    };
    DataProxy.prototype.save = function (data, mode) {
        switch (mode) {
            case "delete":
                return ajax_1.ajax.delete(this.url, data);
            case "update":
            case "insert":
            default:
                return ajax_1.ajax.post(this.url, data);
        }
    };
    return DataProxy;
}());
exports.DataProxy = DataProxy;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function rgbToHex(color) {
    if (color.substr(0, 1) === "#") {
        return color;
    }
    var digits = /(.*?)rgb[a]?\((\d+), *(\d+), *(\d+),* *([\d+.]*)\)/.exec(color);
    var red = parseInt(digits[2], 10)
        .toString(16)
        .padStart(2, "0");
    var green = parseInt(digits[3], 10)
        .toString(16)
        .padStart(2, "0");
    var blue = parseInt(digits[4], 10)
        .toString(16)
        .padStart(2, "0");
    return "#" + red + green + blue;
}
exports.rgbToHex = rgbToHex;
function transpose(arr, transform) {
    var columns = [];
    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var cellInd = 0; cellInd < row.length; cellInd++) {
            columns[cellInd] = columns[cellInd] || [];
            var cell = transform ? transform(row[cellInd]) : row[cellInd];
            columns[cellInd].push(cell);
        }
    }
    return columns;
}
exports.transpose = transpose;
function insert(node, newone) {
    if (typeof newone === "string") {
        node.insertAdjacentHTML("beforeend", newone);
        return node.lastChild;
    }
    else {
        node.appendChild(newone);
        return newone;
    }
}
function getStyleByClass(cssClass, container, targetClass, def) {
    var cont = container.querySelector("." + targetClass);
    var testDiv = insert(cont, "<div class=\"" + cssClass + "\"></div>");
    var styles = window.getComputedStyle(testDiv);
    var result = {
        color: styles.color === "rgb(0, 0, 0)" ? def.color : rgbToHex(styles.color),
        background: styles.backgroundColor === "rgba(0, 0, 0, 0)" ? def.background : rgbToHex(styles.backgroundColor),
        fontSize: parseFloat(styles.fontSize),
    };
    cont.removeChild(testDiv);
    // [dirty]
    if (result.color === def.color &&
        result.background === def.background &&
        result.fontSize === def.fontSize) {
        return null;
    }
    return result;
}
exports.getStyleByClass = getStyleByClass;
function removeHTMLTags(str) {
    if (typeof str !== "string" && typeof str !== "number" && typeof str !== "boolean") {
        return "";
    }
    return ("" + (str === undefined || str === null ? "" : str))
        .replace(/<[^>]*>/g, "")
        .replace(/["]/g, "&quot;")
        .trim();
}
exports.removeHTMLTags = removeHTMLTags;
function isCssSupport(property, value) {
    try {
        return CSS.supports(property, value);
    }
    catch (err) {
        var el = document.createElement("div");
        el.style[property] = value;
        return el.style[property] === value;
    }
}
exports.isCssSupport = isCssSupport;
function isRowEmpty(row) {
    if (!row) {
        return;
    }
    return Object.keys(row).reduce(function (acc, col) {
        if (col === "id" || col.startsWith("$")) {
            return acc;
        }
        if (acc && row[col] !== undefined && row[col] !== "") {
            return false;
        }
        return acc;
    }, true);
}
exports.isRowEmpty = isRowEmpty;
function isSortable(config, col) {
    return (col.sortable !== false && config.sortable) || col.sortable;
}
exports.isSortable = isSortable;
function isAutoWidth(config, col) {
    if (!col) {
        var check_1 = false;
        config.columns.map(function (column) {
            if (column.hidden) {
                return;
            }
            if ((column.autoWidth !== false && config.autoWidth) || column.autoWidth) {
                check_1 = true;
                return;
            }
        });
        return check_1;
    }
    return (col.autoWidth !== false && config.autoWidth) || col.autoWidth;
}
exports.isAutoWidth = isAutoWidth;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {(function () {
  global = this

  var queueId = 1
  var queue = {}
  var isRunningTask = false

  if (!global.setImmediate)
    global.addEventListener('message', function (e) {
      if (e.source == global){
        if (isRunningTask)
          nextTick(queue[e.data])
        else {
          isRunningTask = true
          try {
            queue[e.data]()
          } catch (e) {}

          delete queue[e.data]
          isRunningTask = false
        }
      }
    })

  function nextTick(fn) {
    if (global.setImmediate) setImmediate(fn)
    // if inside of web worker
    else if (global.importScripts) setTimeout(fn)
    else {
      queueId++
      queue[queueId] = fn
      global.postMessage(queueId, '*')
    }
  }

  Deferred.resolve = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    if (value instanceof Deferred)
      return value

    return new Deferred(function (resolve) {
        resolve(value)
    })
  }

  Deferred.reject = function (value) {
    if (!(this._d == 1))
      throw TypeError()

    return new Deferred(function (resolve, reject) {
        reject(value)
    })
  }

  Deferred.all = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            arr[i] = r
            done()
            return r
          }, done)
      })
    }

    done()

    return d
  }

  Deferred.race = function (arr) {
    if (!(this._d == 1))
      throw TypeError()

    if (!(arr instanceof Array))
      return Deferred.reject(TypeError())

    if (arr.length == 0)
      return new Deferred()

    var d = new Deferred()

    function done(e, v) {
      if (v)
        return d.resolve(v)

      if (e)
        return d.reject(e)

      var unresolved = arr.reduce(function (cnt, v) {
        if (v && v.then)
          return cnt + 1
        return cnt
      }, 0)

      if(unresolved == 0)
        d.resolve(arr)

      arr.map(function (v, i) {
        if (v && v.then)
          v.then(function (r) {
            done(null, r)
          }, done)
      })
    }

    done()

    return d
  }

  Deferred._d = 1


  /**
   * @constructor
   */
  function Deferred(resolver) {
    'use strict'
    if (typeof resolver != 'function' && resolver != undefined)
      throw TypeError()

    if (typeof this != 'object' || (this && this.then))
      throw TypeError()

    // states
    // 0: pending
    // 1: resolving
    // 2: rejecting
    // 3: resolved
    // 4: rejected
    var self = this,
      state = 0,
      val = 0,
      next = [],
      fn, er;

    self['promise'] = self

    self['resolve'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 1

        nextTick(fire)
      }
      return self
    }

    self['reject'] = function (v) {
      fn = self.fn
      er = self.er
      if (!state) {
        val = v
        state = 2

        nextTick(fire)

      }
      return self
    }

    self['_d'] = 1

    self['then'] = function (_fn, _er) {
      if (!(this._d == 1))
        throw TypeError()

      var d = new Deferred()

      d.fn = _fn
      d.er = _er
      if (state == 3) {
        d.resolve(val)
      }
      else if (state == 4) {
        d.reject(val)
      }
      else {
        next.push(d)
      }

      return d
    }

    self['catch'] = function (_er) {
      return self['then'](null, _er)
    }

    var finish = function (type) {
      state = type || 4
      next.map(function (p) {
        state == 3 && p.resolve(val) || p.reject(val)
      })
    }

    try {
      if (typeof resolver == 'function')
        resolver(self['resolve'], self['reject'])
    } catch (e) {
      self['reject'](e)
    }

    return self

    // ref : reference to 'then' function
    // cb, ec, cn : successCallback, failureCallback, notThennableCallback
    function thennable (ref, cb, ec, cn) {
      // Promises can be rejected with other promises, which should pass through
      if (state == 2) {
        return cn()
      }
      if ((typeof val == 'object' || typeof val == 'function') && typeof ref == 'function') {
        try {

          // cnt protects against abuse calls from spec checker
          var cnt = 0
          ref.call(val, function (v) {
            if (cnt++) return
            val = v
            cb()
          }, function (v) {
            if (cnt++) return
            val = v
            ec()
          })
        } catch (e) {
          val = e
          ec()
        }
      } else {
        cn()
      }
    };

    function fire() {

      // check if it's a thenable
      var ref;
      try {
        ref = val && val.then
      } catch (e) {
        val = e
        state = 2
        return fire()
      }

      thennable(ref, function () {
        state = 1
        fire()
      }, function () {
        state = 2
        fire()
      }, function () {
        try {
          if (state == 1 && typeof fn == 'function') {
            val = fn(val)
          }

          else if (state == 2 && typeof er == 'function') {
            val = er(val)
            state = 1
          }
        } catch (e) {
          val = e
          return finish()
        }

        if (val == self) {
          val = TypeError()
          finish()
        } else thennable(ref, function () {
            finish(3)
          }, finish, function () {
            finish(state == 1 && 3)
          })

      })
    }


  }

  // Export our library object, either for node.js or as a globally scoped variable
  if (true) {
    module['exports'] = Deferred
  } else {}
})()

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13), __webpack_require__(47).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LayoutEvents;
(function (LayoutEvents) {
    LayoutEvents["beforeShow"] = "beforeShow";
    LayoutEvents["afterShow"] = "afterShow";
    LayoutEvents["beforeHide"] = "beforeHide";
    LayoutEvents["afterHide"] = "afterHide";
    LayoutEvents["beforeResizeStart"] = "beforeResizeStart";
    LayoutEvents["resize"] = "resize";
    LayoutEvents["afterResizeEnd"] = "afterResizeEnd";
    LayoutEvents["beforeAdd"] = "beforeAdd";
    LayoutEvents["afterAdd"] = "afterAdd";
    LayoutEvents["beforeRemove"] = "beforeRemove";
    LayoutEvents["afterRemove"] = "afterRemove";
    LayoutEvents["beforeCollapse"] = "beforeCollapse";
    LayoutEvents["afterCollapse"] = "afterCollapse";
    LayoutEvents["beforeExpand"] = "beforeExpand";
    LayoutEvents["afterExpand"] = "afterExpand";
})(LayoutEvents = exports.LayoutEvents || (exports.LayoutEvents = {}));
var resizeMode;
(function (resizeMode) {
    resizeMode[resizeMode["unknown"] = 0] = "unknown";
    resizeMode[resizeMode["percents"] = 1] = "percents";
    resizeMode[resizeMode["pixels"] = 2] = "pixels";
    resizeMode[resizeMode["mixedpx1"] = 3] = "mixedpx1";
    resizeMode[resizeMode["mixedpx2"] = 4] = "mixedpx2";
    resizeMode[resizeMode["mixedperc1"] = 5] = "mixedperc1";
    resizeMode[resizeMode["mixedperc2"] = 6] = "mixedperc2";
})(resizeMode = exports.resizeMode || (exports.resizeMode = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(7);
var helpers_1 = __webpack_require__(8);
function toQueryString(data) {
    return Object.keys(data)
        .reduce(function (entries, key) {
        var value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key];
        entries.push(key + "=" + encodeURIComponent(value));
        return entries;
    }, [])
        .join("&");
}
function inferResponseType(contentType) {
    if (!contentType) {
        return "text";
    }
    if (contentType.includes("json")) {
        return "json";
    }
    if (contentType.includes("xml")) {
        return "xml";
    }
    return "text";
}
function send(url, data, method, headers, responseType) {
    function parseResponse(responseText, genResponseType) {
        switch (genResponseType) {
            case "json": {
                return JSON.parse(responseText);
            }
            case "text": {
                return responseText;
            }
            case "xml": {
                var driver = helpers_1.toDataDriver(types_1.DataDriver.xml);
                if (driver) {
                    return driver.toJsonObject(responseText);
                }
                else {
                    return { parseError: "Incorrect data driver type: 'xml'" };
                }
            }
            default: {
                return responseText;
            }
        }
    }
    var allHeaders = headers || {};
    if (responseType) {
        allHeaders.Accept = "application/" + responseType;
    }
    if (method !== "GET") {
        allHeaders["Content-Type"] = allHeaders["Content-Type"] || "application/json";
    }
    if (method === "GET") {
        var urlData = data && typeof data === "object"
            ? toQueryString(data)
            : data && typeof data === "string"
                ? data
                : "";
        if (urlData) {
            url += !url.includes("?") ? "?" : "&";
            url += urlData;
        }
        data = null;
    }
    if (!window.fetch) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (responseType === "raw") {
                        resolve({
                            url: xhr.responseURL,
                            headers: xhr
                                .getAllResponseHeaders()
                                .trim()
                                .split(/[\r\n]+/)
                                .reduce(function (acc, cur) {
                                var kv = cur.split(": ");
                                acc[kv[0]] = kv[1];
                                return acc;
                            }, {}),
                            body: xhr.response,
                        });
                    }
                    if (xhr.status === 204) {
                        resolve();
                    }
                    else {
                        resolve(parseResponse(xhr.responseText, responseType || inferResponseType(xhr.getResponseHeader("Content-Type"))));
                    }
                }
                else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText,
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                    message: xhr.responseText,
                });
            };
            xhr.open(method, url);
            for (var headerKey in allHeaders) {
                xhr.setRequestHeader(headerKey, allHeaders[headerKey]);
            }
            switch (method) {
                case "POST":
                case "DELETE":
                case "PUT":
                    xhr.send(data !== undefined ? JSON.stringify(data) : "");
                    break;
                case "GET":
                    xhr.send();
                    break;
                default:
                    xhr.send();
                    break;
            }
        });
    }
    else {
        return window
            .fetch(url, {
            method: method,
            body: data ? JSON.stringify(data) : null,
            headers: allHeaders,
        })
            .then(function (response) {
            if (response.ok) {
                var genResponseType = responseType || inferResponseType(response.headers.get("Content-Type"));
                if (genResponseType === "raw") {
                    return {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        headers: Object.fromEntries(response.headers.entries()),
                        url: response.url,
                        body: response.body,
                    };
                }
                if (response.status !== 204) {
                    switch (genResponseType) {
                        case "json": {
                            return response.json();
                        }
                        case "xml": {
                            var driver_1 = helpers_1.toDataDriver(types_1.DataDriver.xml);
                            if (driver_1) {
                                return response.text().then(function (xmlData) { return driver_1.toJsonObject(xmlData); });
                            }
                            else {
                                return response.text();
                            }
                        }
                        default:
                            return response.text();
                    }
                }
            }
            else {
                return response.text().then(function (message) {
                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText,
                        message: message,
                    });
                });
            }
        });
    }
}
exports.ajax = {
    get: function (url, data, config) {
        return send(url, data, "GET", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    post: function (url, data, config) {
        return send(url, data, "POST", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    put: function (url, data, config) {
        return send(url, data, "PUT", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
    delete: function (url, data, config) {
        return send(url, data, "DELETE", config && config.headers, config !== undefined ? config.responseType : undefined);
    },
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectionEvents;
(function (SelectionEvents) {
    SelectionEvents["beforeUnSelect"] = "beforeunselect";
    SelectionEvents["afterUnSelect"] = "afterunselect";
    SelectionEvents["beforeSelect"] = "beforeselect";
    SelectionEvents["afterSelect"] = "afterselect";
})(SelectionEvents = exports.SelectionEvents || (exports.SelectionEvents = {}));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
function getHotKeyCode(code) {
    var matches = code.toLowerCase().match(/\w+/g);
    var comp = 0;
    var key = "";
    for (var i = 0; i < matches.length; i++) {
        var check = matches[i];
        if (check === "ctrl") {
            comp += 4;
        }
        else if (check === "shift") {
            comp += 2;
        }
        else if (check === "alt") {
            comp += 1;
        }
        else {
            key = check;
        }
    }
    return comp + key;
}
var KeyManager = /** @class */ (function () {
    function KeyManager() {
        var _this = this;
        this._keysStorage = {};
        document.addEventListener("keydown", function (e) {
            var comp = (e.ctrlKey || e.metaKey ? 4 : 0) + (e.shiftKey ? 2 : 0) + (e.altKey ? 1 : 0);
            var key;
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 65 && e.which <= 90)) {
                // A-Z 0-9
                key = String.fromCharCode(e.which);
            }
            else {
                // dirty: added space binding
                if (e.which === 32 && !html_1.isIE()) {
                    key = e.code;
                }
                else {
                    key = e.key;
                }
            }
            var code = comp + (key && key.toLowerCase());
            var actions = _this._keysStorage[code];
            if (actions) {
                for (var i = 0; i < actions.length; i++) {
                    actions[i].handler(e);
                }
            }
        });
    }
    KeyManager.prototype.addHotKey = function (key, handler, scope) {
        var code = getHotKeyCode(key);
        if (!this._keysStorage[code]) {
            this._keysStorage[code] = [];
        }
        this._keysStorage[code].push({
            handler: handler,
            scope: scope,
        });
    };
    KeyManager.prototype.removeHotKey = function (key, scope) {
        var keyStorage = this._keysStorage;
        if (key) {
            var code = getHotKeyCode(key);
            delete keyStorage[code];
        }
        if (scope) {
            for (var code in keyStorage) {
                var toDelete = []; // items index to delete
                for (var i = 0; i < keyStorage[code].length; i++) {
                    if (keyStorage[code][i].scope === scope) {
                        toDelete.push(i);
                    }
                }
                if (keyStorage[code].length === toDelete.length) {
                    delete keyStorage[code];
                }
                else {
                    for (var i = toDelete.length - 1; i >= 0; i--) {
                        // begin from last coz splice change other index
                        keyStorage[code].splice(toDelete[i], 1);
                    }
                }
            }
        }
    };
    KeyManager.prototype.exist = function (key) {
        var code = getHotKeyCode(key);
        return !!this._keysStorage[code];
    };
    return KeyManager;
}());
exports.keyManager = new KeyManager();
function addHotkeys(handlers, beforeCall) {
    var context = new Date();
    var wrapHandler = function (handler) { return function (e) {
        if (beforeCall && beforeCall() === false) {
            return;
        }
        handler(e);
    }; };
    for (var key in handlers) {
        exports.keyManager.addHotKey(key, wrapHandler(handlers[key]), context);
    }
    return function () { return exports.keyManager.removeHotKey(undefined, context); };
}
exports.addHotkeys = addHotkeys;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(77));
__export(__webpack_require__(29));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var en_1 = __webpack_require__(32);
var core_1 = __webpack_require__(1);
/*
    %d	day as a number with leading zero, 01..31
    %j	day as a number, 1..31
    %D	short name of the day, Su Mo Tu...
    %l	full name of the day, Sunday Monday Tuesday...
    %m	month as a number with leading zero, 01..12
    %n	month as a number, 1..12
    %M	short name of the month, Jan Feb Mar...
    %F	full name of the month, January February March...
    %y	year as a number, 2 digits
    %Y	year as a number, 4 digits
    %h	hours 12-format with leading zero, 01..12)
    %g	hours 12-format, 1..12)
    %H	hours 24-format with leading zero, 01..24
    %G	hours 24-format, 1..24
    %i	minutes with leading zero, 01..59
    %s	seconds with leading zero, 01..59
    %a	am or pm
    %A	AM or PM
    %u	milliseconds
    %P	timezone offset
*/
var formatters = {
    "%d": function (date) {
        var day = date.getDate();
        return day < 10 ? "0" + day : day;
    },
    "%j": function (date) { return date.getDate(); },
    "%l": function (date) {
        return en_1.default.days[date.getDay()];
    },
    "%D": function (date) {
        return en_1.default.daysShort[date.getDay()];
    },
    "%m": function (date) {
        var month = date.getMonth() + 1;
        return month < 10 ? "0" + month : month;
    },
    "%n": function (date) { return date.getMonth() + 1; },
    "%M": function (date) { return en_1.default.monthsShort[date.getMonth()]; },
    "%F": function (date) { return en_1.default.months[date.getMonth()]; },
    "%y": function (date) {
        return date
            .getFullYear()
            .toString()
            .slice(2);
    },
    "%Y": function (date) { return date.getFullYear(); },
    "%h": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours < 10 ? "0" + hours : hours;
    },
    "%g": function (date) {
        var hours = date.getHours() % 12;
        if (hours === 0) {
            hours = 12;
        }
        return hours;
    },
    "%H": function (date) {
        var hours = date.getHours();
        return hours < 10 ? "0" + hours : hours;
    },
    "%G": function (date) { return date.getHours(); },
    "%i": function (date) {
        var minutes = date.getMinutes();
        return minutes < 10 ? "0" + minutes : minutes;
    },
    "%s": function (date) {
        var seconds = date.getSeconds();
        return seconds < 10 ? "0" + seconds : seconds;
    },
    "%a": function (date) {
        return date.getHours() >= 12 ? "pm" : "am";
    },
    "%A": function (date) {
        return date.getHours() >= 12 ? "PM" : "AM";
    },
    "%u": function (date) { return date.getMilliseconds(); },
};
var setFormatters = {
    "%d": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%j": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check ? date.setDate(Number(value)) : date.setDate(Number(1));
    },
    "%m": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
    },
    "%n": function (date, value) {
        var check = /(^([0-9]?[0-9])$)/i.test(value);
        check ? date.setMonth(Number(value) - 1) : date.setMonth(Number(0));
    },
    "%M": function (date, value) {
        var index = core_1.findIndex(en_1.default.monthsShort, function (v) { return v === value; });
        index === -1 ? date.setMonth(0) : date.setMonth(index);
    },
    "%F": function (date, value) {
        var index = core_1.findIndex(en_1.default.months, function (v) { return v === value; });
        index === -1 ? date.setMonth(0) : date.setMonth(index);
    },
    "%y": function (date, value) {
        var check = /(^([0-9][0-9])$)/i.test(value);
        check ? date.setFullYear(Number("20" + value)) : date.setFullYear(Number("2000"));
    },
    "%Y": function (date, value) {
        var check = /(^([0-9][0-9][0-9][0-9])$)/i.test(value);
        check ? date.setFullYear(Number(value)) : date.setFullYear(Number("2000"));
    },
    "%h": function (date, value, dateFormat) {
        var check = /(^0[1-9]|1[0-2]$)/i.test(value);
        (check && dateFormat === "pm") || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%g": function (date, value, dateFormat) {
        var check = /(^[1-9]$)|(^0[1-9]|1[0-2]$)/i.test(value);
        (check && dateFormat === "pm") || dateFormat === "PM"
            ? date.setHours(Number(value))
            : date.setHours(Number(0));
    },
    "%H": function (date, value) {
        var check = /(^[0-2][0-9]$)/i.test(value);
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%G": function (date, value) {
        var check = /(^[1-9][0-9]?$)/i.test(value);
        check ? date.setHours(Number(value)) : date.setHours(Number(0));
    },
    "%i": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check ? date.setMinutes(Number(value)) : date.setMinutes(Number(0));
    },
    "%s": function (date, value) {
        var check = /(^([0-5][0-9])$)/i.test(value);
        check ? date.setSeconds(Number(value)) : date.setSeconds(Number(0));
    },
    "%a": function (date, value) {
        if (value === "pm") {
            date.setHours(date.getHours() + 12);
        }
    },
    "%A": function (date, value) {
        if (value === "PM") {
            date.setHours(date.getHours() + 12);
        }
    },
};
var TokenType;
(function (TokenType) {
    TokenType[TokenType["separator"] = 0] = "separator";
    TokenType[TokenType["datePart"] = 1] = "datePart";
})(TokenType || (TokenType = {}));
function tokenizeFormat(format) {
    var tokens = [];
    var currentSeparator = "";
    for (var i = 0; i < format.length; i++) {
        if (format[i] === "%") {
            if (currentSeparator.length > 0) {
                tokens.push({
                    type: TokenType.separator,
                    value: currentSeparator,
                });
                currentSeparator = "";
            }
            tokens.push({
                type: TokenType.datePart,
                value: format[i] + format[i + 1],
            });
            i++;
        }
        else {
            currentSeparator += format[i];
        }
    }
    if (currentSeparator.length > 0) {
        tokens.push({
            type: TokenType.separator,
            value: currentSeparator,
        });
    }
    return tokens;
}
function getFormatedDate(format, date) {
    return tokenizeFormat(format).reduce(function (res, token) {
        if (token.type === TokenType.separator) {
            return res + token.value;
        }
        else {
            if (!formatters[token.value]) {
                return res;
            }
            return res + formatters[token.value](date);
        }
    }, "");
}
exports.getFormatedDate = getFormatedDate;
function stringToDate(str, format, validate) {
    if (typeof str !== "string") {
        return;
    }
    var tokens = tokenizeFormat(format);
    var dateParts = [];
    var index = 0;
    var formatter = null;
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (token.type === TokenType.separator) {
            var sepratorIndex = str.indexOf(token.value, index);
            if (sepratorIndex === -1) {
                if (validate) {
                    return false;
                }
                throw new Error("Incorrect date, see docs: https://docs.dhtmlx.com/suite/calendar__api__calendar_dateformat_config.html");
            }
            if (formatter) {
                dateParts.push({
                    formatter: formatter,
                    value: str.slice(index, sepratorIndex),
                });
                formatter = null;
            }
            index = sepratorIndex + token.value.length;
        }
        else if (token.type === TokenType.datePart) {
            formatter = token.value;
        }
    }
    if (formatter) {
        dateParts.push({
            formatter: formatter,
            value: str.slice(index),
        });
    }
    dateParts.reverse();
    var dateFormat;
    for (var _a = 0, dateParts_1 = dateParts; _a < dateParts_1.length; _a++) {
        var datePart = dateParts_1[_a];
        if (datePart.formatter === "%A" || datePart.formatter === "%a") {
            dateFormat = datePart.value;
        }
    }
    var date = new Date(0);
    for (var _b = 0, dateParts_2 = dateParts; _b < dateParts_2.length; _b++) {
        var datePart = dateParts_2[_b];
        if (setFormatters[datePart.formatter]) {
            setFormatters[datePart.formatter](date, datePart.value, dateFormat);
        }
    }
    return validate ? true : date;
}
exports.stringToDate = stringToDate;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ListEvents;
(function (ListEvents) {
    ListEvents["click"] = "click";
    ListEvents["doubleClick"] = "doubleclick";
    ListEvents["focusChange"] = "focuschange";
    ListEvents["beforeEditStart"] = "beforeEditStart";
    ListEvents["afterEditStart"] = "afterEditStart";
    ListEvents["beforeEditEnd"] = "beforeEditEnd";
    ListEvents["afterEditEnd"] = "afterEditEnd";
    ListEvents["itemRightClick"] = "itemRightClick";
    ListEvents["itemMouseOver"] = "itemMouseOver";
    // TODO: remove sute_7.0
    ListEvents["contextmenu"] = "contextmenu";
})(ListEvents = exports.ListEvents || (exports.ListEvents = {}));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(4);
var loader_1 = __webpack_require__(51);
var sort_1 = __webpack_require__(54);
var dataproxy_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(8);
var types_1 = __webpack_require__(7);
var core_1 = __webpack_require__(1);
var DataCollection = /** @class */ (function () {
    function DataCollection(config, events) {
        this.config = config || {};
        this._order = [];
        this._pull = {};
        this._changes = { order: [] };
        this._initOrder = null;
        this._sort = new sort_1.Sort();
        this._loader = new loader_1.Loader(this, this._changes);
        this.events = events || new events_1.EventSystem(this);
        this.events.on(types_1.DataEvents.loadError, function (response) {
            if (typeof response !== "string") {
                helpers_1.dhxError(response);
            }
            else {
                helpers_1.dhxWarning(response);
            }
        });
    }
    DataCollection.prototype.add = function (obj, index) {
        var _this = this;
        if (!this.events.fire(types_1.DataEvents.beforeAdd, [obj])) {
            return;
        }
        if (Array.isArray(obj)) {
            return obj.map(function (element, key) {
                if (key !== 0) {
                    index = index + 1;
                }
                return _this._add(element, index);
            });
        }
        else {
            return this._add(obj, index);
        }
    };
    DataCollection.prototype.remove = function (id) {
        var _this = this;
        if (id) {
            if (id instanceof Array) {
                id.map(function (elementId) {
                    _this._remove(elementId);
                });
            }
            else {
                this._remove(id);
            }
        }
    };
    DataCollection.prototype.removeAll = function () {
        this._removeAll();
        this.events.fire(types_1.DataEvents.removeAll);
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.exists = function (id) {
        return !!this._pull[id];
    };
    DataCollection.prototype.getNearId = function (id) {
        var item = this._pull[id];
        if (!item) {
            return this._order[0].id || "";
        }
    };
    DataCollection.prototype.getItem = function (id) {
        return this._pull[id];
    };
    DataCollection.prototype.update = function (id, obj, silent) {
        var item = this.getItem(id);
        if (item) {
            if (helpers_1.isEqualObj(obj, item)) {
                return;
            }
            if (obj.id && id !== obj.id) {
                helpers_1.dhxWarning("this method doesn't allow change id");
                if (helpers_1.isDebug()) {
                    // eslint-disable-next-line no-debugger
                    debugger;
                }
            }
            else {
                core_1.extend(this._pull[id], obj, false);
                if (this.config.update) {
                    this.config.update(this._pull[id]);
                }
                if (!silent) {
                    this._onChange("update", id, this._pull[id]);
                }
            }
        }
        else {
            helpers_1.dhxWarning("item not found");
        }
    };
    DataCollection.prototype.getIndex = function (id) {
        if (!id) {
            return -1;
        }
        var res = core_1.findIndex(this._order, function (item) { return item.id.toString() === id.toString(); });
        if (this._pull[id] && res >= 0) {
            return res;
        }
    };
    DataCollection.prototype.getId = function (index) {
        if (!this._order[index]) {
            return;
        }
        return this._order[index].id;
    };
    DataCollection.prototype.getLength = function () {
        return this._order.length;
    };
    DataCollection.prototype.isDataLoaded = function (from, to) {
        if (from === void 0) { from = 0; }
        if (to === void 0) { to = this._order.length; }
        if (core_1.isNumeric(from) && core_1.isNumeric(to)) {
            return this._order.slice(from, to).filter(function (item) { return item.$empty; }).length === 0;
        }
        return !this.find(function (item) { return item.$empty; });
    };
    DataCollection.prototype.filter = function (rule, config) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        config = core_1.extend({
            add: false,
            multiple: true,
        }, config);
        if (!config.add) {
            this._order = this._initOrder || this._order;
            this._initOrder = null;
        }
        this._filters = this._filters || {};
        if (!config.multiple || !rule) {
            this._filters = {};
        }
        if (rule) {
            if (typeof rule === "function") {
                var f = "_";
                this._filters[f] = {
                    match: f,
                    compare: rule,
                };
            }
            else {
                if (!rule.match) {
                    delete this._filters[rule.by];
                }
                else {
                    rule.compare = rule.compare || (function (val, match) { return val === match; });
                    this._filters[rule.by] = rule;
                }
            }
            this._applyFilters();
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.find = function (conf) {
        for (var key in this._pull) {
            var res = helpers_1.findByConf(this._pull[key], conf);
            if (res) {
                return res;
            }
        }
        return null;
    };
    DataCollection.prototype.findAll = function (conf) {
        var res = [];
        for (var key in this._pull) {
            var item = helpers_1.findByConf(this._pull[key], conf);
            if (item) {
                res.push(item);
            }
        }
        return res;
    };
    DataCollection.prototype.sort = function (by) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (!by) {
            this._order = [];
            for (var key in this._pull) {
                this._order.push(this._pull[key]);
            }
            this._applyFilters();
        }
        else {
            this._sort.sort(this._order, by);
            if (this._initOrder && this._initOrder.length) {
                this._sort.sort(this._initOrder, by);
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    DataCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    DataCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    DataCollection.prototype.forEach = function (cb) {
        for (var i = 0; i < this._order.length; i++) {
            cb.call(this, this._order[i], i, this._order);
        }
    };
    DataCollection.prototype.load = function (url, driver) {
        if (typeof url === "string") {
            this.dataProxy = url = new dataproxy_1.DataProxy(url);
        }
        this.dataProxy = url;
        return this._loader.load(url, driver);
    };
    DataCollection.prototype.parse = function (data, driver) {
        this._removeAll();
        return this._loader.parse(data, driver);
    };
    DataCollection.prototype.$parse = function (data) {
        var apx = this.config.approximate;
        if (apx) {
            data = this._approximate(data, apx.value, apx.maxNum);
        }
        this._parse_data(data);
        this.events.fire(types_1.DataEvents.change, ["load"]);
        this.events.fire(types_1.DataEvents.load);
    };
    DataCollection.prototype.save = function (url) {
        this._loader.save(url);
    };
    DataCollection.prototype.changeId = function (id, newId, silent) {
        if (newId === void 0) { newId = core_1.uid(); }
        if (!silent && !this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var item = this.getItem(id);
        if (!item) {
            helpers_1.dhxWarning("item not found");
        }
        else {
            item.id = newId;
            core_1.extend(this._pull[id], item);
            this._pull[newId] = this._pull[id];
            if (!silent) {
                this._onChange("update", newId, this._pull[newId]);
            }
            delete this._pull[id];
        }
    };
    // todo: loop through the array and check saved statuses
    DataCollection.prototype.isSaved = function () {
        return !this._changes.order.length; // todo: bad solution, errors and holded elments are missed...
    };
    DataCollection.prototype.map = function (cb) {
        var result = [];
        for (var i = 0; i < this._order.length; i++) {
            result.push(cb.call(this, this._order[i], i, this._order));
        }
        return result;
    };
    DataCollection.prototype.mapRange = function (from, to, cb) {
        if (from < 0) {
            from = 0;
        }
        if (to > this._order.length - 1) {
            to = this._order.length - 1;
        }
        var arr = this._order.slice(from, to);
        var result = [];
        for (var i = from; i <= to; i++) {
            result.push(cb.call(this, this._order[i], i, arr));
        }
        return result;
    };
    DataCollection.prototype.reduce = function (cb, acc) {
        for (var i = 0; i < this._order.length; i++) {
            acc = cb.call(this, acc, this._order[i], i);
        }
        return acc;
    };
    DataCollection.prototype.serialize = function (driver) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        // remove $ attrs
        var data = this.map(function (item) {
            var newItem = __assign({}, item);
            Object.keys(newItem).forEach(function (key) {
                if (key.startsWith("$")) {
                    delete newItem[key];
                }
            });
            return newItem;
        });
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    DataCollection.prototype.getInitialData = function () {
        return this._initOrder;
    };
    DataCollection.prototype._add = function (obj, index) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var id = this._addCore(obj, index);
        this._onChange("add", obj.id, obj);
        this.events.fire(types_1.DataEvents.afterAdd, [obj]);
        return id;
    };
    DataCollection.prototype._remove = function (id) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        var obj = this._pull[id];
        if (obj) {
            if (!this.events.fire(types_1.DataEvents.beforeRemove, [obj])) {
                return;
            }
            this._removeCore(obj.id);
            this._onChange("remove", id, obj);
        }
        this.events.fire(types_1.DataEvents.afterRemove, [obj]);
    };
    DataCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (!this.exists(id)) {
            return null;
        }
        var newid = core_1.uid();
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target) {
            if (!(target instanceof DataCollection) && targetId) {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return;
            }
            if (target.exists(id)) {
                target.add(__assign(__assign({}, helpers_1.copyWithoutInner(this.getItem(id))), { id: newid }), index);
                return newid;
            }
            else {
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                return id;
            }
        }
        this.add(__assign(__assign({}, helpers_1.copyWithoutInner(this.getItem(id))), { id: newid }), index);
        return newid;
    };
    DataCollection.prototype._move = function (id, index, target, targetId, key) {
        if (!this.isDataLoaded()) {
            helpers_1.dhxWarning("the method doesn't work with lazyLoad");
            return;
        }
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target && target !== this && this.exists(id)) {
            var item = core_1.copy(this.getItem(id), true);
            if (target.exists(id)) {
                item.id = core_1.uid();
            }
            if (targetId) {
                item.parent = targetId;
            }
            target.add(item, index);
            // remove data from original collection
            this.remove(id);
            return item.id;
        }
        if (this.getIndex(id) === index) {
            return null;
        }
        // move other elements
        var spliced = this._order.splice(this.getIndex(id), 1)[0];
        if (index === -1) {
            index = this._order.length;
        }
        this._order.splice(index, 0, spliced);
        this.events.fire(types_1.DataEvents.change);
        return id;
    };
    DataCollection.prototype._removeAll = function () {
        this._pull = {};
        this._order = [];
        this._changes.order = [];
        this._initOrder = null;
    };
    DataCollection.prototype._addCore = function (obj, index) {
        if (this.config.init) {
            obj = this.config.init(obj);
        }
        obj.id = obj.id ? obj.id.toString() : core_1.uid();
        if (this._pull[obj.id]) {
            helpers_1.dhxError("Item already exist");
        }
        // todo: not ideal solution
        if (this._initOrder && this._initOrder.length) {
            this._addToOrder(this._initOrder, obj, index);
        }
        this._addToOrder(this._order, obj, index);
        return obj.id;
    };
    DataCollection.prototype._removeCore = function (id) {
        if (this.getIndex(id) >= 0) {
            this._order = this._order.filter(function (el) { return el.id !== id; });
            delete this._pull[id];
        }
        if (this._initOrder && this._initOrder.length) {
            this._initOrder = this._initOrder.filter(function (el) { return el.id !== id; });
        }
    };
    DataCollection.prototype._parse_data = function (data) {
        var index = this._order.length;
        if (this.config.prep) {
            data = this.config.prep(data);
        }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            obj.id = obj.id || obj.id === 0 ? obj.id : core_1.uid();
            this._pull[obj.id] = obj;
            this._order[index++] = obj;
        }
    };
    DataCollection.prototype._approximate = function (data, values, maxNum) {
        var len = data.length;
        var vlen = values.length;
        var rlen = Math.floor(len / maxNum);
        var newData = Array(Math.ceil(len / rlen));
        var index = 0;
        for (var i = 0; i < len; i += rlen) {
            var newItem = core_1.copy(data[i]);
            var end = Math.min(len, i + rlen);
            for (var j = 0; j < vlen; j++) {
                var sum = 0;
                for (var z = i; z < end; z++) {
                    sum += data[z][values[j]];
                }
                newItem[values[j]] = sum / (end - i);
            }
            newData[index++] = newItem;
        }
        return newData;
    };
    DataCollection.prototype._onChange = function (status, id, obj) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var item = _a[_i];
            // update pending item if previous state is "saving" or if item not saved yet
            if (item.id === id && !item.saving) {
                // update item
                if (item.error) {
                    item.error = false;
                }
                item = __assign(__assign({}, item), { obj: obj, status: status });
                this.events.fire(types_1.DataEvents.change, [id, status, obj]);
                return;
            }
        }
        this._changes.order.push({ id: id, status: status, obj: __assign({}, obj), saving: false });
        this.events.fire(types_1.DataEvents.change, [id, status, obj]);
    };
    DataCollection.prototype._addToOrder = function (array, obj, index) {
        if (index >= 0 && array[index]) {
            this._pull[obj.id] = obj;
            array.splice(index, 0, obj);
        }
        else {
            this._pull[obj.id] = obj;
            array.push(obj);
        }
    };
    DataCollection.prototype._applyFilters = function () {
        var _this = this;
        if (this._filters && Object.keys(this._filters).length) {
            var fOrder = this._order.filter(function (item) {
                return Object.keys(_this._filters).every(function (key) {
                    return item[key]
                        ? _this._filters[key].compare(item[key], _this._filters[key].match, item)
                        : _this._filters[key].compare(item);
                });
            });
            if (!this._initOrder) {
                this._initOrder = this._order;
            }
            this._order = fOrder;
        }
    };
    return DataCollection;
}());
exports.DataCollection = DataCollection;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver_1 = __webpack_require__(22);
var CsvDriver_1 = __webpack_require__(23);
var XMLDriver_1 = __webpack_require__(52);
exports.dataDrivers = {
    json: JsonDriver_1.JsonDriver,
    csv: CsvDriver_1.CsvDriver,
};
exports.dataDriversPro = __assign(__assign({}, exports.dataDrivers), { xml: XMLDriver_1.XMLDriver });


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JsonDriver = /** @class */ (function () {
    function JsonDriver() {
    }
    JsonDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    JsonDriver.prototype.serialize = function (data) {
        return data;
    };
    JsonDriver.prototype.getFields = function (row) {
        return row;
    };
    JsonDriver.prototype.getRows = function (data) {
        return typeof data === "string" ? JSON.parse(data) : data;
    };
    return JsonDriver;
}());
exports.JsonDriver = JsonDriver;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvDriver = /** @class */ (function () {
    function CsvDriver(config) {
        var initConfig = {
            skipHeader: 0,
            nameByHeader: false,
            rowDelimiter: "\n",
            columnDelimiter: ",",
        };
        this.config = __assign(__assign({}, initConfig), config);
        if (this.config.nameByHeader) {
            this.config.skipHeader = 1;
        }
    }
    CsvDriver.prototype.getFields = function (row, headers) {
        var parts = row.trim().split(this.config.columnDelimiter);
        var obj = {};
        for (var i = 0; i < parts.length; i++) {
            obj[headers ? headers[i] : i + 1] = parts[i];
        }
        return obj;
    };
    CsvDriver.prototype.getRows = function (data) {
        return data.trim().split(this.config.rowDelimiter);
    };
    CsvDriver.prototype.toJsonArray = function (data) {
        var _this = this;
        var rows = this.getRows(data);
        var names = this.config.names;
        if (this.config.skipHeader) {
            var top_1 = rows.splice(0, this.config.skipHeader);
            if (this.config.nameByHeader) {
                names = top_1[0].trim().split(this.config.columnDelimiter);
            }
        }
        return rows.map(function (row) { return _this.getFields(row, names); });
    };
    CsvDriver.prototype.serialize = function (data, withoutHeader) {
        var header = data[0]
            ? Object.keys(data[0])
                .filter(function (key) { return !key.startsWith("$"); })
                .join(this.config.columnDelimiter)
            : "";
        var readyData = this._serialize(data);
        if (withoutHeader) {
            return readyData;
        }
        return header + readyData;
    };
    CsvDriver.prototype._serialize = function (data) {
        var _this = this;
        return data.reduce(function (csv, row) {
            var cells = Object.keys(row).reduce(function (total, key, i) {
                if (key.startsWith("$") || key === "items") {
                    return total;
                }
                return "" + total + row[key] + (i === row.length - 1 ? "" : _this.config.columnDelimiter);
            }, "");
            if (row.items) {
                return csv + "\n" + cells + _this._serialize(row.items);
            }
            return "" + csv + _this.config.rowDelimiter + cells;
        }, "");
    };
    return CsvDriver;
}());
exports.CsvDriver = CsvDriver;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function normalizeArray(obj, name) {
    if (!obj[name]) {
        return;
    }
    if (typeof obj[name] === "string") {
        obj[name] = [
            {
                text: "" + obj[name],
            },
        ];
    }
    else {
        obj[name] = obj[name].map(function (el) {
            if (typeof el === "string") {
                el = { text: el };
            }
            return el;
        });
    }
}
function normalizeColumns(columns) {
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var col = columns_1[_i];
        col.$cellCss = col.$cellCss || {};
        normalizeArray(col, "header");
        normalizeArray(col, "footer");
        var isContent = col.header.reduce(function (acc, item) { return (acc = acc || !!item.content); }, false);
        if (isContent) {
            col.$uniqueData = [];
        }
        col.width = col.width || 100;
        if (col.width < col.minWidth) {
            col.width = col.minWidth;
        }
        if (col.width > col.maxWidth) {
            col.width = col.maxWidth;
        }
    }
}
exports.normalizeColumns = normalizeColumns;
function countColumns(config, columns) {
    var headerRowsCount = 0;
    var footerRowsCount = 0;
    var totalWidth = 0;
    var colspans = false;
    var rowsHeadersCount = 0;
    var footer = false;
    columns.map(function (col) {
        headerRowsCount = Math.max(headerRowsCount, col.header.length);
        totalWidth += col.width;
        if (col.footer) {
            footerRowsCount = Math.max(footerRowsCount, col.footer.length);
            if (!footer) {
                footer = true;
            }
        }
        if (!colspans) {
            for (var _i = 0, _a = col.header; _i < _a.length; _i++) {
                var head = _a[_i];
                if (head.colspan) {
                    colspans = true;
                    return;
                }
            }
        }
    });
    // fill missing cells
    columns.map(function (col) {
        if (col.header.length < headerRowsCount) {
            for (var i = 0; i < headerRowsCount; i++) {
                col.header[i] = col.header[i] || { text: "" };
            }
        }
        if (footer) {
            col.footer = col.footer || [];
        }
        if (col.footer && col.footer.length < footerRowsCount) {
            for (var i = 0; i < footerRowsCount; i++) {
                col.footer[i] = col.footer[i] || { text: "" };
            }
        }
        col.header.map(function (head) {
            head.css = head.css || "";
            if (!head.text && !head.css.includes("dhx_cell-empty")) {
                head.css += " dhx_cell-empty";
            }
        });
        // find header columns indexes
        if (col.header[0].text === "") {
            rowsHeadersCount++;
        }
    });
    config.$totalWidth = totalWidth;
    config.$headerLevel = headerRowsCount;
    config.$footerLevel = footerRowsCount;
    config.$colspans = colspans;
    config.$footer = footer;
    return rowsHeadersCount;
}
exports.countColumns = countColumns;
function calculatePositions(width, height, scroll, conf) {
    var columns = conf.columns.filter(function (col) { return !col.hidden; });
    var allWidth = columns.map(function (col) { return col.width; });
    var maxWidth = Math.max.apply(Math, allWidth);
    var minWidth = Math.min.apply(Math, allWidth);
    var xReserve = Math.round(maxWidth / minWidth);
    var yReserve = 1;
    var avrColWidth = conf.$totalWidth / columns.length;
    var colPerPage = Math.round(width / avrColWidth);
    var x = 0;
    var scrollLeft = scroll.left;
    for (var i = 0; i < columns.length; i++) {
        var col = columns[i];
        scrollLeft = scrollLeft - col.width;
        if (scrollLeft + avrColWidth / 2 > 0) {
            x++;
        }
        else {
            break;
        }
    }
    var xStart = x - xReserve >= 0 ? x - xReserve : 0;
    var xEnd = x + colPerPage + xReserve;
    var rowPerPage = Math.round(height / conf.rowHeight);
    var y = Math.round(scroll.top / conf.rowHeight) || 0;
    var yStart = y - yReserve >= 0 ? y - yReserve : 0;
    var yEnd = y + rowPerPage + yReserve;
    return {
        xStart: xStart,
        xEnd: xEnd,
        yStart: yStart,
        yEnd: yEnd,
    };
}
exports.calculatePositions = calculatePositions;
function getUnique(arr, name) {
    return arr
        .map(function (item) { return item[name]; })
        .filter(function (item, i, array) { return array.indexOf(item) === i; })
        .sort();
}
exports.getUnique = getUnique;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(26);
var main_1 = __webpack_require__(10);
var types_1 = __webpack_require__(3);
var editors_1 = __webpack_require__(65);
var html_1 = __webpack_require__(2);
function handleMouse(rowStart, colStart, conf, type, e) {
    colStart = html_1.locateNodeByClassName(e.target, "dhx_grid-fixed-cols-wrap") ? 0 : colStart;
    var target = html_1.locateNodeByClassName(e.target, "dhx_grid-cell");
    if (!target) {
        return;
    }
    var rowNode = target.parentNode;
    var bodyNode = rowNode.parentNode;
    var colIndex = Array.prototype.indexOf.call(rowNode.childNodes, target);
    var columns = conf.columns.filter(function (col) { return !col.hidden; });
    var col = columns[colStart + colIndex];
    var rowIndex = Array.prototype.indexOf.call(bodyNode.childNodes, rowNode);
    var row = conf.data[rowStart + rowIndex];
    conf.events.fire(type, [row, col, e]);
}
function getHandlers(row, column, conf) {
    return {
        onclick: [handleMouse, row, column, conf, types_1.GridEvents.cellClick],
        onmouseover: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseOver],
        onmousedown: [handleMouse, row, column, conf, types_1.GridEvents.cellMouseDown],
        ondblclick: [handleMouse, row, column, conf, types_1.GridEvents.cellDblClick],
        oncontextmenu: [handleMouse, row, column, conf, types_1.GridEvents.cellRightClick],
    };
}
exports.getHandlers = getHandlers;
function getTreeCell(content, row, col, conf) {
    var isEditable = conf.$editable && conf.$editable.row === row.id && conf.$editable.col === col.id;
    var css = "";
    var cellAlign = col.align ? " dhx_align-" + col.align : "dhx_align-left";
    if (conf.dragMode && conf.dragItem === "row") {
        css +=
            (row.$drophere && !isEditable ? " dhx_grid-cell--drophere" : "") +
                (row.$dragtarget && !isEditable ? " dhx_grid-cell--dragtarget" : "") +
                (!isEditable ? " dhx_grid-cell--drag" : "");
    }
    var hiddenTitle = conf.tooltip ? (typeof col.tooltip === "boolean" ? col.tooltip : true) : col.tooltip;
    var parentPadding = 20 + row.$level * 20 - (row.$items ? 20 : 0);
    return dom_1.el(".dhx_grid-cell", {
        class: "dhx_tree-cell " + (col.$cellCss[row.id] || "") + " " + (row.$items ? "dhx_grid-expand-cell" : "") +
            (" " + (isEditable ? "dhx_tree-editing-cell" : "") + " " + css),
        style: {
            width: col.width,
            lineHeight: conf.rowHeight - 1 + "px",
            padding: !row.$items ? "0 0 0 " + parentPadding + "px" : 0,
        },
    }, [
        row.$items
            ? dom_1.el(".dhx_grid-expand-cell-icon", {
                class: row.$opened ? "dxi dxi-chevron-up" : "dxi dxi-chevron-down",
                dhx_id: row.id,
                style: {
                    padding: row.$level ? "0 0 0 " + (4 + parentPadding) + "px" : "0 0 0 4px",
                },
            })
            : null,
        dom_1.el(".dhx_tree-cell", {
            class: cellAlign,
            title: hiddenTitle ? main_1.removeHTMLTags(row[col.id]) : null,
            style: {
                width: "100%",
                height: "100%",
            },
        }, [content]),
    ]);
}
exports.getTreeCell = getTreeCell;
function getEditorCell(row, col, conf) {
    return editors_1.getEditor(row, col, conf);
}
function getCells(conf) {
    if (!conf.data || !conf.columns) {
        return [];
    }
    var pos = conf.$positions;
    var data = conf.data ? conf.data.slice(pos.yStart, pos.yEnd) : [];
    var columns = conf.columns.filter(function (col) { return !col.hidden; }).slice(pos.xStart, pos.xEnd);
    return data.map(function (row, index) {
        var isLastRow = data.length - 1 === index;
        var rowCss = "";
        if (conf.rowCss) {
            rowCss = conf.rowCss(row);
        }
        if (row.$css) {
            rowCss += row.$css;
        }
        return dom_1.el(".dhx_grid-row", {
            style: { height: isLastRow ? conf.rowHeight + 1 : conf.rowHeight },
            dhx_id: row.id,
            class: rowCss,
            _key: row.id,
            _flags: dom_1.KEYED_LIST,
        }, row.$customRender
            ? [row.$customRender(row, conf)]
            : columns.map(function (col) {
                if (!col.hidden) {
                    var hiddenTitle = conf.tooltip
                        ? typeof col.tooltip === "boolean"
                            ? col.tooltip
                            : true
                        : col.tooltip;
                    var defaultTemplate = function (text) {
                        if (typeof text === "boolean" || col.type === "boolean") {
                            if (typeof text !== "string") {
                                return "" + Boolean(text);
                            }
                        }
                        return text || text === 0 ? text : "";
                    };
                    var content = col.template
                        ? col.template(row[col.id], row, col)
                        : defaultTemplate(row[col.id]);
                    // content can be a domvm node or a string
                    if (typeof content === "string") {
                        content = dom_1.el("div.dhx_cell-content", (conf.htmlEnable && col.htmlEnable !== false) || col.htmlEnable
                            ? { ".innerHTML": content }
                            : content);
                    }
                    var css = (((col.$cellCss && col.$cellCss[row.id]) || "") + " dhx_" + col.type + "-cell").replace(/\s+/g, " ");
                    var colWidth = col.width;
                    var isEditable = conf.$editable &&
                        conf.$editable.row === row.id &&
                        conf.$editable.col === col.id;
                    if (isEditable || (col.type === "boolean" && (conf.editable || col.editable))) {
                        if (!(conf.splitAt &&
                            conf.columns.length !== conf.splitAt &&
                            conf.columns.indexOf(col) < conf.splitAt)) {
                            content = getEditorCell(row, col, conf).toHTML();
                            css += " dhx_grid-cell__editable";
                            if (conf.splitAt === conf.columns.indexOf(col) + 1) {
                                colWidth -= 1;
                            }
                        }
                    }
                    if (conf.type === "tree" && conf.firstColId === col.id) {
                        return getTreeCell(content, row, col, conf);
                    }
                    var colName = void 0;
                    if (col.type === "boolean") {
                        colName = core_1.findIndex(col.header, function (item) { return item.text !== undefined; });
                    }
                    if (conf.dragMode && conf.dragItem === "row") {
                        css +=
                            (row.$drophere && !isEditable ? " dhx_grid-cell--drophere" : "") +
                                (row.$dragtarget && !isEditable ? " dhx_grid-cell--dragtarget" : "") +
                                (!isEditable ? " dhx_grid-cell--drag" : "");
                    }
                    if (col.align) {
                        css += " dhx_align-" + col.align;
                    }
                    return dom_1.el(".dhx_grid-cell", {
                        class: css,
                        style: {
                            width: colWidth,
                            lineHeight: conf.rowHeight - 1 + "px",
                        },
                        _key: col.id,
                        title: hiddenTitle
                            ? col.type === "boolean"
                                ? colName.text
                                : main_1.removeHTMLTags(typeof content === "string" ? content : row[col.id])
                            : null,
                    }, [content]);
                }
            }));
    });
}
exports.getCells = getCells;
function getSpans(config, frozen) {
    var spanCells = [];
    var columns = config.columns.filter(function (col) { return !col.hidden; });
    if (!columns.length) {
        return null;
    }
    if (!config.spans) {
        return null;
    }
    var spans = config.spans.sort(function (a, b) {
        return typeof a.row === "string" && typeof b.row === "string"
            ? a.row.localeCompare(b.row)
            : a.row - b.row;
    });
    var cellHeight = config.rowHeight;
    var _loop_1 = function (i) {
        var row = spans[i].row;
        var col = spans[i].column;
        var spanHeight = spans[i].rowspan;
        var spanWidth = spans[i].colspan;
        var spanCss = spans[i].css;
        var hiddenTitle = config.tooltip
            ? typeof spans[i].tooltip === "boolean"
                ? spans[i].tooltip
                : true
            : spans[i].tooltip;
        // [todo]
        if (spanHeight === 1) {
            return "continue";
        }
        var colIndex = core_1.findIndex(columns, function (item) { return "" + item.id === "" + col; });
        var rowIndex = core_1.findIndex(config.data, function (item) { return "" + item.id === "" + row; });
        if (colIndex < 0 || rowIndex < 0) {
            return "continue";
        }
        if (frozen === true &&
            ((spanWidth || 1) + colIndex > config.splitAt || colIndex + 1 > config.splitAt)) {
            return "continue";
        }
        var currCol = columns[colIndex];
        var currRow = config.data[rowIndex];
        if (currCol.hidden) {
            return "continue";
        }
        var content = spans[i].text ? spans[i].text : currRow[col] === undefined ? "" : currRow[col];
        var tooltipText = content;
        var t = function (text, _row, _col) { return (text || text === 0 ? text : ""); };
        var template = currCol.template || t;
        content = template(content, currRow, currCol);
        content =
            typeof content === "string"
                ? dom_1.el("div.dhx_span-cell-content", { ".innerHTML": content })
                : content;
        var top_1 = config.rowHeight * rowIndex - 1;
        var left = 0;
        for (var s = colIndex - 1; s >= 0; s--) {
            left += columns[s].width;
        }
        var css = currCol.header[0].text ? "dhx_span-cell" : "dhx_span-cell dhx_span-cell--title";
        if (spanCss) {
            css += " " + spanCss;
        }
        if (rowIndex === 0) {
            css += " dhx_span-first-row";
        }
        // [dirty]
        if (colIndex === 0) {
            css += " dhx_span-first-col";
        }
        var rowspanWithLastCol = colIndex === columns.length - 1;
        var colspanWithLastCol = colIndex + spanWidth === columns.length;
        if (rowspanWithLastCol || colspanWithLastCol) {
            css += " dhx_span-last-col";
        }
        if (!spanWidth) {
            css += " dhx_span-" + (currCol.type || "string") + "-cell";
        }
        else {
            css += " dhx_span-string-cell";
        }
        var width = spanWidth > 1 ? cells_1.getWidth(config.columns, spanWidth, colIndex) : currCol.width;
        spanCells.push(dom_1.el("div", {
            class: css,
            style: {
                width: width,
                height: (spanHeight || 1) * cellHeight,
                top: top_1,
                left: left,
                lineHeight: config.rowHeight + "px",
            },
            title: hiddenTitle ? main_1.removeHTMLTags(tooltipText) : null,
        }, [content]));
    };
    for (var i = 0; i < spans.length; i++) {
        _loop_1(i);
    }
    return spanCells;
}
exports.getSpans = getSpans;
function getShifts(conf) {
    var columnsLeft = conf.columns.filter(function (col) { return !col.hidden; }).slice(0, conf.$positions.xStart);
    return {
        x: columnsLeft.reduce(function (sum, col) { return (sum += col.width); }, 0),
        y: conf.$positions.yStart * conf.rowHeight,
    };
}
exports.getShifts = getShifts;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// [todo]
function getWidth(columns, colspan, index) {
    var cols = columns.filter(function (col) { return !col.hidden; });
    if (!colspan) {
        return cols[index].width;
    }
    return cols.reduce(function (w, c, i) {
        w += i >= index && i < index + colspan ? c.width : 0;
        return w;
    }, 0);
}
exports.getWidth = getWidth;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(69));
__export(__webpack_require__(33));
__export(__webpack_require__(18));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(72));
__export(__webpack_require__(12));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PopupEvents;
(function (PopupEvents) {
    PopupEvents["beforeHide"] = "beforeHide";
    PopupEvents["beforeShow"] = "beforeShow";
    PopupEvents["afterHide"] = "afterHide";
    PopupEvents["afterShow"] = "afterShow";
    PopupEvents["click"] = "click";
})(PopupEvents = exports.PopupEvents || (exports.PopupEvents = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SliderEvents;
(function (SliderEvents) {
    SliderEvents["change"] = "change";
    SliderEvents["mousedown"] = "mousedown";
    SliderEvents["mouseup"] = "mouseup";
})(SliderEvents = exports.SliderEvents || (exports.SliderEvents = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimepickerEvents;
(function (TimepickerEvents) {
    TimepickerEvents["change"] = "change";
    TimepickerEvents["apply"] = "apply";
    TimepickerEvents["beforeClose"] = "beforeClose";
    TimepickerEvents["afterClose"] = "afterClose";
    // TODO: remove sute_7.0
    TimepickerEvents["close"] = "close";
    TimepickerEvents["save"] = "save";
})(TimepickerEvents = exports.TimepickerEvents || (exports.TimepickerEvents = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"],
    cancel: "Cancel",
};
exports.default = locale;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CalendarEvents;
(function (CalendarEvents) {
    CalendarEvents["change"] = "change";
    CalendarEvents["beforeChange"] = "beforechange";
    CalendarEvents["modeChange"] = "modeChange";
    CalendarEvents["monthSelected"] = "monthSelected";
    CalendarEvents["yearSelected"] = "yearSelected";
    CalendarEvents["cancelClick"] = "cancelClick";
    CalendarEvents["dateMouseOver"] = "dateMouseOver";
    // TODO: remove sute_7.0
    CalendarEvents["dateHover"] = "dateHover";
})(CalendarEvents = exports.CalendarEvents || (exports.CalendarEvents = {}));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(84));
__export(__webpack_require__(37));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(15);
var ts_data_1 = __webpack_require__(5);
var Selection = /** @class */ (function () {
    function Selection(config, data) {
        var _this = this;
        this.config = config;
        this.events = data.events;
        this._data = data;
        this._selected = [];
        this._lastShiftSelectedIndexes = [];
        this._data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this._selected = [];
        });
        if (typeof this.config.multiselection === "string") {
            var types = ["click", "ctrlClick"];
            if (!types.includes(this.config.multiselection)) {
                this.config.multiselection = false;
            }
        }
        this._data.events.on(ts_data_1.DataEvents.afterRemove, function (obj) {
            _this._selected = _this._selected.filter(function (selectedId) { return selectedId !== obj.id; });
            if (_this.config.multiselection && _this.getId().length !== 0) {
                _this._lastSelectedIndex = _this._data.getIndex(_this._selected[_this._selected.length - 1]);
                return;
            }
            var id = _this._data.getId(_this._lastSelectedIndex);
            if (id && id === _this._selected[0]) {
                _this.add(id);
            }
            else if (!id && _this._data.getLength() - _this._lastSelectedIndex === 0) {
                var lastItemId = _this._data.getId(_this._data.getLength() - 1);
                if (lastItemId) {
                    _this.add(lastItemId);
                }
            }
            else if (id && !_this._selected.length) {
                _this.add(id);
            }
            return;
        });
    }
    Selection.prototype.getId = function () {
        if (this.config.multiselection) {
            return this._selected;
        }
        return this._selected[0];
    };
    Selection.prototype.getItem = function () {
        var _this = this;
        if (this._selected.length) {
            var items = this._selected.map(function (id) { return _this._data.getItem(id); });
            return this.config.multiselection ? items : items[0];
        }
        return null;
    };
    Selection.prototype.contains = function (id) {
        if (id) {
            return this._selected.includes(id);
        }
        return this._selected.length > 0;
    };
    Selection.prototype.remove = function (id) {
        var _this = this;
        if (!id) {
            this._data.map(function (item) {
                item.$selected = false;
                _this._selected = [];
            });
            return;
        }
        if (!id && !this._selected.length) {
            return true;
        }
        if (id) {
            return this._unselectItem(id);
        }
        this._selected.forEach(function (selectedId) { return _this._unselectItem(selectedId); });
        return true;
    };
    Selection.prototype.add = function (id, isCtrl, isShift) {
        var _this = this;
        if (!this.events.fire(types_1.SelectionEvents.beforeSelect)) {
            return;
        }
        if (!id) {
            this._selected = [];
            this._data.map(function (item) {
                item.$selected = true;
                _this._selected.push(item.id);
            });
            return;
        }
        if (this.config.multiselection) {
            this._addMulti(id, isCtrl, isShift);
        }
        else {
            this._addSingle(id, isCtrl);
        }
    };
    Selection.prototype._addMulti = function (id, isCtrl, isShift) {
        var _this = this;
        var currentSelectedItemIndex = this._data.getIndex(id);
        if (this.config.multiselection === "click" || this.config.multiselection === true) {
            if (isShift) {
                this._addWithShift(currentSelectedItemIndex);
                this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
            }
            else {
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
        }
        if (this.config.multiselection === "ctrlClick") {
            if (!isShift && !isCtrl) {
                this._data.map(function (item) {
                    item.$selected = false;
                    _this._selected = [];
                });
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
            if (isShift) {
                this._addWithShift(currentSelectedItemIndex);
                this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
            }
            if (isCtrl) {
                this._isSelected(id) ? this._unselectItem(id) : this._selectItem(id);
                this._lastSelectedIndex = this._data.getIndex(this._selected[this._selected.length - 1]);
                this._lastShiftSelectedIndexes = [];
            }
        }
    };
    Selection.prototype._addWithShift = function (currentSelectedItemIndex) {
        var _this = this;
        if (currentSelectedItemIndex >= this._lastSelectedIndex) {
            // remove last selection with shift
            this._data.map(function (item, index) {
                if (_this._lastShiftSelectedIndexes.includes(index)) {
                    item.$selected = false;
                    _this._selected = _this._selected.filter(function (i) { return i !== _this._data.getId(index); });
                    _this._lastShiftSelectedIndexes = _this._lastShiftSelectedIndexes.filter(function (i) {
                        return i !== index && i !== _this._lastSelectedIndex;
                    });
                }
            });
            // add new selection with shift
            this._data.map(function (item, index) {
                if (index >= _this._lastSelectedIndex && index <= currentSelectedItemIndex) {
                    item.$selected = true;
                    if (!_this._selected.includes(item.id)) {
                        _this._selected.push(item.id);
                    }
                    if (index !== _this._lastSelectedIndex) {
                        if (!_this._lastShiftSelectedIndexes.includes(index)) {
                            _this._lastShiftSelectedIndexes.push(index);
                        }
                    }
                }
            });
        }
        if (currentSelectedItemIndex <= this._lastSelectedIndex) {
            // remove last selection with shift
            this._data.map(function (item, index) {
                if (_this._lastShiftSelectedIndexes.includes(index)) {
                    item.$selected = false;
                    _this._selected = _this._selected.filter(function (i) { return i !== _this._data.getId(index); });
                    _this._lastShiftSelectedIndexes = _this._lastShiftSelectedIndexes.filter(function (i) {
                        return i !== index && i !== _this._lastSelectedIndex;
                    });
                }
            });
            // add new selection with shift
            this._data.map(function (item, index) {
                if (index <= _this._lastSelectedIndex && index >= currentSelectedItemIndex) {
                    item.$selected = true;
                    if (!_this._selected.includes(item.id)) {
                        _this._selected.push(item.id);
                    }
                    if (index !== _this._lastSelectedIndex) {
                        if (!_this._lastShiftSelectedIndexes.includes(index)) {
                            _this._lastShiftSelectedIndexes.push(index);
                        }
                    }
                }
            });
        }
    };
    Selection.prototype._addSingle = function (id, isCtrl) {
        // clean selection
        this.remove();
        // select item
        if (this.config && this.config.multiselection !== "ctrlClick") {
            this._selectItem(id);
        }
        else {
            if (isCtrl) {
                this._selectItem(id);
            }
        }
    };
    Selection.prototype._isSelected = function (id) {
        return this._selected.includes(id);
    };
    Selection.prototype._selectItem = function (id) {
        this._selected.push(id);
        this._data.update(id, { $selected: true });
        this._lastSelectedIndex = this._data.getIndex(id);
        this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
    };
    Selection.prototype._unselectItem = function (id) {
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._selected = this._selected.filter(function (selectedId) { return selectedId !== id; });
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            this._data.update(id, { $selected: false });
            return true;
        }
        return false;
    };
    return Selection;
}());
exports.Selection = Selection;
var SelectionStub = /** @class */ (function () {
    function SelectionStub() {
        this.events = {
            events: {},
            context: null,
            clear: function () {
                return;
            },
            detach: function () {
                return;
            },
            fire: function () {
                return false;
            },
            on: function () {
                return;
            },
        };
    }
    SelectionStub.prototype.getId = function () {
        return undefined;
    };
    SelectionStub.prototype.getItem = function () {
        return null;
    };
    SelectionStub.prototype.contains = function (id) {
        return false;
    };
    SelectionStub.prototype.remove = function (id) {
        return true;
    };
    // tslint:disable-next-line: no-empty
    SelectionStub.prototype.add = function (id, isShift, isCtrl) {
        return;
    };
    return SelectionStub;
}());
exports.SelectionStub = SelectionStub;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    notFound: "Not Found",
    selectAll: "Select All",
    unselectAll: "Unselect All",
    selectedItems: "selected items",
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComboboxEvents;
(function (ComboboxEvents) {
    ComboboxEvents["change"] = "change";
    ComboboxEvents["open"] = "open";
    ComboboxEvents["input"] = "input";
    ComboboxEvents["beforeClose"] = "beforeClose";
    ComboboxEvents["afterClose"] = "afterClose";
    // TODO: remove sute_7.0
    ComboboxEvents["close"] = "close";
})(ComboboxEvents = exports.ComboboxEvents || (exports.ComboboxEvents = {}));
var ComboState;
(function (ComboState) {
    ComboState[ComboState["default"] = 0] = "default";
    ComboState[ComboState["error"] = 1] = "error";
    ComboState[ComboState["success"] = 2] = "success";
})(ComboState = exports.ComboState || (exports.ComboState = {}));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var cells_1 = __webpack_require__(26);
var main_1 = __webpack_require__(10);
var types_1 = __webpack_require__(3);
function handleMouse(col, config, type, e) {
    config.events.fire(type, [col, e]);
}
function getHandlers(column, rowName, config) {
    return {
        onclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellClick"]],
        onmouseover: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseOver"]],
        onmousedown: [handleMouse, column, config, types_1.GridEvents[rowName + "CellMouseDown"]],
        ondblclick: [handleMouse, column, config, types_1.GridEvents[rowName + "CellDblClick"]],
        oncontextmenu: [handleMouse, column, config, types_1.GridEvents[rowName + "CellRightClick"]],
    };
}
function buildRows(columns, name) {
    var header = columns.map(function (col) { return col[name] || [{}]; });
    return main_1.transpose(header);
}
function getCustomContentCell(cell, column, config, rowName, css) {
    if (css === void 0) { css = ""; }
    var rowHeight = config[rowName + "RowHeight"] - 10 + 1 || 31;
    var type = column.type ? "dhx_" + column.type + "-cell" : "dhx_string_cell";
    // TODO: over with index of filter inside of header or footer
    return dom_1.el(".dhx_grid-" + rowName + "-cell.dhx_grid-custom-content-cell." + type, __assign({ class: css, style: {
            width: column.width,
            lineHeight: rowHeight + "px",
        } }, getHandlers(column, rowName, config)), [config.content[cell.content] && config.content[cell.content].toHtml(column, config)]);
}
function getRows(config, rowsConfig) {
    if (!config.data || !config.columns) {
        return [];
    }
    var rowName = rowsConfig.name;
    var columns = config.currentColumns.filter(function (col) { return !col.hidden; });
    var rowHeight = config[rowName + "RowHeight"] || 40;
    var rows = buildRows(columns, rowName);
    return rows.map(function (row, j) {
        return dom_1.el(".dhx_" + rowName + "-row", { style: { height: rowHeight } }, row.map(function (cell, i) {
            var hiddenTitle = config.tooltip
                ? typeof columns[i].tooltip === "boolean"
                    ? columns[i].tooltip
                    : true
                : columns[i].tooltip;
            var css = cell.css || "";
            var column = columns[i];
            var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
            if (config.sortBy && "" + column.id === config.sortBy && !cell.content) {
                sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
                css += " dhx_grid-" + rowName + "-cell--sorted ";
            }
            var sortIconVisible = main_1.isSortable(config, column) && cell.text && rowName !== "footer";
            if (sortIconVisible) {
                css += " dhx_grid-header-cell--sortable";
            }
            var isFirstCol = i === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = i === columns.length - 1 ? "dhx_last-column-cell" : "";
            if (!cell.content) {
                css += " dhx_grid-header-cell--" + (column.type === "number" ? "align_right" : "align_left") + " ";
            }
            css += isFirstCol + " " + isLastCol;
            var resizable = column.resizable !== undefined ? column.resizable : config.resizable;
            if (resizable) {
                resizable = dom_1.el("div", { class: "dhx_resizer_grip_wrap" }, [
                    dom_1.el("div", {
                        class: "dhx_resizer_grip",
                        dhx_resized: column.id,
                        style: {
                            height: rows.length * 100 + "%",
                        },
                    }, [dom_1.el("div", { class: "dhx_resizer_grip_line" })]),
                ]);
                if (rowName === "footer" || j > 0) {
                    resizable = null;
                }
            }
            if (cell.align) {
                css += " dhx_align-" + cell.align;
            }
            if (cell.content) {
                return getCustomContentCell(cell, column, config, rowName, css);
            }
            return dom_1.el(".dhx_grid-" + rowName + "-cell", __assign(__assign({ class: css.trim(), dhx_id: column.id, _key: i, style: {
                    width: column.width,
                    lineHeight: rowHeight + 1 + "px",
                } }, getHandlers(column, rowName, config)), { title: hiddenTitle ? main_1.removeHTMLTags(cell.text) : null }), [
                dom_1.el("div", {
                    class: "dhx_grid-header-cell-text",
                }, [
                    dom_1.el("div", {
                        ".innerHTML": cell.text,
                    }),
                    resizable || null,
                ]),
                sortIconVisible && dom_1.el("div", { class: sortIconCss }),
            ]);
        }));
    });
}
exports.getRows = getRows;
function getSpans(config, rowsConfig) {
    var cols = config.columns.filter(function (col) { return !col.hidden; });
    var rows = main_1.transpose(cols.map(function (col) { return col[rowsConfig.name] || []; }));
    var height = config[rowsConfig.name + "RowHeight"] || 40;
    var leftShift = 0;
    return rows.map(function (row, i) {
        leftShift = 0;
        return dom_1.el(".dhx_span-row", { style: { top: height * i + "px", height: height } }, row
            .map(function (cell, cellIdx) {
            var col = cols[cellIdx];
            var hiddenTitle;
            config.spans &&
                config.spans.forEach(function (span) {
                    if (span.column === col.id) {
                        hiddenTitle = config.tooltip
                            ? typeof span.tooltip === "boolean"
                                ? span.tooltip
                                : true
                            : span.tooltip;
                    }
                });
            leftShift += col.hidden ? 0 : col.width;
            var isFirstCol = cellIdx === 0 ? "dhx_first-column-cell" : "";
            var isLastCol = cellIdx === cols.length - 1 || (cell.colspan || 0) + (cellIdx - 1) >= cols.length - 1
                ? "dhx_last-column-cell"
                : "";
            var spanHeight = height;
            if (cell.rowspan) {
                spanHeight = spanHeight * cell.rowspan - 1;
            }
            var sortIconVisible = main_1.isSortable(config, col) && cell.rowspan && cell.text && rowsConfig.name !== "footer";
            var sortIconCss = "dxi dxi-sort-variant dhx_grid-sort-icon";
            if (config.sortBy && "" + col.id === config.sortBy && !cell.content) {
                sortIconCss += " dhx_grid-sort-icon--" + (config.sortDir || "asc");
            }
            var css = isFirstCol + " " + isLastCol + " " + (cell.rowspan ? "dhx_span-cell__rowspan" : "");
            if (sortIconVisible) {
                css += " dhx_grid-header-cell  dhx_grid-header-cell--sortable";
            }
            if (!cell.content) {
                css += " dhx_grid-header-cell--" + (col.type === "number" ? "align_right" : "align_left") + " ";
            }
            var borderLeft = "";
            if (leftShift - col.width > 0) {
                borderLeft = "1px solid #e4e4e4";
            }
            return cell.colspan || cell.rowspan
                ? dom_1.el(".dhx_span-cell", {
                    style: {
                        width: cells_1.getWidth(cols, cell.colspan, cellIdx),
                        height: spanHeight,
                        left: leftShift - col.width,
                        borderLeft: borderLeft,
                        top: height * i,
                        lineHeight: spanHeight + "px",
                    },
                    class: css.trim(),
                    title: hiddenTitle ? main_1.removeHTMLTags(cell.text) : null,
                    dhx_id: col.id,
                }, [
                    dom_1.el("div", { ".innerHTML": cell.text }),
                    sortIconVisible && dom_1.el("div", { class: sortIconCss }),
                ])
                : null;
        })
            .filter(function (cell) { return cell; }));
    });
}
exports.getSpans = getSpans;
function getFixedRows(config, rowsConfig) {
    var _a;
    var rows = getRows(config, rowsConfig);
    var spans = getSpans(config, rowsConfig);
    var fixedCols = null;
    if (rowsConfig.name === "footer" && !rowsConfig.sticky) {
        fixedCols =
            config.splitAt >= 0 &&
                getRows(__assign(__assign({}, config), { currentColumns: config.columns.filter(function (col) { return !col.hidden; }).slice(0, config.splitAt), $positions: __assign(__assign({}, config.$positions), { xStart: 0, xEnd: config.splitAt }) }), rowsConfig);
    }
    var styles = (_a = {
            position: "sticky"
        },
        _a[rowsConfig.position] = 0,
        _a);
    var left;
    if (!rowsConfig.sticky) {
        styles.left = -config.scroll.left;
        left = -config.scroll.left;
        styles.position = "relative";
    }
    var BORDERS = 2;
    return dom_1.el(".dhx_" + rowsConfig.name + "-wrapper", {
        class: rowsConfig.sticky ? "" : "dhx_compatible-" + rowsConfig.name,
        style: __assign(__assign({}, styles), { left: rowsConfig.sticky ? left : 0, height: config[rowsConfig.name + "Height"], width: rowsConfig.sticky ? config.$totalWidth : rowsConfig.wrapper.width - BORDERS }),
    }, [
        dom_1.el(".dhx_grid-" + rowsConfig.name, {
            style: {
                height: config[rowsConfig.name + "Height"],
                left: left,
                paddingLeft: rowsConfig.shifts.x,
                width: config.$totalWidth,
            },
        }, [
            dom_1.el(".dhx_" + rowsConfig.name + "-rows", __spreadArrays(rows)),
            dom_1.el(".dhx_" + rowsConfig.name + "-spans", {
                style: {
                    marginLeft: -rowsConfig.shifts.x,
                },
            }, spans),
            fixedCols &&
                dom_1.el(".dhx_" + rowsConfig.name + "-fixed-cols", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: config.scroll.left + "px",
                        height: "100%",
                    },
                }, fixedCols),
        ]),
        dom_1.el("div", { style: { width: config.$totalWidth } }),
    ]);
}
exports.getFixedRows = getFixedRows;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(41);
__webpack_require__(42);
__webpack_require__(43);
module.exports = __webpack_require__(44);


/***/ }),
/* 40 */
/***/ (function(module, exports) {

Object.values = Object.values
    ? Object.values
    : function (obj) {
        var allowedTypes = [
            "[object String]",
            "[object Object]",
            "[object Array]",
            "[object Function]",
        ];
        var objType = Object.prototype.toString.call(obj);
        if (obj === null || typeof obj === "undefined") {
            throw new TypeError("Cannot convert undefined or null to object");
        }
        else if (!~allowedTypes.indexOf(objType)) {
            return [];
        }
        else {
            // if ES6 is supported
            if (Object.keys) {
                return Object.keys(obj).map(function (key) {
                    return obj[key];
                });
            }
            var result = [];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    result.push(obj[prop]);
                }
            }
            return result;
        }
    };


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
// eslint-disable-next-line @typescript-eslint/unbound-method
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
        value: function (searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            // 1. Let O be ? ToObject(this value).
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If len is 0, return false.
            if (len === 0) {
                return false;
            }
            // 4. Let n be ? ToInteger(fromIndex).
            //    (If fromIndex is undefined, this step produces the value 0.)
            var n = fromIndex | 0;
            // 5. If n ≥ 0, then
            //  a. Let k be n.
            // 6. Else n < 0,
            //  a. Let k be len + n.
            //  b. If k < 0, let k be 0.
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            function sameValueZero(x, y) {
                return x === y || (typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y));
            }
            // 7. Repeat, while k < len
            while (k < len) {
                // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                // b. If SameValueZero(searchElement, elementK) is true, return true.
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                // c. Increase k by 1.
                k++;
            }
            // 8. Return false
            return false;
        },
        configurable: true,
        writable: true,
    });
}
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, "find", {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== "function") {
                throw new TypeError("predicate must be a function");
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true,
    });
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/* eslint-disable @typescript-eslint/unbound-method */
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        }
        else {
            return this.indexOf(search, start) !== -1;
        }
    };
}
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        },
    });
}


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches =
        proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector;
}
// Source: https://github.com/naminho/svg-classlist-polyfill/blob/master/polyfill.js
if (!("classList" in SVGElement.prototype)) {
    Object.defineProperty(SVGElement.prototype, "classList", {
        get: function get() {
            var _this = this;
            return {
                contains: function contains(className) {
                    return _this.className.baseVal.split(" ").indexOf(className) !== -1;
                },
                add: function add(className) {
                    return _this.setAttribute("class", _this.getAttribute("class") + " " + className);
                },
                remove: function remove(className) {
                    var removedClass = _this
                        .getAttribute("class")
                        .replace(new RegExp("(\\s|^)".concat(className, "(\\s|$)"), "g"), "$2");
                    if (_this.classList.contains(className)) {
                        _this.setAttribute("class", removedClass);
                    }
                },
                toggle: function toggle(className) {
                    if (this.contains(className)) {
                        this.remove(className);
                    }
                    else {
                        this.add(className);
                    }
                },
            };
        },
        configurable: true,
    });
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(45);
// HELPERS
var CssManager_1 = __webpack_require__(46);
exports.cssManager = CssManager_1.cssManager;
var dom_1 = __webpack_require__(0);
exports.awaitRedraw = dom_1.awaitRedraw;
var ts_data_1 = __webpack_require__(5);
exports.DataCollection = ts_data_1.DataCollection;
exports.DataProxy = ts_data_1.DataProxy;
// WIDGETS
var Grid_1 = __webpack_require__(60);
exports.Grid = Grid_1.Grid;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var CssManager = /** @class */ (function () {
    function CssManager() {
        this._classes = {};
        var styles = document.createElement("style");
        styles.id = "dhx_generated_styles";
        this._styleCont = document.head.appendChild(styles);
    }
    CssManager.prototype.update = function () {
        // move style element to the bottom of head
        document.head.appendChild(this._styleCont);
        this._styleCont.innerHTML = this._generateCss();
    };
    CssManager.prototype.remove = function (className) {
        delete this._classes[className];
        this.update();
    };
    CssManager.prototype.add = function (cssList, customId, silent) {
        if (silent === void 0) { silent = false; }
        var cssString = this._toCssString(cssList);
        var id = this._findSameClassId(cssString);
        if (id && customId && customId !== id) {
            this._classes[customId] = this._classes[id];
            return customId;
        }
        if (id) {
            return id;
        }
        return this._addNewClass(cssString, customId, silent);
    };
    CssManager.prototype.get = function (className) {
        if (this._classes[className]) {
            var props = {};
            var css = this._classes[className].split(";");
            for (var _i = 0, css_1 = css; _i < css_1.length; _i++) {
                var item = css_1[_i];
                if (item) {
                    var prop = item.split(":");
                    props[prop[0]] = prop[1];
                }
            }
            return props;
        }
        return null;
    };
    CssManager.prototype._findSameClassId = function (cssString) {
        for (var key in this._classes) {
            if (cssString === this._classes[key]) {
                return key;
            }
        }
        return null;
    };
    CssManager.prototype._addNewClass = function (cssString, customId, silent) {
        var id = customId || "dhx_generated_class_" + core_1.uid();
        this._classes[id] = cssString;
        if (!silent) {
            this.update();
        }
        return id;
    };
    CssManager.prototype._toCssString = function (cssList) {
        var cssString = "";
        for (var key in cssList) {
            var prop = cssList[key];
            var name_1 = key.replace(/[A-Z]{1}/g, function (letter) { return "-" + letter.toLowerCase(); });
            cssString += name_1 + ":" + prop + ";";
        }
        return cssString;
    };
    CssManager.prototype._generateCss = function () {
        var result = "";
        for (var key in this._classes) {
            var cssProps = this._classes[key];
            result += "." + key + "{" + cssProps + "}\n";
        }
        return result;
    };
    return CssManager;
}());
exports.CssManager = CssManager;
exports.cssManager = new CssManager();


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(48);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13), __webpack_require__(49)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Copyright (c) 2017, Leon Sorokin
* All rights reserved. (MIT Licensed)
*
* domvm.js (DOM ViewModel)
* A thin, fast, dependency-free vdom view layer
* @preserve https://github.com/leeoniya/domvm (v3.2.6, micro build)
*/

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

// NOTE: if adding a new *VNode* type, make it < COMMENT and renumber rest.
// There are some places that test <= COMMENT to assert if node is a VNode

// VNode types
var ELEMENT	= 1;
var TEXT		= 2;
var COMMENT	= 3;

// placeholder types
var VVIEW		= 4;
var VMODEL		= 5;

var ENV_DOM = typeof window !== "undefined";
var win = ENV_DOM ? window : {};
var rAF = win.requestAnimationFrame;

var emptyObj = {};

function noop() {}

var isArr = Array.isArray;

function isSet(val) {
	return val != null;
}

function isPlainObj(val) {
	return val != null && val.constructor === Object;		//  && typeof val === "object"
}

function insertArr(targ, arr, pos, rem) {
	targ.splice.apply(targ, [pos, rem].concat(arr));
}

function isVal(val) {
	var t = typeof val;
	return t === "string" || t === "number";
}

function isFunc(val) {
	return typeof val === "function";
}

function isProm(val) {
	return typeof val === "object" && isFunc(val.then);
}



function assignObj(targ) {
	var args = arguments;

	for (var i = 1; i < args.length; i++)
		{ for (var k in args[i])
			{ targ[k] = args[i][k]; } }

	return targ;
}

// export const defProp = Object.defineProperty;

function deepSet(targ, path, val) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			{ targ[seg] = val; }
		else
			{ targ[seg] = targ = targ[seg] || {}; }
	}
}

/*
export function deepUnset(targ, path) {
	var seg;

	while (seg = path.shift()) {
		if (path.length === 0)
			targ[seg] = val;
		else
			targ[seg] = targ = targ[seg] || {};
	}
}
*/

function sliceArgs(args, offs) {
	var arr = [];
	for (var i = offs; i < args.length; i++)
		{ arr.push(args[i]); }
	return arr;
}

function cmpObj(a, b) {
	for (var i in a)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

function cmpArr(a, b) {
	var alen = a.length;

	if (b.length !== alen)
		{ return false; }

	for (var i = 0; i < alen; i++)
		{ if (a[i] !== b[i])
			{ return false; } }

	return true;
}

// https://github.com/darsain/raft
// rAF throttler, aggregates multiple repeated redraw calls within single animframe
function raft(fn) {
	if (!rAF)
		{ return fn; }

	var id, ctx, args;

	function call() {
		id = 0;
		fn.apply(ctx, args);
	}

	return function() {
		ctx = this;
		args = arguments;
		if (!id) { id = rAF(call); }
	};
}

function curry(fn, args, ctx) {
	return function() {
		return fn.apply(ctx, args);
	};
}

/*
export function prop(val, cb, ctx, args) {
	return function(newVal, execCb) {
		if (newVal !== undefined && newVal !== val) {
			val = newVal;
			execCb !== false && isFunc(cb) && cb.apply(ctx, args);
		}

		return val;
	};
}
*/

/*
// adapted from https://github.com/Olical/binary-search
export function binaryKeySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess].key === item) { return guess; }
			else {
				if (list[guess].key < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

    return -1;
}
*/

// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
// impl borrowed from https://github.com/ivijs/ivi
function longestIncreasingSubsequence(a) {
	var p = a.slice();
	var result = [];
	result.push(0);
	var u;
	var v;

	for (var i = 0, il = a.length; i < il; ++i) {
		var j = result[result.length - 1];
		if (a[j] < a[i]) {
			p[i] = j;
			result.push(i);
			continue;
		}

		u = 0;
		v = result.length - 1;

		while (u < v) {
			var c = ((u + v) / 2) | 0;
			if (a[result[c]] < a[i]) {
				u = c + 1;
			} else {
				v = c;
			}
		}

		if (a[i] < a[result[u]]) {
			if (u > 0) {
				p[i] = result[u - 1];
			}
			result[u] = i;
		}
	}

	u = result.length;
	v = result[u - 1];

	while (u-- > 0) {
		result[u] = v;
		v = p[v];
	}

	return result;
}

// based on https://github.com/Olical/binary-search
function binaryFindLarger(item, list) {
	var min = 0;
	var max = list.length - 1;
	var guess;

	var bitwise = (max <= 2147483647) ? true : false;
	if (bitwise) {
		while (min <= max) {
			guess = (min + max) >> 1;
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	} else {
		while (min <= max) {
			guess = Math.floor((min + max) / 2);
			if (list[guess] === item) { return guess; }
			else {
				if (list[guess] < item) { min = guess + 1; }
				else { max = guess - 1; }
			}
		}
	}

	return (min == list.length) ? null : min;

//	return -1;
}

function isEvProp(name) {
	return name[0] === "o" && name[1] === "n";
}

function isSplProp(name) {
	return name[0] === "_";
}

function isStyleProp(name) {
	return name === "style";
}

function repaint(node) {
	node && node.el && node.el.offsetHeight;
}

function isHydrated(vm) {
	return vm.node != null && vm.node.el != null;
}

// tests interactive props where real val should be compared
function isDynProp(tag, attr) {
//	switch (tag) {
//		case "input":
//		case "textarea":
//		case "select":
//		case "option":
			switch (attr) {
				case "value":
				case "checked":
				case "selected":
//				case "selectedIndex":
					return true;
			}
//	}

	return false;
}

function getVm(n) {
	n = n || emptyObj;
	while (n.vm == null && n.parent)
		{ n = n.parent; }
	return n.vm;
}

function VNode() {}

var VNodeProto = VNode.prototype = {
	constructor: VNode,

	type:	null,

	vm:		null,

	// all this stuff can just live in attrs (as defined) just have getters here for it
	key:	null,
	ref:	null,
	data:	null,
	hooks:	null,
	ns:		null,

	el:		null,

	tag:	null,
	attrs:	null,
	body:	null,

	flags:	0,

	_class:	null,
	_diff:	null,

	// pending removal on promise resolution
	_dead:	false,
	// part of longest increasing subsequence?
	_lis:	false,

	idx:	null,
	parent:	null,

	/*
	// break out into optional fluent module
	key:	function(val) { this.key	= val; return this; },
	ref:	function(val) { this.ref	= val; return this; },		// deep refs
	data:	function(val) { this.data	= val; return this; },
	hooks:	function(val) { this.hooks	= val; return this; },		// h("div").hooks()
	html:	function(val) { this.html	= true; return this.body(val); },

	body:	function(val) { this.body	= val; return this; },
	*/
};

function defineText(body) {
	var node = new VNode;
	node.type = TEXT;
	node.body = body;
	return node;
}

// creates a one-shot self-ending stream that redraws target vm
// TODO: if it's already registered by any parent vm, then ignore to avoid simultaneous parent & child refresh

var tagCache = {};

var RE_ATTRS = /\[(\w+)(?:=(\w+))?\]/g;

function cssTag(raw) {
	{
		var cached = tagCache[raw];

		if (cached == null) {
			var tag, id, cls, attr;

			tagCache[raw] = cached = {
				tag:	(tag	= raw.match( /^[-\w]+/))		?	tag[0]						: "div",
				id:		(id		= raw.match( /#([-\w]+)/))		? 	id[1]						: null,
				class:	(cls	= raw.match(/\.([-\w.]+)/))		?	cls[1].replace(/\./g, " ")	: null,
				attrs:	null,
			};

			while (attr = RE_ATTRS.exec(raw)) {
				if (cached.attrs == null)
					{ cached.attrs = {}; }
				cached.attrs[attr[1]] = attr[2] || "";
			}
		}

		return cached;
	}
}

// (de)optimization flags

// forces slow bottom-up removeChild to fire deep willRemove/willUnmount hooks,
var DEEP_REMOVE = 1;
// prevents inserting/removing/reordering of children
var FIXED_BODY = 2;
// enables fast keyed lookup of children via binary search, expects homogeneous keyed body
var KEYED_LIST = 4;
// indicates an vnode match/diff/recycler function for body
var LAZY_LIST = 8;

function initElementNode(tag, attrs, body, flags) {
	var node = new VNode;

	node.type = ELEMENT;

	if (isSet(flags))
		{ node.flags = flags; }

	node.attrs = attrs;

	var parsed = cssTag(tag);

	node.tag = parsed.tag;

	// meh, weak assertion, will fail for id=0, etc.
	if (parsed.id || parsed.class || parsed.attrs) {
		var p = node.attrs || {};

		if (parsed.id && !isSet(p.id))
			{ p.id = parsed.id; }

		if (parsed.class) {
			node._class = parsed.class;		// static class
			p.class = parsed.class + (isSet(p.class) ? (" " + p.class) : "");
		}
		if (parsed.attrs) {
			for (var key in parsed.attrs)
				{ if (!isSet(p[key]))
					{ p[key] = parsed.attrs[key]; } }
		}

//		if (node.attrs !== p)
			node.attrs = p;
	}

	var mergedAttrs = node.attrs;

	if (isSet(mergedAttrs)) {
		if (isSet(mergedAttrs._key))
			{ node.key = mergedAttrs._key; }

		if (isSet(mergedAttrs._ref))
			{ node.ref = mergedAttrs._ref; }

		if (isSet(mergedAttrs._hooks))
			{ node.hooks = mergedAttrs._hooks; }

		if (isSet(mergedAttrs._data))
			{ node.data = mergedAttrs._data; }

		if (isSet(mergedAttrs._flags))
			{ node.flags = mergedAttrs._flags; }

		if (!isSet(node.key)) {
			if (isSet(node.ref))
				{ node.key = node.ref; }
			else if (isSet(mergedAttrs.id))
				{ node.key = mergedAttrs.id; }
			else if (isSet(mergedAttrs.name))
				{ node.key = mergedAttrs.name + (mergedAttrs.type === "radio" || mergedAttrs.type === "checkbox" ? mergedAttrs.value : ""); }
		}
	}

	if (body != null)
		{ node.body = body; }

	return node;
}

function setRef(vm, name, node) {
	var path = ["refs"].concat(name.split("."));
	deepSet(vm, path, node);
}

function setDeepRemove(node) {
	while (node = node.parent)
		{ node.flags |= DEEP_REMOVE; }
}

// vnew, vold
function preProc(vnew, parent, idx, ownVm) {
	if (vnew.type === VMODEL || vnew.type === VVIEW)
		{ return; }

	vnew.parent = parent;
	vnew.idx = idx;
	vnew.vm = ownVm;

	if (vnew.ref != null)
		{ setRef(getVm(vnew), vnew.ref, vnew); }

	var nh = vnew.hooks,
		vh = ownVm && ownVm.hooks;

	if (nh && (nh.willRemove || nh.didRemove) ||
		vh && (vh.willUnmount || vh.didUnmount))
		{ setDeepRemove(vnew); }

	if (isArr(vnew.body))
		{ preProcBody(vnew); }
	else {}
}

function preProcBody(vnew) {
	var body = vnew.body;

	for (var i = 0; i < body.length; i++) {
		var node2 = body[i];

		// remove false/null/undefined
		if (node2 === false || node2 == null)
			{ body.splice(i--, 1); }
		// flatten arrays
		else if (isArr(node2)) {
			insertArr(body, node2, i--, 1);
		}
		else {
			if (node2.type == null)
				{ body[i] = node2 = defineText(""+node2); }

			if (node2.type === TEXT) {
				// remove empty text nodes
				if (node2.body == null || node2.body === "")
					{ body.splice(i--, 1); }
				// merge with previous text node
				else if (i > 0 && body[i-1].type === TEXT) {
					body[i-1].body += node2.body;
					body.splice(i--, 1);
				}
				else
					{ preProc(node2, vnew, i, null); }
			}
			else
				{ preProc(node2, vnew, i, null); }
		}
	}
}

var unitlessProps = {
	animationIterationCount: true,
	boxFlex: true,
	boxFlexGroup: true,
	boxOrdinalGroup: true,
	columnCount: true,
	flex: true,
	flexGrow: true,
	flexPositive: true,
	flexShrink: true,
	flexNegative: true,
	flexOrder: true,
	gridRow: true,
	gridColumn: true,
	order: true,
	lineClamp: true,

	borderImageOutset: true,
	borderImageSlice: true,
	borderImageWidth: true,
	fontWeight: true,
	lineHeight: true,
	opacity: true,
	orphans: true,
	tabSize: true,
	widows: true,
	zIndex: true,
	zoom: true,

	fillOpacity: true,
	floodOpacity: true,
	stopOpacity: true,
	strokeDasharray: true,
	strokeDashoffset: true,
	strokeMiterlimit: true,
	strokeOpacity: true,
	strokeWidth: true
};

function autoPx(name, val) {
	{
		// typeof val === 'number' is faster but fails for numeric strings
		return !isNaN(val) && !unitlessProps[name] ? (val + "px") : val;
	}
}

// assumes if styles exist both are objects or both are strings
function patchStyle(n, o) {
	var ns =     (n.attrs || emptyObj).style;
	var os = o ? (o.attrs || emptyObj).style : null;

	// replace or remove in full
	if (ns == null || isVal(ns))
		{ n.el.style.cssText = ns; }
	else {
		for (var nn in ns) {
			var nv = ns[nn];

			if (os == null || nv != null && nv !== os[nn])
				{ n.el.style[nn] = autoPx(nn, nv); }
		}

		// clean old
		if (os) {
			for (var on in os) {
				if (ns[on] == null)
					{ n.el.style[on] = ""; }
			}
		}
	}
}

var didQueue = [];

function fireHook(hooks, name, o, n, immediate) {
	if (hooks != null) {
		var fn = o.hooks[name];

		if (fn) {
			if (name[0] === "d" && name[1] === "i" && name[2] === "d") {	// did*
				//	console.log(name + " should queue till repaint", o, n);
				immediate ? repaint(o.parent) && fn(o, n) : didQueue.push([fn, o, n]);
			}
			else {		// will*
				//	console.log(name + " may delay by promise", o, n);
				return fn(o, n);		// or pass  done() resolver
			}
		}
	}
}

function drainDidHooks(vm) {
	if (didQueue.length) {
		repaint(vm.node);

		var item;
		while (item = didQueue.shift())
			{ item[0](item[1], item[2]); }
	}
}

var doc = ENV_DOM ? document : null;

function closestVNode(el) {
	while (el._node == null)
		{ el = el.parentNode; }
	return el._node;
}

function createElement(tag, ns) {
	if (ns != null)
		{ return doc.createElementNS(ns, tag); }
	return doc.createElement(tag);
}

function createTextNode(body) {
	return doc.createTextNode(body);
}

function createComment(body) {
	return doc.createComment(body);
}

// ? removes if !recycled
function nextSib(sib) {
	return sib.nextSibling;
}

// ? removes if !recycled
function prevSib(sib) {
	return sib.previousSibling;
}

// TODO: this should collect all deep proms from all hooks and return Promise.all()
function deepNotifyRemove(node) {
	var vm = node.vm;

	var wuRes = vm != null && fireHook(vm.hooks, "willUnmount", vm, vm.data);

	var wrRes = fireHook(node.hooks, "willRemove", node);

	if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE && isArr(node.body)) {
		for (var i = 0; i < node.body.length; i++)
			{ deepNotifyRemove(node.body[i]); }
	}

	return wuRes || wrRes;
}

function _removeChild(parEl, el, immediate) {
	var node = el._node, vm = node.vm;

	if (isArr(node.body)) {
		if ((node.flags & DEEP_REMOVE) === DEEP_REMOVE) {
			for (var i = 0; i < node.body.length; i++)
				{ _removeChild(el, node.body[i].el); }
		}
		else
			{ deepUnref(node); }
	}

	delete el._node;

	parEl.removeChild(el);

	fireHook(node.hooks, "didRemove", node, null, immediate);

	if (vm != null) {
		fireHook(vm.hooks, "didUnmount", vm, vm.data, immediate);
		vm.node = null;
	}
}

// todo: should delay parent unmount() by returning res prom?
function removeChild(parEl, el) {
	var node = el._node;

	// already marked for removal
	if (node._dead) { return; }

	var res = deepNotifyRemove(node);

	if (res != null && isProm(res)) {
		node._dead = true;
		res.then(curry(_removeChild, [parEl, el, true]));
	}
	else
		{ _removeChild(parEl, el); }
}

function deepUnref(node) {
	var obody = node.body;

	for (var i = 0; i < obody.length; i++) {
		var o2 = obody[i];
		delete o2.el._node;

		if (o2.vm != null)
			{ o2.vm.node = null; }

		if (isArr(o2.body))
			{ deepUnref(o2); }
	}
}

function clearChildren(parent) {
	var parEl = parent.el;

	if ((parent.flags & DEEP_REMOVE) === 0) {
		isArr(parent.body) && deepUnref(parent);
		parEl.textContent = null;
	}
	else {
		var el = parEl.firstChild;

		do {
			var next = nextSib(el);
			removeChild(parEl, el);
		} while (el = next);
	}
}

// todo: hooks
function insertBefore(parEl, el, refEl) {
	var node = el._node, inDom = el.parentNode != null;

	// el === refEl is asserted as a no-op insert called to fire hooks
	var vm = (el === refEl || !inDom) ? node.vm : null;

	if (vm != null)
		{ fireHook(vm.hooks, "willMount", vm, vm.data); }

	fireHook(node.hooks, inDom ? "willReinsert" : "willInsert", node);
	parEl.insertBefore(el, refEl);
	fireHook(node.hooks, inDom ? "didReinsert" : "didInsert", node);

	if (vm != null)
		{ fireHook(vm.hooks, "didMount", vm, vm.data); }
}

function insertAfter(parEl, el, refEl) {
	insertBefore(parEl, el, refEl ? nextSib(refEl) : null);
}

var onemit = {};

function emitCfg(cfg) {
	assignObj(onemit, cfg);
}

function emit(evName) {
	var targ = this,
		src = targ;

	var args = sliceArgs(arguments, 1).concat(src, src.data);

	do {
		var evs = targ.onemit;
		var fn = evs ? evs[evName] : null;

		if (fn) {
			fn.apply(targ, args);
			break;
		}
	} while (targ = targ.parent());

	if (onemit[evName])
		{ onemit[evName].apply(targ, args); }
}

var onevent = noop;

function config(newCfg) {
	onevent = newCfg.onevent || onevent;

	{
		if (newCfg.onemit)
			{ emitCfg(newCfg.onemit); }
	}

	
}

function bindEv(el, type, fn) {
	el[type] = fn;
}

function exec(fn, args, e, node, vm) {
	var out = fn.apply(vm, args.concat([e, node, vm, vm.data]));

	// should these respect out === false?
	vm.onevent(e, node, vm, vm.data, args);
	onevent.call(null, e, node, vm, vm.data, args);

	if (out === false) {
		e.preventDefault();
		e.stopPropagation();
	}
}

function handle(e) {
	var node = closestVNode(e.target);
	var vm = getVm(node);

	var evDef = e.currentTarget._node.attrs["on" + e.type], fn, args;

	if (isArr(evDef)) {
		fn = evDef[0];
		args = evDef.slice(1);
		exec(fn, args, e, node, vm);
	}
	else {
		for (var sel in evDef) {
			if (e.target.matches(sel)) {
				var evDef2 = evDef[sel];

				if (isArr(evDef2)) {
					fn = evDef2[0];
					args = evDef2.slice(1);
				}
				else {
					fn = evDef2;
					args = [];
				}

				exec(fn, args, e, node, vm);
			}
		}
	}
}

function patchEvent(node, name, nval, oval) {
	if (nval === oval)
		{ return; }

	var el = node.el;

	if (nval == null || isFunc(nval))
		{ bindEv(el, name, nval); }
	else if (oval == null)
		{ bindEv(el, name, handle); }
}

function remAttr(node, name, asProp) {
	if (name[0] === ".") {
		name = name.substr(1);
		asProp = true;
	}

	if (asProp)
		{ node.el[name] = ""; }
	else
		{ node.el.removeAttribute(name); }
}

// setAttr
// diff, ".", "on*", bool vals, skip _*, value/checked/selected selectedIndex
function setAttr(node, name, val, asProp, initial) {
	var el = node.el;

	if (val == null)
		{ !initial && remAttr(node, name, false); }		// will also removeAttr of style: null
	else if (node.ns != null)
		{ el.setAttribute(name, val); }
	else if (name === "class")
		{ el.className = val; }
	else if (name === "id" || typeof val === "boolean" || asProp)
		{ el[name] = val; }
	else if (name[0] === ".")
		{ el[name.substr(1)] = val; }
	else
		{ el.setAttribute(name, val); }
}

function patchAttrs(vnode, donor, initial) {
	var nattrs = vnode.attrs || emptyObj;
	var oattrs = donor.attrs || emptyObj;

	if (nattrs === oattrs) {
		
	}
	else {
		for (var key in nattrs) {
			var nval = nattrs[key];
			var isDyn = isDynProp(vnode.tag, key);
			var oval = isDyn ? vnode.el[key] : oattrs[key];

			if (nval === oval) {}
			else if (isStyleProp(key))
				{ patchStyle(vnode, donor); }
			else if (isSplProp(key)) {}
			else if (isEvProp(key))
				{ patchEvent(vnode, key, nval, oval); }
			else
				{ setAttr(vnode, key, nval, isDyn, initial); }
		}

		// TODO: bench style.cssText = "" vs removeAttribute("style")
		for (var key in oattrs) {
			!(key in nattrs) &&
			!isSplProp(key) &&
			remAttr(vnode, key, isDynProp(vnode.tag, key) || isEvProp(key));
		}
	}
}

function createView(view, data, key, opts) {
	if (view.type === VVIEW) {
		data	= view.data;
		key		= view.key;
		opts	= view.opts;
		view	= view.view;
	}

	return new ViewModel(view, data, key, opts);
}

//import { XML_NS, XLINK_NS } from './defineSvgElement';
function hydrateBody(vnode) {
	for (var i = 0; i < vnode.body.length; i++) {
		var vnode2 = vnode.body[i];
		var type2 = vnode2.type;

		// ELEMENT,TEXT,COMMENT
		if (type2 <= COMMENT)
			{ insertBefore(vnode.el, hydrate(vnode2)); }		// vnode.el.appendChild(hydrate(vnode2))
		else if (type2 === VVIEW) {
			var vm = createView(vnode2.view, vnode2.data, vnode2.key, vnode2.opts)._redraw(vnode, i, false);		// todo: handle new data updates
			type2 = vm.node.type;
			insertBefore(vnode.el, hydrate(vm.node));
		}
		else if (type2 === VMODEL) {
			var vm = vnode2.vm;
			vm._redraw(vnode, i);					// , false
			type2 = vm.node.type;
			insertBefore(vnode.el, vm.node.el);		// , hydrate(vm.node)
		}
	}
}

//  TODO: DRY this out. reusing normal patch here negatively affects V8's JIT
function hydrate(vnode, withEl) {
	if (vnode.el == null) {
		if (vnode.type === ELEMENT) {
			vnode.el = withEl || createElement(vnode.tag, vnode.ns);

		//	if (vnode.tag === "svg")
		//		vnode.el.setAttributeNS(XML_NS, 'xmlns:xlink', XLINK_NS);

			if (vnode.attrs != null)
				{ patchAttrs(vnode, emptyObj, true); }

			if ((vnode.flags & LAZY_LIST) === LAZY_LIST)	// vnode.body instanceof LazyList
				{ vnode.body.body(vnode); }

			if (isArr(vnode.body))
				{ hydrateBody(vnode); }
			else if (vnode.body != null && vnode.body !== "")
				{ vnode.el.textContent = vnode.body; }
		}
		else if (vnode.type === TEXT)
			{ vnode.el = withEl || createTextNode(vnode.body); }
		else if (vnode.type === COMMENT)
			{ vnode.el = withEl || createComment(vnode.body); }
	}

	vnode.el._node = vnode;

	return vnode.el;
}

// prevent GCC from inlining some large funcs (which negatively affects Chrome's JIT)
//window.syncChildren = syncChildren;
window.lisMove = lisMove;

function nextNode(node, body) {
	return body[node.idx + 1];
}

function prevNode(node, body) {
	return body[node.idx - 1];
}

function parentNode(node) {
	return node.parent;
}

var BREAK = 1;
var BREAK_ALL = 2;

function syncDir(advSib, advNode, insert, sibName, nodeName, invSibName, invNodeName, invInsert) {
	return function(node, parEl, body, state, convTest, lis) {
		var sibNode, tmpSib;

		if (state[sibName] != null) {
			// skip dom elements not created by domvm
			if ((sibNode = state[sibName]._node) == null) {
				state[sibName] = advSib(state[sibName]);
				return;
			}

			if (parentNode(sibNode) !== node) {
				tmpSib = advSib(state[sibName]);
				sibNode.vm != null ? sibNode.vm.unmount(true) : removeChild(parEl, state[sibName]);
				state[sibName] = tmpSib;
				return;
			}
		}

		if (state[nodeName] == convTest)
			{ return BREAK_ALL; }
		else if (state[nodeName].el == null) {
			insert(parEl, hydrate(state[nodeName]), state[sibName]);	// should lis be updated here?
			state[nodeName] = advNode(state[nodeName], body);		// also need to advance sib?
		}
		else if (state[nodeName].el === state[sibName]) {
			state[nodeName] = advNode(state[nodeName], body);
			state[sibName] = advSib(state[sibName]);
		}
		// head->tail or tail->head
		else if (!lis && sibNode === state[invNodeName]) {
			tmpSib = state[sibName];
			state[sibName] = advSib(tmpSib);
			invInsert(parEl, tmpSib, state[invSibName]);
			state[invSibName] = tmpSib;
		}
		else {
			if (lis && state[sibName] != null)
				{ return lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state); }

			return BREAK;
		}
	};
}

function lisMove(advSib, advNode, insert, sibName, nodeName, parEl, body, sibNode, state) {
	if (sibNode._lis) {
		insert(parEl, state[nodeName].el, state[sibName]);
		state[nodeName] = advNode(state[nodeName], body);
	}
	else {
		// find closest tomb
		var t = binaryFindLarger(sibNode.idx, state.tombs);
		sibNode._lis = true;
		var tmpSib = advSib(state[sibName]);
		insert(parEl, state[sibName], t != null ? body[state.tombs[t]].el : t);

		if (t == null)
			{ state.tombs.push(sibNode.idx); }
		else
			{ state.tombs.splice(t, 0, sibNode.idx); }

		state[sibName] = tmpSib;
	}
}

var syncLft = syncDir(nextSib, nextNode, insertBefore, "lftSib", "lftNode", "rgtSib", "rgtNode", insertAfter);
var syncRgt = syncDir(prevSib, prevNode, insertAfter, "rgtSib", "rgtNode", "lftSib", "lftNode", insertBefore);

function syncChildren(node, donor) {
	var obody	= donor.body,
		parEl	= node.el,
		body	= node.body,
		state = {
			lftNode:	body[0],
			rgtNode:	body[body.length - 1],
			lftSib:		((obody)[0] || emptyObj).el,
			rgtSib:		(obody[obody.length - 1] || emptyObj).el,
		};

	converge:
	while (1) {
//		from_left:
		while (1) {
			var l = syncLft(node, parEl, body, state, null, false);
			if (l === BREAK) { break; }
			if (l === BREAK_ALL) { break converge; }
		}

//		from_right:
		while (1) {
			var r = syncRgt(node, parEl, body, state, state.lftNode, false);
			if (r === BREAK) { break; }
			if (r === BREAK_ALL) { break converge; }
		}

		sortDOM(node, parEl, body, state);
		break;
	}
}

// TODO: also use the state.rgtSib and state.rgtNode bounds, plus reduce LIS range
function sortDOM(node, parEl, body, state) {
	var kids = Array.prototype.slice.call(parEl.childNodes);
	var domIdxs = [];

	for (var k = 0; k < kids.length; k++) {
		var n = kids[k]._node;

		if (n.parent === node)
			{ domIdxs.push(n.idx); }
	}

	// list of non-movable vnode indices (already in correct order in old dom)
	var tombs = longestIncreasingSubsequence(domIdxs).map(function (i) { return domIdxs[i]; });

	for (var i = 0; i < tombs.length; i++)
		{ body[tombs[i]]._lis = true; }

	state.tombs = tombs;

	while (1) {
		var r = syncLft(node, parEl, body, state, null, true);
		if (r === BREAK_ALL) { break; }
	}
}

function alreadyAdopted(vnode) {
	return vnode.el._node.parent !== vnode.parent;
}

function takeSeqIndex(n, obody, fromIdx) {
	return obody[fromIdx];
}

function findSeqThorough(n, obody, fromIdx) {		// pre-tested isView?
	for (; fromIdx < obody.length; fromIdx++) {
		var o = obody[fromIdx];

		if (o.vm != null) {
			// match by key & viewFn || vm
			if (n.type === VVIEW && o.vm.view === n.view && o.vm.key === n.key || n.type === VMODEL && o.vm === n.vm)
				{ return o; }
		}
		else if (!alreadyAdopted(o) && n.tag === o.tag && n.type === o.type && n.key === o.key && (n.flags & ~DEEP_REMOVE) === (o.flags & ~DEEP_REMOVE))
			{ return o; }
	}

	return null;
}

function findHashKeyed(n, obody, fromIdx) {
	return obody[obody._keys[n.key]];
}

/*
// list must be a sorted list of vnodes by key
function findBinKeyed(n, list) {
	var idx = binaryKeySearch(list, n.key);
	return idx > -1 ? list[idx] : null;
}
*/

// have it handle initial hydrate? !donor?
// types (and tags if ELEM) are assumed the same, and donor exists
function patch(vnode, donor) {
	fireHook(donor.hooks, "willRecycle", donor, vnode);

	var el = vnode.el = donor.el;

	var obody = donor.body;
	var nbody = vnode.body;

	el._node = vnode;

	// "" => ""
	if (vnode.type === TEXT && nbody !== obody) {
		el.nodeValue = nbody;
		return;
	}

	if (vnode.attrs != null || donor.attrs != null)
		{ patchAttrs(vnode, donor, false); }

	// patch events

	var oldIsArr = isArr(obody);
	var newIsArr = isArr(nbody);
	var lazyList = (vnode.flags & LAZY_LIST) === LAZY_LIST;

//	var nonEqNewBody = nbody != null && nbody !== obody;

	if (oldIsArr) {
		// [] => []
		if (newIsArr || lazyList)
			{ patchChildren(vnode, donor); }
		// [] => "" | null
		else if (nbody !== obody) {
			if (nbody != null)
				{ el.textContent = nbody; }
			else
				{ clearChildren(donor); }
		}
	}
	else {
		// "" | null => []
		if (newIsArr) {
			clearChildren(donor);
			hydrateBody(vnode);
		}
		// "" | null => "" | null
		else if (nbody !== obody) {
			if (el.firstChild)
				{ el.firstChild.nodeValue = nbody; }
			else
				{ el.textContent = nbody; }
		}
	}

	fireHook(donor.hooks, "didRecycle", donor, vnode);
}

// larger qtys of KEYED_LIST children will use binary search
//const SEQ_FAILS_MAX = 100;

// TODO: modify vtree matcher to work similar to dom reconciler for keyed from left -> from right -> head/tail -> binary
// fall back to binary if after failing nri - nli > SEQ_FAILS_MAX
// while-advance non-keyed fromIdx
// [] => []
function patchChildren(vnode, donor) {
	var nbody		= vnode.body,
		nlen		= nbody.length,
		obody		= donor.body,
		olen		= obody.length,
		isLazy		= (vnode.flags & LAZY_LIST) === LAZY_LIST,
		isFixed		= (vnode.flags & FIXED_BODY) === FIXED_BODY,
		isKeyed		= (vnode.flags & KEYED_LIST) === KEYED_LIST,
		domSync		= !isFixed && vnode.type === ELEMENT,
		doFind		= true,
		find		= (
			isKeyed ? findHashKeyed :				// keyed lists/lazyLists
			isFixed || isLazy ? takeSeqIndex :		// unkeyed lazyLists and FIXED_BODY
			findSeqThorough							// more complex stuff
		);

	if (isKeyed) {
		var keys = {};
		for (var i = 0; i < obody.length; i++)
			{ keys[obody[i].key] = i; }
		obody._keys = keys;
	}

	if (domSync && nlen === 0) {
		clearChildren(donor);
		if (isLazy)
			{ vnode.body = []; }	// nbody.tpl(all);
		return;
	}

	var donor2,
		node2,
		foundIdx,
		patched = 0,
		everNonseq = false,
		fromIdx = 0;		// first unrecycled node (search head)

	if (isLazy) {
		var fnode2 = {key: null};
		var nbodyNew = Array(nlen);
	}

	for (var i = 0; i < nlen; i++) {
		if (isLazy) {
			var remake = false;
			var diffRes = null;

			if (doFind) {
				if (isKeyed)
					{ fnode2.key = nbody.key(i); }

				donor2 = find(fnode2, obody, fromIdx);
			}

			if (donor2 != null) {
                foundIdx = donor2.idx;
				diffRes = nbody.diff(i, donor2);

				// diff returns same, so cheaply adopt vnode without patching
				if (diffRes === true) {
					node2 = donor2;
					node2.parent = vnode;
					node2.idx = i;
					node2._lis = false;
				}
				// diff returns new diffVals, so generate new vnode & patch
				else
					{ remake = true; }
			}
			else
				{ remake = true; }

			if (remake) {
				node2 = nbody.tpl(i);			// what if this is a VVIEW, VMODEL, injected element?
				preProc(node2, vnode, i);

				node2._diff = diffRes != null ? diffRes : nbody.diff(i);

				if (donor2 != null)
					{ patch(node2, donor2); }
			}
			else {
				// TODO: flag tmp FIXED_BODY on unchanged nodes?

				// domSync = true;		if any idx changes or new nodes added/removed
			}

			nbodyNew[i] = node2;
		}
		else {
			var node2 = nbody[i];
			var type2 = node2.type;

			// ELEMENT,TEXT,COMMENT
			if (type2 <= COMMENT) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {
					patch(node2, donor2);
					foundIdx = donor2.idx;
				}
			}
			else if (type2 === VVIEW) {
				if (donor2 = doFind && find(node2, obody, fromIdx)) {		// update/moveTo
					foundIdx = donor2.idx;
					var vm = donor2.vm._update(node2.data, vnode, i);		// withDOM
				}
				else
					{ var vm = createView(node2.view, node2.data, node2.key, node2.opts)._redraw(vnode, i, false); }	// createView, no dom (will be handled by sync below)

				type2 = vm.node.type;
			}
			else if (type2 === VMODEL) {
				// if the injected vm has never been rendered, this vm._update() serves as the
				// initial vtree creator, but must avoid hydrating (creating .el) because syncChildren()
				// which is responsible for mounting below (and optionally hydrating), tests .el presence
				// to determine if hydration & mounting are needed
				var withDOM = isHydrated(node2.vm);

				var vm = node2.vm._update(node2.data, vnode, i, withDOM);
				type2 = vm.node.type;
			}
		}

		// found donor & during a sequential search ...at search head
		if (!isKeyed && donor2 != null) {
			if (foundIdx === fromIdx) {
				// advance head
				fromIdx++;
				// if all old vnodes adopted and more exist, stop searching
				if (fromIdx === olen && nlen > olen) {
					// short-circuit find, allow loop just create/init rest
					donor2 = null;
					doFind = false;
				}
			}
			else
				{ everNonseq = true; }

			if (olen > 100 && everNonseq && ++patched % 10 === 0)
				{ while (fromIdx < olen && alreadyAdopted(obody[fromIdx]))
					{ fromIdx++; } }
		}
	}

	// replace List w/ new body
	if (isLazy)
		{ vnode.body = nbodyNew; }

	domSync && syncChildren(vnode, donor);
}

// view + key serve as the vm's unique identity
function ViewModel(view, data, key, opts) {
	var vm = this;

	vm.view = view;
	vm.data = data;
	vm.key = key;

	if (opts) {
		vm.opts = opts;
		vm.config(opts);
	}

	var out = isPlainObj(view) ? view : view.call(vm, vm, data, key, opts);

	if (isFunc(out))
		{ vm.render = out; }
	else {
		vm.render = out.render;
		vm.config(out);
	}

	// these must be wrapped here since they're debounced per view
	vm._redrawAsync = raft(function (_) { return vm.redraw(true); });
	vm._updateAsync = raft(function (newData) { return vm.update(newData, true); });

	vm.init && vm.init.call(vm, vm, vm.data, vm.key, opts);
}

var ViewModelProto = ViewModel.prototype = {
	constructor: ViewModel,

	_diff:	null,	// diff cache

	init:	null,
	view:	null,
	key:	null,
	data:	null,
	state:	null,
	api:	null,
	opts:	null,
	node:	null,
	hooks:	null,
	onevent: noop,
	refs:	null,
	render:	null,

	mount: mount,
	unmount: unmount,
	config: function(opts) {
		var t = this;

		if (opts.init)
			{ t.init = opts.init; }
		if (opts.diff)
			{ t.diff = opts.diff; }
		if (opts.onevent)
			{ t.onevent = opts.onevent; }

		// maybe invert assignment order?
		if (opts.hooks)
			{ t.hooks = assignObj(t.hooks || {}, opts.hooks); }

		{
			if (opts.onemit)
				{ t.onemit = assignObj(t.onemit || {}, opts.onemit); }
		}
	},
	parent: function() {
		return getVm(this.node.parent);
	},
	root: function() {
		var p = this.node;

		while (p.parent)
			{ p = p.parent; }

		return p.vm;
	},
	redraw: function(sync) {
		var vm = this;
		sync ? vm._redraw(null, null, isHydrated(vm)) : vm._redrawAsync();
		return vm;
	},
	update: function(newData, sync) {
		var vm = this;
		sync ? vm._update(newData, null, null, isHydrated(vm)) : vm._updateAsync(newData);
		return vm;
	},

	_update: updateSync,
	_redraw: redrawSync,
	_redrawAsync: null,
	_updateAsync: null,
};

function mount(el, isRoot) {
	var vm = this;

	if (isRoot) {
		clearChildren({el: el, flags: 0});

		vm._redraw(null, null, false);

		// if placeholder node doesnt match root tag
		if (el.nodeName.toLowerCase() !== vm.node.tag) {
			hydrate(vm.node);
			insertBefore(el.parentNode, vm.node.el, el);
			el.parentNode.removeChild(el);
		}
		else
			{ insertBefore(el.parentNode, hydrate(vm.node, el), el); }
	}
	else {
		vm._redraw(null, null);

		if (el)
			{ insertBefore(el, vm.node.el); }
	}

	if (el)
		{ drainDidHooks(vm); }

	return vm;
}

// asSub means this was called from a sub-routine, so don't drain did* hook queue
function unmount(asSub) {
	var vm = this;

	var node = vm.node;
	var parEl = node.el.parentNode;

	// edge bug: this could also be willRemove promise-delayed; should .then() or something to make sure hooks fire in order
	removeChild(parEl, node.el);

	if (!asSub)
		{ drainDidHooks(vm); }
}

function reParent(vm, vold, newParent, newIdx) {
	if (newParent != null) {
		newParent.body[newIdx] = vold;
		vold.idx = newIdx;
		vold.parent = newParent;
		vold._lis = false;
	}
	return vm;
}

function redrawSync(newParent, newIdx, withDOM) {
	var isRedrawRoot = newParent == null;
	var vm = this;
	var isMounted = vm.node && vm.node.el && vm.node.el.parentNode;

	var vold = vm.node, oldDiff, newDiff;

	if (vm.diff != null) {
		oldDiff = vm._diff;
		vm._diff = newDiff = vm.diff(vm, vm.data);

		if (vold != null) {
			var cmpFn = isArr(oldDiff) ? cmpArr : cmpObj;
			var isSame = oldDiff === newDiff || cmpFn(oldDiff, newDiff);

			if (isSame)
				{ return reParent(vm, vold, newParent, newIdx); }
		}
	}

	isMounted && fireHook(vm.hooks, "willRedraw", vm, vm.data);

	var vnew = vm.render.call(vm, vm, vm.data, oldDiff, newDiff);

	if (vnew === vold)
		{ return reParent(vm, vold, newParent, newIdx); }

	// todo: test result of willRedraw hooks before clearing refs
	vm.refs = null;

	// always assign vm key to root vnode (this is a de-opt)
	if (vm.key != null && vnew.key !== vm.key)
		{ vnew.key = vm.key; }

	vm.node = vnew;

	if (newParent) {
		preProc(vnew, newParent, newIdx, vm);
		newParent.body[newIdx] = vnew;
	}
	else if (vold && vold.parent) {
		preProc(vnew, vold.parent, vold.idx, vm);
		vold.parent.body[vold.idx] = vnew;
	}
	else
		{ preProc(vnew, null, null, vm); }

	if (withDOM !== false) {
		if (vold) {
			// root node replacement
			if (vold.tag !== vnew.tag || vold.key !== vnew.key) {
				// hack to prevent the replacement from triggering mount/unmount
				vold.vm = vnew.vm = null;

				var parEl = vold.el.parentNode;
				var refEl = nextSib(vold.el);
				removeChild(parEl, vold.el);
				insertBefore(parEl, hydrate(vnew), refEl);

				// another hack that allows any higher-level syncChildren to set
				// reconciliation bounds using a live node
				vold.el = vnew.el;

				// restore
				vnew.vm = vm;
			}
			else
				{ patch(vnew, vold); }
		}
		else
			{ hydrate(vnew); }
	}

	isMounted && fireHook(vm.hooks, "didRedraw", vm, vm.data);

	if (isRedrawRoot && isMounted)
		{ drainDidHooks(vm); }

	return vm;
}

// this also doubles as moveTo
// TODO? @withRedraw (prevent redraw from firing)
function updateSync(newData, newParent, newIdx, withDOM) {
	var vm = this;

	if (newData != null) {
		if (vm.data !== newData) {
			fireHook(vm.hooks, "willUpdate", vm, newData);
			vm.data = newData;

			
		}
	}

	return vm._redraw(newParent, newIdx, withDOM);
}

function defineElement(tag, arg1, arg2, flags) {
	var attrs, body;

	if (arg2 == null) {
		if (isPlainObj(arg1))
			{ attrs = arg1; }
		else
			{ body = arg1; }
	}
	else {
		attrs = arg1;
		body = arg2;
	}

	return initElementNode(tag, attrs, body, flags);
}

//export const XML_NS = "http://www.w3.org/2000/xmlns/";
var SVG_NS = "http://www.w3.org/2000/svg";

function defineSvgElement(tag, arg1, arg2, flags) {
	var n = defineElement(tag, arg1, arg2, flags);
	n.ns = SVG_NS;
	return n;
}

function defineComment(body) {
	var node = new VNode;
	node.type = COMMENT;
	node.body = body;
	return node;
}

// placeholder for declared views
function VView(view, data, key, opts) {
	this.view = view;
	this.data = data;
	this.key = key;
	this.opts = opts;
}

VView.prototype = {
	constructor: VView,

	type: VVIEW,
	view: null,
	data: null,
	key: null,
	opts: null,
};

function defineView(view, data, key, opts) {
	return new VView(view, data, key, opts);
}

// placeholder for injected ViewModels
function VModel(vm) {
	this.vm = vm;
}

VModel.prototype = {
	constructor: VModel,

	type: VMODEL,
	vm: null,
};

function injectView(vm) {
//	if (vm.node == null)
//		vm._redraw(null, null, false);

//	return vm.node;

	return new VModel(vm);
}

function injectElement(el) {
	var node = new VNode;
	node.type = ELEMENT;
	node.el = node.key = el;
	return node;
}

function lazyList(items, cfg) {
	var len = items.length;

	var self = {
		items: items,
		length: len,
		// defaults to returning item identity (or position?)
		key: function(i) {
			return cfg.key(items[i], i);
		},
		// default returns 0?
		diff: function(i, donor) {
			var newVals = cfg.diff(items[i], i);
			if (donor == null)
				{ return newVals; }
			var oldVals = donor._diff;
			var same = newVals === oldVals || isArr(oldVals) ? cmpArr(newVals, oldVals) : cmpObj(newVals, oldVals);
			return same || newVals;
		},
		tpl: function(i) {
			return cfg.tpl(items[i], i);
		},
		map: function(tpl) {
			cfg.tpl = tpl;
			return self;
		},
		body: function(vnode) {
			var nbody = Array(len);

			for (var i = 0; i < len; i++) {
				var vnode2 = self.tpl(i);

			//	if ((vnode.flags & KEYED_LIST) === KEYED_LIST && self. != null)
			//		vnode2.key = getKey(item);

				vnode2._diff = self.diff(i);			// holds oldVals for cmp

				nbody[i] = vnode2;

				// run preproc pass (should this be just preProc in above loop?) bench
				preProc(vnode2, vnode, i);
			}

			// replace List with generated body
			vnode.body = nbody;
		}
	};

	return self;
}

var nano = {
	config: config,

	ViewModel: ViewModel,
	VNode: VNode,

	createView: createView,

	defineElement: defineElement,
	defineSvgElement: defineSvgElement,
	defineText: defineText,
	defineComment: defineComment,
	defineView: defineView,

	injectView: injectView,
	injectElement: injectElement,

	lazyList: lazyList,

	FIXED_BODY: FIXED_BODY,
	DEEP_REMOVE: DEEP_REMOVE,
	KEYED_LIST: KEYED_LIST,
	LAZY_LIST: LAZY_LIST,
};

function protoPatch(n, doRepaint) {
	patch$1(this, n, doRepaint);
}

// newNode can be either {class: style: } or full new VNode
// will/didPatch hooks?
function patch$1(o, n, doRepaint) {
	if (n.type != null) {
		// no full patching of view roots, just use redraw!
		if (o.vm != null)
			{ return; }

		preProc(n, o.parent, o.idx, null);
		o.parent.body[o.idx] = n;
		patch(n, o);
		doRepaint && repaint(n);
		drainDidHooks(getVm(n));
	}
	else {
		// TODO: re-establish refs

		// shallow-clone target
		var donor = Object.create(o);
		// fixate orig attrs
		donor.attrs = assignObj({}, o.attrs);
		// assign new attrs into live targ node
		var oattrs = assignObj(o.attrs, n);
		// prepend any fixed shorthand class
		if (o._class != null) {
			var aclass = oattrs.class;
			oattrs.class = aclass != null && aclass !== "" ? o._class + " " + aclass : o._class;
		}

		patchAttrs(o, donor);

		doRepaint && repaint(o);
	}
}

VNodeProto.patch = protoPatch;

function nextSubVms(n, accum) {
	var body = n.body;

	if (isArr(body)) {
		for (var i = 0; i < body.length; i++) {
			var n2 = body[i];

			if (n2.vm != null)
				{ accum.push(n2.vm); }
			else
				{ nextSubVms(n2, accum); }
		}
	}

	return accum;
}

function defineElementSpread(tag) {
	var args = arguments;
	var len = args.length;
	var body, attrs;

	if (len > 1) {
		var bodyIdx = 1;

		if (isPlainObj(args[1])) {
			attrs = args[1];
			bodyIdx = 2;
		}

		if (len === bodyIdx + 1 && (isVal(args[bodyIdx]) || isArr(args[bodyIdx]) || attrs && (attrs._flags & LAZY_LIST) === LAZY_LIST))
			{ body = args[bodyIdx]; }
		else
			{ body = sliceArgs(args, bodyIdx); }
	}

	return initElementNode(tag, attrs, body);
}

function defineSvgElementSpread() {
	var n = defineElementSpread.apply(null, arguments);
	n.ns = SVG_NS;
	return n;
}

ViewModelProto.emit = emit;
ViewModelProto.onemit = null;

ViewModelProto.body = function() {
	return nextSubVms(this.node, []);
};

nano.defineElementSpread = defineElementSpread;
nano.defineSvgElementSpread = defineSvgElementSpread;

return nano;

})));
//# sourceMappingURL=domvm.micro.js.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(8);
var types_1 = __webpack_require__(7);
var Loader = /** @class */ (function () {
    function Loader(parent, changes) {
        this._parent = parent;
        this._changes = changes; // todo: [dirty] mutation
    }
    Loader.prototype.load = function (url, driver) {
        var _this = this;
        // TODO: change way for checking lazyLoad
        if (url.config && !this._parent.events.fire(types_1.DataEvents.beforeLazyLoad, [])) {
            return;
        }
        return (this._parent.loadData = url
            .load()
            .then(function (data) {
            if (data) {
                return _this.parse(data, driver);
            }
            else {
                return [];
            }
        })
            .catch(function (error) {
            _this._parent.events.fire(types_1.DataEvents.loadError, [error]);
        }));
    };
    Loader.prototype.parse = function (data, driver) {
        var _this = this;
        if (driver === void 0) { driver = "json"; }
        if (driver === "json" && !helpers_1.hasJsonOrArrayStructure(data)) {
            this._parent.events.fire(types_1.DataEvents.loadError, ["Uncaught SyntaxError: Unexpected end of input"]);
        }
        driver = helpers_1.toDataDriver(driver);
        data = driver.toJsonArray(data);
        if (!(data instanceof Array)) {
            var totalCount = data.total_count - 1;
            var from_1 = data.from;
            data = data.data;
            if (this._parent.getLength() === 0) {
                var newData = [];
                for (var i = 0, j = 0; i <= totalCount; i++) {
                    if (i >= from_1 && i <= from_1 + data.length - 1) {
                        newData.push(data[j]);
                        j++;
                    }
                    else {
                        newData.push({ $empty: true });
                    }
                }
                data = newData;
            }
            else {
                data.forEach(function (newItem, i) {
                    var index = from_1 + i;
                    var oldId = _this._parent.getId(index);
                    if (oldId) {
                        var emptyItem = _this._parent.getItem(oldId);
                        if (emptyItem && emptyItem.$empty) {
                            _this._parent.changeId(oldId, newItem.id, true);
                            _this._parent.update(newItem.id, __assign(__assign({}, newItem), { $empty: undefined }), true);
                        }
                    }
                    else {
                        helpers_1.dhxWarning("item not found");
                    }
                });
                this._parent.events.fire(types_1.DataEvents.afterLazyLoad, [from_1, data.length]);
                this._parent.events.fire(types_1.DataEvents.change);
                return data;
            }
        }
        if (this._parent.getInitialData()) {
            this._parent.removeAll();
        }
        this._parent.$parse(data);
        return data;
    };
    Loader.prototype.save = function (url) {
        var _this = this;
        var _loop_1 = function (el) {
            if (el.saving || el.pending) {
                helpers_1.dhxWarning("item is saving");
            }
            else {
                var prevEl_1 = this_1._findPrevState(el.id);
                if (prevEl_1 && prevEl_1.saving) {
                    var pending = new Promise(function (res, rej) {
                        prevEl_1.promise
                            .then(function () {
                            el.pending = false;
                            res(_this._setPromise(el, url));
                        })
                            .catch(function (err) {
                            _this._removeFromOrder(prevEl_1);
                            _this._setPromise(el, url);
                            helpers_1.dhxWarning(err);
                            rej(err);
                        });
                    });
                    this_1._addToChain(pending);
                    el.pending = true;
                }
                else {
                    this_1._setPromise(el, url);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            _loop_1(el);
        }
        this._parent.saveData.then(function () {
            _this._saving = false;
        });
    };
    Loader.prototype._setPromise = function (el, url) {
        var _this = this;
        el.promise = url.save(el.obj, el.status);
        el.promise
            .then(function () {
            _this._removeFromOrder(el);
        })
            .catch(function (err) {
            el.saving = false;
            el.error = true;
            helpers_1.dhxError(err);
        });
        el.saving = true;
        this._saving = true;
        this._addToChain(el.promise);
        return el.promise;
    };
    Loader.prototype._addToChain = function (promise) {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (this._parent.saveData && this._saving) {
            this._parent.saveData = this._parent.saveData.then(function () { return promise; });
        }
        else {
            this._parent.saveData = promise;
        }
    };
    Loader.prototype._findPrevState = function (id) {
        for (var _i = 0, _a = this._changes.order; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id === id) {
                return el;
            }
        }
        return null;
    };
    Loader.prototype._removeFromOrder = function (el) {
        this._changes.order = this._changes.order.filter(function (item) { return !helpers_1.isEqualObj(item, el); });
    };
    return Loader;
}());
exports.Loader = Loader;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xml_1 = __webpack_require__(53);
var ARRAY_NAME = "items";
var ITEM_NAME = "item";
// convert xml tag to js object, all subtags and attributes are mapped to the properties of result object
function tagToObject(tag, initialObj) {
    initialObj = initialObj || {};
    // map attributes
    var a = tag.attributes;
    if (a && a.length) {
        for (var i = 0; i < a.length; i++) {
            initialObj[a[i].name] = a[i].value;
        }
    }
    // map subtags
    var b = tag.childNodes;
    for (var i = 0; i < b.length; i++) {
        if (b[i].nodeType === 1) {
            var name_1 = b[i].tagName;
            if (initialObj[name_1]) {
                if (typeof initialObj[name_1].push !== "function") {
                    initialObj[name_1] = [initialObj[name_1]];
                }
                initialObj[name_1].push(tagToObject(b[i], {}));
            }
            else {
                initialObj[name_1] = tagToObject(b[i], {}); // sub-object for complex subtags
            }
        }
    }
    return initialObj;
}
var XMLDriver = /** @class */ (function () {
    function XMLDriver() {
    }
    XMLDriver.prototype.toJsonArray = function (data) {
        return this.getRows(data);
    };
    XMLDriver.prototype.toJsonObject = function (data) {
        var doc;
        if (typeof data === "string") {
            doc = this._fromString(data);
        }
        return tagToObject(doc);
    };
    XMLDriver.prototype.serialize = function (data) {
        return xml_1.jsonToXML(data);
    };
    XMLDriver.prototype.getFields = function (row) {
        return row;
    };
    XMLDriver.prototype.getRows = function (data) {
        if (typeof data === "string") {
            data = this._fromString(data);
        }
        if (data) {
            var childNodes = data.childNodes && data.childNodes[0] && data.childNodes[0].childNodes;
            if (!childNodes || !childNodes.length) {
                return null;
            }
            return this._getRows(childNodes);
        }
        return [];
    };
    XMLDriver.prototype._getRows = function (nodes) {
        var result = [];
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].tagName === ITEM_NAME) {
                result.push(this._nodeToJS(nodes[i]));
            }
        }
        return result;
    };
    XMLDriver.prototype._fromString = function (data) {
        try {
            return new DOMParser().parseFromString(data, "text/xml");
        }
        catch (_a) {
            return null;
        }
    };
    XMLDriver.prototype._nodeToJS = function (node) {
        var result = {};
        if (this._haveAttrs(node)) {
            var attrs = node.attributes;
            for (var i = 0; i < attrs.length; i++) {
                var _a = attrs[i], name_2 = _a.name, value = _a.value;
                result[name_2] = this._toType(value);
            }
        }
        if (node.nodeType === 3) {
            result.value = result.value || this._toType(node.textContent);
            return result;
        }
        var childNodes = node.childNodes;
        if (childNodes) {
            for (var i = 0; i < childNodes.length; i++) {
                var subNode = childNodes[i];
                var tag = subNode.tagName;
                if (!tag) {
                    continue;
                }
                if (tag === ARRAY_NAME && subNode.childNodes) {
                    result[tag] = this._getRows(subNode.childNodes);
                }
                else {
                    if (this._haveAttrs(subNode)) {
                        result[tag] = this._nodeToJS(subNode);
                    }
                    else {
                        result[tag] = this._toType(subNode.textContent);
                    }
                }
            }
        }
        return result;
    };
    XMLDriver.prototype._toType = function (val) {
        if (val === "false" || val === "true") {
            return val === "true";
        }
        if (!isNaN(val)) {
            return Number(val);
        }
        return val;
    };
    XMLDriver.prototype._haveAttrs = function (node) {
        return node.attributes && node.attributes.length;
    };
    return XMLDriver;
}());
exports.XMLDriver = XMLDriver;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var INDENT_STEP = 4;
function ws(count) {
    return " ".repeat(count);
}
function itemToXML(item, indent) {
    if (indent === void 0) { indent = INDENT_STEP; }
    var result = ws(indent) + "<item>\n";
    for (var key in item) {
        if (Array.isArray(item[key])) {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">\n");
            result +=
                item[key].map(function (subItem) { return itemToXML(subItem, indent + INDENT_STEP * 2); }).join("\n") +
                    "\n";
            result += ws(indent + INDENT_STEP) + ("</" + key + ">\n");
        }
        else {
            result += ws(indent + INDENT_STEP) + ("<" + key + ">" + item[key] + "</" + key + ">\n");
        }
    }
    result += ws(indent) + "</item>";
    return result;
}
function jsonToXML(data, root) {
    if (root === void 0) { root = "root"; }
    var result = "<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<" + root + ">";
    for (var i = 0; i < data.length; i++) {
        result += "\n" + itemToXML(data[i]);
    }
    return result + ("\n</" + root + ">");
}
exports.jsonToXML = jsonToXML;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(8);
var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.prototype.sort = function (array, by) {
        var _this = this;
        if (by.rule && typeof by.rule === "function") {
            this._sort(array, by);
        }
        else if (by.by) {
            by.rule = function (a, b) {
                var aa = _this._checkVal(by.as, a[by.by]);
                var bb = _this._checkVal(by.as, b[by.by]);
                return helpers_1.naturalCompare(aa.toString(), bb.toString());
            };
            this._sort(array, by);
        }
    };
    Sort.prototype._checkVal = function (method, val) {
        return method ? method.call(this, val) : val;
    };
    Sort.prototype._sort = function (arr, conf) {
        var _this = this;
        var dir = {
            asc: 1,
            desc: -1,
        };
        return arr.sort(function (a, b) {
            return conf.rule.call(_this, a, b) * (dir[conf.dir] || dir.asc);
        });
    };
    return Sort;
}());
exports.Sort = Sort;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var datacollection_1 = __webpack_require__(20);
var dataproxy_1 = __webpack_require__(9);
var helpers_1 = __webpack_require__(8);
var types_1 = __webpack_require__(7);
function addToOrder(store, obj, parent, index) {
    if (index !== undefined && index !== -1 && store[parent] && store[parent][index]) {
        store[parent].splice(index, 0, obj);
    }
    else {
        if (!store[parent]) {
            store[parent] = [];
        }
        store[parent].push(obj);
    }
}
var TreeCollection = /** @class */ (function (_super) {
    __extends(TreeCollection, _super);
    function TreeCollection(config, events) {
        var _a;
        var _this = _super.call(this, config, events) || this;
        var root = (_this._root = "_ROOT_" + core_1.uid());
        _this._childs = (_a = {}, _a[root] = [], _a);
        _this._initChilds = null;
        return _this;
    }
    TreeCollection.prototype.add = function (obj, index, parent) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        if (typeof obj !== "object") {
            obj = {
                value: obj,
            };
        }
        if (Array.isArray(obj)) {
            return obj.map(function (element, key) {
                return _this._add(element, index, parent, key);
            });
        }
        else {
            return this._add(obj, index, parent);
        }
    };
    TreeCollection.prototype.getRoot = function () {
        return this._root;
    };
    TreeCollection.prototype.getParent = function (id, asObj) {
        if (asObj === void 0) { asObj = false; }
        if (!this._pull[id]) {
            return null;
        }
        var parent = this._pull[id].parent;
        return asObj ? this._pull[parent] : parent;
    };
    TreeCollection.prototype.getItems = function (id) {
        if (this._childs && this._childs[id]) {
            return this._childs[id];
        }
        return [];
    };
    TreeCollection.prototype.getLength = function (id) {
        if (id === void 0) { id = this._root; }
        if (!this._childs[id]) {
            return null;
        }
        return this._childs[id].length;
    };
    TreeCollection.prototype.removeAll = function (id) {
        var _a;
        if (!id) {
            _super.prototype.removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
        else if (this._childs[id]) {
            var childs = __spreadArrays(this._childs[id]);
            for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                var child = childs_1[_i];
                this.remove(child.id);
            }
        }
    };
    TreeCollection.prototype.getIndex = function (id) {
        var parent = this.getParent(id);
        if (!parent || !this._childs[parent]) {
            return -1;
        }
        return core_1.findIndex(this._childs[parent], function (item) { return item.id === id; });
    };
    TreeCollection.prototype.sort = function (by) {
        var _this = this;
        if (!by) {
            this._childs = {};
            // [dirty]
            this._parse_data(Object.keys(this._pull).map(function (key) { return _this._pull[key]; }));
            if (this._filters) {
                for (var key in this._filters) {
                    var filter = this._filters[key];
                    this.filter(filter.rule, filter.config);
                }
            }
        }
        else {
            for (var key in this._childs) {
                this._sort.sort(this._childs[key], by);
            }
            if (this._initChilds && Object.keys(this._initChilds).length) {
                for (var key in this._initChilds) {
                    this._sort.sort(this._initChilds[key], by);
                }
            }
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.filter = function (rule, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!rule) {
            this.restoreOrder();
            return;
        }
        if (!this._initChilds) {
            this._initChilds = this._childs;
        }
        config.type = config.type || types_1.TreeFilterType.all;
        // [todo] we can store multiple filter rules, like in datacollection
        this._filters = {};
        this._filters._ = {
            rule: rule,
            config: config,
        };
        var newChilds = {};
        this._recursiveFilter(rule, config, this._root, 0, newChilds);
        Object.keys(newChilds).forEach(function (key) {
            var parentId = _this.getParent(key);
            var current = _this.getItem(key);
            while (parentId) {
                if (!newChilds[parentId]) {
                    newChilds[parentId] = [];
                }
                if (current && !newChilds[parentId].find(function (x) { return x.id === current.id; })) {
                    newChilds[parentId].push(current);
                }
                current = _this.getItem(parentId);
                parentId = _this.getParent(parentId);
            }
        });
        this._childs = newChilds;
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.restoreOrder = function () {
        if (this._initChilds) {
            this._childs = this._initChilds;
            this._initChilds = null;
        }
        this.events.fire(types_1.DataEvents.change);
    };
    TreeCollection.prototype.copy = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._copy(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._copy(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.move = function (id, index, target, targetId) {
        var _this = this;
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (id instanceof Array) {
            return id.map(function (elementId, key) {
                return _this._move(elementId, index, target, targetId, key);
            });
        }
        else {
            return this._move(id, index, target, targetId);
        }
    };
    TreeCollection.prototype.forEach = function (cb, parent, level) {
        if (parent === void 0) { parent = this._root; }
        if (level === void 0) { level = Infinity; }
        if (!this.haveItems(parent) || level < 1) {
            return;
        }
        var array = this._childs[parent];
        for (var i = 0; i < array.length; i++) {
            cb.call(this, array[i], i, array);
            if (this.haveItems(array[i].id)) {
                this.forEach(cb, array[i].id, --level);
            }
        }
    };
    TreeCollection.prototype.eachChild = function (id, cb, direct, checkItem) {
        if (direct === void 0) { direct = true; }
        if (checkItem === void 0) { checkItem = function () { return true; }; }
        if (!this.haveItems(id)) {
            return;
        }
        for (var i = 0; i < this._childs[id].length; i++) {
            cb.call(this, this._childs[id][i], i);
            if (direct && checkItem(this._childs[id][i])) {
                this.eachChild(this._childs[id][i].id, cb, direct, checkItem);
            }
        }
    };
    TreeCollection.prototype.getNearId = function (id) {
        return id; // for selection
    };
    TreeCollection.prototype.loadItems = function (id, driver) {
        var _this = this;
        if (driver === void 0) { driver = "json"; }
        var url = this.config.autoload + "?id=" + id;
        var proxy = new dataproxy_1.DataProxy(url);
        proxy.load().then(function (data) {
            driver = helpers_1.toDataDriver(driver);
            data = driver.toJsonArray(data);
            _this._parse_data(data, id);
            _this.events.fire(types_1.DataEvents.change);
        });
    };
    TreeCollection.prototype.refreshItems = function (id, driver) {
        if (driver === void 0) { driver = "json"; }
        this.removeAll(id);
        this.loadItems(id, driver);
    };
    TreeCollection.prototype.eachParent = function (id, cb, self) {
        if (self === void 0) { self = false; }
        var item = this.getItem(id);
        if (!item) {
            return;
        }
        if (self) {
            cb.call(this, item);
        }
        if (item.parent === this._root) {
            return;
        }
        var parent = this.getItem(item.parent);
        cb.call(this, parent);
        this.eachParent(item.parent, cb);
    };
    TreeCollection.prototype.haveItems = function (id) {
        return id in this._childs;
    };
    TreeCollection.prototype.canCopy = function (id, target) {
        if (id === target) {
            return false;
        }
        var canCopy = true;
        this.eachParent(target, function (item) { return (item.id === id ? (canCopy = false) : null); }); // locate return string
        return canCopy;
    };
    TreeCollection.prototype.serialize = function (driver, checkItem) {
        if (driver === void 0) { driver = types_1.DataDriver.json; }
        var data = this._serialize(this._root, checkItem);
        var dataDriver = helpers_1.toDataDriver(driver);
        if (dataDriver) {
            return dataDriver.serialize(data);
        }
    };
    TreeCollection.prototype.getId = function (index, parent) {
        if (parent === void 0) { parent = this._root; }
        if (!this._childs[parent] || !this._childs[parent][index]) {
            return;
        }
        return this._childs[parent][index].id;
    };
    // Non public API from suite_6.4
    TreeCollection.prototype.map = function (cb, parent, direct) {
        if (parent === void 0) { parent = this._root; }
        if (direct === void 0) { direct = true; }
        var result = [];
        if (!this.haveItems(parent)) {
            return result;
        }
        for (var i = 0; i < this._childs[parent].length; i++) {
            result.push(cb.call(this, this._childs[parent][i], i, this._childs));
            if (direct) {
                var childResult = this.map(cb, this._childs[parent][i].id, direct);
                result = result.concat(childResult);
            }
        }
        return result;
    };
    TreeCollection.prototype._add = function (obj, index, parent, key) {
        if (index === void 0) { index = -1; }
        if (parent === void 0) { parent = this._root; }
        obj.parent = obj.parent ? obj.parent.toString() : parent;
        if (key > 0 && index !== -1) {
            index = index + 1;
        }
        var id = _super.prototype._add.call(this, obj, index);
        if (Array.isArray(obj.items)) {
            for (var _i = 0, _a = obj.items; _i < _a.length; _i++) {
                var item = _a[_i];
                this.add(item, -1, obj.id);
            }
        }
        return id;
    };
    TreeCollection.prototype._copy = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        var currentChilds = this._childs[id];
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target === this && !this.canCopy(id, targetId)) {
            return null;
        }
        var itemCopy = helpers_1.copyWithoutInner(this.getItem(id), { items: true });
        if (target.exists(id)) {
            itemCopy.id = core_1.uid();
        }
        if (!helpers_1.isTreeCollection(target)) {
            target.add(itemCopy, index);
            return;
        }
        if (this.exists(id)) {
            itemCopy.parent = targetId;
            if (target !== this && targetId === this._root) {
                itemCopy.parent = target.getRoot();
            }
            target.add(itemCopy, index);
            id = itemCopy.id;
        }
        if (currentChilds) {
            for (var _i = 0, currentChilds_1 = currentChilds; _i < currentChilds_1.length; _i++) {
                var child = currentChilds_1[_i];
                var childId = child.id;
                var childIndex = this.getIndex(childId);
                if (typeof id === "string") {
                    this.copy(childId, childIndex, target, id);
                }
            }
        }
        return id;
    };
    TreeCollection.prototype._move = function (id, index, target, targetId, key) {
        if (target === void 0) { target = this; }
        if (targetId === void 0) { targetId = this._root; }
        if (!this.exists(id)) {
            return null;
        }
        if (key) {
            index = index === -1 ? -1 : index + key;
        }
        if (target !== this) {
            if (!helpers_1.isTreeCollection(target)) {
                // move to datacollection
                target.add(helpers_1.copyWithoutInner(this.getItem(id)), index);
                this.remove(id);
                return;
            }
            var returnId = this.copy(id, index, target, targetId);
            this.remove(id);
            return returnId;
        }
        // move inside
        if (!this.canCopy(id, targetId)) {
            return null;
        }
        var parent = this.getParent(id);
        var parentIndex = this.getIndex(id);
        // get item from parent array and move to target array
        var spliced = this._childs[parent].splice(parentIndex, 1)[0];
        spliced.parent = targetId; // need for next moving, ... not best solution, may be full method for get item
        if (!this._childs[parent].length) {
            delete this._childs[parent];
        }
        if (!this.haveItems(targetId)) {
            this._childs[targetId] = [];
        }
        if (index === -1) {
            index = this._childs[targetId].push(spliced);
        }
        else {
            this._childs[targetId].splice(index, 0, spliced);
        }
        this.events.fire(types_1.DataEvents.change);
        return id;
    };
    TreeCollection.prototype._removeAll = function (id) {
        var _a;
        if (id) {
            var childs = __spreadArrays(this._childs[id]);
            for (var _i = 0, childs_2 = childs; _i < childs_2.length; _i++) {
                var child = childs_2[_i];
                this.remove(child.id);
            }
        }
        else {
            _super.prototype._removeAll.call(this);
            var root = this._root;
            this._initChilds = null;
            this._childs = (_a = {}, _a[root] = [], _a);
        }
    };
    TreeCollection.prototype._removeCore = function (id) {
        if (this._pull[id]) {
            var parent_1 = this.getParent(id);
            this._childs[parent_1] = this._childs[parent_1].filter(function (item) { return item.id !== id; });
            if (parent_1 !== this._root && !this._childs[parent_1].length) {
                delete this._childs[parent_1];
            }
            if (this._initChilds && this._initChilds[parent_1]) {
                this._initChilds[parent_1] = this._initChilds[parent_1].filter(function (item) { return item.id !== id; });
                if (parent_1 !== this._root && !this._initChilds[parent_1].length) {
                    delete this._initChilds[parent_1];
                }
            }
            this._fastDeleteChilds(this._childs, id);
            if (this._initChilds) {
                this._fastDeleteChilds(this._initChilds, id);
            }
        }
    };
    TreeCollection.prototype._addToOrder = function (_order, obj, index) {
        var childs = this._childs;
        var initChilds = this._initChilds;
        var parent = obj.parent;
        this._pull[obj.id] = obj;
        addToOrder(childs, obj, parent, index);
        if (initChilds) {
            addToOrder(initChilds, obj, parent, index);
        }
    };
    TreeCollection.prototype._parse_data = function (data, parent) {
        if (parent === void 0) { parent = this._root; }
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var obj = data_1[_i];
            if (this.config.init) {
                obj = this.config.init(obj);
            }
            if (typeof obj !== "object") {
                obj = {
                    value: obj,
                };
            }
            obj.id = obj.id ? obj.id.toString() : core_1.uid();
            obj.parent = obj.parent ? obj.parent.toString() : parent;
            this._pull[obj.id] = obj;
            if (!this._childs[obj.parent]) {
                this._childs[obj.parent] = [];
            }
            this._childs[obj.parent].push(obj);
            if (obj.items && obj.items instanceof Object) {
                this._parse_data(obj.items, obj.id);
            }
        }
    };
    TreeCollection.prototype._fastDeleteChilds = function (target, id) {
        if (this._pull[id]) {
            delete this._pull[id];
        }
        if (!target[id]) {
            return;
        }
        for (var i = 0; i < target[id].length; i++) {
            this._fastDeleteChilds(target, target[id][i].id);
        }
        delete target[id];
    };
    TreeCollection.prototype._recursiveFilter = function (rule, config, current, level, newChilds) {
        var _this = this;
        var childs = this._childs[current];
        if (!childs) {
            return;
        }
        var condition = function (item) {
            switch (config.type) {
                case types_1.TreeFilterType.all: {
                    return true;
                }
                case types_1.TreeFilterType.level: {
                    return level === config.level;
                }
                case types_1.TreeFilterType.leafs: {
                    return !_this.haveItems(item.id);
                }
            }
        };
        if (typeof rule === "function") {
            var customRule = function (item) { return condition(item) && rule(item); };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        else if (rule.by && rule.match) {
            var customRule = function (item) {
                return condition(item) &&
                    item[rule.by] &&
                    item[rule.by]
                        .toString()
                        .toLowerCase()
                        .indexOf(rule.match.toString().toLowerCase()) !== -1;
            };
            var filtered = childs.filter(customRule);
            if (filtered.length) {
                newChilds[current] = filtered;
            }
        }
        for (var _i = 0, childs_3 = childs; _i < childs_3.length; _i++) {
            var child = childs_3[_i];
            this._recursiveFilter(rule, config, child.id, level + 1, newChilds);
        }
    };
    TreeCollection.prototype._serialize = function (parent, fn) {
        var _this = this;
        if (parent === void 0) { parent = this._root; }
        return this.map(function (item) {
            var itemCopy = {};
            for (var key in item) {
                if (key === "parent" || key === "items") {
                    continue;
                }
                itemCopy[key] = item[key];
            }
            if (fn) {
                itemCopy = fn(itemCopy);
            }
            if (_this.haveItems(item.id)) {
                itemCopy.items = _this._serialize(item.id, fn);
            }
            return itemCopy;
        }, parent, false);
    };
    return TreeCollection;
}(datacollection_1.DataCollection));
exports.TreeCollection = TreeCollection;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var html_1 = __webpack_require__(2);
var CollectionStore_1 = __webpack_require__(57);
var types_1 = __webpack_require__(7);
var helpers_1 = __webpack_require__(8);
function getPosition(e) {
    var y = e.clientY;
    var element = html_1.locateNode(e);
    if (!element) {
        return null;
    }
    var treeLine = element.childNodes[0];
    var _a = treeLine.getBoundingClientRect(), top = _a.top, height = _a.height;
    return (y - top) / height;
}
function dragEventContent(element, elements, exhaustiveList) {
    if (exhaustiveList === void 0) { exhaustiveList = false; }
    var rect = element.getBoundingClientRect();
    var ghost = document.createElement("div");
    var clone = element.cloneNode(true);
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";
    clone.style.maxHeight = rect.height + "px";
    clone.style.fontSize = window.getComputedStyle(element.parentElement).fontSize;
    clone.style.opacity = "0.8";
    clone.style.fontSize = window.getComputedStyle(element.parentElement).fontSize;
    if (!exhaustiveList || !elements || !elements.length) {
        ghost.appendChild(clone);
    }
    if (elements && elements.length) {
        elements.forEach(function (node, key) {
            var nodeClone = node.cloneNode(true);
            nodeClone.style.width = rect.width + "px";
            nodeClone.style.height = rect.height + "px";
            nodeClone.style.maxHeight = rect.height + "px";
            nodeClone.style.top = (key + 1) * 12 - rect.height - rect.height * key + "px";
            nodeClone.style.left = (key + 1) * 12 + "px";
            nodeClone.style.opacity = "0.6";
            nodeClone.style.zIndex = "" + (-key - 1);
            ghost.appendChild(nodeClone);
        });
    }
    ghost.className = "dhx_drag-ghost";
    return ghost;
}
var DragManager = /** @class */ (function () {
    function DragManager() {
        var _this = this;
        this._transferData = {};
        this._canMove = true;
        this._selectedIds = [];
        this._onMouseMove = function (e) {
            if (!_this._transferData.id) {
                return;
            }
            var pageX = e.pageX, pageY = e.pageY;
            if (!_this._transferData.ghost) {
                if (Math.abs(_this._transferData.x - pageX) < 3 && Math.abs(_this._transferData.y - pageY) < 3) {
                    return;
                }
                else {
                    var ghost = _this._onDragStart(_this._transferData.id, _this._transferData.targetId);
                    if (!ghost) {
                        _this._endDrop();
                        return;
                    }
                    else {
                        _this._transferData.ghost = ghost;
                        document.body.appendChild(_this._transferData.ghost);
                    }
                }
            }
            _this._moveGhost(pageX, pageY);
            _this._onDrag(e);
        };
        this._onMouseUp = function () {
            if (!_this._transferData.x) {
                return;
            }
            if (_this._transferData.ghost) {
                _this._removeGhost();
                _this._onDrop();
            }
            else {
                _this._endDrop();
            }
            document.removeEventListener("mousemove", _this._onMouseMove);
            document.removeEventListener("mouseup", _this._onMouseUp);
        };
    }
    DragManager.prototype.setItem = function (id, item) {
        CollectionStore_1.collectionStore.setItem(id, item);
    };
    DragManager.prototype.onMouseDown = function (e, selectedIds, itemsForGhost) {
        // onmousedown only for target objects
        if (e.which !== 1) {
            return;
        }
        e.preventDefault();
        document.addEventListener("mousemove", this._onMouseMove);
        document.addEventListener("mouseup", this._onMouseUp);
        var item = html_1.locateNode(e, "dhx_id");
        var id = item && item.getAttribute("dhx_id");
        var targetId = html_1.locate(e, "dhx_widget_id");
        if (selectedIds && selectedIds.includes(id) && selectedIds.length > 1) {
            this._selectedIds = selectedIds;
            this._itemsForGhost = itemsForGhost;
        }
        else {
            this._selectedIds = [];
            this._itemsForGhost = null;
        }
        if (id && targetId) {
            var _a = html_1.getBox(item), left = _a.left, top_1 = _a.top;
            this._transferData.initXOffset = e.pageX - left;
            this._transferData.initYOffset = e.pageY - top_1;
            this._transferData.x = e.pageX;
            this._transferData.y = e.pageY;
            this._transferData.targetId = targetId;
            this._transferData.id = id;
            this._transferData.item = item;
        }
    };
    DragManager.prototype._moveGhost = function (x, y) {
        if (this._transferData.ghost) {
            this._transferData.ghost.style.left = x - this._transferData.initXOffset + "px";
            this._transferData.ghost.style.top = y - this._transferData.initYOffset + "px";
        }
    };
    DragManager.prototype._removeGhost = function () {
        document.body.removeChild(this._transferData.ghost);
    };
    DragManager.prototype._onDrop = function () {
        if (!this._canMove) {
            this._endDrop();
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        var config = target && target.config;
        if (!target || config.dragMode === "source") {
            this._endDrop();
            return;
        }
        if (target.events.fire(types_1.DragEvents.beforeDrop, [
            this._lastId,
            this._transferData.target,
            this._transferData.id,
        ])) {
            var to = {
                id: this._lastId,
                target: target,
            };
            var from = {
                id: this._transferData.id,
                target: this._transferData.target,
            };
            this._move(from, to);
            to.target.events.fire(types_1.DragEvents.dropComplete, [to.id, this._transferData.dropPosition]);
        }
        this._endDrop();
    };
    DragManager.prototype._onDragStart = function (id, targetId) {
        var target = CollectionStore_1.collectionStore.getItem(targetId);
        var config = target.config;
        if (config.dragMode === "target") {
            return null;
        }
        var item = target.data.getItem(id);
        var ghost = dragEventContent(this._transferData.item, this._itemsForGhost, config.dragItem === "column");
        var ans = target.events.fire(types_1.DragEvents.beforeDrag, [item, ghost, id]);
        if (!ans || !id) {
            return null;
        }
        target.events.fire(types_1.DragEvents.dragStart, [id, this._selectedIds]);
        this._toggleTextSelection(true);
        this._transferData.target = target;
        this._transferData.dragConfig = config;
        return ghost;
    };
    DragManager.prototype._onDrag = function (e) {
        var clientX = e.clientX, clientY = e.clientY;
        var element = document.elementFromPoint(clientX, clientY);
        var collectionId = html_1.locate(element, "dhx_widget_id");
        if (!collectionId) {
            if (this._canMove) {
                this._cancelCanDrop();
            }
            return;
        }
        var target = CollectionStore_1.collectionStore.getItem(collectionId);
        var id = html_1.locate(element, "dhx_id");
        if (!id) {
            this._cancelCanDrop();
            this._lastCollectionId = collectionId;
            this._lastId = null;
            this._canDrop();
            return;
        }
        if (target.config.dropBehaviour === "complex") {
            var pos = getPosition(e);
            if (pos <= 0.25) {
                this._transferData.dropPosition = types_1.DropPosition.top;
            }
            else if (pos >= 0.75) {
                this._transferData.dropPosition = types_1.DropPosition.bot;
            }
            else {
                this._transferData.dropPosition = types_1.DropPosition.in;
            }
        }
        else if (this._lastId === id && this._lastCollectionId === collectionId) {
            return;
        }
        var from = {
            id: this._transferData.id,
            target: this._transferData.target,
        };
        if (target.config.dragMode === "source") {
            return;
        }
        from.target.events.fire(types_1.DragEvents.dragOut, [id, target]);
        if (collectionId !== this._transferData.targetId ||
            !helpers_1.isTreeCollection(from.target.data) ||
            (helpers_1.isTreeCollection(from.target.data) && from.target.data.canCopy(from.id, id))) {
            this._cancelCanDrop(); // clear last
            this._lastId = id;
            this._lastCollectionId = collectionId;
            var canMove = from.target.events.fire(types_1.DragEvents.dragIn, [
                id,
                this._transferData.dropPosition,
                CollectionStore_1.collectionStore.getItem(collectionId),
            ]);
            if (canMove) {
                this._canDrop();
            }
        }
        else {
            this._cancelCanDrop();
        }
    };
    DragManager.prototype._move = function (from, to) {
        var fromData = from.target.data;
        var toData = to.target.data;
        var index = 0;
        var targetId = to.id;
        var behaviour = helpers_1.isTreeCollection(toData) ? to.target.config.dropBehaviour : undefined;
        var gridConfig = from.target.config.columns
            ? from.target.config
            : undefined;
        var isColumnDrag = gridConfig &&
            (gridConfig.dragItem === "complex" || gridConfig.dragItem === "column") &&
            gridConfig.columns.map(function (c) { return c.id; }).filter(function (id) { return id === from.id || id === to.id; }).length;
        if (isColumnDrag && from.target === to.target && from.id !== to.id) {
            var grid = from.target;
            var currentCols = grid.config.columns.map(function (c) { return (__assign({}, c)); });
            var sourceIndex = currentCols.findIndex(function (c) { return c.id === from.id; });
            var targetIndex = currentCols.findIndex(function (c) { return c.id === to.id; });
            currentCols.splice(targetIndex, 0, currentCols.splice(sourceIndex, 1)[0]);
            grid.setColumns(currentCols);
            grid.paint();
            return;
        }
        switch (behaviour) {
            case "child":
                break;
            case "sibling":
                targetId = toData.getParent(targetId);
                index = toData.getIndex(to.id) + 1;
                break;
            case "complex": {
                var dropPosition = this._transferData.dropPosition;
                if (dropPosition === types_1.DropPosition.top) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id);
                }
                else if (dropPosition === types_1.DropPosition.bot) {
                    targetId = toData.getParent(targetId);
                    index = toData.getIndex(to.id) + 1;
                }
                break;
            }
            default:
                // list move
                if (!to.id) {
                    index = -1;
                }
                else if (from.target === to.target && toData.getIndex(from.id) < toData.getIndex(to.id)) {
                    index = toData.getIndex(to.id) - 1;
                }
                else {
                    index = toData.getIndex(to.id);
                }
        }
        if (this._transferData.dragConfig.dragCopy) {
            if (this._selectedIds instanceof Array && this._selectedIds.length > 1) {
                this._selectedIds.map(function (selctedId) {
                    fromData.copy(selctedId, index, toData, targetId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.copy(from.id, index, toData, targetId);
            }
        }
        else {
            if (this._selectedIds instanceof Array && this._selectedIds.length > 1) {
                this._selectedIds.map(function (selctedId) {
                    fromData.move(selctedId, index, toData, targetId);
                    if (index > -1) {
                        index++;
                    }
                });
            }
            else {
                fromData.move(from.id, index, toData, targetId); // typescript bug??
            }
        }
    };
    DragManager.prototype._endDrop = function () {
        this._toggleTextSelection(false);
        if (this._transferData.target) {
            this._transferData.target.events.fire(types_1.DragEvents.dragEnd, [
                this._transferData.id,
                this._selectedIds,
            ]);
        }
        this._cancelCanDrop();
        this._canMove = true;
        this._transferData = {};
        this._lastId = null;
        this._lastCollectionId = null;
    };
    DragManager.prototype._cancelCanDrop = function () {
        this._canMove = false;
        var collection = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (collection && this._lastId) {
            collection.events.fire(types_1.DragEvents.cancelDrop, [this._lastId]);
        }
        this._lastCollectionId = null;
        this._lastId = null;
    };
    DragManager.prototype._canDrop = function () {
        this._canMove = true;
        var target = CollectionStore_1.collectionStore.getItem(this._lastCollectionId);
        if (target && this._lastId) {
            target.events.fire(types_1.DragEvents.canDrop, [this._lastId, this._transferData.dropPosition]);
        }
    };
    DragManager.prototype._toggleTextSelection = function (add) {
        if (add) {
            document.body.classList.add("dhx_no-select");
        }
        else {
            document.body.classList.remove("dhx_no-select");
        }
    };
    return DragManager;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.dragManager = dhx.dragManager || new DragManager();
exports.dragManager = dhx.dragManager;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollectionStore = /** @class */ (function () {
    function CollectionStore() {
        this._store = {};
    }
    CollectionStore.prototype.setItem = function (id, target) {
        this._store[id] = target;
    };
    CollectionStore.prototype.getItem = function (id) {
        if (!this._store[id]) {
            return null;
        }
        return this._store[id];
    };
    return CollectionStore;
}());
var dhx = (window.dhxHelpers = window.dhxHelpers || {});
dhx.collectionStore = dhx.collectionStore || new CollectionStore();
exports.collectionStore = dhx.collectionStore;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dataproxy_1 = __webpack_require__(9);
var core_1 = __webpack_require__(1);
var ajax_1 = __webpack_require__(14);
var LazyDataProxy = /** @class */ (function (_super) {
    __extends(LazyDataProxy, _super);
    function LazyDataProxy(url, config) {
        var _this = _super.call(this, url) || this;
        _this.config = core_1.extend({
            from: 0,
            limit: 50,
            delay: 50,
            prepare: 0,
        }, config);
        _this.updateUrl(url, { from: _this.config.from, limit: _this.config.limit });
        return _this;
    }
    LazyDataProxy.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this._timeout) {
                ajax_1.ajax.get(_this.url, { responseType: "text" }).then(resolve);
                _this._cooling = true;
                _this._timeout = setTimeout(function () {
                    return;
                });
            }
            else {
                clearTimeout(_this._timeout);
                _this._timeout = setTimeout(function () {
                    ajax_1.ajax.get(_this.url, { responseType: "text" }).then(resolve);
                    _this._cooling = true;
                }, _this.config.delay);
                if (_this._cooling) {
                    resolve(null);
                    _this._cooling = false;
                }
            }
        });
    };
    return LazyDataProxy;
}(dataproxy_1.DataProxy));
exports.LazyDataProxy = LazyDataProxy;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(4);
var types_1 = __webpack_require__(15);
var types_2 = __webpack_require__(7);
var Selection = /** @class */ (function () {
    function Selection(_config, data, events) {
        var _this = this;
        this.events = events || new events_1.EventSystem(this);
        this._data = data;
        this._data.events.on(types_2.DataEvents.removeAll, function () {
            _this._selected = null;
        });
        this._data.events.on(types_2.DataEvents.change, function () {
            if (_this._selected) {
                var near = _this._data.getNearId(_this._selected);
                if (near !== _this._selected) {
                    _this._selected = null;
                    if (near) {
                        _this.add(near);
                    }
                }
            }
        });
    }
    Selection.prototype.getId = function () {
        return this._selected;
    };
    Selection.prototype.getItem = function () {
        if (this._selected) {
            return this._data.getItem(this._selected);
        }
        return null;
    };
    Selection.prototype.remove = function (id) {
        id = id || this._selected;
        if (!id) {
            return true;
        }
        if (this.events.fire(types_1.SelectionEvents.beforeUnSelect, [id])) {
            this._data.update(id, { $selected: false });
            this._selected = null;
            this.events.fire(types_1.SelectionEvents.afterUnSelect, [id]);
            return true;
        }
        return false;
    };
    Selection.prototype.add = function (id) {
        if (this._selected === id) {
            return;
        }
        this.remove();
        if (this.events.fire(types_1.SelectionEvents.beforeSelect, [id])) {
            this._selected = id;
            this._data.update(id, { $selected: true });
            this.events.fire(types_1.SelectionEvents.afterSelect, [id]);
        }
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(5);
var Exporter_1 = __webpack_require__(61);
var data_1 = __webpack_require__(24);
var main_1 = __webpack_require__(10);
var Selection_1 = __webpack_require__(62);
var Hotkey_1 = __webpack_require__(63);
var types_1 = __webpack_require__(3);
var render_1 = __webpack_require__(64);
var core_1 = __webpack_require__(1);
var ts_calendar_1 = __webpack_require__(27);
var content_1 = __webpack_require__(94);
var columnsResizer_1 = __webpack_require__(95);
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(container, config) {
        var _this = _super.call(this, container, config) || this;
        _this.config = core_1.extend({
            rowHeight: 40,
            headerRowHeight: 40,
            footerRowHeight: 40,
            keyNavigation: true,
            sortable: true,
            columns: [],
            data: [],
            tooltip: true,
            // TODO: remove suite_7.0
            headerSort: true,
        }, config);
        _this.content = content_1.getContent();
        _this._scroll = {
            top: 0,
            left: 0,
        };
        // TODO: remove suite_7.0
        _this.config.autoWidth = _this.config.autoWidth || _this.config.fitToContainer;
        _this.config.adjust = _this.config.adjust || _this.config.columnsAutoWidth;
        _this.config.editable = _this.config.editable || _this.config.editing;
        if (!_this.config.sortable || !_this.config.headerSort) {
            _this.config.sortable = false;
        }
        var htmlEvents = {
            onclick: html_1.eventHandler(function (ev) { return html_1.locate(ev); }, {
                "dhx_grid-header-cell": function (_ev, item) {
                    var isResizable = _ev.target.getAttribute("dhx_resized");
                    var column = _this._getColumn(item);
                    if (column && main_1.isSortable(_this.config, column) && !isResizable) {
                        _this.events.fire(types_1.GridEvents.sort, [item]);
                    }
                },
                "dhx_grid-expand-cell": function (_ev, item) {
                    if (_ev.target.classList.contains("dhx_grid-expand-cell-icon")) {
                        _this.events.fire(types_1.GridEvents.expand, [item]);
                    }
                },
            }),
            onscroll: function (e) {
                // [TODO] Hide loading data to render
                _this._lazyLoad(e);
                _this.events.fire(types_1.GridEvents.scroll, [
                    {
                        y: e.target.scrollTop,
                        x: e.target.scrollLeft,
                    },
                ]);
            },
        };
        if (_this.config.dragMode || _this.config.dragItem) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
            if (!_this.config.dragItem) {
                _this.config.dragItem = "row";
            }
            if (!_this.config.dragMode) {
                _this.config.dragMode = "both";
            }
        }
        _this._init();
        if (_this.config.columns) {
            _this._parseColumns();
        }
        if (_this.config.data &&
            _this.config.data instanceof Array &&
            _this.config.data.length &&
            _this.config.columns) {
            _this.data.parse(_this.config.data);
        }
        if (_this.config.selection) {
            _this.selection = new Selection_1.Selection(_this);
        }
        var view = dom_1.create({
            render: function (vm, obj) {
                return render_1.render(vm, obj, _this._currentData, htmlEvents, _this.selection, _this._uid);
            },
        }, _this);
        _this.mount(container, view);
        dom_1.awaitRedraw().then(function () {
            Hotkey_1.initHotkeys(_this);
        });
        if (config.autoEmptyRow && _this.data.getLength() === 0) {
            _this.data.add(_this.config.columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, {}));
            _this.paint();
        }
        return _this;
    }
    Grid.prototype.destructor = function () {
        this.unmount();
        this._destroyContent();
        this.events.events = {};
        this.events.context = null;
        this._currentData = this.data = this.config = this._scroll = this.content = null;
    };
    Grid.prototype.setColumns = function (columns) {
        this.config.columns = columns;
        this._parseColumns();
        this._checkMarks();
        this.paint();
    };
    Grid.prototype.addRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css || "";
        if (!styles.match(new RegExp(css, "g"))) {
            item.$css = styles + (" " + css);
            var index = this._getRowIndex(id);
            if (index >= 0) {
                this._currentData[index].$css = item.$css;
            }
            this.paint();
        }
    };
    Grid.prototype.removeRowCss = function (id, css) {
        var item = this.data.getItem(id);
        var styles = item.$css ? item.$css.replace(css, "") : "";
        item.$css = styles;
        var index = this._getRowIndex(id);
        if (index >= 0) {
            this._currentData[index].$css = item.$css;
        }
        this.paint();
    };
    Grid.prototype.addCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
                column.$cellCss[row] += column.$cellCss[row].match(new RegExp(css, "g")) ? "" : " " + css;
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = css + " ";
            }
            this.paint();
        }
    };
    Grid.prototype.removeCellCss = function (row, col, css) {
        var column = this._getColumn(col);
        if (column) {
            if (column.$cellCss[row]) {
                column.$cellCss[row] = column.$cellCss[row].replace(css, "");
                this.paint();
            }
            else if (this.data.getItem(row)) {
                column.$cellCss[row] = "";
            }
        }
    };
    Grid.prototype.showColumn = function (colId) {
        var column = this._getColumn(colId);
        if (column && column.hidden) {
            column.hidden = false;
            this.config.$totalWidth += column.width;
            this.paint();
        }
    };
    Grid.prototype.hideColumn = function (colId) {
        var column = this._getColumn(colId);
        if (column && !column.hidden) {
            column.hidden = true;
            this.config.$totalWidth -= column.width;
            this.paint();
        }
    };
    Grid.prototype.isColumnHidden = function (colId) {
        var column = this._getColumn(colId);
        if (column) {
            return !!column.hidden;
        }
    };
    Grid.prototype.getScrollState = function () {
        return {
            x: this._scroll.left,
            y: this._scroll.top,
        };
    };
    Grid.prototype.scroll = function (x, y) {
        var gridBody = this.getRootView().refs.grid_body.el;
        gridBody.scrollLeft = typeof x === "number" ? x : gridBody.scrollLeft;
        gridBody.scrollTop = typeof y === "number" ? y : gridBody.scrollTop;
    };
    Grid.prototype.scrollTo = function (row, col) {
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var colInd = core_1.findIndex(columns, function (obj) { return obj.id === col; });
        var fixedColsWidth = this.config.splitAt
            ? columns.slice(0, this.config.splitAt).reduce(function (total, c) { return (total += c.width); }, 0)
            : 0;
        var x = columns.slice(0, colInd).reduce(function (total, c) { return (total += c.width); }, 0) - fixedColsWidth;
        var y = this.data.getIndex(row) * this.config.rowHeight;
        var scrollState = this.getScrollState();
        var gridRight = this.config.width + scrollState.x;
        var gridBottom = this.config.height + scrollState.y - this.config.headerRowHeight * this.config.$headerLevel;
        var cellTop = y - scrollState.y - this.config.rowHeight;
        var cellLeft = x - scrollState.x - columns[colInd].width;
        var cellBottom = y + this.config.rowHeight * 2 + 18 - gridBottom;
        var cellRight = x + columns[colInd].width * 2 + 18 - gridRight;
        var scrollTop = cellTop > 0 && cellBottom < 0 ? 0 : cellTop < 0 ? cellTop : cellBottom;
        var scrollLeft = cellLeft > 0 && cellRight < 0 ? 0 : cellLeft < 0 ? cellLeft : cellRight;
        this.scroll(scrollLeft + scrollState.x, scrollTop + scrollState.y);
    };
    Grid.prototype.adjustColumnWidth = function (id, adjust) {
        var _this = this;
        if (adjust === void 0) { adjust = true; }
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var index = core_1.findIndex(columns, function (c) { return c.id === id; });
        var col = columns[index];
        var widthArr = [];
        if ((adjust === "header" || adjust === true) && col.header) {
            col.header.forEach(function (item) {
                if (item.text) {
                    widthArr.push(html_1.getStrSize(main_1.removeHTMLTags(item.text)).width + (main_1.isSortable(_this.config, col) ? 40 : 20));
                }
            });
        }
        if ((adjust === "footer" || adjust === true) && col.footer) {
            col.footer.forEach(function (item) {
                if (item.text || item.content) {
                    widthArr.push(html_1.getStrSize(main_1.removeHTMLTags(item.text || _this.content[item.content].toHtml(col, _this.config))).width + 20);
                }
            });
        }
        if (adjust === "data" || adjust === true) {
            this.data.map(function (row) {
                if (typeof row[col.id] === "string" || typeof row[col.id] === "number") {
                    widthArr.push(html_1.getStrSize(main_1.removeHTMLTags(row[col.id])).width + 20);
                }
            });
        }
        if (widthArr.length > 0) {
            this.config.$totalWidth = columns.reduce(function (t, column, i) {
                if (i === index) {
                    column.width = Math.max.apply(Math, widthArr);
                }
                return (t += column.hidden ? 0 : column.width);
            }, 0);
            this.paint();
        }
    };
    Grid.prototype.getCellRect = function (row, col) {
        var colums = this.config.columns.filter(function (col) { return !col.hidden; });
        var colInd = core_1.findIndex(colums, function (obj) { return obj.id === col; });
        var rowInd = this._getRowIndex(row);
        var x = colums.slice(0, colInd).reduce(function (total, c) { return (total += c.width); }, 0);
        var y = rowInd * this.config.rowHeight;
        return {
            x: x,
            y: y,
            height: this.config.rowHeight,
            width: colums[colInd].width,
        };
    };
    Grid.prototype.getColumn = function (colId) {
        var id = core_1.findIndex(this.config.columns, function (col) { return col.id === colId; });
        if (id >= 0) {
            return this.config.columns[id];
        }
    };
    Grid.prototype.addSpan = function (spanObj) {
        this.config.spans = this.config.spans || [];
        var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + spanObj.row && "" + span.column === "" + spanObj.column; });
        if (index >= 0) {
            this.config.spans[index] = spanObj;
            return;
        }
        this.config.spans.push(spanObj);
    };
    Grid.prototype.getSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + row && "" + span.column === "" + col; });
            return this.config.spans[index];
        }
    };
    Grid.prototype.removeSpan = function (row, col) {
        if (this.config.spans) {
            var index = core_1.findIndex(this.config.spans, function (span) { return "" + span.row === "" + row && "" + span.column === "" + col; });
            this.config.spans.splice(index, 1);
        }
    };
    Grid.prototype.editCell = function (rowId, colId, editorType) {
        var row = this.data.getItem(rowId);
        var col = this.getColumn(colId);
        var colEditorType = col.editorType;
        if (!row || row[colId] === undefined) {
            ts_data_1.dhxWarning("item not found");
            return;
        }
        if (!editorType) {
            if (col.type === "date") {
                editorType = "datePicker";
            }
            if (col.type === "boolean") {
                editorType = "checkbox";
            }
            if (colEditorType) {
                editorType = colEditorType;
            }
        }
        if (!this.events.fire(types_1.GridEvents.beforeEditStart, [row, col, editorType])) {
            return;
        }
        if (this.config.$editable &&
            this.config.$editable.row === rowId &&
            this.config.$editable.col === colId &&
            this.config.$editable.editorType === editorType) {
            return;
        }
        this.config.$editable = {
            row: rowId,
            col: colId,
            editorType: editorType,
        };
        if (this.selection) {
            this.selection.setCell(rowId.toString(), colId.toString());
        }
        this.paint();
        this.events.fire(types_1.GridEvents.afterEditStart, [row, col, editorType]);
    };
    Grid.prototype.editEnd = function (withoutSave) {
        if (this.config.$editable && this.config.$editable.editor) {
            this.config.$editable.editor.endEdit(withoutSave);
        }
    };
    Grid.prototype.getSortingState = function () {
        return { dir: this._sortDir, by: this._sortBy };
    };
    // TODO: remove suite_7.0
    Grid.prototype.edit = function (rowId, colId, editorType) {
        this.editCell(rowId, colId, editorType);
    };
    Grid.prototype._parseColumns = function () {
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        data_1.normalizeColumns(columns);
        data_1.countColumns(this.config, columns);
    };
    Grid.prototype._parseData = function () {
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var firstItem = this.data.getId(0);
        if (firstItem) {
            if (columns.length) {
                this._checkColumns();
            }
            this._currentData = this.data.serialize() || [];
        }
        this._checkFilters();
        this._checkMarks();
        this._render();
    };
    Grid.prototype._checkColumns = function () {
        this._detectColsTypes();
    };
    Grid.prototype._createCollection = function (prep) {
        this.data = new ts_data_1.DataCollection({ prep: prep }, this.events);
    };
    Grid.prototype._getRowIndex = function (rowId) {
        return this.data.getIndex(rowId);
    };
    Grid.prototype._setEventHandlers = function () {
        var _this = this;
        var updater = function (updateObj) { return function (id, ids) {
            if (ids && ids instanceof Array) {
                ids.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
                return;
            }
            if (_this.data.exists(id)) {
                _this.data.update(id, updateObj);
            }
        }; };
        this.data.events.on(ts_data_1.DataEvents.load, function () {
            _this._parseData();
        });
        this.data.events.on(ts_data_1.DataEvents.change, function (_id, status, obj) {
            // [dirty]
            if (status === "remove" && obj.$emptyRow) {
                return;
            }
            _this._currentData = _this.data.map(function (el) { return el; }) || [];
            _this._detectColsTypes();
            _this._checkMarks();
            _this._adjustColumns();
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.move(emptyRow.id, _this.data.getLength() - 1);
                }
                else {
                    _this._addEmptyRow();
                }
            }
            _this._render();
        });
        this.data.events.on(ts_data_1.DataEvents.removeAll, function () {
            _this.config.columns.map(function (col) {
                col.header.map(function (cell) {
                    if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                        col.$uniqueData = [];
                    }
                });
            });
        });
        this.events.on(ts_data_1.DragEvents.canDrop, updater({ $drophere: true }));
        this.events.on(ts_data_1.DragEvents.cancelDrop, updater({ $drophere: undefined }));
        this.events.on(ts_data_1.DragEvents.dragStart, updater({ $dragtarget: true }));
        this.events.on(ts_data_1.DragEvents.dragEnd, updater({ $dragtarget: undefined }));
        this.events.on(types_1.GridEvents.sort, function (id) {
            if (id) {
                _this._sort(id);
            }
        });
        this.events.on(types_1.GridEvents.cellMouseDown, function (row, col, e) {
            if (_this.config.dragMode && _this.config.dragItem === "row" && !_this.config.$editable) {
                var item = html_1.locateNode(e, "dhx_id");
                var itemId = item && item.getAttribute("dhx_id");
                return ts_data_1.dragManager.onMouseDown(e, [itemId], [item]);
            }
        });
        // TODO: remove suite_7.0
        this.events.on(types_1.GridEvents.headerInput, function (val, colId, filter) {
            // [dirty]
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            _this.data.filter({
                by: colId,
                match: val,
                compare: _this.content[filter].match,
            }, {
                multiple: true,
            });
        });
        this.events.on(types_1.GridEvents.filterChange, function (val, colId, filter) {
            if (_this.config.autoEmptyRow) {
                var emptyRow = _this.data.find({ by: "$emptyRow", match: true });
                if (emptyRow) {
                    _this.data.remove(emptyRow.id);
                }
            }
            _this.data.filter({
                by: colId,
                match: val,
                compare: _this.content[filter].match,
            }, { multiple: true });
        });
        this.events.on(types_1.GridEvents.scroll, function (scrollState) {
            _this._scroll = { top: scrollState.y, left: scrollState.x };
            _this.paint();
        });
        this.events.on(types_1.GridEvents.cellDblClick, function (row, col) {
            if ((col.editable !== false && _this.config.editable) || col.editable) {
                _this.editCell(row.id, col.id, col.editorType);
            }
        });
        this.events.on(types_1.GridEvents.afterEditEnd, function (value, eRow, eCol) {
            var _a;
            var row;
            var col;
            if (!_this.config.$editable) {
                row = eRow.id;
                col = eCol.id;
            }
            else {
                row = _this.config.$editable.row;
                col = _this.config.$editable.col;
            }
            var item = _this.data.getItem(row);
            delete item.$emptyRow;
            if (value !== undefined) {
                _this.data.update(row, __assign(__assign({}, item), (_a = {}, _a[col] = value, _a)));
            }
            _this.config.$editable = null;
            _this._checkFilters();
            _this.paint();
        });
        this.events.on(types_1.GridEvents.headerCellMouseDown, function (col, e) {
            var target = e.target;
            var resizedColumn = target.getAttribute("dhx_resized");
            if (resizedColumn && _this.events.fire(types_1.GridEvents.beforeResizeStart, [col, e])) {
                columnsResizer_1.startResize(_this, resizedColumn.toString(), e, function () {
                    _this.paint();
                    _this.config.$resizing = null;
                    _this.events.fire(types_1.GridEvents.afterResizeEnd, [col, e]);
                });
            }
        });
        this.events.on(types_1.GridEvents.resize, function () {
            _this._parseColumns();
        });
    };
    Grid.prototype._addEmptyRow = function () {
        var id = this.data.getId(this.data.getLength() - 1);
        var lastRow = this.data.getItem(id);
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        var isEmpty = main_1.isRowEmpty(lastRow);
        if (!isEmpty) {
            this.data.add(columns.reduce(function (total, col) {
                total[col.id] = "";
                return total;
            }, { $emptyRow: true }));
        }
    };
    Grid.prototype._sort = function (by, dir) {
        var _this = this;
        if (!dir) {
            if (this._sortBy === by) {
                this._sortDir = this._sortDir === "asc" ? "desc" : "asc";
            }
            else {
                this._sortDir = "desc";
            }
        }
        else {
            this._sortDir = dir;
        }
        this._sortBy = by;
        this.data.sort({
            by: by,
            dir: this._sortDir,
            as: function (el) {
                var col = _this.getColumn(by);
                if (el && col.type === "date") {
                    return "" + ts_calendar_1.stringToDate(el, col.dateFormat).getTime();
                }
                return el ? "" + el : "";
            },
        });
    };
    Grid.prototype._getColumn = function (id) {
        for (var _i = 0, _a = this.config.columns; _i < _a.length; _i++) {
            var col = _a[_i];
            if (col.id === id) {
                return col;
            }
        }
    };
    Grid.prototype._init = function () {
        this.events = new events_1.EventSystem(this);
        this._attachDataCollection();
        this.export = new Exporter_1.Exporter(this);
        this._setEventHandlers();
    };
    Grid.prototype._attachDataCollection = function () {
        var _this = this;
        var prep = function (data) {
            if (data.spans) {
                _this.config.spans = data.spans;
                data = data.data;
            }
            return data;
        };
        if (this.config.data instanceof ts_data_1.DataCollection) {
            this.data = this.config.data;
            this.config.data = [];
            this._parseData();
            return;
        }
        this._createCollection(prep);
    };
    Grid.prototype._setMarks = function (col, func) {
        var colCells = this.data.map(function (row) { return ({
            id: row.id,
            data: row[col.id],
            row: row,
        }); });
        var colCellsData = this.data.map(function (row) { return row[col.id]; });
        var _loop_1 = function (cell) {
            var css = func(cell.data, colCellsData, cell.row, col);
            if (css) {
                col.$cellCss = col.$cellCss || {};
                var cellCss_1 = (col.$cellCss[cell.id] || "").split(" ");
                css.split(" ").map(function (item) {
                    if (!cellCss_1.includes(item)) {
                        cellCss_1.push(item);
                    }
                });
                col.$cellCss[cell.id] = cellCss_1.join(" ");
            }
        };
        for (var _i = 0, colCells_1 = colCells; _i < colCells_1.length; _i++) {
            var cell = colCells_1[_i];
            _loop_1(cell);
        }
    };
    Grid.prototype._checkMarks = function () {
        var _this = this;
        this.config.columns.map(function (col) {
            var mark = col.mark;
            if (mark) {
                if (typeof mark === "function") {
                    _this._setMarks(col, mark);
                }
                else {
                    _this._setMarks(col, function (el, c) {
                        var data = c.filter(function (item) { return item !== null && item !== undefined && item !== ""; });
                        var min = Math.min.apply(Math, data);
                        var max = Math.max.apply(Math, data);
                        if (mark.max && max === parseFloat(el)) {
                            return mark.max;
                        }
                        if (mark.min && min === parseFloat(el)) {
                            return mark.min;
                        }
                        return false;
                    });
                }
            }
        });
    };
    Grid.prototype._adjustColumns = function () {
        var _this = this;
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        columns.map(function (col, i) {
            if ((col.adjust !== false && _this.config.adjust) || col.adjust) {
                _this.adjustColumnWidth(col.id, col.adjust || _this.config.adjust);
            }
        });
    };
    // [todo] make more smart type detection
    Grid.prototype._detectColsTypes = function () {
        var firstRow = this.data.getItem(this.data.getId(0));
        if (!firstRow) {
            return;
        }
        this.config.columns.map(function (col) {
            if (col.type) {
                return col;
            }
            var firstCell = firstRow ? firstRow[col.id] : "";
            var v = parseFloat(firstCell);
            var val = isNaN(v) ? firstCell : v;
            if (val) {
                col.type = typeof val;
                return col;
            }
        });
    };
    Grid.prototype._checkFilters = function () {
        var data = this._currentData;
        var columns = this.config.columns.filter(function (col) { return !col.hidden; });
        columns.map(function (col) {
            col.header.map(function (cell) {
                if (cell.content && (cell.content === "selectFilter" || cell.content === "comboFilter")) {
                    var unique = data_1.getUnique(data, col.id);
                    if (col.$uniqueData && col.$uniqueData.length > unique.length) {
                        unique.forEach(function (item) {
                            if (!col.$uniqueData.includes(item)) {
                                col.$uniqueData.push(item);
                            }
                        });
                    }
                    else {
                        col.$uniqueData = unique;
                    }
                }
            });
        });
    };
    Grid.prototype._destroyContent = function () {
        for (var contentName in this.content) {
            if (contentName === "comboFilter") {
                this.content[contentName].destroy();
            }
        }
    };
    Grid.prototype._render = function () {
        this.paint();
    };
    Grid.prototype._lazyLoad = function (e) {
        var y = e.target.scrollTop;
        if (this.getScrollState().y !== y) {
            var from = Math.round(y / this.config.rowHeight);
            var onScreenCount = (this.config.height - this.config.headerRowHeight) / this.config.rowHeight;
            var proxy = this.data.dataProxy;
            if (proxy &&
                proxy.config &&
                !this.data.isDataLoaded(from, onScreenCount + from + proxy.config.prepare)) {
                proxy.updateUrl(null, { from: from, limit: proxy.config.limit });
                this.data.load(proxy);
            }
        }
    };
    return Grid;
}(view_1.View));
exports.Grid = Grid;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = __webpack_require__(10);
var ts_data_1 = __webpack_require__(5);
var core_1 = __webpack_require__(1);
function fillArray(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = value;
    }
    return arr;
}
var Exporter = /** @class */ (function () {
    function Exporter(_view) {
        this._view = _view;
    }
    Exporter.prototype.xlsx = function (config) {
        return this._export(config);
    };
    Exporter.prototype.csv = function (config) {
        if (config === void 0) { config = {}; }
        config = __assign({
            asFile: true,
            rowDelimiter: "\n",
            columnDelimiter: ",",
            skipHeader: 0,
        }, config);
        var csv;
        if ("getRoot" in this._view.data && config.flat) {
            csv = this.getFlatCSV(config);
        }
        else {
            csv = this._getCSV(config);
        }
        var name = config.name || "grid_export";
        if (config.asFile) {
            core_1.downloadFile(csv, name + ".csv", "text/csv");
        }
        return csv;
    };
    Exporter.prototype._export = function (config) {
        if (config === void 0) { config = {}; }
        var configCols = this._view.config.columns;
        var rowsIndexMap = {};
        var headers = main_1.transpose(this._view.config.columns.map(function (col) { return col.header.map(function (level) { return level.text || " "; }); }));
        var columns = [];
        var uniqStyles = {
            default: {
                color: "#000000",
                background: "#FFFFFF",
                fontSize: 14,
            },
        };
        var cells = [];
        var columnsIndexMap = {};
        var data = this._view.data.serialize().map(function (row, i) {
            rowsIndexMap[row.id] = i;
            var rowData = configCols.map(function (col, k) {
                columnsIndexMap[col.id] = k;
                return main_1.removeHTMLTags(row[col.id]);
            });
            return rowData;
        });
        for (var _i = 0, configCols_1 = configCols; _i < configCols_1.length; _i++) {
            var col = configCols_1[_i];
            columns.push({ width: col.width });
            for (var key in col.$cellCss) {
                var colStyle = col.$cellCss[key];
                var colStyleHash = colStyle
                    .split("")
                    .reduce(function (h, letter) {
                    var hh = (h << 5) - h + letter.charCodeAt(0);
                    return Math.abs(hh & hh);
                }, 0)
                    .toString();
                if (!uniqStyles[colStyleHash]) {
                    var cont = document.body;
                    var css = main_1.getStyleByClass(colStyle, cont, "dhx_grid-row", uniqStyles.default);
                    if (css) {
                        uniqStyles[colStyleHash] = css;
                    }
                }
                if (uniqStyles[colStyleHash]) {
                    cells.push([rowsIndexMap[key], configCols.indexOf(col), colStyleHash]);
                }
            }
        }
        var exportData = {
            name: config.name || "data",
            columns: columns,
            header: headers,
            data: data,
            styles: {
                cells: cells,
                css: uniqStyles,
            },
        };
        if (config.url) {
            var form_1 = document.createElement("form");
            form_1.setAttribute("target", "_blank");
            form_1.setAttribute("action", config.url);
            form_1.setAttribute("method", "POST");
            form_1.style.visibility = "hidden";
            var input = document.createElement("textarea");
            input.setAttribute("name", "data");
            input.value = JSON.stringify(exportData);
            form_1.appendChild(input);
            document.body.appendChild(form_1);
            form_1.submit();
            setTimeout(function () {
                form_1.parentNode.removeChild(form_1);
            }, 100);
        }
        return exportData;
    };
    Exporter.prototype.getFlatCSV = function (config) {
        var treeData = this._view.data;
        var root = treeData.getRoot();
        var firstCol = this._view.config.columns[0];
        var maxLevel = treeData.getMaxLevel();
        var getParentsChain = function (item, data) {
            var parents = [];
            for (var i = 0; i <= maxLevel; i++) {
                if (item && item[firstCol.id]) {
                    parents[item.$level] = item[firstCol.id];
                    var parent_1 = data.getParent(item.id, true);
                    if (parent_1 && parent_1.id) {
                        item = parent_1;
                    }
                    else {
                        item = null;
                    }
                }
                else {
                    parents[i] = "";
                }
            }
            return parents;
        };
        var total = "";
        treeData.eachChild(root, function (item) {
            var parents = getParentsChain(item, treeData).join(config.columnDelimiter);
            total +=
                parents +
                    Object.keys(item).reduce(function (values, key, i) {
                        if (key !== "id" && key !== "parent" && !key.startsWith("$") && i !== 0) {
                            return values + config.columnDelimiter + (item[key] === null ? "" : item[key]);
                        }
                        return values;
                    }, "");
            total += config.rowDelimiter;
        });
        var exportData = this._export(config);
        // [dirty]
        var emptyHeaders = fillArray(new Array(maxLevel + 1), "");
        var headers = exportData.header.map(function (header) {
            header.splice.apply(header, __spreadArrays([0, 1], emptyHeaders));
            return header;
        });
        var head = new ts_data_1.CsvDriver(config).serialize(headers, true) + config.rowDelimiter;
        return head + total;
    };
    Exporter.prototype._getCSV = function (config) {
        var exportData = this._export(config);
        var headers = exportData.header;
        var driver = new ts_data_1.CsvDriver(config);
        var head = driver.serialize(headers, true);
        var readyData = driver.serialize(exportData.data, true);
        return head + readyData;
    };
    return Exporter;
}());
exports.Exporter = Exporter;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var core_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var ts_data_1 = __webpack_require__(5);
var Selection = /** @class */ (function () {
    function Selection(grid) {
        this._grid = grid;
        var types = ["cell", "row", "complex"];
        this._selectedCell = undefined;
        this._oldSelectedCell = undefined;
        this._selectedCells = [];
        this._type = types.includes(this._grid.config.selection) ? this._grid.config.selection : "complex";
        this._multiselection = grid.config.multiselection && this._type !== "complex";
        this._init();
    }
    Selection.prototype.setCell = function (row, col, ctrlUp, shiftUp) {
        var _this = this;
        if (ctrlUp === void 0) { ctrlUp = false; }
        if (shiftUp === void 0) { shiftUp = false; }
        if (this._grid.config.$editable) {
            return;
        }
        if (!row && !col) {
            this._selectedCells = [];
            this._selectedCell = null;
        }
        else {
            var oldSelectedCell = this._oldSelectedCell ? this._oldSelectedCell : undefined;
            row = this._grid.data.getItem(row.id || row);
            var colums = this._grid.config.columns.filter(function (col) { return !col.hidden; });
            if (!col) {
                col = colums[0];
            }
            col = this._grid.getColumn(col.id || col);
            if (!col || !row) {
                return;
            }
            this._selectedCell = { row: row, column: col };
            if (this._multiselection && shiftUp && oldSelectedCell) {
                this._oldSelectedCell = oldSelectedCell;
            }
            else {
                this._oldSelectedCell = this._selectedCell;
            }
            if (this._multiselection) {
                if (shiftUp && !ctrlUp && this._selectedCells.length > 0) {
                    var startRowIndex = this._grid.data.getIndex(this._oldSelectedCell.row.id);
                    var endRowIndex = this._grid.data.getIndex(row.id);
                    if (startRowIndex > endRowIndex) {
                        var temp = startRowIndex;
                        startRowIndex = endRowIndex;
                        endRowIndex = temp;
                    }
                    this._selectedCells = [this._oldSelectedCell];
                    if (this._type === "cell") {
                        var columnsIds = colums.map(function (e) { return e.id; });
                        var startColIndex = columnsIds.indexOf(oldSelectedCell.column.id);
                        var endColIndex = columnsIds.indexOf(col.id);
                        if (startColIndex !== -1 && endColIndex !== -1) {
                            if (startColIndex > endColIndex) {
                                var temp = startColIndex;
                                startColIndex = endColIndex;
                                endColIndex = temp;
                            }
                            var columns_1 = colums.slice(startColIndex, endColIndex + 1);
                            this._grid.data.mapRange(startRowIndex, endRowIndex, function (item) {
                                columns_1.forEach(function (column) {
                                    var cell = { row: item, column: column };
                                    if (_this._findIndex(cell) === -1) {
                                        _this._selectedCells.push(cell);
                                    }
                                });
                            });
                        }
                    }
                    else {
                        this._grid.data.mapRange(startRowIndex, endRowIndex, function (item) {
                            var cell = { row: item, column: col };
                            if (_this._findIndex(cell) === -1) {
                                _this._selectedCells.push({ row: item, column: col });
                            }
                        });
                    }
                }
                else if (ctrlUp && !shiftUp) {
                    var cellIndex = this._findIndex();
                    if (cellIndex === -1) {
                        this._selectedCells.push(this._selectedCell);
                    }
                    else {
                        this._selectedCells.splice(cellIndex, 1);
                    }
                }
                else {
                    this._selectedCells = [this._selectedCell];
                }
            }
            else {
                this._selectedCells = [this._selectedCell];
            }
        }
        dom_1.awaitRedraw().then(function () {
            _this._grid.paint();
        });
    };
    Selection.prototype.getCell = function () {
        return this._selectedCell;
    };
    Selection.prototype.getCells = function () {
        if (this._multiselection) {
            return this._selectedCells;
        }
    };
    Selection.prototype.toHTML = function () {
        var _this = this;
        if (this._isUnselected()) {
            return;
        }
        if (this._multiselection) {
            var selection_1 = [];
            this._selectedCells.forEach(function (cell, index, array) {
                selection_1.push(_this._toHTML(cell.row, cell.column, index === array.length - 1 || _this._type === "cell"));
            });
            return selection_1;
        }
        else {
            return this._toHTML(this._selectedCell.row, this._selectedCell.column, true);
        }
    };
    Selection.prototype._init = function () {
        var _this = this;
        this._grid.events.on(types_1.GridEvents.cellClick, function (row, col, e) {
            _this.setCell(row, col, e.ctrlKey || e.metaKey, e.shiftKey);
        });
        this._grid.data.events.on(ts_data_1.DataEvents.beforeRemove, function (item) {
            if (item && _this._selectedCell && _this._selectedCell.row) {
                var index = _this._grid.data.getIndex(String(_this._selectedCell.row.id));
                var id = _this._grid.data.getId(index + 1);
                if (id) {
                    _this.setCell(id);
                }
                else {
                    var newId = _this._grid.data.getId(index - 1);
                    if (newId) {
                        _this.setCell(newId);
                    }
                }
                _this._grid.paint();
            }
        });
    };
    Selection.prototype._toHTML = function (row, column, last) {
        if (last === void 0) { last = false; }
        var colums = this._grid.config.columns.filter(function (col) { return !col.hidden; });
        var fixedCols = this._grid.config.splitAt ? colums.slice(0, this._grid.config.splitAt) : [];
        var fixedColsIds = fixedCols.map(function (col) { return col.id; });
        var fixedCell;
        var cellRect = this._grid.getCellRect(row.id, column.id);
        if (fixedColsIds.includes(column.id) && last) {
            var scrollState = this._grid.getScrollState();
            fixedCell = dom_1.el(".dhx_grid-selected-cell", {
                style: {
                    width: this._grid.config.splitAt === fixedColsIds.indexOf(column.id) + 1
                        ? cellRect.width - 1
                        : cellRect.width,
                    height: cellRect.height,
                    top: cellRect.y,
                    left: cellRect.x + scrollState.x,
                    position: "absolute",
                    zIndex: 10,
                },
            });
        }
        var totalWidth = this._grid.config.$totalWidth;
        return dom_1.el(".dhx_grid-selection", {}, [
            (this._type === "row" || this._type === "complex") &&
                dom_1.el(".dhx_grid-selected-row", {
                    style: {
                        width: totalWidth,
                        height: cellRect.height - 1,
                        top: cellRect.y,
                        left: 0,
                        position: "absolute",
                    },
                }),
            ((this._type === "cell" || this._type === "complex") && fixedCell) ||
                ((this._type === "cell" || this._type === "complex") &&
                    last &&
                    dom_1.el(".dhx_grid-selected-cell", {
                        style: {
                            width: cellRect.width - 1,
                            height: cellRect.height - 1,
                            top: cellRect.y,
                            left: cellRect.x + 1,
                            position: "absolute",
                        },
                    })),
        ]);
    };
    Selection.prototype._isUnselected = function () {
        return (!this._selectedCell ||
            !this._selectedCell.row ||
            !this._selectedCell.column ||
            this._selectedCells.length === 0);
    };
    Selection.prototype._findIndex = function (cell) {
        var _this = this;
        if (cell === void 0) { cell = this._selectedCell; }
        var cellIndex = -1;
        this._selectedCells.some(function (element, index) {
            if (_this._type === "cell") {
                if (core_1.compare(element.row, cell.row) && core_1.compare(element.column, cell.column)) {
                    cellIndex = index;
                    return true;
                }
            }
            else if (_this._type === "row") {
                if (core_1.compare(element.row, cell.row)) {
                    cellIndex = index;
                    return true;
                }
            }
        });
        return cellIndex;
    };
    return Selection;
}());
exports.Selection = Selection;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Keymanager_1 = __webpack_require__(16);
var types_1 = __webpack_require__(3);
var html_1 = __webpack_require__(2);
var focusHandler = {
    focusedID: undefined,
    isFocus: function (id) { return _this.focusedID === id; },
    getFocusState: function () { return _this.focusedID; },
    setFocusState: function (state) { return (_this.focusedID = state); },
};
function cellSelecting(selection) {
    return selection === "cell" || selection === "complex";
}
function selectionMove(e, grid, dir, range, toEnd, ctrlUp, shiftUp) {
    if (toEnd === void 0) { toEnd = false; }
    if (ctrlUp === void 0) { ctrlUp = false; }
    if (shiftUp === void 0) { shiftUp = false; }
    if (grid.config.$editable || !grid.config.selection) {
        return;
    }
    if (e) {
        e.preventDefault();
    }
    var selected = grid.selection.getCell();
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    if (selected) {
        if (dir === "vertical") {
            if (toEnd) {
                var newItem = range === 1
                    ? grid.data.getItem(grid.data.getId(grid.data.getLength() - 1))
                    : grid.data.getItem(grid.data.getId(0));
                grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
                grid.scrollTo(newItem.id, selected.column.id.toString());
            }
            else {
                var index = grid.data.getIndex(selected.row.id.toString());
                if (index + range >= 0 && index + range < grid.data.getLength()) {
                    var newItem = grid.data.getItem(grid.data.getId(index + range));
                    grid.selection.setCell(newItem.id, selected.column.id, ctrlUp, shiftUp);
                    grid.scrollTo(newItem.id, selected.column.id.toString());
                }
            }
        }
        else {
            if (toEnd) {
                var newItem = range === 1 ? columns[columns.length - 1] : columns[0];
                grid.selection.setCell(selected.row.id, newItem.id, ctrlUp, shiftUp);
                grid.scrollTo(selected.row.id.toString(), newItem.id.toString());
            }
            else {
                var index = columns.indexOf(selected.column);
                if (index + range >= 0 && index + range < columns.length) {
                    grid.selection.setCell(selected.row.id, columns[index + range].id, ctrlUp, shiftUp);
                    grid.scrollTo(selected.row.id.toString(), columns[index + range].id.toString());
                }
            }
        }
    }
}
function initHotkeys(grid) {
    var gridContainer = grid.getRootView().data.getRootNode();
    var gridBody = grid.getRootView().refs.grid_body.el;
    var gridId = gridContainer.getAttribute("dhx_widget_id");
    focusHandler.setFocusState(gridId);
    if (!grid.config.keyNavigation) {
        return;
    }
    var variables = {
        arrowLeft: html_1.isIE() ? "left" : "arrowLeft",
        arrowRight: html_1.isIE() ? "right" : "arrowRight",
        arrowUp: html_1.isIE() ? "up" : "arrowUp",
        arrowDown: html_1.isIE() ? "down" : "arrowDown",
        escape: html_1.isIE() ? "esc" : "escape",
        space: html_1.isIE() ? "spacebar" : "space",
    };
    var focusableKeyManager = {
        addHotKey: function (key, handler) {
            Keymanager_1.keyManager.addHotKey(key, function (e) {
                if (focusHandler.isFocus(gridId) && grid.events.fire(types_1.GridEvents.beforeKeyDown, [e])) {
                    handler(e);
                    grid.events.fire(types_1.GridEvents.afterKeyDown, [e]);
                }
            });
        },
    };
    var isChild = function (parent, child) {
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    document.addEventListener("mousedown", function (e) {
        var target = e.target;
        if (!focusHandler.isFocus(gridId) &&
            (isChild(gridContainer, target) || target.isEqualNode(gridContainer))) {
            focusHandler.setFocusState(gridId);
        }
        else if (!html_1.locateNode(e) && focusHandler.getFocusState() !== "null") {
            focusHandler.setFocusState("null");
        }
    });
    focusableKeyManager.addHotKey("enter", function () {
        if (cellSelecting(grid.config.selection)) {
            var selected = grid.selection.getCell();
            if (selected &&
                ((selected.column.editable !== false && grid.config.editable) || selected.column.editable)) {
                if (!grid.config.$editable) {
                    if (selected.column.type !== "boolean") {
                        grid.edit(selected.row.id, selected.column.id, selected.column.editorType);
                    }
                    else {
                        grid.events.fire(types_1.GridEvents.afterEditEnd, [
                            !selected.row[selected.column.id],
                            selected.row,
                            selected.column,
                        ]);
                    }
                }
                else {
                    grid.editEnd();
                }
            }
        }
    });
    focusableKeyManager.addHotKey(variables.space, function (e) {
        if (cellSelecting(grid.config.selection) && grid.config.editable && !grid.config.$editable) {
            var selected = grid.selection.getCell();
            if (selected && selected.column.type === "boolean") {
                e.preventDefault();
                grid.events.fire(types_1.GridEvents.afterEditEnd, [
                    !selected.row[selected.column.id],
                    selected.row,
                    selected.column,
                ]);
            }
        }
    });
    focusableKeyManager.addHotKey(variables.escape, function () {
        if (grid.config.$editable) {
            grid.editEnd(true);
        }
    });
    focusableKeyManager.addHotKey("pageUp", function (e) {
        e.preventDefault();
        gridBody.scrollTop -= gridBody.clientHeight;
    });
    focusableKeyManager.addHotKey("pageDown", function (e) {
        e.preventDefault();
        gridBody.scrollTop += gridBody.clientHeight;
    });
    focusableKeyManager.addHotKey("home", function (e) {
        e.preventDefault();
        gridBody.scrollTop = 0;
    });
    focusableKeyManager.addHotKey("end", function (e) {
        e.preventDefault();
        gridBody.scrollTop += gridBody.scrollHeight;
    });
    focusableKeyManager.addHotKey("tab", function (e) {
        if (grid.config.$editable || !grid.config.selection) {
            return;
        }
        if (e) {
            e.preventDefault();
        }
        var selected = grid.selection.getCell();
        var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
        if (selected) {
            var index = columns.indexOf(selected.column) + 1;
            if (index >= 0 && index < columns.length) {
                grid.selection.setCell(selected.row.id, columns[index].id);
                grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
            }
            else if (index >= 0) {
                var newLineIndex = grid.data.getIndex(selected.row.id.toString()) + 1;
                if (newLineIndex < grid.data.getLength()) {
                    grid.selection.setCell(grid.data.getId(newLineIndex), columns[0].id);
                    grid.scrollTo(grid.data.getId(newLineIndex), columns[0].id.toString());
                }
            }
        }
    });
    focusableKeyManager.addHotKey("shift+tab", function (e) {
        // selectionMove(e, grid, "horizontal", -1);
        if (grid.config.$editable || !grid.config.selection) {
            return;
        }
        if (e) {
            e.preventDefault();
        }
        var selected = grid.selection.getCell();
        var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
        if (selected) {
            var index = columns.indexOf(selected.column) - 1;
            if (index >= 0 && index < columns.length) {
                grid.selection.setCell(selected.row.id, columns[index].id);
                grid.scrollTo(selected.row.id.toString(), columns[index].id.toString());
            }
            else if (index < grid.data.getLength()) {
                var newLineIndex = grid.data.getIndex(selected.row.id.toString()) - 1;
                if (newLineIndex >= 0) {
                    grid.selection.setCell(grid.data.getId(newLineIndex), columns[columns.length - 1].id);
                    grid.scrollTo(grid.data.getId(newLineIndex), columns[columns.length - 1].id.toString());
                }
            }
        }
    });
    focusableKeyManager.addHotKey(variables.arrowUp, function (e) {
        selectionMove(e, grid, "vertical", -1);
    });
    focusableKeyManager.addHotKey("ctrl+" + variables.arrowUp, function (e) {
        selectionMove(e, grid, "vertical", -1, true);
    });
    focusableKeyManager.addHotKey("shift+" + variables.arrowUp, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "vertical", -1, false, false, true);
        }
    });
    focusableKeyManager.addHotKey("ctrl+shift+" + variables.arrowUp, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "vertical", -1, true, false, true);
        }
    });
    focusableKeyManager.addHotKey(variables.arrowDown, function (e) {
        selectionMove(e, grid, "vertical", 1);
    });
    focusableKeyManager.addHotKey("ctrl+" + variables.arrowDown, function (e) {
        selectionMove(e, grid, "vertical", 1, true);
    });
    focusableKeyManager.addHotKey("shift+" + variables.arrowDown, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "vertical", 1, false, false, true);
        }
    });
    focusableKeyManager.addHotKey("ctrl+shift+" + variables.arrowDown, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "vertical", 1, true, false, true);
        }
    });
    focusableKeyManager.addHotKey(variables.arrowRight, function (e) {
        selectionMove(e, grid, "horizontal", 1);
    });
    focusableKeyManager.addHotKey("ctrl+" + variables.arrowRight, function (e) {
        selectionMove(e, grid, "horizontal", 1, true);
    });
    focusableKeyManager.addHotKey("shift+" + variables.arrowRight, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "horizontal", 1, false, false, true);
        }
    });
    focusableKeyManager.addHotKey("ctrl+shift+" + variables.arrowRight, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "horizontal", 1, true, false, true);
        }
    });
    focusableKeyManager.addHotKey(variables.arrowLeft, function (e) {
        selectionMove(e, grid, "horizontal", -1);
    });
    focusableKeyManager.addHotKey("ctrl+" + variables.arrowLeft, function (e) {
        selectionMove(e, grid, "horizontal", -1, true);
    });
    focusableKeyManager.addHotKey("shift+" + variables.arrowLeft, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "horizontal", -1, false, false, true);
        }
    });
    focusableKeyManager.addHotKey("ctrl+shift+" + variables.arrowLeft, function (e) {
        if (grid.config.multiselection) {
            selectionMove(e, grid, "horizontal", -1, true, false, true);
        }
    });
}
exports.initHotkeys = initHotkeys;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var data_1 = __webpack_require__(24);
var main_1 = __webpack_require__(10);
var Cells_1 = __webpack_require__(25);
var FixedCols_1 = __webpack_require__(93);
var FixedRows_1 = __webpack_require__(38);
var core_1 = __webpack_require__(1);
var BORDERS = 2;
function getRenderConfig(obj, data, wrapperSizes) {
    var config = obj.config;
    var columns = config.columns.filter(function (col) { return !col.hidden; });
    var positions = data_1.calculatePositions(wrapperSizes.width, wrapperSizes.height, obj._scroll, config);
    var currentColumns = columns.slice(positions.xStart, positions.xEnd);
    return __assign(__assign({}, config), { data: data, scroll: obj._scroll, $positions: positions, headerHeight: config.$headerLevel * config.headerRowHeight, footerHeight: config.$footerLevel * config.footerRowHeight, firstColId: columns[0].id, events: obj.events, currentColumns: currentColumns, sortBy: obj._sortBy, sortDir: obj._sortDir, content: obj.content });
}
function getElementSizes(element) {
    if (!element) {
        return;
    }
    var styles = element.currentStyle || window.getComputedStyle(element);
    var paddingsByWidth = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight) || 0;
    var paddingsByHeight = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) || 0;
    return {
        width: element.clientWidth - paddingsByWidth,
        height: element.clientHeight - paddingsByHeight,
    };
}
function getGridData(renderConfig, shifts) {
    var content = Cells_1.getCells(renderConfig);
    var contentSpans = Cells_1.getSpans(renderConfig);
    var resizedLine;
    var colums = renderConfig.columns.filter(function (col) { return !col.hidden; });
    if (renderConfig.$resizing) {
        var colIndex = core_1.findIndex(colums, function (col) { return col.id === renderConfig.$resizing; });
        var firstCellLeft = colums.slice(0, colIndex).reduce(function (total, c) { return (total += c.width); }, 0) + colums[colIndex].width;
        resizedLine = dom_1.el(".dhx_grid-resize-line", {
            style: {
                top: 0,
                left: firstCellLeft,
                height: renderConfig.$totalHeight,
            },
        });
    }
    var selection = renderConfig.selection ? renderConfig.selection.toHTML() : null;
    selection =
        typeof selection === "string" ? dom_1.el("div.dhx_selection", { ".innerHTML": selection }) : selection;
    var pos = renderConfig.$positions;
    return dom_1.el(".dhx_data-wrap", {
        style: {
            height: renderConfig.$totalHeight,
            width: renderConfig.$totalWidth,
            "padding-left": shifts.x,
            "padding-top": shifts.y,
        },
    }, [
        dom_1.el(".dhx_grid_data", __assign({ _flags: dom_1.KEYED_LIST }, Cells_1.getHandlers(pos.yStart, pos.xStart, renderConfig)), content),
        dom_1.el(".dhx_span-spans", contentSpans),
        dom_1.el(".dhx_grid_selection", { _ref: "selection" }, [selection, resizedLine]),
    ]);
}
function getContentHeight(renderConfig, isSticky, wrapperSizes) {
    var contentHeight = wrapperSizes.height - BORDERS;
    contentHeight = isSticky ? contentHeight : contentHeight - renderConfig.headerHeight;
    var isFooter = renderConfig.$footer;
    return (contentHeight = isFooter
        ? isSticky
            ? contentHeight
            : contentHeight - renderConfig.footerHeight
        : contentHeight);
}
function render(vm, obj, data, htmlEvents, selection, uid) {
    if (!obj._container) {
        obj.config.width = 1;
        obj.config.height = 1;
    }
    // if grid placed inside another component, it will fit to its container
    if (vm && vm.node && vm.node.parent && vm.node.parent.el) {
        var parentNode = vm.node.parent.el;
        var parentSizes = getElementSizes(parentNode);
        obj.config.width = parentSizes.width;
        obj.config.height = parentSizes.height;
    }
    var config = obj.config;
    // when grid is destructing and user try to repaint it
    if (!config) {
        return dom_1.el("div");
    }
    if (!config.columns.length) {
        return dom_1.el(".dhx_grid");
    }
    if (!data || !obj.data) {
        data = [];
    }
    if (config.columns
        .filter(function (col) { return !col.hidden; })
        .reduce(function (check, col) { return (check = !col.hidden ? col.hidden : check); }, true)) {
        config.$totalHeight = 0;
    }
    else {
        config.$totalHeight = data.length * config.rowHeight;
    }
    var sizes = getElementSizes(obj._container);
    var wrapperSizes = {
        width: (config.width ? config.width : sizes && sizes.width) || 0,
        height: (config.height ? config.height : sizes && sizes.height) || 0,
    };
    // TODO: Remove scroll
    if (main_1.isAutoWidth(config)) {
        var scrollbarY = config.$totalHeight >= wrapperSizes.height - config.headerRowHeight ? html_1.getScrollbarWidth() : 0;
        config.$totalWidth = wrapperSizes.width - BORDERS - scrollbarY;
        var total = config.columns
            .filter(function (col) { return !col.hidden; })
            .reduce(function (width, col) { return (col.hidden ? width : width + col.width); }, 0);
        var per_1 = config.$totalWidth / total;
        var mTotal = config.columns.reduce(function (width, col) {
            var estimatedWidth = per_1 > 0 ? col.width * per_1 : 20;
            var unchangeable = !main_1.isAutoWidth(config, col) ||
                (col.maxWidth && col.maxWidth < estimatedWidth) ||
                (col.minWidth && col.minWidth > estimatedWidth);
            return unchangeable ? width + col.width : width;
        }, 0);
        var newPer_1 = (config.$totalWidth - mTotal) / (total - mTotal);
        config.$totalWidth = 0;
        config.columns.map(function (col) {
            // TODO: dirty, must be more then 20
            if (col.hidden) {
                return;
            }
            var estimatedWidth = newPer_1 > 0 ? col.width * newPer_1 : 20;
            var unchangeable = !main_1.isAutoWidth(config, col) ||
                (col.maxWidth && col.maxWidth < estimatedWidth) ||
                (col.minWidth && col.minWidth > estimatedWidth);
            if (!unchangeable) {
                col.width = estimatedWidth;
            }
            else {
                col.width = col.maxWidth || col.minWidth || col.width;
            }
            config.$totalWidth += col.hidden ? 0 : col.width;
        });
    }
    config.width = wrapperSizes.width;
    config.height = wrapperSizes.height;
    var renderConfig = getRenderConfig(obj, data, wrapperSizes);
    renderConfig.selection = selection;
    renderConfig.datacollection = obj.data;
    var shifts = Cells_1.getShifts(renderConfig);
    var isSticky = main_1.isCssSupport("position", "sticky");
    var gridBodyHeight = getContentHeight(renderConfig, isSticky, wrapperSizes);
    var layoutState = {
        wrapper: wrapperSizes,
        sticky: isSticky,
        shifts: shifts,
        gridBodyHeight: gridBodyHeight,
    };
    var header = FixedRows_1.getFixedRows(renderConfig, __assign(__assign({}, layoutState), { name: "header", position: "top" }));
    var footer = renderConfig.$footer
        ? FixedRows_1.getFixedRows(renderConfig, __assign(__assign({}, layoutState), { name: "footer", position: "bottom" }))
        : null;
    var lessByWidth = renderConfig.$totalWidth + BORDERS < wrapperSizes.width ? "dhx_grid-less-width" : "";
    var lessByHeight = renderConfig.$totalHeight + BORDERS < wrapperSizes.height ? "dhx_grid-less-height" : "";
    // dirty: but work. Change checking of rendering Grid
    if (!vm.node) {
        var _a = obj.getScrollState(), x_1 = _a.x, y_1 = _a.y;
        dom_1.awaitRedraw().then(function () {
            obj.scroll(x_1, y_1);
        });
    }
    return dom_1.el(".dhx_grid.dhx_widget", {
        class: (renderConfig.css || "") +
            (!isSticky ? " dhx_grid_border" : "") +
            (config.multiselection ? " dhx_no-select--pointer" : ""),
        dhx_widget_id: uid,
    }, [
        dom_1.resizer(function () { return obj.paint(); }),
        dom_1.el(".dhx_grid-content", {
            style: __assign({}, wrapperSizes),
            onclick: htmlEvents.onclick,
            class: (lessByWidth + " " + lessByHeight).trim(),
        }, [
            isSticky ? null : header,
            dom_1.el(".dhx_grid-body", {
                style: {
                    height: gridBodyHeight,
                    width: wrapperSizes.width - BORDERS,
                },
                onscroll: htmlEvents.onscroll,
                _ref: "grid_body",
            }, [
                isSticky ? header : null,
                getGridData(renderConfig, shifts),
                isSticky ? footer : null,
            ]),
            FixedCols_1.getFixedCols(renderConfig, layoutState),
            isSticky ? null : footer,
        ]),
    ]);
}
exports.render = render;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(3);
var InputEditor_1 = __webpack_require__(66);
var SelectEditor_1 = __webpack_require__(67);
var DateEditor_1 = __webpack_require__(68);
var CheckboxEditor_1 = __webpack_require__(82);
var ComboboxEditor_1 = __webpack_require__(83);
var lastEditor = {
    cell: {
        row: null,
        col: null,
    },
    editor: null,
};
var editHandler;
function getEditor(row, col, conf) {
    var type = col.type === "boolean" ? "checkbox" : conf.$editable.editorType;
    if (lastEditor.cell.row === row.id && lastEditor.cell.col === col.id) {
        return lastEditor.editor;
    }
    lastEditor.cell = {
        row: row.id,
        col: col.id,
    };
    if (!editHandler) {
        editHandler = function () {
            lastEditor = {
                cell: {
                    row: null,
                    col: null,
                },
                editor: null,
            };
        };
        conf.events.on(types_1.GridEvents.afterEditEnd, editHandler);
    }
    switch (type) {
        case "input":
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
        case "select":
            return (lastEditor.editor = new SelectEditor_1.SelectEditor(row, col, conf));
        case "datePicker":
            return (lastEditor.editor = new DateEditor_1.DateEditor(row, col, conf));
        case "checkbox":
            return (lastEditor.editor = new CheckboxEditor_1.CheckboxEditor(row, col, conf));
        case "combobox":
            return (lastEditor.editor = new ComboboxEditor_1.ComboboxEditor(row, col, conf));
        default:
            return (lastEditor.editor = new InputEditor_1.InputEditor(row, col, conf));
    }
}
exports.getEditor = getEditor;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var core_1 = __webpack_require__(1);
var InputEditor = /** @class */ (function () {
    function InputEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._input.removeEventListener("change", this._handlers.onChange);
            this._handlers = {};
            if (this._cell.col.type !== "string" && core_1.isNumeric(value)) {
                value = parseFloat(value);
            }
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    InputEditor.prototype.toHTML = function () {
        var content = this._cell.row[this._cell.col.id];
        if (this._input) {
            content = this._input.value;
        }
        this._config.$editable.editor = this;
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: content,
        });
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var SelectEditor = /** @class */ (function () {
    function SelectEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    SelectEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.value;
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("blur", this._handlers.onBlur);
            this._handlers = {};
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    SelectEditor.prototype.toHTML = function () {
        var content = this._cell.col.options || [];
        var selected = this._cell.row[this._cell.col.id];
        if (this._input) {
            selected = this._input.options[this._input.selectedIndex].value;
        }
        var options = content.map(function (item) {
            return dom_1.el("option", {
                selected: item === selected,
            }, item);
        });
        this._config.$editable.editor = this;
        return dom_1.el("select.dhx_cell-editor.dhx_cell-editor__select", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
        }, options);
    };
    SelectEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return SelectEditor;
}());
exports.SelectEditor = SelectEditor;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var ts_calendar_1 = __webpack_require__(27);
var ts_popup_1 = __webpack_require__(17);
var DateEditor = /** @class */ (function () {
    function DateEditor(row, col, config) {
        var _this = this;
        this._config = config;
        this._cell = { row: row, col: col };
        this._calendar = new ts_calendar_1.Calendar(null, { dateFormat: col.dateFormat });
        var value = this._cell.row[this._cell.col.id];
        var dateFormat = this._calendar.config.dateFormat;
        if (ts_calendar_1.stringToDate(value, dateFormat, true) || value instanceof Date) {
            this._calendar.setValue(value);
            this._value = this._calendar.getValue();
            this._cell.row[this._cell.col.id] = this._value;
        }
        this._popup = new ts_popup_1.Popup({ css: "dhx_widget--bordered" });
        this._popup.attach(this._calendar);
        this._calendar.events.on(ts_calendar_1.CalendarEvents.change, function () {
            _this.endEdit(false, true);
        });
        this._popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            _this.endEdit();
        });
        this._initHandlers();
    }
    DateEditor.prototype.endEdit = function (withoutSave, calendarChange) {
        if (!this._handlers) {
            return;
        }
        var dateFormat = this._calendar.config.dateFormat;
        var value = this._cell.row[this._cell.col.id];
        if (!withoutSave) {
            if (value instanceof Date || calendarChange) {
                this._value = this._calendar.getValue();
                this._input.value = this._value;
            }
            else if (ts_calendar_1.stringToDate(this._input.value, dateFormat, true) &&
                this._input.value.length === value.length) {
                this._value = this._input.value;
            }
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [this._value, this._cell.row, this._cell.col])) {
            this._input.removeEventListener("focus", this._handlers.onFocus);
            this._input.removeEventListener("change", this._handlers.onChange);
            this._handlers = {};
            this._popup.destructor();
            this._calendar.destructor();
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [this._value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    DateEditor.prototype.toHTML = function () {
        var value = this._cell.row[this._cell.col.id];
        this._config.$editable.editor = this;
        return dom_1.el("input.dhx_cell-editor.dhx_cell-editor__input.dhx_cell-editor__datepicker", {
            _hooks: {
                didInsert: this._handlers.didInsert,
            },
            _key: "cell_editor",
            dhx_id: "cell_editor",
            value: value,
        });
    };
    DateEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onFocus: function () {
                dom_1.awaitRedraw().then(function () {
                    _this._popup.show(_this._input, {
                        centering: true,
                        mode: "bottom",
                    });
                });
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                _this._input.addEventListener("focus", _this._handlers.onFocus);
                _this._input.addEventListener("change", _this._handlers.onChange);
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length);
            },
        };
    };
    return DateEditor;
}());
exports.DateEditor = DateEditor;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var view_1 = __webpack_require__(6);
var ts_timepicker_1 = __webpack_require__(70);
var DateHelper_1 = __webpack_require__(80);
var DateFormatter_1 = __webpack_require__(18);
var helper_1 = __webpack_require__(81);
var en_1 = __webpack_require__(32);
var types_1 = __webpack_require__(33);
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            weekStart: "sunday",
            thisMonthOnly: false,
            dateFormat: window && window.dhx && window.dhx.dateFormat,
            width: "250px",
        }, config)) || this;
        _this._selected = [];
        _this.events = new events_1.EventSystem();
        _this.config.disabledDates = _this.config.disabledDates || _this.config.block; // TODO: remove sute_7.0
        _this.config.mode = _this.config.mode || _this.config.view; // TODO: remove sute_7.0
        if (!_this.config.dateFormat) {
            if (_this.config.timePicker) {
                if (_this.config.timeFormat === 12) {
                    _this.config.dateFormat = "%d/%m/%y %h:%i %A";
                }
                else {
                    _this.config.dateFormat = "%d/%m/%y %H:%i";
                }
            }
            else {
                _this.config.dateFormat = "%d/%m/%y";
            }
        }
        if (_this.config.value) {
            _this._setSelected(_this.config.value);
        }
        if (_this.config.date) {
            _this._currentDate = DateHelper_1.DateHelper.toDateObject(_this.config.date, _this.config.dateFormat);
        }
        else if (_this._getSelected()) {
            _this._currentDate = DateHelper_1.DateHelper.copy(_this._getSelected());
        }
        else {
            _this._currentDate = new Date();
        }
        switch (_this.config.mode) {
            case "month":
                _this._currentViewMode = "month";
                break;
            case "year":
                _this._currentViewMode = "year";
                break;
            default:
                _this._currentViewMode = "calendar";
        }
        _this._initHandlers();
        if (_this.config.timePicker) {
            _this._timepicker = new ts_timepicker_1.Timepicker(null, {
                timeFormat: _this.config.timeFormat,
                controls: true,
            });
            var initTime = _this._getSelected() || new Date();
            _this._timepicker.setValue(initTime);
            _this._time = _this._timepicker.getValue();
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.afterClose, function () {
                _this._timepicker.setValue(_this._time);
                _this.showDate(null, "calendar");
            });
            _this._timepicker.events.on(ts_timepicker_1.TimepickerEvents.apply, function () {
                var _a = _this._timepicker.getValue(true), hour = _a.hour, minute = _a.minute, AM = _a.AM;
                var oldDate = _this._getSelected();
                var newDate = DateHelper_1.DateHelper.withHoursAndMinutes(_this._getSelected() || new Date(), hour, minute, AM);
                if (_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                    _this._selected[_this._selected.length - 1] = newDate;
                    _this.events.fire(types_1.CalendarEvents.change, [newDate, oldDate, true]);
                }
                _this._time = _this._timepicker.getValue();
                _this.showDate(null, "calendar");
            });
        }
        var render = function () { return _this._draw(); };
        _this.mount(container, dom_1.create({ render: render }));
        return _this;
    }
    Calendar.prototype.setValue = function (value) {
        if (!value || (value instanceof Array && value.length === 0)) {
            return false;
        }
        this._selected = [];
        var currentDate = value instanceof Array ? value[0] : value;
        var date = DateHelper_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        var oldDate = DateHelper_1.DateHelper.copy(this._getSelected());
        if (!this.events.fire(types_1.CalendarEvents.beforeChange, [date, oldDate, false])) {
            return false;
        }
        this._setSelected(value);
        if (this._timepicker) {
            this._timepicker.setValue(date);
            this._time = this._timepicker.getValue();
        }
        this.showDate(this._getSelected());
        this.events.fire(types_1.CalendarEvents.change, [date, oldDate, false]);
        this.paint();
        return true;
    };
    Calendar.prototype.getValue = function (asDateObject) {
        var _this = this;
        if (!this._selected[0]) {
            return "";
        }
        if (this.config.range) {
            return asDateObject
                ? this._selected.map(function (date) { return DateHelper_1.DateHelper.copy(date); })
                : this._selected.map(function (date) { return DateFormatter_1.getFormatedDate(_this.config.dateFormat, date); });
        }
        return asDateObject
            ? DateHelper_1.DateHelper.copy(this._selected[0])
            : DateFormatter_1.getFormatedDate(this.config.dateFormat, this._selected[0]);
    };
    Calendar.prototype.getCurrentMode = function () {
        return this._currentViewMode;
    };
    Calendar.prototype.showDate = function (date, mode) {
        if (date) {
            this._currentDate = DateHelper_1.DateHelper.copy(date);
        }
        if (mode) {
            this._currentViewMode = mode;
        }
        this.paint();
    };
    Calendar.prototype.destructor = function () {
        if (this._linkedCalendar) {
            this._unlink();
        }
        if (this._timepicker) {
            this._timepicker.destructor();
        }
        this.unmount();
    };
    Calendar.prototype.clear = function () {
        if (this.config.timePicker) {
            this._timepicker.clear();
            this._time = this._timepicker.getValue();
        }
        this._selected = [];
        this.showDate(null, this.config.mode);
    };
    Calendar.prototype.link = function (targetCalendar) {
        var _this = this;
        if (this._linkedCalendar) {
            this._unlink();
        }
        this._linkedCalendar = targetCalendar;
        var rawLowerDate = this.getValue(true);
        var rawUpperDate = targetCalendar.getValue(true);
        var lowerDate = rawLowerDate && DateHelper_1.DateHelper.dayStart(rawLowerDate);
        var upperDate = rawUpperDate && DateHelper_1.DateHelper.dayStart(rawUpperDate);
        var getRangeClass = function (date) {
            if (DateHelper_1.DateHelper.isSameDay(upperDate, lowerDate)) {
                return null;
            }
            var positionInRange = "dhx_calendar-day--in-range";
            if (DateHelper_1.DateHelper.isSameDay(date, lowerDate)) {
                positionInRange += " dhx_calendar-day--first-date";
            }
            if (DateHelper_1.DateHelper.isSameDay(date, upperDate)) {
                positionInRange += " dhx_calendar-day--last-date";
            }
            return positionInRange;
        };
        var rangeMark = function (date) {
            if (lowerDate && upperDate) {
                return date >= lowerDate && date <= upperDate && getRangeClass(date);
            }
        };
        if (!this.config.$rangeMark || !this._linkedCalendar.config.$rangeMark) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = rangeMark;
        }
        if (!this.config.disabledDates || !this._linkedCalendar.config.disabledDates) {
            this.config.disabledDates = function (date) {
                if (upperDate) {
                    return date > upperDate;
                }
            };
            this._linkedCalendar.config.disabledDates = function (date) {
                if (lowerDate) {
                    return date < lowerDate;
                }
            };
        }
        this.config.thisMonthOnly = true;
        targetCalendar.config.thisMonthOnly = true;
        this.events.on(types_1.CalendarEvents.change, function (date) {
            lowerDate = DateHelper_1.DateHelper.dayStart(date);
            _this._linkedCalendar.paint();
        }, "link");
        this._linkedCalendar.events.on(types_1.CalendarEvents.change, function (date) {
            upperDate = DateHelper_1.DateHelper.dayStart(date);
            _this.paint();
        }, "link");
        this._linkedCalendar.paint();
        this.paint();
    };
    Calendar.prototype._unlink = function () {
        if (this._linkedCalendar) {
            this.config.$rangeMark = this._linkedCalendar.config.$rangeMark = null;
            this.config.disabledDates = this._linkedCalendar.config.disabledDates = null;
            this.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.events.detach(types_1.CalendarEvents.change, "link");
            this._linkedCalendar.paint();
            this.paint();
            this._linkedCalendar = null;
        }
    };
    Calendar.prototype._setSelected = function (value) {
        var _this = this;
        var currentDate = value instanceof Array ? value[0] : value;
        var date = DateHelper_1.DateHelper.toDateObject(currentDate, this.config.dateFormat);
        if (value instanceof Array && this.config.range) {
            var filterDate_1 = [];
            value.forEach(function (element, index) {
                if (index < 2) {
                    filterDate_1.push(DateHelper_1.DateHelper.toDateObject(element, _this.config.dateFormat));
                }
            });
            if (filterDate_1.length === 2 && filterDate_1[0] < filterDate_1[1]) {
                filterDate_1.forEach(function (element) { return _this._selected.push(element); });
            }
            else {
                this._selected[0] = filterDate_1[0];
            }
        }
        else {
            this._selected[0] = date;
        }
    };
    Calendar.prototype._getSelected = function () {
        return this._selected[this._selected.length - 1];
    };
    Calendar.prototype._draw = function () {
        switch (this._currentViewMode) {
            case "calendar":
                this.events.fire(types_1.CalendarEvents.modeChange, ["calendar"]);
                return this._drawCalendar();
            case "month":
                this.events.fire(types_1.CalendarEvents.modeChange, ["month"]);
                return this._drawMonthSelector();
            case "year":
                this.events.fire(types_1.CalendarEvents.modeChange, ["year"]);
                return this._drawYearSelector();
            case "timepicker":
                this.events.fire(types_1.CalendarEvents.modeChange, ["timepicker"]);
                return this._drawTimepicker();
        }
    };
    Calendar.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onclick: {
                ".dhx_calendar-year, .dhx_calendar-month, .dhx_calendar-day": function (_e, vn) {
                    var date = vn.attrs._date;
                    var oldDate = DateHelper_1.DateHelper.copy(_this._getSelected());
                    switch (_this._currentViewMode) {
                        case "calendar": {
                            var mergedDate = _this.config.timePicker
                                ? DateHelper_1.DateHelper.mergeHoursAndMinutes(date, _this._getSelected() || _this._currentDate)
                                : date;
                            if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [mergedDate, oldDate, true])) {
                                return;
                            }
                            if (_this.config.range &&
                                _this._selected.length === 1 &&
                                _this._selected[0] < mergedDate) {
                                _this._selected.push(mergedDate);
                            }
                            else {
                                _this._selected = [];
                                _this._selected[0] = mergedDate;
                            }
                            _this.showDate(_this._getSelected());
                            _this.events.fire(types_1.CalendarEvents.change, [date, oldDate, true]);
                            break;
                        }
                        case "month":
                            if (_this.config.mode !== "month") {
                                DateHelper_1.DateHelper.setMonth(_this._currentDate, date);
                                _this.showDate(null, "calendar");
                                _this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                            }
                            else {
                                var newDate = DateHelper_1.DateHelper.fromYearAndMonth(_this._currentDate.getFullYear() || _this._getSelected().getFullYear(), date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected[0] = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._getSelected(), oldDate, true]);
                                _this.events.fire(types_1.CalendarEvents.monthSelected, [date]);
                                _this.paint();
                            }
                            break;
                        case "year":
                            if (_this.config.mode !== "year") {
                                DateHelper_1.DateHelper.setYear(_this._currentDate, date);
                                _this.showDate(null, "month");
                                _this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                            }
                            else {
                                var newDate = DateHelper_1.DateHelper.fromYear(date);
                                if (!_this.events.fire(types_1.CalendarEvents.beforeChange, [newDate, oldDate, true])) {
                                    return;
                                }
                                _this._currentDate = newDate;
                                _this._selected[0] = newDate;
                                _this.events.fire(types_1.CalendarEvents.change, [_this._getSelected(), oldDate, true]);
                                _this.events.fire(types_1.CalendarEvents.yearSelected, [date]);
                                _this.paint();
                            }
                    }
                },
                ".dhx_calendar-action__cancel": function () {
                    _this.showDate(_this._getSelected(), "calendar");
                    _this.events.fire(types_1.CalendarEvents.cancelClick, []);
                },
                ".dhx_calendar-action__show-month": function () { return _this.showDate(null, "month"); },
                ".dhx_calendar-action__show-year": function () { return _this.showDate(null, "year"); },
                ".dhx_calendar-action__next": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = DateHelper_1.DateHelper.addMonth(_this._currentDate, 1);
                            break;
                        case "month":
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, 1);
                            break;
                        case "year":
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, 12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__prev": function () {
                    var newDate;
                    switch (_this._currentViewMode) {
                        case "calendar":
                            newDate = DateHelper_1.DateHelper.addMonth(_this._currentDate, -1);
                            break;
                        case "month":
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, -1);
                            break;
                        case "year":
                            newDate = DateHelper_1.DateHelper.addYear(_this._currentDate, -12);
                    }
                    _this.showDate(newDate);
                },
                ".dhx_calendar-action__show-timepicker": function () {
                    _this._currentViewMode = "timepicker";
                    _this.paint();
                },
            },
            onmouseover: {
                ".dhx_calendar-day": function (event, node) {
                    _this.events.fire(types_1.CalendarEvents.dateMouseOver, [new Date(node.attrs._date), event]);
                    _this.events.fire(types_1.CalendarEvents.dateHover, [new Date(node.attrs._date), event]); // TODO: remove sute_7.0
                },
            },
        };
    };
    Calendar.prototype._getData = function (date) {
        var _this = this;
        var firstDay = this.config.weekStart === "monday" ? 1 : 0;
        var first = DateHelper_1.DateHelper.weekStart(DateHelper_1.DateHelper.monthStart(date), firstDay);
        var data = [];
        var weeksCount = 6;
        var currentDate = first;
        while (weeksCount--) {
            var currentWeek = DateHelper_1.DateHelper.getWeekNumber(currentDate);
            var disabledDays = 0;
            var daysCount = 7;
            var days = [];
            var _loop_1 = function () {
                var isDateWeekEnd = DateHelper_1.DateHelper.isWeekEnd(currentDate);
                var isCurrentMonth = date.getMonth() === currentDate.getMonth();
                var isBlocked = this_1.config.disabledDates && this_1.config.disabledDates(currentDate);
                var css = [];
                if (this_1.config.range && this_1._selected[0] && this_1._selected[1]) {
                    var getRangeClass_1 = function () {
                        if (DateHelper_1.DateHelper.isSameDay(_this._selected[0], _this._selected[1])) {
                            return null;
                        }
                        return "dhx_calendar-day--in-range";
                    };
                    var rangeMark = function () {
                        if (_this._selected[0] && _this._selected[1]) {
                            var firstDate = DateHelper_1.DateHelper.dayStart(_this._selected[0]);
                            var lastDate = DateHelper_1.DateHelper.dayStart(_this._selected[1]);
                            return currentDate >= firstDate && currentDate <= lastDate && getRangeClass_1();
                        }
                    };
                    this_1.config.$rangeMark = rangeMark;
                }
                if (isDateWeekEnd && isCurrentMonth) {
                    css.push("dhx_calendar-day--weekend");
                }
                if (!isCurrentMonth) {
                    if (this_1.config.thisMonthOnly) {
                        disabledDays++;
                        css.push("dhx_calendar-day--hidden");
                    }
                    else {
                        css.push("dhx_calendar-day--muffled");
                    }
                }
                if (this_1.config.mark) {
                    var markedCss = this_1.config.mark(currentDate);
                    if (markedCss) {
                        css.push(markedCss);
                    }
                }
                if (this_1.config.$rangeMark) {
                    var rangeMark = this_1.config.$rangeMark(currentDate);
                    if (rangeMark) {
                        css.push(rangeMark);
                    }
                }
                if (isBlocked) {
                    if (isDateWeekEnd) {
                        css.push("dhx_calendar-day--weekend-disabled");
                    }
                    else {
                        css.push("dhx_calendar-day--disabled");
                    }
                }
                this_1._selected.forEach(function (selected, index) {
                    if (selected && DateHelper_1.DateHelper.isSameDay(selected, currentDate)) {
                        var dayCss = "dhx_calendar-day--selected";
                        if (_this.config.range) {
                            dayCss += " dhx_calendar-day--selected-" + (index === 0 ? "first " : "last");
                        }
                        css.push(dayCss);
                    }
                });
                days.push({
                    date: currentDate,
                    day: currentDate.getDate(),
                    css: css.join(" "),
                });
                currentDate = DateHelper_1.DateHelper.addDay(currentDate);
            };
            var this_1 = this;
            while (daysCount--) {
                _loop_1();
            }
            data.push({
                weekNumber: currentWeek,
                days: days,
                disabledWeekNumber: disabledDays === 7,
            });
        }
        return data;
    };
    Calendar.prototype._drawCalendar = function () {
        var date = this._currentDate;
        var _a = this.config, weekStart = _a.weekStart, thisMonthOnly = _a.thisMonthOnly, css = _a.css, timePicker = _a.timePicker, width = _a.width;
        var weekDays = weekStart === "monday" ? __spreadArrays(en_1.default.daysShort.slice(1), [en_1.default.daysShort[0]]) : en_1.default.daysShort;
        var weekDaysHeader = weekDays.map(function (day) { return dom_1.el(".dhx_calendar-weekday", day); });
        var data = this._getData(date);
        var content = [];
        var weekNumbers = [];
        var weekNumbersWrapper;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var week = data_1[_i];
            var weekRow = week.days.map(function (item) {
                return dom_1.el("div.dhx_calendar-day", {
                    class: item.css,
                    _date: item.date,
                    tabIndex: 1,
                }, item.day);
            });
            if (this.config.weekNumbers && !(week.disabledWeekNumber && thisMonthOnly)) {
                weekNumbers.push(dom_1.el("div", {
                    class: "dhx_calendar-week-number",
                }, week.weekNumber));
            }
            content = content.concat(weekRow);
        }
        if (this.config.weekNumbers) {
            weekNumbersWrapper = dom_1.el(".dhx_calendar__week-numbers", weekNumbers);
        }
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (this.config.weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: {
                width: this.config.weekNumbers ? "calc(" + width + " + 48px )" : width,
            } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-month.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", en_1.default.months[date.getMonth()] + " " + date.getFullYear())),
                this.config.weekNumbers &&
                    dom_1.el(".dhx_calendar__dates-wrapper", [
                        dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                        dom_1.el(".dhx_calendar__days", content),
                        weekNumbersWrapper,
                    ]),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__weekdays", weekDaysHeader),
                !this.config.weekNumbers && dom_1.el(".dhx_calendar__days", content),
                timePicker
                    ? dom_1.el(".dhx_timepicker__actions", [
                        dom_1.el("button.dhx_calendar__timepicker-button." +
                            "dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__show-timepicker", [
                            dom_1.el("span.dhx_button__icon.dxi.dxi-clock-outline"),
                            dom_1.el("span.dhx_button__text", this._time),
                        ]),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawMonthSelector = function () {
        var date = this._currentDate;
        var currentMonth = date.getMonth();
        var currentYear = this._getSelected() ? this._getSelected().getFullYear() : null;
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: {
                width: weekNumbers ? "calc(" + width + " + 48px)" : width,
            } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_calendar-action__show-year.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", date.getFullYear())),
                dom_1.el(".dhx_calendar__months", en_1.default.monthsShort.map(function (item, i) {
                    return dom_1.el("div", {
                        class: "dhx_calendar-month" +
                            (currentMonth === i && currentYear === date.getFullYear()
                                ? " dhx_calendar-month--selected"
                                : ""),
                        tabIndex: 1,
                        _date: i,
                    }, item);
                })),
                mode !== "month"
                    ? dom_1.el(".dhx_calendar__actions", [
                        dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", en_1.default.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawYearSelector = function () {
        var _this = this;
        var date = this._currentDate;
        var yearsDiapason = DateHelper_1.DateHelper.getTwelweYears(date);
        var _a = this.config, css = _a.css, timePicker = _a.timePicker, weekNumbers = _a.weekNumbers, width = _a.width, mode = _a.mode;
        var widgetClass = "dhx_calendar dhx_widget" +
            (css ? " " + css : "") +
            (timePicker ? " dhx_calendar--with_timepicker" : "") +
            (weekNumbers ? " dhx_calendar--with_week-numbers" : "");
        return dom_1.el("div", __assign({ class: widgetClass, style: { width: weekNumbers ? "calc(" + width + " + 48px)" : width } }, this._handlers), [
            dom_1.el(".dhx_calendar__wrapper", [
                this._drawHeader(dom_1.el("button.dhx_button.dhx_button--view_link.dhx_button--size_small.dhx_button--color_secondary.dhx_button--circle", yearsDiapason[0] + "-" + yearsDiapason[yearsDiapason.length - 1])),
                dom_1.el(".dhx_calendar__years", yearsDiapason.map(function (item) {
                    return dom_1.el("div", {
                        class: "dhx_calendar-year" +
                            (_this._getSelected() && item === _this._getSelected().getFullYear()
                                ? " dhx_calendar-year--selected"
                                : ""),
                        _date: item,
                        tabIndex: 1,
                    }, item);
                })),
                mode !== "year" && mode !== "month"
                    ? dom_1.el(".dhx_calendar__actions", [
                        dom_1.el("button.dhx_button.dhx_button--color_primary.dhx_button--view_link.dhx_button--size_small.dhx_button--width_full.dhx_button--circle.dhx_calendar-action__cancel", en_1.default.cancel),
                    ])
                    : null,
            ]),
        ]);
    };
    Calendar.prototype._drawHeader = function (actionContent) {
        return dom_1.el(".dhx_calendar__navigation", [
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__prev" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", [dom_1.el(".dhx_button__icon.dxi.dxi-chevron-left")]),
            actionContent,
            dom_1.el("button.dhx_calendar-navigation__button.dhx_calendar-action__next" +
                helper_1.linkButtonClasses +
                ".dhx_button--icon.dhx_button--circle", [dom_1.el(".dhx_button__icon.dxi.dxi-chevron-right")]),
        ]);
    };
    Calendar.prototype._drawTimepicker = function () {
        var _a = this.config, css = _a.css, weekNumbers = _a.weekNumbers, width = _a.width;
        return dom_1.el(".dhx_widget.dhx-calendar", {
            class: css ? " " + css : "",
            style: { width: weekNumbers ? "calc(" + width + " + 48px)" : width },
        }, [dom_1.inject(this._timepicker.getRootView())]);
    };
    return Calendar;
}(view_1.View));
exports.Calendar = Calendar;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(71));
__export(__webpack_require__(31));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var view_1 = __webpack_require__(6);
var ts_layout_1 = __webpack_require__(28);
var ts_slider_1 = __webpack_require__(75);
var en_1 = __webpack_require__(78);
var helper_1 = __webpack_require__(79);
var types_1 = __webpack_require__(31);
function validate(value, max) {
    if (isNaN(value)) {
        return 0;
    }
    return Math.min(max, Math.max(0, value));
}
var Timepicker = /** @class */ (function (_super) {
    __extends(Timepicker, _super);
    function Timepicker(container, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, container, core_1.extend({
            timeFormat: 24,
            controls: false,
            actions: false,
        }, config)) || this;
        _this.events = new events_1.EventSystem(_this);
        _this._time = {
            hour: 0,
            minute: 0,
            AM: true,
        };
        if (_this.config.timeFormat === 12) {
            _this._time.hour = 12;
        }
        _this.config.controls = _this.config.controls || _this.config.actions; // TODO: remove sute_7.0
        _this._initUI(container);
        _this._initHandlers();
        _this._initEvents();
        return _this;
    }
    Timepicker.prototype.getValue = function (asOBject) {
        var _a = this._time, h = _a.hour, m = _a.minute, isAM = _a.AM;
        if (asOBject) {
            var obj = {
                hour: h,
                minute: m,
            };
            if (this.config.timeFormat === 12) {
                obj.AM = isAM;
            }
            return obj;
        }
        return ((h < 10 ? "0" + h : h) +
            ":" +
            (m < 10 ? "0" + m : m) +
            (this.config.timeFormat === 12 ? (isAM ? "AM" : "PM") : ""));
    };
    Timepicker.prototype.setValue = function (value) {
        var m;
        var h;
        var isPM;
        if (typeof value === "number") {
            value = new Date(value);
        }
        if (value instanceof Date) {
            m = value.getMinutes();
            h = value.getHours();
        }
        else if (Array.isArray(value)) {
            h = validate(value[0], 23);
            m = validate(value[1], 59);
            if (value[2] && value[2].toLowerCase() === "pm") {
                isPM = true;
            }
        }
        else {
            var matches = value.match(/\d+/g);
            h = validate(+matches[0], 23);
            m = validate(+matches[1], 59);
            if (value.toLowerCase().includes("pm")) {
                isPM = true;
            }
        }
        if (isPM && h < 12) {
            h += 12;
        }
        this._hoursSlider.setValue(h);
        this._minutesSlider.setValue(m);
        if (helper_1.isTimeCheck(value)) {
            this._hoursSlider.setValue(0);
            this._minutesSlider.setValue(m);
            this._time.AM = true;
        }
        this._inputsView.paint();
    };
    Timepicker.prototype.clear = function () {
        if (this.config.timeFormat === 24) {
            this.setValue("00:00");
        }
        else {
            this.setValue("12:00AM");
        }
    };
    Timepicker.prototype.destructor = function () {
        this._minutesSlider.destructor();
        this._hoursSlider.destructor();
        this.events.clear();
        this.unmount();
    };
    Timepicker.prototype.getRootView = function () {
        return this.layout.getRootView();
    };
    Timepicker.prototype._initUI = function (container) {
        var _this = this;
        var layoutConfig = {
            gravity: false,
            css: "dhx_widget dhx_timepicker " +
                (this.config.css ? this.config.css : "") +
                (this.config.controls ? " dhx_timepicker--with-controls" : ""),
            rows: [
                {
                    id: "timepicker",
                    css: "dhx_timepicker__inputs",
                },
                {
                    id: "hour-slider",
                    css: "dhx_timepicker__hour",
                },
                {
                    id: "minute-slider",
                    css: "dhx_timepicker__minute",
                },
            ],
        };
        if (this.config.controls) {
            layoutConfig.rows.unshift({
                id: "close-action",
                css: "dhx_timepicker__close",
            });
            layoutConfig.rows.push({
                id: "save-action",
                css: "dhx_timepicker__save",
            });
        }
        var layout = (this.layout = new ts_layout_1.Layout(container, layoutConfig));
        var timepicker = dom_1.create({
            render: function () { return _this._draw(); },
        });
        var inputsView = (this._inputsView = view_1.toViewLike(timepicker));
        var mSlider = (this._minutesSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 59,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.minutes,
        }));
        var hSlider = (this._hoursSlider = new ts_slider_1.Slider(null, {
            min: 0,
            max: 23,
            step: 1,
            tooltip: false,
            labelPosition: "top",
            label: en_1.default.hours,
        }));
        layout.getCell("timepicker").attach(inputsView);
        layout.getCell("hour-slider").attach(hSlider);
        layout.getCell("minute-slider").attach(mSlider);
        if (this.config.controls) {
            var save = function () {
                return dom_1.el("button.dhx_timepicker__button-save.dhx_button.dhx_button--view_flat.dhx_button--color_primary.dhx_button--size_medium.dhx_button--circle.dhx_button--width_full", { onclick: _this._outerHandlers.save }, en_1.default.save);
            };
            var close_1 = function () {
                return dom_1.el("button.dhx_timepicker__button-close.dhx_button.dhx_button--view_link.dhx_button--size_medium.dhx_button--view_link.dhx_button--color_secondary.dhx_button--icon.dhx_button--circle", {
                    onclick: _this._outerHandlers.close,
                }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close")]);
            };
            layout.getCell("save-action").attach(save);
            layout.getCell("close-action").attach(close_1);
        }
    };
    Timepicker.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onchange: {
                ".dhx_timepicker-input--hour": function (e) {
                    var hour = validate(parseInt(e.target.value, 10), 23);
                    e.target.value = hour;
                    _this._hoursSlider.setValue(hour);
                },
                ".dhx_timepicker-input--minutes": function (e) {
                    var min = validate(parseInt(e.target.value, 10), 59);
                    e.target.value = min;
                    _this._minutesSlider.setValue(min);
                },
            },
        };
        this._outerHandlers = {
            close: function () {
                if (!_this.events.fire(types_1.TimepickerEvents.beforeClose, [])) {
                    return;
                }
                _this.events.fire(types_1.TimepickerEvents.afterClose, []);
                _this.events.fire(types_1.TimepickerEvents.close, []); // TODO: remove sute_7.0
            },
            save: function () {
                _this.events.fire(types_1.TimepickerEvents.apply, [_this._time]);
                _this.events.fire(types_1.TimepickerEvents.save, [_this._time]); // TODO: remove sute_7.0
            },
        };
    };
    Timepicker.prototype._initEvents = function () {
        var _this = this;
        this._hoursSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._hoursSlider.config.min || value > _this._hoursSlider.config.max) {
                return;
            }
            if (_this.config.timeFormat === 12) {
                _this._time.AM = value < 12;
                _this._time.hour = value % 12 || 12;
            }
            else {
                _this._time.hour = value;
            }
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue()]);
            _this._inputsView.paint();
        });
        this._minutesSlider.events.on(ts_slider_1.SliderEvents.change, function (value) {
            if (value < _this._minutesSlider.config.min || value > _this._minutesSlider.config.max) {
                return;
            }
            _this._time.minute = value;
            _this.events.fire(types_1.TimepickerEvents.change, [_this.getValue()]);
            _this._inputsView.paint();
        });
    };
    Timepicker.prototype._draw = function () {
        return dom_1.el(".dhx_timepicker-inputs", __assign({}, this._handlers), [
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--hour", {
                _key: "hour",
                value: this._time.hour < 10 ? "0" + this._time.hour : this._time.hour,
            }),
            dom_1.el("span.dhx_timepicker-delimer", ":"),
            dom_1.el("input.dhx_timepicker-input.dhx_timepicker-input--minutes", {
                _key: "minute",
                value: this._time.minute < 10 ? "0" + this._time.minute : this._time.minute,
            }),
            this.config.timeFormat === 12
                ? dom_1.el(".dhx_timepicker-ampm", this._time.AM ? "AM" : "PM")
                : null,
        ]);
    };
    return Timepicker;
}(view_1.View));
exports.Timepicker = Timepicker;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = __webpack_require__(73);
var types_1 = __webpack_require__(12);
var dom_1 = __webpack_require__(0);
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(parent, config) {
        var _this = _super.call(this, parent, config) || this;
        // root layout
        _this._root = _this.config.parent || _this;
        _this._all = {};
        _this._parseConfig();
        if (_this.config.activeTab) {
            _this.config.activeView = _this.config.activeTab;
        }
        // Need replace to tabbar
        if (_this.config.views) {
            _this.config.activeView = _this.config.activeView || _this._cells[0].id;
            _this._isViewLayout = true;
        }
        if (!config.parent) {
            var view = dom_1.create({ render: function () { return _this.toVDOM(); } }, _this);
            _this.mount(parent, view);
        }
        return _this;
    }
    Layout.prototype.toVDOM = function () {
        if (this._isViewLayout) {
            var roots = [this.getCell(this.config.activeView).toVDOM()];
            return _super.prototype.toVDOM.call(this, roots);
        }
        var nodes = [];
        this._cells.forEach(function (cell) {
            var node = cell.toVDOM();
            if (Array.isArray(node)) {
                nodes = nodes.concat(node);
            }
            else {
                nodes.push(node);
            }
        });
        return _super.prototype.toVDOM.call(this, nodes);
    };
    Layout.prototype.removeCell = function (id) {
        if (!this.events.fire(types_1.LayoutEvents.beforeRemove, [id])) {
            return;
        }
        var root = this.config.parent || this;
        if (root !== this) {
            return root.removeCell(id);
        }
        // this === root layout
        var view = this.getCell(id);
        if (view) {
            var parent_1 = view.getParent();
            delete this._all[id];
            parent_1._cells = parent_1._cells.filter(function (cell) { return cell.id !== id; });
            parent_1.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterRemove, [id]);
    };
    Layout.prototype.addCell = function (config, index) {
        if (index === void 0) { index = -1; }
        if (!this.events.fire(types_1.LayoutEvents.beforeAdd, [config.id])) {
            return;
        }
        var view = this._createCell(config);
        if (index < 0) {
            index = this._cells.length + index + 1;
        }
        this._cells.splice(index, 0, view);
        this.paint();
        if (!this.events.fire(types_1.LayoutEvents.afterAdd, [config.id])) {
            return;
        }
    };
    Layout.prototype.getId = function (index) {
        if (index < 0) {
            index = this._cells.length + index;
        }
        return this._cells[index] ? this._cells[index].id : undefined;
    };
    Layout.prototype.getRefs = function (name) {
        return this._root.getRootView().refs[name];
    };
    Layout.prototype.getCell = function (id) {
        return this._root._all[id];
    };
    Layout.prototype.forEach = function (cb, parent, level) {
        if (level === void 0) { level = Infinity; }
        if (!this._haveCells(parent) || level < 1) {
            return;
        }
        var array;
        if (parent) {
            array = this._root._all[parent]._cells;
        }
        else {
            array = this._root._cells;
        }
        for (var index = 0; index < array.length; index++) {
            var cell = array[index];
            cb.call(this, cell, index, array);
            if (this._haveCells(cell.id)) {
                cell.forEach(cb, cell.id, --level);
            }
        }
    };
    // TODO: remove sute_7.0
    Layout.prototype.cell = function (id) {
        return this.getCell(id);
    };
    Layout.prototype._getCss = function (content) {
        var layoutCss = this._xLayout ? "dhx_layout-columns" : "dhx_layout-rows";
        var directionCss = this.config.align ? " " + layoutCss + "--" + this.config.align : "";
        if (content) {
            return (layoutCss +
                " dhx_layout-cell" +
                (this.config.align ? " dhx_layout-cell--" + this.config.align : ""));
        }
        else {
            var cellCss = this.config.parent ? _super.prototype._getCss.call(this) : "dhx_widget dhx_layout";
            var fullModeCss = this.config.parent ? "" : " dhx_layout-cell";
            return cellCss + (this.config.full ? fullModeCss : " " + layoutCss) + directionCss;
        }
    };
    Layout.prototype._parseConfig = function () {
        var _this = this;
        var config = this.config;
        var cells = config.rows || config.cols || config.views || [];
        this._xLayout = !config.rows;
        this._cells = cells.map(function (a) { return _this._createCell(a); });
    };
    Layout.prototype._createCell = function (cell) {
        var view;
        if (cell.rows || cell.cols || cell.views) {
            cell.parent = this._root;
            view = new Layout(this, cell);
        }
        else {
            view = new Cell_1.Cell(this, cell);
        }
        // FIxME
        this._root._all[view.id] = view;
        return view;
    };
    Layout.prototype._haveCells = function (id) {
        if (id) {
            var array = this._root._all[id];
            return array._cells && array._cells.length > 0;
        }
        return Object.keys(this._all).length > 0;
    };
    return Layout;
}(Cell_1.Cell));
exports.Layout = Layout;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(12);
var helpers_1 = __webpack_require__(74);
var events_1 = __webpack_require__(4);
var Cell = /** @class */ (function (_super) {
    __extends(Cell, _super);
    function Cell(parent, config) {
        var _this = 
        // asChild for detect parent object
        _super.call(this, parent, core_1.extend({ gravity: true, collapsed: false }, config)) || this;
        _this._disabled = [];
        var p = parent;
        if (p && p.isVisible) {
            _this._parent = p;
        }
        if (_this._parent && _this._parent.events) {
            _this.events = _this._parent.events;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
        }
        _this.config.full =
            _this.config.full === undefined
                ? Boolean(_this.config.header ||
                    _this.config.collapsable ||
                    _this.config.headerHeight ||
                    _this.config.headerIcon ||
                    _this.config.headerImage)
                : _this.config.full;
        _this._initHandlers();
        _this.id = _this.config.id || core_1.uid();
        return _this;
    }
    Cell.prototype.paint = function () {
        if (this.isVisible()) {
            var view = this.getRootView();
            if (view) {
                view.redraw();
            }
            else {
                this._parent.paint();
            }
        }
    };
    Cell.prototype.isVisible = function () {
        // top level node
        if (!this._parent) {
            if (this._container && this._container.tagName) {
                return true;
            }
            return Boolean(this.getRootNode());
        }
        // check active view in case of multiview
        var active = this._parent.config.activeView;
        if (active && active !== this.id) {
            return false;
        }
        // check that all parents of the cell are visible as well
        return !this.config.hidden && (!this._parent || this._parent.isVisible());
    };
    Cell.prototype.hide = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeHide, [this.id])) {
            return;
        }
        this.config.hidden = true;
        if (this._parent && this._parent.paint) {
            this._parent.paint();
        }
        this.events.fire(types_1.LayoutEvents.afterHide, [this.id]);
    };
    Cell.prototype.show = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeShow, [this.id])) {
            return;
        }
        if (this._parent && this._parent.config && this._parent.config.activeView !== undefined) {
            this._parent.config.activeView = this.id;
        }
        else {
            this.config.hidden = false;
        }
        if (this._parent && !this._parent.isVisible()) {
            this._parent.show();
        }
        this.paint();
        this.events.fire(types_1.LayoutEvents.afterShow, [this.id]);
    };
    Cell.prototype.expand = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeExpand, [this.id])) {
            return;
        }
        this.config.collapsed = false;
        this.events.fire(types_1.LayoutEvents.afterExpand, [this.id]);
        this.paint();
    };
    Cell.prototype.collapse = function () {
        if (!this.events.fire(types_1.LayoutEvents.beforeCollapse, [this.id])) {
            return;
        }
        this.config.collapsed = true;
        this.events.fire(types_1.LayoutEvents.afterCollapse, [this.id]);
        this.paint();
    };
    Cell.prototype.toggle = function () {
        if (this.config.collapsed) {
            this.expand();
        }
        else {
            this.collapse();
        }
    };
    Cell.prototype.getParent = function () {
        return this._parent;
    };
    Cell.prototype.destructor = function () {
        this.config = null;
        this.unmount();
    };
    Cell.prototype.getWidget = function () {
        return this._ui;
    };
    Cell.prototype.getCellView = function () {
        return this._parent && this._parent.getRefs(this._uid);
    };
    Cell.prototype.attach = function (name, config) {
        this.config.html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Cell.prototype.attachHTML = function (html) {
        this.config.html = html;
        this.paint();
    };
    Cell.prototype.toVDOM = function (nodes) {
        var _a;
        if (this.config === null) {
            this.config = {};
        }
        if (this.config.hidden) {
            return;
        }
        var style = this._calculateStyle();
        var stylePadding = core_1.isDefined(this.config.padding) ? { padding: this.config.padding } : {};
        var kids;
        if (!this.config.html) {
            if (this._ui) {
                var view = this._ui.getRootView();
                if (view.render) {
                    view = dom_1.inject(view);
                }
                kids = [view];
            }
            else {
                kids = nodes || null;
            }
        }
        var resizer = this.config.resizable && !this._isLastCell() && !this.config.collapsed
            ? dom_1.el(".dhx_layout-resizer." +
                (this._isXDirection() ? "dhx_layout-resizer--x" : "dhx_layout-resizer--y"), __assign(__assign({}, this._resizerHandlers), { _ref: "resizer_" + this._uid }), [
                dom_1.el("span.dhx_layout-resizer__icon", {
                    class: "dxi " +
                        (this._isXDirection() ? "dxi-dots-vertical" : "dxi-dots-horizontal"),
                }),
            ])
            : null;
        var handlers = {};
        if (this.config.on) {
            for (var key in this.config.on) {
                handlers["on" + key] = this.config.on[key];
            }
        }
        var cell = dom_1.el("div", __assign(__assign((_a = { _key: this._uid, style: this.config.full || this.config.html ? style : __assign(__assign({}, style), stylePadding), _ref: this._uid }, _a["aria-labelledby"] = this.config.id ? "tab-content-" + this.config.id : null, _a), handlers), { class: this._getCss(false) +
                (this.config.css ? " " + this.config.css : "") +
                (this.config.collapsed ? " dhx_layout-cell--collapsed" : "") +
                (this.config.resizable ? " dhx_layout-cell--resizeble" : "") +
                // for cells only
                (this.config.gravity ? " dhx_layout-cell--gravity" : "") }), this.config.full
            ? [
                dom_1.el("div", {
                    tabindex: this.config.collapsable ? "0" : "-1",
                    class: "dhx_layout-cell-header" +
                        (this._isXDirection()
                            ? " dhx_layout-cell-header--col"
                            : " dhx_layout-cell-header--row") +
                        (this.config.collapsable ? " dhx_layout-cell-header--collapseble" : "") +
                        (this.config.collapsed ? " dhx_layout-cell-header--collapsed" : "") +
                        (((this.getParent() || {}).config || {}).isAccordion
                            ? " dhx_layout-cell-header--accordion"
                            : ""),
                    style: {
                        height: this.config.headerHeight,
                    },
                    onclick: this._handlers.toggle,
                    onkeydown: this._handlers.enterCollapse,
                }, [
                    this.config.headerIcon &&
                        dom_1.el("span.dhx_layout-cell-header__icon", {
                            class: this.config.headerIcon,
                        }),
                    this.config.headerImage &&
                        dom_1.el(".dhx_layout-cell-header__image-wrapper", [
                            dom_1.el("img", {
                                src: this.config.headerImage,
                                class: "dhx_layout-cell-header__image",
                            }),
                        ]),
                    this.config.header &&
                        dom_1.el("h3.dhx_layout-cell-header__title", this.config.header),
                    this.config.collapsable
                        ? dom_1.el("div.dhx_layout-cell-header__collapse-icon", {
                            class: this._getCollapseIcon(),
                        })
                        : dom_1.el("div.dhx_layout-cell-header__collapse-icon", {
                            class: "dxi dxi-empty",
                        }),
                ]),
                !this.config.collapsed
                    ? dom_1.el("div", {
                        style: __assign(__assign({}, stylePadding), { height: "calc(100% - " + (this.config.headerHeight || 37) + "px)" }),
                        ".innerHTML": this.config.html,
                        class: this._getCss(true) + " dhx_layout-cell-content",
                    }, kids)
                    : null,
            ]
            : this.config.html
                ? [
                    dom_1.el(".dhx_layout-cell-content", {
                        ".innerHTML": this.config.html,
                        style: stylePadding,
                    }),
                ]
                : kids);
        return resizer ? [cell, resizer] : cell;
    };
    Cell.prototype._getCss = function (_content) {
        return "dhx_layout-cell";
    };
    Cell.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            enterCollapse: function (e) {
                if (e.keyCode === 13) {
                    _this._handlers.toggle();
                }
            },
            collapse: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.collapse();
            },
            expand: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.expand();
            },
            toggle: function () {
                if (!_this.config.collapsable) {
                    return;
                }
                _this.toggle();
            },
        };
        var blockOpts = {
            left: null,
            top: null,
            isActive: false,
            range: null,
            xLayout: null,
            nextCell: null,
            size: null,
            resizerLength: null,
            mode: null,
            percentsum: null,
        };
        var mouseMove = function (e) {
            if (!blockOpts.isActive || blockOpts.mode === types_1.resizeMode.unknown) {
                return;
            }
            var newValue = blockOpts.xLayout
                ? e.clientX - blockOpts.range.min + window.pageXOffset
                : e.clientY - blockOpts.range.min + window.pageYOffset;
            var prop = blockOpts.xLayout ? "width" : "height";
            if (newValue < 0) {
                newValue = blockOpts.resizerLength / 2;
            }
            else if (newValue > blockOpts.size) {
                newValue = blockOpts.size - blockOpts.resizerLength;
            }
            switch (blockOpts.mode) {
                case types_1.resizeMode.pixels:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    blockOpts.nextCell.config[prop] =
                        blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.mixedpx1:
                    _this.config[prop] = newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.mixedpx2:
                    blockOpts.nextCell.config[prop] =
                        blockOpts.size - newValue - blockOpts.resizerLength / 2 + "px";
                    break;
                case types_1.resizeMode.percents:
                    _this.config[prop] = (newValue / blockOpts.size) * blockOpts.percentsum + "%";
                    blockOpts.nextCell.config[prop] =
                        ((blockOpts.size - newValue) / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
                case types_1.resizeMode.mixedperc1:
                    _this.config[prop] = (newValue / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
                case types_1.resizeMode.mixedperc2:
                    blockOpts.nextCell.config[prop] =
                        ((blockOpts.size - newValue) / blockOpts.size) * blockOpts.percentsum + "%";
                    break;
            }
            _this.paint();
            _this.events.fire(types_1.LayoutEvents.resize, [_this.id]);
        };
        var mouseUp = function () {
            blockOpts.isActive = false;
            document.body.classList.remove("dhx_no-select--resize");
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
            _this.events.fire(types_1.LayoutEvents.afterResizeEnd, [_this.id]);
        };
        this._resizerHandlers = {
            onmousedown: function (e) {
                if (e.which === 3) {
                    return;
                }
                if (blockOpts.isActive) {
                    mouseUp();
                }
                if (!_this.events.fire(types_1.LayoutEvents.beforeResizeStart, [_this.id])) {
                    return;
                }
                document.body.classList.add("dhx_no-select--resize");
                var block = _this.getCellView();
                var nextCell = _this._getNextCell();
                var nextBlock = nextCell.getCellView();
                var resizerBlock = _this._getResizerView();
                var blockOffsets = block.el.getBoundingClientRect();
                var resizerOffsets = resizerBlock.el.getBoundingClientRect();
                var nextBlockOffsets = nextBlock.el.getBoundingClientRect();
                blockOpts.xLayout = _this._isXDirection();
                blockOpts.left = blockOffsets.left + window.pageXOffset;
                blockOpts.top = blockOffsets.top + window.pageYOffset;
                blockOpts.range = helpers_1.getBlockRange(blockOffsets, nextBlockOffsets, blockOpts.xLayout);
                blockOpts.size = blockOpts.range.max - blockOpts.range.min;
                blockOpts.isActive = true;
                blockOpts.nextCell = nextCell;
                blockOpts.resizerLength = blockOpts.xLayout ? resizerOffsets.width : resizerOffsets.height;
                blockOpts.mode = helpers_1.getResizeMode(blockOpts.xLayout, _this.config, nextCell.config);
                if (blockOpts.mode === types_1.resizeMode.percents) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum =
                        parseFloat(_this.config[field]) +
                            parseFloat(nextCell.config[field]);
                }
                if (blockOpts.mode === types_1.resizeMode.mixedperc1) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum =
                        (1 / (blockOffsets[field] / (blockOpts.size - blockOpts.resizerLength))) *
                            parseFloat(_this.config[field]);
                }
                if (blockOpts.mode === types_1.resizeMode.mixedperc2) {
                    var field = blockOpts.xLayout ? "width" : "height";
                    blockOpts.percentsum =
                        (1 / (nextBlockOffsets[field] / (blockOpts.size - blockOpts.resizerLength))) *
                            parseFloat(nextCell.config[field]);
                }
                document.addEventListener("mouseup", mouseUp);
                document.addEventListener("mousemove", mouseMove);
            },
            ondragstart: function (e) { return e.preventDefault(); },
        };
    };
    Cell.prototype._getCollapseIcon = function () {
        if (this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-right";
        }
        if (this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-left";
        }
        if (!this._isXDirection() && this.config.collapsed) {
            return "dxi dxi-chevron-up";
        }
        if (!this._isXDirection() && !this.config.collapsed) {
            return "dxi dxi-chevron-down";
        }
    };
    Cell.prototype._isLastCell = function () {
        var parent = this._parent;
        return parent && parent._cells.indexOf(this) === parent._cells.length - 1;
    };
    Cell.prototype._getNextCell = function () {
        var parent = this._parent;
        var index = parent._cells.indexOf(this);
        return parent._cells[index + 1];
    };
    Cell.prototype._getResizerView = function () {
        return this._parent.getRefs("resizer_" + this._uid);
    };
    Cell.prototype._isXDirection = function () {
        return this._parent && this._parent._xLayout;
    };
    Cell.prototype._calculateStyle = function () {
        var config = this.config;
        if (!config) {
            return;
        }
        var style = {};
        if (this._isXDirection()) {
            if (config.width !== undefined && !config.collapsed) {
                style.flexBasis = config.width;
                style.width = config.width;
            }
            if (config.height !== undefined) {
                style.height = config.height;
            }
        }
        else {
            if (config.height !== undefined && !config.collapsed) {
                style.height = config.height;
            }
            if (config.width !== undefined) {
                style.width = config.width;
            }
        }
        return style;
    };
    return Cell;
}(view_1.View));
exports.Cell = Cell;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(12);
function getResizeMode(isXLayout, conf1, conf2) {
    var field = isXLayout ? "width" : "height";
    var is1perc = conf1[field] && conf1[field].includes("%");
    var is2perc = conf2[field] && conf2[field].includes("%");
    var is1px = conf1[field] && conf1[field].includes("px");
    var is2px = conf2[field] && conf2[field].includes("px");
    if (is1perc && is2perc) {
        return types_1.resizeMode.percents;
    }
    if (is1px && is2px) {
        return types_1.resizeMode.pixels;
    }
    if (is1px && !is2px) {
        return types_1.resizeMode.mixedpx1;
    }
    if (is2px && !is1px) {
        return types_1.resizeMode.mixedpx2;
    }
    if (is1perc) {
        return types_1.resizeMode.mixedperc1;
    }
    if (is2perc) {
        return types_1.resizeMode.mixedperc2;
    }
    return types_1.resizeMode.unknown;
}
exports.getResizeMode = getResizeMode;
function getBlockRange(block1, block2, isXLayout) {
    if (isXLayout === void 0) { isXLayout = true; }
    if (isXLayout) {
        return {
            min: block1.left + window.pageXOffset,
            max: block2.right + window.pageXOffset,
        };
    }
    return {
        min: block1.top + window.pageYOffset,
        max: block2.bottom + window.pageYOffset,
    };
}
exports.getBlockRange = getBlockRange;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(76));
__export(__webpack_require__(30));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var Keymanager_1 = __webpack_require__(16);
var view_1 = __webpack_require__(6);
var ts_popup_1 = __webpack_require__(17);
var types_1 = __webpack_require__(30);
function normalizeValue(value, min, max) {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
}
function parseValue(value, min, max) {
    var values;
    if (value === undefined) {
        values = [];
    }
    else if (Array.isArray(value)) {
        values = value;
    }
    else if (typeof value === "string") {
        values = value.split(",").map(function (v) { return parseInt(v, 10); });
    }
    else {
        values = [value];
    }
    values[0] = values[0] === undefined ? min : normalizeValue(values[0], min, max);
    values[1] = values[1] === undefined ? max : normalizeValue(values[1], min, max);
    return values;
}
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider(container, config) {
        var _this = _super.call(this, container, core_1.extend({
            mode: "horizontal",
            min: 0,
            max: 100,
            step: 1,
            tooltip: true,
        }, config)) || this;
        _this._disabled = false;
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove sute_7.0
        if (_this.config.thumbLabel !== undefined) {
            _this.config.tooltip = _this.config.thumbLabel; // TODO: remove sute_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove sute_7.0
        }
        _this.events = new events_1.EventSystem(_this);
        _this._axis = _this.config.mode === "horizontal" ? "clientX" : "clientY";
        _this._initStartPosition();
        _this._initHotkeys();
        var vNode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didMount: function () { return _this._calcSliderPosition(); },
                didRedraw: function () { return _this._calcSliderPosition(); },
            },
        });
        _this._initHandlers();
        _this.mount(container, vNode);
        return _this;
    }
    Slider.prototype.disable = function () {
        this._disabled = true;
        this.paint();
    };
    Slider.prototype.enable = function () {
        this._disabled = false;
        this.paint();
    };
    Slider.prototype.isDisabled = function () {
        return this._disabled;
    };
    Slider.prototype.focus = function (extra) {
        this.getRootView().refs[extra ? "extraRunner" : "runner"].el.focus();
    };
    Slider.prototype.getValue = function () {
        var res;
        if (this.config.range) {
            var a = this._getValue(this._currentPosition);
            var b = this._getValue(this._extraCurrentPosition);
            res = a < b ? [a, b] : [b, a];
        }
        else {
            res = [this._getValue(this._currentPosition)];
        }
        return res;
    };
    Slider.prototype.setValue = function (value) {
        var old = this._getValue(this._currentPosition);
        if (Array.isArray(value) && value.length > 1) {
            var oldExtra = this._getValue(this._extraCurrentPosition);
            this._setValue(value[0], false);
            this.events.fire(types_1.SliderEvents.change, [value[0], old, false]);
            this._setValue(value[1], true);
            this.events.fire(types_1.SliderEvents.change, [value[1], oldExtra, true]);
        }
        else {
            value = parseFloat(value);
            if (!isNaN(value)) {
                this._setValue(value);
                this.events.fire(types_1.SliderEvents.change, [value, old, false]);
            }
            else {
                throw new Error("Wrong value type, for more info check documentation https://docs.dhtmlx.com/suite/slider__api__slider_setvalue_method.html");
            }
        }
        this.paint();
    };
    Slider.prototype.destructor = function () {
        this._hotkeysDestructor();
        this.unmount();
    };
    Slider.prototype._calcSliderPosition = function () {
        var root = this.getRootView();
        if (!root) {
            return;
        }
        var tracker = root.refs.track.el;
        var rect = tracker.getBoundingClientRect();
        this._offsets = {
            left: rect.left + window.pageXOffset,
            top: rect.top + window.pageYOffset,
        };
        this._length = this.config.mode === "horizontal" ? rect.width : rect.height;
    };
    Slider.prototype._initHotkeys = function () {
        var _this = this;
        var isRunnersInFocus = function () {
            var activeEl = document.activeElement;
            var refs = _this.getRootView().refs;
            if (!refs) {
                return false;
            }
            var runner = refs.runner;
            if (runner && runner.el === activeEl) {
                return true;
            }
            if (_this.config.range && refs.extraRunner && refs.extraRunner.el === activeEl) {
                return true;
            }
            return false;
        };
        this._hotkeysDestructor = Keymanager_1.addHotkeys({
            arrowleft: function (e) {
                if (_this.config.mode === "vertical") {
                    return;
                }
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowright: function (e) {
                if (_this.config.mode === "vertical") {
                    return;
                }
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowup: function (e) {
                if (_this.config.mode === "horizontal") {
                    return;
                }
                e.preventDefault();
                _this._move(_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
            arrowdown: function (e) {
                if (_this.config.mode === "horizontal") {
                    return;
                }
                e.preventDefault();
                _this._move(-_this.config.step, e.target.classList.contains("dhx_slider__thumb--extra"));
            },
        }, isRunnersInFocus);
    };
    Slider.prototype._move = function (value, forExtra) {
        if (this.config.inverse) {
            value = -value;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var oldValue = forExtra
            ? this._getValue(this._extraCurrentPosition)
            : this._getValue(this._currentPosition);
        var newValue = oldValue + value;
        this._setValue(oldValue + value, forExtra);
        if (newValue > max || newValue < min) {
            newValue = oldValue;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, forExtra]);
        this.paint();
    };
    Slider.prototype._initStartPosition = function () {
        var _a = this.config, max = _a.max, min = _a.min, range = _a.range;
        var _b = parseValue(this.config.value, this.config.min, this.config.max), value = _b[0], extraValue = _b[1];
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((max - extraValue) / (max - min)) * 100;
        }
        this._currentPosition = ((value - min) / (max - min)) * 100;
        if (range) {
            this._extraCurrentPosition = ((extraValue - min) / (max - min)) * 100;
        }
        if (this._isInverse()) {
            this._currentPosition = 100 - this._currentPosition;
            if (range) {
                this._extraCurrentPosition = 100 - this._extraCurrentPosition;
            }
        }
    };
    Slider.prototype._getValue = function (value) {
        if (this._isInverse()) {
            value = 100 - value;
        }
        var _a = this.config, min = _a.min, max = _a.max, step = _a.step;
        if (value === 100) {
            return max;
        }
        if (value === 0) {
            return min;
        }
        var val = (value * (max - min)) / 100;
        var remain = val % step;
        var rounder = remain >= step / 2 ? step : 0;
        var result = Number(min) + Number(val) - remain + rounder;
        return +result.toFixed(5);
    };
    Slider.prototype._setValue = function (val, forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        var _a = this.config, max = _a.max, min = _a.min;
        if (val > max || val < min) {
            return false;
        }
        var rawValue = ((val - min) / (max - min)) * 100;
        var newValue = this._isInverse() ? 100 - rawValue : rawValue;
        if (forExtra) {
            this._extraCurrentPosition = newValue;
        }
        else {
            this._currentPosition = newValue;
        }
    };
    Slider.prototype._initHandlers = function () {
        var _this = this;
        var mouseMove = function (e) {
            e.preventDefault();
            var x = ((e[_this._axis] - _this._getBegining()) / _this._length) * 100;
            if (_this._findNewDirection) {
                if (Math.abs(_this._currentPosition - x) < 1) {
                    return;
                }
                if (x > _this._currentPosition) {
                    _this._possibleRange = [_this._currentPosition, 100];
                }
                else {
                    _this._possibleRange = [0, _this._currentPosition];
                }
                _this._findNewDirection = null;
            }
            if (_this._inSide(x)) {
                _this._updatePosition(x, _this._isExtraActive);
            }
            _this.paint();
        };
        var mouseUp = function (e) {
            _this.events.fire(types_1.SliderEvents.mouseup, [e]);
            setTimeout(function () {
                _this._isMouseMoving = false;
                _this.paint();
            }, 4);
            document.removeEventListener("mouseup", mouseUp);
            document.removeEventListener("mousemove", mouseMove);
        };
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            onmousedown: function (e) {
                if (_this._disabled || e.which === 3) {
                    return;
                }
                _this.events.fire(types_1.SliderEvents.mousedown, [e]);
                _this._isMouseMoving = true;
                var active;
                if (e.target.classList.contains("dhx_slider__thumb--extra")) {
                    _this._isExtraActive = true;
                    active = _this._extraCurrentPosition;
                }
                else {
                    _this._isExtraActive = false;
                    active = _this._currentPosition;
                }
                _this._findNewDirection = null;
                // define possible range
                if (_this.config.range) {
                    var _a = _this._currentPosition > _this._extraCurrentPosition
                        ? [_this._currentPosition, _this._extraCurrentPosition]
                        : [_this._extraCurrentPosition, _this._currentPosition], more = _a[0], less = _a[1];
                    if (_this._currentPosition === _this._extraCurrentPosition) {
                        _this._findNewDirection = active;
                        _this._possibleRange = [0, 100];
                    }
                    else if (active < more) {
                        _this._possibleRange = [0, more];
                    }
                    else {
                        _this._possibleRange = [less, 100];
                    }
                }
                else {
                    _this._possibleRange = [0, 100];
                }
                document.addEventListener("mousemove", mouseMove);
                document.addEventListener("mouseup", mouseUp);
            },
            onlabelClick: function () {
                var refs = _this.getRootView().refs;
                refs.runner.el.focus();
            },
            onclick: function (e) {
                if (_this._disabled || _this._isMouseMoving || e.which === 3) {
                    return;
                }
                var x = ((e[_this._axis] - _this._getBegining()) / _this._length) * 100;
                var refs = _this.getRootView().refs;
                if (_this.config.range) {
                    var dist = Math.abs(_this._currentPosition - x);
                    var extraDist = Math.abs(_this._extraCurrentPosition - x);
                    if (dist < extraDist) {
                        _this._updatePosition(x, false);
                        refs.runner.el.focus();
                    }
                    else {
                        _this._updatePosition(x, true);
                        refs.extraRunner.el.focus();
                    }
                }
                else {
                    _this._updatePosition(x, false);
                    refs.runner.el.focus();
                }
                _this.paint();
            },
            onmouseover: function () {
                _this._mouseIn = true;
                _this.paint();
            },
            onmouseout: function () {
                _this._mouseIn = false;
                _this.paint();
            },
            onfocus: function () {
                _this._focusIn = true;
                _this.paint();
            },
            onblur: function () {
                _this._focusIn = false;
                _this.paint();
            },
        };
    };
    Slider.prototype._getBegining = function () {
        return this.config.mode === "horizontal"
            ? this._offsets.left - window.pageXOffset
            : this._offsets.top - window.pageYOffset;
    };
    Slider.prototype._inSide = function (x) {
        var range = this._possibleRange;
        if (x < range[0]) {
            this._updatePosition(range[0], this._isExtraActive);
            return false;
        }
        if (x > range[1]) {
            this._updatePosition(range[1], this._isExtraActive);
            return false;
        }
        return true;
    };
    Slider.prototype._updatePosition = function (x, extra) {
        if (extra === void 0) { extra = false; }
        if (x > 100) {
            x = 100;
        }
        if (x < 0) {
            x = 0;
        }
        var _a = this.config, max = _a.max, min = _a.min;
        var position = extra ? this._extraCurrentPosition : this._currentPosition;
        var oldValue = this._getValue(position);
        var newValue = this._getValue(x);
        if (oldValue === newValue) {
            return;
        }
        var rawValue = ((newValue - min) / (max - min)) * 100;
        var value = this._isInverse() ? 100 - rawValue : rawValue;
        if (extra) {
            this._extraCurrentPosition = value;
        }
        else {
            this._currentPosition = value;
        }
        this.events.fire(types_1.SliderEvents.change, [newValue, oldValue, extra]);
    };
    Slider.prototype._getRunnerStyle = function (forExtra) {
        var _a;
        if (forExtra === void 0) { forExtra = false; }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        return _a = {},
            _a[direction] = pos + "%",
            _a;
    };
    Slider.prototype._isInverse = function () {
        return ((this.config.inverse && this.config.mode === "horizontal") ||
            (!this.config.inverse && this.config.mode === "vertical"));
    };
    Slider.prototype._getRunnerCss = function (forExtra) {
        if (forExtra === void 0) { forExtra = false; }
        return ("dhx_slider__thumb" +
            (forExtra ? " dhx_slider__thumb--extra" : "") +
            (this._isMouseMoving && ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive))
                ? " dhx_slider__thumb--active"
                : "") +
            (this._disabled ? " dhx_slider__thumb--disabled" : "") +
            (this._isNullable(forExtra ? this._extraCurrentPosition : this._currentPosition) &&
                !this.config.range
                ? " dhx_slider__thumb--nullable"
                : ""));
    };
    Slider.prototype._draw = function () {
        var _a = this.config, labelPosition = _a.labelPosition, labelWidth = _a.labelWidth, mode = _a.mode, label = _a.label, hiddenLabel = _a.hiddenLabel, tick = _a.tick, majorTick = _a.majorTick, css = _a.css, helpMessage = _a.helpMessage;
        var width = labelPosition === "left" && labelWidth ? labelWidth : "";
        return dom_1.el("div", {
            class: "dhx_slider" +
                " dhx_slider--mode_" +
                mode +
                (label && labelPosition === "left" ? " dhx_slider--label-inline" : "") +
                (hiddenLabel ? " dhx_slider--label_sr" : "") +
                (tick ? " dhx_slider--ticks" : "") +
                (majorTick ? " dhx_slider--major-ticks" : "") +
                (css ? " " + css : "") +
                (this._disabled ? " dhx_slider--disabled" : ""),
        }, [
            label
                ? dom_1.el("label.dhx_label.dhx_slider__label", {
                    style: { minWidth: width, maxWidth: width },
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.onlabelClick,
                }, helpMessage
                    ? [
                        dom_1.el("span.dhx_label__holder", label),
                        dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                        }),
                    ]
                    : label)
                : null,
            this._drawSlider(),
        ]);
    };
    Slider.prototype._drawSlider = function () {
        return dom_1.el(".dhx_widget.dhx_slider__track-holder", 
        // (this.config.mode === Direction.vertical ? ".dhx_slider--vertical" : ".dhx_slider--horizontal"),
        {
            dhx_widget_id: this._uid,
        }, [
            dom_1.el(".dhx_slider__track", {
                _ref: "track",
                onmouseover: this._handlers.onmouseover,
                onmouseout: this._handlers.onmouseout,
                onclick: this._handlers.onclick,
            }, [
                this._getDetector(),
                dom_1.el("div", {
                    _ref: "runner",
                    class: this._getRunnerCss(),
                    onmousedown: this._handlers.onmousedown,
                    onmousemove: this._handlers.onmousemove,
                    onfocus: this._handlers.onfocus,
                    onblur: this._handlers.onblur,
                    style: this._getRunnerStyle(),
                    tabindex: 0,
                }),
                this.config.tooltip && (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip()
                    : null,
                this.config.tooltip &&
                    this.config.range &&
                    (this._mouseIn || this._focusIn || this._isMouseMoving)
                    ? this._drawTooltip(true)
                    : null,
                this.config.range
                    ? dom_1.el("div", {
                        _ref: "extraRunner",
                        class: this._getRunnerCss(true),
                        onmousedown: this._handlers.onmousedown,
                        onmousemove: this._handlers.onmousemove,
                        onfocus: this._handlers.onfocus,
                        onblur: this._handlers.onblur,
                        style: this._getRunnerStyle(true),
                        tabindex: 0,
                    })
                    : null,
            ]),
            this.config.tick ? this._drawTicks() : null,
        ]);
    };
    Slider.prototype._getDetector = function () {
        var _a, _b, _c;
        if (this._disabled) {
            return dom_1.el(".dhx_slider__range");
        }
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var size = this.config.mode === "horizontal" ? "width" : "height";
        if (this.config.range) {
            var _d = this._currentPosition > this._extraCurrentPosition
                ? [this._currentPosition, this._extraCurrentPosition]
                : [this._extraCurrentPosition, this._currentPosition], more = _d[0], less = _d[1];
            return dom_1.el(".dhx_slider__range", {
                style: (_a = {},
                    _a[direction] = less + "%",
                    _a[size] = more - less + "%",
                    _a),
            });
        }
        if (this._isInverse()) {
            return dom_1.el(".dhx_slider__range", {
                style: (_b = {},
                    _b[direction] = this._currentPosition + "%",
                    _b[size] = 100 - this._currentPosition + "%",
                    _b),
            });
        }
        return dom_1.el(".dhx_slider__range", {
            style: (_c = {},
                _c[direction] = 0,
                _c[size] = this._currentPosition + "%",
                _c),
        });
    };
    Slider.prototype._drawTooltip = function (forExtra) {
        var _a;
        if (forExtra === void 0) { forExtra = false; }
        var pos = forExtra ? this._extraCurrentPosition : this._currentPosition;
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        var classNameModifiers = this.config.mode === "horizontal"
            ? ".dhx_slider__thumb-label--horizontal"
            : ".dhx_slider__thumb-label--vertical";
        if ((forExtra && this._isExtraActive) || (!forExtra && !this._isExtraActive)) {
            classNameModifiers += ".dhx_slider__thumb-label--active";
        }
        var style = (_a = {},
            _a[direction] = pos + "%",
            _a);
        return dom_1.el(".dhx_slider__thumb-label" + classNameModifiers, {
            style: style,
        }, this._getValue(pos));
    };
    Slider.prototype._getTicks = function () {
        var _a = this.config, max = _a.max, min = _a.min, step = _a.step, tick = _a.tick, majorTick = _a.majorTick;
        var len = max - min;
        var tickLength = (step * tick) / len;
        var positions = [];
        var length = 0;
        var index = 0;
        while (length < 1) {
            var tickValue = +(Number(min) + length * len).toFixed(5);
            var isMultiple = index % majorTick === 0;
            positions.push({
                position: (this._isInverse() ? (1 - length) * 100 : length * 100) + "%",
                isMultiple: isMultiple,
                label: isMultiple && typeof this.config.tickTemplate === "function"
                    ? this.config.tickTemplate(tickValue)
                    : null,
            });
            length += tickLength;
            index++;
        }
        positions.push({
            position: (this._isInverse() ? 0 : 100) + "%",
            isMultiple: true,
            label: typeof this.config.tickTemplate === "function" ? this.config.tickTemplate(max) : null,
        });
        return positions;
    };
    Slider.prototype._drawTicks = function () {
        var direction = this.config.mode === "horizontal" ? "left" : "top";
        return dom_1.el(".dhx_slider__ticks-holder", this._getTicks().map(function (tick) {
            var _a;
            return dom_1.el("div", {
                class: "dhx_slider__tick" + (tick.isMultiple ? " dhx_slider__tick--major" : ""),
                style: (_a = {},
                    _a[direction] = tick.position,
                    _a),
            }, tick.label !== undefined ? [dom_1.el(".dhx_slider__tick-label", tick.label)] : null);
        }));
    };
    Slider.prototype._isNullable = function (value) {
        if (this._isInverse()) {
            return value === 100;
        }
        else {
            return value === 0;
        }
    };
    return Slider;
}(view_1.View));
exports.Slider = Slider;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var view_1 = __webpack_require__(6);
var types_1 = __webpack_require__(29);
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, null, core_1.extend({}, config)) || this;
        var popup = (_this._popup = document.createElement("div"));
        popup.className = "dhx_widget dhx_popup" + (_this.config.css ? " " + _this.config.css : "");
        popup.style.position = "absolute";
        _this.mount(popup, dom_1.create({
            render: function () { return _this.toVDOM(); },
        }));
        _this._clickEvent = function (e) { return _this.events.fire(types_1.PopupEvents.click, [e]); };
        _this.events = config.events || new events_1.EventSystem(_this);
        _this._isActive = false;
        return _this;
    }
    Popup.prototype.show = function (node, config, attached) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!this.events.fire(types_1.PopupEvents.beforeShow, [node])) {
            return;
        }
        node = html_1.toNode(node);
        if (this._isActive) {
            this._setPopupSize(node, config);
            return;
        }
        if (attached) {
            this.attach(attached);
        }
        dom_1.awaitRedraw()
            .then(function () {
            _this._setPopupSize(node, config);
            _this._popup.style.position = "fixed";
            document.body.appendChild(_this._popup);
            _this._isActive = true;
        })
            .then(function () {
            _this._popup.style.position = "absolute";
            _this.events.fire(types_1.PopupEvents.afterShow, [node]);
            _this._outerClickDestructor = _this._detectOuterClick(node);
        });
    };
    Popup.prototype.hide = function () {
        this._hide(false, null);
    };
    Popup.prototype.isVisible = function () {
        return this._isActive;
    };
    Popup.prototype.attach = function (name, config) {
        this._html = null;
        if (typeof name === "object") {
            this._ui = name;
        }
        else if (typeof name === "string") {
            this._ui = new window.dhx[name](null, config);
        }
        else if (typeof name === "function") {
            if (name.prototype instanceof view_1.View) {
                this._ui = new name(null, config);
            }
            else {
                this._ui = {
                    getRootView: function () {
                        return name(config);
                    },
                };
            }
        }
        this.paint();
        return this._ui;
    };
    Popup.prototype.attachHTML = function (html) {
        this._html = html;
        this.paint();
    };
    Popup.prototype.getWidget = function () {
        return this._ui;
    };
    Popup.prototype.getContainer = function () {
        return this.getRootView().refs.content.el;
    };
    Popup.prototype.toVDOM = function () {
        var view;
        if (this._html) {
            view = dom_1.el(".dhx_popup__inner-html-content", {
                ".innerHTML": this._html,
            });
        }
        else {
            view = this._ui ? this._ui.getRootView() : null;
            if (view && view.render) {
                view = dom_1.inject(view);
            }
        }
        return dom_1.el("div", {
            class: "dhx_popup-content",
            onclick: this._clickEvent,
            _key: this._uid,
            _ref: "content",
        }, [view]);
    };
    Popup.prototype.destructor = function () {
        this.hide();
        if (this._outerClickDestructor) {
            this._outerClickDestructor();
        }
        this._popup = null;
    };
    Popup.prototype._setPopupSize = function (node, config, calls) {
        var _this = this;
        if (calls === void 0) { calls = 3; }
        var _a = this._popup.getBoundingClientRect(), width = _a.width, height = _a.height;
        // TODO: IE popup height = 0
        if (this._timeout) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (calls && (width === 0 || height === 0)) {
            this._timeout = setTimeout(function () {
                if (!_this._isActive) {
                    return;
                }
                _this._setPopupSize(node, config, calls - 1);
                _this._timeout = null;
            });
            return;
        }
        var _b = html_1.fitPosition(node, __assign(__assign({ centering: true, mode: "bottom" }, config), { width: width,
            height: height })), left = _b.left, top = _b.top;
        this._popup.style.left = left;
        this._popup.style.top = top;
        if (config.indent && config.indent !== 0) {
            switch (config.mode) {
                case "top":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "bottom":
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "left":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) -
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                case "right":
                    this._popup.style.left =
                        parseInt(this._popup.style.left.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
                default:
                    this._popup.style.top =
                        parseInt(this._popup.style.top.slice(0, -2), null) +
                            parseInt(config.indent.toString(), null) +
                            "px";
                    break;
            }
        }
    };
    Popup.prototype._detectOuterClick = function (node) {
        var _this = this;
        var outerClick = function (e) {
            var target = e.target;
            while (target) {
                if (target === node || target === _this._popup) {
                    return;
                }
                target = target.parentNode;
            }
            if (_this._hide(true, e)) {
                document.removeEventListener("click", outerClick);
            }
        };
        document.addEventListener("click", outerClick);
        return function () { return document.removeEventListener("click", outerClick); };
    };
    Popup.prototype._hide = function (fromOuterClick, e) {
        if (this._isActive) {
            if (!this.events.fire(types_1.PopupEvents.beforeHide, [fromOuterClick, e])) {
                return false;
            }
            document.body.removeChild(this._popup);
            this._isActive = false;
            if (this._outerClickDestructor) {
                this._outerClickDestructor();
                this._outerClickDestructor = null;
            }
            this.events.fire(types_1.PopupEvents.afterHide, [e]);
            return true;
        }
    };
    return Popup;
}(view_1.View));
exports.Popup = Popup;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    hours: "Hours",
    minutes: "Minutes",
    save: "save",
};
exports.default = locale;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function is designed to resolve conflicts with the time setting for the 12 hour format.
 */
function isTimeCheck(value) {
    return /(^12:[0-5][0-9]?AM$)/i.test(value);
}
exports.isTimeCheck = isTimeCheck;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var DateFormatter_1 = __webpack_require__(18);
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    DateHelper.copy = function (d) {
        return new Date(d);
    };
    DateHelper.fromYear = function (year) {
        return new Date(year, 0, 1);
    };
    DateHelper.fromYearAndMonth = function (year, month) {
        return new Date(year, month, 1);
    };
    DateHelper.weekStart = function (d, firstWeekday) {
        var diff = (d.getDay() + 7 - firstWeekday) % 7;
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
    };
    DateHelper.monthStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), 1);
    };
    DateHelper.yearStart = function (d) {
        return new Date(d.getFullYear(), 0, 1);
    };
    DateHelper.dayStart = function (d) {
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    };
    DateHelper.addDay = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth(), d.getDate() + count);
    };
    DateHelper.addMonth = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear(), d.getMonth() + count);
    };
    DateHelper.addYear = function (d, count) {
        if (count === void 0) { count = 1; }
        return new Date(d.getFullYear() + count, d.getMonth());
    };
    DateHelper.withHoursAndMinutes = function (d, hours, minutes, dateFormat) {
        if (dateFormat === undefined || (!dateFormat && hours === 12) || (dateFormat && hours !== 12)) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours, minutes);
        }
        else if (dateFormat && hours === 12) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, minutes);
        }
        else {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hours + 12, minutes);
        }
    };
    DateHelper.setMonth = function (d, month) {
        d.setMonth(month);
    };
    DateHelper.setYear = function (d, year) {
        d.setFullYear(year);
    };
    DateHelper.mergeHoursAndMinutes = function (source, target) {
        return new Date(source.getFullYear(), source.getMonth(), source.getDate(), target.getHours(), target.getMinutes());
    };
    DateHelper.isWeekEnd = function (d) {
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DateHelper.getTwelweYears = function (d) {
        var y = d.getFullYear();
        var firstYear = y - (y % 12);
        return core_1.range(firstYear, firstYear + 11);
    };
    DateHelper.getWeekNumber = function (d) {
        if (d.getDay() !== 6) {
            d = DateHelper.addDay(d, 6 - d.getDay());
        }
        var dayMS = 24 * 60 * 60 * 1000;
        var ordinal = (d.valueOf() - DateHelper.yearStart(d).valueOf()) / dayMS;
        return Math.floor((ordinal - d.getDay() + 10) / 7);
    };
    DateHelper.isSameDay = function (d1, d2) {
        return (d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate());
    };
    DateHelper.toDateObject = function (date, dateFormat) {
        if (typeof date === "string") {
            return DateFormatter_1.stringToDate(date, dateFormat);
        }
        else {
            return new Date(date);
        }
    };
    DateHelper.nullTimestampDate = new Date(0);
    return DateHelper;
}());
exports.DateHelper = DateHelper;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.linkButtonClasses = ".dhx_button.dhx_button--view_link.dhx_button--icon.dhx_button--size_medium.dhx_button--color_secondary";


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var CheckboxEditor = /** @class */ (function () {
    function CheckboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    CheckboxEditor.prototype._startEdit = function (e) {
        if (!this._config.events.fire(types_1.GridEvents.beforeEditStart, [
            this._cell.row,
            this._cell.col,
            "checkbox",
        ])) {
            e.preventDefault();
            return;
        }
        this._config.events.fire(types_1.GridEvents.afterEditStart, [this._cell.row, this._cell.col, "checkbox"]);
    };
    CheckboxEditor.prototype.endEdit = function () {
        var value = this._checked;
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            this._handlers = {};
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
    };
    CheckboxEditor.prototype.toHTML = function () {
        if (this._checked === undefined) {
            this._checked = this._cell.row[this._cell.col.id];
        }
        return dom_1.el("label.dhx_checkbox.dhx_cell-editor__checkbox", [
            dom_1.el("input.dhx_checkbox__input", {
                type: "checkbox",
                _hooks: {
                    didInsert: this._handlers.didInsert,
                },
                _key: "cell_editor",
                dhx_id: "cell_editor",
                checked: this._checked,
                style: {
                    userSelect: "none",
                },
                oninput: this._handlers.onClick,
            }),
            dom_1.el("span.dhx_checkbox__visual-input"),
        ]);
    };
    CheckboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onChange: function (e) {
                _this._checked = e.target.checked;
                _this.endEdit();
            },
            didInsert: function (node) {
                _this._checkbox = node.el.parentNode.lastChild;
                _this._input = node.el.parentNode.firstChild;
                _this._input.addEventListener("change", _this._handlers.onChange);
            },
            onClick: function (e) {
                _this._startEdit(e);
            },
        };
    };
    return CheckboxEditor;
}());
exports.CheckboxEditor = CheckboxEditor;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(3);
var ts_combobox_1 = __webpack_require__(34);
var ComboboxEditor = /** @class */ (function () {
    function ComboboxEditor(row, col, config) {
        this._config = config;
        this._cell = { row: row, col: col };
        this._initHandlers();
    }
    ComboboxEditor.prototype.endEdit = function (withoutSave) {
        var value;
        if (!withoutSave) {
            value = this._input.getValue();
        }
        if (this._config.events.fire(types_1.GridEvents.beforeEditEnd, [value, this._cell.row, this._cell.col])) {
            document.removeEventListener("click", this._handlers.onOuterClick);
            this._handlers = {};
            this._config.events.fire(types_1.GridEvents.afterEditEnd, [value, this._cell.row, this._cell.col]);
        }
        else {
            this._input.focus();
        }
    };
    ComboboxEditor.prototype.toHTML = function () {
        var _this = this;
        var content = this._cell.col.options.map(function (item) {
            return { id: "" + item, value: item };
        }) || [];
        if (!this._input) {
            this._input = new ts_combobox_1.Combobox(null, {
                readonly: true,
                cellHeight: 37,
                css: "dhx_cell-editor__combobox",
            });
            this._input.data.parse(content);
            this._input.setValue(this._cell.row[this._cell.col.id]);
        }
        document.addEventListener("click", this._handlers.onOuterClick);
        this._config.$editable.editor = this;
        dom_1.awaitRedraw().then(function () {
            var holderNode = _this._input.getRootView().refs.holder.el;
            _this._input.popup.getContainer().style.width = holderNode.offsetWidth + "px";
            _this._input.popup.show(holderNode);
        });
        return dom_1.inject(this._input.getRootView());
    };
    ComboboxEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onOuterClick: function (e) {
                if (!(e.target instanceof Node &&
                    _this._input.getRootNode() &&
                    _this._input.getRootNode().contains(e.target))) {
                    _this.endEdit();
                }
            },
        };
    };
    return ComboboxEditor;
}());
exports.ComboboxEditor = ComboboxEditor;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var html_1 = __webpack_require__(2);
var keycodes_1 = __webpack_require__(85);
var view_1 = __webpack_require__(6);
var ts_data_1 = __webpack_require__(5);
var ts_layout_1 = __webpack_require__(28);
var ts_list_1 = __webpack_require__(86);
var ts_popup_1 = __webpack_require__(17);
var keyListener_1 = __webpack_require__(91);
var en_1 = __webpack_require__(36);
var helper_1 = __webpack_require__(92);
var types_1 = __webpack_require__(37);
function itemsCountTemplate(count, templateFN) {
    if (typeof templateFN === "function") {
        return templateFN(count);
    }
    else {
        return count + " " + en_1.default.selectedItems;
    }
}
var template = function (item) {
    if (item.icon) {
        return "<span class=\"" + item.icon + " dhx_combobox-options__icon\"></span> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    if (item.src) {
        return "<img src=\"" + item.src + "\" class=\"dhx_combobox-options__image\"></img> <span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
    }
    return "<span class=\"dhx_combobox-options__value\">" + item.value + "</span>";
};
var Combobox = /** @class */ (function (_super) {
    __extends(Combobox, _super);
    function Combobox(element, config) {
        var _this = _super.call(this, element, core_1.extend({
            // selectAllButton: true
            template: template,
            listHeight: 224,
            itemHeight: 32,
            disabled: false,
        }, config)) || this;
        _this.config.itemsCount = _this.config.itemsCount || _this.config.showItemsCount; // TODO: remove sute_7.0
        _this.config.helpMessage = _this.config.helpMessage || _this.config.help; // TODO: remove sute_7.0
        if (_this.config.cellHeight && _this.config.itemHeight === 32) {
            _this.config.itemHeight = _this.config.cellHeight; // TODO: remove sute_7.0
        }
        if (_this.config.labelInline) {
            _this.config.labelPosition = "left"; // TODO: remove sute_7.0
        }
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        _this.popup = new ts_popup_1.Popup();
        _this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.afterHide, function () {
            if (_this.config.multiselection) {
                _this._state.value = "";
            }
            _this.paint();
        });
        _this.popup.events.on(ts_popup_1.PopupEvents.beforeHide, function (fromOuterClick) {
            if (fromOuterClick) {
                if (!_this.events.fire(types_1.ComboboxEvents.beforeClose)) {
                    return;
                }
                _this.events.fire(types_1.ComboboxEvents.afterClose);
                _this.events.fire(types_1.ComboboxEvents.close); // TODO: remove sute_7.0
            }
        });
        if (_this.config.readonly) {
            _this._keyListener = new keyListener_1.KeyListener();
        }
        _this._state = {
            value: "",
            ignoreNext: false,
            canDelete: false,
            unselectActive: false,
            currentState: types_1.ComboState.default,
        };
        _this._initHandlers();
        _this._createLayout();
        _this._initEvents();
        var vnode = dom_1.create({
            render: function () { return _this._draw(); },
            hooks: {
                didRedraw: function () {
                    if (_this.popup.isVisible()) {
                        _this.focus();
                        _this._configurePopup();
                    }
                },
            },
        });
        // const container = toNode(element);
        _this.mount(element, vnode);
        return _this;
    }
    Combobox.prototype.focus = function () {
        if (this.config.disabled) {
            return false;
        }
        var rootView = this.getRootView();
        rootView.refs.input.el.focus();
    };
    Combobox.prototype.enable = function () {
        this.config.disabled = false;
        this.paint();
    };
    Combobox.prototype.disable = function () {
        this.config.disabled = true;
        this.paint();
    };
    Combobox.prototype.isDisabled = function () {
        return this.config.disabled;
    };
    Combobox.prototype.clear = function () {
        if (this.config.disabled) {
            return false;
        }
        this.list.selection.remove();
        this._state.value = "";
        this._filter();
        this.paint();
    };
    Combobox.prototype.getValue = function (asArray) {
        var ids = this.list.selection.getId();
        if (asArray) {
            return core_1.wrapBox(ids);
        }
        return Array.isArray(ids) ? ids.join(",") : ids;
    };
    Combobox.prototype.setValue = function (ids) {
        var _this = this;
        if (this.config.disabled) {
            return false;
        }
        this._filter();
        this.list.selection.remove();
        this._state.value = "";
        if (this.config.multiselection) {
            if (typeof ids === "string") {
                ids = ids.split(",");
            }
            ids.forEach(function (id) { return _this.list.selection.add(id); });
        }
        else {
            var id = core_1.unwrapBox(ids);
            this.list.selection.add(id);
            var item = this.data.getItem(id);
            if (item) {
                this._state.value = this._getItemText(item);
            }
        }
        this.paint();
    };
    Combobox.prototype.destructor = function () {
        this.popup.destructor();
        this.events.clear();
        this.list.destructor();
        this._layout.config = null;
        this._layout.destructor();
        this.unmount();
    };
    // TODO: Remove from API
    Combobox.prototype.setState = function (state) {
        switch (state) {
            case "success":
                this._state.currentState = types_1.ComboState.success;
                break;
            case "error":
                this._state.currentState = types_1.ComboState.error;
                break;
            default:
                this._state.currentState = types_1.ComboState.default;
                break;
        }
        this.paint();
    };
    Combobox.prototype._createLayout = function () {
        var _this = this;
        var list = (this.list = new ts_list_1.List(null, {
            template: this.config.template,
            virtual: this.config.virtual,
            keyNavigation: function () { return _this.popup.isVisible(); },
            multiselection: this.config.multiselection,
            itemHeight: this.config.itemHeight,
            height: this.config.listHeight,
            data: this.data,
        }));
        var layout = (this._layout = new ts_layout_1.Layout(this.popup.getContainer(), {
            css: "dhx_combobox-options dhx_combobox__options",
            rows: [
                {
                    id: "select-unselect-all",
                    hidden: !this.config.multiselection || !this.config.selectAllButton,
                },
                { id: "list", css: "dhx_layout-cell--gravity" },
                {
                    id: "not-found",
                    hidden: true,
                },
            ],
            on: {
                click: {
                    ".dhx_combobox__action-select-all": this._handlers.selectAll,
                },
            },
        }));
        layout.getCell("list").attach(list);
        if (this.config.multiselection && this.config.selectAllButton) {
            layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
        }
    };
    Combobox.prototype._initHandlers = function () {
        var _this = this;
        if (this.config.helpMessage) {
            this._helper = new ts_popup_1.Popup({
                css: "dhx_tooltip dhx_tooltip--forced dhx_tooltip--light",
            });
            this._helper.attachHTML(this.config.helpMessage);
        }
        this._handlers = {
            showHelper: function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this._helper.show(e.target);
            },
            selectAll: function () {
                _this.list.selection.remove();
                if (_this._state.unselectActive) {
                    _this.data.filter();
                    _this.list.selection.getId().forEach(function (id) {
                        _this.list.selection.remove(id);
                    });
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                }
                else {
                    _this.data.filter();
                    _this.list.selection.add();
                    if (_this.config.selectAllButton) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                        _this._state.unselectActive = true;
                    }
                }
                _this.paint();
            },
            onkeydown: function (e) {
                if (!_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.DOWN_ARROW) {
                    _this._showOptions();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.RIGHT_ARROW) {
                    if (_this.config.readonly && !_this.config.multiselection) {
                        var focused = _this.list.getFocusIndex();
                        if (focused >= 0 && focused <= _this.data.getLength()) {
                            e.preventDefault();
                            _this.list.setFocusIndex(focused + 1);
                        }
                    }
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.LEFT_ARROW) {
                    if (_this.config.readonly && !_this.config.multiselection) {
                        var focused = _this.list.getFocusIndex();
                        if (focused >= 0 && focused <= _this.data.getLength()) {
                            e.preventDefault();
                            _this.list.setFocusIndex(focused - 1);
                        }
                    }
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ESC) {
                    _this._hideOptions();
                }
                if (_this.popup.isVisible() && e.which === keycodes_1.KEY_CODES.ENTER) {
                    _this.setValue(_this.list.data.getId(_this.list.getFocusIndex()));
                }
            },
            onkeyup: function (e) {
                if (!_this.config.multiselection || _this.config.itemsCount) {
                    return;
                }
                if (_this._state.ignoreNext) {
                    _this._state.ignoreNext = false;
                    return;
                }
                if (e.which === keycodes_1.KEY_CODES.BACKSPACE &&
                    _this._state.canDelete &&
                    _this.list.selection.getId().length) {
                    var selected = _this.list.selection.getId();
                    var id = selected[selected.length - 1];
                    _this.list.selection.remove(id);
                    _this.paint();
                }
            },
            oninput: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                var input = e.target;
                var value = input.value;
                _this.events.fire(types_1.ComboboxEvents.input, [value]);
                _this._state.value = value;
                _this._filter();
                if (!value.length) {
                    _this._state.ignoreNext = true;
                    _this._state.canDelete = true;
                }
                else {
                    _this._state.canDelete = false;
                }
                if (!_this.config.multiselection) {
                    _this.list.selection.remove();
                    _this.paint();
                }
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                }
            },
            oninputclick: function (e) {
                if (_this.config.disabled) {
                    return;
                }
                _this.focus();
                if (e.target.classList.contains("dhx_combobox__action-remove")) {
                    var id = html_1.locate(e);
                    if (!id) {
                        return;
                    }
                    _this.list.selection.remove(id);
                    _this.paint();
                    return;
                }
                if (e.target.classList.contains("dhx_combobox__action-clear-all")) {
                    _this.list.selection.getId().forEach(function (id) { return _this.list.selection.remove(id); });
                    if (_this.config.selectAllButton && _this._state.unselectActive) {
                        _this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                        _this._state.unselectActive = false;
                    }
                    _this.paint();
                    return;
                }
                e.preventDefault();
                if (!_this.popup.isVisible()) {
                    _this._showOptions();
                    return;
                }
                _this.focus();
            },
            toggleIcon: function () {
                _this.focus();
                if (_this.popup.isVisible()) {
                    _this._hideOptions();
                }
                else {
                    _this._showOptions();
                }
            },
        };
    };
    Combobox.prototype._initEvents = function () {
        var _this = this;
        this.list.events.on(ts_list_1.ListEvents.click, function () {
            if (!_this.config.multiselection) {
                _this._hideOptions();
            }
        });
        this.data.events.on(ts_data_1.DataEvents.change, function (id, status, item) {
            if (item && item.hasOwnProperty("$selected")) {
                _this._updateSelectedItem(id);
            }
        });
        if (this.config.readonly) {
            this.popup.events.on(ts_popup_1.PopupEvents.afterShow, function () {
                if (_this._state.value) {
                    var id = _this.list.selection.getId();
                    _this.list.setFocus(id);
                }
                else {
                    _this.list.setFocus(_this.data.getId(0));
                }
                _this._keyListener.startNewListen(function (val) { return _this._findBest(val); });
            });
        }
    };
    Combobox.prototype._showOptions = function () {
        if (this._state.value.length) {
            this._state.canDelete = true;
        }
        this._filter();
        if (this._configurePopup()) {
            this.events.fire(types_1.ComboboxEvents.open);
        }
    };
    Combobox.prototype._configurePopup = function () {
        var rootView = this.getRootView();
        if (!rootView || !rootView.refs || !rootView.refs.holder) {
            return false;
        }
        if (!this.popup.isVisible()) {
            var holderNode = rootView.refs.holder.el;
            this.popup.getContainer().style.width = holderNode.offsetWidth + "px";
            this.popup.show(holderNode, { mode: "bottom" });
        }
        return true;
    };
    Combobox.prototype._hideOptions = function () {
        if (!this.events.fire(types_1.ComboboxEvents.beforeClose)) {
            return;
        }
        if (this.config.readonly) {
            this._keyListener.endListen();
        }
        this.list.setFocus(this.data.getId(0));
        if (!this.config.multiselection && !this.config.readonly && !this.list.selection.contains()) {
            this._state.value = "";
        }
        this.popup.hide();
        this.paint();
        this.events.fire(types_1.ComboboxEvents.afterClose);
        this.events.fire(types_1.ComboboxEvents.close); // TODO: remove sute_7.0
    };
    Combobox.prototype._filter = function () {
        var _this = this;
        if (this.config.readonly) {
            return;
        }
        this.data.filter(function (item) {
            return _this.config.filter
                ? _this.config.filter(item, _this._state.value)
                : core_1.isEqualString(_this._state.value, _this._getItemText(item));
        });
        if (this.config.multiselection) {
            this.list.setFocus(this.data.getId(0));
        }
        else {
            var index = this.data.getIndex(this.list.selection.getId());
            this.list.setFocus(this.data.getId(index > -1 ? index : 0));
        }
        if (this.data.getLength() === 0) {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").hide();
            }
            this._layout.getCell("list").hide();
            this._layout.getCell("not-found").attach(helper_1.emptyListView);
            this._layout.getCell("not-found").show();
        }
        else {
            if (this.config.multiselection && this.config.selectAllButton) {
                this._layout.getCell("select-unselect-all").show();
            }
            if (this._layout.getCell("not-found").isVisible()) {
                this._layout.getCell("list").show();
                this._layout.getCell("not-found").hide();
            }
        }
    };
    Combobox.prototype._findBest = function (value) {
        var _this = this;
        var best = this.data.find(function (item) { return core_1.isEqualString(value, _this._getItemText(item)); });
        if (!best) {
            return;
        }
        if (this.list.selection.getId() === best.id) {
            return;
        }
        this.list.setFocus(best.id);
        this.list.selection.add(best.id);
        this.paint();
    };
    Combobox.prototype._draw = function () {
        var _a = this.config, multiselection = _a.multiselection, labelPosition = _a.labelPosition, labelWidth = _a.labelWidth, hiddenLabel = _a.hiddenLabel, required = _a.required, disabled = _a.disabled, css = _a.css, label = _a.label, helpMessage = _a.helpMessage, readonly = _a.readonly, placeholder = _a.placeholder;
        var item = multiselection ? null : this.data.getItem(this.list.selection.getId());
        var showPlaceholder = !this.list.selection.getId() || this.list.selection.getId().length === 0;
        var width = labelPosition === "left" && labelWidth ? labelWidth : "";
        return dom_1.el(".dhx_widget.dhx_combobox" +
            (labelPosition === "left" ? ".dhx_combobox--label-inline" : "") +
            (hiddenLabel ? ".dhx_combobox--sr_only" : "") +
            (required ? ".dhx_combobox--required" : "") +
            (disabled ? ".dhx_combobox--disabled" : "") +
            (css ? "." + css : ""), {
            dhx_widget_id: this._uid,
            onkeydown: this._handlers.onkeydown,
            onkeyup: this._handlers.onkeyup,
        }, [
            label
                ? dom_1.el("label.dhx_label.dhx_combobox__label", {
                    style: { minWidth: width, maxWidth: width },
                    class: helpMessage ? "dhx_label--with-help" : "",
                    onclick: this._handlers.oninputclick,
                }, helpMessage
                    ? [
                        dom_1.el("span.dhx_label__holder", label),
                        dom_1.el("span.dhx_label-help.dxi.dxi-help-circle-outline", {
                            tabindex: "0",
                            role: "button",
                            onclick: this._handlers.showHelper,
                        }),
                    ]
                    : label)
                : null,
            dom_1.el("div.dhx_combobox-input-box" +
                // (this.popup.isVisible() ? ".dhx_combobox-input-box" : "") +
                (disabled ? ".dhx_combobox-input-box--disabled" : "") +
                (readonly ? ".dhx_combobox-input-box--readonly" : "") +
                (this._state.currentState === types_1.ComboState.error
                    ? ".dhx_combobox-input-box--state_error"
                    : "") +
                (this._state.currentState === types_1.ComboState.success
                    ? ".dhx_combobox-input-box--state_success"
                    : ""), {
                _ref: "holder",
            }, [
                dom_1.el("div.dhx_combobox-input__icon", {
                    onclick: this._handlers.toggleIcon,
                }, [
                    dom_1.el("span" +
                        (this.popup.isVisible() ? ".dxi.dxi-menu-up" : ".dxi.dxi-menu-down")),
                ]),
                dom_1.el("div.dhx_combobox-input-list-wrapper", {
                    onclick: this._handlers.oninputclick,
                }, [
                    dom_1.el("ul.dhx_combobox-input-list", __spreadArrays(this._drawSelectedItems(), [
                        dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-input-list__item--input", [
                            dom_1.el("input.dhx_combobox-input", {
                                oninput: this._handlers.oninput,
                                _ref: "input",
                                _key: this._uid,
                                type: "text",
                                placeHolder: showPlaceholder && placeholder ? placeholder : undefined,
                                value: readonly && item
                                    ? this._getItemText(item)
                                    : this._state.value,
                                readOnly: readonly || disabled,
                                required: required,
                            }),
                        ]),
                    ])),
                ]),
            ]),
        ]);
    };
    Combobox.prototype._drawSelectedItems = function () {
        var _this = this;
        if (!this.config.multiselection) {
            return [];
        }
        if (this.config.itemsCount) {
            var count = this.list.selection.getId().length;
            return count
                ? [
                    dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", [
                        dom_1.el("span.dhx_combobox-tag__value", itemsCountTemplate(count, this.config.itemsCount)),
                        dom_1.el("button.dhx_button.dhx_combobox-tag__action.dhx_combobox__action-clear-all", [
                            dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle"),
                        ]),
                    ]),
                ]
                : [];
        }
        return this.list.selection.getId().map(function (id) {
            var item = _this.data.getItem(id);
            if (!item) {
                return null;
            }
            return dom_1.el("li.dhx_combobox-input-list__item.dhx_combobox-tag", { dhx_id: id }, [
                _this._drawImageOrIcon(item),
                dom_1.el("span.dhx_combobox-tag__value", _this._getItemText(item)),
                dom_1.el("button.dhx_button.dhx_button--icon.dhx_combobox-tag__action.dhx_combobox__action-remove", {
                    type: "button",
                }, [dom_1.el("span.dhx_button__icon.dxi.dxi-close-circle")]),
            ]);
        });
    };
    Combobox.prototype._drawImageOrIcon = function (item) {
        if (item.src) {
            return dom_1.el("img.dhx_combobox-tag__image", { src: item.src });
        }
        else if (item.icon) {
            return dom_1.el("span.dhx_combobox-tag__icon", { class: item.icon });
        }
        return null;
    };
    Combobox.prototype._getItemText = function (item) {
        if (!item) {
            return null;
        }
        return item.value;
    };
    Combobox.prototype._updateSelectedItem = function (id) {
        if (this.config.multiselection) {
            var selected = this.data.getItem(id).$selected;
            if (selected) {
                if (this.config.selectAllButton &&
                    !this._state.unselectActive &&
                    this.data.getLength() === this.list.selection.getId().length) {
                    this._layout.getCell("select-unselect-all").attach(helper_1.unselectAllView);
                    this._state.unselectActive = true;
                }
            }
            else {
                if (this.config.selectAllButton && this._state.unselectActive) {
                    this._layout.getCell("select-unselect-all").attach(helper_1.selectAllView);
                    this._state.unselectActive = false;
                }
            }
            if (!this._state.value.length) {
                this._state.canDelete = true;
            }
            this.paint();
            return;
        }
        this._state.value = this._getItemText(this.data.getItem(id)) || "";
        this.paint();
    };
    return Combobox;
}(view_1.View));
exports.Combobox = Combobox;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.KEY_CODES = {
    BACKSPACE: 8,
    ENTER: 13,
    ESC: 27,
    DOWN_ARROW: 40,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(87));
__export(__webpack_require__(35));
__export(__webpack_require__(19));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var ts_data_1 = __webpack_require__(5);
var dom_1 = __webpack_require__(0);
var events_1 = __webpack_require__(4);
var Keymanager_1 = __webpack_require__(16);
var types_1 = __webpack_require__(15);
var view_1 = __webpack_require__(6);
var Selection_1 = __webpack_require__(35);
var html_1 = __webpack_require__(2);
var types_2 = __webpack_require__(19);
var editors_1 = __webpack_require__(88);
var helpers_1 = __webpack_require__(90);
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List(node, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, node, core_1.extend({
            itemHeight: config.virtual ? 37 : config.itemHeight || null,
            keyNavigation: false,
            multiselectionMode: config.multiselectionMode ? config.multiselectionMode : "click",
            editable: false,
        }, config)) || this;
        if (_this.config.multiselectionMode === "ctrlClick") {
            _this.config.multiselection = "ctrlClick"; // TODO: remove sute_7.0
        }
        _this.config.editable = _this.config.editable || _this.config.editing; // TODO: remove sute_7.0
        if (Array.isArray(_this.config.data)) {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
            _this.data.parse(_this.config.data);
        }
        else if (_this.config.data && _this.config.data.events) {
            _this.data = _this.config.data;
            _this.events = _this.data.events;
            _this.events.context = _this;
        }
        else {
            _this.events = new events_1.EventSystem(_this);
            _this.data = new ts_data_1.DataCollection({}, _this.events);
        }
        if (_this.config.selection === undefined || _this.config.selection !== false) {
            _this.selection = new Selection_1.Selection({
                multiselection: _this.config.multiselection,
            }, _this.data);
        }
        else {
            _this.selection = new Selection_1.SelectionStub();
            _this._focusIndex = _this.config.keyNavigation ? 0 : undefined;
        }
        _this._getHotkeys();
        var updater = function (updateObj) { return function (id, ids) {
            if (ids && ids instanceof Array) {
                ids.map(function (selectedId) { return _this.data.exists(selectedId) && _this.data.update(selectedId, updateObj); });
                return;
            }
            if (_this.data.exists(id)) {
                _this.data.update(id, updateObj);
            }
        }; };
        _this.events.on(ts_data_1.DataEvents.change, function () {
            _this.paint();
        });
        _this.events.on(ts_data_1.DataEvents.beforeRemove, function (obj) {
            var delIndex = _this.data.getIndex(obj.id);
            if (delIndex < _this._focusIndex) {
                _this._focusIndex--;
            }
        });
        _this.events.on(ts_data_1.DataEvents.afterRemove, function () {
            var id = _this.selection.getId();
            if (!id && !_this._focusIndex) {
                return;
            }
            if (!id && _this._focusIndex) {
                id = _this.data.getId(_this._focusIndex);
                _this.setFocus(id);
                return;
            }
            _this.setFocus(id[id.length - 1]);
        });
        _this.events.on(ts_data_1.DataEvents.load, function () {
            if (_this.config.virtual) {
                _this._updateVirtual(0);
            }
            _this.data.map(function (item) {
                if (item.$selected) {
                    _this.selection.add(item.id);
                    _this.events.fire(types_2.ListEvents.click, [item.id, null]);
                }
            });
        });
        _this.events.on(ts_data_1.DragEvents.canDrop, updater({ $drophere: true }));
        _this.events.on(ts_data_1.DragEvents.cancelDrop, updater({ $drophere: undefined }));
        _this.events.on(ts_data_1.DragEvents.dragStart, updater({ $dragtarget: true }));
        _this.events.on(ts_data_1.DragEvents.dragEnd, updater({ $dragtarget: undefined }));
        _this.events.on(types_2.ListEvents.afterEditEnd, function (value, id) {
            var item = _this.data.getItem(id);
            _this.data.update(id, __assign(__assign({}, item), { value: value }));
            _this._edited = null;
            _this._getHotkeys();
            _this.paint();
        });
        _this.selection.events.on(types_1.SelectionEvents.afterSelect, function (id) {
            if (id) {
                _this.setFocus(id);
            }
        });
        _this._handlers = {
            onmousedown: function (e) {
                var itemsForGhost = [];
                var item = html_1.locateNode(e, "dhx_id");
                var itemId = item && item.getAttribute("dhx_id");
                var selectionIds = _this.selection.getId();
                if (_this.config.multiselection && selectionIds instanceof Array) {
                    selectionIds.map(function (id) {
                        if (id !== itemId) {
                            itemsForGhost.push(_this.getRootView().refs[id].el);
                        }
                    });
                }
                return _this.config.dragMode && !_this._edited
                    ? ts_data_1.dragManager.onMouseDown(e, _this.selection.getId() || itemId, itemsForGhost)
                    : null;
            },
            ondragstart: function () { return (_this.config.dragMode && !_this._edited ? false : null); },
            oncontextmenu: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.events.fire(types_2.ListEvents.itemRightClick, [id, e]);
                _this.events.fire(types_2.ListEvents.contextmenu, [id, e]); // TODO: remove sute_7.0
            },
            onclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                _this.selection.add(id, e.ctrlKey || e.metaKey, e.shiftKey);
                _this.events.fire(types_2.ListEvents.click, [id, e]);
            },
            ondblclick: function (e) {
                var id = html_1.locate(e);
                if (!id) {
                    return;
                }
                if (_this.config.editable) {
                    _this.editItem(id);
                }
                _this.events.fire(types_2.ListEvents.doubleClick, [id, e]);
            },
            onscroll: function (e) {
                if (_this.config.virtual) {
                    // [TODO] Hide loading data to render
                    _this._lazyLoad(e);
                    _this._updateVirtual(e.target.scrollTop);
                }
            },
            onmouseover: function (e) {
                var id = html_1.locate(e);
                var element = html_1.locateNode(e, "dhx_id", "relatedTarget");
                if (!element && id) {
                    _this.events.fire(types_2.ListEvents.itemMouseOver, [id, e]);
                    return;
                }
                else if (!element) {
                    return;
                }
                var attr = element.getAttribute("dhx_id") ? element.getAttribute("dhx_id") : null;
                var prevId = attr ? attr : "";
                if (!id || id === prevId) {
                    return;
                }
                _this.events.fire(types_2.ListEvents.itemMouseOver, [id, e]);
            },
        };
        if (_this.config.dragMode) {
            ts_data_1.dragManager.setItem(_this._uid, _this);
        }
        if (_this.config.virtual) {
            _this._range = [0, 0];
            _this._topOffset = 0;
        }
        var view = dom_1.create({
            render: function () { return (_this.config.virtual ? _this._renderVirtualList() : _this._renderList()); },
            hooks: {
                didMount: function (vm) {
                    if (!_this.config.height) {
                        var element = vm.node.el;
                        _this.config.height =
                            (element &&
                                element.parentNode &&
                                element.parentNode.offsetHeight) ||
                                "100%";
                    }
                    if (_this.config.virtual) {
                        _this._visibleHeight = _this.config.height;
                        _this._updateVirtual(0);
                    }
                    _this.paint();
                },
            },
        });
        _this.mount(node, view);
        return _this;
    }
    List.prototype.disableSelection = function () {
        if (!this._disabledSelection) {
            this._disabledSelection = this.selection;
            this.selection.remove();
            this._focusIndex = this.config.keyNavigation ? 0 : undefined;
            this.paint();
            this.selection = new Selection_1.SelectionStub();
        }
    };
    List.prototype.enableSelection = function () {
        var _this = this;
        if (this._disabledSelection) {
            this.selection = this._disabledSelection;
            this._disabledSelection = undefined;
        }
        else {
            this.selection = new Selection_1.Selection({
                multiselection: this.config.multiselection,
            }, this.data);
            this.selection.events.on(types_1.SelectionEvents.afterSelect, function (id) {
                if (id) {
                    _this.setFocus(id);
                }
            });
        }
    };
    List.prototype.editItem = function (id) {
        this._edited = id;
        if (!this.data.getItem(this._edited) || !this.events.fire(types_2.ListEvents.beforeEditStart, [id])) {
            this._edited = null;
            return;
        }
        this._getHotkeys();
        this.paint();
        this.events.fire(types_2.ListEvents.afterEditStart, [id]);
    };
    List.prototype.getFocusItem = function () {
        return this.data.getItem(this.data.getId(this._focusIndex));
    };
    List.prototype.setFocus = function (id) {
        var index = this.data.getIndex(id);
        this._setFocusIndex(index);
    };
    List.prototype.getFocus = function () {
        var id = this.data.getId(this._focusIndex);
        if (id) {
            return id;
        }
    };
    List.prototype.destructor = function () {
        if (this._navigationDestructor) {
            this._navigationDestructor();
        }
        if (this._documentClickDestuctor) {
            this._documentClickDestuctor();
        }
        this.unmount();
    };
    // TODO: remove sute_7.0
    List.prototype.getFocusIndex = function () {
        return this._focusIndex;
    };
    // TODO: remove sute_7.0
    List.prototype.setFocusIndex = function (index) {
        this._setFocusIndex(index);
    };
    // TODO: remove sute_7.0
    List.prototype.edit = function (id) {
        this.editItem(id);
    };
    List.prototype._renderItem = function (item, index) {
        var html = (this.config.template && this.config.template(item)) || item.html;
        var focus = index === this._focusIndex;
        if (item.id === this._edited) {
            var editor = editors_1.getEditor(item, this);
            return editor.toHTML();
        }
        return html ? this._renderAsHtml(html, item, focus) : this._renderAsValue(item, focus);
    };
    List.prototype._renderAsHtml = function (html, item, focus) {
        var itemHeight = this.config.itemHeight;
        return dom_1.el("li", {
            class: "dhx_list-item" +
                (item.$selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (item.$drophere && !this._edited ? " dhx_list-item--drophere" : "") +
                (item.$dragtarget && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                // (this.selection.getItem() )
                (item.css ? " " + item.css : ""),
            dhx_id: item.id,
            _ref: item.id.toString(),
            style: {
                height: itemHeight,
            },
            _key: item.id,
            ".innerHTML": html,
        });
    };
    List.prototype._renderAsValue = function (item, focus) {
        var itemHeight = this.config.itemHeight;
        return dom_1.el("li", {
            class: "dhx_list-item dhx_list-item--text" +
                (item.$selected ? " dhx_list-item--selected" : "") +
                (focus ? " dhx_list-item--focus" : "") +
                (item.$drophere && !this._edited ? " dhx_list-item--drophere" : "") +
                (item.$dragtarget && !this._edited ? " dhx_list-item--dragtarget" : "") +
                (this.config.dragMode && !this._edited ? " dhx_list-item--drag" : "") +
                (item.css ? " " + item.css : ""),
            dhx_id: item.id,
            _ref: item.id.toString(),
            style: {
                height: itemHeight,
            },
            _key: item.id,
        }, item.text || item.value);
    };
    List.prototype._renderList = function () {
        var _this = this;
        var kids = this.data.map(function (obj, index) { return _this._renderItem(obj, index); });
        return dom_1.el("ul.dhx_widget.dhx_list", __assign({ style: {
                "min-height": this.config.itemHeight,
                "max-height": this.config.height,
                position: "relative",
            }, class: (this.config.css ? this.config.css : "") +
                (this.config.multiselection && this.selection.getItem() ? " dhx_no-select--pointer" : ""), dhx_widget_id: this._uid }, this._handlers), kids);
    };
    List.prototype._renderVirtualList = function () {
        var _this = this;
        var kids = this.data.mapRange(this._range[0], this._range[1], function (obj, index) {
            return _this._renderItem(obj, index);
        });
        return dom_1.el(".dhx_widget.dhx_virtual-list-wrapper", __assign({ dhx_widget_id: this._uid, style: {
                "min-height": this.config.itemHeight,
                "max-height": this._visibleHeight,
            } }, this._handlers), [
            dom_1.el("ul.dhx_list.dhx_list--virtual", {
                class: (this.config.css ? this.config.css : "") +
                    (this.config.multiselection && this.selection.getItem()
                        ? " dhx_no-select--pointer"
                        : ""),
                style: {
                    height: this._getHeight() + helpers_1.defineUnit(this.config.itemHeight),
                    "padding-top": this._topOffset,
                },
            }, kids),
        ]);
    };
    List.prototype._setFocusIndex = function (index) {
        if (index < 0 || index > this.data.getLength() - 1) {
            return;
        }
        this._focusIndex = index;
        var rootView = this.getRootView();
        if (!rootView || !rootView.node || !rootView.node.el) {
            return;
        }
        var listEl = this.getRootNode();
        if (!listEl) {
            return;
        }
        if (this.config.virtual) {
            var position = index * helpers_1.defineValue(this.config.itemHeight);
            if (position >= helpers_1.defineValue(this._visibleHeight) + this._topOffset ||
                position < this._topOffset) {
                listEl.scrollTo(0, position);
            }
        }
        else {
            var listItem = listEl.children[index];
            if (!listItem) {
                return;
            }
            if (listItem.offsetTop >= listEl.scrollTop + listEl.clientHeight - listItem.clientHeight) {
                listEl.scrollTop = listItem.offsetTop - listEl.clientHeight + listItem.clientHeight;
            }
            else if (listItem.offsetTop < listEl.scrollTop) {
                listEl.scrollTop = listItem.offsetTop;
            }
        }
        this.events.fire(types_2.ListEvents.focusChange, [this._focusIndex, this.data.getId(this._focusIndex)]);
        this.paint();
    };
    List.prototype._updateVirtual = function (position) {
        var overscanCount = 5;
        var totalHeight = this._getHeight();
        if (position > totalHeight - helpers_1.defineValue(this._visibleHeight)) {
            position = totalHeight - helpers_1.defineValue(this._visibleHeight);
        }
        var count = Math.floor(helpers_1.defineValue(this._visibleHeight) / helpers_1.defineValue(this.config.itemHeight)) +
            overscanCount;
        var index = Math.floor(position / helpers_1.defineValue(this.config.itemHeight));
        this._range = [index, count + index];
        this._topOffset = position;
        this.paint();
    };
    List.prototype._getHeight = function () {
        return this.data.getLength() * helpers_1.defineValue(this.config.itemHeight);
    };
    List.prototype._getHotkeys = function () {
        var _this = this;
        if (this.config.keyNavigation) {
            if (this._edited) {
                if (this._navigationDestructor) {
                    this._navigationDestructor();
                }
            }
            else {
                var keyNavigation = this.config.keyNavigation;
                if (typeof this.config.keyNavigation !== "function") {
                    this._widgetInFocus = false;
                    keyNavigation = function () { return _this._widgetInFocus; };
                    this._documentClickDestuctor = core_1.detectWidgetClick(this._uid, function (isInnerClick) { return (_this._widgetInFocus = isInnerClick); });
                }
                var preventEvent = function (fn) { return function (e) {
                    e.preventDefault();
                    fn();
                }; };
                var handlers = {
                    arrowDown: preventEvent(function () { return _this.setFocusIndex(_this._focusIndex + 1); }),
                    arrowUp: preventEvent(function () { return _this.setFocusIndex(_this._focusIndex - 1); }),
                    enter: function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                    "enter+shift": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, false, true);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                    "enter+ctrl": function (e) {
                        var id = _this.data.getId(_this._focusIndex);
                        _this.selection.add(id, true, false);
                        _this.events.fire(types_2.ListEvents.click, [id, e]);
                    },
                };
                if (html_1.isIE()) {
                    handlers = __assign({ up: handlers.arrowUp, down: handlers.arrowDown }, handlers);
                    delete handlers.arrowUp;
                    delete handlers.arrowDown;
                }
                this._navigationDestructor = Keymanager_1.addHotkeys(handlers, keyNavigation);
            }
        }
    };
    List.prototype._lazyLoad = function (e) {
        var y = e.target.scrollTop;
        var from = Math.round(y / helpers_1.defineValue(this.config.itemHeight));
        var onScreenCount = this.config.height / helpers_1.defineValue(this.config.itemHeight);
        var proxy = this.data.dataProxy;
        if (proxy &&
            proxy.config &&
            !this.data.isDataLoaded(from, onScreenCount + from + proxy.config.prepare)) {
            proxy.updateUrl(null, { from: from, limit: proxy.config.limit });
            this.data.load(proxy);
        }
    };
    return List;
}(view_1.View));
exports.List = List;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputEditor_1 = __webpack_require__(89);
function getEditor(item, list) {
    return new InputEditor_1.InputEditor(item, list);
}
exports.getEditor = getEditor;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var types_1 = __webpack_require__(19);
var InputEditor = /** @class */ (function () {
    function InputEditor(item, list) {
        var _this = this;
        this._list = list;
        this._config = list.config;
        this._item = item;
        this._list.events.on(types_1.ListEvents.focusChange, function (index, id) {
            if (_this._mode && id !== _this._item.id) {
                _this.endEdit();
            }
        });
        this._initHandlers();
    }
    InputEditor.prototype.endEdit = function () {
        if (this._input) {
            var value = this._input.value;
            if (this._list.events.fire(types_1.ListEvents.beforeEditEnd, [value, this._item.id])) {
                this._input.removeEventListener("blur", this._handlers.onBlur);
                this._input.removeEventListener("change", this._handlers.onChange);
                this._handlers = {};
                this._mode = false;
                this._list.events.fire(types_1.ListEvents.afterEditEnd, [value, this._item.id]);
            }
            else {
                this._input.focus();
            }
        }
    };
    InputEditor.prototype.toHTML = function () {
        this._mode = true;
        var itemHeight = this._config.itemHeight;
        return dom_1.el(".dhx_input__wrapper", {}, [
            dom_1.el("div.dhx_input__container", {}, [
                dom_1.el("input.dhx_input", {
                    class: this._item.css ? " " + this._item.css : "",
                    style: {
                        height: itemHeight,
                        width: "100%",
                        padding: "8px, 12px",
                    },
                    _hooks: {
                        didInsert: this._handlers.didInsert,
                    },
                    _key: this._item.id,
                    dhx_id: this._item.id,
                }),
            ]),
        ]);
    };
    InputEditor.prototype._initHandlers = function () {
        var _this = this;
        this._handlers = {
            onBlur: function () {
                _this.endEdit();
            },
            onChange: function () {
                _this.endEdit();
            },
            didInsert: function (node) {
                var input = node.el;
                _this._input = input;
                input.focus();
                input.value = _this._item.value;
                input.setSelectionRange(0, input.value.length);
                input.addEventListener("change", _this._handlers.onChange);
                input.addEventListener("blur", _this._handlers.onBlur);
            },
        };
    };
    return InputEditor;
}());
exports.InputEditor = InputEditor;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function defineValue(property) {
    if (property) {
        var prop = property.toString().trim();
        if (!prop.includes("calc")) {
            return parseInt(prop.split(/\D+/g)[0], null);
        }
    }
}
exports.defineValue = defineValue;
function defineUnit(property) {
    if (property) {
        var prop = property.toString().trim();
        if (!prop.includes("calc")) {
            return prop.slice(prop.split(/\D+/g)[0].length);
        }
    }
}
exports.defineUnit = defineUnit;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CLEAR_TIMEOUT = 2000;
var KeyListener = /** @class */ (function () {
    function KeyListener() {
        var _this = this;
        this._sequence = "";
        document.addEventListener("keydown", function (e) {
            if (!_this._isActive) {
                return;
            }
            var key = e.key;
            if (key === "Backspace" && _this._sequence.length > 0) {
                _this._sequence = _this._sequence.slice(0, _this._sequence.length - 1);
                _this._change();
            }
            if (key.length < 2) {
                // handle only single key value
                _this._sequence += key;
                _this._change();
            }
        });
    }
    KeyListener.prototype.startNewListen = function (action) {
        this._isActive = true;
        this._sequence = "";
        this._currentAction = action;
    };
    KeyListener.prototype.endListen = function () {
        this._currentAction = null;
        this.reset();
        this._isActive = false;
    };
    KeyListener.prototype.reset = function () {
        this._sequence = "";
    };
    KeyListener.prototype._change = function () {
        this._currentAction(this._sequence);
        this._addClearTimeout();
    };
    KeyListener.prototype._addClearTimeout = function () {
        var _this = this;
        if (this._clearTimeout) {
            clearTimeout(this._clearTimeout);
        }
        this._clearTimeout = setTimeout(function () {
            _this.reset();
            _this._clearTimeout = null;
        }, CLEAR_TIMEOUT);
    };
    return KeyListener;
}());
exports.KeyListener = KeyListener;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var en_1 = __webpack_require__(36);
function selectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.selectAll);
}
exports.selectAllView = selectAllView;
function unselectAllView() {
    return dom_1.el(".dhx_list-item.dhx_combobox-options__item.dhx_combobox-options__item--select-all.dhx_combobox__action-select-all", en_1.default.unselectAll);
}
exports.unselectAllView = unselectAllView;
function emptyListView() {
    return dom_1.el("ul.dhx_list", [dom_1.el("li.dhx_list-item.dhx_combobox-options__item", {}, en_1.default.notFound)]);
}
exports.emptyListView = emptyListView;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var html_1 = __webpack_require__(2);
var Cells_1 = __webpack_require__(25);
var FixedRows_1 = __webpack_require__(38);
function getFixedCols(renderConfig, layout) {
    var hiddenCheck = renderConfig.columns.reduce(function (check, col) {
        return col.hidden ? check + 1 : check;
    }, 0);
    if (typeof renderConfig.splitAt !== "number") {
        return;
    }
    if (hiddenCheck === renderConfig.splitAt) {
        return;
    }
    var scrollBarWidth = renderConfig.$totalWidth <= layout.wrapper.width ? 0 : html_1.getScrollbarWidth();
    var fixedContentHeight = renderConfig.$totalHeight + renderConfig.headerHeight;
    var fixedColsHeight = (layout.sticky ? fixedContentHeight : layout.gridBodyHeight + renderConfig.headerHeight) -
        (fixedContentHeight > layout.gridBodyHeight ? scrollBarWidth : null);
    var columns = renderConfig.columns.filter(function (col) { return !col.hidden; }).slice(0, renderConfig.splitAt);
    renderConfig.fixedColumnsWidth = columns.reduce(function (total, item) { return (total += item.width || 100); }, 0);
    var fixedCols = Cells_1.getCells(__assign(__assign({}, renderConfig), { columns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.splitAt }) }));
    var isSticky = layout.sticky;
    var headerRowsConfig = __assign(__assign({}, layout), { name: "header", position: "top" });
    var footerRowsConfig = __assign(__assign({}, layout), { name: "footer", position: "bottom" });
    var frozenHeaderCols = renderConfig.splitAt >= 0 &&
        FixedRows_1.getRows(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign(__assign({}, layout), { name: "header", position: "top" }));
    var frozenFooterCols = renderConfig.splitAt >= 0 &&
        FixedRows_1.getRows(__assign(__assign({}, renderConfig), { currentColumns: columns, $positions: __assign(__assign({}, renderConfig.$positions), { xStart: 0, xEnd: renderConfig.splitAt }) }), __assign(__assign({}, layout), { name: "footer", position: "bottom" }));
    var frozenHeader = frozenHeaderCols &&
        dom_1.el(".dhx_" + headerRowsConfig.name + "-fixed-cols", {
            style: {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 999999,
            },
        }, frozenHeaderCols);
    var frozenFooter = isSticky
        ? frozenFooterCols &&
            dom_1.el(".dhx_" + footerRowsConfig.name + "-fixed-cols", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    zIndex: 999999,
                },
            }, frozenFooterCols)
        : null;
    var pos = renderConfig.$positions;
    var spans = Cells_1.getSpans(renderConfig, true);
    return dom_1.el(".dhx_grid-fixed-cols-wrap", {
        style: {
            height: fixedColsHeight,
            paddingTop: renderConfig.headerHeight,
            overflow: "hidden",
            width: renderConfig.fixedColumnsWidth,
        },
    }, [
        frozenHeader,
        dom_1.el(".dhx_grid-fixed-cols", __assign({ style: {
                top: -renderConfig.scroll.top + renderConfig.headerHeight - 1 + "px",
                paddingTop: layout.shifts.y,
                height: renderConfig.$totalHeight,
                position: "absolute",
            }, _flags: dom_1.KEYED_LIST }, Cells_1.getHandlers(pos.yStart, pos.xStart, renderConfig)), [fixedCols, dom_1.el(".dhx_span-spans", spans)]),
        renderConfig.$footer && frozenFooter,
        dom_1.el(".dhx_frozen-cols-border"),
    ]);
}
exports.getFixedCols = getFixedCols;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(0);
var ts_combobox_1 = __webpack_require__(34);
var ts_data_1 = __webpack_require__(5);
var types_1 = __webpack_require__(3);
var inputDelay;
function onInput(eventSystem, colId, filter, filterObj, e) {
    var inputHandler = function () {
        filterObj.value[colId] = e.target.value;
        eventSystem.fire(types_1.GridEvents.filterChange, [e.target.value, colId, filter]);
        eventSystem.fire(types_1.GridEvents.headerInput, [e.target.value, colId, filter]); // TODO: remove sute_7.0
    };
    if (filter === "selectFilter") {
        inputHandler();
        return;
    }
    if (inputDelay) {
        clearTimeout(inputDelay);
    }
    inputDelay = setTimeout(inputHandler, 250);
}
function applyMathMethod(column, config, method, validate) {
    if (!column || !config || !method) {
        return;
    }
    var id = column.id;
    var columnData = validate
        ? validate(id, config.data)
        : config.data.reduce(function (items, item) {
            if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                items.push(parseFloat(item[id]));
            }
            return items;
        }, []);
    // [todo] move to treegrid
    var roots = columnData;
    if (config.type === "tree") {
        roots = config.data.reduce(function (total, item) {
            if (item.$level === 0) {
                if (item[id] !== undefined && item[id] !== "" && !isNaN(item[id])) {
                    total.push(parseFloat(item[id]) || 0);
                }
                else {
                    var value_1 = 0;
                    config.datacollection.eachChild(item.id, function (cell) {
                        if (!config.datacollection.haveItems(cell.id)) {
                            value_1 += parseFloat(cell[id]);
                        }
                    });
                    total.push(value_1);
                }
            }
            return total;
        }, []);
    }
    return method(columnData, roots);
}
function getContent() {
    var _this = this;
    return {
        inputFilter: {
            toHtml: function (column, config) {
                return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-magnify", [
                    dom_1.el("input", {
                        type: "text",
                        class: "dhx_input dhx_grid-filter",
                        oninput: [onInput, config.events, column.id, "inputFilter", this],
                        _key: column.id,
                        value: this.value[column.id] || "",
                    }),
                ]);
            },
            match: function (value, match) { return new RegExp("" + match, "i").test(value); },
            value: {},
        },
        selectFilter: {
            toHtml: function (column, config) {
                return dom_1.el("label.dhx_grid-filter__label.dxi.dxi-menu-down", [
                    dom_1.el("select.dxi.dxi-menu-down", {
                        type: "text",
                        class: "dhx_input dhx_grid-filter dhx_grid-filter--select",
                        onchange: [onInput, config.events, column.id, "selectFilter", this],
                        _key: column.id,
                        value: this.value[column.id] || "",
                    }, __spreadArrays([
                        dom_1.el("option", { value: "" }, "")
                    ], column.$uniqueData.map(function (val) { return val && dom_1.el("option", { value: val }, val); }))),
                ]);
            },
            match: function (value, match) { return value === match; },
            value: {},
        },
        comboFilter: {
            toHtml: function (column, config) {
                var combo;
                var colId = column.id.toString();
                if (!this.combo[colId]) {
                    var conf = column.header.filter(function (item) { return item.filterConfig !== undefined; })[0];
                    if (conf && conf.filterConfig) {
                        combo = new ts_combobox_1.Combobox(null, JSON.parse(JSON.stringify(conf.filterConfig)));
                    }
                    else {
                        combo = new ts_combobox_1.Combobox(null, {});
                    }
                    combo.data.parse(column.$uniqueData.map(function (value) { return ({ value: value }); }));
                    config.events.on(ts_data_1.DataEvents.load, function () {
                        combo.data.parse(column.$uniqueData.map(function (value) { return ({ value: value }); }));
                    });
                    this.combo[colId] = combo;
                    combo.events.on("change", function (id) {
                        if (id) {
                            var item = void 0;
                            var value = void 0;
                            if (combo.data.getItem(id)) {
                                item = combo.list.selection.getItem();
                                value = item.value;
                                config.events.fire(types_1.GridEvents.filterChange, [value, colId, "comboFilter"]);
                                config.events.fire(types_1.GridEvents.headerInput, [value, colId, "comboFilter"]); // TODO: remove sute_7.0
                            }
                            else {
                                config.events.fire(types_1.GridEvents.filterChange, ["", colId, "comboFilter"]);
                                config.events.fire(types_1.GridEvents.headerInput, ["", colId, "comboFilter"]); // TODO: remove sute_7.0
                            }
                        }
                    });
                    combo.popup.events.on("afterHide", function () {
                        if (!combo.list.selection.getItem()) {
                            combo.clear();
                            config.events.fire(types_1.GridEvents.filterChange, ["", colId, "comboFilter"]);
                            config.events.fire(types_1.GridEvents.headerInput, ["", colId, "comboFilter"]); // TODO: remove sute_7.0
                        }
                    });
                }
                else {
                    combo = this.combo[column.id];
                }
                return dom_1.inject(combo.getRootView());
            },
            match: function (value, match) {
                return new RegExp("" + match, "i").test(value) &&
                    new RegExp("" + match, "i").exec(value).index === 0;
            },
            destroy: function () {
                if (_this.content && _this.content.comboFilter.combo) {
                    var comboFilters = _this.content.comboFilter.combo;
                    for (var combo in comboFilters) {
                        comboFilters[combo].destructor();
                        delete comboFilters[combo];
                    }
                }
            },
            value: {},
            combo: {},
        },
        sum: {
            calculate: function (_col, roots) { return roots.reduce(function (sum, c) { return (sum += parseFloat(c) || 0); }, 0).toFixed(3); },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate);
            },
        },
        avg: {
            calculate: function (_col, roots) { return (roots.reduce(function (sum, c) { return (sum += c); }, 0) / _col.length).toFixed(3); },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate);
            },
        },
        min: {
            calculate: function (col) { return Math.min.apply(Math, col).toFixed(3); },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate);
            },
        },
        max: {
            calculate: function (col) { return Math.max.apply(Math, col).toFixed(3); },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate);
            },
        },
        count: {
            calculate: function (_col, roots) {
                // [todo]
                return roots.reduce(function (count, c) { return (count += c); }, 0);
            },
            validate: function (colId, data) {
                return data.reduce(function (items, item) {
                    if (item[colId] !== undefined && item[colId] !== "") {
                        if (isNaN(item)) {
                            items.push(1);
                        }
                        else {
                            items.push(item);
                        }
                    }
                    return items;
                }, []);
            },
            toHtml: function (column, config) {
                return applyMathMethod(column, config, this.calculate, this.validate);
            },
        },
    };
}
exports.getContent = getContent;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var types_1 = __webpack_require__(3);
var html_1 = __webpack_require__(2);
function startResize(grid, column, ev, cb) {
    var initX = ev.clientX;
    var columns = grid.config.columns.filter(function (col) { return !col.hidden; });
    var initWidth = 0;
    grid.config.$resizing = column;
    var moveHandler = function (e) {
        var i = core_1.findIndex(columns, function (obj) {
            return obj.id === column;
        });
        var containerLeft = e.clientX - grid.getRootNode().getBoundingClientRect().left;
        var scrollbarY = grid.config.$totalHeight > grid.config.height ? html_1.getScrollbarWidth() : 0;
        if (grid.config.splitAt === i + 1 && containerLeft >= grid.config.width - scrollbarY - 2) {
            return;
        }
        initWidth = initWidth || columns[i].width;
        var minWidth = columns[i].minWidth || 20;
        var maxWidth = columns[i].maxWidth;
        var move = e.clientX - initX;
        var cols = __spreadArrays(columns);
        var size = initWidth + move;
        var final;
        if ((maxWidth && size >= maxWidth) || size <= minWidth) {
            if (size <= minWidth) {
                final = minWidth;
            }
            if (size >= maxWidth) {
                final = maxWidth;
            }
        }
        else {
            final = size;
        }
        cols[i].width = final;
        grid.events.fire(types_1.GridEvents.resize, [columns[i], e]);
        grid.paint();
    };
    var upHandler = function () {
        document.removeEventListener("mousemove", moveHandler);
        document.removeEventListener("mouseup", upHandler);
        cb();
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", upHandler);
    grid.paint();
}
exports.startResize = startResize;


/***/ })
/******/ ]);
});if (window.dhx_legacy) { if (window.dhx){ for (var key in dhx) dhx_legacy[key] = dhx[key]; } window.dhx = dhx_legacy; delete window.dhx_legacy; }