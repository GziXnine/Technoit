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
  const btn1 = document.querySelector(".fa-sliders");
  if (window.scrollY >= 100) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white");
    links.forEach((link) => {
      link.style.color = "#3a3a3a";
    });
    btn1.style.cssText = `color: black !important`;
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-transparent");
    links.forEach((link) => {
      link.style.color = "white";
    });
    btn1.style.cssText = `color: white !important`;
  }
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
