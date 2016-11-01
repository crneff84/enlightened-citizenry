import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  // params from nowhere???
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=false&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  actions: {
    routeSubcommittees(params) {
      console.log("senatecommittees route");
      console.log(params);
      this.transitionTo('senatesubcommittees', params);
    },
  }
});
