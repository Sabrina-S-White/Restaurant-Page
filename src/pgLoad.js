import backgroundImg from './bgImg.jpg';
import frontImg from './chefImg.jpg';

const content = document.getElementById('content');


export default function buildPage() {
    const bgImg = new Image();
    const chefImg = new Image();
    bgImg.src = backgroundImg;
    chefImg.src = frontImg;

    // Div creation for header
    const imgDiv = document.createElement('div');
    const menuDiv = document.createElement('div');
    const headline = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    //Div creation for main 
    const main = document.createElement('div');
    const mainP = document.createElement('p');
    const mainImg = document.createElement('div');

    //Appending divs to content div
    content.appendChild(imgDiv);
    content.appendChild(menuDiv);
    content.appendChild(main);

    menuDiv.appendChild(headline);
    menuDiv.appendChild(home);
    menuDiv.appendChild(menu);
    menuDiv.appendChild(contact);

    main.appendChild(mainP);
    main.appendChild(mainImg);

    //Adding classlists 
    home.classList.add('button');
    menu.classList.add('button');
    contact.classList.add('button');
    menuDiv.classList.add('bg');
    menuDiv.classList.add('menuDiv');
    main.classList.add('bg');
    main.classList.add('main');

    //Adding IDs

    //Appending text
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';

}