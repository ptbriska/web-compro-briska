/* ==========================================
   BRISKA COMPONENT LOADER
   Loads Header and Footer HTML automatically
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Gunakan Absolute Root Path, agar konsisten di root maupun subfolder
  const basePath = window.location.origin;
  
  // Mengatasi masalah jika di-serve lewat subfolder (misal GitHub Pages)
  const pathname = window.location.pathname;
  let repoName = "";
  // Jika di github pages, biasanya path ada repo name: /briska-company-profile/
  if (pathname.includes("briska-company-profile")) {
     repoName = "/briska-company-profile";
  }
  
  const headerPath = repoName + "/components/header.html";
  const footerPath = repoName + "/components/footer.html";

  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch(headerPath)
      .then((response) => {
        if (!response.ok) throw new Error("Header load failed");
        return response.text();
      })
      .then((data) => {
        headerPlaceholder.innerHTML = data;
        // Trigger event khusus saat header selesai dimuat
        document.dispatchEvent(new Event("headerLoaded"));
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch(footerPath)
      .then((response) => {
        if (!response.ok) throw new Error("Footer load failed");
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
        // Inject tahun saat ini otomatis ke footer
        const currentYearEl = document.getElementById('currentYear');
        if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
});
