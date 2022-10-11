import gitImg from './gitIcon.png';
import linkImg from './linkedin.png';
import emailImg from './email-32.png';

export default function contactLoad() {
    const container = document.getElementById('container')

    const gitIcon = new Image();
    const linkIcon = new Image();
    const mailIcon = new Image();
    gitIcon.src = gitImg;
    linkIcon.src = linkImg;
    mailIcon.src = emailImg;

    //Div creation for contact
    const contactItemsDiv = document.createElement('div');
    const contactItemsUL = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const git = document.createElement('a');
    const linked = document.createElement('a');
    const email = document.createElement('a');
    const gitHolder = document.createElement('img');
    const linkedHolder = document.createElement('img');
    const mailHolder = document.createElement('img');

    git.setAttribute('href', 'https://github.com/Sabrina-S-White');
    linked.setAttribute('href', 'https://www.linkedin.com/in/sabrina-white-7ba594b7/');
    email.setAttribute('href', 'mailto: sabrina.scherma@gmail.com');

    gitHolder.setAttribute('src', gitImg);
    linkedHolder.setAttribute('src', linkImg);
    mailHolder.setAttribute('src', emailImg);

    item1.classList.add('hover');
    item2.classList.add('hover');
    item3.classList.add('hover');
    contactItemsUL.classList.add('contactList')

    container.appendChild(contactItemsDiv);

    contactItemsDiv.appendChild(contactItemsUL);

    contactItemsUL.appendChild(item1);
    contactItemsUL.appendChild(item2);
    contactItemsUL.appendChild(item3);

    item1.appendChild(git);
    item2.appendChild(linked);
    item3.appendChild(email);

    git.appendChild(gitHolder);
    linked.appendChild(linkedHolder);
    email.appendChild(mailHolder);
}

