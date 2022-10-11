import $ from 'jquery';
import buildPage from './pgLoad';
import homeLoad from './home.js';
import menuLoad from './menu.js';
import contactLoad from './contact.js';
import './style.css';

window.onload = () => {
    buildPage();
    homeBtn.addEventListener('click', () => {
        container.innerHTML = '';
        homeLoad();
    }); 
    menuBtn.addEventListener('click', () => {
        container.innerHTML = '';
        menuLoad();
    })
    contactBtn.addEventListener('click', () => {
        container.innerHTML = '';
        contactLoad();
    })
}
