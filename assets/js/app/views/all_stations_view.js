AllStationsView = BaseView.extend({

  template: Handlebars.templates.all_stations,
  templateFragment : Handlebars.templates.station_list_item,
  m_itemsCount : 20,
  m_isFiltered : false,

  initialize: function()
    {
      var self = this;
      AllStationsView.__super__.initialize.apply(this,arguments);
    },

  events :
    {
      "input input[type=search]" : "on_search_changed",
      "click .btn-back" : "on_btnBack_clicked",
      "click #btn-search-reset" : "on_btnSearchReset_clicked"
    },

  on_btnBack_clicked : function()
    {
      Application.back();
      return false;
    },

  on_search_changed : function(e)
    {
      var name = $(e.currentTarget).val().toLowerCase();
      if(!name || name === "")
        {
	  $(".list-group").html(this.templateFragment(new StationsCollection(this.collection.first(this.m_itemsCount)).toJSON()));
	  this.m_isFiltered = false;
	  return;
	}
      var f = this.collection.filter(function(t){
	        return  t.get("n").toLowerCase().indexOf(name) !== -1 ;
	      });
      $(".list-group").html(this.templateFragment(new StationsCollection(f).toJSON()));
      this.m_isFiltered = true;
    },

  on_btnSearchReset_clicked : function()
    {
      $("input[type=search]", this.el).val("");
      $("input[type=search]", this.el).trigger("input");
    },

  render: function()
    {
      console.log("AllStationsView::render");
      var self = this;
      $(this.el).html(this.template((new StationsCollection(this.collection.first(this.m_itemsCount)).toJSON())));

      var offset = $('.list-group-item:last').offset();
      var n = this.m_itemsCount;
      $(window).on("scroll",function(){
	if((offset.top-$(window).height() <= $(window).scrollTop())
	 &&!self.m_isFiltered && n < self.collection.length){
          var docFragment = document.createDocumentFragment();
          var fragmentsCollection = new StationsCollection(self.collection.slice(n,n+self.m_itemsCount));
          $(docFragment).append(self.templateFragment(fragmentsCollection.toJSON()));
          $(".list-group").append(docFragment);
	  n += self.m_itemsCount;
	  offset = $('.list-group-item:last').offset();
	}
      });

      AllStationsView.__super__.render.call(this,arguments);
      return this;
    },

  close: function()
    {
      $(window).off("scroll");
      AllStationsView.__super__.close.call(this,arguments);
    }
});
