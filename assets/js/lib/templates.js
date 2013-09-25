(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n        </button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n        <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_ABOUT\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"about-view\">\n  <p data-i18n-text=\"TXT_SOURCES_AVAILABLE\"></p> \n  <a href=\"https://github.com/lizardK/TERZilla\" target=\"_blank\">https://github.com/lizardK/TERZilla</a>\n  <p>Copyright (C) 2013 Cyril Biencourt.</p>\n  <p>Contact: Cyril Biencourt (<a href=\"mailto:c.biencourt@orange.fr\">c.biencourt@orange.fr</a>)</p>\n  <p>This file is part of TERZilla.</p>\n  <p>\n    TERZilla is free software: you can redistribute it and/or modify\n    it under the terms of the GNU Lesser General Public License as published by\n    the Free Software Foundation, either version 3 of the License, or\n    (at your option) any later version.\n  </p>\n\n  <p>\n    TERZilla is distributed in the hope that it will be useful,\n    but WITHOUT ANY WARRANTY; without even the implied warranty of\n    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n    GNU Lesser General Public License for more details.\n  </p>\n\n  <p>You should have received a copy of the GNU Lesser General Public License</p>\n  <p>along with TERZilla.  If not, see <a href=\"http://www.gnu.org/licenses/\" target=\"_blank\">http://www.gnu.org/licenses/</a></p>\n</div>\n";
  });
templates['all_stations'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#station/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n      <h4 class=\"list-group-item-heading\">";
  if (stack1 = helpers['n']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['n']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      <p class=\"list-group-item-text\">";
  if (stack1 = helpers.ct) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ct; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers['c']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['c']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </a>\n    ";
  return buffer;
  }

  buffer += "<div id=\"all-stations-view\"  >\n  <header>\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n          </button>\n	  <a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	  </a>\n          <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_ALL_STATIONS\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n	    <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	    <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	    <li><input type=\"search\" data-i18n-placeholder=\"TXT_SEARCH_STATION\" placeholder=\"\" class=\"form-control\"/></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n  </header>\n  \n  <div class=\"list-group\">\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['around_me'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n        </button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n        <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_AROUND_ME\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"around-me-view\" class=\"swiper-slide\">\n  <input type=\"number\" id=\"radius\" class=\"form-control\" placeholder=\"\" data-i18n-placeholder=\"PL_RADIUS\"/>\n  <div id=\"map-around-me\"></div>\n</div>\n";
  });
templates['favourites'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#station/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n      <h4 class=\"list-group-item-heading\">";
  if (stack1 = helpers['n']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['n']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      <p class=\"list-group-item-text\">";
  if (stack1 = helpers.ct) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ct; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers['c']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['c']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </a>\n    ";
  return buffer;
  }

  buffer += "<div id=\"favourites-view\">\n  <header>\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n          </button>\n	  <a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	    <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	  </a>\n          <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_FAVOURITES\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n	    <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	    <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	    <li><input type=\"search\" data-i18n-placeholder=\"TXT_SEARCH\" placeholder=\"\" class=\"form-control\"/></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n  </header>\n  \n  <div class=\"list-group\">\n    ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <a href=\"#favourites\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_FAVOURITES\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_FAVOURITES_DESC\"></p>\n    </a>\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n  <img id=\"logo\" src=\"assets/icons/TERZilla-128.png\" alt=\"TERZilla\" />\n  ";
  }

function program5(depth0,data) {
  
  
  return "\n  <img id=\"logo\" src=\"assets/icons/TERZilla-128.png\" alt=\"TERZilla\" style=\"bottom:40px\"/>\n  ";
  }

  buffer += "<div id=\"home-view\" class=\"swiper-slide\">\n  <header>\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n	  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	  </button>\n	  <a class=\"navbar-brand\" href=\"#\">\n	    TERZilla\n	  </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n	  <ul class=\"nav navbar-nav\">\n	    <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	    <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	  </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n  </header>\n  \n  <div class=\"list-group\">\n    <a href=\"#arround-me\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_AROUND_ME\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_AROUND_ME_DESC\"></p>\n    </a>\n    <a href=\"#all-stations\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_ALL_STATIONS\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_ALL_STATIONS_DESC\"></p>\n    </a>\n    <a href=\"#search\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_SEARCH_TRAIN\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_SEARCH_TRAIN_DESC\"></p>\n    </a>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.withFavourites, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.withFavourites, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  });
templates['home_new'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n    <a href=\"#favourites\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_FAVOURITES\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_FAVOURITES_DESC\"></p>\n    </a>\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n  <img id=\"logo\" src=\"assets/icons/TERZilla-128.png\" alt=\"TERZilla\" />\n  ";
  }

