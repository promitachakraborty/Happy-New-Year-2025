document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section");
  const particleCount = 100;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = Math.random() * 2 + 3 + "s";
    section.appendChild(particle);
  }
});
