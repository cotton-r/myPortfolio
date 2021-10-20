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
            document.getElementById('javascript').style.width = '69%';
            document.getElementById('react').style.width = '60%';
            document.getElementById('node').style.width = '37%';
            document.getElementById('postgresql').style.width = '45%';
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
            document.getElementById('profilePic').style.marginLeft = "0px";
            document.getElementById('profilePic').style.opacity = "1";
        }
    });
};

let optionstwo = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.3
};

let observertwo = new IntersectionObserver(callbackFuncTwo, optionstwo);

observertwo.observe(document.getElementById('profileImageAnchor'));

// function to check when 'projects' section is scrolled to and animate elements when so //

function callbackFuncThree(entries, observerthree) {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            document.getElementById('projectsVisible').style.gridGap = "2px";
            document.getElementById('projectsVisible').style.opacity = "1";
        }
    });
};

let optionsthree = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.1
};

let observerthree = new IntersectionObserver(callbackFuncThree, optionsthree);

observerthree.observe(document.getElementById('projectsVisible'));

// modals section //
// modal 1
let openBtn1 = document.getElementById('open-btn1');
let modalBackground1 = document.getElementById('modal-background1');
let closeBtn1 = document.getElementById('close-btn1');

openBtn1.addEventListener('click', function() {
    modalBackground1.style.display = 'block';
});

closeBtn1.addEventListener('click', function() {
    modalBackground1.style.display = 'none';
});

window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target === modalBackground1) {
      // hides the modal
      modalBackground1.style.display = 'none';
    }
});

// modal 2
let openBtn2 = document.getElementById('open-btn2');
let modalBackground2 = document.getElementById('modal-background2');
let closeBtn2 = document.getElementById('close-btn2');

openBtn2.addEventListener('click', function() {
    modalBackground2.style.display = 'block';
});

closeBtn2.addEventListener('click', function() {
    modalBackground2.style.display = 'none';
});

window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target === modalBackground2) {
      // hides the modal
      modalBackground2.style.display = 'none';
    }
});

// modal 3
let openBtn3 = document.getElementById('open-btn3');
let modalBackground3 = document.getElementById('modal-background3');
let closeBtn3 = document.getElementById('close-btn3');

openBtn3.addEventListener('click', function() {
    modalBackground3.style.display = 'block';
});

closeBtn3.addEventListener('click', function() {
    modalBackground3.style.display = 'none';
});

window.addEventListener('click', function(event) {
    // check if the event happened on the modal-background
    if (event.target === modalBackground3) {
      // hides the modal
      modalBackground3.style.display = 'none';
    }
});
