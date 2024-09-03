/** @format */

// ! Change A Header Color
let header = document.querySelector("header");
let landing = document.querySelector(".landing");
let button = document.querySelector('[id="darkmode-button"]');

button.addEventListener("click", () => {
  const icon = button.children[0];
  const landingSection = landing.children[0];

  // Toggle between 'fa-moon' and 'fa-sun' icons
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");

  // Apply the appropriate theme class based on the icon
  if (icon.classList.contains("fa-moon")) {
    landingSection.classList.add("light");
    landingSection.classList.remove("dark");
  } else {
    landingSection.classList.add("dark");
    landingSection.classList.remove("light");
  }
});

window.addEventListener("scroll", () => {
  const links = document.querySelectorAll(".navbar-nav li a");
  const btn = document.querySelector("#darkmode-button");
  if (window.scrollY >= 100) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white");
    links.forEach((link) => {
      link.style.color = "#3a3a3a";
    });
    btn.style.cssText = `border: 1px solid #3a3a3a`;
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-transparent");
    links.forEach((link) => {
      link.style.color = "white";
    });
    btn.style.cssText = `border: none`;
  }
});
