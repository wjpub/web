webpackJsonp([0],{

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';

async function getComponent() {

    // return import(/* webpacChunkName: "lodash" */ 'lodash').then(_ => {
    //     var element = document.createElement('div');
    //     element.innerHTML = _.join([1, 3, 4, 5, 'dd'], ' _ ');
    //     return element;
    // }).catch(error => 'an error accurred while loading the component!');

    var element = document.createElement('div');
    const _ = await new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 1));
    element.innerHTML = _.join(['qwe', 'asd'], ' dd ');
    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});

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
// document.body.appendChild(component());
//
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         printMe();
//     })
// }

/***/ })

},[3]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLEkiLCJmaWxlIjoiYXBwLjljZGM2NWVmZTVkNDA3YTJmYTc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbi8vIGltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcblxuICAgIC8vIHJldHVybiBpbXBvcnQoLyogd2VicGFjQ2h1bmtOYW1lOiBcImxvZGFzaFwiICovICdsb2Rhc2gnKS50aGVuKF8gPT4ge1xuICAgIC8vICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbMSwgMywgNCwgNSwgJ2RkJ10sICcgXyAnKTtcbiAgICAvLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgLy8gfSkuY2F0Y2goZXJyb3IgPT4gJ2FuIGVycm9yIGFjY3VycmVkIHdoaWxlIGxvYWRpbmcgdGhlIGNvbXBvbmVudCEnKTtcblxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgXyA9IGF3YWl0IGltcG9ydCgnbG9kYXNoJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydxd2UnLCAnYXNkJ10sICcgZGQgJyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmdldENvbXBvbmVudCgpLnRoZW4oY29tcG9uZW50ID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG59KTtcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnaGVsbG8nLCAnd2VicGFjayddLCAnICAnKTtcbi8vXG4vLyAgICAgYnRuLmlubmVySFRNTCA9ICdjbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJztcbi8vICAgICBidG4ub25jbGljayA9IGZ1bmN0aW9uKCl7cHJpbnRNZSgpfTtcbi8vICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG4vL1xuLy8gICAgIHJldHVybiBlbGVtZW50O1xuLy8gfVxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG4vL1xuLy8gaWYgKG1vZHVsZS5ob3QpIHtcbi8vICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9wcmludC5qcycsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ0FjY2VwdGluZyB0aGUgdXBkYXRlZCBwcmludE1lIG1vZHVsZSEnKTtcbi8vICAgICAgICAgcHJpbnRNZSgpO1xuLy8gICAgIH0pXG4vLyB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==