SearchResultsView = BaseView.extend({
   
    template: Handlebars.templates.search_results,
    m_date: new Date(),

    initialize: function(options)
      {
	  if(options && options.fromID)
	      this.fromID = options.fromID;

	  if(options && options.toID)
	      this.toID = options.toID;
	  
	  if(options && options.date)
	      this.m_date = options.date;

	  SearchResultsView.__super__.initialize.call(this,arguments);
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
	  console.log("SearchResultsView::render");
	  //console.log(JSON.stringify(this.collection.toJSON()));
	  $(this.el).html(this.template({
	      trains: this.collection.toJSON(), 
	      fromID: this.fromID, 
	      toID: this.toID,
	      strdate: dateToString(this.m_date)
	  }));
	  SearchResultsView.__super__.render.call(this,arguments);
	  return this;
      }
});
