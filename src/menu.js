import { createContentContainer } from './general-layout.js';
export { createMenuPageContent };

function createMenuPageContent(){
    createContentContainer('menu');

    createMealHeader('breakfast'); 

    const breakfastMeal_1 = createFoodSquare();
    breakfastMeal_1.addImage('../src/assets/gabre-cameron-W4vDQETfroY-unsplash.jpg');
    breakfastMeal_1.addText('Ackee & Saltfish W/ Fried Dumpling', true);
    breakfastMeal_1.addText('DESCRIPTION');
    breakfastMeal_1.addText('$10',false, true);

    createMealHeader('lunch');
    createMealHeader('dinner');

}

function createFoodSquare(){

    const contentContainer = document.querySelector('.menu-content');

    const borderDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imageAndTextContainer = document.createElement('div');
    const textContainer = document.createElement('div');

    borderDiv.classList.add('border-square');
    imageDiv.classList.add('image-square');
    imageContainer.classList.add('image-container');
    imageAndTextContainer.classList.add('image-txt-container');
    textContainer.classList.add('text-container');

    imageContainer.appendChild(borderDiv);
    imageContainer.appendChild(imageDiv);

    imageAndTextContainer.appendChild(imageContainer);
    imageAndTextContainer.appendChild(textContainer);

    contentContainer.appendChild(imageAndTextContainer);

    function addImage(imagePath){
        imageDiv.style.backgroundImage = `url('${imagePath}')`;
    }

    function addText(text, isSubtextHeader, isPrice){
        const textDiv = document.createElement('div');
        textDiv.textContent = text;

        if(isSubtextHeader){
            textDiv.classList.add('subtext-header');
        }

        if(isPrice){
            textDiv.classList.add('price');
        }

        textContainer.appendChild(textDiv);
    }

    return { addImage, addText };
}

function createMealHeader(meal){
    const contentContainer = document.querySelector('.menu-content');

    const mealHeader = document.createElement('div');
    mealHeader.classList.add('meal-header');
    mealHeader.textContent = meal.toUpperCase();

    contentContainer.appendChild(mealHeader);
}


