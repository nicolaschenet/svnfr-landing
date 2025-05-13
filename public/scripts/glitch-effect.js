// Glitch effects for the title
document.addEventListener("DOMContentLoaded", function () {
  // Target elements
  const glitchTitle = document.querySelector(".glitch-title h1");
  const highlightText = document.querySelector(".highlight");

  // Try to find the logo element - either the wrapper or the img
  const aboutLogoWrapper = document.querySelector(".about-logo-wrapper");
  const aboutLogoImg = document.querySelector(".about-logo-wrapper img");
  const aboutLogo = aboutLogoImg || aboutLogoWrapper;

  // Set up a mutation observer to catch when the image gets loaded
  if (aboutLogoWrapper && !aboutLogoImg) {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const newImg = aboutLogoWrapper.querySelector('img');
          if (newImg) {
            // Apply the glitch effect to the new image
            setupGlitchForElement(newImg);
            observer.disconnect();
          }
        }
      });
    });

    observer.observe(aboutLogoWrapper, { childList: true, subtree: true });
  }

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

  // Set up glitch effect for a specific element
  function setupGlitchForElement(element) {
    if (!element) return;

    // Force the glitch immediately for testing
    element.style.filter = 'blur(2px) brightness(1.2)';
    setTimeout(() => {
      element.style.filter = '';
    }, 1000);

    // Create a glitch function for this specific element
    function glitchElement() {

      if (Math.random() > 0.5) { // Increased probability for testing
        // Choose a random glitch effect
        const glitchType = Math.floor(Math.random() * 4);

        // Apply different visual glitches
        switch (glitchType) {
          case 0: // RGB shift
            element.style.filter = `
              contrast(1.2)
              brightness(1.1)
              hue-rotate(${Math.random() * 30 - 15}deg)
            `;
            element.style.transform = `translate(${Math.random() * 4 - 2}px, 0)`;
            break;
          case 1: // Blur glitch
            element.style.filter = `blur(${Math.random() * 3}px) brightness(1.2)`;
            break;
          case 2: // Distortion
            element.style.transform = `
              skew(${Math.random() * 5 - 2.5}deg, ${Math.random() * 5 - 2.5}deg)
              scale(${1 + Math.random() * 0.1})
            `;
            break;
          case 3: // Invert flash
            element.style.filter = `
              invert(${Math.random() * 0.4})
              brightness(1.2)
              contrast(1.2)
            `;
            break;
        }

        // Reset after a short duration
        setTimeout(() => {
          element.style.filter = '';
          element.style.transform = '';
        }, 50 + Math.random() * 200);
      }
    }

    // Make the interval shorter for testing
    setInterval(glitchElement, 1000);

    // Add hover effect
    element.addEventListener('mouseenter', () => {
      // Trigger a series of glitches when hovering
      const glitchCount = 3 + Math.floor(Math.random() * 3);
      let glitchesDone = 0;

      function hoverGlitch() {
        glitchElement();
        glitchesDone++;

        if (glitchesDone < glitchCount) {
          setTimeout(hoverGlitch, 100 + Math.random() * 200);
        }
      }

      hoverGlitch();
    });

    return glitchElement;
  }

  // Random glitch effect for the about logo
  function glitchAboutLogo() {
    if (!aboutLogo) {
      return;
    }

    if (Math.random() > 0.5) { // Increased probability for testing
      // Choose a random glitch effect
      const glitchType = Math.floor(Math.random() * 4);

      // Apply different visual glitches
      switch (glitchType) {
        case 0: // RGB shift
          aboutLogo.style.filter = `
            contrast(1.2)
            brightness(1.1)
            hue-rotate(${Math.random() * 30 - 15}deg)
          `;
          aboutLogo.style.transform = `translate(${Math.random() * 4 - 2}px, 0)`;
          break;
        case 1: // Blur glitch
          aboutLogo.style.filter = `blur(${Math.random() * 3}px) brightness(1.2)`;
          break;
        case 2: // Distortion
          aboutLogo.style.transform = `
            skew(${Math.random() * 5 - 2.5}deg, ${Math.random() * 5 - 2.5}deg)
            scale(${1 + Math.random() * 0.1})
          `;
          break;
        case 3: // Invert flash
          aboutLogo.style.filter = `
            invert(${Math.random() * 0.4})
            brightness(1.2)
            contrast(1.2)
          `;
          break;
      }

      // Reset after a short duration
      setTimeout(() => {
        aboutLogo.style.filter = '';
        aboutLogo.style.transform = '';
      }, 50 + Math.random() * 200);
    }
  }

  // Force the glitch immediately for testing
  if (aboutLogo) {
    aboutLogo.style.filter = 'blur(2px) brightness(1.2)';
    setTimeout(() => {
      aboutLogo.style.filter = '';
    }, 1000);
  } else {
    // Try to find it with a more generic selector as a last resort
    const anyLogoImg = document.querySelector("#about img");
    if (anyLogoImg) {
      setupGlitchForElement(anyLogoImg);
    } else {
      // Last resort - wait a second and try again
      setTimeout(() => {
        const laterImg = document.querySelector("#about img");
        if (laterImg) {
          setupGlitchForElement(laterImg);
        }
      }, 1000);
    }
  }

  // Run the glitch effects randomly
  setInterval(randomGlitch, 2000);

  if (aboutLogo) {
    // Make the interval shorter for testing
    setInterval(glitchAboutLogo, 1000);
  }

  // Add glitch effect when scrolling
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);

    // Only trigger on significant scroll
    if (scrollDelta > 30) {
      if (Math.random() > 0.7) {
        randomGlitch();
      }

      // Also trigger the about logo glitch when scrolling near it
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
          if (Math.random() > 0.5) {
            glitchAboutLogo();
          }
        }
      }
    }

    lastScrollTop = scrollTop;
  });

  // Add hover effect for about logo
  if (aboutLogo) {
    aboutLogo.addEventListener('mouseenter', () => {
      // Trigger a series of glitches when hovering
      const glitchCount = 3 + Math.floor(Math.random() * 3);
      let glitchesDone = 0;

      function hoverGlitch() {
        glitchAboutLogo();
        glitchesDone++;

        if (glitchesDone < glitchCount) {
          setTimeout(hoverGlitch, 100 + Math.random() * 200);
        }
      }

      hoverGlitch();
    });
  }

  // Try a different method - directly add the effect to the image after everything is loaded
  window.addEventListener('load', function() {
    const finalImg = document.querySelector("#about img, .about-logo-wrapper img");
    if (finalImg) {
      setupGlitchForElement(finalImg);
    }
  });
});
