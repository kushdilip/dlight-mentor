import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    beforeModel: function() {
        let session = this.get('session');
        if (session && session.get('isAuthenticated')) {
            this.transitionTo('entry', 'today');
            // this.get("session").fetch().catch(function() {});
        }
    }
});