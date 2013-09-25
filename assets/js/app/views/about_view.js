AboutView = BaseView.extend({

    el: $("#render-view"),
    template: Handlebars.templates.about,
    
    initialize: function()
      {
	  AboutView.__super__.initialize.call(this,arguments);
      },

    events : 
      {
	  "click .btn-back" : "on_btnBack_clicked"
      },

    on_btnBack_clicked : function()
      {
	  Application.back();
	  return false;
      },

    render: function()
      {
	  console.log("AboutView::render");
	  $(this.el).html(this.template());
	  
	  AboutView.__super__.render.call(this,arguments);
	  return this;
      }
});
