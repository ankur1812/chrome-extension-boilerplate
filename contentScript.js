//  // ----- Use below code to communicate with background.js -----
// chrome.runtime.sendMessage('init-chromelocker', (response) => {
//     console.log('received user data', response);
//   });

// // ----- Use below codes to get data from chrome storage api -----

// chrome.storage.sync.get(['newInfo'], (c) => {
//   // if(c.newInfo) // DoSOMETHING
// });

// // ----- OR  -----
// function fetchInfo(x, fn) { chrome.storage.sync.get(x, fn); }
