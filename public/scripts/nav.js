// Navigation functionality
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navContainer = document.querySelector(".nav-container");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navContainer.classList.toggle("active");
      document.body.classList.toggle("menu-open");
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (navContainer && mobileToggle) {
      if (
        !navContainer.contains(e.target) &&
        !mobileToggle.contains(e.target) &&
        navContainer.classList.contains("active")
      ) {
        navContainer.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    }
  });

  // Prevent clicks inside nav container from closing the menu
  if (navContainer) {
    navContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('.nav-links a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      if (navContainer) {
        navContainer.classList.remove("active");
        document.body.classList.remove("menu-open");
      }

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navHeight = document.querySelector(".top-nav")?.offsetHeight || 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Logo click scrolls to top
  const logoLink = document.querySelector(".logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", function (e) {
      e.preventDefault();
      if (navContainer) {
        navContainer.classList.remove("active");
        document.body.classList.remove("menu-open");
      }

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Handle navbar logo visibility on scroll
  const navbarLogo = document.querySelector(".top-nav .logo");
  const heroLogo = document.querySelector(".hero .logo");

  function handleScroll() {
    if (!navbarLogo || !heroLogo) return;

    const heroLogoRect = heroLogo.getBoundingClientRect();
    const scrollPosition = window.scrollY;

    // Check if hero logo is still in view
    if (heroLogoRect.bottom <= 0) {
      // Hero logo is not visible anymore, show navbar logo completely
      navbarLogo.classList.remove("hidden-logo");
    } else {
      // Calculate the percentage of hero logo that's out of view
      const heroLogoHeight = heroLogoRect.height;
      const visibilityThreshold = 100; // When to start showing the navbar logo

      if (scrollPosition > visibilityThreshold) {
        // Start revealing the navbar logo gradually
        const revealProgress = Math.min(1, (scrollPosition - visibilityThreshold) / heroLogoHeight);

        // Apply custom styles for transition
        navbarLogo.style.opacity = revealProgress;
        navbarLogo.style.transform = `translateY(${(1 - revealProgress) * -10}px)`;

        if (revealProgress >= 0.99) {
          navbarLogo.classList.remove("hidden-logo");
        } else {
          navbarLogo.classList.add("hidden-logo");
        }
      } else {
        // Keep navbar logo hidden when at the top
        navbarLogo.classList.add("hidden-logo");
        navbarLogo.style.opacity = 0;
        navbarLogo.style.transform = "translateY(-10px)";
      }
    }
  }

  // Initialize on load
  handleScroll();

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Handle window resize
  window.addEventListener("resize", function () {
    if (
      window.innerWidth > 768 &&
      navContainer &&
      navContainer.classList.contains("active")
    ) {
      navContainer.classList.remove("active");
      document.body.classList.remove("menu-open");
    }

    // Recalculate on resize
    handleScroll();
  });
});
