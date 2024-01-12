import { changeCurrentTab } from './load.js'
export { createContactPageContent };

function createContactPageContent(){
    const mainSection = document.querySelector('.main-section');
    const contactContent = document.createElement('div');

    changeCurrentTab('contact');

    contactContent.textContent = 'CONTACT PAGE TEXT';


    mainSection.replaceChildren(contactContent);
}