var Application = new App();
/*if (navigator.mozApps) {
  var request = navigator.mozApps.getSelf();
  request.onsuccess = function() {
      alert("installed");
    if (!this.result) {
      request = navigator.mozApps.install(location.protocol + "//" + location.host + location.pathname + "manifest.webapp");
      request.onerror = function() {
        console.log("Install failed: " + this.error.name);
      };
    }
  };
}*/

/*request = navigator.mozAlarms.add(
    new Date("MayAugust 28, 2013 23:39:00"), 
    "honorTimezone", 
    {
        mydata: "my event"
    }
);*/

Application.start({
    success: function() {
	Backbone.history.start({pushstate: true});
	console.log("APP Started");
    },

    error: function() {
	console.log("APP failed");
    }
});
