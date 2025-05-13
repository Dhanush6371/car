document.addEventListener("DOMContentLoaded", () => {
  const serviceImage = document.querySelector(".animate-car");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger the animation by adding the visible class
          serviceImage.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  observer.observe(serviceImage);
});
