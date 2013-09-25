FavouritesView = BaseView.extend({
    
    template: Handlebars.templates.favourites,

    initialize: function()
      {
	  FavouritesView.__super__.initialize.call(this,arguments);	  
      },

    events : 
      {
	  "input input[type=search]" : "on_search_changed",
	  "click .btn-back" : "on_btnBack_clicked"
      },

    on_btnBack_clicked : function()
      {
	  Application.back();
	  return false;
      },

    on_search_changed : function(e)
      {
	  var name = $(e.currentTarget).val().toLowerCase();
	  var x = this.collection.each(function(t){
	      $("#" + t.id).show();
	      var n = t.get("n").toLowerCase();
	      if( n.indexOf(name) == -1 )
		  $("#" + t.id).hide();
	  });
      },

    render: function()
      {
	  console.log("FavouritesView::render");
	  $(this.el).html(this.template(this.collection.toJSON()));
	  FavouritesView.__super__.render.call(this,arguments);
	  return this;
      }
});
