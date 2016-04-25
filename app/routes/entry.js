import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model(){
      let user = this.get('session').get('uid');
      let hash = {
        // goals: this.store.query('goal', { auth: user })
        // tasks: this.store.query('goal', { orderBy: 'user', equalTo: user }),
        // habits: this.store.query('goal', { orderBy: 'user', equalTo: user }),
        // notes: this.store.query('goal', { orderBy: 'user', equalTo: user })
        notes: this.store.findAll('note')
      }
      // return this.store.findAll('goal');
      return Ember.RSVP.hash(hash);
    }
});