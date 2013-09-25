AllStationsView = BaseView.extend({
    
    template: Handlebars.templates.all_stations,

    initialize: function()
      {
	  AllStationsView.__super__.initialize.apply(this,arguments);	  
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
	  $(".list-group-item").removeClass("hide");
	  var x = this.collection.each(function(t){
	      var n = t.get("n").toLowerCase();
	      if( n.indexOf(name) == -1 )
		  $("#" + t.id).addClass("hide");
	  });
      },

    render: function()
      {
	  console.log("AllStationsView::render");
	  $(this.el).html(this.template(this.collection.toJSON()));
	  AllStationsView.__super__.render.call(this,arguments);
	  return this;
      }
});
