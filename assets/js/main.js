/* ==========================================
   BRISKA MAIN JAVASCRIPT
   Handles Mobile Menu, Dropdown, & Interactivity
   ========================================== */

// Jalankan saat event custom 'headerLoaded' ditembak oleh components.js
document.addEventListener("headerLoaded", function () {
  initNavigation();
});

// Fallback: Jika header tidak diload via fetch (misal hardcode), jalankan juga di DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("mainHeader")) {
    initNavigation();
  }
});

function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // 1. Toggle Mobile Menu Bar
  if (mobileToggle && navMenu) {
    // Hapus event listener lama (jika ada) untuk cegah duplikasi event
    const newToggle = mobileToggle.cloneNode(true);
    mobileToggle.parentNode.replaceChild(newToggle, mobileToggle);
    
    newToggle.addEventListener("click", function () {
      const isActive = navMenu.classList.toggle("active");
      newToggle.setAttribute("aria-expanded", isActive);

      const icon = newToggle.querySelector("i");
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
    const linkHref = link.getAttribute("href");
    if (!linkHref || linkHref === "#") return;

    // Deteksi Beranda
    const isHome = (currentPath === "/" || currentPath.endsWith("index.html") || currentPath.endsWith("briska-company-profile/")) 
                   && linkHref.includes("index.html");
    
    // Deteksi pencocokan persis URL
    const isMatch = currentPath.includes(linkHref.replace("./", "").replace("../", ""));

    if (isHome || (!linkHref.includes("index.html") && isMatch)) {
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

// 4. Smooth Scroll for Anchor Links (Navigasi Halaman ke ID)
document.addEventListener("click", function (e) {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    const targetId = anchor.getAttribute("href");
    if (targetId && targetId !== "#") {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        // Tutup mobile menu jika terbuka saat ngeklik anchor link
        const navMenu = document.getElementById("navMenu");
        if(navMenu && navMenu.classList.contains('active')){
            navMenu.classList.remove('active');
            const toggleIcon = document.querySelector('#mobileToggle i');
            if(toggleIcon){ toggleIcon.className = "fas fa-bars"; }
        }
        
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }
});
