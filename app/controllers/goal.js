import Ember from 'ember';

export default Ember.Controller.extend({
  isEdit: true,
  actions: {
    toggleEdit() {
      this.toggleProperty('isEdit');
    },
    
    saveGoal(){
      let content = this.get('content');
      content.save().then(res => {
        this.send('toggleEdit');
      });
    },
    
    revertGoal() {
      let content = this.get('content');
      content.rollbackAttributes();
      this.send('toggleEdit');
    }
  }
})