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

// --- 3. Optional: Dynamic Footer Year ---
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    // Replace the hardcoded year with the dynamic year
    yearSpan.innerHTML = `&copy; ${currentYear} [Your Name]. All rights reserved.`;
  }
});
