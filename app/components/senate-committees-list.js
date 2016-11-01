import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    routeSubcommittees(committee) {
      this.sendAction('routeSubcommittees', committee);
    },
  }
});
