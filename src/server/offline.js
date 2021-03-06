const offline = {
  serviceWorker:
    `"serviceWorker" in window.navigator && window.addEventListener("load", function() {
      window.navigator.serviceWorker.register("/scratch-worker.js")
        .then(function(r) {
          console.log("ServiceWorker registration successful with scope: ", r.scope)
        }).catch(function(e) {
          console.error("ServiceWorker registration failed: ", e)
        })
    });`,
};

export default offline;
