NextDepartureView = BaseView.extend({
    
    template: Handlebars.compile($("#next-departure-tpl").html()),

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
	  console.log("NextDepartureView::render");
	  //console.log(this.model.toJSON());
	  this.model.set("strdate",dateToString(new Date()));
	  $(this.el).html(this.template(this.model.toJSON()));
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
