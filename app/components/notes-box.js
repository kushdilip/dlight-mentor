import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['notes-box'],
  classNameBindings: ['boxState'],
  boxState: 'close',
  isEdit: false,
  
  actions: {
    toggleBoxHeight(){
      let boxState = this.get('boxState');
      boxState = boxState === 'open' ? 'close': 'open';
      this.set('boxState', boxState);
    },
    
    editNote(){
      this.set('isEdit', true);
    },
    
    cancelNote(){
      this.set('isEdit', false);
    },
    
    saveNote(){
      let note = this.get('content');
      note.save().then((data) => {
        this.set('isEdit', false);
      }).catch(() => {
        console.error('saving note failed');
      });
    }
  }
});
