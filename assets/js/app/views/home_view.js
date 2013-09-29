HomeView = BaseView.extend({
    
    template: Handlebars.templates.home_new,
    
    initialize: function()
      {
	  HomeView.__super__.initialize.call(this,arguments);
      },

    render: function()
      {
	  console.log("HomeView::render");
	  $(this.el).html(this.template({
	      withFavourites: Application.m_collections.favouritesCollection.length > 0
	  }));
	  HomeView.__super__.render.call(this,arguments);
	  return this;
      }
});
