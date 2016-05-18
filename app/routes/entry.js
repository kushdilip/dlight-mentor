import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        let user = this.get('session').get('uid');
        let hash = {
          goals: this.store.findAll('goal')
        }
        return Ember.RSVP.hash(hash);
    },
    
    actions: {
        addGoal(title){
            if(title){
                var goal = this.store.createRecord('goal', { title });
                goal.save();
            }
        }
    }
});