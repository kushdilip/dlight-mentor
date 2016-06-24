import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    onEnter: function() {
        let session = this.get('session');
        if (session && session.get('isAuthenticated')) {
          this.get('session').invalidate();  
        }
        this.transitionTo('index');
    }.on('activate')
});