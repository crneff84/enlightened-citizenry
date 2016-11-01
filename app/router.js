import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  // lookup-form.js grabs zip from lookup-form.hbs
  // The zipLookup action in lookup-form.js flows up to index.js
  // ziplookup action in index.js transitions to 'results' and params.zip to redirect to the page with the information on it with  this.transitionTo('results', params.zip).
  // Results.js has the API call responsible for passing the params (or zipcode, which is received from the index.js transitionTo function) into the API call function that uses the params.zip to grab info from the API by zip code to get our data.
  this.route('results', {path: '/results/:zip'});
  //
  this.route('senatecommittees');
  this.route('bills');
  this.route('senatesubcommittees', {path: '/senatesubcommittees/:committee_id'});
});

export default Router;
