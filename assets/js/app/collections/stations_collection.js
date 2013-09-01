StationsCollection = Backbone.Collection.extend({
    url: "http://app.testsimon.fr/ws/index.php/stations",
    model: StationModel,
    fetch: function(options) {
        //do by localStorage
	if(localStorage.getItem("stations")) 
	  {
	      var data = JSON.parse(localStorage.getItem("stations"));
	      this.reset(data);
	      return this;
	  } 
	else 
	  {
              //Call Backbone's fetch
              return Backbone.Collection.prototype.fetch.call(this, options);
	  }
    }
});
