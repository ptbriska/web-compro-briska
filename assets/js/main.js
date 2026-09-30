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
      const isActive = navMenu.classList.toggle("active");
      mobileToggle.setAttribute("aria-expanded", isActive);

      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (isActive) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
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
          const isExpanded = dropdown.classList.toggle("active");
          dropdownToggle.setAttribute("aria-expanded", isExpanded);
        }
      });
    }
  });

  // 3. Highlight Active Menu Item Based on Current URL
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (!linkPath || linkPath === "#") return;

    // Bersihkan path untuk pencocokan yang tepat
    const cleanLinkPath = linkPath.replace(/^\//, "");
    const cleanCurrentPath = currentPath.replace(/^\//, "");

    const isHome = (cleanCurrentPath === "" || cleanCurrentPath === "index.html") && cleanLinkPath.includes("index.html");
    const isMatch = cleanCurrentPath.endsWith(cleanLinkPath);

    if (isHome || isMatch) {
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

// 4. Smooth Scroll for Anchor Links (Navigasi Halaman)
document.addEventListener("click", function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    const targetId = anchor.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }
});
