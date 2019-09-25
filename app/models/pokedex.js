import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class PokedexModel extends Model {
  @attr() name;
  @attr() pokemonEntries;

  @hasMany('pokemon') pokemon;
}
