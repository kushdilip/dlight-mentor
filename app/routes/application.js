import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  model(){
    let session = this.get('session');
    if (session && session.get('isAuthenticated')) {
      return this.store.findAll('goal');
    }
  },
    
  setupController() {
    this._super(...arguments);
  },
  
  actions: {
    signIn() {
      var session = this.get('session');
      var that = this;
			this.get('torii')
				.open('google-oauth2-bearer')
				.then((googleAuth) => {
					var googleToken = googleAuth.authorizationToken.access_token;
					console.log('Google authentication successful.');

					session
						.authenticate('authenticator:jwt', { password: googleToken} )
						.then(() => {
							console.log('custom token authentication successful!');
              // that.transitionTo('application');
              this.setupController(this.get('controller'), this.model());
              this.transitionTo('entry', 'today');
						}, (error) => {
							console.log('custom token authentication failed!', error.message);
						});

				}, function (error) {
					console.error('Google auth failed: ', error.message);
				});
    },
    
    // signIn: function(provider) {
    //   this.get("session").open("firebase", {
    //      provider: 'google'
    //    }).then(auth => {
    //     console.log(auth);
    //     this.transitionTo('entry', 'today');
    //   },(error) => {
    //     this.controller.set('error', 'Could not sign you in: '+error.message);
    //   });
    // },

    logout: function() {
      // this.get("session").close();
      this.get('session').invalidate();
    }
  }
});