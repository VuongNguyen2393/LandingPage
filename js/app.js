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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

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
const navDiv = document.createElement('div');
navDiv.className = 'navbar__menu'
const navUl = document.createElement('ul');
for(let i = 0; i < sections.length; i++){
    const newItem = document.createElement('li');
    newItem.textContent = sections[i].querySelector('h2').innerText;
    newItem.className = 'menu__link';
    newItem.dataset.nav = sections[i].id;
    navUl.appendChild(newItem);
}
navDiv.appendChild(navUl);
document.body.insertBefore(navDiv,document.body.firstChild);

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', makeActive);

function makeActive(){
    for(const section of sections){
        const box = section.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){
            section.classList.add('your-active-class');
        }else{
            section.classList.remove('your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
document.querySelector('ul').addEventListener('click',scrollToSection);

function scrollToSection(evt){
    if(evt.target.nodeName === 'LI'){
        const targetId = `#${evt.target.dataset.nav}`
        document.querySelector(targetId).scrollIntoView();
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


