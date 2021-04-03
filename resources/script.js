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
    let element = document.getElementById('about');
    element.scrollIntoView();
}; 