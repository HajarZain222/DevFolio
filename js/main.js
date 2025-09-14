const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
});

document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function(element){
    element.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.nextElementSibling.classList.toggle('show');
    });
});

var typed = new Typed('#typing', {
    strings: ["Developer |", "Freelancer |"], 
    typeSpeed: 100,   
    backSpeed: 60,    
    loop: true,
    showCursor: false        
});

