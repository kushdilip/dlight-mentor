export default Ember.Controller.extend({
  session: Ember.inject.service(),
  
  actions: {      
      addGoal(title){
          if(title){
              var goal = this.store.createRecord('goal', { title });
              goal.save();
          }
      },
      
      addTask(isHabit, task={}){
        let taskObj = this.store.createRecord('task', {
          title: task.title,
          desc: task.desc,
          startDate: task.date
        });
        taskObj.save();
      }
  }
});