import {createHeader, createHomePage} from './modules/home-page.js'
import {createMenu} from './modules/menu.js'
import {createContact} from './modules/contact.js'

const content = document.querySelector('#content');
const header = createHeader();
const homePage = createHomePage();
const menu = createMenu();
const contact = createContact();

content.appendChild(header);
content.appendChild(homePage);
content.appendChild(menu);
document.getElementById('menu-container').style.display = 'none';
content.appendChild(contact);
document.getElementById('contact-container').style.display = 'none';

const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

homeButton.addEventListener('click', (e) => {
    document.getElementById('about-container').style.display = 'flex';
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
})

menuButton.addEventListener('click', (e) => {
    document.getElementById('menu-container').style.display = 'grid';
    document.getElementById('about-container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
})

contactButton.addEventListener('click', (e) => {
    document.getElementById('contact-container').style.display = 'flex';
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('about-container').style.display = 'none';
})