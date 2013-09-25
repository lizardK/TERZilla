AroundMeView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.templates.around_me,
    templatePopup: Handlebars.templates.map_popup,
    m_map: null,
    m_coords : {},
    m_markers : new L.MarkerClusterGroup(),
    m_circleRadius :null,

    initialize: function()
      {
	  AroundMeView.__super__.initialize.call(this,arguments);	  
      },

    events : 
      {
	  "input input[type=number]" : "on_radius_changed",
	  "click .btn-back" : "on_btnBack_clicked"
      },

    on_btnBack_clicked : function()
      {
	  Application.back();
	  return false;
      },

    on_radius_changed : function(e)
      {
	  var self = this;
	  var radius = $(e.currentTarget).val();
	  if(radius == "")
	      return false;
	  var WS_URL = "http://app.testsimon.fr/ws/index.php";
	  var url = [WS_URL,"aroundme", this.m_coords.latitude, this.m_coords.longitude , radius].join("/")
	  console.log(url);
	  var c = new StationsCollection();
	  c.url = url;
	  c.fetch({
	      success: function(){	
		  if(self.m_circleRadius)
		      self.m_map.removeLayer(self.m_circleRadius);
		  self.m_circleRadius = new L.circle(new L.LatLng(self.m_coords.latitude, self.m_coords.longitude), radius * 1000).addTo(self.m_map);
		
		  self.m_markers.clearLayers();
		  c.each(function(s){
		      var m = L.marker(new L.LatLng(s.get("coords").lat,s.get("coords").lon));
		      m.bindPopup(self.templatePopup(s.toJSON()));
		      m.addTo(self.m_map);
		      
		      self.m_markers.addLayer(m);

		      
		  });
		  self.m_map.addLayer(self.m_markers);
		  alert(c.length);
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
      },

    initMap: function()
      {
	  var self = this;

	  this.m_map = L.map('map-around-me');
	  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	      attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors'
	  }).addTo(this.m_map);
	  
	  this.m_map.on('locationfound', function(e){
	      var radius = e.accuracy / 2;
	    
	      self.m_coords.latitude = e.latlng.lat;
	      self.m_coords.longitude = e.latlng.lng;
	      L.marker(e.latlng).addTo(self.m_map)
		  .bindPopup("Me");

	      $("a[href='http://leafletjs.com']",self.el).attr("target","_blank");
	  });
	  
	  this.m_map.on('locationerror', function(e) {
	      alert(e.message);
	  });
	  
	  this.m_map.locate({setView: true, maxZoom: 16});
      },

    render: function()
      {
	  console.log("AroundMeView::render");
	  $(this.el).html(this.template());
	  this.initMap();
	  AroundMeView.__super__.render.call(this,arguments);
	  return this;
      }
});
