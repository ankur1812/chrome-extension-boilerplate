// // ----- Code to execute script when popup loads -----
// window.addEventListener("load", async () => {
//   setTimeout(checkStatus, 100);
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: function() { 
//       // Add script to execute in the tab
//     }
//   });
// });

// // ---- Code to load the options_page -----
// function goToOptionsPage(){ chrome.tabs.create({'url': "/options.html" }) }
