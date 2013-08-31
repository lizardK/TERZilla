StationsCollection = Backbone.Collection.extend({
    url: "http://app.testsimon.fr/ws/index.php/stations",
    model: StationModel
});
