import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    onEnter: function() {
        this.get('session').invalidate();
        this.transitionTo('index');
    }.on('activate')
});