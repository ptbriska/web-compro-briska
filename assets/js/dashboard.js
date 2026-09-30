/* ==========================================
   BRISKA DASHBOARD STATS ANIMATION
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  function animateCounters() {
    statNumbers.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const speed = 200; // Kecepatan animasi
      const increment = Math.ceil(target / speed);

      let count = 0;
      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count.toLocaleString("id-ID") + "+";
          setTimeout(updateCount, 15);
        } else {
          counter.innerText = target.toLocaleString("id-ID") + "+";
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
      { threshold: 0.3 }
    );

    observer.observe(statsSection);
  }
});
