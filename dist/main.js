/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPageContent: () => (/* binding */ createContactPageContent)
/* harmony export */ });
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ "./src/load.js");



function createContactPageContent(){
    const mainSection = document.querySelector('.main-section');
    const contactContent = document.createElement('div');

    (0,_load_js__WEBPACK_IMPORTED_MODULE_0__.changeCurrentTab)('contact');

    contactContent.textContent = 'CONTACT PAGE TEXT';


    mainSection.replaceChildren(contactContent);
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePageContent: () => (/* binding */ createHomePageContent)
/* harmony export */ });
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ "./src/load.js");



function createHomePageContent(){
    const mainSection = document.querySelector('.main-section');
    const homeContent = document.createElement('div');

    (0,_load_js__WEBPACK_IMPORTED_MODULE_0__.changeCurrentTab)('home');

    homeContent.textContent = 'HOME PAGE TEXT';
    mainSection.replaceChildren(homeContent);
}

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeCurrentTab: () => (/* binding */ changeCurrentTab),
/* harmony export */   createLoadPage: () => (/* binding */ createLoadPage)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePageContent)();
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenuPageContent: () => (/* binding */ createMenuPageContent)
/* harmony export */ });
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ "./src/load.js");



function createMenuPageContent(){
    const mainSection = document.querySelector('.main-section');
    const menuContent = document.createElement('div');

    (0,_load_js__WEBPACK_IMPORTED_MODULE_0__.changeCurrentTab)('menu');

    menuContent.textContent = 'MENU PAGE TEXT';

    mainSection.replaceChildren(menuContent);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ "./src/load.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_load_js__WEBPACK_IMPORTED_MODULE_0__.createLoadPage)();

function changeMainContent(){
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab) => tab.addEventListener('click', displayPageContent));
    window.addEventListener('keydown', displayPageContent);

    function displayPageContent(e){

        if(e.type === 'click'){
            const tabText = e.target.textContent;

            if(tabText === 'MENU'){
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPageContent)();
            }else if(tabText === 'CONTACT'){
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactPageContent)();
            }else{
                (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePageContent)();
            }

        }else if(e.type === 'keydown'){
            if(e.key === 'Tab'){

                e.preventDefault();

                const currentTab = document.querySelector('.current-tab');

                if(currentTab === null){
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPageContent)();
                    return;
                }

                if(currentTab.textContent === 'HOME'){
                    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuPageContent)();
                }else if(currentTab.textContent === 'MENU'){
                    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.createContactPageContent)();
                }else if(currentTab.textContent === 'CONTACT'){
                    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePageContent)();
                }
            }
        }
        
    }
}

