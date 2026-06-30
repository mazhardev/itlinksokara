const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-links a");
const backToTop = document.querySelector(".back-to-top");
const quoteForm = document.querySelector(".quote-form");
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

function setError(field, message) {
  const error = field.nextElementSibling;
  field.classList.toggle("is-invalid", Boolean(message));
  if (error && error.classList.contains("error-message")) {
    error.textContent = message;
  }
}

function validateForm(form) {
  let isValid = true;
  const name = form.elements.name;
  const phone = form.elements.phone;
  const service = form.elements.service;
  const message = form.elements.message;
  const phonePattern = /^[0-9+\-\s()]{7,18}$/;

  if (name.value.trim().length < 2) {
    setError(name, "Please enter your full name.");
    isValid = false;
  } else {
    setError(name, "");
  }

  if (!phonePattern.test(phone.value.trim())) {
    setError(phone, "Please enter a valid phone number.");
    isValid = false;
  } else {
    setError(phone, "");
  }

  if (!service.value) {
    setError(service, "Please select a service.");
    isValid = false;
  } else {
    setError(service, "");
  }

  if (message.value.trim().length < 8) {
    setError(message, "Please add a short message.");
    isValid = false;
  } else {
    setError(message, "");
  }

  return isValid;
}

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const success = quoteForm.querySelector(".form-success");

  if (!validateForm(quoteForm)) {
    success.textContent = "";
    return;
  }

  success.textContent = "Thank you! Your request has been received. I.T LINKS will contact you soon.";
  quoteForm.reset();
});

quoteForm.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => setError(field, ""));
});
