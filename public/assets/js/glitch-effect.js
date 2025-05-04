document.addEventListener("DOMContentLoaded", () => {
  // Only handle text effects - no particles or scroll effects
  const glitchTitle = document.querySelector(".glitch-title h1");

  if (glitchTitle) {
    // Subtle text shadow flickering
    setInterval(() => {
      if (Math.random() > 0.95) {
        glitchTitle.style.textShadow = "0 0 15px rgba(255, 255, 255, 0.8)";

        setTimeout(() => {
          glitchTitle.style.textShadow = "0 0 2px rgba(255, 255, 255, 0.4)";
        }, 100 + Math.random() * 200);
      }
    }, 4000);
  }
});
