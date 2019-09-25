import DS from "ember-data";
const { RESTAdapter } = DS;

export default class ApplicationAdapter extends RESTAdapter {
  host = "https://pokeapi.co";
  namespace = "api/v2";

}
