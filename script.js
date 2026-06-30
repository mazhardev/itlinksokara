const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const backToTop = document.querySelector(".back-to-top");
const sections = document.querySelectorAll("main section[id]");

function closeMenu() {
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navPanel.addEventListener("click", (event) => {
  const clickedLink = event.target.closest("a");
  if (clickedLink) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 520);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const activeLinkObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      navLinks.forEach((link) => link.classList.remove("active"));
      if (active) active.classList.add("active");
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0
  }
);

sections.forEach((section) => activeLinkObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
