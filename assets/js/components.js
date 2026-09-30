/* ==========================================
   BRISKA COMPONENT LOADER
   Loads Header and Footer HTML automatically
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch("/components/header.html")
      .then((response) => {
        if (!response.ok) throw new Error("Header load failed");
        return response.text();
      })
      .then((data) => {
        headerPlaceholder.innerHTML = data;
        // Inisialisasi logika navigasi setelah header terpasang
        initNavigation();
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("/components/footer.html")
      .then((response) => {
        if (!response.ok) throw new Error("Footer load failed");
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
});
