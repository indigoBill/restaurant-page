import { createHomePageContent } from './home.js';
export { createLoadPage, changeCurrentTab };

function changeCurrentTab(currentTab){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => {
        if(tab.textContent === currentTab.toUpperCase()){
            tab.classList.add('current-tab');
        }else{
            tab.classList.remove('current-tab');
        }
    });
}

function createLoadPage(){
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
        const homeTab = document.createElement('div');
        const menuTab = document.createElement('div');
        const contactTab = document.createElement('div');

        tabSection.classList.add('tab-section');
        homeTab.classList.add('tab', 'home-tab');
        menuTab.classList.add('tab', 'menu-tab');
        contactTab.classList.add('tab', 'contact-tab');

        homeTab.textContent = 'HOME';
        menuTab.textContent = 'MENU';
        contactTab.textContent = 'CONTACT';

        tabSection.appendChild(homeTab);
        tabSection.appendChild(menuTab);
        tabSection.appendChild(contactTab);

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