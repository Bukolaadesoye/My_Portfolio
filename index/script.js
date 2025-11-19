// --- 1. Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- 2. Simple Contact Form Handling ---
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents default form submission

  // In a real application, you would send this data to a server (e.g., using fetch API)

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector("textarea").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been noted.`);

    // Optionally reset the form after successful submission
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// --- 3. Optional: Dynamic Footer Year ---
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    // Replace the hardcoded year with the dynamic year
    yearSpan.innerHTML = `&copy; ${currentYear} [Your Name]. All rights reserved.`;
  }
});
