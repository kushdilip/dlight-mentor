export default Ember.Route.extend({
    model(){
      let user = this.get('session').get('uid');
      
      // return this.store.findAll('goal');
      return this.store.query('goal', { orderBy: 'user', equalTo: user })
    },
    
    setupController(){
      this._super(...arguments);
    },
    
    actions: {
      addHabit(){
        
      },
      
      addGoal(text){
        let user = this.get('session').get('uid');
        var newGoal = this.store.createRecord('goal', {
          user,
          title: text
        });
        newGoal.save();
      },
      
      addNote(text){
        
      }
    }
});