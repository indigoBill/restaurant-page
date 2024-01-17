import { createContentContainer, adjustTabStyle } from './general-layout.js';
import './style-sheets/contact.css';
export { createContactPageContent };

function createContactPageContent(){
    createContentContainer('contact');
    adjustTabStyle('contact');

    const contentContainer = document.querySelector('.contact-content');

    const contactInfoContainer = document.createElement('div');
    const phoneNumberContainer = document.createElement('div');
    const phoneHeader = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const addressContainer = document.createElement('div');
    const addressHeader = document.createElement('p');
    const address = document.createElement('p');

    phoneHeader.textContent = '-PHONE NUMBER-';
    phoneNumber.textContent = '(123)-456-7890';
    addressHeader.textContent = '-ADDRESS-';
    address.textContent = '123 Violet Pl, Brooklyn, NY, 11212';

    contactInfoContainer.classList.add('contact-info-container');
    phoneHeader.classList.add('contact-header');
    addressHeader.classList.add('contact-header');

    phoneNumberContainer.appendChild(phoneHeader);
    phoneNumberContainer.appendChild(phoneNumber);

    addressContainer.appendChild(addressHeader);
    addressContainer.appendChild(address);

    contactInfoContainer.appendChild(phoneNumberContainer);
    contactInfoContainer.appendChild(addressContainer);

    contentContainer.appendChild(contactInfoContainer);
}



