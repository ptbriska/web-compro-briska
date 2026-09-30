/* ==========================================
   BRISKA COMPONENT LOADER
   Loads Header and Footer HTML automatically
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi penentu path relatif ke folder root komponen
  const getComponentPath = (file) => {
    // Menyesuaikan jalur jika dipanggil dari subfolder seperti /ekosistem/
    const isSubfolder = window.location.pathname.includes("/ekosistem/");
    const prefix = isSubfolder ? "../components/" : "./components/";
    return prefix + file;
  };

  // Load Header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch(getComponentPath("header.html"))
      .then((response) => {
        if (!response.ok) throw new Error("Header load failed");
        return response.text();
      })
      .then((data) => {
        headerPlaceholder.innerHTML = data;
        // Inisialisasi logika navigasi setelah header berhasil dirender
        if (typeof initNavigation === "function") {
          initNavigation();
        }
      })
      .catch((error) => console.error("Error loading header:", error));
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch(getComponentPath("footer.html"))
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
