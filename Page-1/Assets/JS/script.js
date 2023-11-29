function changeTab(tabId) {
  // Remove 'btn-custom' class from all buttons and tab contents
  var buttons = document.querySelectorAll('.btn-outline-danger');
  buttons.forEach(function(button) {
    button.classList.remove('btn-custom');
  });

  var tabContents = document.querySelectorAll('.tab-pane');
  tabContents.forEach(function(tab) {
    tab.classList.remove('show', 'active');
  });

  // Add 'btn-custom' class to the clicked button and show the corresponding tab content
  var clickedButton = document.getElementById(tabId);
  clickedButton.classList.add('btn-custom');

  var selectedTab = document.getElementById('content' + tabId.charAt(tabId.length - 1));
  selectedTab.classList.add('show', 'active');
}
