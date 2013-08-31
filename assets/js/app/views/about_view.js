AboutView = BaseView.extend({

    el: $("#render-view"),
    template: Handlebars.compile($("#about-tpl").html()),
    
    initialize: function()
      {
	  
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
	  
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
