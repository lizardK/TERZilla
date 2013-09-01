var Application = new App();
if (navigator.mozApps) {
  var request = navigator.mozApps.getSelf();
  request.onsuccess = function() {
    if (!this.result) {
      request = navigator.mozApps.install(location.protocol + "//" + location.host + location.pathname + "manifest.webapp");
      request.onerror = function() {
        alert("Install failed: " + this.error.name);
      };
    }
  };
}


Application.start({
    success: function() {
	Backbone.history.start({pushstate: true});
	console.log("APP Started");
    },

    error: function() {
	console.log("APP failed");
    }
});
