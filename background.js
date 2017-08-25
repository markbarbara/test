chrome.storage.onChanged.addListener(function(changes, namespace) {
   for (key in changes) {
      new Notification('Admiralbulldog is now live', {
         icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
         body: changes[key].newValue
      });
   }
});