let scriptRunning = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleScript") {
    scriptRunning = !scriptRunning;
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: "toggleScript", state: scriptRunning});
    });
  }
});