const SHORTS_SELECTORS = [
  'ytd-reel-shelf-renderer',
  'ytd-rich-shelf-renderer[is-shorts]',
  '.ytp-short'
];

function hideShorts() {
  SHORTS_SELECTORS.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.display = 'none';
    });
  });
}

function startObserving() {
  hideShorts();
  return new MutationObserver(hideShorts)
    .observe(document.body, { childList: true, subtree: true });
}

// Check initial state and possibly start
chrome.storage.sync.get({ enabled: true }, result => {
  if (result.enabled) {
    window._shortsObserver = startObserving();
  }
});

// React to runtime changes
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'sync' && changes.enabled) {
    const isEnabled = changes.enabled.newValue;
    if (isEnabled && !window._shortsObserver) {
      window._shortsObserver = startObserving();
    }
    if (!isEnabled && window._shortsObserver) {
      window._shortsObserver.disconnect();
      window._shortsObserver = null;
    }
  }
});
