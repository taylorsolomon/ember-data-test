import Route from "@ember/routing/route";

export default class PokemonRoute extends Route {
  model({ id }) {
    return this.store.findRecord("pokemon", id);
  }
}
