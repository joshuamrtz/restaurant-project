export {createContact}

function createContact() {
    const container = document.createElement('container');
    container.id = 'contact-container';

    const contactImgDiv = document.createElement('div');
    contactImgDiv.id = 'contact-img-div';
    container.appendChild(contactImgDiv);

    const contactImg = document.createElement('img');
    contactImg.id = 'contact-img';
    contactImg.src = '/home/josh/the_odin_project/restaurant-project/src/photos/chinese-restaurant.jpg';
    contactImgDiv.appendChild(contactImg);

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact-div';
    container.appendChild(contactDiv);

    const contactHeading = document.createElement('h2');
    contactHeading.innerText = 'Contact';
    const contactHr = document.createElement('hr');
    contactHr.id = 'contact-hr';
    contactHeading.appendChild(contactHr);
    contactDiv.appendChild(contactHeading);

    const contactInfo = document.createElement('div');
    contactInfo.id = 'contact-info-div';
    const contactInfoSummary = document.createElement('div');
    contactInfoSummary.id = 'contact-info-summary';
    contactInfoSummary.innerText = 'Have any questions or feedback? We\'d love to hear from you. Even if you don\'t, come say hi! All of our contact information is below:';
    contactInfo.appendChild(contactInfoSummary);
    const phoneNumberLeft = document.createElement('div');
    phoneNumberLeft.id = 'phone-number-left';
    phoneNumberLeft.innerText = 'Phone Number:'
    contactInfo.appendChild(phoneNumberLeft);
    const emailLeft = document.createElement('div');
    emailLeft.id = 'email-left';
    emailLeft.innerText = 'Email:'
    contactInfo.appendChild(emailLeft);
    const addressLeft = document.createElement('div');
    addressLeft.id = 'address-left';
    addressLeft.innerText = 'Address:'
    contactInfo.appendChild(addressLeft);
    const phoneNumberRight = document.createElement('div');
    phoneNumberRight.id = 'phone-number-right';
    phoneNumberRight.innerText = '(212) 440-XXX'
    contactInfo.appendChild(phoneNumberRight);
    const emailRight = document.createElement('div');
    emailRight.id = 'email-right';
    emailRight.innerText = 'NYC.ChineseKitchen@XXXXX.com'
    contactInfo.appendChild(emailRight);
    const addressRight = document.createElement('div');
    addressRight.id = 'address-right';
    addressRight.innerText = 'XX Bayard St, New York, NY 10013';
    contactInfo.appendChild(addressRight);

    contactDiv.appendChild(contactInfo);

    return container;
}