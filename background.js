// // ----- Use below code Initialize storage variables -----
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ newInfo: info });
// });

// // ----- Code for adding listeners  -----
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log('Active Tab ID: ', sender.tab.id);

//     if (request.newInfo ) {
//       // chrome.action.setBadgeBackgroundColor( {color: 'crimson'}) // 
//       // chrome.action.setBadgeText({ text: request.newInfo, tabId: sender.tab.id });
//       // chrome.storage.sync.set({ newInfo });
//       // sendResponse({message: "Success"});
//     }
//   }
// );











