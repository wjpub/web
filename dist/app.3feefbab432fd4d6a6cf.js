webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_js__ = __webpack_require__(4);



function component() {

    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['hello', 'webpack'], '  ');

    btn.innerHTML = 'click me and check the console!';
    btn.onclick = function(){Object(__WEBPACK_IMPORTED_MODULE_1__print_js__["default"])()};
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

/***/ })
],[1]);