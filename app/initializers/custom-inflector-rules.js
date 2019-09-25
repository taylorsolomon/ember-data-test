import Inflector from 'ember-inflector';

export function initialize(/* application */) {

  const inflector = Inflector.inflector;

  // Tell the inflector that e.g. the plural of "advice" is "advice"
  inflector.uncountable('pokemon');
}

export default {
  name: 'custom-inflector-rules',
  initialize
};
