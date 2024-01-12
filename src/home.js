import { changeCurrentTab } from './load.js'
export { createHomePageContent };

function createHomePageContent(){
    const mainSection = document.querySelector('.main-section');
    const homeContent = document.createElement('div');

    changeCurrentTab('home');

    homeContent.textContent = 'HOME PAGE TEXT';
    mainSection.replaceChildren(homeContent);
}