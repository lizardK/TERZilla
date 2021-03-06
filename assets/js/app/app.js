App = Backbone.Router.extend({
  m_views : {},
  m_models : {},
  m_collections : {},
  m_online: false,
  transitionDirection: "left",
  routes:
    {
      ""                    :   "home",
      "about"               :   "about",
      "settings"            :   "settings",
      "arround-me"          :   "arroundMe",
      "all-stations"        :   "allStations",
      "search"              :   "search",
      "favourites"          :   "favourites",
      "station/:id"         :   "station",
      "next-departures/:id" :   "nextDepartures",
      "train/:id/:from/:to" :   "train"
    },

  initialize: function()
    {

    },

  getSettings : function()
    {
      var settings = JSON.parse(localStorage.getItem("parameters")) || {};
      $("body")
      .removeClass("dark")
      .removeClass("light")
      .addClass(settings.theme);

      I18n.setLang({
	lang :settings.lang,
	success : function(){}
      });
      return settings;
    },

  closeAllViews: function()
    {
      _(this.m_views).each(function(v){
	if(v != null && v!= undefined && v.close)
	  v.close();
      });
    },

  translate: function()
    {
      _(this.m_views).each(function(v){
	if(v != null && v.translate)
	  v.translate();
      });
    },

  back: function()
    {
      this.transitionDirection = "right";
      window.history.back();
    },

  home: function()
    {
      this.closeAllViews();
      this.m_views.homeView = new HomeView();
      this.m_views.homeView.render();
    },

  about: function()
    {
      this.closeAllViews();
      this.m_views.aboutView = new AboutView();
      this.m_views.aboutView.render();
    },

  settings: function()
    {
      this.closeAllViews();
      this.m_views.settingsView = new SettingsView();
      this.m_views.settingsView.render();
    },

  arroundMe: function()
    {
      this.closeAllViews();
      this.m_views.aroundMeView = new AroundMeView();
      this.m_views.aroundMeView.render();
    },

  allStations: function()
    {
      this.closeAllViews();
      this.m_views.allStationsView = new AllStationsView({
	collection: this.m_collections.stationsCollection
      });
      this.m_views.allStationsView.render();
    },

  search: function()
    {
      this.closeAllViews();
      this.m_views.searchView = new SearchView({
	collection: this.m_collections.stationsCollection
      });
      this.m_views.searchView.render();
    },

  favourites: function()
    {
      this.closeAllViews();
      this.m_views.favouritesStationsView = new FavouritesView({
	collection: this.m_collections.favouritesCollection
      });
      this.m_views.favouritesStationsView.render();
    },

  station: function(id)
    {
      this.closeAllViews();
      var stationModel = this.m_collections.favouritesCollection.get(id) || this.m_collections.stationsCollection.get(id);
      this.m_views.stationView = new StationView({
	model : stationModel
      });
      this.m_views.stationView.render();
    },

  nextDepartures: function(id)
    {
      var self = this;

      var modelNextDepartures = new Backbone.Model();
      modelNextDepartures.url = ["http://app.testsimon.fr/ws/index.php/trainsOfDay", id , 0].join("/");
      modelNextDepartures.fetch({
	success: function(){
	  if(!modelNextDepartures.get("t") || modelNextDepartures.get("t").length <= 0)
	    {
	      alert(I18n.tr("TXT_NO_RESULTS"));
	      history.back();
	      return;
	    }
	  self.closeAllViews();
	  self.m_views.nextDepartureView = new NextDepartureView({
	    model : modelNextDepartures
	  });

	  self.m_views.nextDepartureView.render();
	},
	error: function(err,xhrerr){
	  console.log(xhrerr);
	},
	crossDomain: true,
	xhr : function(){
	  return new XMLHttpRequest({mozSystem: true});
	}
      });
    },

  train: function(id,from,to)
    {
      var self = this;
      this.m_models.trainModel = new TrainModel({
	id: id,
	from: from,
	to: to
      });

      this.m_models.trainModel.fetch({
	success: function(m){
	  self.closeAllViews();
	  self.m_views.trainView = new TrainView({
	    model : self.m_models.trainModel
	  });

	  self.m_views.trainView.render();
	},
	error: function(err,xhrerr){
	  console.log(xhrerr);
	},
	crossDomain: true,
	xhr : function(){
	  return new XMLHttpRequest({mozSystem: true});
	}
      });
    },

  start: function(options)
    {
      var self = this;
      I18n.loadDatabase({
	success: function() {
	  self.m_collections.stationsCollection = new StationsCollection();
	  self.m_collections.favouritesCollection = new FavouritesCollection();
	  $.when(
	    self.m_collections.stationsCollection.fetch({
	      crossDomain: true,
	      xhr : function(){
		return new XMLHttpRequest({mozSystem: true});
	      }
	    }),
	    self.m_collections.favouritesCollection.fetch()
	  ).done(function(){
	    self.getSettings();
	    if(!localStorage.getItem("stations"))
	      localStorage.setItem("stations",JSON.stringify(self.m_collections.stationsCollection.toJSON()));
	    if(options && options.success)
	      options.success.call(self);
	  }).fail(function(){
	    if(options && options.error)
	      options.error.call(self);
	  });
	},
	error: function() {
	  if(options && options.error)
	    options.error.call(this);
	}
      });
    }
});