changeMainContent();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUjs7QUFFcEM7QUFDQTtBQUNBOztBQUVBLElBQUksMERBQWdCOztBQUVwQjs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDYjRDO0FBQ1g7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDBEQUFnQjs7QUFFcEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDWGtEO0FBQ047O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBcUI7QUFDekI7Ozs7Ozs7Ozs7Ozs7OztBQ3pFNEM7QUFDWDs7QUFFakM7QUFDQTtBQUNBOztBQUVBLElBQUksMERBQWdCOztBQUVwQjs7QUFFQTtBQUNBOzs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1E7QUFDQTtBQUNNOztBQUV4RCx3REFBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwrREFBcUI7QUFDckMsYUFBYTtBQUNiLGdCQUFnQixxRUFBd0I7QUFDeEMsYUFBYTtBQUNiLGdCQUFnQiwrREFBcUI7QUFDckM7O0FBRUEsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLCtEQUFxQjtBQUN6QztBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtEQUFxQjtBQUN6QyxpQkFBaUI7QUFDakIsb0JBQW9CLHFFQUF3QjtBQUM1QyxpQkFBaUI7QUFDakIsb0JBQW9CLCtEQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlQ3VycmVudFRhYiB9IGZyb20gJy4vbG9hZC5qcydcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCB9O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZUNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24nKTtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2hhbmdlQ3VycmVudFRhYignY29udGFjdCcpO1xuXG4gICAgY29udGFjdENvbnRlbnQudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBQQUdFIFRFWFQnO1xuXG5cbiAgICBtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGRyZW4oY29udGFjdENvbnRlbnQpO1xufSIsImltcG9ydCB7IGNoYW5nZUN1cnJlbnRUYWIgfSBmcm9tICcuL2xvYWQuanMnXG5leHBvcnQgeyBjcmVhdGVIb21lUGFnZUNvbnRlbnQgfTtcblxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2VDb250ZW50KCl7XG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zZWN0aW9uJyk7XG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNoYW5nZUN1cnJlbnRUYWIoJ2hvbWUnKTtcblxuICAgIGhvbWVDb250ZW50LnRleHRDb250ZW50ID0gJ0hPTUUgUEFHRSBURVhUJztcbiAgICBtYWluU2VjdGlvbi5yZXBsYWNlQ2hpbGRyZW4oaG9tZUNvbnRlbnQpO1xufSIsImltcG9ydCB7IGNyZWF0ZUhvbWVQYWdlQ29udGVudCB9IGZyb20gJy4vaG9tZS5qcyc7XG5leHBvcnQgeyBjcmVhdGVMb2FkUGFnZSwgY2hhbmdlQ3VycmVudFRhYiB9O1xuXG5mdW5jdGlvbiBjaGFuZ2VDdXJyZW50VGFiKGN1cnJlbnRUYWIpe1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICBpZih0YWIudGV4dENvbnRlbnQgPT09IGN1cnJlbnRUYWIudG9VcHBlckNhc2UoKSl7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC10YWInKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC10YWInKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2FkUGFnZSgpe1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XG4gICAgICAgIGNvbnN0IGhlYWRlclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoZWFkZXJTdWJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgaGVhZGVyVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGV4dC1jb250YWluZXInKTtcbiAgICAgICAgaGVhZGVyU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItc2VjdGlvbicpO1xuICAgICAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXItdGl0bGUnKTtcbiAgICAgICAgaGVhZGVyU3VidGV4dC5jbGFzc0xpc3QuYWRkKCdoZWFkZXItc3VidGV4dCcpO1xuXG4gICAgICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ0lTTEFORCBGTEFWT1InO1xuICAgICAgICBoZWFkZXJTdWJ0ZXh0LnRleHRDb250ZW50ID0gJy1BVVRIRU5USUMgQ0FSSUJCRUFOIENVSVNJTkUtJztcblxuICAgICAgICBoZWFkZXJUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRpdGxlKTtcbiAgICAgICAgaGVhZGVyVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJTdWJ0ZXh0KTtcblxuICAgICAgICBoZWFkZXJTZWN0aW9uLmFwcGVuZENoaWxkKGhlYWRlclRleHRDb250YWluZXIpO1xuICAgICAgICBcbiAgICAgICAgcGFnZS5hcHBlbmRDaGlsZChoZWFkZXJTZWN0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYWdlVGFicygpe1xuICAgICAgICBjb25zdCB0YWJTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgdGFiU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YWItc2VjdGlvbicpO1xuICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicsICdob21lLXRhYicpO1xuICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicsICdtZW51LXRhYicpO1xuICAgICAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicsICdjb250YWN0LXRhYicpO1xuXG4gICAgICAgIGhvbWVUYWIudGV4dENvbnRlbnQgPSAnSE9NRSc7XG4gICAgICAgIG1lbnVUYWIudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgICAgIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG5cbiAgICAgICAgdGFiU2VjdGlvbi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICAgICAgdGFiU2VjdGlvbi5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICAgICAgdGFiU2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKHRhYlNlY3Rpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5TZWN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21haW4tc2VjdGlvbicpO1xuICAgICAgICBwYWdlLmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcbiAgICB9XG4gICAgXG5cbiAgICBjcmVhdGVIZWFkZXIoKTtcbiAgICBjcmVhdGVQYWdlVGFicygpO1xuICAgIGNyZWF0ZU1haW5TZWN0aW9uKCk7XG4gICAgY3JlYXRlSG9tZVBhZ2VDb250ZW50KCk7XG59IiwiaW1wb3J0IHsgY2hhbmdlQ3VycmVudFRhYiB9IGZyb20gJy4vbG9hZC5qcydcbmV4cG9ydCB7IGNyZWF0ZU1lbnVQYWdlQ29udGVudCB9O1xuXG5mdW5jdGlvbiBjcmVhdGVNZW51UGFnZUNvbnRlbnQoKXtcbiAgICBjb25zdCBtYWluU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNlY3Rpb24nKTtcbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2hhbmdlQ3VycmVudFRhYignbWVudScpO1xuXG4gICAgbWVudUNvbnRlbnQudGV4dENvbnRlbnQgPSAnTUVOVSBQQUdFIFRFWFQnO1xuXG4gICAgbWFpblNlY3Rpb24ucmVwbGFjZUNoaWxkcmVuKG1lbnVDb250ZW50KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUxvYWRQYWdlIH0gZnJvbSAnLi9sb2FkLmpzJ1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2VDb250ZW50IH0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7IGNyZWF0ZU1lbnVQYWdlQ29udGVudCB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0UGFnZUNvbnRlbnQgfSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5jcmVhdGVMb2FkUGFnZSgpO1xuXG5mdW5jdGlvbiBjaGFuZ2VNYWluQ29udGVudCgpe1xuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICB0YWJzLmZvckVhY2goKHRhYikgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVBhZ2VDb250ZW50KSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkaXNwbGF5UGFnZUNvbnRlbnQpO1xuXG4gICAgZnVuY3Rpb24gZGlzcGxheVBhZ2VDb250ZW50KGUpe1xuXG4gICAgICAgIGlmKGUudHlwZSA9PT0gJ2NsaWNrJyl7XG4gICAgICAgICAgICBjb25zdCB0YWJUZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmKHRhYlRleHQgPT09ICdNRU5VJyl7XG4gICAgICAgICAgICAgICAgY3JlYXRlTWVudVBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICB9ZWxzZSBpZih0YWJUZXh0ID09PSAnQ09OVEFDVCcpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY3JlYXRlSG9tZVBhZ2VDb250ZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfWVsc2UgaWYoZS50eXBlID09PSAna2V5ZG93bicpe1xuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdUYWInKXtcblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10YWInKTtcblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUYWIgPT09IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVNZW51UGFnZUNvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRUYWIudGV4dENvbnRlbnQgPT09ICdIT01FJyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZU1lbnVQYWdlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRUYWIudGV4dENvbnRlbnQgPT09ICdNRU5VJyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRhY3RQYWdlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRUYWIudGV4dENvbnRlbnQgPT09ICdDT05UQUNUJyl7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUhvbWVQYWdlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cbmNoYW5nZU1haW5Db250ZW50KCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==