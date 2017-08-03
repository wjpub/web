webpackJsonp([2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

// import PrintMe from './print.js';
// import './style.css';

function component() {

    // return import(/* webpacChunkName: "lodash" */ 'lodash').then(_ => {
    //     var element = document.createElement('div');
    //     element.innerHTML = _.join([1, 3, 4, 5, 'dd'], ' _ ');
    //     return element;
    // }).catch(error => 'an error accurred while loading the component!');

    var element = document.createElement('div');
    // var button = document.createElement('button');
    // var br = document.createElement('br');
    // button.innerHTML = '123 click';
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['qwe', 'asd'], ' dd ');
    // element.appendChild(br);
    // element.appendChild(button);
    // // Note that because a network request is involved, some indication
    // // of loading would need to be shown in a production-level site/app.
    // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;
    //     print();
    // });
    // return element;

    // element.onclick = PrintMe.bind(null, 'Hello xxx');
    return element;
}

// getComponent().then(component => {
//     document.body.appendChild(component);
// });

// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     element.innerHTML = _.join(['hello', 'webpack'], '  ');
//
//     btn.innerHTML = 'click me and check the console!';
//     btn.onclick = function(){printMe()};
//     element.appendChild(btn);
//
//     return element;
// }
document.body.appendChild(component());
//
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJIiwiZmlsZSI6ImFwcC45ODg2YWRiMTkxZmQ2ODU5Njc3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBpbXBvcnQgUHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICAvLyByZXR1cm4gaW1wb3J0KC8qIHdlYnBhY0NodW5rTmFtZTogXCJsb2Rhc2hcIiAqLyAnbG9kYXNoJykudGhlbihfID0+IHtcbiAgICAvLyAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWzEsIDMsIDQsIDUsICdkZCddLCAnIF8gJyk7XG4gICAgLy8gICAgIHJldHVybiBlbGVtZW50O1xuICAgIC8vIH0pLmNhdGNoKGVycm9yID0+ICdhbiBlcnJvciBhY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQhJyk7XG5cbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAvLyB2YXIgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgIC8vIGJ1dHRvbi5pbm5lckhUTUwgPSAnMTIzIGNsaWNrJztcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ3F3ZScsICdhc2QnXSwgJyBkZCAnKTtcbiAgICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKGJyKTtcbiAgICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgLy8gLy8gTm90ZSB0aGF0IGJlY2F1c2UgYSBuZXR3b3JrIHJlcXVlc3QgaXMgaW52b2x2ZWQsIHNvbWUgaW5kaWNhdGlvblxuICAgIC8vIC8vIG9mIGxvYWRpbmcgd291bGQgbmVlZCB0byBiZSBzaG93biBpbiBhIHByb2R1Y3Rpb24tbGV2ZWwgc2l0ZS9hcHAuXG4gICAgLy8gYnV0dG9uLm9uY2xpY2sgPSBlID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInByaW50XCIgKi8gJy4vcHJpbnQnKS50aGVuKG1vZHVsZSA9PiB7XG4gICAgLy8gICAgIHZhciBwcmludCA9IG1vZHVsZS5kZWZhdWx0O1xuICAgIC8vICAgICBwcmludCgpO1xuICAgIC8vIH0pO1xuICAgIC8vIHJldHVybiBlbGVtZW50O1xuXG4gICAgLy8gZWxlbWVudC5vbmNsaWNrID0gUHJpbnRNZS5iaW5kKG51bGwsICdIZWxsbyB4eHgnKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLy8gZ2V0Q29tcG9uZW50KCkudGhlbihjb21wb25lbnQgPT4ge1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydoZWxsbycsICd3ZWJwYWNrJ10sICcgICcpO1xuLy9cbi8vICAgICBidG4uaW5uZXJIVE1MID0gJ2NsaWNrIG1lIGFuZCBjaGVjayB0aGUgY29uc29sZSEnO1xuLy8gICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKXtwcmludE1lKCl9O1xuLy8gICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuKTtcbi8vXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG4vLyB9XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbi8vXG4vLyBpZiAobW9kdWxlLmhvdCkge1xuLy8gICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3ByaW50LmpzJywgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZygnQWNjZXB0aW5nIHRoZSB1cGRhdGVkIHByaW50TWUgbW9kdWxlIScpO1xuLy8gICAgICAgICBwcmludE1lKCk7XG4vLyAgICAgfSlcbi8vIH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9