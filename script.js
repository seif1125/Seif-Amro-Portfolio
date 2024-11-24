
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        name: name,
        email: email,
        message: message,
       
    };

 
                showModal('Message sent successfully!');
                 document.getElementById('name').value='';
               document.getElementById('email').value='';
                document.getElementById('message').value='';
        
          
        
});

function showModal(message) {
    const modal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.classList.add('show');

    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}

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