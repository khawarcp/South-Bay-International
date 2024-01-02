function openTab(tabName) {
  var i, tabContent, tabButton;

  // Extract the numeric suffix from the tabName
  var setNumber = tabName.match(/\d+/)[0];

  // Hide all tab content for the specific set
  tabContent = document.querySelectorAll('#overview' + setNumber + ', #details' + setNumber + ', #shipping' + setNumber);
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
  }

  // Remove 'active-tab' class from all tab buttons for the specific set
  tabButton = document.querySelectorAll('#tabButtons' + setNumber + ' .tab-button');
  for (i = 0; i < tabButton.length; i++) {
      tabButton[i].classList.remove('active-tab');
  }

  // Show the selected tab content for the specific set
  document.getElementById(tabName).style.display = 'block';

  // Add 'active-tab' class to the clicked tab button for the specific set
  event.currentTarget.classList.add('active-tab');
}

// Show the default tab for each set on page load
openTab('details1');
openTab('details2');
openTab('details3');