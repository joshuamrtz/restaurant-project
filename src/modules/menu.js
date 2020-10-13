export {createMenu}

function createMenu() {
    const container = document.createElement('container');
    container.id = 'menu-container';
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-div';
    const menuHeading = document.createElement('h1');
    menuHeading.innerText = 'Menu';
    const menuHr = document.createElement('hr');
    container.appendChild(menuDiv);
    menuDiv.appendChild(menuHeading);
    menuHeading.appendChild(menuHr);

    //ENTREES
    const entrees = document.createElement('div');
    entrees.id = 'entrees';
    const entreesHeading = document.createElement('h2');
    entreesHeading.innerText = 'Entrees';
    container.appendChild(entrees);
    entrees.appendChild(entreesHeading);
    let entreeItems = [
        'Sesame Chicken',
        'Teriyaki Chicken',
        'Kung Pao Chicken',
        'Orange Chicken',
        'Char Siu Pork',
        'Sweet & Sour Pork',
        'Mongolian Beef',
        'Mushroom Beef'
        ],
        entreeUl = document.createElement('ul');

    entrees.appendChild(entreeUl);

    entreeItems.forEach(function (item) {
        let li = document.createElement('li');
        entreeUl.appendChild(li);

        li.innerHTML += item;
    });

    //SIDES
    const sides = document.createElement('div');
    sides.id = 'sides';
    const sidesHeading = document.createElement('h2');
    sidesHeading.innerText = 'Sides';
    container.appendChild(sides);
    sides.appendChild(sidesHeading);
    let sideItems = [
        'Steamed Rice',
        'Brown Rice',
        'Fried Rice',
        'Chow Mein',
        'Lo Mein',
        'Spring Rolls',
        'Crab Rolls',
        ],
        sideUl = document.createElement('ul');

    sides.appendChild(sideUl);

    sideItems.forEach(function (item) {
        let li = document.createElement('li');
        sideUl.appendChild(li);

        li.innerHTML += item;
    });

    //DESSERTS
    const desserts = document.createElement('div');
    desserts.id = 'desserts';
    const dessertsHeading = document.createElement('h2');
    dessertsHeading.innerText = 'Desserts';
    container.appendChild(desserts);
    desserts.appendChild(dessertsHeading);
    let dessertItems = [
        'Chinese Donuts',
        'Red Bean Bun',
        'Matcha Bun',
        'Sesame Buns',
        'Egg Tart',
        ],
        dessertUl = document.createElement('ul');

    desserts.appendChild(dessertUl);

    dessertItems.forEach(function (item) {
        let li = document.createElement('li');
        dessertUl.appendChild(li);

        li.innerHTML += item;
    });

    //DRINKS
    const drinks = document.createElement('div');
    drinks.id = 'drinks';
    const drinksHeading = document.createElement('h2');
    drinksHeading.innerText = 'Drinks';
    container.appendChild(drinks);
    drinks.appendChild(drinksHeading);
    let drinkItems = [
        'Soda (Pepsi Products)',
        'Iced Tea (Sweetened and Unsweetened)',
        'Bottle Water',
        'Gatorade',
        'Alcoholic Beverages (Not Available for Takeout or Delivery)'
        ],
        drinkUl = document.createElement('ul');

    drinks.appendChild(drinkUl);

    drinkItems.forEach(function (item) {
        let li = document.createElement('li');
        drinkUl.appendChild(li);

        li.innerHTML += item;
    });

    return container;
}