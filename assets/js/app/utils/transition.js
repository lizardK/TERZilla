Transition = {
    slideLeft: function(options)
      {
	  var pos = $(options.el).css("position");
	  $(options.el).css("position",'absolute');
	  $(options.el).css("left",[$(window).width(), "px"].join(''));	 
	  $(options.el).animate({
	      left: '0px'
	  }, 300, function(){
	      $(options.el).css("position",pos);
	      if(options.callback)
		  options.callback();
	  });
      },

    slideRight: function(options)
      {
	  var pos = $(options.el).css("position");
	  $(options.el).css("position",'absolute');
	  $(options.el).css("left",["-", $(window).width(), "px"].join(''));
	  $(options.el).animate({
	      left: '0px'
	  }, 300,function(){
	      $(options.el).css("position",pos);
	      if(options.callback)
		  options.callback();
	  });
      },

    slideTop: function(options)
      {
	  var pos = $(options.el).css("position");
	  $(options.el).css("position",'absolute');
	  $(options.el).css("top",["-", $(window).height(), "px"].join(''));
	  $(options.el).animate({
	      top: '0px'
	  }, 300, function(){
	      $(options.el).css("position",pos);
	      if(options.callback)
		  options.callback();
	  });
      },

    slideBottom: function(options)
      {
	  var pos = $(options.el).css("position");
	  $(options.el).css("position",'absolute');
	  $(options.el).css("top", [$(window).height(), "px"].join(''));
	  if(options.withOverlay == true)
	    {
		var title = I18n.tr("BTN_CLOSE_MENU");
		$("body").append(['<a id="overlay" role="button" title="',title,'">&nbsp;</a>'].join(''));
	    }
	  $(options.el).animate({
	      top: options.height != undefined ? options.height : '0px'
	  }, 300,function(){
	      $(options.el).css("position",pos);
	      if(options.callback)
		  options.callback();
	  });
      }
};
