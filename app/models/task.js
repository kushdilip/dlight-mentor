import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  desc: DS.attr('string'),
  date: DS.attr('string'),
  goal: DS.belongsTo('goal')
});
