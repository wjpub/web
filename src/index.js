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
    const _ = await import('lodash');
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