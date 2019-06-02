chrome.runtime.onMessage.addListener(
    function(message) {
      let mainArticle = document.getElementsByTagName("article")[0];
      if (mainArticle) {
      	document.body.innerHTML = "";
      	document.body.appendChild(mainArticle);
      }
   });