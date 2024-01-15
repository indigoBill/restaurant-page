import { createHomePageContent } from './home.js';
export { createGeneralLayout, changeCurrentTab, createContentContainer };

function createGeneralLayout(){
    const page = document.querySelector('#content');

    function createHeader(){
        const headerSection = document.createElement('header');
        const headerTextContainer = document.createElement('div');
        const headerTitle = document.createElement('div');
        const headerSubtext = document.createElement('div');

        headerTextContainer.classList.add('header-text-container');
        headerSection.classList.add('header-section');
        headerTitle.classList.add('header-title');
        headerSubtext.classList.add('header-subtext');

        headerTitle.textContent = 'ISLAND FLAVOR';
        headerSubtext.textContent = '-AUTHENTIC CARIBBEAN CUISINE-';

        headerTextContainer.appendChild(headerTitle);
        headerTextContainer.appendChild(headerSubtext);

        headerSection.appendChild(headerTextContainer);
        
        page.appendChild(headerSection);
    }

    function createPageTabs(){
        const tabSection = document.createElement('div');
        const tabContainer = document.createElement('div');
        const homeTab = document.createElement('div');
        const menuTab = document.createElement('div');
        const contactTab = document.createElement('div');
        const currTabSlider = document.createElement('div');
        const tabAndSliderContainer = document.createElement('div');

        tabSection.classList.add('tab-section');
        tabContainer.classList.add('tab-container');
        homeTab.classList.add('tab', 'home-tab');
        menuTab.classList.add('tab', 'menu-tab');
        contactTab.classList.add('tab', 'contact-tab');
        currTabSlider.classList.add('tab-slider');
        tabAndSliderContainer.classList.add('tabs-and-slider-container');

        homeTab.textContent = 'HOME';
        menuTab.textContent = 'MENU';
        contactTab.textContent = 'CONTACT';

        tabContainer.appendChild(homeTab);
        tabContainer.appendChild(menuTab);
        tabContainer.appendChild(contactTab);

        tabAndSliderContainer.appendChild(tabContainer);
        tabAndSliderContainer.appendChild(currTabSlider);

        tabSection.appendChild(tabAndSliderContainer);

        page.appendChild(tabSection);
    }

    function createMainSection(){
        const mainSection = document.createElement('div');
        mainSection.classList.add('main-section');
        page.appendChild(mainSection);
    }

    createHeader();
    createPageTabs();
    createMainSection();
    createHomePageContent();
}

function moveTabSlider(){
    const currentTab = document.querySelector('.current-tab');
    const tabSlider = document.querySelector('.tab-slider');
    const maxLength = 1;

    if(tabSlider.classList.length > maxLength){
        const removableClass = tabSlider.classList[maxLength];
        tabSlider.classList.remove(removableClass);
    }

    if(currentTab.textContent === 'HOME'){
        tabSlider.classList.add('tab-slider-home');
    }else if(currentTab.textContent === 'MENU'){
        tabSlider.classList.add('tab-slider-menu');
    }else if(currentTab.textContent === 'CONTACT'){
        tabSlider.classList.add('tab-slider-contact');
    }
}

function changeCurrentTab(currentTab){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        if(tab.textContent === currentTab.toUpperCase()){
            tab.classList.add('current-tab');
            moveTabSlider();
        }else{
            tab.classList.remove('current-tab');
        }
    });
}

function createContentContainer(pageType){
    const mainSection = document.querySelector('.main-section');

    const content = document.createElement('div');
    content.classList.add(`${pageType}-content`);

    changeCurrentTab(pageType);

    mainSection.replaceChildren(content);
}

