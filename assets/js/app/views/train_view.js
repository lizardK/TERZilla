TrainView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.compile($("#train-tpl").html()),
    m_map: null,

    initialize: function()
      {
	  
      },

     events : 
      {
	  "click .btn-back" : "on_btnBack_clicked"
      },

     on_btnBack_clicked : function(e)
      {
	  Application.back();
	  e.stopPropagation();
	  return false;
      },

    render: function()
      {
	  console.log("TrainView::render");
	  $(this.el).html(this.template({
	      t :this.model.toJSON()[0],
	      strdate: dateToString(new Date())
	  }));
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
