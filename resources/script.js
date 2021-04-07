// function to stick navbar to top of page after scrolling past it

//execute function on page scroll
window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//add 'sticky' class to navbar when reaching its scroll position, and vice versa
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.className = "sticky";
    } else {
        navbar.classList.remove("sticky");
    }
};


function scrollFunction() {
    let element = document.getElementById("about");
    element.scrollIntoView();
}; 

// function to check when 'skills' graph is in viewport and animate when so //
function callbackFuncOne(entries, observer) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            document.getElementById('html').style.width = '80%';
            document.getElementById('css').style.width = '70%';
            document.getElementById('javascript').style.width = '45%';
            document.getElementById('git').style.width = '25%';
            document.getElementById('python').style.width = '10%';
        }
    });
};

let options = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.6
};

let observer = new IntersectionObserver(callbackFuncOne, options);

observer.observe(document.getElementById('skillsAnchor'));

// function to check when 'about' section is scrolled to and animate elements when so //

function callbackFuncTwo(entries, observertwo) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            document.getElementById('aboutDesc').style.marginRight = "0px";
            document.getElementById('aboutDesc').style.opacity = "1";
        }
    });
};

let optionstwo = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.3
};

let observertwo = new IntersectionObserver(callbackFuncTwo, optionstwo);

observertwo.observe(document.getElementById('aboutDesc'));