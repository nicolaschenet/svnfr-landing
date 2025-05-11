// Particles.js configuration
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 45, // Increased number of particles
        density: { enable: false },
      },
      color: {
        value: ["#ffffff", "#ff2ad4", "#00e8ff", "#b967ff"], // More color variety
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.4, // Higher base opacity
        random: true,
        anim: {
          enable: true,
          speed: 0.8, // Faster animation
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3.5, // Larger particles
        random: true,
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.4, // Faster movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: true,
            force: 15,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 5,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  });

  // Enhanced glitch effects
  setupGlitchEffects();
});

// Function to enhance glitch effects
function setupGlitchEffects() {
  // Elements
  const hGlitch = document.querySelector(".h-glitch");
  const vGlitch = document.querySelector(".v-glitch");
  const tracking = document.querySelector(".tracking");
  const chromatic = document.querySelector(".chromatic");
  const noise = document.querySelector(".noise");

  if (!hGlitch || !vGlitch || !tracking) return;

  // Initial setup
  // Make effects more visible by default
  noise.style.opacity = "0.15"; // Increased from 0.07
  chromatic.style.opacity = "0.7"; // Increased from 0.5

  // Constantly trigger random small glitches
  setInterval(() => {
    // Small random glitches for constant activity
    if (Math.random() < 0.4) {
      const element = [hGlitch, vGlitch, tracking][
        Math.floor(Math.random() * 3)
      ];
      const intensity = 0.05 + Math.random() * 0.15;
      element.style.opacity = intensity;

      setTimeout(() => {
        element.style.opacity = 0;
      }, 100 + Math.random() * 300);
    }
  }, 600);

  // Random glitch triggers for bigger effects
  function randomGlitchTrigger() {
    // Trigger random glitches more frequently
    const shouldTrigger = Math.random() < 0.6; // 60% chance, up from 35%

    if (shouldTrigger) {
      // Determine which effect to trigger
      const effect = Math.floor(Math.random() * 3);

      // Duration between 400ms and 2000ms
      const duration = 400 + Math.random() * 1600;

      // Intensity between 0.4 and 1.0
      const intensity = 0.4 + Math.random() * 0.6;

      // Apply the effect
      switch (effect) {
        case 0: // Horizontal glitch
          hGlitch.style.opacity = intensity;
          setTimeout(() => {
            hGlitch.style.opacity = 0;
          }, duration);
          break;
        case 1: // Vertical glitch
          vGlitch.style.opacity = intensity;
          setTimeout(() => {
            vGlitch.style.opacity = 0;
          }, duration);
          break;
        case 2: // Tracking glitch
          tracking.style.opacity = intensity * 0.8;
          setTimeout(() => {
            tracking.style.opacity = 0;
          }, duration);
          break;
      }

      // Sometimes adjust the chromatic aberration for more visual interest
      if (Math.random() < 0.4) {
        // 40% chance, up from 20%
        const currentOpacity = parseFloat(chromatic.style.opacity || "0.7");
        chromatic.style.opacity = (currentOpacity + 0.3).toString();
        setTimeout(() => {
          chromatic.style.opacity = "0.7";
        }, duration * 1.5);
      }
    }

    // Schedule next trigger (faster timing: between 0.5-3 seconds)
    const nextTrigger = 500 + Math.random() * 2500;
    setTimeout(randomGlitchTrigger, nextTrigger);
  }

  // Start the random glitch cycle
  randomGlitchTrigger();

  // Optional: Add scroll intensity
  window.addEventListener("scroll", function () {
    // Calculate scroll percentage
    const scrollPercent =
      window.scrollY / (document.body.offsetHeight - window.innerHeight);

    // Increase glitch intensity with scroll
    if (scrollPercent < 0.1) {
      // Normal intensity at top of page
      noise.style.opacity = "0.15";
    } else {
      // Gradually increase noise with scroll (more pronounced)
      const noiseIntensity = Math.min(0.15 + scrollPercent * 0.2, 0.35);
      noise.style.opacity = noiseIntensity.toString();
    }
  });
}
