import { changeCurrentTab } from './load.js'
export { createMenuPageContent };

function createMenuPageContent(){
    const mainSection = document.querySelector('.main-section');
    const menuContent = document.createElement('div');

    changeCurrentTab('menu');

    menuContent.textContent = 'MENU PAGE TEXT';

    mainSection.replaceChildren(menuContent);
}