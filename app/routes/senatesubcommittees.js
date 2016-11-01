import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  // params come from the router, which were given to the router from the argument passed in the transitionTo function in the routeSubcommittees action in senatecommittees.js
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=true&parent_committee_id=' + params.committee_id + '&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
});
