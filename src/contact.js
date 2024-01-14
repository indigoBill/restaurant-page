import { createContentContainer } from './general-layout.js';
export { createContactPageContent };

function createContactPageContent(){
    createContentContainer('contact');

    const contentContainer = document.querySelector('.contact-content');

    contentContainer.textContent = 'CONTACT PAGE';
}