function program5(depth0,data) {
  
  
  return "\n  <img id=\"logo\" src=\"assets/icons/TERZilla-128.png\" alt=\"TERZilla\" style=\"bottom:40px\"/>\n  ";
  }

  buffer += "<div id=\"home-view\" class=\"swiper-slide\">\n  <header>\n    <div class=\"navbar navbar-inverse navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n	  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	    <span class=\"icon-bar\"></span>\n	  </button>\n	  <a class=\"navbar-brand\" href=\"#\">\n	    TERZilla\n	  </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n	  <ul class=\"nav navbar-nav\">\n	    <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	    <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	  </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </div>\n  </header>\n  <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6 ico\">\n      <a href=\"#arround-me\">\n	<img src=\"assets/icons/TERZilla-64.png\" />\n	<span data-i18n-text=\"TXT_AROUND_ME\"></span>\n      </a>\n    </div>\n    <div class=\"col-xs-6 ico\">\n      <a href=\"\">\n	<img src=\"assets/icons/TERZilla-64.png\" />\n	<span data-i18n-text=\"TXT_ALL_STATIONS\"></span>\n      </a>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-6 ico\">\n      <a href=\"\">\n	<img src=\"assets/icons/TERZilla-64.png\" />\n	<span data-i18n-text=\"TXT_SEARCH_TRAIN\"></span>\n      </a>\n    </div>\n    <div class=\"col-xs-6 ico\">\n      <a href=\"\">\n	<img src=\"assets/icons/TERZilla-64.png\" />\n	<span data-i18n-text=\"TXT_FAVOURITES\"></span>\n      </a>\n    </div>\n  </div>\n</div> \n \n  <!--<div class=\"list-group\">\n    <a href=\"#arround-me\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_AROUND_ME\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_AROUND_ME_DESC\"></p>\n    </a>\n    <a href=\"#all-stations\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_ALL_STATIONS\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_ALL_STATIONS_DESC\"></p>\n    </a>\n    <a href=\"#search\" class=\"list-group-item\">\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_SEARCH_TRAIN\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_SEARCH_TRAIN_DESC\"></p>\n    </a>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.withFavourites, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.withFavourites, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "-->\n</div>\n";
  return buffer;
  });
templates['map_popup'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"popup-tpl\" class=\"row\">\n  <img width=\"130\" src=\"assets/icons/station.svg\" class=\"col-md-4\"/>\n  <div id=\"popup-station-infos\" class=\"col-md-8\">\n    <p><strong>";
  if (stack1 = helpers['n']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['n']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</strong></p>\n    <p class=\"city\">";
  if (stack1 = helpers.ct) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ct; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (stack1 = helpers['c']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['c']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  </div>\n</div>\n";
  return buffer;
  });
templates['next_departue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#train/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.fromID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.fromID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/";
  if (stack1 = helpers.toID) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.toID; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\">\n      </span>\n      <p class=\"list-group-item-heading\">\n	<span data-i18n-text=\"TXT_THE\"></span> "
    + escapeExpression(((stack1 = depth1.strdate),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - ";
  if (stack2 = helpers.duration) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.duration; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n      </p>\n      <img src=\"assets/icons/route.svg\" class=\"pull-left\"/>\n      <p class=\"list-group-item-text\">\n	<strong>";
  if (stack2 = helpers.from) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.from; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong> \n	<span class=\"pull-right station-time\">";
  if (stack2 = helpers.st) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.st; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n      </p>\n      <p class=\"list-group-item-text\">\n	<strong>";
  if (stack2 = helpers.to) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.to; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong> \n	<span class=\"pull-right station-time\">";
  if (stack2 = helpers.et) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.et; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n      </p>\n    </a>\n    ";
  return buffer;
  }

  buffer += "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n        </button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n        <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_NEXT_DEPARTURES\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"next-departure-view\" >\n  <div id=\"list-group-next-departures\" class=\"list-group\">\n    ";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data};
  if (stack1 = helpers['t']) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0['t']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers['t']) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['search'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n	<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	</button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n	<a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_SEARCH\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n	<ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	</ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"search-view\">\n  <form action=\"#\" role=\"form\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n	<span data-i18n-text=\"TXT_DEPARTURE\"></span> - <span data-i18n-text=\"TXT_ARRIVAL\"></span>\n      </div>\n      <div class=\"panel-body\">\n	<input id=\"txt-departure\" data-provide=\"typeahead\"  data-i18n-placeholder=\"TXT_DEPARTURE\" type=\"text\" class=\"form-control\" />\n	<input id=\"txt-arrival\" data-provide=\"typeahead\" data-i18n-placeholder=\"TXT_ARRIVAL\" type=\"text\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" data-i18n-text=\"TXT_DATE\"></div>\n      <div class=\"panel-body\">\n	<input id=\"date-departure\" data-i18n-placeholder=\"TXT_THE\" type=\"date\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\" data-i18n-text=\"TXT_HOURS\"></div>\n      <div class=\"panel-body\">\n	<input id=\"time-departure\" data-i18n-placeholder=\"TXT_BETWEEN\" type=\"time\" class=\"form-control\" />\n	<input id=\"time-arrival\" data-i18n-placeholder=\"TXT_AND\" type=\"time\" class=\"form-control\" />\n      </div>\n    </div>\n    <input type=\"submit\" id=\"btn-valid\" class=\"btn btn-primary btn-large form-control\" data-i18n-value=\"TXT_SEARCH\" />\n  </form>\n</div>\n";
  });
