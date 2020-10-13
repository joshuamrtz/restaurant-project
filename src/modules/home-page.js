export {createHeader, createHomePage}


function createHeader() {
    const header = document.createElement('div');
    header.id = 'header';

    const companyName = document.createElement('h1');
    companyName.id = 'company-name';
    companyName.innerText = 'NYC Chinese Kitchen';
    header.appendChild(companyName);

    const contactTab = document.createElement('button')
    contactTab.id = 'contact-button';
    contactTab.className = 'tablink';
    contactTab.innerText = 'Contact';
    companyName.appendChild(contactTab);

    const menuTab = document.createElement('button')
    menuTab.id = 'menu-button';
    menuTab.className = 'tablink';
    menuTab.innerText = 'Menu';
    companyName.appendChild(menuTab);

    const homeTab = document.createElement('button')
    homeTab.id = 'home-button';
    homeTab.className = 'tablink';
    homeTab.innerText = 'Home';
    companyName.appendChild(homeTab);

    return header;
}

function createHomePage() {
    const container = document.createElement('container');
    container.id = 'about-container';

    const foodImgDiv = document.createElement('div');
    foodImgDiv.id = 'food-img-div';
    container.appendChild(foodImgDiv);

    const foodImg = document.createElement('img');
    foodImg.id = 'food-img';
    foodImg.src = '/home/josh/the_odin_project/restaurant-project/src/photos/charsiunoodles.jpg';
    foodImgDiv.appendChild(foodImg);

    const aboutUsDiv = document.createElement('div');
    aboutUsDiv.id = 'about-us-div';
    container.appendChild(aboutUsDiv);

    const aboutUsHeading = document.createElement('h3');
    aboutUsHeading.innerText = 'About Us';
    const aboutHr = document.createElement('hr');
    aboutHr.id = 'about-hr';
    aboutUsHeading.appendChild(aboutHr);

    const aboutUsInfo = document.createElement('p');
    aboutUsInfo.innerText = 'Established in 1996, NYC Chinese Kitchen has been a cornerstone in the community ever since. Providing a place for locals and tourists to enjoy meals with family, friends, and loved one. Whether its for takeout, delivery or dine-in, we got you covered. Our restaurant has been recognized for its outstanding Chinese cuisine, excellent service and friendly staff. Our Chinese restaurant is known for its modern interpretation of classic dishes and its insistence on only using high quality fresh ingredients.'
    aboutUsDiv.appendChild(aboutUsHeading);
    aboutUsDiv.appendChild(aboutUsInfo);

    return container;
}