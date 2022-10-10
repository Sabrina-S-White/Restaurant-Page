import backgroundImg from './bgImg.jpg';
import frontImg from './chefImg.jpg';

const content = document.getElementById('content');

export default function buildPage() {
    const bgImg = new Image();
    const chefImg = new Image();
    bgImg.src = backgroundImg;
    chefImg.src = frontImg;

    // Div creation for header
    const content = document.createElement('div');
    const imgDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const headerTop = document.createElement('div');
    const headerBot = document.createElement('div');
    const headline = document.createElement('div');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    //Div creation for home 
    const homeDiv = document.createElement('div');
    const homePDiv = document.createElement('div');
    const homeMainP1 = document.createElement('p');
    const homeMainP2 = document.createElement('p');
    const homeMainImg = document.createElement('div');

    //Div creation for menu
    const menuDiv = document.createElement('div');
    const menuItemsDiv = document.createElement('div');
    const menuItemsP = document.createElement('p');

    //Div creation for contact
    const contactDiv = document.createElement('div');
    const contactItemsDiv = document.createElement('div');
    const git = document.createElement('a');
    const linked = document.createElement('a');
    const email = document.createElement('a');


    //Appending divs to content div
    document.body.appendChild(content);
    content.appendChild(imgDiv);
    content.appendChild(headerDiv);
    content.appendChild(homeDiv);
    content.appendChild(menuDiv);
    content.appendChild(contactDiv);

    headerDiv.appendChild(headerTop);
    headerDiv.appendChild(headerBot);
    headerTop.appendChild(headline);
    headerBot.appendChild(home);
    headerBot.appendChild(menu);
    headerBot.appendChild(contact);

    homeDiv.appendChild(homePDiv);
    homePDiv.appendChild(homeMainP1);
    homePDiv.appendChild(homeMainP2);
    homeDiv.appendChild(homeMainImg);

    menuDiv.appendChild(menuItemsDiv);
    menuItemsDiv.appendChild(menuItemsP);

    contactDiv.appendChild(contactItemsDiv);
    contactItemsDiv.appendChild(git);
    contactItemsDiv.appendChild(linked);
    contactItemsDiv.appendChild(email);

    //Adding classlists 
    home.classList.add('button');
    menu.classList.add('button');
    contact.classList.add('button');
    headerDiv.classList.add('bg');
    headerDiv.classList.add('headerDiv');
    headline.classList.add('headline');
    headerTop.classList.add('headerTop');
    headerBot.classList.add('headerBot');
    homeDiv.classList.add('bg');
    homeDiv.classList.add('main');
    homePDiv.classList.add('homePDiv');
    homeMainImg.classList.add('mainImg');
    content.classList.add('contentDiv');
    menuDiv.classList.add('bg');
    menuDiv.classList.add('main');
    menuDiv.classList.add('hidden');
    contactDiv.classList.add('bg');
    contactDiv.classList.add('main');
    contactDiv.classList.add('hidden');

    //Adding IDs
    home.setAttribute('id', 'homeBtn');
    menu.setAttribute('id', 'menuBtn');
    contact.setAttribute('id', 'contactBtn')

    //Appending text
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    headline.innerHTML = 'Restaurant';
    homeMainP1.innerHTML = 'Welcome to Restaurant! We offer indoor and outdoor dining, as well as takeout and deliver options!';
    homeMainP2.innerHTML = 'To place a takeout or deliver order, call 123-456-7890';

    //Appending images
    homeMainImg.appendChild(chefImg)
}