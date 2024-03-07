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
function HideNavBar(){
    const navBar = document.querySelector('#navbar__list');
    navBar.style.opacity = 0;
    navBar.style.transition = 'ease 0.5s all';
}

function ShowNavBar(){
    const navBar = document.querySelector('#navbar__list');
    navBar.style.opacity = 1;
    navBar.style.transition = 'ease 0.2s all';
}

function HighlightNavBar(sectionId){
    const targetLi = document.querySelector(`li[data-nav="${sectionId}"]`);
    targetLi.style.background = '#333';
    targetLi.style.color = '#fff';
    targetLi.style.transition = 'ease 0.3s all';
}

function UnhighlightNavBar(sectionId){
    const targetLi = document.querySelector(`li[data-nav="${sectionId}"]`);
    targetLi.style.background = '#fff';
    targetLi.style.color = '#333'; 
    targetLi.style.transition = 'ease 0.3s all';
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function BuildNav(){
    const navUl = document.querySelector('#navbar__list');
    for(let i = 0; i < sections.length; i++){
        const newItem = document.createElement('li');
        newItem.textContent = sections[i].dataset.nav;
        newItem.className = 'menu__link';
        newItem.dataset.nav = sections[i].id;
        navUl.appendChild(newItem);
    }
}

// Add class 'active' to section when near top of viewport
function MakeActive(){
    for(const section of sections){
        const box = section.getBoundingClientRect();
        if(box.top <= 150 && box.bottom >= 150){
            section.classList.add('your-active-class');
            HighlightNavBar(section.id);
        }else{
            section.classList.remove('your-active-class');
            UnhighlightNavBar(section.id);
        }
    }
}

// Scroll to anchor ID
function ScrollToSection(evt){
    if(evt.target.nodeName === 'LI'){
        const targetId = `#${evt.target.dataset.nav}`
        document.querySelector(targetId).scrollIntoView();
    }
}

//hide Nav Bar
function DelayHideNavBar(){
    if(window.scrollY >= 150){
        setTimeout(()=>{
            HideNavBar();
        }, 100);
    }
}

//show Nav Bar
function DelayShowNavBar(){
    setTimeout(()=>{
        ShowNavBar();
    }, 200);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', BuildNav);

// Scroll to section on link click
document.addEventListener('scroll', MakeActive);

// Set sections as active
document.addEventListener('click',ScrollToSection);

// Hide NavBar
document.addEventListener('scroll', DelayShowNavBar);

// Show NavBar
document.addEventListener('scrollend', DelayHideNavBar);



