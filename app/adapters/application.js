// import FirebaseAdapter from 'emberfire/adapters/firebase';

// export default FirebaseAdapter.extend({
//   firebase: Ember.inject.service()  
// });

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:4000/api',
  authorizer: 'authorizer:token'
});