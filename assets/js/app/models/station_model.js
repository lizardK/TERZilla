StationModel = Backbone.Model.extend({
    initialize : function()
      {
	  this.set("n",this.get("n").replace("gare de",""));
      }
});
