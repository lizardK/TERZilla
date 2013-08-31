FavouritesCollection = Backbone.Collection.extend({
    model: StationModel,
    fetch: function(options)
      {
	  var self = this;
	  var data = localStorage.getItem("favourites");
	  try {
	      var json = JSON.parse(data);
	      _(json).each(function(d){
		  self.add(d);
	      });
	      if(options && options.success)
		  options.success.call(this);
	  } catch (err) {
	      if(options && options.error)
		  options.error.call(this);
	  }
      },

    save: function(options)
      {
	  try {
	      localStorage.setItem("favourites",JSON.stringify(this.toJSON()));
	      if(options && options.success)
		  options.success.call(this);
	  } catch (err) {
	      if(options && options.error)
		  options.error.call(this);
	  } 
      }
});
