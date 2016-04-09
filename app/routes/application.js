import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", {
         provider: 'google'
       }).then(auth => {
        console.log(auth);
      },(error) => {
        this.controller.set('error', 'Could not sign you in: '+error.message);
      });
    },

    logout: function() {
      this.get("session").close();
    }
  }
});