import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  computed
} = Ember;

var attr = DS.attr;

var Validations = buildValidations({
  title: {
    description: 'Goal title',
    validators: [
      validator('presence', true),
    ]
  }
})

export default DS.Model.extend(Validations, {
  title: attr('string'),
  desc: attr('string')
});
