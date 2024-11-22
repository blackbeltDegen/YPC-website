// JavaScript to handle the hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const slogan = document.querySelector(".hero-text h1");
    

    // Ensure both the hamburger icon and the navigation menu are being selected correctly
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("open"); // Toggle the 'open' class to show/hide the menu
        });
    }



    // Scroll-in animation for Contact Us button
    const contactBtn = document.querySelector(".contact-btn");

    // Create an observer to detect when the button is visible in the viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactBtn.classList.add("show"); // Add the class that triggers the animation
            }
            if (entry.isIntersecting) {
                slogan.classList.add("show");
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the button is in the viewport
    });

    if (contactBtn) {
        observer.observe(contactBtn); // Observe the Contact Us button
    }
    observer.observe(slogan); // Observe the slogan
});
