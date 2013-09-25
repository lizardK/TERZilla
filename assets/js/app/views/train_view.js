TrainView = BaseView.extend({
    
    el: $("#render-view"),
    template: Handlebars.templates.train,
    m_map: null,
    m_date : new Date(),

    initialize: function(options)
      {
	  if(options && options.date)
	      this.m_date = options.date;
	  TrainView.__super__.initialize.call(this,arguments);
      },

     events : 
      {
	  "click .btn-back" : "on_btnBack_clicked",
	  "click #btn-add-alarm" : "on_btnAddAlarm_clicked"
      },

     on_btnBack_clicked : function(e)
      {
	  Application.back();
	  e.stopPropagation();
	  return false;
      },

    on_btnAddAlarm_clicked: function(e)
      {
	  var self = this;
	  //TODO : implement alarm
	  /*var alarm = {
	      date: new Date("September 1, 2013 14:04:00"),
	      respectTimezone: 'ignoreTimezone',
	      data: {
		  message: self.model.get("rn")
	      }
	  };
	  console.log(alarm.date.toString());
	  
	  var r = navigator.mozAlarms.add(alarm.date, alarm.respectTimezone, alarm.data);
	  
	  r.onsuccess = function () {
	      alert("L'alarme a été ajouté avec succès");
	  }
	  
	  r.onerror = function () {
	      console.log('add operation failed: ' + this.error);
	      alert("Une erreur s'est produite lors de la création de l'alarme : " + this.error.name);
	  }*/

	  return false;
      },

    render: function()
      {
	  console.log("TrainView::render");
	  this.model.set( "strdate", dateToString(this.m_date));
	  $(this.el).html(this.template(this.model.toJSON()));
	  TrainView.__super__.render.call(this,this);
	  return this;
      }
});
