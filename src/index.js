import './reset.css';
import './style.css';

import { displayDropDown } from './dropdown';
const docWrapper = document.querySelector('.test');
const actionFunction = (e) => {
    console.log(e.target);
};
displayDropDown({
    wrapper : docWrapper,
    title : 'Menu', 
    list : ['About', 'Settings', 'Help', 'Account'],
    action : actionFunction
});