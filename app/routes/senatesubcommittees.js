import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(parentCommitteeId) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&subcommittee=true&parent_committee_id=' +parentCommitteeId+ '&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
});
