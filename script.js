import emailjs from 'emailjs-com';

// Toggle Icon NavBar
document.addEventListener('DOMContentLoaded', () => {
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};  
});
// Scroll Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
    

    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); 
            });
        };
    });

    // Sticky NavBar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle Icon and NavBar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer', 'Reader' , 'Researcher'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Section Contact Me
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

      // Get the values ​​of the form fields
    let fullName = document.querySelector("input[placeholder='Full Name']").value;
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let mobile = document.querySelector("input[placeholder='Mobile Number']").value;
    let subject = document.querySelector("input[placeholder='Email Subject']").value;
    let message = document.querySelector("textarea").value;

      // Validate that the fields are not empty
    if (!fullName || !email || !mobile || !subject || !message) {
        alert("Please complete all fields.");
        return;
    }

    // EmailJS Configuration
    emailjs.send("service_7x1ww9j", "template_p1c3fmk", {
        from_name: fullName,
        from_email: email,
        mobile_number: mobile,
        subject: subject,
        message: message
    }, "MFdMWYeYwMCsLFXgu10IB")
    .then(function(response) {
        alert("Message sent successfully!");
        document.querySelector("form").reset(); 
    }, function(error) {
        alert("There was an error sending the message: " + error.text);
    });
});
});
