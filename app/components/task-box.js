import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Component.extend({
    classNames: ['col-sm-6'],
    table: null,
    
    init() {
      this._super(...arguments);
      this.set('table', new Table(this.get('columns'), this.get('content')));
      this.set('task', {});
    },
    
    isHabit: false,
    showModal: false,
    
    columns: Ember.computed(function() {
      return [{
        label: 'Task',
        valuePath: 'title',
        width: '150px'
      }];
    }),
    
    actions: {
      toggleModal(){
        this.set('task', {});
        this.toggleProperty('showModal');
      },
      saveTask(){
        let task = this.get('task') || {};
        let isHabit = !!this.get('isHabit');
        this.sendAction('addTask', task);
      }
    }
});
