import './reset.css';
import './style.css';

const container = document.querySelector('.container');
const title = document.querySelector('.title');
const list = document.querySelector('ul');
const listElements = [...document.querySelectorAll('li')];

container.addEventListener('mouseenter', () => {
    list.classList.add('visible');
});

container.addEventListener('mouseleave', () => {
    list.classList.remove('visible');
})