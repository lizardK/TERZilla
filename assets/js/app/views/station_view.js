StationView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.templates.station,
    templatePopup: Handlebars.templates.map_popup,
    m_map: null,

    initialize: function()
      {
	  StationView.__super__.initialize.call(this,arguments);	  
      },

    events : 
      {
	  "click .btn-back"                   : "on_btnBack_clicked",
	  "click #btn-add-to-favourites"      : "on_btnAddToFavourites_clicked",
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
	  
	  var mapUrl = "http://{s}.tile.osm.org/{z}/{x}/{y}.png";
	  if(Application.getSettings().map == "satellite")
	      mapUrl = "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

	  L.tileLayer(mapUrl, {
	      attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	  }).addTo(this.m_map);
	  
	  var m = new L.marker([this.model.get("coords").lat, this.model.get("coords").lon]);
	  m.bindPopup(this.templatePopup(this.model.toJSON()));
	  m.addTo(this.m_map);
	  this.m_map.setView([this.model.get("coords").lat, this.model.get("coords").lon], 17);
	  $("a[href='http://leafletjs.com']",this.el).attr("target","_blank");
      },

    render: function()
      {
	  console.log("StationView::render");
	  $(this.el).html(this.template(this.model.toJSON()));
	  this.initMap();
	  StationView.__super__.render.call(this,arguments);
	  return this;
      }
});
