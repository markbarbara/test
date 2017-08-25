document.addEventListener('DOMContentLoaded', init);

function init(){ 
   document.getElementById("field").addEventListener("change", function(e) {
      chrome.storage.sync.set({'value': e.target.value}, function() {
         console.log('saved');
        });
   });
}