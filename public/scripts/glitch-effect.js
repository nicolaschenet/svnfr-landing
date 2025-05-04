// Glitch effects for the title
document.addEventListener("DOMContentLoaded", function () {
  // Target elements
  const glitchTitle = document.querySelector(".glitch-title h1");
  const highlightText = document.querySelector(".highlight");

  if (!glitchTitle || !highlightText) return;

  // Random intensity glitch effect for the title
  function randomGlitch() {
    if (Math.random() > 0.95) {
      // Apply random offset to main title
      const xOffset = Math.random() * 4 - 2;
      const yOffset = Math.random() * 2 - 1;

      glitchTitle.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

      // Apply extra glow to highlight
      highlightText.style.textShadow = `
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #ff2ad4,
        0 0 30px #ff2ad4,
        0 0 40px #ff2ad4
      `;

      // Reset after a short duration
      setTimeout(() => {
        glitchTitle.style.transform = "none";
        highlightText.style.textShadow = "";
      }, 100 + Math.random() * 150);
    }
  }

  // Run the glitch effect randomly
  setInterval(randomGlitch, 2000);

  // Add glitch effect when scrolling
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);

    // Only trigger on significant scroll
    if (scrollDelta > 30 && Math.random() > 0.7) {
      randomGlitch();
    }

    lastScrollTop = scrollTop;
  });
});
