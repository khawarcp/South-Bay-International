// HAMBURGER
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $(".menusflex").toggleClass("active");
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
document.addEventListener('DOMContentLoaded', function () {
  var searchToggle = document.getElementById('search-toggle');
  var searchBox = document.getElementById('search-click');
  // searchToggle.addEventListener('click', function (event) {
  //   searchBox.classList.toggle('show-search');
  //   event.stopPropagation();
  // });
  // document.addEventListener('click', function () {
  //   searchBox.classList.remove('show-search');
    searchToggle.addEventListener('click', function (event) {
      // Toggle the 'show' class on #search-box
      searchBox.classList.toggle('show-search');
  });
});