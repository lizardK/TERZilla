StationView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.compile($("#station-tpl").html()),
    templatePopup: Handlebars.compile($("#map-popup-tpl").html()),
    m_map: null,

    initialize: function()
      {
	  
      },

    events : {
	"click .btn-back" : "on_btnBack_clicked",
	"click #btn-add-to-favourites" : "on_btnAddToFavourites_clicked",
	"click #btn-remove-from-favourites" : "on_btnRemoveFromFavourites_clicked"
    },

    on_btnBack_clicked : function()
      {
	  Application.back();
	  return false;
      },

    on_btnAddToFavourites_clicked : function(e)
      {
	  var self = this;
	  this.model.set("isFavourite",true);
	  Application.m_collections.favouritesCollection.add(this.model);
	  
	  Application.m_collections.favouritesCollection.save({
	      success: function(){
		  alert("La gare " + self.model.get("n") + " a bien été ajoutée aux favoris");
		  self.render();
	      },
	      error: function(){
		  alert("ERR_ADDING_FAVOURITES");
	      }
	  });
	  e.stopPropagation();
	  return false;
      },

    on_btnRemoveFromFavourites_clicked : function(e)
      {
	  var self = this;
	  this.model.unset("isFavourite");
	  Application.m_collections.favouritesCollection.remove(this.model.id);
	  
	  Application.m_collections.favouritesCollection.save({
	      success: function(){
		  self.render();
		  alert("La gare " + self.model.get("n") + " a bien été supprimée des favoris");
	      },
	      error: function(){
		  alert("ERR_REMOVING_FAVOURITES");
	      }
	  });
	  e.stopPropagation();
	  return false;
      },

    initMap: function()
      {
	  this.m_map = L.map('station-view-map');
	  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(this.m_map);
	  
	  this.m_map.setView([this.model.get("coords").lat, this.model.get("coords").lon], 13);
	  var m = new L.marker([this.model.get("coords").lat, this.model.get("coords").lon]);
	  m.bindPopup(this.templatePopup(this.model.toJSON()));
	  m.addTo(this.m_map);
	  m.openPopup();
      },

    render: function()
      {
	  console.log("StationView::render");
	  $(this.el).html(this.template(this.model.toJSON()));
	  this.initMap();
	  this.constructor.__super__.render.apply(this);
	  return this;
      }
});
