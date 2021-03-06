SearchView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.templates.search,

    initialize: function()
      {
	  SearchView.__super__.initialize.call(this,arguments);
      },

    events : 
      {
	  "submit form" : "on_form_submitted",
	  "click .btn-back" : "on_btnBack_clicked"
      },

    on_btnBack_clicked : function()
      {
	  Application.back();
	  return false;
      },

     on_form_submitted: function(e)
      {
	  var d = $("#date-departure").val();
	  d = d.replace(/\-/g,'|');

	  var from = this.collection.find(function(s){
	      return s.get("n") == $("#txt-departure").val();
	  });

	  var to = this.collection.find(function(s){
	      return s.get("n") == $("#txt-arrival").val();
	  });
	  
	  var hStart = $("#time-departure").val();
	  hStart = hStart.replace(/\:/g,'|');

	  var hEnd = $("#time-arrival").val();
	  hEnd = hEnd.replace(/\:/g,'|');
	 
	  var collectionResult = new Backbone.Collection();
	  collectionResult.url = [
	      "http://app.testsimon.fr/ws/index.php/find", 
	      from.id, 
	      to.id, 
	      d , 
	      hStart, 
	      hEnd
	  ].join("/");

	  collectionResult.fetch({
	      success: function(){
		  if(collectionResult.length <= 0)
		    {
			alert(I18n.tr("TXT_NO_RESULTS"));
			return;
		    }
		  
		  var searchResultsView = new SearchResultsView({
		      collection : collectionResult,
		      fromID: from.id,
		      toID : to.id,
		      date: new Date($("#date-departure").val())
		  });

		  searchResultsView.render();
	      },
	      error: function(err,xhrerr){
		  console.log(xhrerr);
		  alert("Error");
	      },
	      crossDomain: true,
	      xhr : function(){
		  return new XMLHttpRequest({mozSystem: true});
	      }
	  });
	  e.stopPropagation();
	  return false;
      },

    render: function()
      {
	  var self = this;
	  console.log("SearchView::render");
	  $(this.el).html(this.template(this.collection.toJSON()));
	  $('input[data-provide="typeahead"]').typeahead({
	      name : "stations",
	      local : self.collection.pluck('n')
	  });
	  SearchView.__super__.render.call(this,arguments);
	  return this;
      }
});
