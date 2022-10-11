import frontImg from './chefImg.jpg';

export default function homeLoad() {
    const container = document.getElementById('container')
    const chefImg = new Image();
    chefImg.src = frontImg;

    //Making elements for home tab
    const homePDiv = document.createElement('div');
    const homeMainP1 = document.createElement('p');
    const homeMainP2 = document.createElement('p');
    const homeMainImg = document.createElement('div');
    
    container.appendChild(homePDiv);
    homePDiv.appendChild(homeMainP1);
    homePDiv.appendChild(homeMainP2);
    container.appendChild(homeMainImg);
    
    homePDiv.classList.add('homePDiv');
    homeMainImg.classList.add('mainImg');

    homeMainP1.innerHTML = 'Welcome to Restaurant! We offer indoor and outdoor dining, as well as takeout and deliver options!';
    homeMainP2.innerHTML = 'To place a takeout or deliver order, call: <br> 123-456-7890';

    homeMainImg.appendChild(chefImg)
}

