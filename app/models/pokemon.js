import DS from 'ember-data';
const { Model, attr } = DS;

export default class PokemonModel extends Model {
  @attr() name;
  @attr() sprites;
}
