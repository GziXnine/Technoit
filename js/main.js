/** @format */

// ! Change A Header Color
// Array of section class names to update
const sections = [
  ".services",
  ".about-us",
  ".protofolio",
  ".pricing",
  ".testimonials",
  ".clients",
  ".team",
  ".faqs",
  ".blogs",
  ".contact-us",
];
// Select necessary elements
let header = document.querySelector("header");
let landing = document.querySelector(".landing");
let button = document.querySelector("#darkmode-button");

// Function to update header and navbar links based on the current theme
function updateHeaderAndLinks(isScrolled) {
  const links = document.querySelectorAll(".navbar-nav li a");
  const btnIcon = document.querySelector(".fa-sliders");

  // Update header and links based on scroll position
  if (isScrolled) {
    header.classList.remove("bg-transparent");

    if (button.children[0].classList.contains("fa-moon")) {
      header.classList.add("bg-white");
      header.classList.remove("bg-dark");
      links.forEach((link) => {
        link.style.color = "#3a3a3a"; // Light mode text color when scrolled
      });
    } else {
      header.classList.add("bg-dark");
      header.classList.remove("bg-white");
      links.forEach((link) => {
        link.style.color = "white"; // Dark mode text color when scrolled
      });
    }

    btnIcon.style.cssText = "color: black !important"; // Button color on scroll
  } else {
    // Default header behavior when at the top
    header.classList.remove("bg-white", "bg-dark");
    header.classList.add("bg-transparent");
    links.forEach((link) => {
      link.style.color = "white"; // Default link color at top
    });
    btnIcon.style.cssText = "color: white !important"; // Button color at top
  }
}

// Event listener for dark mode button
button.addEventListener("click", () => {
  const icon = button.children[0]; // Get the icon inside the button
  const landingSection = landing.children[0]; // First child of landing section

  // Toggle between 'fa-moon' and 'fa-sun' icons
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");

  // Apply light or dark theme based on the icon
  if (icon.classList.contains("fa-moon")) {
    landingSection.classList.add("light");
    landingSection.classList.remove("dark");
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    landingSection.classList.add("dark");
    landingSection.classList.remove("light");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }

  // Update header and links immediately after theme change, check if user has scrolled past 100px
  updateHeaderAndLinks(window.scrollY >= 100);
});

// Handle header and navbar changes on scroll
window.addEventListener("scroll", () => {
  const isScrolled = window.scrollY >= 100;
  updateHeaderAndLinks(isScrolled);
});

// ! Protofolio
let buttons = document.querySelectorAll(".protofolio .buttons button");
let photos = document.querySelectorAll(".protofolio .photos .photo");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    let target = e.target.getAttribute("data-cat");
    photos.forEach((photo) => {
      photo.style.opacity = "0";
      photo.style.display = "none";
      if (photo.classList.contains(target)) {
        photo.style.display = "block";
        setTimeout(() => {
          photo.style.opacity = "1";
        }, 150);
      }
    });
  });
});

// ! Make a PopUp To A Protofolio Photos.
let img = document.querySelectorAll(".protofolio img");
img.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.className = "popup-overlay";

    let popUp = document.createElement("div");
    popUp.className = "popUp";

    let popUpImg = document.createElement("img");
    popUpImg.src = ele.src;

    div.addEventListener("click", function () {
      popUp.remove();
      div.remove();
    });

    document.body.appendChild(popUp);
    document.body.appendChild(div);
    popUp.appendChild(popUpImg);
  });
});

// ! Make a Validation To The Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      form.classList.add("was-validated");

      let allValid = true;

      // Loop through both input and textarea elements
      Array.from(form.elements).forEach((element) => {
        if (
          element.required &&
          (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
        ) {
          if (element.checkValidity()) {
            element.classList.add("is-valid");
            element.classList.remove("is-invalid");
            element.nextElementSibling.style.display = "none"; // Hide error message
          } else {
            element.classList.add("is-invalid");
            element.classList.remove("is-valid");
            element.nextElementSibling.style.display = "block"; // Show error message
            allValid = false;
          }
        }
      });

      if (allValid) {
        Array.from(form.elements).forEach((element) => {
          if (element.type !== "submit") {
            element.value = "";
            element.classList.remove("is-valid", "is-invalid");
          }
        });
        alert("Form submitted successfully!");
        window.location.reload(); // Reload the page after successful submission
      }
    },
    false
  );

  // Real-time validation as the user types or changes input/textarea
  Array.from(form.elements).forEach((element) => {
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.addEventListener("input", function () {
        if (element.required) {
          if (element.checkValidity()) {
            element.classList.add("is-valid");
            element.classList.remove("is-invalid");
            element.nextElementSibling.style.display = "none";
          } else {
            element.classList.add("is-invalid");
            element.classList.remove("is-valid");
            element.nextElementSibling.style.display = "block";
          }
        }
      });
    }
  });
});

// ! Scroll To The Section
function scrollToSection(id) {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// ! start count Of Stats
let stats = document.querySelector(".status");
let number = document.querySelectorAll(".container .box .number");
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= stats.offsetTop - 250) {
    if (!start) {
      number.forEach((num) => startCount(num));
    }
    start = true;
  }
});

function startCount(el) {
  let prog = el.dataset.prog;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == prog) {
      clearInterval(count);
    }
  }, 2000 / prog);
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Swiper
  var swiper = new Swiper(".clients-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
