BaseView = Backbone.View.extend({
    el: $("#render-view"),
    m_localizable: ["text","alt","title","html","placeholder","value"],
    m_swiper : null,

    initialize: function()
      {
      },
    
    events : 
      {
	  
      }, 
 
    translate: function()
      {
	  var self = this;
	  _(this.m_localizable).each(function(k) {
	      var s = ["data-i18n-", k].join('');
	      var sArgs = ["data-i18n-", k, "-args"].join();
	      self.$el.find($(["*[", s ,"]"].join(''))).each(function(){
		  var val = I18n.tr($(this).attr(s));
		  if($(this).attr(sArgs))
	            {
			var args = $(this).attr(sArgs).split("|");
			_(args).each(function(v){
			    val = val.replace("%s", v);
			}); 
		    }
		  switch(k){
		  case "text":
		      $(this).text(val);
		      break;
		  case "html":
		      $(this).html(val);
		      break;
		  default:
		      $(this).attr(k, val);
		  }
	      });
	  });
      },

    render: function()
      {
	  var self = this;
	  this.translate();

	  switch(Application.transitionDirection)
	    {
	    case  "right":
		Transition.slideRight({el:this.$el});
		break;
	    case  "top":
		Transition.slideTop({el:this.$el});
		break;
	    case  "bottom":
		Transition.slideBottom({el:this.$el});
		break;
	    default :
		Transition.slideLeft({el:this.$el});
		break;
	    }
	  Application.transitionDirection = "left";
	  return this;
      },

    hasOverflowScrolling: function() 
      {
	  var prefixes = ['webkit', 'moz', 'o', 'ms'];
	  var div = document.createElement('div');
	  var body = document.getElementsByTagName('body')[0];
	  var hasIt = false;
	  
	  body.appendChild(div);
	  
	  for (var i = 0; i < prefixes.length; i++) {
              var prefix = prefixes[i];
              div.style[prefix + 'OverflowScrolling'] = 'touch';
	  }
	  
	  // And the non-prefixed property
	  div.style.overflowScrolling = 'touch';
	  
	  // Now check the properties
	  var computedStyle = window.getComputedStyle(div);
	  
	  // First non-prefixed
	  hasIt = !!computedStyle.overflowScrolling;
	  
	  // Now prefixed...
	  for (var i = 0; i < prefixes.length; i++) {
              var prefix = prefixes[i];
              if (!!computedStyle[prefix + 'OverflowScrolling']) {
		  hasIt = true;
		  break;
              }
	  }
	  
	  // Cleanup old div elements
	  div.parentNode.removeChild(div);
	  
	  return hasIt;
      },
    
    close: function()
      {
	  $(window).off("resize");
	  $(this.el).find("*").off();
	  $(this.el).find("*").remove();
	  this.unbind();
	  this.off();
	  this.undelegateEvents();
	  this.events = {};
	  return this;
      }
});
