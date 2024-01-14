import { createContentContainer } from './general-layout.js';
export { createHomePageContent };

function createHomePageContent(){
    createContentContainer('home');

    const contentContainer = document.querySelector('.home-content');

    contentContainer.textContent = 'HOME PAGE';

}