AllStationsView = BaseView.extend({
    
    template: Handlebars.compile($("#all-stations-tpl").html()),

    initialize: function()
      {
	  
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
	  console.log("AllStationsView::render");
	  $(this.el).html(this.template(this.collection.toJSON()));
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
