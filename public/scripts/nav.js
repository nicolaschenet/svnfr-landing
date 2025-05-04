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
  });
});
