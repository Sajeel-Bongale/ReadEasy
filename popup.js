window.addEventListener('load', function load(event) {
    document.getElementById('send').onclick = function() {
    	chrome.tabs.query({
    		"active": true,
    		"currentWindow": true,
    		"lastFocusedWindow": true
    	}, function(tabs) {
    		chrome.tabs.sendMessage(tabs[0].id, "heelo", null);
		});
    };
});