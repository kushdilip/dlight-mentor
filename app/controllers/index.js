export default Ember.Controller.extend({
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
    
    addNote(){
      let goals = this.get('content.goals').mapBy('title');
      let note = goals.join('/n');
      this.set('note', note);
    },
    
    clearNote(){
      this.set('note', null);
    },
    
    saveNote(){
      let note = this.get('note');
      let timestamp = new Date().getTime();
      let user = this.get('session').get('uid');
      
      let newNote = this.store.createRecord('note', {
        user,
        title: note,
        date: new Date().getTime(),
        updated_at: new Date().getTime()
      });
      
      newNote.save();
    }
  }
})