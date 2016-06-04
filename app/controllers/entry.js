export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
      addTask(isHabit, task={}){
        let taskObj = this.store.createRecord('task', {
          title: task.title,
          desc: task.desc,
          startDate: task.date
        });
        taskObj.save();
      },
      
      saveNote(){
        
      },
      
      getNoteForDay(date){
        
      }
  }
});