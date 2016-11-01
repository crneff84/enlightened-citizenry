import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  // what?
  model: function(params) {

    console.log("results.js" );
    console.log(params);
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=' +key+ '&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
