import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        let hash = {
          tasks: this.store.findAll('task'),
          habits: this.store.findAll('habit'),
        }
        return Ember.RSVP.hash(hash);
    }
});