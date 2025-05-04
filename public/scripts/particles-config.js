// Particles.js configuration
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: { enable: false },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.3,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.3,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: true,
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
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  });
});
