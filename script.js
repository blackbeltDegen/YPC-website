// JavaScript to handle the hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");
    const slogan = document.querySelector(".hero-text h1");
    const servicesGrid = document.querySelector(".services-grid");

    

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

    // Function to dynamically adjust the margin-top of the services-grid
    const adjustGridMargin = () => {
        const windowHeight = window.innerHeight;

        // Adjust the margin-top based on window height (smaller window = larger margin-top)
        let marginPercentage = 10; // Start with 10%

        if (windowHeight < 600) {
            marginPercentage = 20; // Increase margin for very small screens
        } else if (windowHeight < 800) {
            marginPercentage = 15; // Medium margin for slightly larger screens
        }

        servicesGrid.style.marginTop = `${marginPercentage}%`;
    };    
    
    // Call the function initially
    adjustGridMargin();

    // Add event listener to adjust the margin on window resize
    window.addEventListener("resize", adjustGridMargin);    
   
});
