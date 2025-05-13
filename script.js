

const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");
const menuItems = mobileMenu.querySelector('ul').querySelectorAll('li')// Select all <li> elements inside the mobile menu

// Toggle the 'active' class when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
   
    mobileMenu.classList.toggle("active");
});

// Add click event listener to each <li> inside the mobile menu
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        // Toggle the 'active' class on both the hamburger and mobile menu
       
        mobileMenu.classList.remove("active");

    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('test load');
    const text = "Seif Amr";
    const typewriter = document.getElementById('typewriter');
    let index = 0;

    const typeEffect = () => {
        if (index < text.length) {
            typewriter.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Adjust speed here
        }
    };

    typeEffect();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
