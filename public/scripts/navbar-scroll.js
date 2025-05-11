// Progressive navbar logo reveal on scroll
function initNavbarScroll() {
  console.log("Navbar scroll init function called");

  const navbarLogo = document.querySelector(".logo-image");
  const heroLogo = document.querySelector(".hero-logo");

  console.log("Navbar logo element:", navbarLogo);
  console.log("Hero logo element:", heroLogo);

  // Force the logo to be hidden immediately
  if (navbarLogo) {
    console.log("Setting initial opacity to 0");
    navbarLogo.style.setProperty("opacity", "0", "important");
    navbarLogo.style.setProperty("transform", "scale(0.8)", "important");
  }

  // Function to handle scroll and update logo opacity
  function handleScroll() {
    if (!navbarLogo || !heroLogo) {
      console.log("Missing logo elements, can't proceed");
      return;
    }

    // Get window scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Get hero dimensions and position
    const heroRect = heroLogo.getBoundingClientRect();
    const heroTop = heroRect.top + scrollPosition; // Absolute position from top of document
    const heroHeight = heroRect.height;

    // Calculate the point where we should start showing the navbar logo
    // This will be when we've scrolled about halfway through the hero section
    const startShowingPoint = heroTop + heroHeight * 0.5;

    // Distance over which we transition from 0 to 1 opacity
    const transitionDistance = heroHeight * 0.5;

    // Calculate scroll progress
    let scrollProgress = 0;

    if (scrollPosition > startShowingPoint) {
      // Calculate how far we've scrolled past the starting point
      const scrollPastStart = scrollPosition - startShowingPoint;

      // Calculate progress (0 to 1)
      scrollProgress = Math.min(1, scrollPastStart / transitionDistance);
    }

    console.log("Scroll position:", scrollPosition);
    console.log("Hero top:", heroTop);
    console.log("Start showing point:", startShowingPoint);
    console.log("Scroll progress:", scrollProgress);

    // Apply opacity based on scroll progress (0 to 1)
    navbarLogo.style.setProperty(
      "opacity",
      scrollProgress.toString(),
      "important"
    );

    // Add a subtle scale effect as well for a more dynamic reveal
    const scaleValue = 0.8 + scrollProgress * 0.2;
    navbarLogo.style.setProperty(
      "transform",
      `scale(${scaleValue})`,
      "important"
    );
  }

  // Initial calculation on page load
  // Using requestAnimationFrame to ensure layout is ready
  requestAnimationFrame(() => {
    handleScroll();
  });

  // Update on scroll
  window.addEventListener("scroll", handleScroll);
}

// Run initialization when DOM is ready or immediately if already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavbarScroll);
} else {
  initNavbarScroll();
}

// Also try running after window load to catch any late DOM changes
window.addEventListener("load", initNavbarScroll);
