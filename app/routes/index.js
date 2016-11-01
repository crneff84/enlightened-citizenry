import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {//97211
      console.log("inside ziplookup" );
      console.log(params);
      this.transitionTo('results', params)
    }
  }
});
