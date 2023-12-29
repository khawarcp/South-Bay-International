function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  var containerId = evt.currentTarget.closest('.tab').id;

  tabcontent = document.querySelectorAll(`#${containerId} .tabcontent`);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  tablinks = document.querySelectorAll(`#${containerId} .tablinks`);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with class="tablinks" and click on it for each tab set
document.querySelectorAll('.tab .tablinks').forEach(function(button) {
  button.addEventListener('click', function() {
    openCity(event, button.getAttribute('data-city'));
  });
});

// Trigger the click on the default tab for each tab set
document.querySelectorAll('.tab .tablinks#defaultOpen').forEach(function(button) {
  button.click();
});