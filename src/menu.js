export default function menuLoad() {
    const container = document.getElementById('container')
    //Div creation for menu
    const menuDiv = document.createElement('div');
    const menuItemsDiv = document.createElement('div');
    const menuList = document.createElement('ul');
    const item1 = document.createElement('li');
    const item2 = document.createElement('li');
    const item3 = document.createElement('li');
    const item4 = document.createElement('li');
    const item5 = document.createElement('li');
    const item6 = document.createElement('li');

    menuList.classList.add('list')
    
    container.appendChild(menuDiv);
    menuDiv.appendChild(menuItemsDiv);
    menuItemsDiv.appendChild(menuList);
    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);
    menuList.appendChild(item4);
    menuList.appendChild(item5);
    menuList.appendChild(item6);

    item1.innerHTML = 'Ceaser Salad - $16';
    item2.innerHTML = 'Cobb Salad - $15';
    item3.innerHTML = 'Tomato Soup & Grilled Cheeese - $18';
    item4.innerHTML = 'Grilled Chicken and Asparagus - $22';
    item5.innerHTML = 'Steak and Potatos - $26';
    item6.innerHTML = 'Flan - $10';
}

