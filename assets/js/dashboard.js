/* ==========================================
   BRISKA DASHBOARD STATS ANIMATION
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  function animateCounters() {
    statNumbers.forEach((counter) => {
      // Ambil nilai target dan bersihkan dari koma, titik, dll jika ada.
      const rawTarget = counter.getAttribute("data-target") || "0";
      const target = parseInt(rawTarget.replace(/,/g, '').replace(/\./g, ''), 10);
      
      // Ambil suffix tambahan (misal "+" atau "K")
      const suffix = counter.getAttribute("data-suffix") || "";
      
      if (isNaN(target)) return; // Bypass jika data-target bukan angka

      const speed = 200; // Pembagi kecepatan
      const increment = Math.ceil(target / speed);
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count.toLocaleString("id-ID") + suffix;
          setTimeout(updateCount, 15);
        } else {
          // Pastikan nilai akhir tepat
          counter.innerText = target.toLocaleString("id-ID") + suffix;
        }
      };

      updateCount();
    });
  }

  // Trigger animasi saat section terlihat di layar (Intersection Observer)
  const statsSection = document.querySelector(".dashboard-section");

  if (statsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            animateCounters();
            animated = true;
          }
        });
      },
      { threshold: 0.3 } // Animasi mulai saat 30% elemen terlihat
    );

    observer.observe(statsSection);
  }
});
