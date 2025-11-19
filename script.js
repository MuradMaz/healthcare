var menuBtn = document.getElementById("menu-btn");
var navbar = document.querySelector(".navbar");
var header = document.querySelector(".header");
var menuOpen = false;

function toggleMenu() {
    if (menuOpen == false) {
        navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
        menuOpen = true;
    } else {
        navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
        menuOpen = false;
    }
}

menuBtn.onclick = function() {
    toggleMenu();
};

window.onscroll = function() {
    
    if (menuOpen == true) {
        navbar.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
        menuOpen = false;
    }

    var top = window.scrollY;
    if (top > 0) {
        header.style.backgroundColor = "#fff";
        header.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.1)";
    } else {
        header.style.backgroundColor = "transparent";
        header.style.boxShadow = "none";
    }

    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navbar a');

    for (var i = 0; i < sections.length; i++) {
        var sec = sections[i];
        var height = sec.offsetHeight;
        var offset = sec.offsetTop - 150;
        var id = sec.getAttribute('id');
        var currentScroll = window.scrollY;

        if (currentScroll >= offset && currentScroll < offset + height) {
            for (var j = 0; j < navLinks.length; j++) {
                navLinks[j].classList.remove('active');
            }
            var targetLink = document.querySelector('.navbar a[href*=' + id + ']');
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    }
};

function startCounters() {
    var num1 = document.getElementsByClassName("num")[0];
    var num2 = document.getElementsByClassName("num")[1];
    var num3 = document.getElementsByClassName("num")[2];

    var start1 = 0;
    var end1 = 140; 
    var timer1 = setInterval(function() {
        start1 = start1 + 1;
        if(num1) num1.innerHTML = start1 + "+";
        if (start1 == end1) {
            clearInterval(timer1);
        }
    }, 20);

    var start2 = 0;
    var end2 = 1040; 
    var timer2 = setInterval(function() {
        start2 = start2 + 10;
        if(num2) num2.innerHTML = start2 + "+";
        if (start2 >= end2) {
            clearInterval(timer2);
            if(num2) num2.innerHTML = "1040+"; 
        }
    }, 20);

    var start3 = 0;
    var end3 = 500; 
    var timer3 = setInterval(function() {
        start3 = start3 + 5;
        if(num3) num3.innerHTML = start3 + "+";
        if (start3 >= end3) {
            clearInterval(timer3);
        }
    }, 30);
}

window.onload = function() {
    startCounters();
};

var submitBtn = document.querySelector('.btn');
if(submitBtn) {
    submitBtn.onclick = function(e) {
        var email = document.querySelector('input[type="email"]').value;
        var number = document.querySelector('input[type="number"]').value;

        if (email == "" || number == "") {
            alert("Please fill in all the fields properly!");
            return false;
        } else {
            alert("Thanks! We will call you.");
        }
    };
}
