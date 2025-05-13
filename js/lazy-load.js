document.addEventListener("DOMContentLoaded", () => {
  const lazySections = document.querySelectorAll(".lazy-load");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the visible class to the section and animate its children
          const section = entry.target;
          section.classList.add("visible");

          const animatableElements = section.querySelectorAll(".animate");
          animatableElements.forEach((el, index) => {
            // Add a delay for a cascading effect
            el.style.transitionDelay = `${index * 0.6}s`;
            el.classList.add("visible");
          });

          // Stop observing the section
          observer.unobserve(section);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the section is visible
    }
  );

  lazySections.forEach((section) => observer.observe(section));
});
