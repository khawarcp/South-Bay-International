// HAMBURGER
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".menusflex").toggleClass("active");
    $("body").toggleClass("close-scroll-all");
  });
});

// HEADER ACTIVE FOR SCROLL
document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
});

// Search Box
document.addEventListener("DOMContentLoaded", function () {
  var searchToggle = document.getElementById("search-toggle");
  var searchBox = document.getElementById("search-click");

  searchToggle.addEventListener("click", function (event) {
    searchBox.classList.toggle("show-search");
    searchToggle.classList.toggle("search-icon-choose");
  });
});

// scroll to top
var btn = $("#scroll-top-l");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show-scroll-top-btn");
  } else {
    btn.removeClass("show-scroll-top-btn");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Faqs
document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active-accord");

    if (button.classList.contains("active-accord")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll(".accordion-header").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active-accord");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});
