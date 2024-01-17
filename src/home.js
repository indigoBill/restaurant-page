import { createContentContainer, adjustTabStyle } from './general-layout.js';
import './style-sheets/home.css';
export { createHomePageContent };

function createHomePageContent(){
    createContentContainer('home');
    adjustTabStyle('home');

    const contentContainer = document.querySelector('.home-content');

    const introContainer = document.createElement('div');
    const introHeader = document.createElement('p');
    const introSubtext = document.createElement('p');

    introContainer.classList.add('introContainer');
    introHeader.classList.add('intro-header');
    introSubtext.classList.add('intro-subtext');

    introHeader.textContent = '-Welcome!-';
    introSubtext.textContent = 'Established in 2000, Island Flavor has been serving meals to its community for over 20 years. ';
    introSubtext.textContent += 'What started as a dream has now become a reality and we hope to serve you for many years to come. ';
    introSubtext.textContent += 'Take your time to view our menu and if anything peaks your interest, feel free to visit us!';


    introContainer.appendChild(introHeader);
    introContainer.appendChild(introSubtext);

    contentContainer.appendChild(introContainer);
}