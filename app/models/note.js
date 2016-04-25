import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  title: DS.attr('string'),
  date: DS.attr('string'),
  content: DS.attr('string'),
  goals: DS.hasMany('goal'),
  tasks: DS.hasMany('task'),
  habits: DS.hasMany('habit')
});
