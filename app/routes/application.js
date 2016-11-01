import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    toggleSidebar(){
       Ember.$('#sub-sidebar').sidebar("toggle");
    }
  }
});
