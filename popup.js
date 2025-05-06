const toggle = document.getElementById('toggle');

// Initialize the checkbox from stored setting
chrome.storage.sync.get({ enabled: true }, result => {
  toggle.checked = result.enabled;
});

// When the user toggles, save the new state
toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
});
