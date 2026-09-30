/* ==========================================
   BRISKA MAIN JAVASCRIPT
   Handles Mobile Menu, Dropdown, & Interactivity
   ========================================== */

function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // 1. Toggle Mobile Menu Bar
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // 2. Mobile Dropdown Toggle Click Behavior
  dropdowns.forEach((dropdown) => {
    const dropdownToggle = dropdown.querySelector(".dropdown-toggle");
    if (dropdownToggle) {
      dropdownToggle.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdown.classList.toggle("active");
        }
      });
    }
  });

  // 3. Highlight Active Menu Item Based on Current URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (linkPath && currentPath.endsWith(linkPath) && linkPath !== "#") {
      link.classList.add("active");
      // Highlight induk dropdown jika sub-item aktif
      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        const parentLink = parentDropdown.querySelector(".dropdown-toggle");
        if (parentLink) parentLink.classList.add("active");
      }
    }
  });
}

// Smooth Scroll for Anchor Links
document.addEventListener("click", function (e) {
  if (e.target.matches('a[href^="#"]')) {
    const targetId = e.target.getAttribute("href");
    if (targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  }
});
