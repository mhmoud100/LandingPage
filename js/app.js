/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const navigationUl = document.getElementById('navbar__list');

const documentFragment = document.createDocumentFragment();
allSections.forEach((section)=>{
        const liElement = document.createElement('li');
        const aElement = document.createElement('a')
        const textNode = document.createTextNode(section.getAttribute('data-nav'));
        aElement.appendChild(textNode);
        aElement.classList.add('menu__link');
        liElement.appendChild(aElement);

        
        liElement.addEventListener('click', function (){
                section.scrollIntoView({'behavior':'smooth'});
        })
        documentFragment.appendChild(liElement);
});
navigationUl.appendChild(documentFragment)
const liElements = document.querySelectorAll('li')
allSections.forEach((section) => {
        window.addEventListener('scroll', function (){
                const viewport = section.getBoundingClientRect();
                
                if(viewport.top + 500 < window.innerHeight && viewport.bottom + 150  > window.innerHeight){
                       console.log(section.getAttribute('data-nav'))
                        allSections.forEach((section)=>{
                                section.classList.remove('your-active-class')
                        })
                        liElements.forEach((li) =>{
                                li.classList.remove('backgroundLi')
                                if(section.getAttribute('data-nav') == li.textContent){
                                        li.classList.add('backgroundLi')
                                        // console.log(li.textContent)
                                }
                        })
                        
                       section.classList.add('your-active-class');
                }
                if(viewport.top + 150 > window.innerHeight && viewport.bottom  < window.innerHeight){
                        console.log("ff")
                }
        })
})
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


