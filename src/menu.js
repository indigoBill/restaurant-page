import { createContentContainer } from './general-layout.js';
export { createMenuPageContent };

function createMenuPageContent(){
    createContentContainer('menu');

    createMealHeader('breakfast'); 

    const breakfastMeal_1 = createFoodSquare();
    breakfastMeal_1.addImage('../src/assets/gabre-cameron-W4vDQETfroY-unsplash.jpg');
    breakfastMeal_1.addText('Ackee & Saltfish W/ Fried Dumpling', true);
    breakfastMeal_1.addText('Made with ackee a savory fruit mixed with cod fish and served with fried dumplings. This colorful meal is a showstopper in both taste and appearance');
    breakfastMeal_1.addText('$10', false, true);

    const breakfastMeal_2 = createFoodSquare('right');
    breakfastMeal_2.addImage('../src/assets/jamaican-cornmeal-porridge.jpg');
    breakfastMeal_2.addText('Oatmeal Porridge', true);
    breakfastMeal_2.addText('A hearty breakfast meal that is both simple and filling.\nMade with oats and sweetened with condensed milk, this is a great meal to get your day started');
    breakfastMeal_2.addText('$8', false, true);

    createMealHeader('lunch');

    const lunchMeal_1 = createFoodSquare();
    lunchMeal_1.addImage('../src/assets/gabre-cameron-hxVwlrOkP3c-unsplash.jpg');
    lunchMeal_1.addText('Brown Stew Fish W/ Macaroni Salad and Rice & Peas', true);
    lunchMeal_1.addText('Made with red snapper that is first fried and then stewed down in a homemade sauce with onions, garlic, and thyme this meal is both nutritious and delicious. Especially when served with rice and cabbage salad');
    lunchMeal_1.addText('$20', false, true);

    const lunchMeal_2 = createFoodSquare('right');
    lunchMeal_2.addImage('../src/assets/jerk-chicken.jpg');
    lunchMeal_2.addText('Jerk Chicken W/ Rice & Peas', true);
    lunchMeal_2.addText('Grilled to perfection & covered in a homemade jerk sauce. This is a traditional Jamaican dish is served with rice and peas, sweet plantain, and a salad');
    lunchMeal_2.addText('$20', false, true);

    createMealHeader('dinner');

    const dinnerMeal_1 = createFoodSquare();
    dinnerMeal_1.addImage('../src/assets/gabre-cameron-9jKfpXYPyVo-unsplash.jpg');
    dinnerMeal_1.addText('Red Peas Soup', true);
    dinnerMeal_1.addText('This is a signature meal for chilly days.\n Made with red kidney beans and vegetables cooked in a flavorful coconut milk broth this meal packs a nutritious punch that won\'t be forgotten');
    dinnerMeal_1.addText('$12', false, true);

    const dinnerMeal_2 = createFoodSquare('right');
    dinnerMeal_2.addImage('../src/assets/curried-goat.jpg');
    dinnerMeal_2.addText('Curry Goat W/ White Rice', true);
    dinnerMeal_2.addText('Made with goat meat and potatoes, this meal is simmered in spices and herbs that bring out its signature curry flavor. Served with white rice and a salad this is a meal that is sure to hit the soul');
    dinnerMeal_2.addText('$15', false, true);
}

function createFoodSquare(format){

    const contentContainer = document.querySelector('.menu-content');

    const borderDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imageAndTextContainer = document.createElement('div');
    const textContainer = document.createElement('div');

    borderDiv.classList.add('border-square');
    imageContainer.classList.add('image-container');
    imageAndTextContainer.classList.add('image-txt-container');
    textContainer.classList.add('text-container');

    imageContainer.appendChild(borderDiv);
    imageContainer.appendChild(imageDiv);

    if(format && format.toUpperCase() === 'RIGHT'){
        imageDiv.classList.add('right-image-square');
        textContainer.classList.add('left-side');

        imageAndTextContainer.appendChild(textContainer);
        imageAndTextContainer.appendChild(imageContainer);
    }else{
        imageDiv.classList.add('left-image-square');

        imageAndTextContainer.appendChild(imageContainer);
        imageAndTextContainer.appendChild(textContainer);
    }

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


