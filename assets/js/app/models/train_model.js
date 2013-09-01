TrainModel = Backbone.Model.extend({
    url: function()
      {
	  return ["http://app.testsimon.fr/ws/index.php/train2", 
		  this.id , 
		  this.from,
		  this.to
		 ].join("/");
      },

    initialize: function(options)
      {
	  if(options && options.from)
	      this.from = options.from;

	  if(options && options.to)
	      this.to = options.to;
      }
});
