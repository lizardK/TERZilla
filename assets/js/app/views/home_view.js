HomeView = BaseView.extend({
    
    template: Handlebars.compile($("#home-tpl").html()),
    
    initialize: function()
      {
	  
      },

    render: function()
      {
	  console.log("HomeView::render");
	  $(this.el).html(this.template({
	      withFavourites: Application.m_collections.favouritesCollection.length > 0
	  }));
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
