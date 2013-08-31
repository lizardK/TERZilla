/*
   Class: I18n
   Cette classe désigne le traducteur
*/
I18n = {
    /*
      Constructor: init
      Initialise le traducteur
    */

    m_databases : 
      {
	  "fr" : "assets/i18n/fr_FR.json",
	  "en" : "assets/i18n/en_EN.json",
	  "it" : "assets/i18n/it_IT.json"
      },

    m_database: null,
    m_previousLang: null,
   
    setLang: function(options)
      {
	  var self = this;
      	  this.m_previousLang = $("html").attr("lang");
      	  $("html").attr("lang",options.lang);
	  self.loadDatabase(options.success.call(this,arguments));
      },

    currentLanguage: function()
      {
	  return $("html").attr("lang");
      },

    currentDatabase: function()
      {
	  return this.m_database;
      },
      
    restore: function()
      {
      	$("html").attr("lang",this.m_previousLang);
      	this.loadDatabase();
      },

    observe: function()
      {
	  var self = this;
	  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
	  
	  if(MutationObserver != undefined && MutationObserver != null)
	    {
		var element = document.body, bubbles = false;
		
		var observer = new MutationObserver(function (mutations) {
		    mutations.forEach(attrModified);
		});
		observer.observe($("html").get(0), { attributes: true, subtree: bubbles });
		
		function attrModified(mutation) {
		    var name = mutation.attributeName;
		    var newValue = mutation.target.getAttribute(name);
		    self.loadDatabase();
		}
	    }
	  else
	    {
		self.loadDatabase();
	    }
      }, 

    loadDatabase: function(options)
      {
	  var self = this;
	  
	  $.ajax({
	      type: 'GET',
	      url: self.m_databases[self.currentLanguage()],
	      dataType: "json"
	  }).done(function(data){
	      self.m_database = data;

              if(Application != null)
		  Application.translate();

	      if(options && options.success)
		  options.success.call(this,arguments) ;
	  }).fail(function(d){
	      if(d.readyState == 0 && d.responseText !== "")
	        {
		    self.m_database = JSON.parse(d.responseText);
		    
		    if(options && options.success)
			options.success.call(this,arguments) ;
		}
	      else
	        {
		    if(options && options.error)
			options.error.call(this,arguments) ;
		}
	  });
      },

    tr: function(key)
      {
	  if(this.m_database === null || this.m_database[key] === undefined)
	      return key;

	  return this.m_database[key];
      }
    
};
