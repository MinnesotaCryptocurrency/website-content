/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/app.css\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL2luZGV4LnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LnNjc3M/ZjI4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjc3MvYXBwLmNzc1wiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/index.scss\n");

/***/ }),

/***/ "./src/js/Typewriter.ts":
/*!******************************!*\
  !*** ./src/js/Typewriter.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Typewriter = /** @class */ (function () {\r\n    function Typewriter(callback, delay, jitter) {\r\n        if (delay === void 0) { delay = 100; }\r\n        if (jitter === void 0) { jitter = 0; }\r\n        this.callback = callback;\r\n        this.delay = delay;\r\n        this.jitter = jitter;\r\n        this.timeouts = [];\r\n        this._targetText = '';\r\n        this._progress = '';\r\n    }\r\n    Typewriter.prototype.stop = function () {\r\n        this.timeouts.forEach(function (t) { return clearTimeout(t); });\r\n    };\r\n    Object.defineProperty(Typewriter.prototype, \"progress\", {\r\n        get: function () {\r\n            return this._progress;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Typewriter.prototype, \"targetText\", {\r\n        get: function () {\r\n            return this._targetText;\r\n        },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    Typewriter.prototype.type = function (text) {\r\n        var _this = this;\r\n        this.stop();\r\n        this._targetText = text;\r\n        this.callback('');\r\n        var _loop_1 = function (i) {\r\n            var sub = text.substr(0, i), d = (this_1.delay * i) + (Math.random() - 0.5) * this_1.jitter;\r\n            this_1.timeouts.push(setTimeout(function () {\r\n                _this._progress = sub;\r\n                _this.callback(sub);\r\n            }, d));\r\n        };\r\n        var this_1 = this;\r\n        for (var i = 0; i <= text.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n    };\r\n    return Typewriter;\r\n}());\r\nexports.Typewriter = Typewriter;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvVHlwZXdyaXRlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9UeXBld3JpdGVyLnRzPzRjMTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFR5cGV3cml0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUeXBld3JpdGVyKGNhbGxiYWNrLCBkZWxheSwgaml0dGVyKSB7XHJcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHsgZGVsYXkgPSAxMDA7IH1cclxuICAgICAgICBpZiAoaml0dGVyID09PSB2b2lkIDApIHsgaml0dGVyID0gMDsgfVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3RhcmdldFRleHQgPSAnJztcclxuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9ICcnO1xyXG4gICAgfVxyXG4gICAgVHlwZXdyaXRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRpbWVvdXRzLmZvckVhY2goZnVuY3Rpb24gKHQpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFR5cGV3cml0ZXIucHJvdG90eXBlLCBcInByb2dyZXNzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFR5cGV3cml0ZXIucHJvdG90eXBlLCBcInRhcmdldFRleHRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0VGV4dDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFR5cGV3cml0ZXIucHJvdG90eXBlLnR5cGUgPSBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0VGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjaygnJyk7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICB2YXIgc3ViID0gdGV4dC5zdWJzdHIoMCwgaSksIGQgPSAodGhpc18xLmRlbGF5ICogaSkgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiB0aGlzXzEuaml0dGVyO1xyXG4gICAgICAgICAgICB0aGlzXzEudGltZW91dHMucHVzaChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLl9wcm9ncmVzcyA9IHN1YjtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrKHN1Yik7XHJcbiAgICAgICAgICAgIH0sIGQpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgX2xvb3BfMShpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFR5cGV3cml0ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHlwZXdyaXRlciA9IFR5cGV3cml0ZXI7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Typewriter.ts\n");

/***/ }),

