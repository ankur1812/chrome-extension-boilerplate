# chrome-extension-boilerplate

#### Manifest
The `manifest.json` file contains the key configuration for the Extension.

#### Service Worker
The `background.js` service worker code runs in the background and communicates to the content and the popup/options scripts

#### Content Script
The `contentScript.js` and `contentScript.css` files are loaded into the web pages. 

#### Popup
The `popup.html` code is rendered in the popup menu which loads when the extension icon is clicked

#### Options
The `options.html` page can be used to custom configure the extension settings.