templates['search_results'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#train/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/"
    + escapeExpression(((stack1 = depth1.fromID),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.toID),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span> \n      <p class=\"list-group-item-heading\">\n	<span data-i18n-text=\"TXT_THE\"></span> "
    + escapeExpression(((stack1 = depth1.strdate),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - ";
  if (stack2 = helpers.duration) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.duration; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n      </p>\n      <img src=\"assets/icons/route.svg\" class=\"pull-left\"/>\n      <p class=\"list-group-item-text\">\n	<strong>";
  if (stack2 = helpers.from) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.from; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong> \n	<span class=\"pull-right station-time\">";
  if (stack2 = helpers.st) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.st; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n      </p>\n      <p class=\"list-group-item-text\">\n	<strong>";
  if (stack2 = helpers.to) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.to; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</strong> \n	<span class=\"pull-right station-time\">";
  if (stack2 = helpers.et) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.et; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n      </p>\n    </a>\n    ";
  return buffer;
  }

  buffer += "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n	<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	</button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n	<a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_RESULTS\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n	<ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	</ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"search-results-view\">\n  <div id=\"list-group-next-departures\" class=\"list-group\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.trains, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>\n";
  return buffer;
  });
templates['station'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n	  <li>\n	    <a id=\"btn-remove-from-favourites\" href=\"#\" data-i18n-text=\"TXT_DELETE_FAVOURITES\"></a>\n	  </li>\n	  ";
  }

function program3(depth0,data) {
  
  
  return "\n	  <li>\n	    <a id=\"btn-add-to-favourites\" href=\"#\" data-i18n-text=\"TXT_ADD_FAVOURITES\"></a>\n	  </li>\n	  ";
  }

  buffer += "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n        </button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n        <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_STATION\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	  ";
  stack1 = helpers['if'].call(depth0, depth0.isFavourite, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"station-view\" >\n  <div id=\"station-view-map\"></div>\n  <div class=\"list-group\">\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#next-departures/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_NEXT_DEPARTURES\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_NEXT_DEPARTURES_DESC\"></p>\n    </a>\n    <a id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" href=\"#search\" class=\"list-group-item\">\n      <span class=\"glyphicon glyphicon-chevron-right pull-right\"></span>\n      <h4 class=\"list-group-item-heading\" data-i18n-text=\"TXT_SEARCH\"></h4>\n      <p class=\"list-group-item-text\" data-i18n-text=\"TXT_SEARCH_DESC\"></p>\n    </a>\n  </div>\n</div>\n";
  return buffer;
  });
templates['train'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li>\n	  <span class=\"station-time pull-right\">";
  if (stack1 = helpers['t']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['t']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n	  <span class=\"station-name\">";
  if (stack1 = helpers['n']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['n']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>  \n	</li>\n	";
  return buffer;
  }

  buffer += "<header>\n  <div class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n	  <span class=\"icon-bar\"></span>\n        </button>\n	<a class=\"btn navbar-btn pull-left btn-back\" href=\"#\">\n	  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n	</a>\n        <a class=\"navbar-brand\" href=\"#\" data-i18n-text=\"TXT_TRAVEL_DETAILS\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n	  <li><a href=\"#\" data-i18n-text=\"TXT_HOME\"></a></li>\n	  <li><a href=\"#about\" data-i18n-text=\"TXT_ABOUT\"></a></li>\n	  <!--<li><a href=\"#\" id=\"btn-add-alarm\" data-i18n-text=\"TXT_ADD_ALARM\"></a></li>-->\n        </ul>\n      </div><!--/.nav-collapse -->\n    </div>\n  </div>\n</header>\n<div id=\"train-view\" >\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <p><span data-i18n-text=\"TXT_LINE\"></span> : ";
  if (stack1 = helpers.rn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.rn; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n      <p>le ";
  if (stack1 = helpers.strdate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.strdate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - <span data-i18n-text=\"TXT_DURATION\"></span> : ";
  if (stack1 = helpers.duration) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.duration; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n    <div class=\"panel-body\">\n      <ul id=\"stops-list\"> \n	";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.stops) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.stops; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.stops) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n</div>\n";
  return buffer;
  });
})();