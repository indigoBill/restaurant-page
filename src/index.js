import { createGeneralLayout } from './general-layout.js'
import { createHomePageContent } from './home.js';
import { createMenuPageContent } from './menu.js';
import { createContactPageContent } from './contact.js';

createGeneralLayout();

function changeMainContent(){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => tab.addEventListener('click', displayPageContent));
    window.addEventListener('keydown', displayPageContent);

    function displayPageContent(e){

        if(e.type === 'click'){
            const tabText = e.target.textContent;

            if(tabText === 'MENU'){
                createMenuPageContent();
            }else if(tabText === 'CONTACT'){
                createContactPageContent();
            }else{
                createHomePageContent();
            }

        }else if(e.type === 'keydown'){
            if(e.key === 'Tab'){

                e.preventDefault();

                const currentTab = document.querySelector('.current-tab');

                if(currentTab === null){
                    createMenuPageContent();
                    return;
                }

                if(currentTab.textContent === 'HOME'){
                    createMenuPageContent();
                }else if(currentTab.textContent === 'MENU'){
                    createContactPageContent();
                }else if(currentTab.textContent === 'CONTACT'){
                    createHomePageContent();
                }
            }
        }
        
    }
}

changeMainContent();

