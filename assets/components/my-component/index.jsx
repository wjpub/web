import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {

    var element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], '  ');
    element.classList.add('hello');

    var img = new Image();
    img.src = Icon;
    element.appendChild(img);

    console.log(Data);

    return element;
}

document.body.appendChild(component());