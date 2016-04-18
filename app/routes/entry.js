import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    model(){
      let user = this.get('session').get('uid');
      let hash = {
        goals: this.store.query('goal', { auth: user })
        // tasks: this.store.query('goal', { orderBy: 'user', equalTo: user }),
        // habits: this.store.query('goal', { orderBy: 'user', equalTo: user }),
        // notes: this.store.query('goal', { orderBy: 'user', equalTo: user })
      }
      // return this.store.findAll('goal');
      return Ember.RSVP.hash(hash);
    }
});