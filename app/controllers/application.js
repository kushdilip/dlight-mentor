export default Ember.Controller.extend({
  session: Ember.inject.service(),
  
  showModal: false,
  actions: {
    toggleModal(){
      this.set('goal', {});
      this.toggleProperty('showModal');
    },
    saveTask(){
      let goal = this.get('goal') || {};
      if (!goal.title) {
        return;
      }
      
      let goalRecord = this.store.createRecord('goal', goal);
      goalRecord.save().then(() => {
        this.send('toggleModal');
      })
      .catch((reason) => {
        console.error('adding goal failed', reason);
      });
    }
  }
});