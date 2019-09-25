import Route from "@ember/routing/route";

export default class ApplicationRoute extends Route {
  model() {
    return this.store.findRecord("pokedex", 2).then(data => {
      console.log(data);
      return data;
    });
  }
}