/***/ "./src/js/coinprice.ts":
/*!*****************************!*\
  !*** ./src/js/coinprice.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar bluebird_1 = __webpack_require__(/*! bluebird */ \"bluebird\");\r\n;\r\nexports.coins = [\r\n    {\r\n        name: 'Bitcoin',\r\n        symbol: 'BTC',\r\n    },\r\n    {\r\n        name: 'Ethereum',\r\n        symbol: 'ETH',\r\n    },\r\n    {\r\n        name: 'Monero',\r\n        symbol: 'XMR',\r\n    },\r\n    {\r\n        name: 'Litecoin',\r\n        symbol: 'LTC',\r\n    },\r\n    {\r\n        name: 'Dash',\r\n        symbol: 'DASH',\r\n    },\r\n    {\r\n        name: 'ZCash',\r\n        symbol: 'ZEC',\r\n    },\r\n    // {\r\n    //     name: 'Bitcoin Cash',\r\n    //     symbol: 'BCH',\r\n    // },\r\n    {\r\n        name: 'Dogecoin',\r\n        symbol: 'DOGE',\r\n    },\r\n    {\r\n        name: 'Ripple',\r\n        symbol: 'XRP',\r\n    },\r\n    {\r\n        name: 'Stellar',\r\n        symbol: 'XLM',\r\n    },\r\n];\r\n;\r\nvar prices = null;\r\nvar pending = [];\r\nfunction getPrice(coin) {\r\n    return new bluebird_1.Promise(function (resolve, reject) {\r\n        if (prices === null) {\r\n            pending.push({\r\n                request: coin,\r\n                callback: resolve,\r\n            });\r\n        }\r\n        else {\r\n            resolve(prices[coin.symbol]);\r\n        }\r\n    });\r\n}\r\nexports.getPrice = getPrice;\r\nfunction updatePrices() {\r\n    fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + (exports.coins.map(function (c) { return c.symbol; }).join(',')) + '&tsyms=USD,BTC')\r\n        .then(function (r) { return r.json(); })\r\n        .then(function (j) { return prices = j; })\r\n        .then(function () {\r\n        while (pending.length) {\r\n            var r = pending.pop();\r\n            r.callback(prices[r.request.symbol]);\r\n        }\r\n    });\r\n    setTimeout(updatePrices, 30000);\r\n}\r\nupdatePrices();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29pbnByaWNlLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvaW5wcmljZS50cz9lYjgyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBibHVlYmlyZF8xID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xyXG47XHJcbmV4cG9ydHMuY29pbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0JpdGNvaW4nLFxyXG4gICAgICAgIHN5bWJvbDogJ0JUQycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdFdGhlcmV1bScsXHJcbiAgICAgICAgc3ltYm9sOiAnRVRIJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ01vbmVybycsXHJcbiAgICAgICAgc3ltYm9sOiAnWE1SJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0xpdGVjb2luJyxcclxuICAgICAgICBzeW1ib2w6ICdMVEMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRGFzaCcsXHJcbiAgICAgICAgc3ltYm9sOiAnREFTSCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdaQ2FzaCcsXHJcbiAgICAgICAgc3ltYm9sOiAnWkVDJyxcclxuICAgIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbmFtZTogJ0JpdGNvaW4gQ2FzaCcsXHJcbiAgICAvLyAgICAgc3ltYm9sOiAnQkNIJyxcclxuICAgIC8vIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0RvZ2Vjb2luJyxcclxuICAgICAgICBzeW1ib2w6ICdET0dFJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1JpcHBsZScsXHJcbiAgICAgICAgc3ltYm9sOiAnWFJQJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N0ZWxsYXInLFxyXG4gICAgICAgIHN5bWJvbDogJ1hMTScsXHJcbiAgICB9LFxyXG5dO1xyXG47XHJcbnZhciBwcmljZXMgPSBudWxsO1xyXG52YXIgcGVuZGluZyA9IFtdO1xyXG5mdW5jdGlvbiBnZXRQcmljZShjb2luKSB7XHJcbiAgICByZXR1cm4gbmV3IGJsdWViaXJkXzEuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgaWYgKHByaWNlcyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwZW5kaW5nLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogY29pbixcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiByZXNvbHZlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocHJpY2VzW2NvaW4uc3ltYm9sXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5nZXRQcmljZSA9IGdldFByaWNlO1xyXG5mdW5jdGlvbiB1cGRhdGVQcmljZXMoKSB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9taW4tYXBpLmNyeXB0b2NvbXBhcmUuY29tL2RhdGEvcHJpY2VtdWx0aT9mc3ltcz0nICsgKGV4cG9ydHMuY29pbnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnN5bWJvbDsgfSkuam9pbignLCcpKSArICcmdHN5bXM9VVNELEJUQycpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHIpIHsgcmV0dXJuIHIuanNvbigpOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqKSB7IHJldHVybiBwcmljZXMgPSBqOyB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3aGlsZSAocGVuZGluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHIgPSBwZW5kaW5nLnBvcCgpO1xyXG4gICAgICAgICAgICByLmNhbGxiYWNrKHByaWNlc1tyLnJlcXVlc3Quc3ltYm9sXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBzZXRUaW1lb3V0KHVwZGF0ZVByaWNlcywgMzAwMDApO1xyXG59XHJcbnVwZGF0ZVByaWNlcygpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/coinprice.ts\n");

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Typewriter_1 = __webpack_require__(/*! ./Typewriter */ \"./src/js/Typewriter.ts\");\r\nArray.prototype.slice.call(document.querySelectorAll('[data-typewrite]')).forEach(function (e) {\r\n    var text = e.textContent;\r\n    var t = new Typewriter_1.Typewriter(function (s) {\r\n        e.textContent = s;\r\n    }, 50, 45);\r\n    t.type(text);\r\n});\r\nvar coinprice_1 = __webpack_require__(/*! ./coinprice */ \"./src/js/coinprice.ts\");\r\nvar headerCoinPrice = document.getElementById('header-coinprice'), coinPriceTyper = new Typewriter_1.Typewriter(function (str) {\r\n    headerCoinPrice.textContent = str;\r\n});\r\nvar lastCoin = null;\r\nfunction showCoin() {\r\n    var coin = coinprice_1.coins[0];\r\n    if (lastCoin !== null) {\r\n        do {\r\n            coin = coinprice_1.coins[Math.floor(Math.random() * coinprice_1.coins.length)];\r\n        } while (coin === lastCoin);\r\n    }\r\n    lastCoin = coin;\r\n    coinprice_1.getPrice(coin).then(function (price) {\r\n        coinPriceTyper.type(coin.name + \": $\" + (price.USD >= 1 ? price.USD.toFixed(2) : price.USD.toFixed(4)));\r\n        setTimeout(showCoin, 5000);\r\n    });\r\n}\r\nsetTimeout(showCoin, 6000);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgudHM/Mjk5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVHlwZXdyaXRlcl8xID0gcmVxdWlyZShcIi4vVHlwZXdyaXRlclwiKTtcclxuQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZXdyaXRlXScpKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICB2YXIgdGV4dCA9IGUudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdCA9IG5ldyBUeXBld3JpdGVyXzEuVHlwZXdyaXRlcihmdW5jdGlvbiAocykge1xyXG4gICAgICAgIGUudGV4dENvbnRlbnQgPSBzO1xyXG4gICAgfSwgNTAsIDQ1KTtcclxuICAgIHQudHlwZSh0ZXh0KTtcclxufSk7XHJcbnZhciBjb2lucHJpY2VfMSA9IHJlcXVpcmUoXCIuL2NvaW5wcmljZVwiKTtcclxudmFyIGhlYWRlckNvaW5QcmljZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY29pbnByaWNlJyksIGNvaW5QcmljZVR5cGVyID0gbmV3IFR5cGV3cml0ZXJfMS5UeXBld3JpdGVyKGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGhlYWRlckNvaW5QcmljZS50ZXh0Q29udGVudCA9IHN0cjtcclxufSk7XHJcbnZhciBsYXN0Q29pbiA9IG51bGw7XHJcbmZ1bmN0aW9uIHNob3dDb2luKCkge1xyXG4gICAgdmFyIGNvaW4gPSBjb2lucHJpY2VfMS5jb2luc1swXTtcclxuICAgIGlmIChsYXN0Q29pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29pbiA9IGNvaW5wcmljZV8xLmNvaW5zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvaW5wcmljZV8xLmNvaW5zLmxlbmd0aCldO1xyXG4gICAgICAgIH0gd2hpbGUgKGNvaW4gPT09IGxhc3RDb2luKTtcclxuICAgIH1cclxuICAgIGxhc3RDb2luID0gY29pbjtcclxuICAgIGNvaW5wcmljZV8xLmdldFByaWNlKGNvaW4pLnRoZW4oZnVuY3Rpb24gKHByaWNlKSB7XHJcbiAgICAgICAgY29pblByaWNlVHlwZXIudHlwZShjb2luLm5hbWUgKyBcIjogJFwiICsgKHByaWNlLlVTRCA+PSAxID8gcHJpY2UuVVNELnRvRml4ZWQoMikgOiBwcmljZS5VU0QudG9GaXhlZCg0KSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvd0NvaW4sIDUwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuc2V0VGltZW91dChzaG93Q29pbiwgNjAwMCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.ts\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/js/index ./src/css/index ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index */"./src/js/index.ts");
module.exports = __webpack_require__(/*! ./src/css/index */"./src/css/index.scss");


/***/ }),

/***/ "bluebird":
/*!**************************!*\
  !*** external "Promise" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Promise;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZWJpcmQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJQcm9taXNlXCI/ZDQ3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bluebird\n");

/***/ })

/******/ });