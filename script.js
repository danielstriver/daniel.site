// Select the hamburger icon and the nav menu
const menuBtn = document.getElementById("menu-btn");
const navUl = document.querySelector("nav ul");

// When you click the hamburger button, show/hide the menu
menuBtn.addEventListener("click", () => {
    // If menu is visible, hide it; if hidden, show it.
    const isVisible = navUl.style.display === "flex";
    navUl.style.display = isVisible ? "none" : "flex";
});

// Some form validation and handling

// Select the form and feedback area
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

// Adding an event listener for when the form is submitted
contactForm.addEventListener("submit", (event) => {
    // Prevent the page from refreshing
    event.preventDefault();
    
    // Grabbing the userinput 
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Some basic form validation
    if (name === '' || email === '' || message === '') {
        formStatus.textContent = "Please fill in all fields";
        formStatus.className = "error";
        return; // Stop the function if any field is empty
    }

    // Extra email format check - simple regex
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formStatus.textContent = "Please enter a valid email address";
        formStatus.className = "error";
        return;
    }

    // Simulate message submission, no back end yet. 
    // We can pretend we are sending data somewhere
    // In real apps, we'd use fetch to send to a server or API
    formStatus.textContent = "Sending message...";
    formStatus.className = ""; // Remove colors while loading

    // Simulate a small delay (like waiting for a server)
    setInterval(() => {
        // Let's just pretending a successful submission for now
        formStatus.textContent = "✅ Message sent successfully!";
        formStatus.className = "success";
    }, 3000);
});