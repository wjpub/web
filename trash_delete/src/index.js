import _ from 'lodash';
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
    element.innerHTML = _.join(['qwe', 'asd'], ' dd ');
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