import { createContentContainer } from './general-layout.js';
export { createMenuPageContent };

function createMenuPageContent(){
    createContentContainer('menu');

    const contentContainer = document.querySelector('.menu-content');

    contentContainer.textContent = 'MENU PAGE';

}

//CREATE BORDER SQUARE AND IMAGE SQUARE DESIGN BY HAVING THE SQUARES OVERLAP WITH THE IMAGE OF THE FOOD
//IN THE ON TOP OF THE BORDER DIV WHICH IS USED AS A BORDER BOX SHADOW
function createFoodSquare(){
    const contentContainer = document.querySelector('.menu-content');

    const borderDiv = document.createElement('div');
    borderDiv.classList.add('border-square');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('solid-square');

    const divContainer = document.createElement('div');

    divContainer.appendChild(borderDiv);
    divContainer.appendChild(imageDiv);

    contentContainer.appendChild(divContainer);
}