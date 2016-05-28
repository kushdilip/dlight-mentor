import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    signIn() {
      var session = this.get('session');
      var that = this;
			this.get('torii')
				.open('google-oauth2-bearer')
				.then(function(googleAuth){
					var googleToken = googleAuth.authorizationToken.access_token;
					console.log('Google authentication successful.');

					session
						.authenticate('authenticator:jwt', { password: googleToken} )
						.then(function(){
							console.log('custom token authentication successful!');
              that.transitionTo('entry', 'today');
						}, function (error) {
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