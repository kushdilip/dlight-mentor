import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string'),
  title: DS.attr('string'),
  goal: DS.belongsTo('goal')
});
