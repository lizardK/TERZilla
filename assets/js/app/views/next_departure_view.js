NextDepartureView = BaseView.extend({
    
    template: Handlebars.templates.next_departue,

    initialize: function()
      {
	  NextDepartureView.__super__.initialize.call(this,arguments);
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
	  this.model.set("strdate",dateToString(new Date()));
	  $(this.el).html(this.template(this.model.toJSON()));
	  NextDepartureView.__super__.render.call(this,arguments);
	  return this;
      }
});
