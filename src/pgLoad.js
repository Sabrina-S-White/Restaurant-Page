import backgroundImg from './bgImg.jpg';


const content = document.getElementById('content');

export default function buildPage() {


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
    const container = document.createElement('div');

    //Appending divs to content div
    document.body.appendChild(content);
    content.appendChild(imgDiv);
    content.appendChild(headerDiv);
    content.appendChild(container);
    headerDiv.appendChild(headerTop);
    headerDiv.appendChild(headerBot);
    headerTop.appendChild(headline);
    headerBot.appendChild(home);
    headerBot.appendChild(menu);
    headerBot.appendChild(contact);
    
    //Adding classlists 
    home.classList.add('button');
    menu.classList.add('button');
    contact.classList.add('button');
    home.classList.add('hover');
    menu.classList.add('hover');
    contact.classList.add('hover');
    headerDiv.classList.add('bg');
    headerDiv.classList.add('headerDiv');
    headline.classList.add('headline');
    headerTop.classList.add('headerTop');
    headerBot.classList.add('headerBot');
    content.classList.add('contentDiv');
    container.classList.add('bg');
    container.classList.add('main');
    
    //Adding IDs
    home.setAttribute('id', 'homeBtn');
    menu.setAttribute('id', 'menuBtn');
    contact.setAttribute('id', 'contactBtn')
    container.setAttribute('id', 'container');

    //Appending text
    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    headline.innerHTML = 'Restaurant';
    
}