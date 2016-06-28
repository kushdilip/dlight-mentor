import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('entry', {path: ':date'});
  this.route('logout', {path: '/logout'});
  this.route('goal', {path: '/goals/:id'});
});

export default Router;
